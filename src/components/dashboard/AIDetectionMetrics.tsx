import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const aiMetrics = [
  { 
    name: "DGA Detection", 
    accuracy: 97.3, 
    icon: Brain, 
    color: "hsl(var(--primary))",
    status: "Excellent"
  },
  { 
    name: "DNS Tunneling", 
    accuracy: 89.1, 
    icon: Target, 
    color: "hsl(var(--secondary))",
    status: "Good"
  },
  { 
    name: "Fast Flux", 
    accuracy: 94.7, 
    icon: TrendingUp, 
    color: "hsl(var(--accent))",
    status: "Excellent"
  },
  { 
    name: "Reputation Filter", 
    accuracy: 99.9, 
    icon: Zap, 
    color: "hsl(var(--destructive))",
    status: "Perfect"
  },
];

export function AIDetectionMetrics() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">AI Model Performance</h3>
        <p className="text-sm text-muted-foreground">Real-time detection accuracy</p>
      </div>

      <div className="space-y-6">
        {aiMetrics.map((metric) => (
          <div key={metric.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <metric.icon className="h-4 w-4" style={{ color: metric.color }} />
                <span className="text-sm font-medium">{metric.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold">{metric.accuracy}%</span>
                <p className="text-xs text-muted-foreground">{metric.status}</p>
              </div>
            </div>
            <Progress 
              value={metric.accuracy} 
              className="h-2"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Average Accuracy</span>
          <span className="font-semibold text-primary">95.2%</span>
        </div>
      </div>
    </div>
  );
}