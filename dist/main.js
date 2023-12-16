(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(458),t.b),l=i()(o()),p=d()(s);l.push([e.id,`:root{\n  --background-body: rgba(0, 0, 0, 0.6);\n  --border-color:  #222;\n  --main-font-color: aliceblue;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(${p});\n}\n\np{\n    font-family: Arial;\n    font-size: 25px;\n}\n\nh2{\n    font-family: sans-serif;\n    font-style: italic;\n    font-size: 30px;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n    padding: 1rem;\n    border-top: 1px solid var(--border-color);\n    background-color:  var(--background-body);\n    color: var(--main-font-color);\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n    padding: 2rem;\n    background-color: var(--background-body);\n    border-bottom: 1px solid var(--border-color);\n    font-family: sans-serif;\n    font-style: italic;\n  }\n\n  .navigation{\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n    font-size: 30px;\n    gap: 2rem;\n    font-family: sans-serif;\n    font-style: oblique;\n    font-weight: bold;\n  }\n\n  .button-nav{\n    background-color: transparent;\n    padding: 2rem;\n    font-size: 20px;\n    border: #222;\n    cursor: pointer;\n    color: var(--main-font-color);\n  }\n\n  .title{\n    font-size: 40px;\n    color: var(--main-font-color);\n  }\n\n  .body-content{\n    display: flex;\n    background-color: var(--background-body);\n    border: 1px solid var(--border-color);\n    color: var(--main-font-color);\n  }\n\n  .home,\n  .menu,\n  .contact{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n\n  `,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},458:(e,n,t)=>{e.exports=t.p+"3cd72df1589be807eb50.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;t(458);const h=()=>{const e=document.createElement("h1");e.innerHTML="Welcome to Luigi's awesome restaurant";const n=document.createElement("p"),t=document.createElement("p");n.innerHTML="Get ready to have the best experience in town. A genuine culinary experience.",n.classList.add("p"),t.innerHTML="With Caribbean flavors mixed with Pacific and native indigineous cuisine from Colombia";const r=document.createElement("home");return r.classList.add("home"),r.appendChild(e),r.appendChild(n),r.appendChild(t),r};function b(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("p");return n.textContent="Luigi's Cuisine",n.classList.add("title"),e.appendChild(n),e.appendChild(function(){const e=document.createElement("navigation");e.classList.add("navigation");const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Home",n.addEventListener("click",(()=>{const e=document.getElementById("body");e.innerHTML="",e.appendChild(h())}));const t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Menu",t.addEventListener("click",(()=>{const e=document.getElementById("body");e.innerHTML="",e.appendChild(function(){let e=document.createElement("h2");e.innerHTML="Starters";let n=document.createElement("p"),t=document.createElement("p");n.innerHTML="Fish soup",t.innerHTML="Caribañola",n.classList.add("p"),t.classList.add("p");const r=document.createElement("menu");return r.classList.add("menu"),r.appendChild(e),r.appendChild(n),r.appendChild(t),e=document.createElement("h2"),n=document.createElement("p"),t=document.createElement("p"),e.innerHTML="Main Dishes",n.innerHTML="Fried deep Snapper with coconut rice and patacon",t.innerHTML="Pulled Pork wrap in its own skin full of rice, peas and chick peas",r.appendChild(e),r.appendChild(n),r.appendChild(t),e=document.createElement("h2"),n=document.createElement("p"),t=document.createElement("p"),e.innerHTML="Dessert",n.innerHTML="Strawberry cheese cake",t.innerHTML="Apple pie",r.appendChild(e),r.appendChild(n),r.appendChild(t),r}())}));const r=document.createElement("button");return r.classList.add("button-nav"),r.textContent="Contact",r.addEventListener("click",(()=>{const e=document.getElementById("body");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("h2");e.innerHTML="CONTACT";const n=document.createElement("p");n.innerHTML="Carrera 6 666 66 number 6",n.classList.add("p");const t=document.createElement("p");t.innerHTML="Bogota, Colombia",t.classList.add("p");const r=document.createElement("contact");return r.classList.add("contact"),r.appendChild(e),r.appendChild(n),r.appendChild(t),r})())})),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}()),e}!function(){const e=document.getElementById("content"),n=document.createElement("body");n.classList.add("body-content"),n.setAttribute("id","body"),e.appendChild(b()),n.appendChild(h()),e.appendChild(n),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p");return n.textContent=`Copyright © ${(new Date).getFullYear()} Luis J.`,e.appendChild(n),e}())}()})()})();