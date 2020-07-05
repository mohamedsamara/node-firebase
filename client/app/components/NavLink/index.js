import React from 'react';

import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: `${props.className} ${isCurrent ? 'active' : ''}`
      };
    }}
  />
);

export default NavLink;
