/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
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
        <SidebarLink title="Dashboard" icon="home" route="/pages/dashboard" onClick={handleHideSidebar} />
        <SidebarLink title="Products" icon="shirt" route="/products" onClick={handleHideSidebar} />
        <SidebarCategory title="Orders" icon="cart">
          <SidebarLink title="New" route="/pages/one" onClick={handleHideSidebar} />
          <SidebarLink title="History" route="/pages/two" onClick={handleHideSidebar} />
        </SidebarCategory>
        <SidebarLink title="Transactions" icon="rupee" route="/Transactions" onClick={handleHideSidebar} />
        <SidebarLink title="Return" icon="cart" route="/Returns" onClick={handleHideSidebar} />
      </ul>

      <ul className="sidebar__block">
        <SidebarLink title="Support" icon="phone" route="/support" onClick={handleHideSidebar} />
        <SidebarLink title="Profile" icon="user" route="/profile" onClick={handleHideSidebar} />
        <SidebarLink title="Log Out" icon="exit" route="/log_in" onClick={handleHideSidebar} />
      </ul>

      <ul className="sidebar__block">
        <SidebarLink title="FAQ" icon="menu" route="/Faq" onClick={handleHideSidebar} />
        <SidebarLink title="How to Use" icon="" route="/how to use" onClick={handleHideSidebar} />
        <SidebarLink
          title="Terms and conditions"
          icon="text-align-justify"
          route="/terms&conditions"
          onClick={handleHideSidebar}
        />
        <SidebarLink
          title="Privacy & Policy"
          icon="text-align-justify"
          route="/privacy&policy"
          onClick={handleHideSidebar}
        />
      </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SidebarContent;
