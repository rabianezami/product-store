import ProductCardSkeleton from "./ProductCardSkeleton";


export default function LoadingState() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-sky-100 px-4 py-10 text-slate-900">
          <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6}).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
          </div>
        </main>
    )  
}