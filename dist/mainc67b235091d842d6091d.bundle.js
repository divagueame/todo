!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){console.log("Active Project on start is null")},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);r(1);var n=r(0);console.log("INIT");let o=document.querySelector(".currentWorkingProject");const c=document.querySelector("#addProjectForm");c.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value;var r;console.log("The new project title is: ",t),localStorage.setItem("Project"+t,t),r=t,o.innerHTML=""+r,console.log("The previous Active project was: ",n.readActiveProject),Object(n.changeActiveProject)("POLLAS"),console.log("The new Active project is: ",n.readActiveProject)})),c.addEventListener("submit",(function(){c.reset()}))}]);