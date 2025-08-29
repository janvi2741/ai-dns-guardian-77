import { SecurityAlertsPanel } from "@/components/dashboard/SecurityAlertsPanel";
import { BlockedDomainsTable } from "@/components/dashboard/BlockedDomainsTable";
import { ThreatTrendsChart } from "@/components/dashboard/ThreatTrendsChart";
import { AIDetectionMetrics } from "@/components/dashboard/AIDetectionMetrics";

export default function Security() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-destructive to-secondary bg-clip-text text-transparent mb-2">
          Security & Threats
        </h1>
        <p className="text-muted-foreground">
          AI-powered threat detection and security monitoring
        </p>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SecurityAlertsPanel />
        </div>
        <AIDetectionMetrics />
      </div>

      {/* Threat Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ThreatTrendsChart />
        <BlockedDomainsTable />
      </div>
    </div>
  );
}