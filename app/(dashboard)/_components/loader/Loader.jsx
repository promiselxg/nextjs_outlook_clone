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
