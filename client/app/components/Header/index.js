import React, { useState, useEffect } from 'react';

import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Button
} from 'shards-react';
import { Link, globalHistory, navigate } from '@reach/router';

import { useAuth } from '../../contexts/Auth';
import NavLink from '../NavLink';

const Header = () => {
  const { authToken, signOut, user } = useAuth();
  const [collapseOpen, toggleNavbar] = useState(false);

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === 'PUSH' || action === 'POP') {
        toggleNavbar(false);
      }
    });
  }, []);

  const handleToggleNavbar = () => {
    toggleNavbar(!collapseOpen);
  };

  const handleSignOut = async () => {
    signOut().then(() => {
      navigate('/login');
    });
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
          {authToken ? (
            <NavItem>
              <NavLink to='/dashboard' className='nav-link'>
                Dashboard
              </NavLink>
            </NavItem>
          ) : (
            <>
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
            </>
          )}
        </Nav>

        {authToken && (
          <Nav navbar className='ml-auto align-items-md-center'>
            {user && (
              <NavItem className='d-none d-md-block'>
                <span className='nav-link'>{user.firstName}</span>
              </NavItem>
            )}
            <NavItem>
              <Button
                className='nav-link btn-none border-0'
                onClick={handleSignOut}
                theme='none'
              >
                Logout
              </Button>
            </NavItem>
          </Nav>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
