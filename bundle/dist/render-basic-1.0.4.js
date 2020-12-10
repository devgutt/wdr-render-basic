(()=>{var n={343:(n,e,t)=>{"use strict";n.exports=t(907)},907:n=>{"use strict";n.exports=function(n){document.addEventListener("DOMContentLoaded",(function(){var e=JSON.parse(document.body.innerText);document.body.innerText="",document.documentElement.removeAttribute("hidden"),n&&"function"==typeof n&&n(e)}))}},433:n=>{"use strict";n.exports={create:function(n,e,t){var r=function(n){switch(n){case"svg":case"path":return document.createElementNS("http://www.w3.org/2000/svg",n);default:return document.createElement(n)}}(n);for(var o in e){var a=e[o];if("style"==o)for(var i in a)void 0!==a[i]&&(r.style[i]=a[i]);else"innerHTML"==o?r.innerHTML=a:null!=a&&r.setAttribute(o,a)}return t&&(Array.isArray(t)?t.forEach((function(n){n&&r.appendChild(n)})):r.innerText=t),r},append:function(n,e){Array.isArray(e)?e.forEach((function(e){e&&n.appendChild(e)})):n.appendChild(e)}}},730:(n,e,t)=>{"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var o=t(433),a=t(746);function i(n,e,t,c){if(Array.isArray(t)){var s=o.create("div",{class:e});o.append(n,s),t.forEach((function(n){if("object"==r(n)){var t=o.create("div",{class:"highlight"});o.append(s,t),i(t,e,n,c)}else i(s,null,n,c)}))}else if("object"==r(t)){var u=n;for(var l in 1==c?(u=o.create("section",{class:e}),o.append(n,[o.create("a",{name:e},""),u])):c>1&&(u=o.create("div",{class:e}),o.append(n,u)),t)if(t.hasOwnProperty(l)){if(l.startsWith("#"))continue;i(u,l,t[l],c+1)}}else"title"==e?o.append(n,o.create("h".concat(c<6?c:"6"),{class:e,innerHTML:a(t+"")})):o.append(n,o.create("p",{class:e,innerHTML:a(t+"")}))}n.exports=function(n){o.append(document.head,[o.create("meta",{charset:"utf-8"}),o.create("meta",{name:"viewport",content:"width=device-width","initial-scale":1}),o.create("title",{},n["#title"]||n.title)]),n["#render"]&&n["#render"].css&&o.append(document.head,o.create("link",{rel:"stylesheet",href:n["#render"].css}));var e=o.create("main",{});o.append(document.body,e),i(e,"",n,0)}},746:n=>{"use strict";function e(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}n.exports=function(n){if(void 0===n)return"";if("string"!=typeof n)return"";var t={},r=function(n){return t[n]?(t[n]=!1,"</"+n+">"):(t[n]=!0,"<"+n+">")};return n.replace(/(\*\*?|__?|~~|[<>\r\n])|\[([^[]*)\]\(([^(]*)\)|!\[([^[]*)\]\(([^(]*)\)|`([^`]+)`|```((?:.|\n)*)```|(#{1,6})\ (.*)/g,(function(n,t,o,a,i,c,s,u,l,d){return t?"**"==t||"__"==t?r("strong"):"*"==t||"_"==t?r("em"):"~~"==t?r("del"):">"==t?"&gt;":"<"==t?"&lt;":"\n"==t?"<br>":"":o?"<a href='".concat(a,"'>").concat(o,"</a>"):i?"<img src='".concat(c,"' alt='").concat(i,"'/>"):s?"<code>".concat(e(s),"</code>"):u?"<pre>".concat(e(u),"</pre>"):d?"<h".concat(l.length,">").concat(d,"</h1>"):""}))}},150:(n,e,t)=>{(e=t(645)(!1)).push([n.id,':root {\n    --font_color: #1A202C;\n    --link_color: #3c4fe0;\n    --back_item: rgba(0,0,0,0.05);\n    --max_width: 800px;\n}\n\nhtml {\n\tbox-sizing: border-box;\n}\nhtml, body {\n\tmargin: 0;\n\tpadding: 0;\n}\n*, *:before, *:after {\n\tbox-sizing: inherit;\n}\nhtml {\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-font-smoothing: antialiased;\n\ttext-rendering: optimizeLegibility;\n\ttext-size-adjust: 100%;\n}\nbody {\n    font-size: 18px;\n    color: var(--font_color);\n\tfont-weight: 400;\n\tbackground-color: #ffffff;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-font-smoothing: antialiased;\n\ttext-rendering: optimizeLegibility;\n    text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n}\nbody, button, input, select, textarea {\n\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;\n}\ncode, pre {\n\t-moz-osx-font-smoothing: auto;\n\t-webkit-font-smoothing: auto;\n\tfont-family: monospace;\n}\na {\n    color: var(--link_color);\n    text-decoration: none;\n}\na:hover {\n    text-decoration: underline;\n}\nli {\n    margin: 20px 0;\n}\niframe {\n\tborder: 0;\n}\nfieldset {\n\tborder: none;\n}\nmain {\n    max-width: var(--max_width);\n    margin: 0 auto;\n    padding: 32px 16px;\n}\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 32px 0 16px;\n}\np {\n    margin: 16px 0;\n    line-height: 1.4;\n}\nh1 {\n    font-size: 3em;\n    margin: 64px 0 32px;\n    font-weight: 900;\n}\npre {\n    padding: 24px !important;\n    overflow: scroll;\n}\npre, .highlight {\n    border-radius: 4px;\n    background-color: var(--back_item);\n    padding: 8px 24px;\n    margin: 16px 0;\n}\ncode {\n    background: var(--back_item);\n    padding: 0px 2px;\n    border-radius: 3px;\n}\n',""]),n.exports=e},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,r,o,a=n[1]||"",i=n[3];if(!i)return a;if(e&&"function"==typeof btoa){var c=(t=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),s=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(s).concat([c]).join("\n")}return[a].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},640:(n,e,t)=>{var r=t(379),o=t(150);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.id,o,""]]);r(o,{insert:"head",singleton:!1}),n.exports=o.locals||{}},379:(n,e,t)=>{"use strict";var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:h(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var a=m++;t=p||(p=s(e)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(n,e),u=0;u<t.length;u++){var l=i(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n=t(343),e=t.n(n),r=(t(640),t(730));e()((function(n){r(n)}))})()})();