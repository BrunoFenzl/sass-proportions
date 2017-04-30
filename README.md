# Responsive proportional css layouts.

This is a set of mixins aimed to create css only, responsive proportional elements. Imagine a perfect square (1:1) on mobile, a landscape (3:2) on tablets and wide screen (16:9) on larger monitors. Or maybe you want to reset proportions to auto on some breakpoints. You can even create grids and layouts with it (not to confuse with the CSS Grid Layout Module).

[Example]()

[Docs]()

## Installing

```javascript
npm install sassy-proportions
```

## Build

```javascript
npm install && gulp
```

## How to use

The main.scss comes with default proportions and variables set but won't generate any classes until you call make-props somewhere in your scss:

```scss
@include make-props();
```

Doing so will generate all classes on all breakpoints based on the defaults. Alternatively you can use the mixins to generate only the code you need.

Below is the list of variables and their default values:

```sass
$prefix: 'prop';
```
Prefix to add to the generate classes. Default is 'prop'. Classes will be generated like .myprefix-breakpoint-proportion

```sass
$proportions: (
	'5x2': 	(5, 2), 
	'5x3': 	(5, 3),
	'16x9':	(16, 9)	
);
```
Nested map of proportions to generate. Proportions are defined with a string key e.g. '5x2' and a map of unitless sizes in the order (width, height). The keys will be used in the class name, so for example if would have prop-*-5x2. If you decided to name your proportion prop-*-widescreen, the entry in the map would look like 'widescreen': (16, 9). Totally up to you.

```sass
$grid-breakpoints: (
	xs: 0,
	sm: 576px,
	md: 768px,
	lg: 992px,
	xl: 1200px
) !default;
```
Map defining the breakpoints. It's the same map from Bootstrap 4 so if you are using bootstrap, you will not need to override anything here. 


```sass
$grid-gutter-width-base: 1rem!default;
```

