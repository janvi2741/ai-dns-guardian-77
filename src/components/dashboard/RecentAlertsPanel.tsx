import { AlertTriangle, Shield, Brain, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recentAlerts = [
  {
    id: 1,
    type: "DGA Detection",
    domain: "xvz92kl.com",
    severity: "high",
    time: "2 min ago",
    icon: Brain,
  },
  {
    id: 2,
    type: "DNS Tunneling",
    domain: "suspicious-long-domain.evil.com",
    severity: "critical",
    time: "5 min ago", 
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "Blocked Domain",
    domain: "malware.example.com",
    severity: "medium",
    time: "8 min ago",
    icon: Shield,
  },
  {
    id: 4,
    type: "Rate Limiting",
    domain: "spam.requests.com",
    severity: "low",
    time: "12 min ago",
    icon: Clock,
  },
];

const severityColors = {
  critical: "destructive",
  high: "secondary", 
  medium: "accent",
  low: "muted",
};

export function RecentAlertsPanel() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Recent Alerts</h3>
        <p className="text-sm text-muted-foreground">Latest security events</p>
      </div>

      <div className="space-y-4">
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
            <div className="flex-shrink-0">
              <alert.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{alert.type}</span>
                <Badge variant={alert.severity === "critical" ? "destructive" : alert.severity === "high" ? "secondary" : "outline"}>
                  {alert.severity}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {alert.domain}
              </p>
              <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors">
          View all alerts →
        </button>
      </div>
    </div>
  );
}