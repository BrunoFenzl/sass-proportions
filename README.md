# Responsive proportional css elements & layouts.

This is a set of mixins aimed to create css only, responsive proportional elements. Imagine a perfect square (1:1) on mobile, a landscape (3:2) on tablets and wide screen (16:9) on larger monitors. Or maybe you want to reset proportions to auto on some breakpoints. You can even create grids and layouts with it (not to confuse with the CSS Grid Layout Module).

[Example](https://brunofenzl.github.io/sass-proportions/)

## Installing

```javascript
npm install sass-proportions
```

## How to use

The main.scss comes with default proportions and variables set but won't generate any classes until you include make-props() somewhere in your scss:

```scss
@include make-props();
```

Doing so will generate all classes on all breakpoints based on the defaults. Alternatively you can use the mixins to generate only the code you need.

Below is the list of variables and their default values:

### Variables

```scss
$ns: 'prop' !default;
```
Namespace to add to the generated classes. Default is 'prop'. Classes will be generated like .namespace-breakpoint-proportion

```scss
$proportions: (
	'1x1': 	(1, 1),
	'2x1': 	(2, 1),
	'3x1': 	(3, 1),
	'widescreen': (16, 9),
	'tall': (1, 2),
	.
	.
	.
) !default;
```
Nested map of proportions to generate. Proportions are defined with a string key e.g. '5x2' and a map of unitless sizes in the order (width, height). The keys will be used in the class name, for example: proportion-breakpoint-5x2.

```scss
$grid-breakpoints: (
	xs: 0,
	sm: 576px,
	md: 768px,
	lg: 992px,
	xl: 1200px
) !default;
```
Map defining the breakpoints. It's the same map from Bootstrap 4 so if you are using bootstrap, you will not need to override anything here.

```scss
$base-gutter: 1rem !default;
```
Horizontal and vertical gutters to apply on element.

```scss
$debug: false !default;
```
If true, will display an overlay with the name of the current proportion.


### Mixins

```scss
@include make-props();
```
Will generate all proportions in all breakpoints listed in $proportions and $grid-breakpoints. 

```scss
@include make-prop($width, $height, $gutters: null);
```
Generate styles for single proportion.

```scss
@include make-inner($gutters: $base-gutter);
```
Generate styles for inner container that will hold content.

```scss
@include reset-props();
```
Generate reset styles for current breakpoint

#### Example:

```scss
.my-proportional-element{
	@include make-base-prop();
	@include make-prop(3, 2, null); // $width, $height, $gutters override is optional

	.my-proportional-element__inner{
		@include make-inner();
	}
}
```

*outputs:*

```css
.my-proportional-element{
	/* make-base-prop() outputs: */
	position: relative;
	width: 100%!important;
	height: 0;

	/* make-prop(3, 2) outputs: */
	padding-bottom: 66.66666667%;

	.my-proportional-element__inner{
		position: absolute;
  		overflow: hidden;
  		top: .5rem;
		right: .5rem;
		bottom: .5rem;
		left: .5rem;
	}
}
```
