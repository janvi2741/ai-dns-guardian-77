import { AlertTriangle, Shield, Brain, Eye, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const securityAlerts = [
  {
    id: 1,
    timestamp: "2024-01-15 14:32:15",
    type: "DGA Detection", 
    domain: "xvz92kl3m.biz",
    severity: "Critical",
    confidence: 97.3,
    model: "LightGBM DGA",
    status: "Active"
  },
  {
    id: 2,
    timestamp: "2024-01-15 14:28:42",
    type: "DNS Tunneling",
    domain: "long-suspicious-subdomain.tunnel.com",
    severity: "High",
    confidence: 89.1,
    model: "CNN Tunnel Detector",
    status: "Investigating"
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:25:33",
    type: "Reputation Block",
    domain: "known-malware.evil.com",
    severity: "High",
    confidence: 99.9,
    model: "Reputation DB",
    status: "Blocked"
  },
  {
    id: 4,
    timestamp: "2024-01-15 14:20:18",
    type: "Fast Flux",
    domain: "changing-ips.suspicious.net",
    severity: "Medium",
    confidence: 76.5,
    model: "Fast Flux Detector",
    status: "Monitoring"
  },
];

export function SecurityAlertsPanel() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Security Alerts</h3>
          <p className="text-sm text-muted-foreground">Real-time threat detection</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            <Input placeholder="Search alerts..." className="pl-9 w-48" />
          </div>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            View All
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {securityAlerts.map((alert) => (
          <div key={alert.id} className="p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-colors border border-destructive/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/20">
                  {alert.type === "DGA Detection" && <Brain className="h-4 w-4 text-destructive" />}
                  {alert.type === "DNS Tunneling" && <AlertTriangle className="h-4 w-4 text-destructive" />}
                  {alert.type === "Reputation Block" && <Shield className="h-4 w-4 text-destructive" />}
                  {alert.type === "Fast Flux" && <AlertTriangle className="h-4 w-4 text-destructive" />}
                </div>
                <div>
                  <h4 className="font-semibold">{alert.type}</h4>
                  <p className="text-sm text-muted-foreground">{alert.model}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={alert.severity === "Critical" ? "destructive" : "secondary"}>
                  {alert.severity}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Domain:</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">{alert.domain}</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Confidence:</span>
                <span className="text-sm font-medium">{alert.confidence}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="outline">{alert.status}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}