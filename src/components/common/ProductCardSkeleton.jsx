import { Skeleton } from "../ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="animate-pluse space-y-3 border border-slate-200 rounded-xl  p-4">
      <Skeleton className="h-44 w-full bg-slate-200" />

      <Skeleton className="h-4 w-3/4 bg-slate-200" />

      <Skeleton className="h-4 w-1/2 bg-slate-200" />

      <div className="flex justify-between">
          <Skeleton className="h-4 w-25 bg-slate-200" />
          <Skeleton className="h-4 w-15 bg-slate-200" />
      </div>

    </div>
  )
}