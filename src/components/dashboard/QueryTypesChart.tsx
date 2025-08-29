import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const queryTypes = [
  { name: 'A Record', value: 45.2, count: 24567 },
  { name: 'AAAA Record', value: 28.3, count: 15432 },
  { name: 'MX Record', value: 12.1, count: 6589 },
  { name: 'TXT Record', value: 8.4, count: 4567 },
  { name: 'CNAME', value: 4.2, count: 2287 },
  { name: 'Other', value: 1.8, count: 980 },
];

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))', 
  'hsl(var(--accent))',
  'hsl(var(--destructive))',
  'hsl(var(--muted-foreground))',
  'hsl(var(--border))',
];

export function QueryTypesChart() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Query Types</h3>
        <p className="text-sm text-muted-foreground">DNS record type distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={queryTypes}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {queryTypes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any, name: any) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px"
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-2">
        {queryTypes.map((type, index) => (
          <div key={type.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span>{type.name}</span>
            </div>
            <div className="text-muted-foreground">
              {type.count.toLocaleString()} ({type.value}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}