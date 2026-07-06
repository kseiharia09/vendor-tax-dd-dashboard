import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const priorityMap = {
  Critical: "critical",
  High: "warning",
  Medium: "info",
  Low: "success",
} as const;

const statusMap = {
  received: { label: "Received", variant: "success" as const },
  partial: { label: "Partial", variant: "warning" as const },
  pending: { label: "Pending", variant: "info" as const },
  overdue: { label: "Overdue", variant: "critical" as const },
  complete: { label: "Complete", variant: "success" as const },
  "in-progress": { label: "In Progress", variant: "info" as const },
  Open: { label: "Open", variant: "critical" as const },
  "In Review": { label: "In Review", variant: "warning" as const },
  Resolved: { label: "Resolved", variant: "success" as const },
  Answered: { label: "Answered", variant: "success" as const },
  "In Progress": { label: "In Progress", variant: "info" as const },
  Pending: { label: "Pending", variant: "warning" as const },
  Overdue: { label: "Overdue", variant: "critical" as const },
};

export function StatusBadge({
  status,
  className,
}: {
  status: keyof typeof statusMap | string;
  className?: string;
}) {
  const config = statusMap[status as keyof typeof statusMap] ?? {
    label: status,
    variant: "secondary" as const,
  };
  return (
    <Badge variant={config.variant} className={cn("font-normal", className)}>
      {config.label}
    </Badge>
  );
}

export function PriorityBadge({
  priority,
  className,
}: {
  priority: keyof typeof priorityMap;
  className?: string;
}) {
  return (
    <Badge variant={priorityMap[priority]} className={cn("font-normal", className)}>
      {priority}
    </Badge>
  );
}

export function HealthBadge({
  health,
  className,
}: {
  health: "Green" | "Amber" | "Red";
  className?: string;
}) {
  const variant =
    health === "Green" ? "success" : health === "Amber" ? "warning" : "critical";
  return (
    <Badge variant={variant} className={cn("font-medium", className)}>
      {health}
    </Badge>
  );
}
