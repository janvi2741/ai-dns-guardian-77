import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const topDomains = [
  { domain: "google.com", queries: 12456, percentage: 23.4 },
  { domain: "cloudflare.com", queries: 8923, percentage: 16.8 },
  { domain: "amazon.com", queries: 7234, percentage: 13.6 },
  { domain: "microsoft.com", queries: 5678, percentage: 10.7 },
  { domain: "github.com", queries: 4532, percentage: 8.5 },
  { domain: "stackoverflow.com", queries: 3421, percentage: 6.4 },
  { domain: "twitter.com", queries: 2987, percentage: 5.6 },
  { domain: "youtube.com", queries: 2543, percentage: 4.8 },
];

export function TopDomainsTable() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Top Requested Domains</h3>
        <p className="text-sm text-muted-foreground">Most frequently queried domains</p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Domain</TableHead>
              <TableHead className="text-right">Queries</TableHead>
              <TableHead className="text-right">Share</TableHead>
              <TableHead>Distribution</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topDomains.map((domain, index) => (
              <TableRow key={domain.domain} className="hover:bg-background/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {index + 1}
                    </span>
                    {domain.domain}
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {domain.queries.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {domain.percentage}%
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Progress value={domain.percentage} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground w-12">
                      {domain.percentage}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}