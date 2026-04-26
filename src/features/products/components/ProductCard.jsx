import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"


function clamp(text, n = 90) {
    if (!text) return ""
    return text.length > n ? text.slice(0, n).trim() + "..." : text
}

export default function ProductCard({ product }){
   const dispatch = useDispatch()

   return (
    <Card className="overFlow-hidden" >
      <div>
        <img 
         src={product.image}
         alt={product.title}
         className="h-44 w-44 object-contain mix-blend-multiply"
         loading="lazy"
        />
      </div>

      <CardContent className="p-5">

        <div className="flex items-start justify-between gap-3">
          <h3>
            {clamp(product.title, 60)}
            <span>
              ${product.price.toFixed(2)}
            </span>
          </h3>
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