import { LogsTable } from "@/components/dashboard/LogsTable";
import { LogsFilters } from "@/components/dashboard/LogsFilters";
import { LogsStatistics } from "@/components/dashboard/LogsStatistics";

export default function Logs() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          DNS Query Logs
        </h1>
        <p className="text-muted-foreground">
          Detailed DNS query logs with advanced filtering and search
        </p>
      </div>

      {/* Logs Statistics */}
      <LogsStatistics />

      {/* Filters */}
      <LogsFilters />

      {/* Logs Table */}
      <LogsTable />
    </div>
  );
}