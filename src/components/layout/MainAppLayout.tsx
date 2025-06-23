import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * The main application layout component that structures the entire page.
 * It combines a fixed Sidebar and Header with a flexible main content area.
 * The layout is responsive, adjusting for different screen sizes.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Sidebar />
      <Header />
      {/* 
        The main content area.
        Padding-top (pt-20) accounts for the fixed header (h-16 = 4rem) + extra space.
        Padding-left (md:pl-72) accounts for the fixed sidebar on medium screens and up.
        On smaller screens, sidebar is hidden, so no extra padding-left is needed.
      */}
      <main className="p-6 pt-20 md:pl-72">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
