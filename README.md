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

  <Skeleton />
```

## Advanced usage

Run react-skeleton's storybook and view "Custom Skeletons"

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
