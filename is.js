/**
 *
 * is.js - The best way to see variable types.
 *
 * @author Carlos Gavina
 * @contact hello@carlosgavina.com
 * @version 0.1
 *
 * @github https://github.com/carlosgavina/is.js
 *
 * @license
 *     This program is free software. It comes without any warranty, to
 *     the extent permitted by applicable law. You can redistribute it
 *     and/or modify it under the terms of the Do What The Fuck You Want
 *     To Public License, Version 2, as published by Sam Hocevar. See
 *     http://sam.zoy.org/wtfpl/COPYING for more details.
 *
 * @copyright 2013, Carlos Gavina
 *
 *
 * @example
 *
 *  on github: https://github.com/carlosgavina/is.js
 *
 */
(function() {

  var is = function( what, t, f ) {

    var iftrue    = typeof t !== 'undefined' ? t : true,
        iffalse   = typeof f !== 'undefined' ? f : false,
        result    = iffalse;

    if ( this.constructor === what ) {
      result = iftrue;
    }

    return result;

  };

  String.prototype.is     = is;
  Array.prototype.is      = is;
  Object.prototype.is     = is;
  Number.prototype.is     = is;
  Boolean.prototype.is    = is;
  Function.prototype.is   = is;

})();