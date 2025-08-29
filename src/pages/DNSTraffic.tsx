import { ChartContainer } from "@/components/dashboard/ChartContainer";
import { TopDomainsTable } from "@/components/dashboard/TopDomainsTable";
import { QueryTypesChart } from "@/components/dashboard/QueryTypesChart";
import { GeographicDistribution } from "@/components/dashboard/GeographicDistribution";

export default function DNSTraffic() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          DNS Traffic Analytics
        </h1>
        <p className="text-muted-foreground">
          Detailed analysis of DNS query patterns and traffic distribution
        </p>
      </div>

      {/* Traffic Overview Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Traffic Volume"
          subtitle="Queries per minute"
          type="line"
        />
        <ChartContainer
          title="Response Times"
          subtitle="Average latency trends"
          type="area"
        />
      </div>

      {/* Query Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopDomainsTable />
        </div>
        <QueryTypesChart />
      </div>

      {/* Geographic Distribution */}
      <GeographicDistribution />
    </div>
  );
}