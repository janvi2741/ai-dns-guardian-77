import { Brain, Target, Activity, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";

const modelMetrics = [
  {
    title: "Overall Accuracy",
    value: "95.2%",
    change: "+2.1%",
    trend: "up" as const,
    variant: "primary" as const,
    icon: Target
  },
  {
    title: "Precision",
    value: "92.8%", 
    change: "+1.5%",
    trend: "up" as const,
    variant: "accent" as const,
    icon: Activity
  },
  {
    title: "Recall",
    value: "89.4%",
    change: "+0.8%", 
    trend: "up" as const,
    variant: "warning" as const,
    icon: TrendingUp
  },
  {
    title: "F1 Score",
    value: "91.1%",
    change: "+1.2%",
    trend: "up" as const,
    variant: "success" as const,
    icon: Brain
  }
];

export function ModelPerformanceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {modelMetrics.map((metric) => (
        <div key={metric.title} className="relative">
          <MetricCard
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            variant={metric.variant}
          />
          <div className="absolute top-4 right-4">
            <metric.icon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  );
}