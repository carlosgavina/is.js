# is.js

__Current Version:__ 0.6.1

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

With the added [UMD](https://github.com/umdjs/umd) support, you can now `require('is')` as well.


## Usage

Simple and straight forward:

```js

var fruits = ['Mango', 'Oranges'],
	brand = 'Apple';

// true
is(fruits).an(Array);

// false
is(brand).an(Object);

// true
is(brand).a(String);

/**
 * !IMPORTANT: Yes, for the OCDs out there you can use ‘a’ or ‘an’ method,
 *             the result is the same
 */

```


Checking DOM Elements:

```js
// This example uses jQuery
var $body = $('body');

// true
is($body[0]).an(Element);
```


~~You can also replace ternary operators~~ This was **removed** in version 0.6, but here is a solution:

```js

// For the sake of performance this is no longer supported, do the following instead:
var fruits = ['Mango', 'Oranges'];

fruits = is(fruits).an(Array) ? fruits : [];

// Previous example:
// var fruits = ['Mango', 'Oranges'];

// if it is an array returns it, if not returns an empty array
// is(fruits).an(Array, fruits, []);
```


#### Essential differences from `typeof`
|   | typeof | is.js |
|---|--------|-------|
| `new Boolean('4')` | `Object` | `Boolean` |
| `null` | `Object` | `null` |
| `NaN` | `Number` | `!Number` |
| `[]` | `Object` | `Array` |


#### Minified version

Minified version generated using [UglifyJS2](https://github.com/mishoo/UglifyJS2):
```bash
uglifyjs is.js -c -m -o is.min.js
```


#### Tests

This tool would make no sense without tests to keep it on track. So in order to run the current tests cases, make sure you have [Mocha installed](http://mochajs.org/#installation) and then just run `mocha` on this project’s root folder.
