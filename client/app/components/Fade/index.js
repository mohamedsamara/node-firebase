import React from 'react';

import { CSSTransition } from 'react-transition-group';

const Fade = props => {
  const { show, children } = props;

  return (
    <div style={{ minHeight: 70 }}>
      <CSSTransition in={show} timeout={300} classNames='alert' unmountOnExit>
        {children}
      </CSSTransition>
    </div>
  );
};

export default Fade;
