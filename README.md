# is.js

__Current Version:__ 0.3

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

var fruits 	= ['Mango', 'Oranges'],
	brand 	= 'Apple';

	// true
	is( fruits ).an( Array );

	// false
	is( brand ).an( Object );

	// true
	is( brand ).a( String );

	/**
	 * !IMPORTANT : Yes, for the OCD's out there you can use 'a' or 'an' method, the result is the same
	 */

```


You can also replace triary operations:

```js

var fruits = ['Mango', 'Oranges'];

	// if it is an array returns it, if not returns an empty array
	is( fruits ).an( Array, fruits, [] );
```
