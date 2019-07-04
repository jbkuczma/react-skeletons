import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton from '../src';

storiesOf('Skeleton', module)
  .add('Default', () =>
    <Skeleton />
  )
  .add('No animation', () =>
    <Skeleton animated={false} />
  )
  .add('Custom number of lines', () =>
    <Skeleton count={6} />
  );
