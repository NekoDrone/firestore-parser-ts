module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=t.FireStoreParser=function e(t){var r=function(e){var t={arrayValue:1,booleanValue:1,geoPointValue:1,integerValue:1,mapValue:1,nullValue:1,referenceValue:1,stringValue:1,timestampValue:1};return Object.keys(e).find(function(e){return 1===t[e]})}(t);return"integerValue"===r?t=Number(t[r]):"arrayValue"===r?t=t[r].values.map(function(t){return e(t)}):"mapValue"===r?t=e(t[r].fields):"geoPointValue"===r?t=o({latitude:0,longitude:0},t[r]):r?t=t[r]:"object"===(void 0===t?"undefined":n(t))&&Object.keys(t).forEach(function(r){return t[r]=e(t[r])}),t};t.default=u}]).default;