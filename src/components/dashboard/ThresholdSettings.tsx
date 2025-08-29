import { Sliders, Save, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const thresholds = [
  { name: "DGA Detection", current: 85, recommended: 80, min: 50, max: 99 },
  { name: "DNS Tunneling", current: 75, recommended: 70, min: 50, max: 95 },
  { name: "Fast Flux Detection", current: 90, recommended: 85, min: 60, max: 99 },
  { name: "Reputation Filtering", current: 95, recommended: 90, min: 70, max: 99 },
];

export function ThresholdSettings() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-xl font-semibold mb-1">Detection Thresholds</h3>
          <p className="text-sm text-muted-foreground">Adjust sensitivity settings</p>
        </div>
      </div>

      <div className="space-y-6 mb-6">
        {thresholds.map((threshold) => (
          <div key={threshold.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">{threshold.name}</Label>
              <div className="text-right">
                <span className="text-sm font-semibold">{threshold.current}%</span>
                <p className="text-xs text-muted-foreground">
                  Recommended: {threshold.recommended}%
                </p>
              </div>
            </div>
            <Slider 
              defaultValue={[threshold.current]} 
              max={threshold.max} 
              min={threshold.min} 
              step={1} 
              className="w-full" 
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{threshold.min}%</span>
              <span>{threshold.max}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-adjust" className="text-sm font-medium">
            Auto-adjust thresholds
          </Label>
          <Switch id="auto-adjust" />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="alerts" className="text-sm font-medium">
            Send threshold alerts
          </Label>
          <Switch id="alerts" defaultChecked />
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Recommended
        </Button>
        <Button className="flex-1 btn-glow">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}