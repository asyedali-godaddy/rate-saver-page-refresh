import { useState, useEffect } from 'react';
import GDIcon from '@ux/icon/gd-the-go';
import SidebarCollapse from '@ux/icon/sidebar-collapse';
import ChevronDown from '@ux/icon/chevron-down';
import ChevronUp from '@ux/icon/chevron-up';
import Receipt from '@ux/icon/receipt';
import Dashboard from '@ux/icon/dashboard';
import Transactions from '@ux/icon/transactions';
import Cart from '@ux/icon/cart';
import Users from '@ux/icon/users3';
import Payouts from '@ux/icon/payouts';
import Briefcase from '@ux/icon/briefcase';
import BarGraph from '@ux/icon/bar-graph';
import AllSaleschannels from '@ux/icon/all-saleschannels';
import SmartTerminal from '@ux/icon/smart-terminal';
import ReceiptOk from '@ux/icon/reciept-ok';
import Website from '@ux/icon/website';
import AllPaytools from '@ux/icon/all-paytools';
import PayLinks from '@ux/icon/pay-links';
import VirtualTerminal from '@ux/icon/virtual-terminal';
import Invoice from '@ux/icon/invoice';
import Apps from '@ux/icon/apps2';
import Settings from '@ux/icon/settings';
import text from '@ux/text';

import '../styles/sidebar.css';
import '@ux/icon/gd-the-go/styles';
import '@ux/icon/sidebar-collapse/styles';
import '@ux/icon/chevron-down/styles';
import '@ux/icon/chevron-up/styles';
import '@ux/icon/receipt/styles';
import '@ux/icon/dashboard/styles';
import '@ux/icon/transactions/styles';
import '@ux/icon/cart/styles';
import '@ux/icon/users3/styles';
import '@ux/icon/payouts/styles';
import '@ux/icon/briefcase/styles';
import '@ux/icon/bar-graph/styles';
import '@ux/icon/all-saleschannels/styles';
import '@ux/icon/smart-terminal/styles';
import '@ux/icon/reciept-ok/styles';
import '@ux/icon/website/styles';
import '@ux/icon/all-paytools/styles';
import '@ux/icon/pay-links/styles';
import '@ux/icon/virtual-terminal/styles';
import '@ux/icon/invoice/styles';
import '@ux/icon/apps2/styles';
import '@ux/icon/settings/styles';
import '@ux/text/styles';

const ICON_SIZE = 24;

function Sidebar({ onNavigate, currentPage }) {
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [activeId, setActiveId] = useState('dashboard');

  useEffect(() => {
    if (currentPage === 'settings') {
      setSettingsExpanded(true);
      setActiveId('payments');
    }
  }, [currentPage]);

  const isActive = (id) => activeId === id;

  const handleSettingsToggle = () => {
    const nextExpanded = !settingsExpanded;
    setSettingsExpanded(nextExpanded);
    if (nextExpanded) {
      setActiveId('payments');
      onNavigate?.('settings');
    }
  };

  const handleNavClick = (id) => {
    setActiveId(id);
    if (id === 'payments' || id === 'users' || id === 'online-store') {
      onNavigate?.('settings');
    } else {
      onNavigate?.('dashboard');
    }
  };

  const renderMenuItem = (id, Icon, label, badge) => (
    <li
      key={id}
      className={`sidebar-menu-item ${isActive(id) ? 'active' : ''}`}
      onClick={() => handleNavClick(id)}
      onKeyDown={(e) => e.key === 'Enter' && handleNavClick(id)}
      role="button"
      tabIndex={0}
    >
      {Icon && <Icon height={ICON_SIZE} width={ICON_SIZE} />}
      {label}
      {badge && badge}
    </li>
  );

  const renderSubItem = (id, label, badge, Icon) => (
    <li
      key={id}
      className={`sidebar-submenu-item ${isActive(id) ? 'active' : ''}`}
      onClick={() => handleNavClick(id)}
      onKeyDown={(e) => e.key === 'Enter' && handleNavClick(id)}
      role="button"
      tabIndex={0}
    >
      {Icon && <Icon height={ICON_SIZE} width={ICON_SIZE} />}
      {label}
      {badge && badge}
    </li>
  );

  const renderExpandable = (groupKey, expanded, setExpanded, label, Icon, badge, children) => (
    <li key={groupKey} className="sidebar-menu-group">
      <button
        type="button"
        className={`sidebar-menu-item sidebar-menu-item-expandable ${expanded ? 'active' : ''}`}
        onClick={() => (groupKey === 'settings' ? handleSettingsToggle() : setExpanded((prev) => !prev))}
        aria-expanded={expanded}
      >
        {Icon && <Icon height={ICON_SIZE} width={ICON_SIZE} />}
        {label}
        {badge && badge}
        {expanded ? (
          <ChevronUp height={ICON_SIZE} width={ICON_SIZE} className="sidebar-chevron" />
        ) : (
          <ChevronDown height={ICON_SIZE} width={ICON_SIZE} className="sidebar-chevron" />
        )}
      </button>
      {expanded && (
        <ul className="sidebar-submenu" role="list">
          {children}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <GDIcon height={32} width={32} />
        <SidebarCollapse height={24} width={24} />
      </div>
      <button className="context-switcher">
        <text.span as="action">The Eden Edit</text.span>
        <ChevronDown height={24} width={24} />
      </button>
      <ul className="sidebar-menu">
        {renderMenuItem('dashboard', Dashboard, 'Dashboard')}
        {renderMenuItem('orders', Receipt, 'Orders')}
        {renderMenuItem('transactions', Transactions, 'Transactions')}
        <hr className="sidebar-menu-divider" />
        {renderMenuItem('catalog', Cart, 'Catalog')}
        {renderMenuItem('customers', Users, 'Customers')}
        <hr className="sidebar-menu-divider" />
        {renderMenuItem('payouts', Payouts, 'Payouts')}
        {renderMenuItem('capital', Briefcase, 'Capital', (
          <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-new">NEW</text.span>
        ))}
        {renderMenuItem('reports', BarGraph, 'Reports')}
        <hr className="sidebar-menu-divider" />
        {renderMenuItem('sales-channels', AllSaleschannels, 'Sales Channels', (
          <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-add">ADD</text.span>
        ))}
        {renderMenuItem('in-person', SmartTerminal, 'In Person')}
        {renderMenuItem('online-ordering', ReceiptOk, 'Online Ordering')}
        {renderMenuItem('online-store-channel', Website, 'Online Store', (
          <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-for-you">FOR YOU</text.span>
        ))}
        <hr className="sidebar-menu-divider" />
        {renderMenuItem('payment-tools', AllPaytools, 'Payment Tools', (
          <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-add">ADD</text.span>
        ))}
        {renderMenuItem('pay-links', PayLinks, 'Pay Links')}
        {renderMenuItem('virtual-terminal', VirtualTerminal, 'Virtual Terminal')}
        {renderMenuItem('invoicing', Invoice, 'Invoicing')}
        <hr className="sidebar-menu-divider" />
        {renderMenuItem('app-center', Apps, 'App Center', (
          <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-add">ADD</text.span>
        ))}
        <hr className="sidebar-menu-divider" />
        {renderExpandable(
          'settings',
          settingsExpanded,
          setSettingsExpanded,
          'Settings',
          Settings,
          null,
          <>
            {renderSubItem('payments', 'Payments')}
            {renderSubItem('users', 'Users', (
              <text.span as="caption" size={-2} className="sidebar-menu-item-badge sidebar-menu-item-badge-new">NEW</text.span>
            ))}
            {renderSubItem('online-store', 'Online Store')}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Sidebar;
