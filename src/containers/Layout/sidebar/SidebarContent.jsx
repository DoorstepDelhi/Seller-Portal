import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({ onClick }) => {
  const handleHideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink title="Dashboard" icon="home" route="/log_in" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Products" icon="shirt" route="/products" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarCategory title="Orders" icon="cart">
          <SidebarLink title="New" route="/orders/new" onClick={handleHideSidebar} />
          <SidebarLink title="Details" route="/orders/details" onClick={handleHideSidebar} />
          <SidebarLink title="History" route="/orders/history" onClick={handleHideSidebar} />
        </SidebarCategory>
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Transactions" icon="rupee" route="/transactions" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Return" icon="cart" route="/returns" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Support" icon="phone" route="/support" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Terms and conditions" icon="text-align-justify"
          route="/terms&conditions" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Privacy & Policy" icon="text-align-justify" route="/privacy&policy" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Profile" icon="user" route="/profile" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="FAQ" icon="menu" route="/Faq" onClick={handleHideSidebar} />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="How to Use" icon="" route="/how to use" onClick={handleHideSidebar} />
      </ul>
    </div>
  );
};

export default SidebarContent;
