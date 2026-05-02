import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import { Link, useNavigate } from "react-router-dom"
import { toggleWishlist } from "@/features/favorites/wishlistslice"
import HeartBtn from "@/features/favorites/components/HeartBtn"
import { toast } from "sonner"
import ViewToggle from "@/features/settings/components/ViewToggle"


function clamp(text, n = 90) {
  if (!text) return ""
  return text.length > n ? text.slice(0, n).trim() + "..." : text
}

export default function ProductCard({ product, view}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const wishlist = useSelector((state) => state.wishlist)

  const isActive = wishlist.some((item) => item.id === product.id)

  const isList = view === "list"

  return (
    <Card 
      className={`overFlow-hidden bg-card text-card-foreground w-full ${
       isList ? "flex flex-row items-start gap-4 p-4" : ""
     }`} 
    >
      <div className={`relative p-4 flex justify-center items-center  bg-white dark:bg-slate-200/90 ${
        isList ? "w-28 h-28 flex-shrink-0" : "p-4"
       }`}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className={isList ? "h-44 w-44 object-contain " : "h-44 w-44 object-contain"}
            loading="lazy"
          />
        </Link>

        <div className="absolute top-2 right-2">
          <HeartBtn
            active={isActive}
            variant="card"
            onClick={(e) => {
              e.stopPropagation()
              dispatch(toggleWishlist(product))
              if (!isActive) {
                toast.success("Added to favorites!")
              }
            }}
          />
        </div>

      </div>

      {/* CONTENT */}
      <CardContent className={isList ? "flex-1 p-2" : "p-5"}>

        <div className="flex items-start justify-between gap-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-sm text-foreground">
              {clamp(product.title, 60)}
              <span className="block text-primary font-bold mt-1">
                ${product.price.toFixed(2)}
              </span>
            </h3>
          </Link>
        </div>

        <p className="mt-2 text-xs font-medium text-muted-foreground">
          {clamp(product.description, 110)}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs font-bold text-muted-foreground/80">
            <span className="capitalize">{product.category}</span>
            <span className="mx-2">•</span>
            <span>⭐ {product.rating?.rate ?? 0}</span>
          </div>

          <Button
            onClick={() => {
              if (!user) {
                navigate("/login", { state: {from: location.pathname} })
                toast.error("Please login first")
                return
              }

              dispatch(addToCart(product))
              toast.success("Added to cart")
            }}
            className="hover:scale-105 transition-transform"
          >
            Add to cart
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}