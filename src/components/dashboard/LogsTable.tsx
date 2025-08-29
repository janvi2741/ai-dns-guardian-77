import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

const dnsLogs = [
  {
    timestamp: "2024-01-15 14:32:15.123",
    query: "google.com",
    type: "A",
    client: "192.168.1.45",
    response: "142.250.191.14",
    status: "RESOLVED",
    latency: "12ms",
    blocked: false
  },
  {
    timestamp: "2024-01-15 14:32:14.987",
    query: "malware-site.evil.com",
    type: "A",
    client: "192.168.1.67",
    response: "-",
    status: "BLOCKED",
    latency: "2ms",
    blocked: true
  },
  {
    timestamp: "2024-01-15 14:32:14.821",
    query: "github.com",
    type: "AAAA",
    client: "192.168.1.23",
    response: "2606:50c0:8000::154",
    status: "RESOLVED",
    latency: "8ms",
    blocked: false
  },
  {
    timestamp: "2024-01-15 14:32:14.645",
    query: "xvz92kl3m.biz",
    type: "A",
    client: "192.168.1.89",
    response: "-",
    status: "BLOCKED",
    latency: "1ms",
    blocked: true
  },
  {
    timestamp: "2024-01-15 14:32:14.432",
    query: "cloudflare.com",
    type: "A",
    client: "192.168.1.34",
    response: "104.16.132.229",
    status: "RESOLVED",
    latency: "15ms",
    blocked: false
  },
];

export function LogsTable() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">DNS Query Logs</h3>
          <p className="text-sm text-muted-foreground">Real-time DNS query monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            Live View
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Query</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Client IP</TableHead>
              <TableHead>Response</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Latency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dnsLogs.map((log, index) => (
              <TableRow key={index} className="hover:bg-background/50">
                <TableCell className="font-mono text-xs">
                  {log.timestamp}
                </TableCell>
                <TableCell className="font-medium">
                  <span className={log.blocked ? "text-destructive" : "text-foreground"}>
                    {log.query}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {log.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {log.client}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {log.response}
                </TableCell>
                <TableCell>
                  <Badge variant={log.blocked ? "destructive" : "default"}>
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {log.latency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">
          Showing 5 of 12,456 queries
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}