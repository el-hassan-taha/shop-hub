import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-transparent border-t-primary border-r-primary",
        sizeClasses[size],
        className
      )}
      style={{
        background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)))"
      }}
    />
  );
};

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-muted/50 via-muted to-muted/50 bg-[length:200%_100%]",
        className
      )}
      style={{
        animation: "shimmer 2s ease-in-out infinite"
      }}
    />
  );
};

// Product Card Skeleton for loading states
export const ProductCardSkeleton = () => {
  return (
    <div className="glass-card border-white/10 rounded-xl overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <div className="p-5 space-y-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-4 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between items-center pt-3">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-9 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
};