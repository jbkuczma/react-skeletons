import React from 'react';
import Line from './Line';

const Skeleton = ({
  count,
  animated
}) => {

  const linesToRender = Array.apply(null, { length: count }).map(Number.call, Number);

  return (
    <div className='react-skeleton__container'>
      { linesToRender.map((_, index) =>
        <Line
          key={`react-skeletons-line-${index}`}
          animated={animated}
        />
      )}
    </div>
  );
};

Skeleton.defaultProps = {
  count: 3,
  animated: true
};

export default Skeleton;
