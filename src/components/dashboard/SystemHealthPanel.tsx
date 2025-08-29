import { Cpu, HardDrive, Wifi, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const healthMetrics = [
  { name: "CPU Usage", value: 45, icon: Cpu, color: "hsl(var(--accent))" },
  { name: "Memory", value: 68, icon: HardDrive, color: "hsl(var(--secondary))" },
  { name: "Network", value: 23, icon: Wifi, color: "hsl(var(--primary))" },
  { name: "Load Avg", value: 34, icon: Activity, color: "hsl(var(--destructive))" },
];

export function SystemHealthPanel() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">System Health</h3>
        <p className="text-sm text-muted-foreground">Real-time resource monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthMetrics.map((metric) => (
          <div key={metric.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <metric.icon className="h-4 w-4" style={{ color: metric.color }} />
                <span className="text-sm font-medium">{metric.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{metric.value}%</span>
            </div>
            <Progress 
              value={metric.value} 
              className="h-2"
              style={{
                backgroundColor: "hsl(var(--muted))",
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last updated</span>
          <span className="font-medium">2 seconds ago</span>
        </div>
      </div>
    </div>
  );
}