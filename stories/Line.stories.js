import React from 'react';
import { storiesOf } from '@storybook/react';
import { Line } from '../src';

storiesOf('Line', module)
  .add('Single line - default', () =>
    <Line />
  )
  .add('Single line - no animation', () =>
    <Line animated={false} />
  );
