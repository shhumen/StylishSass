# Wookiee Style Sass

![Wookiee Style Sass Logo](https://example.com/wookiee-style-sass-logo.png)

## Overview

Wookiee Style Sass is a Sass utility library inspired by the beloved Star Wars character Chewbacca, also known as Chewie. This library provides convenient utility classes for common styling tasks in web development, allowing you to easily apply consistent styles across your projects.

## Installation

You can install Wookiee Style Sass via npm:

```bash
npm install wookiee-style-sass
```

# CSS Utilities Documentation

This documentation provides an overview of the CSS utilities generated from SASS mixins and functions.

## Padding and Margin Utilities

### Padding

- `.p-0`: Sets padding to 0.
- `.p-1` to `.p-5`: Sets padding in incremental steps.
- `.px-0` and `.py-0` to `.px-5` and `.py-5`: Sets padding on the x-axis (horizontal) and y-axis (vertical).
- `.pl-0` to `.pl-5`: Sets padding on the left.
- `.pr-0` to `.pr-5`: Sets padding on the right.
- `.pt-0` to `.pt-5`: Sets padding on the top.
- `.pb-0` to `.pb-5`: Sets padding on the bottom.

### Margin

- `.m-0`: Sets margin to 0.
- `.m-1` to `.m-5`: Sets margin in incremental steps.
- `.mx-0` and `.my-0` to `.mx-5` and `.my-5`: Sets margin on the x-axis (horizontal) and y-axis (vertical).
- `.ml-0` to `.ml-5`: Sets margin on the left.
- `.mr-0` to `.mr-5`: Sets margin on the right.
- `.mt-0` to `.mt-5`: Sets margin on the top.
- `.mb-0` to `.mb-5`: Sets margin on the bottom.

## Opacity Utility

- `.o-10` to `.o-100`: Sets opacity in incremental steps.

## Border Radius Utility

- `.br-none`: Sets border radius to 0.
- `.br-xs` to `.br-full`: Sets border radius in various sizes.

## Display Utility

- `.d-none`: Sets display to none.
- `.d-block`, `.d-inline`, `.d-inline-block`: Sets display to block, inline, or inline-block, respectively.
- `.d-inline-flex`, `.d-flex`: Sets display to inline-flex or flex, respectively.
- `.d-grid`: Sets display to grid.

## Font Size Utility

- `.fs-sm` to `.fs-xxl`: Sets font size in various sizes.

## Font Weight Utility

- `.fw-300` to `.fw-900`: Sets font weight in various weights.

## Width and Height Utility

- `.w-10` to `.w-100`: Sets width in percentage increments.
- `.h-10` to `.h-100`: Sets height in percentage increments.

## Alignment Utility

- `.align-items-center`, `.align-items-end`, `.align-items-start`: Aligns items vertically at center, end, or start, respectively.

## Position Utility

- `.position-absolute`, `.position-fixed`, `.position-sticky`, `.position-relative`: Sets positioning to absolute, fixed, sticky, or relative, respectively.

## Text Decoration Utility

- `.text-dec-none` to `.text-dec-double`: Sets text decoration to none, dashed, dotted, underline, line-through, or double, respectively.

## Text Transform Utility

- `.text-t-capitalize`, `.text-t-lowercase`, `.text-t-uppercase`: Sets text transform to capitalize, lowercase, or uppercase, respectively.

# Container Documentation

## Container Styles

Containers provide a structured layout for content. Different container sizes are defined based on breakpoints for responsive design.

### `.container-xs`

- Description: Container style for extra-small screens.
- Breakpoint: 0px
- Max Width: 0px

### `.container-sm`

- Description: Container style for small screens.
- Breakpoint: 576px
- Max Width: 576px

### `.container-md`

- Description: Container style for medium screens.
- Breakpoint: 768px
- Max Width: 768px

### `.container-lg`

- Description: Container style for large screens.
- Breakpoint: 992px
- Max Width: 992px

### `.container-xl`

- Description: Container style for extra-large screens.
- Breakpoint: 1200px
- Max Width: 1200px

### `.container-xxl`

- Description: Container style for extra-extra-large screens.
- Breakpoint: 1400px
- Max Width: 1400px

# Color and Button Documentation

## Color Styles

Colors are defined for various elements such as text, backgrounds, and buttons.

### Text Colors

- `.text-primary`
- Color: #ab7442

- `.text-light`
- Color: #f5f5f5

- `.text-dark`
- Color: #353535

- `.text-white`
- Color: #fff

- `.text-gray`
- Color: #6c757d

- `.text-gray-dark`
- Color: #343a40

- `.text-secondary`
- Color: #6c757d

- `.text-success`
- Color: #198754

- `.text-danger`
- Color: #dc3545

- `.text-warning`
- Color: #ffc107

- `.text-info`
- Color: #0dcaf0

### Background Colors

- `.bg-primary`
- Color: #ab7442

- `.bg-light`
- Color: #f5f5f5

- `.bg-dark`
- Color: #353535

- `.bg-white`
- Color: #fff

- `.bg-gray`
- Color: #6c757d

- `.bg-gray-dark`
- Color: #343a40

- `.bg-secondary`
- Color: #6c757d

- `.bg-success`
- Color: #198754

- `.bg-danger`
- Color: #dc3545

- `.bg-warning`
- Color: #ffc107

- `.bg-info`
- Color: #0dcaf0

## Button Styles

Button styles are defined for various colors.

- `.btn-primary`
- Background Color: #ab7442
- Text Color: #fff

- `.btn-light`
- Background Color: #f5f5f5
- Text Color: #fff

- `.btn-dark`
- Background Color: #353535
- Text Color: #fff

- `.btn-white`
- Background Color: #fff
- Text Color: #353535

- `.btn-gray`
- Background Color: #6c757d
- Text Color: #fff

- `.btn-success`
- Background Color: #198754
- Text Color: #fff

- `.btn-danger`
- Background Color: #dc3545
- Text Color: #fff

- `.btn-warning`
- Background Color: #ffc107
- Text Color: #353535

- `.btn-info`
- Background Color: #0dcaf0
- Text Color: #353535
