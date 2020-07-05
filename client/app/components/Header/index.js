import React, { useState } from 'react';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Collapse
} from 'shards-react';

import { Link } from '@reach/router';

const Header = () => {
  const [collapseOpen, toggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    toggleNavbar(!collapseOpen);
  };

  return (
    <Navbar type='dark' theme='primary' expand='md'>
      <Link to='/' className='nav-link'>
        Node Firebase
      </Link>

      <NavbarToggler onClick={handleToggleNavbar} />
      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/signup' className='nav-link'>
              Signup
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
