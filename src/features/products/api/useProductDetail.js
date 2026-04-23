import { useQuery } from "@tanstack/react-query"
import { fetchProductsById } from "./productsAPI"

export default function useProductDetail(id) {
    return useQuery({
        queryKey: ["product, id"],
        queryFn:() => fetchProductsById(id),
        enabled: !!id,
    })
}