import { useQuery } from "@tanstack/react-query"
import { fetchProductById } from "./fetchProductById"

export default function useProductDetail(id) {
    return useQuery({
        queryKey: ["product", id],
        queryFn:() => fetchProductById(id),
        enabled: !!id,
    })
}