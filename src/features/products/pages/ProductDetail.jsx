import { useParams } from "react-router-dom"
import useProductDetail from "../api/useProductDetail"
import LoadingState from "@/components/common/LoadingState"
import ErrorState from "@/components/common/ErrorState"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import AppLayout from "@/components/layout/AppLayout"

export default function ProductDetaile() {
    const { id } = useParams()

    const { data: product, isLoading, isError } = useProductDetail(id)
    const dispatch = useDispatch()

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState />

    return (
      <AppLayout title="Product Details">
        <Card className="p-6">
          <CardContent>
              {/* Image */}
            <div className="grid md:grid-cols-2 gap-10">
             <div className="flex justify-center p-4">
               <img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain"
                />
             </div>

              {/* Info */}
             <div className="space-y-4">
               <h1 className="text-2xl font-bold leading-sung -mb-1">
                  {product.title}
               </h1>

               <p className="text-sm text-slate-500 capitalize">
                 {product.category}
               </p>

               <p className="text-lg font-bold text-green-600">
                 ${product.price}
               </p>

               <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div>
                 ⭐ {product.rating?.rate}
              </div>   

              <div>
                <Button 
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Card
                </Button>
              </div>

             </div>
            </div>
          </CardContent>
        </Card>
       </AppLayout>
    )
}