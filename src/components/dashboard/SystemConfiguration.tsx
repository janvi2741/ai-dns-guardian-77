import { Server, Globe, Database, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SystemConfiguration() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Server className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-xl font-semibold mb-1">System Configuration</h3>
          <p className="text-sm text-muted-foreground">DNS resolver settings</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* DNS Settings */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <Globe className="h-4 w-4" />
            DNS Configuration
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-dns">Primary DNS Server</Label>
              <Input id="primary-dns" defaultValue="1.1.1.1" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secondary-dns">Secondary DNS Server</Label>
              <Input id="secondary-dns" defaultValue="1.0.0.1" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cache-ttl">Cache TTL (seconds)</Label>
            <Input id="cache-ttl" defaultValue="300" type="number" />
          </div>
        </div>

        {/* Performance Settings */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h4 className="font-semibold flex items-center gap-2">
            <Database className="h-4 w-4" />
            Performance
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Query Rate Limit</Label>
              <Select defaultValue="1000">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500">500 queries/sec</SelectItem>
                  <SelectItem value="1000">1,000 queries/sec</SelectItem>
                  <SelectItem value="2000">2,000 queries/sec</SelectItem>
                  <SelectItem value="unlimited">Unlimited</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Cache Size</Label>
              <Select defaultValue="1gb">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="512mb">512 MB</SelectItem>
                  <SelectItem value="1gb">1 GB</SelectItem>
                  <SelectItem value="2gb">2 GB</SelectItem>
                  <SelectItem value="4gb">4 GB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* System Toggles */}
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-logging" className="text-sm font-medium">
              Enable detailed logging
            </Label>
            <Switch id="enable-logging" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-metrics" className="text-sm font-medium">
              Enable metrics collection
            </Label>
            <Switch id="enable-metrics" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-analytics" className="text-sm font-medium">
              Enable analytics
            </Label>
            <Switch id="enable-analytics" defaultChecked />
          </div>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-border">
        <Button className="w-full btn-glow">
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </Button>
      </div>
    </div>
  );
}