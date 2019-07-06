import React from 'react';

const SkeletonTheme = ({
  color,
  highlight,
  ...props
}) => {
  return (
    <div
      style={{
        '--react-skeleton-primary-color': color,
        '--react-skeleton-highlight-color': highlight
      }}
    >
      { props.children }
    </div>
  );
};

SkeletonTheme.defaultProps = {
  color: '#F2F2F2',
  highlight: '#E3E3E3'
};

export default SkeletonTheme;
