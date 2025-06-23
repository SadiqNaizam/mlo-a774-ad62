import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  dollars: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, dollars: 3000, color: '#F87171' }, // red-400
  { name: 'Behance', value: 40, dollars: 1000, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, dollars: 1000, color: '#0F766E' }, // teal-700
  { name: 'Dribbble', value: 10, dollars: 1000, color: '#6EE7B7' }, // emerald-300
];

const SourcesPieChart: React.FC = () => {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip 
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="space-y-3 text-sm">
              {data.map((source) => (
                <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }}></span>
                    <span className="text-foreground">{source.name}</span>
                  </div>
                  <span className="text-muted-foreground justify-self-end">$ {source.dollars}</span>
                  <span className="text-muted-foreground justify-self-end font-medium w-10 text-right">{source.value}%</span>
                </li>
              ))}
            </ul>
            <div className='flex justify-end'>
              <TooltipProvider>
                  <ShadTooltip>
                      <TooltipTrigger asChild>
                          <Badge variant="secondary" className="cursor-default">from leads total</Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                          <p>Percentage from total leads</p>
                      </TooltipContent>
                  </ShadTooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
