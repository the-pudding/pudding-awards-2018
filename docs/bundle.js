!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({0:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}},u=o;var c={init:function(){console.log("Make something awesome!")},resize:function(){}},a=d3.select("body"),f=0;function s(){var t=a.node().offsetWidth;f!==t&&(f=t,c.resize())}a.classed("is-mobile",u.any()),window.addEventListener("resize",i()(s,150)),function(){if(a.select("header").classed("is-sticky")){var t=a.select(".header__menu"),e=a.select(".header__toggle");e.on("click",function(){var n=t.classed("is-visible");t.classed("is-visible",!n),e.classed("is-visible",!n)})}}(),c.init()},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),v=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==i}(t))return r;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=c.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=function(t,e,r){var i,o,u,c,a,f,s=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(n);function h(e){var n=i,r=o;return i=o=void 0,s=e,c=t.apply(r,n)}function j(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-s>=u}function w(){var t=y();if(j(t))return O(t);a=setTimeout(w,function(t){var n=e-(t-f);return d?b(n,u-(t-s)):n}(t))}function O(t){return a=void 0,v&&i?h(t):(i=o=void 0,c)}function x(){var t=y(),n=j(t);if(i=arguments,o=this,f=t,n){if(void 0===a)return function(t){return s=t,a=setTimeout(w,e),l?h(t):c}(f);if(d)return a=setTimeout(w,e),h(f)}return void 0===a&&(a=setTimeout(w,e)),c}return e=g(e)||0,m(r)&&(l=!!r.leading,u=(d="maxWait"in r)?p(g(r.maxWait)||0,e):u,v="trailing"in r?!!r.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),s=0,i=f=o=a=void 0},x.flush=function(){return void 0===a?c:O(y())},x}}).call(this,n(0))}});