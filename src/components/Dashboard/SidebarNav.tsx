import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  ShoppingCart, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  isBottom?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon: Icon, active = false }) => (
  <li>
    <a
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        active
          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  </li>
);

const SidebarNav: React.FC = () => {
  const mainNavLinks = [
    { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
    { href: '#', label: 'Leads', icon: Users },
    { href: '#', label: 'Customers', icon: User },
    { href: '#', label: 'Proposals', icon: FileText },
    { href: '#', label: 'Invoices', icon: Receipt },
    { href: '#',label: 'Items', icon: ShoppingCart },
    { href: '#', label: 'Mail', icon: Mail },
    { href: '#', label: 'Shoebox', icon: Archive },
    { href: '#', label: 'Calendar', icon: Calendar },
  ];

  const secondaryNavLinks = [
    { href: '#', label: 'Help', icon: HelpCircle },
    { href: '#', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
        <nav className="flex-1">
          <ul className="space-y-1">
            {mainNavLinks.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </ul>
        </nav>
        <nav>
            <ul className="space-y-1">
                {secondaryNavLinks.map((link) => (
                    <NavItem key={link.label} {...link} />
                ))}
            </ul>
        </nav>
    </div>
  );
};

export default SidebarNav;
