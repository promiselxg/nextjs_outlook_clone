import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonLoader() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-2 w-[210px]" />
        <Skeleton className="h-2 w-[160px]" />
      </div>
    </div>
  );
}
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-full rounded-xl bg-[--single-mail-bg]" />
      <div className="space-y-2">
        <Skeleton className="h-2 w-[90%] bg-[--single-mail-bg]" />
        <Skeleton className="h-2 w-[80%] bg-[--single-mail-bg]" />
      </div>
    </div>
  );
}
