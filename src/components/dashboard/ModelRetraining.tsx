import { Brain, Play, Pause, RefreshCw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const retrainingJobs = [
  { model: "DGA Detection", status: "Running", progress: 67, eta: "12 min" },
  { model: "DNS Tunneling", status: "Queued", progress: 0, eta: "25 min" },
  { model: "Fast Flux", status: "Completed", progress: 100, eta: "-" },
];

export function ModelRetraining() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-xl font-semibold mb-1">Model Retraining</h3>
          <p className="text-sm text-muted-foreground">Manage AI model updates</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {retrainingJobs.map((job) => (
          <div key={job.model} className="p-4 rounded-xl bg-background/30">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">{job.model}</span>
              <Badge variant={
                job.status === "Running" ? "default" : 
                job.status === "Completed" ? "default" : "secondary"
              }>
                {job.status}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span>{job.progress}%</span>
              </div>
              <Progress value={job.progress} className="h-2" />
              {job.eta !== "-" && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  ETA: {job.eta}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Button className="flex-1 btn-glow">
            <Play className="h-4 w-4 mr-2" />
            Start Training
          </Button>
          <Button variant="outline">
            <Pause className="h-4 w-4 mr-2" />
            Pause All
          </Button>
        </div>
        
        <Button variant="outline" className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Force Retrain All Models
        </Button>
      </div>
    </div>
  );
}