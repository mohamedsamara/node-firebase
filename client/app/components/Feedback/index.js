import React from 'react';

import { Link } from '@reach/router';

const Feedback = props => {
  const { message } = props;

  return <div className='input-feedback'>{message}</div>;
};
export default Feedback;
