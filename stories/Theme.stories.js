import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton, { SkeletonTheme, Line, Box } from '../src';

const Grid = ({ ...props }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 200px)',
    gridColumnGap: 16
  }}>
    {props.children}
  </div>
);

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
        <Box height={90} width={90} />
      </SkeletonTheme>
      <SkeletonTheme color='#292E49' highlight='#FFE259'>
        <Line />
      </SkeletonTheme>
      <SkeletonTheme color='#FC354C' highlight='#0ABFBC'>
        <Line />
      </SkeletonTheme>
    </React.Fragment>
  )
  .add('YouTube thumbnails', () =>
    <SkeletonTheme color='#FF4E50' highlight='#F9D423'>
      <Grid>
        { [0, 1, 2].map((_, index) =>
          <div key={index} style={{ width: 210 }}>
            <Box width={210} height={120} />
            <Skeleton count={2} />
          </div>
        )}
      </Grid>
    </SkeletonTheme>
  );
