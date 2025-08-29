import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const threatData = [
  { time: '00:00', malware: 12, phishing: 8, dga: 15, tunneling: 4 },
  { time: '04:00', malware: 18, phishing: 12, dga: 22, tunneling: 7 },
  { time: '08:00', malware: 24, phishing: 16, dga: 18, tunneling: 9 },
  { time: '12:00', malware: 32, phishing: 24, dga: 28, tunneling: 12 },
  { time: '16:00', malware: 28, phishing: 20, dga: 25, tunneling: 8 },
  { time: '20:00', malware: 22, phishing: 14, dga: 19, tunneling: 6 },
];

export function ThreatTrendsChart() {
  return (
    <div className="glass-card p-6 slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Threat Trends</h3>
        <p className="text-sm text-muted-foreground">Security incidents over time</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={threatData}>
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
          <Legend />
          <Area 
            type="monotone" 
            dataKey="malware" 
            stackId="1"
            stroke="hsl(var(--destructive))" 
            fill="hsl(var(--destructive) / 0.3)"
            name="Malware"
          />
          <Area 
            type="monotone" 
            dataKey="phishing" 
            stackId="1"
            stroke="hsl(var(--secondary))" 
            fill="hsl(var(--secondary) / 0.3)"
            name="Phishing"
          />
          <Area 
            type="monotone" 
            dataKey="dga" 
            stackId="1"
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary) / 0.3)"
            name="DGA"
          />
          <Area 
            type="monotone" 
            dataKey="tunneling" 
            stackId="1"
            stroke="hsl(var(--accent))" 
            fill="hsl(var(--accent) / 0.3)"
            name="DNS Tunneling"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}