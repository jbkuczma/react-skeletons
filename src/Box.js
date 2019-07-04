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

  if (animated) {
    classnames.push('react-skeletons__animation');
  }

  return (
    <div
      className={classnames.join(' ')}
      style={{
        height: boxHeight,
        width: boxWidth,
        background: !animated && '#F2F2F2'
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
