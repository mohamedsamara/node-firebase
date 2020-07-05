import React, { useState } from 'react';

import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from 'shards-react';
import { Link } from '@reach/router';

import NavLink from '../NavLink';

const Header = () => {
  const [collapseOpen, toggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    toggleNavbar(!collapseOpen);
  };

  return (
    <Navbar type='dark' theme='primary' expand='md' className='header-nav'>
      <Link to='/' className='navbar-brand'>
        Node Firebase
      </Link>

      <NavbarToggler onClick={handleToggleNavbar} />
      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/login' className='nav-link'>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/signup' className='nav-link'>
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
