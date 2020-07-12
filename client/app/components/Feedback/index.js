import React from 'react';

const Feedback = props => {
  const { message } = props;

  return <div className='input-feedback'>{message}</div>;
};

export default Feedback;
