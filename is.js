/**
 * is.js - The best way to see variable types.
 *
 * @author Carlos Gavina
 * @contact hello@carlosgavina.com
 * @version 0.6
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
 * @see
 *     In order to formet easy of use, UMD design patter was applied.
 *     Consult https://github.com/umdjs/umd for more information about it.
 *
 * @example
 *     On GitHub: https://github.com/carlosgavina/is.js
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.is = factory();
    }
}(this, function () {
    return function (o) {
        var a = function (what) {
            return !!(
                (o !== undefined && o !== null && o.constructor === what && what) ||
                (what && toString.call(o) ===  '[object Object]' && o instanceof what) ||
                (!what && what === o)
            );
        };

        return {
            a: a,
            an: a
        };
    };
}));