import { Globe } from "lucide-react";

const geographicData = [
  { country: "United States", queries: 45234, percentage: 34.2 },
  { country: "Germany", queries: 23456, percentage: 17.7 },
  { country: "United Kingdom", queries: 18765, percentage: 14.2 },
  { country: "France", queries: 12543, percentage: 9.5 },
  { country: "Japan", queries: 9876, percentage: 7.4 },
  { country: "Canada", queries: 8234, percentage: 6.2 },
  { country: "Australia", queries: 6789, percentage: 5.1 },
  { country: "Others", queries: 7567, percentage: 5.7 },
];

export function GeographicDistribution() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Geographic Distribution</h3>
        </div>
        <p className="text-sm text-muted-foreground">DNS queries by country/region</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {geographicData.map((location) => (
          <div key={location.country} className="p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium">{location.country}</span>
              <span className="text-xs text-muted-foreground">{location.percentage}%</span>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-primary">
                {location.queries.toLocaleString()}
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${location.percentage * 2.5}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total queries analyzed</span>
          <span className="font-semibold">132,464</span>
        </div>
      </div>
    </div>
  );
}