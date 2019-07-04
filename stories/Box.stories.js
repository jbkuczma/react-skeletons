import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton, { Box, Line } from '../src';

storiesOf('Box', module)
  .add('Default box', () =>
    <Box />
  )
  .add('Non animated box', () =>
    <Box animated={false} />
  )
  .add('Rectangle', () =>
    <Box height={240} width={480} />
  )
  .add('Custom Skeleton - YouTube thumbnail', () =>
    <div style={{ width: 210 }}>
      <Box width={210} height={120} />
      <Skeleton count={2} />
    </div>
  )
  .add('Custom Skeleton - 3x3 grid', () =>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 144px)',
      gridTemplateRows: 'repeat(3, 144px)',
      gridRowGap: 4,
      gridColumnGap: 4
    }}>
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
      <Box auto />
    </div>
  );
