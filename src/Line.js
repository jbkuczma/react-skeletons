import React from 'react';
import './styles.css';

const Line = ({
  animated,
  ...props
}) => {
  let classnames = ['react-skeletons__line'];

  animated ?  classnames.push('react-skeletons__animation') : classnames.push('react-skeleton__base');

  return (
    <div className={classnames.join(' ')} />
  );
};

Line.defaultProps = {
  animated: true
};

export default Line;
