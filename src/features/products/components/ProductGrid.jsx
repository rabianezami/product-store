import { View } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products= [], view }) {
   return (
      <div className={
         view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" 
          : "flex flex-col gap-4" 
         }
      >
        {products.map((p) => (
            <ProductCard key={p.id} product={p} view={view}/>
            
        ))}
      </div>
   )
}