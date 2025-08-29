import { Settings, Sliders, RefreshCw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ModelConfigPanel() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-xl font-semibold mb-1">Model Configuration</h3>
          <p className="text-sm text-muted-foreground">Adjust detection thresholds and settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Detection Thresholds */}
        <div className="space-y-6">
          <h4 className="font-semibold flex items-center gap-2">
            <Sliders className="h-4 w-4" />
            Detection Thresholds
          </h4>
          
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">DGA Detection (97.3%)</Label>
              <Slider defaultValue={[97]} max={100} min={50} step={1} className="w-full" />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">DNS Tunneling (89.1%)</Label>
              <Slider defaultValue={[89]} max={100} min={50} step={1} className="w-full" />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">Fast Flux (94.7%)</Label>
              <Slider defaultValue={[95]} max={100} min={50} step={1} className="w-full" />
            </div>
          </div>
        </div>

        {/* Model Settings */}
        <div className="space-y-6">
          <h4 className="font-semibold">Model Settings</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-retrain" className="text-sm font-medium">
                Auto-retrain models
              </Label>
              <Switch id="auto-retrain" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="adaptive-threshold" className="text-sm font-medium">
                Adaptive thresholds
              </Label>
              <Switch id="adaptive-threshold" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="ensemble-mode" className="text-sm font-medium">
                Ensemble mode
              </Label>
              <Switch id="ensemble-mode" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6 mt-6 border-t border-border">
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Reset to Defaults
        </Button>
        <Button className="gap-2 btn-glow">
          <Save className="h-4 w-4" />
          Save Configuration
        </Button>
      </div>
    </div>
  );
}