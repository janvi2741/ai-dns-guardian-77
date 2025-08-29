import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const featureData = [
  { feature: 'Domain Length', importance: 0.23, label: 'Len' },
  { feature: 'Character Entropy', importance: 0.19, label: 'Entropy' },
  { feature: 'Subdomain Count', importance: 0.16, label: 'Subdom' },
  { feature: 'Vowel Ratio', importance: 0.14, label: 'Vowels' },
  { feature: 'Digit Ratio', importance: 0.12, label: 'Digits' },
  { feature: 'Consonant Clusters', importance: 0.10, label: 'Clusters' },
  { feature: 'TLD Frequency', importance: 0.06, label: 'TLD' },
];

export function FeatureImportanceChart() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Feature Importance</h3>
        <p className="text-sm text-muted-foreground">LightGBM model feature weights</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={featureData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="number"
            domain={[0, 0.25]}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            type="category"
            dataKey="label"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            width={80}
          />
          <Tooltip 
            formatter={(value: any) => [`${(value * 100).toFixed(1)}%`, 'Importance']}
            labelFormatter={(label: string) => {
              const item = featureData.find(d => d.label === label);
              return item ? item.feature : label;
            }}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px"
            }}
          />
          <Bar 
            dataKey="importance" 
            fill="hsl(var(--primary))"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 text-sm text-muted-foreground">
        Features ranked by importance in DGA detection model
      </div>
    </div>
  );
}