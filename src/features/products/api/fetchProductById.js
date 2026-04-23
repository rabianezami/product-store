export async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!res.ok) {
        throw new Error("Failed to fetch product")
    }

    return res.json()
}