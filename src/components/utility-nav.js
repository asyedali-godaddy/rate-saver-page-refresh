import Cart from '@ux/icon/cart';
import Bell from '@ux/icon/bell';
import Apps from '@ux/icon/apps';
import text from '@ux/text';

import '../styles/utility-nav.css';
import '@ux/icon/cart/styles';
import '@ux/icon/bell/styles';
import '@ux/icon/apps/styles';
import '@ux/text/styles';

function UtilityNav() {
  return (
    <div className="utility-nav">
      <button className="utility-nav-item help-center">
        <text.span as='action'>Help Center</text.span>
      </button>
      <button className="utility-nav-item">
        <Bell height={24} width={24} />
      </button>
      <button className="utility-nav-item">
        <Apps height={24} width={24} />
      </button>
      <button className="utility-nav-item">
        <div className="user-avatar">
          HL
        </div>
      </button>
      <button className="utility-nav-item">
        <Cart height={24} width={24} />
      </button>
    </div>
  );
}

export default UtilityNav;