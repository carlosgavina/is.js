# is.js

__Current Version:__ 0.1

Tiny and bulletproof way to check variable types in javascript.


## Why?

I was bored of using typeof so many times in my apps.


## Quick Start

Include [is.js](is.js) in your page, no dependencies!

```html
<script src="is.js"></script>
```


## Usage

Simple and straight forward:

```js

var a = ['Mango', 'Oranges'],
	b = 'Apple';

	// true
	a.is( Array );

	// false
	b.is( Object );

	// true
	b.is( String );

```


You can also replace triary operations:

```js

var a = ['Mango', 'Oranges'];

	// if it is an array returns it, if not returns an empty array
	a.is( Array, a, [] );

```
