import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatProps> = ({ value, label }) => (
  <div>
    <p className="text-4xl font-bold text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const StatsCardGrid: React.FC = () => {
  const reasonsData: StatProps[] = [
    { value: '40%', label: 'The proposal is unclear' },
    { value: '20%', label: 'However venture pursuit' },
    { value: '10%', label: 'Other' },
    { value: '30%', label: 'The proposal is unclear' },
  ];

  const otherData = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads' },
  ];

  return (
    <div className="col-span-1 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-8 gap-y-12 pt-4">
          {reasonsData.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4 pt-4">
          {otherData.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-foreground">{stat.value}</p>
              <div className="flex items-center gap-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.label === 'inactive leads' && (
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Leads with no activity in the last 30 days.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCardGrid;
