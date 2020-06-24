import React, { useState } from 'react';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'shards-react';

const Header = () => {
  const [collapseOpen, toggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    toggleNavbar(!collapseOpen);
  };

  return (
    <Navbar type='dark' theme='primary' expand='md'>
      <NavbarBrand href='#'>Node Firebase</NavbarBrand>
      <NavbarToggler onClick={handleToggleNavbar} />
      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink active href='#'>
              Home
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
