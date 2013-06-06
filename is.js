/**
 *
 * is.js - The best way to see variable types.
 *
 * @author Carlos Gavina
 * @contact hello@carlosgavina.com
 * @version 0.3
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
(function( name ) {

  var is = function( o ) {

      var a = function( what, t, f ) {
              var iftrue    = t === undefined ? true : t,
                  iffalse   = f === undefined ? false : f,
                  result    = o === undefined && o === what ? iftrue : iffalse;


              if ( ( o && o.constructor === what ) ) {
                result = iftrue;
              }

              return result;
          };

      return { a: a, an: a };

    };

  window[name] = is;

})( 'is' );
