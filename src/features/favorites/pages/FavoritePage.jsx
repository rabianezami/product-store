import AppLayout from "@/components/layout/AppLayout";
import ProductCard from "@/features/products/components/ProductCard";
import { useSelector } from "react-redux";

export default function FavoritePage() {
    const wishlist = useSelector((state) => state.wishlist || [])

    return (
      <AppLayout title="Favorites">
        {wishlist.length === 0 ? (
            <p className="text-center text-slate-500">
               No favorite products yet
            </p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {wishlist.map((product) => (
                <ProductCard  key={product} product={product}/>
              ))}
            </div>
        )}
      </AppLayout>
    )
}