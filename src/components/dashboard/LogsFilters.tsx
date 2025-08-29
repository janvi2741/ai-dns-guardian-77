import { Search, Filter, Calendar, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function LogsFilters() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-semibold">Filter & Search</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search-query" className="text-sm font-medium">
            Search Query
          </Label>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            <Input 
              id="search-query"
              placeholder="Domain, IP, or keyword..." 
              className="pl-9" 
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
              <SelectItem value="timeout">Timeout</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Query Type Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Query Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="a">A Record</SelectItem>
              <SelectItem value="aaaa">AAAA Record</SelectItem>
              <SelectItem value="mx">MX Record</SelectItem>
              <SelectItem value="txt">TXT Record</SelectItem>
              <SelectItem value="cname">CNAME</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Range */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Time Range</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Last hour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last hour</SelectItem>
              <SelectItem value="6h">Last 6 hours</SelectItem>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">
          12,456 queries match current filters
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-1" />
            Clear Filters
          </Button>
          <Button size="sm" className="btn-glow">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}