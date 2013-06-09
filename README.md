# is.js

__Current Version:__ 0.6

Tiny and bulletproof way to check variable types ~~and do ternary operators~~ in javascript.


#### Why?

I was bored of using `typeof` ~~and `ternary operators`~~ so many times in my apps.


#### Supported Browsers

All modern browsers and Internet Explorer 8+


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


~~You can also replace ternary operators~~:

```js

// For the sake of performance this is no longer supported, tho the following instead:
var fruits = ['Mango', 'Oranges'];

fruits = is( fruits ).an( Array ) ? fruits : [];



// Previous example:
// var fruits = ['Mango', 'Oranges'];

	// if it is an array returns it, if not returns an empty array
	// is( fruits ).an( Array, fruits, [] );
```


Checking DOM Elements:

```js
// This example uses jQuery
var $body = $('body');

	// true
	is( $body[0] ).an( Element );
```
