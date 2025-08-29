import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const accuracyData = [
  { date: '2024-01-10', dga: 94.2, tunneling: 87.3, fastflux: 92.1 },
  { date: '2024-01-11', dga: 95.1, tunneling: 88.7, fastflux: 93.4 },
  { date: '2024-01-12', dga: 94.8, tunneling: 89.2, fastflux: 92.8 },
  { date: '2024-01-13', dga: 96.3, tunneling: 90.1, fastflux: 94.2 },
  { date: '2024-01-14', dga: 97.1, tunneling: 88.9, fastflux: 94.7 },
  { date: '2024-01-15', dga: 97.3, tunneling: 89.1, fastflux: 94.7 },
];

export function ModelAccuracyTrends() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Model Accuracy Trends</h3>
        <p className="text-sm text-muted-foreground">Performance over the last 6 days</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={accuracyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
          />
          <YAxis 
            domain={[85, 100]}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            formatter={(value: any) => [`${value}%`, '']}
            labelFormatter={(label: string) => new Date(label).toLocaleDateString()}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px"
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="dga" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
            name="DGA Detection"
          />
          <Line 
            type="monotone" 
            dataKey="tunneling" 
            stroke="hsl(var(--secondary))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
            name="DNS Tunneling"
          />
          <Line 
            type="monotone" 
            dataKey="fastflux" 
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
            name="Fast Flux"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}