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
  );
