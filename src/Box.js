import React from 'react';
import './styles.css';

const Box = ({
  auto,
  animated,
  height,
  width,
  ...props
}) => {
  let classnames = ['react-skeletons__box'];
  const boxHeight = auto ? '100%' : height;
  const boxWidth = auto ? '100%' : width;

  animated ?  classnames.push('react-skeletons__animation') : classnames.push('react-skeleton__base');

  return (
    <div
      className={classnames.join(' ')}
      style={{
        height: boxHeight,
        width: boxWidth
      }}
    />
  );
};

Box.defaultProps = {
  auto: false,
  animated: true,
  height: 72,
  width: 72
};

export default Box;
