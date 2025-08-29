import { ModelRetraining } from "@/components/dashboard/ModelRetraining";
import { ThresholdSettings } from "@/components/dashboard/ThresholdSettings";
import { SystemConfiguration } from "@/components/dashboard/SystemConfiguration";
import { UserManagement } from "@/components/dashboard/UserManagement";

export default function Settings() {
  return (
    <div className="space-y-8 slide-up">
      {/* Page Header */}
      <div className="fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          System Configuration
        </h1>
        <p className="text-muted-foreground">
          Configure DNS resolver and AI model settings
        </p>
      </div>

      {/* Configuration Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ModelRetraining />
        <ThresholdSettings />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SystemConfiguration />
        <UserManagement />
      </div>
    </div>
  );
}