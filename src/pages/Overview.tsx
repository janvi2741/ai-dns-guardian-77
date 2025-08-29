import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Globe, 
  Server, 
  Zap, 
  Shield, 
  TrendingUp, 
  Eye,
  Clock,
  Cpu,
  Database
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartContainer } from "@/components/dashboard/ChartContainer";
import { SystemHealthPanel } from "@/components/dashboard/SystemHealthPanel";
import { RecentAlertsPanel } from "@/components/dashboard/RecentAlertsPanel";

export default function Overview() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          DNS Monitoring Overview
        </h1>
        <p className="text-muted-foreground">
          Real-time monitoring dashboard for AI-powered DNS resolver
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Queries/Second"
          value="12,456"
          change="+15.3%"
          trend="up"
          variant="primary"
          icon={<Activity className="w-5 h-5 text-primary" />}
        />
        <MetricCard
          title="Blocked Domains"
          value="2,341"
          change="+8.2%"
          trend="up"
          variant="warning"
          icon={<Shield className="w-5 h-5 text-secondary" />}
        />
        <MetricCard
          title="Malicious Detected"
          value="23"
          change="-12.5%"
          trend="down"
          variant="success"
          icon={<CheckCircle className="w-5 h-5 text-accent" />}
        />
        <MetricCard
          title="AI Accuracy"
          value="98.7%"
          change="+0.3%"
          trend="up"
          variant="info"
          icon={<AlertTriangle className="w-5 h-5 text-blue-400" />}
        />
      </div>

      {/* Additional metrics row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Response Time"
          value="0.8ms"
          change="-5.2%"
          trend="down"
          variant="cyan"
          icon={<Clock className="w-5 h-5 text-cyan-400" />}
        />
        <MetricCard
          title="Cache Hit Rate"
          value="94.3%"
          change="+2.1%"
          trend="up"
          variant="purple"
          icon={<Database className="w-5 h-5 text-purple-400" />}
        />
        <MetricCard
          title="CPU Usage"
          value="23.4%"
          change="+1.8%"
          trend="up"
          variant="primary"
          icon={<Cpu className="w-5 h-5 text-primary" />}
        />
        <MetricCard
          title="Active Connections"
          value="1,542"
          change="+7.6%"
          trend="up"
          variant="success"
          icon={<Globe className="w-5 h-5 text-accent" />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Query Volume Trends"
          subtitle="Last 24 hours"
          type="line"
        />
        <ChartContainer
          title="Security Threats"
          subtitle="Detected by AI models"
          type="area"
        />
      </div>

      {/* System Status Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SystemHealthPanel />
        </div>
        <RecentAlertsPanel />
      </div>
    </div>
  );
}