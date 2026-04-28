import { Skeleton } from "../ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse space-y-3 border border-border rounded-xl  p-4 bg-card">
      <Skeleton className="h-44 w-full" />

      <Skeleton className="h-4 w-3/4 " />

      <Skeleton className="h-4 w-1/2" />

      <div className="flex justify-between">
          <Skeleton className="h-4 w-25 " />
          <Skeleton className="h-4 w-15 " />
      </div>

    </div>
  )
}