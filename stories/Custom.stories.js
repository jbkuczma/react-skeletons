import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton, { Box, Line } from '../src';

storiesOf('Custom Skeletons', module)
  .add('YouTube thumbnails', () =>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 200px)',
      gridColumnGap: 16
    }}>
      { [0, 1, 2].map((_, index) =>
        <div key={index} style={{ width: 210 }}>
          <Box width={210} height={120} />
          <Skeleton count={2} />
        </div>
      )}
    </div>
  )
  .add('3x3 grid', () =>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 144px)',
      gridTemplateRows: 'repeat(3, 144px)',
      gridRowGap: 4,
      gridColumnGap: 4
    }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <Box key={index} auto /> )}
    </div>
  );
