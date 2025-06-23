import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ChartData {
  month: string;
  won: number;
  lost: number;
}

const chartData: ChartData[] = [
  { month: 'March', won: 65, lost: 92 },
  { month: 'April', won: 42, lost: 25 },
  { month: 'May', won: 68, lost: 98 },
  { month: 'June', won: 85, lost: 12 },
  { month: 'July', won: 60, lost: 55 },
  { month: 'August', won: 32, lost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-bold">{label}</p>
        <p className="text-teal-500">Won: {payload[0].value}</p>
        <p className="text-red-500">Lost: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  const [activeToggle, setActiveToggle] = useState<string>('leads-converted');

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex-row items-start justify-between">
        <div className='flex flex-col gap-2'>
          <CardTitle>Leads tracking</CardTitle>
          <div className="flex items-baseline gap-4">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">680</p>
              <p className="text-sm text-muted-foreground">total closed</p>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">70</p>
              <p className="text-sm text-muted-foreground">total lost</p>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>last 6 months</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-start">
            <ToggleGroup 
                type="single" 
                value={activeToggle}
                onValueChange={(value) => {if(value) setActiveToggle(value)}}
                defaultValue="leads-converted"
                className="gap-1 rounded-lg bg-muted p-1"
            >
                <ToggleGroupItem value="leads-came" aria-label="Leads came" className="data-[state=on]:bg-background data-[state=on]:text-primary rounded-md px-3 py-1.5 text-sm">Leads came</ToggleGroupItem>
                <ToggleGroupItem value="leads-converted" aria-label="Leads Converted" className="data-[state=on]:bg-background data-[state=on]:text-primary rounded-md px-3 py-1.5 text-sm">Leads Converted</ToggleGroupItem>
                <ToggleGroupItem value="total-deals-size" aria-label="Total deals size" className="data-[state=on]:bg-background data-[state=on]:text-primary rounded-md px-3 py-1.5 text-sm">Total deals size</ToggleGroupItem>
            </ToggleGroup>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} />
              <YAxis tickLine={false} axisLine={false} dx={-10} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="won" stroke="#0D9488" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" name="Closed won" dot={{ r: 5, stroke: '#0D9488', fill: 'white', strokeWidth: 2}} activeDot={{r: 6}} />
              <Line type="monotone" dataKey="lost" stroke="#EF4444" strokeWidth={2} name="Closed lost" dot={{ r: 5, stroke: '#EF4444', fill: 'white', strokeWidth: 2}} activeDot={{r: 6}} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-600"></span>
                <span>Closed won</span>
            </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
