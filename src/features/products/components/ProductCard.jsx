import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useDispatch  , useSelector} from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import { Link } from "react-router-dom"
import { toggleWishlist } from "@/features/favorites/wishlistslice"
import HeartBtn from "@/features/favorites/components/HeartBtn"


function clamp(text, n = 90) {
    if (!text) return ""
    return text.length > n ? text.slice(0, n).trim() + "..." : text
}

export default function ProductCard({ product }){
   const dispatch = useDispatch()

  const wishlist = useSelector((state) => state.wishlist)

  const isActive = wishlist.some((item) => item.id === product.id)

   return (
   <Card className="overFlow-hidden" >
    <div className="relative">
     <Link to={`/product/${product.id}`}>
     <img 
       src={product.image}
       alt={product.title}
       className="h-44 w-44 object-contain mix-blend-multiply"
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
      }}
    />
  </div>

</div>

      <CardContent className="p-5">

        <div className="flex items-start justify-between gap-3">
         <Link to={`/product/${product.id}`}>
          <h3>
            {clamp(product.title, 60)}
            <span>
              ${product.price.toFixed(2)}
            </span>
          </h3>
         </Link>
        </div>

        <p className="mt-2 text-xs font-medium text-slate-600">
          {clamp(product.description, 110)}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs font-bold text-slate-500">
            <span className="capitalize">{product.category}</span>
            <span className="mx-2">•</span>
            <span>⭐ {product.rating?. rate ?? 0}</span>
          </div>

          <Button 
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </Button>
        </div>

      </CardContent>
    </Card>
   )
}