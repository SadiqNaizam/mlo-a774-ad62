import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Renders the main application header.
 * It is fixed to the top of the viewport and positioned to the right of the sidebar on larger screens.
 * On smaller screens, it spans the full width.
 * It wraps the TopHeader component which contains the actual header content.
 */
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full md:left-72 md:w-[calc(100%-18rem)]">
      <TopHeader />
    </header>
  );
};

export default Header;
