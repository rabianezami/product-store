import ProductCardSkeleton from "./ProductCardSkeleton";


export default function LoadingState() {
    return (
        <main className="min-h-screen bg-background px-4 py-10 text-slate-900">
          <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6}).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
          </div>
        </main>
    )  
}