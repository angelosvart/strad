parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cZF8":[function(require,module,exports) {
"use strict";async function t(){try{const e=await fetch("https://baconipsum.com/api/?type=all-meat&paras=1",{method:"GET"});return await e.json()}catch(t){console.log("Failed to fetch",t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getText=t;
},{}],"QTXR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./api");class t{constructor(){this.text=[],this.image="https://picsum.photos/1920/1088"}async init(){const t=document.querySelector("#app"),s=(await(0,e.getText)())[0].split(" ");let a=1;for(;a<=10;)1===a||6===a?this.text.push('Sale <br/> up to <span class="animate"></span> off'):(console.log(s[a]),this.text.push(s[a])),a++;const i=document.createElement("div");i.classList.add("box");for(const e of this.text){const s=document.createElement("a"),a=document.createElement("h2"),n=document.createElement("img");if(this.text.indexOf(e)<6){if(s.classList.add("box"),s.href="#",n.dataset.src="".concat(this.image,"?random=").concat(this.text.indexOf(e)),n.setAttribute("loading","lazy"),a.innerHTML=e,s.appendChild(a),0===this.text.indexOf(e)){const e=document.createElement("h3");e.innerText="Shop",s.appendChild(e)}s.appendChild(n),t.appendChild(s)}else s.classList.add("box-mini"),s.href="#",n.dataset.src="".concat(this.image,"?random=").concat(this.text.indexOf(e)),n.setAttribute("loading","lazy"),a.innerHTML=e,s.appendChild(a),s.appendChild(n),i.appendChild(s)}t.appendChild(i)}loadImages(){let e=document.querySelectorAll(".box img"),t=new IntersectionObserver((e,s)=>{e.forEach(e=>{if(e.isIntersecting){let s=e.target;s.src=s.dataset.src,t.unobserve(s)}})});e.forEach(e=>{t.observe(e)})}}exports.default=t;
},{"./api":"cZF8"}],"QvaY":[function(require,module,exports) {
"use strict";var e=r(require("./CreateBox"));function r(e){return e&&e.__esModule?e:{default:e}}(()=>{const r=new e.default;new Promise(async(e,t)=>{await r.init(),document.querySelectorAll(".box").length?e(r.loadImages()):t(Error("Problem loading data"))})})();
},{"./CreateBox":"QTXR"}]},{},["QvaY"], null)
//# sourceMappingURL=js.e9961c62.js.map