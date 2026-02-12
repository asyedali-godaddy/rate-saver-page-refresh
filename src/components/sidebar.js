import GDIcon from '@ux/icon/gd-the-go';
import SidebarCollapse from '@ux/icon/sidebar-collapse';
import ChevronDown from '@ux/icon/chevron-down';
import Bullets from '@ux/icon/bulleted-list';
import Dashboard from '@ux/icon/dashboard';
import Website from '@ux/icon/website';
import Conversations from '@ux/icon/conversations';
import Shipping from '@ux/icon/shipping';
import Users from '@ux/icon/users3';
import Megaphone from '@ux/icon/megaphone';
import Settings from '@ux/icon/settings';
import Mail from '@ux/icon/mail-open';
import World from '@ux/icon/world';
import Receipt from '@ux/icon/receipt';
import Graph from '@ux/icon/graph';
import Shop from '@ux/icon/sm-business';
import Discount from '@ux/icon/discount';
import Apps from '@ux/icon/apps2';
import text from '@ux/text';

import '../styles/sidebar.css';
import '@ux/icon/gd-the-go/styles';
import '@ux/icon/sidebar-collapse/styles';
import '@ux/icon/chevron-down/styles';
import '@ux/icon/bulleted-list/styles'; 
import '@ux/icon/dashboard/styles';
import '@ux/icon/website/styles';
import '@ux/icon/conversations/styles';
import '@ux/icon/shipping/styles';
import '@ux/icon/users3/styles';
import '@ux/icon/megaphone/styles';
import '@ux/icon/settings/styles';
import '@ux/icon/mail-open/styles';
import '@ux/icon/world/styles';
import '@ux/icon/receipt/styles';
import '@ux/icon/graph/styles';
import '@ux/icon/sm-business/styles';
import '@ux/icon/discount/styles';
import '@ux/icon/apps2/styles';
import '@ux/text/styles';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <GDIcon height={32} width={32} />
        <SidebarCollapse height={24} width={24} />
      </div>
      <button className="context-switcher">
        <text.span as='action'>The Eden Edit</text.span>
        <ChevronDown height={24} width={24} />
      </button>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item active">
          <Dashboard height={24} width={24} />
          Dashboard
        </li>
        <li className="sidebar-menu-item">
          <Bullets height={24} width={24} />
          Orders
          <text.span as='caption' size={-2} className="sidebar-menu-item-badge">5</text.span>
        </li>
        <li className="sidebar-menu-item">
          <Conversations height={24} width={24} />
          Conversations
          <text.span as='caption' size={-2} className="sidebar-menu-item-badge">8</text.span>
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Receipt height={24} width={24} />
          Finances
        </li>
        <li className="sidebar-menu-item">
          <Graph height={24} width={24} />
          Reports
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Megaphone height={24} width={24} />
          Marketing
        </li>
        <li className="sidebar-menu-item">
          <Website height={24} width={24} />
          Website
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Shipping height={24} width={24} />
          Catalog
        </li>
        <li className="sidebar-menu-item">
          <Shop height={24} width={24} />
          Ways to Sell
        </li>
        <li className="sidebar-menu-item">
          <Users height={24} width={24} />
          Customers
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Mail height={24} width={24} />
          Email
        </li>
        <li className="sidebar-menu-item">
          <World height={24} width={24} />
          Domain
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Discount height={24} width={24} />
          Deals
        </li>
        <li className="sidebar-menu-item">
          <Apps height={24} width={24} />
          Apps and Integrations
        </li>
        <hr className="sidebar-menu-divider" />
        <li className="sidebar-menu-item">
          <Settings height={24} width={24} />
          Settings
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;