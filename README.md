[![minifed size](https://img.shields.io/bundlephobia/min/react-skeletons.svg?style=flat-square)]()
[![minzip size](https://img.shields.io/bundlephobia/minzip/react-skeletons.svg?style=flat-square)]()
[![npm version](https://badge.fury.io/js/react-skeletons.svg)]()

# react-skeletons
Create beautiful and animated loading skeletons as your views load

## Installation

```bash
  npm install --save react-skeletons
```

## Basic usage

```jsx
  import Skeleton from 'react-skeletons';

  <Skeleton count={4} />
```

## Advanced usage

```jsx
  import React from 'react';
  import Skeleton, { Box, Line } from 'react-skeletons;

  const Grid = ({ ...props }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 200px)',
      gridColumnGap: 16
    }}>
      {props.children}
    </div>
  );

  <SkeletonTheme color='#FF4E50' highlight='#F9D423'>
    <Grid>
      {[0, 1, 2].map((_, index) =>
        <div key={index} style={{ width: 210 }}>
          <Box width={210} height={120} />
          <Skeleton count={2} />
        </div>
      )}
    </Grid>
  </SkeletonTheme>
```

View the storybook to see other possible configurations

```bash
  npm run storybook
```

## Components

### Skeleton
| Prop | Type | Description | Default |
|------|------|-------------|---------|
| count | Number | How many lines should be rendered | 3 |
| animated | Boolean | Should the skeleton be animated | true |

### Line
| Prop | Type | Description | Default |
|------|------|-------------|---------|
| animated | Boolean | Should the line be animated | true |

### Box
| Prop | Type | Description | Default |
|------|------|-------------|---------|
| animated | Boolean | Should the line be animated | true |
| auto | Boolean | Fill container; set's `width` and `height` to `100%` | false |
| height | Number | Height of box (in px) | 72 |
| width | Number | Width of box (in px) | 72 |

### SkeletonTheme
| Prop | Type | Description | Default |
|------|------|-------------|---------|
| color | String | Background color | #F2F2F2 |
| highlight | String | Primary color | #E3E3E3 |
