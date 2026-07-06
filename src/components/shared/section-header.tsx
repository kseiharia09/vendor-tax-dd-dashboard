import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  badge,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {badge && <div className="mt-2 sm:mt-0">{badge}</div>}
    </div>
  );
}
