import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Renders the main sidebar for the application.
 * It is fixed on the left side and contains the logo and primary navigation.
 * It is hidden on mobile screens as per the design requirements.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 z-20 hidden h-screen w-72 flex-col gap-8 border-r bg-sidebar py-6 px-4 md:flex">
      {/* Logo Section */}
      <div className="flex items-center px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
          <span className="text-sm font-bold text-background">DO</span>
        </div>
      </div>
      {/* Navigation Section */}
      <nav className="w-full flex-1">
        <SidebarNav />
      </nav>
    </aside>
  );
};

export default Sidebar;
