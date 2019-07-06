import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton, { SkeletonTheme, Line, Box } from '../src';

storiesOf('Theming', module)
  .add('Default theme', () =>
    <SkeletonTheme>
      <Skeleton />
    </SkeletonTheme>
  )
  .add('Change background color', () =>
    <SkeletonTheme color='#333333'>
      <Skeleton />
    </SkeletonTheme>
  )
  .add('Custom colors - Default <Skeleton />', () =>
    <SkeletonTheme color='#FF4E50' highlight='#F9D423'>
      <Skeleton />
    </SkeletonTheme>
  )
  .add('Apply to all', () =>
    <SkeletonTheme color='#00DBDE' highlight='#FC00FF'>
      <Line />
      <Line />
      <Line />
    </SkeletonTheme>
  )
  .add('Mixing', () =>
    <React.Fragment>
      <SkeletonTheme color='#0099F7' highlight='#F11712'>
        <Line />
      </SkeletonTheme>
      <SkeletonTheme color='#292E49' highlight='#FFE259'>
        <Line />
      </SkeletonTheme>
      <SkeletonTheme color='#FC354C' highlight='#0ABFBC'>
        <Line />
      </SkeletonTheme>
    </React.Fragment>
  );
