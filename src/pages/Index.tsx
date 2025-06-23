import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelStats from '../components/Dashboard/FunnelStats';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';

/**
 * Renders the main Dashboard Overview page.
 * This page acts as the central hub, assembling various data visualization components
 * within a tabbed interface for "Sales" and "Leads". The entire page is wrapped in the
 * main application layout which provides the sidebar and header.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales">
          <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed bg-card">
            <div className="text-center">
                <h2 className="text-2xl font-semibold">Sales Data Unavailable</h2>
                <p className="text-muted-foreground">This section is under construction.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leads">
          {/* 
            The main grid for dashboard widgets.
            - On medium screens and up (md:), it's a 2-column grid.
            - FunnelStats and SourcesPieChart each take one column.
            - LeadsTrackingChart and StatsCardGrid are configured internally with 'md:col-span-2' 
              to span the full width on medium screens, creating the desired stacked layout.
          */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FunnelStats />
            <SourcesPieChart />
            <LeadsTrackingChart />
            <StatsCardGrid />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
