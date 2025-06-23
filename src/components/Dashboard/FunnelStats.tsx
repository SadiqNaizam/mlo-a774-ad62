import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelStats: React.FC = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-baseline gap-2">
          <p className="text-5xl font-bold">600</p>
          <p className="text-muted-foreground">active leads</p>
        </div>
        <div className="mb-6 flex h-2 w-full rounded-full overflow-hidden">
          {funnelData.map((stage) => (
            <TooltipProvider key={stage.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`${stage.color}`}
                    style={{ width: `${(stage.count / totalCount) * 100}%` }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{stage.name}: {stage.count}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <ul className="space-y-3 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${stage.color}`}></span>
                <span className="text-foreground">{stage.name}</span>
              </div>
              <span className="text-muted-foreground justify-self-end">{stage.count}</span>
              <span className="text-muted-foreground justify-self-end">$ {stage.value}</span>
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                          <span className="text-muted-foreground justify-self-end cursor-default">{stage.duration}</span>
                      </TooltipTrigger>
                      {stage.name === 'In conversation' && (
                          <TooltipContent>
                              <p>average time on this stage</p>
                          </TooltipContent>
                      )}
                  </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelStats;
