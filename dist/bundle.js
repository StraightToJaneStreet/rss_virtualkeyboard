(()=>{"use strict";var e={990:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(81),n=a.n(r),s=a(645),c=a.n(s)()(n());c.push([e.id,"body{margin:30px;background-color:black;user-select:none}.section{max-width:800px;margin:0 auto}.textarea{display:block;width:100%;margin-bottom:40px;resize:none;background-color:white;user-select:none}.keyboard{display:grid;grid-gap:10px;grid-template-columns:repeat(15, 1fr)}.notice{color:white;padding-top:20px}.notice kbd{border:1px solid gray;border-radius:1px;padding:2px}.key{cursor:pointer;transition:border-radius .2s, background-color .2s;padding:5px;font-weight:bold;border:2px solid gray;border-radius:3px}.key:hover{border-radius:10px}.key--pressed{border-radius:10px;background-color:red}.key--span_1{grid-column-end:span 1}.key--span_2{grid-column-end:span 2}.key--span_6{grid-column-end:span 6}.key--span_7{grid-column-end:span 7}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",r=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),r&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),r&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,r,n,s){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(c[o]=!0)}for(var h=0;h<e.length;h++){var l=[].concat(e[h]);r&&c[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,r=0;r<t.length;r++)if(t[r].identifier===e){a=r;break}return a}function r(e,r){for(var s={},c=[],i=0;i<e.length;i++){var o=e[i],h=r.base?o[0]+r.base:o[0],l=s[h]||0,d="".concat(h," ").concat(l);s[h]=l+1;var p=a(d),u={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var y=n(u,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:y,references:1})}c.push(d)}return c}function n(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var s=r(e=e||[],n=n||{});return function(e){e=e||[];for(var c=0;c<s.length;c++){var i=a(s[c]);t[i].references--}for(var o=r(e,n),h=0;h<s.length;h++){var l=a(s[h]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=o}}},569:e=>{var t={};e.exports=function(e,a){var r=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,n&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var s=a.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=a(379),t=a.n(e),r=a(795),n=a.n(r),s=a(569),c=a.n(s),i=a(565),o=a.n(i),h=a(216),l=a.n(h),d=a(589),p=a.n(d),u=a(990),y={};y.styleTagTransform=p(),y.setAttributes=o(),y.insert=c().bind(null,"head"),y.domAPI=n(),y.insertStyleElement=l(),t()(u.Z,y),u.Z&&u.Z.locals&&u.Z.locals;class C{constructor(){const e=document.createElement("textarea");e.classList.add("textarea","section"),e.disabled=!0,e.rows=10,this.element=e}writeChar(e){this.element.value+=e}removeChar(){const e=this.element.value;this.element.value=e.slice(0,-1)}render({element:e}){e.append(this.element)}}class g extends EventTarget{constructor({context:e,code:t}){super(),this.context=e,this.code=t,this.mouseDown=!1,this.element=null}getElement(){return this.element}globalMouseUpHandler(){this.mouseDown&&this.emitKeyUp()}attachElementListeners(){this.element.addEventListener("mouseup",this.emitKeyUp.bind(this)),this.element.addEventListener("mousedown",(()=>{this.mouseDown=!0,this.emitKeyDown()})),document.addEventListener("mouseup",this.globalMouseUpHandler.bind(this))}emitKeyUp(){this.mouseDown=!1,this.element.classList.remove("key--pressed");const e=new CustomEvent("key-up",{detail:{code:this.code}});this.dispatchEvent(e)}emitKeyDown(){this.element.classList.add("key--pressed");const e=new CustomEvent("key-down",{detail:{code:this.code}});this.dispatchEvent(e),this.emitCharacter&&this.emitCharacter()}emulateKeyUp(){this.emitKeyUp()}emulateKeyDown(){this.emitKeyDown()}}class k extends g{constructor(e,t){super(e),this.label=t;const{span:a}=e;this.createElement({width:a}),this.attachElementListeners()}createElement({width:e}){const t=document.createElement("button");t.classList.add("key",e&&`key--span_${e}`),t.innerText=this.label,this.element=t}}class m extends g{constructor(e,t,a){super(e),this.char=null,this.caps=t,this.currentLang=a,this.ignoreCapsLock=!!e.ignoreCapsLock,this.shiftActive=!1,this.capsLockActive=!1,this.label=e.label;const{span:r}=e;this.createElement({width:r}),this.attachElementListeners();const{context:n}=e;n.addEventListener("keyboard-change-register",this.changeRegister.bind(this)),n.addEventListener("keyboard-change-layout",this.changeCaps.bind(this)),n.addEventListener("keyboard-shift-enable",this.shiftEnable.bind(this)),n.addEventListener("keyboard-shift-disable",this.shiftDisable.bind(this)),n.addEventListener("keyboard-caps-lock-enable",this.capsLockEnable.bind(this)),n.addEventListener("keyboard-caps-lock-disable",this.capsLockDisable.bind(this))}shiftEnable(){this.shiftActive=!0,this.updateCap()}shiftDisable(){this.shiftActive=!1,this.updateCap()}capsLockEnable(){this.capsLockActive=!0,this.updateCap()}capsLockDisable(){this.capsLockActive=!1,this.updateCap()}needAltSymbol(){const{shiftActive:e,capsLockActive:t,currentLang:a}=this;return this.caps[a].ignoreCapsLock?e:!e&&t||e&&!t}updateCap(){if(void 0!==this.label)return void(this.element.innerText=this.label);const{currentLang:e}=this,t=this.caps[e],a=this.needAltSymbol()?t.altChar:t.char;this.element.innerText=a}changeCaps(e){const{langCode:t}=e.detail;this.currentLang=t,this.updateCap()}emitCharacter(){const{currentLang:e}=this,t=this.caps[e],a=void 0!==this.label?t.char:this.element.innerText,r=new CustomEvent("key-emit",{detail:{char:a}});this.dispatchEvent(r)}changeRegister(){this.registerState=!this.registerState}createElement({width:e}){const t=document.createElement("button");t.classList.add("key",e&&`key--span_${e}`),this.element=t}}class L extends EventTarget{constructor(e,t){super();const a=document.createElement("div");this.element=a,this.keys={},this.charKeys={},this.functionalKeyCodes=[],this.charKeyCodes=[],this.shiftActive=!1,this.altActive=!1,this.capsActive=!1,this.capsCodes=t.map((({langCode:e})=>e)),this.capsCollection=t,this.currentCapIndex=null,this.currentLangCode=null,this.capsLockLocked=!1,a.classList.add("keyboard","section"),e.lines.forEach((e=>{e.forEach((e=>{let a;const{code:r}=e,n={context:this,...e};if("functional"===e.type){const{label:t}=e;a=new k(n,t),this.functionalKeyCodes.push(r),a.addEventListener("key-down",this.handleShiftDown.bind(this)),a.addEventListener("key-up",this.handleShiftUp.bind(this)),a.addEventListener("key-down",this.handleAltDown.bind(this)),a.addEventListener("key-up",this.handleAltUp.bind(this)),a.addEventListener("key-down",this.handleCapsLockDown.bind(this)),a.addEventListener("key-up",this.handleCapsLockUp.bind(this)),a.addEventListener("key-down",this.handleBackspaceDown.bind(this))}else if("char"===e.type){const s=this.constructor.extractKeyCaps(r,t);a=new m(n,s),a.addEventListener("key-emit",this.handleCharacterInput.bind(this)),this.charKeyCodes.push(e.code)}this.keys[e.code]=a,this.element.append(a.getElement())}))})),localStorage.getItem("keyboard")?this.setCaps(localStorage.getItem("keyboard")):this.setCaps("US"),document.addEventListener("keyup",this.handleKeyUp.bind(this)),document.addEventListener("keydown",this.handleKeyDown.bind(this))}static extractKeyCaps(e,t){const a={};return t.forEach((({langCode:t,content:r})=>{a[t]=r.keycaps[e]})),a}emitCapsLockEnable(){const e=new CustomEvent("keyboard-caps-lock-enable");this.dispatchEvent(e)}emitCapsLockDisable(){const e=new CustomEvent("keyboard-caps-lock-disable");this.dispatchEvent(e)}emitShiftEnable(){const e=new CustomEvent("keyboard-shift-enable");this.dispatchEvent(e)}emitShiftDisable(){const e=new CustomEvent("keyboard-shift-disable");this.dispatchEvent(e)}handleKeyDown(e){if(!Object.keys(this.keys).includes(e.code))return;const{code:t}=e;e.preventDefault(),this.keys[t].emulateKeyDown()}handleKeyUp(e){if(!Object.keys(this.keys).includes(e.code))return;const{code:t}=e;e.preventDefault(),this.keys[t].emulateKeyUp()}handleShiftUp(e){"ShiftLeft"!==e.detail.code&&"ShiftRight"!==e.detail.code||("ShiftLeft"===e.detail.code?this.shiftLeft=!1:this.shiftRight=!1,this.shiftLeft||this.shiftRight||this.emitShiftDisable())}handleShiftDown(e){"ShiftLeft"!==e.detail.code&&"ShiftRight"!==e.detail.code||(this.altActive&&this.nextCaps(),"ShiftLeft"===e.detail.code?this.shiftLeft=!0:this.shiftRight=!0,this.emitShiftEnable())}handleBackspaceDown(e){"Backspace"===e.detail.code&&this.output.removeChar()}handleCapsLockDown(e){this.capsLockLocked||"CapsLock"!==e.detail.code||(this.capsLockLocked=!0,this.capsActive?this.emitCapsLockDisable():this.emitCapsLockEnable(),this.capsActive=!this.capsActive)}handleCapsLockUp(e){"CapsLock"===e.detail.code&&(this.capsLockLocked=!1)}handleCharacterInput(e){this.output.writeChar(e.detail.char)}handleAltUp(e){"AltLeft"!==e.detail.code&&"AltRight"!==e.detail.code||(this.altActive=!1)}handleAltDown(e){"AltLeft"!==e.detail.code&&"AltRight"!==e.detail.code||(this.altActive=!0)}nextCaps(){const e=this.capsCodes.length,t=this.currentCapIndex===e-1?0:this.currentCapIndex+1,a=this.capsCodes[t];this.setCaps(a)}setCaps(e){this.currentCapIndex=this.capsCodes.findIndex((t=>t===e)),this.currentLangCode=e,localStorage.setItem("keyboard",this.currentLangCode),this.emitChangeLayout()}emitChangeLayout(){const e=new CustomEvent("keyboard-change-layout",{detail:{langCode:this.currentLangCode}});this.dispatchEvent(e)}attachCaps(e,t){this.capsList.push(e),Object.entries(t.keycaps).forEach((([e,t])=>{this.charKeys[e].caps.push(t)}))}attachOutput(e){this.output=e}render({element:e}){e.append(this.element)}}const f=JSON.parse('{"lines":[[{"type":"char","code":"Backquote","span":1},{"type":"char","code":"Digit1","span":1},{"type":"char","code":"Digit2","span":1},{"type":"char","code":"Digit3","span":1},{"type":"char","code":"Digit4","span":1},{"type":"char","code":"Digit5","span":1},{"type":"char","code":"Digit6","span":1},{"type":"char","code":"Digit7","span":1},{"type":"char","code":"Digit8","span":1},{"type":"char","code":"Digit9","span":1},{"type":"char","code":"Digit0","span":1},{"type":"char","code":"Minus","span":1},{"type":"char","code":"Equal","span":1},{"type":"functional","code":"Backspace","label":"Backspace","span":2}],[{"type":"char","code":"Tab","span":2,"label":"Tab"},{"type":"char","code":"KeyQ","span":1},{"type":"char","code":"KeyW","span":1},{"type":"char","code":"KeyE","span":1},{"type":"char","code":"KeyR","span":1},{"type":"char","code":"KeyT","span":1},{"type":"char","code":"KeyY","span":1},{"type":"char","code":"KeyU","span":1},{"type":"char","code":"KeyI","span":1},{"type":"char","code":"KeyO","span":1},{"type":"char","code":"KeyP","span":1},{"type":"char","code":"BracketLeft","span":1},{"type":"char","code":"BracketRight","span":1},{"type":"char","code":"Backslash","span":1}],[{"type":"functional","code":"CapsLock","label":"Caps Lock","span":2},{"type":"char","code":"KeyA","span":1},{"type":"char","code":"KeyS","span":1},{"type":"char","code":"KeyD","span":1},{"type":"char","code":"KeyF","span":1},{"type":"char","code":"KeyG","span":1},{"type":"char","code":"KeyH","span":1},{"type":"char","code":"KeyJ","span":1},{"type":"char","code":"KeyK","span":1},{"type":"char","code":"KeyL","span":1},{"type":"char","code":"Semicolon","span":1},{"type":"char","code":"Quote","span":1},{"type":"char","code":"Enter","label":"Enter","span":2}],[{"type":"functional","code":"ShiftLeft","label":"Shift","span":2},{"type":"char","code":"KeyZ","span":1},{"type":"char","code":"KeyX","span":1},{"type":"char","code":"KeyC","span":1},{"type":"char","code":"KeyV","span":1},{"type":"char","code":"KeyB","span":1},{"type":"char","code":"KeyN","span":1},{"type":"char","code":"KeyM","span":1},{"type":"char","code":"Comma","span":1},{"type":"char","code":"Period","span":1},{"type":"char","code":"Slash","span":1},{"type":"char","code":"ArrowUp","label":"↑","span":1},{"type":"functional","code":"ShiftRight","label":"Shift","span":2}],[{"type":"functional","code":"ControlLeft","label":"Ctrl","span":1},{"type":"functional","code":"MetaLeft","label":"Cmd","span":1},{"type":"functional","code":"AltLeft","label":"Alt","span":1},{"type":"char","code":"Space","label":" ","span":6},{"type":"functional","code":"AltRight","label":"Alt","span":1},{"type":"functional","code":"ControlRight","label":"Ctrl","span":1},{"type":"char","code":"ArrowLeft","label":"←","span":1},{"type":"char","code":"ArrowDown","label":"↓","span":1},{"type":"char","code":"ArrowRight","label":"→","span":1}]]}'),b=JSON.parse('{"keycaps":{"Backquote":{"char":"`","altChar":"~","ignoreCapsLock":true},"Digit1":{"char":"1","altChar":"!","ignoreCapsLock":true},"Digit2":{"char":"2","altChar":"@","ignoreCapsLock":true},"Digit3":{"char":"3","altChar":"#","ignoreCapsLock":true},"Digit4":{"char":"4","altChar":"$","ignoreCapsLock":true},"Digit5":{"char":"5","altChar":"%","ignoreCapsLock":true},"Digit6":{"char":"6","altChar":"^","ignoreCapsLock":true},"Digit7":{"char":"7","altChar":"&","ignoreCapsLock":true},"Digit8":{"char":"8","altChar":"*","ignoreCapsLock":true},"Digit9":{"char":"9","altChar":"(","ignoreCapsLock":true},"Digit0":{"char":"0","altChar":")","ignoreCapsLock":true},"Minus":{"char":"-","altChar":"_","ignoreCapsLock":true},"Equal":{"char":"=","altChar":"+","ignoreCapsLock":true},"KeyQ":{"char":"q","altChar":"Q"},"KeyW":{"char":"w","altChar":"W"},"KeyE":{"char":"e","altChar":"E"},"KeyR":{"char":"r","altChar":"R"},"KeyT":{"char":"t","altChar":"T"},"KeyY":{"char":"y","altChar":"Y"},"KeyU":{"char":"u","altChar":"U"},"KeyI":{"char":"i","altChar":"I"},"KeyO":{"char":"o","altChar":"O"},"KeyP":{"char":"p","altChar":"P"},"BracketLeft":{"char":"[","altChar":"{","ignoreCapsLock":true},"BracketRight":{"char":"]","altChar":"}","ignoreCapsLock":true},"Backslash":{"char":"\\\\","altChar":"|","ignoreCapsLock":true},"KeyA":{"char":"a","altChar":"A"},"KeyS":{"char":"s","altChar":"S"},"KeyD":{"char":"d","altChar":"D"},"KeyF":{"char":"f","altChar":"F"},"KeyG":{"char":"g","altChar":"G"},"KeyH":{"char":"h","altChar":"H"},"KeyJ":{"char":"j","altChar":"J"},"KeyK":{"char":"k","altChar":"K"},"KeyL":{"char":"l","altChar":"L"},"Semicolon":{"char":";","altChar":":","ignoreCapsLock":true},"Quote":{"char":"\'","altChar":"\\"","ignoreCapsLock":true},"KeyZ":{"char":"z","altChar":"Z"},"KeyX":{"char":"x","altChar":"X"},"KeyC":{"char":"c","altChar":"C"},"KeyV":{"char":"v","altChar":"V"},"KeyB":{"char":"b","altChar":"B"},"KeyN":{"char":"n","altChar":"N"},"KeyM":{"char":"m","altChar":"M"},"Comma":{"char":",","altChar":"<","ignoreCapsLock":true},"Period":{"char":".","altChar":">","ignoreCapsLock":true},"Slash":{"char":"/","altChar":"?","ignoreCapsLock":true},"Space":{"char":" ","altChar":" ","ignoreCapsLock":true},"ArrowLeft":{"char":"←","altChar":"←","ignoreCapsLock":true},"ArrowRight":{"char":"→","altChar":"→","ignoreCapsLock":true},"ArrowUp":{"char":"↑","altChar":"↑","ignoreCapsLock":true},"ArrowDown":{"char":"↓","altChar":"↓","ignoreCapsLock":true},"Enter":{"char":"\\n","altChar":"\\n","ignoreCapsLock":true},"Tab":{"char":"\\t","altChar":"\\t","ignoreCapsLock":true}}}'),v=JSON.parse('{"keycaps":{"Backquote":{"char":"ё","altChar":"Ё"},"Digit1":{"char":"1","altChar":"!","ignoreCapsLock":true},"Digit2":{"char":"2","altChar":"\\"","ignoreCapsLock":true},"Digit3":{"char":"3","altChar":"№","ignoreCapsLock":true},"Digit4":{"char":"4","altChar":";","ignoreCapsLock":true},"Digit5":{"char":"5","altChar":"%","ignoreCapsLock":true},"Digit6":{"char":"6","altChar":":","ignoreCapsLock":true},"Digit7":{"char":"7","altChar":"?","ignoreCapsLock":true},"Digit8":{"char":"8","altChar":"*","ignoreCapsLock":true},"Digit9":{"char":"9","altChar":"(","ignoreCapsLock":true},"Digit0":{"char":"0","altChar":")","ignoreCapsLock":true},"Minus":{"char":"-","altChar":"_","ignoreCapsLock":true},"Equal":{"char":"=","altChar":"+","ignoreCapsLock":true},"KeyQ":{"char":"й","altChar":"Й"},"KeyW":{"char":"ц","altChar":"Ц"},"KeyE":{"char":"у","altChar":"У"},"KeyR":{"char":"к","altChar":"К"},"KeyT":{"char":"е","altChar":"Е"},"KeyY":{"char":"н","altChar":"Н"},"KeyU":{"char":"г","altChar":"Г"},"KeyI":{"char":"ш","altChar":"Ш"},"KeyO":{"char":"щ","altChar":"Щ"},"KeyP":{"char":"з","altChar":"З"},"BracketLeft":{"char":"х","altChar":"Х"},"BracketRight":{"char":"ъ","altChar":"Ъ"},"Backslash":{"char":"\\\\","altChar":"|","ignoreCapsLock":true},"KeyA":{"char":"ф","altChar":"Ф"},"KeyS":{"char":"ы","altChar":"Ы"},"KeyD":{"char":"в","altChar":"В"},"KeyF":{"char":"а","altChar":"А"},"KeyG":{"char":"п","altChar":"П"},"KeyH":{"char":"р","altChar":"Р"},"KeyJ":{"char":"о","altChar":"О"},"KeyK":{"char":"л","altChar":"Л"},"KeyL":{"char":"д","altChar":"Д"},"Semicolon":{"char":"ж","altChar":"Ж"},"Quote":{"char":"э","altChar":"Э"},"KeyZ":{"char":"я","altChar":"Я"},"KeyX":{"char":"ч","altChar":"Ч"},"KeyC":{"char":"с","altChar":"С"},"KeyV":{"char":"м","altChar":"М"},"KeyB":{"char":"и","altChar":"И"},"KeyN":{"char":"т","altChar":"Т"},"KeyM":{"char":"ь","altChar":"Ь"},"Comma":{"char":"б","altChar":"Б"},"Period":{"char":"ю","altChar":"Ю"},"Slash":{"char":".","altChar":","},"Space":{"char":" ","altChar":" "},"ArrowLeft":{"char":"←","altChar":"←","ignoreCapsLock":true},"ArrowRight":{"char":"→","altChar":"→","ignoreCapsLock":true},"ArrowUp":{"char":"↑","altChar":"↑","ignoreCapsLock":true},"ArrowDown":{"char":"↓","altChar":"↓","ignoreCapsLock":true},"Enter":{"char":"\\n","altChar":"\\n","ignoreCapsLock":true},"Tab":{"char":"\\t","altChar":"\\t","ignoreCapsLock":true}}}');document.addEventListener("DOMContentLoaded",(()=>{const e=new C;e.render({element:document.body});const t=new L(f,[{langCode:"US",content:b},{langCode:"RU",content:v}]);t.attachOutput(e),t.render({element:document.body});const a=document.createElement("p");a.classList.add("notice","section"),a.innerHTML="Layout Change: Hold <kbd>Alt</kbd> + Tap <kbd>Shift</kbd>",document.body.append(a);const r=document.createElement("p");r.classList.add("notice","section"),r.innerHTML="OS: Manjaro Linux",document.body.append(r)}))})()})();