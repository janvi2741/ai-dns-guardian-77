import { ModelPerformanceCards } from "@/components/dashboard/ModelPerformanceCards";
import { FeatureImportanceChart } from "@/components/dashboard/FeatureImportanceChart";
import { ModelAccuracyTrends } from "@/components/dashboard/ModelAccuracyTrends";
import { ModelConfigPanel } from "@/components/dashboard/ModelConfigPanel";

export default function AIModels() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
          AI Model Performance
        </h1>
        <p className="text-muted-foreground">
          Comprehensive analytics for machine learning models
        </p>
      </div>

      {/* Model Performance Overview */}
      <ModelPerformanceCards />

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ModelAccuracyTrends />
        <FeatureImportanceChart />
      </div>

      {/* Model Configuration */}
      <ModelConfigPanel />
    </div>
  );
}