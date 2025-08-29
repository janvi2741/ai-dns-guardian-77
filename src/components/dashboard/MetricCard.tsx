import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  variant?: "primary" | "warning" | "success" | "accent" | "info" | "purple" | "cyan";
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, change, trend, variant = "primary", icon }: MetricCardProps) {
  const variantClasses = {
    primary: "metric-card border-primary/30",
    warning: "metric-card metric-warning",
    success: "metric-card metric-success", 
    accent: "metric-card border-accent/30",
    info: "metric-card metric-info",
    purple: "metric-card metric-purple",
    cyan: "metric-card metric-cyan"
  };

  return (
    <div className={cn(variantClasses[variant], "slide-up")}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon && <div className="text-lg">{icon}</div>}
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs px-2 py-1 rounded-full",
          trend === "up" ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"
        )}>
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {change}
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {value}
        </p>
        <p className="text-xs text-muted-foreground">
          {trend === "up" ? "Increased" : "Decreased"} from last period
        </p>
      </div>
    </div>
  );
}