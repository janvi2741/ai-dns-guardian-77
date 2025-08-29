import { Activity, Shield, Clock, AlertTriangle } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";

export function LogsStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Queries"
        value="1.2M"
        change="+12.5%"
        trend="up"
        variant="primary"
      />
      <MetricCard
        title="Blocked Queries"
        value="23.4K"
        change="+8.2%"
        trend="up"
        variant="warning"
      />
      <MetricCard
        title="Avg Response Time"
        value="8.5ms"
        change="-2.1ms"
        trend="down"
        variant="success"
      />
      <MetricCard
        title="Error Rate"
        value="0.12%"
        change="-0.03%"
        trend="down"
        variant="accent"
      />
    </div>
  );
}