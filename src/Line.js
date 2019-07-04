import React from 'react';
import './styles.css';

const Line = ({ animated, ...props }) => {
  let classnames = ['react-skeletons__line'];

  if (animated) {
    classnames.push('react-skeletons__animation');
  }

  return (
    <div
      className={classnames.join(' ')}
      style={{ background: !animated && '#F2F2F2' }}
    />
  );
};

Line.defaultProps = {
  animated: true
};

export default Line;
