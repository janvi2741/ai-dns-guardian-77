import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  type: "line" | "area";
}

// Mock data for demonstration
const mockData = [
  { time: '00:00', value: 1200, value2: 800 },
  { time: '04:00', value: 1800, value2: 950 },
  { time: '08:00', value: 2400, value2: 1200 },
  { time: '12:00', value: 3200, value2: 1800 },
  { time: '16:00', value: 2800, value2: 1600 },
  { time: '20:00', value: 2200, value2: 1100 },
];

export function ChartContainer({ title, subtitle, type }: ChartContainerProps) {
  return (
    <div className="chart-container slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <ResponsiveContainer width="100%" height={250}>
        {type === "line" ? (
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        ) : (
          <AreaChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--accent))" 
              fill="hsl(var(--accent) / 0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}