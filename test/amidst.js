!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=()=>{const e=document.getElementsByTagName("nav");t(e,"role","navigation")},t=(e,t,n)=>{for(const o of e)o.setAttribute(t,n)};e();const n=document.getElementsByTagName("body")[0];new MutationObserver(t=>{for(const n of t)if("childList"===n.type)return void e()}).observe(n,{attributes:!1,childList:!0})})},function(e,t,n){"use strict";n.r(t);const o=e=>{document.body.classList.remove("user-is-tabbing"),window.removeEventListener("mousedown",o),window.addEventListener("keydown",r)},r=e=>{9===e.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",r),window.addEventListener("mousedown",o))};window.addEventListener("keydown",r);n(0)}]);