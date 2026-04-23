import { useMemo, useState } from "react";
import { useProducts } from "../api/useProducts";
import Toolbar from "@/components/common/Toolbar";
import EmptyState from "@/components/common/EmptyState";
import ProductGrid from "./ProductGrid";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";

function normalize(s) {
  return String(s || "").toLowerCase().trim()
}

export default function ProductList() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("featured")
 
  const { data = [], isLoading, isError, error, refetch} = useProducts()

  const categories = useMemo(() => {
    const set = new Set(data.map((p) => p.category))
    return Array.from(set).sort()
  }, [data])

  const visible = useMemo(() => {
    const q = normalize(search)

    let out = data

    if (category !== "all") {
      out = out.filter((p) => p.category === category)
    }

    if (q) {
      out = out.filter((p) =>  normalize(p.title).includes(q))
    }

    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price)
        break
      case "rating-desc":
        out = [...out].sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0))
        break
      default:
        break
    }

    return out
  }, [data, category, search, sort])

  if (isLoading) return <LoadingState />
  if (isError) return <ErrorState  message={error.message} onRetry={refetch}/>
  return ( 
    <div>
      <Toolbar
        categories={categories}
        category={category}
        onCategory={setCategory}
        Query={search}
        onQuery={setSearch}
        sort={sort}
        onSort={setSort}
      />

      {visible.length === 0 ? (
        <EmptyState 
          title="No products found"
          subtitle="Try changing filters"
        />
      ) : (
        <div className="mt-4">
          <ProductGrid products={visible} />
        </div>
      )}
    </div>
  )
}