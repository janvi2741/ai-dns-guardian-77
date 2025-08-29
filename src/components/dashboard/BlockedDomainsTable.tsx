import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Ban } from "lucide-react";

const blockedDomains = [
  { domain: "malware-site.evil.com", category: "Malware", blocked: "1,234", lastSeen: "5 min ago" },
  { domain: "phishing-bank.scam.net", category: "Phishing", blocked: "876", lastSeen: "12 min ago" },
  { domain: "crypto-miner.evil.org", category: "Cryptomining", blocked: "543", lastSeen: "18 min ago" },
  { domain: "botnet-c2.bad.com", category: "Botnet", blocked: "234", lastSeen: "25 min ago" },
  { domain: "spam-tracker.ads.net", category: "Tracking", blocked: "1,876", lastSeen: "32 min ago" },
];

const categoryColors = {
  Malware: "destructive",
  Phishing: "secondary",
  Cryptomining: "accent", 
  Botnet: "destructive",
  Tracking: "outline"
};

export function BlockedDomainsTable() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Blocked Domains</h3>
          <p className="text-sm text-muted-foreground">Recently blocked malicious domains</p>
        </div>
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-1" />
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Domain</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Blocked Queries</TableHead>
              <TableHead>Last Seen</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blockedDomains.map((domain) => (
              <TableRow key={domain.domain} className="hover:bg-background/50">
                <TableCell className="font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Ban className="h-4 w-4 text-destructive" />
                    {domain.domain}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={domain.category === "Malware" || domain.category === "Botnet" ? "destructive" : domain.category === "Phishing" ? "secondary" : "outline"}>
                    {domain.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {domain.blocked}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {domain.lastSeen}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}