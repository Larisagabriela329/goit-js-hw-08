var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,m=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):u.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function O(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||d&&r>=u}function h(){var e,n,r,i=m();if(O(i))return T(i);f=setTimeout(h,(e=i-c,n=i-l,r=t-e,d?y(r,u-n):r))}function T(e){return(f=void 0,p&&i)?x(e):(i=o=void 0,a)}function j(){var e,n=m(),r=O(n);if(i=arguments,o=this,c=n,r){if(void 0===f)return l=e=c,f=setTimeout(h,t),s?x(e):a;if(d)return f=setTimeout(h,t),x(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},j.flush=function(){return void 0===f?a:T(m())},j}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("9OeKo");const o=document.querySelector("iframe"),u=new Vimeo.Player(o);u.on("timeupdate",(i&&i.__esModule?i.default:i)(function(e){localStorage.setItem("videoplayer-current-time",e.seconds)},1e3));const a=localStorage.getItem("videoplayer-current-time");a&&u.setCurrentTime(a).catch(function(e){console.error("Error setting playback time:",e)});
//# sourceMappingURL=02-video.1d055222.js.map