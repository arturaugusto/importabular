parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uBxZ":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports._shift=s,exports._parsePasteEvent=a,exports._cleanVal=c,exports._isEmpty=h,exports._arrToHTML=d,exports._defaultCss=exports._LooseArray=exports.default=void 0;var o=["mousedown","mouseenter","mouseup","mouseleave","touchstart","touchend","touchmove","keydown","paste","cut","copy"],r=function(){function e(n){var o=this,r=n.data,s=void 0===r?[]:r,c=n.node,h=void 0===c?null:c,_=n.onChange,f=void 0===_?null:_,y=n.minRows,v=void 0===y?1:y,g=n.maxRows,p=void 0===g?1/0:g,m=n.minCols,x=void 0===m?1:m,C=n.maxCols,b=void 0===C?1/0:C,E=n.css,w=void 0===E?"":E,S=n.width,k=void 0===S?"100%":S,D=n.height,A=void 0===D?"80vh":D;if(t(this,e),i(this,"_width",1),i(this,"_height",1),i(this,"_data",new l),i(this,"paste",function(t){if(!o._editing){t.preventDefault();for(var e=a(t),n=o._selection,i=n.rx,r=n.ry,s={x:i[0],y:r[0]},l=0;l<e.length;l++)for(var c=0;c<e[0].length;c++)o._setVal(s.x+c,s.y+l,e[l][c]);o._changeSelectedCellsStyle(function(){o._selectionStart=s,o._selectionEnd={x:s.x+e[0].length-1,y:s.y+e.length-1}}),o._onDataChanged()}}),i(this,"copy",function(t){if(!o._editing){var e=o._getSelectionAsArray();e&&(t.preventDefault(),t.clipboardData.setData("text/html",d(e)),t.clipboardData.setData("text/plain",e.map(function(t){return t.join("")}).join("\n")))}}),i(this,"cut",function(t){o._editing||(o.copy(t),o._setAllSelectedCellsTo(""))}),i(this,"keydown",function(t){t.ctrlKey||o._selectionStart&&("Escape"===t.key&&o._editing&&(t.preventDefault(),o._revertEdit(),o._stopEditing()),"Enter"===t.key&&(t.preventDefault(),o._tabCursorInSelection(!1,t.shiftKey?-1:1)),"Tab"===t.key&&(t.preventDefault(),o._tabCursorInSelection(!0,t.shiftKey?-1:1)),o._editing||("F2"===t.key&&(t.preventDefault(),o._startEditing(o._focus)),"Delete"!==t.key&&"Backspace"!==t.key||(t.preventDefault(),o._setAllSelectedCellsTo("")),"ArrowDown"===t.key&&(t.preventDefault(),o._moveCursor({y:1},t.shiftKey)),"ArrowUp"===t.key&&(t.preventDefault(),o._moveCursor({y:-1},t.shiftKey)),"ArrowLeft"===t.key&&(t.preventDefault(),o._moveCursor({x:-1},t.shiftKey)),"ArrowRight"===t.key&&(t.preventDefault(),o._moveCursor({x:1},t.shiftKey))),1!==t.key.length||o._editing||o._changeSelectedCellsStyle(function(){var t=o._focus,e=t.x,n=t.y;o._startEditing({x:e,y:n}),o._getCell(e,n).firstChild.value=""}))}),i(this,"_selecting",!1),i(this,"_selectionStart",null),i(this,"_selectionEnd",null),i(this,"_selection",{rx:[0,0],ry:[0,0]}),i(this,"_editing",null),i(this,"_focus",null),i(this,"mousedown",function(t){if(!o.mobile){if(3===t.which&&!o._editing&&o._selectionSize()){var e=new Range,n=o._selection,i=n.rx,r=n.ry;return e.setStart(o._getCell(i[0],r[0]),0),e.setEnd(o._getCell(i[0],r[0]),1),o.cwd.getSelection().removeAllRanges(),void o.cwd.getSelection().addRange(e)}o._changeSelectedCellsStyle(function(){o.tbody.style.userSelect="none",o._selectionEnd=o._selectionStart=o._focus=o._getCoords(t),o._selecting=!0})}}),i(this,"mouseenter",function(t){o.mobile||o._selecting&&o._changeSelectedCellsStyle(function(){o._selectionEnd=o._getCoords(t)})}),i(this,"_lastMouseUp",null),i(this,"_lastMouseUpTarget",null),i(this,"mouseup",function(t){o.mobile||3!==t.which&&o._selecting&&o._changeSelectedCellsStyle(function(){o._selectionEnd=o._getCoords(t),o._endSelection(),o._lastMouseUp&&o._lastMouseUp>Date.now()-300&&o._lastMouseUpTarget.x===o._selectionEnd.x&&o._lastMouseUpTarget.y===o._selectionEnd.y&&o._startEditing(o._selectionEnd),o._lastMouseUp=Date.now(),o._lastMouseUpTarget=o._selectionEnd})}),i(this,"mouseleave",function(t){t.target===o.tbody&&o._selecting&&o._endSelection()}),i(this,"touchstart",function(t){o._editing||(o.mobile=!0,o.moved=!1)}),i(this,"touchend",function(t){o.mobile&&(o._editing||o.moved||(o._changeSelectedCellsStyle(function(){o._selectionEnd=o._selectionStart=o._focus=o._getCoords(t)}),o._startEditing(o._focus)))}),i(this,"touchmove",function(t){o.mobile&&(o.moved=!0)}),i(this,"_stopEditing",function(){if(o._editing){var t=o._editing,e=t.x,n=t.y,i=o._getCell(e,n);i.style.width="",i.style.height="";var r=i.firstChild;r.removeEventListener("blur",o._stopEditing),r.removeEventListener("keydown",o._blurIfEnter),o._setVal(e,n,r.value),i.removeChild(r),o._editing=null,o._renderTDContent(i,e,n),o._onDataChanged()}}),i(this,"_blurIfEnter",function(t){13===t.keyCode&&(o._stopEditing(),t.preventDefault())}),i(this,"_restyle",function(t){var e=t.x,n=t.y;o._getCell(e,n).className=o._classNames(e,n)}),i(this,"_refreshDisplayedValue",function(t){var e=t.x,n=t.y,i=o._getCell(e,n).firstChild;"DIV"===i.tagName&&(i.textContent=o._getVal(e,n)),o._restyle({x:e,y:n})}),!h)throw new Error("You need to pass a node argument to Importabular, like this : new Importabular({node: document.body})");this._parent=h,this._options={onChange:f,minRows:v,maxRows:p,minCols:x,maxCols:b,css:u+w},this._iframeStyle={width:k,height:A,border:"none",background:"transparent"},this._setupDom(),this._replaceDataWithArray(s),this._incrementToFit({x:this._options.minCols-1,y:this._options.minRows-1}),this._fillScrollSpace()}return n(e,[{key:"_fitBounds",value:function(t){var e=t.x,n=t.y;return e>=0&&e<this._options.maxCols&&n>=0&&n<this._options.maxRows}},{key:"_fillScrollSpace",value:function(){var t=Math.ceil(this.iframe.contentWindow.innerHeight/40),e=Math.ceil(this.iframe.contentWindow.innerWidth/100);this._incrementToFit({x:e-1,y:t-1})}},{key:"_onDataChanged",value:function(){this._options.onChange&&this._options.onChange(this._data._toArr())}},{key:"_renderTDContent",value:function(t,e,n){var i=document.createElement("div");t.setAttribute("x",e.toString()),t.setAttribute("y",n.toString());var o=this._getVal(e,n);o?i.textContent=o:i.innerHTML="&nbsp;",t.appendChild(i),this._restyle({x:e,y:n})}},{key:"_setupDom",value:function(){var t=this,e=document.createElement("iframe");this.iframe=e,this._parent.appendChild(e);var n=e.contentWindow.document;this.cwd=n,n.open(),n.write('<html lang="'.concat(navigator.language,'"><body><style>').concat(this._options.css,"</style></body></html>")),n.close(),Object.assign(e.style,this._iframeStyle);var i=document.createElement("table"),r=document.createElement("tbody");i.appendChild(r),n.body.appendChild(i),this.tbody=r,this.table=i;for(var s=0;s<this._height;s++){var a=document.createElement("tr");r.appendChild(a);for(var l=0;l<this._width;l++)this._addCell(a,l,s)}o.forEach(function(e){return n.addEventListener(e,t[e],!0)})}},{key:"destroy",value:function(){var t=this;this._destroyEditing(),o.forEach(function(e){return t.cwd.removeEventListener(e,t[e],!0)}),this.iframe.parentElement.removeChild(this.iframe)}},{key:"_addCell",value:function(t,e,n){var i=document.createElement("td");t.appendChild(i),this._renderTDContent(i,e,n)}},{key:"_incrementHeight",value:function(){if(!this._fitBounds({x:0,y:this._height}))return!1;this._height++;var t=this._height-1,e=document.createElement("tr");this.tbody.appendChild(e);for(var n=0;n<this._width;n++)this._addCell(e,n,t);return!0}},{key:"_incrementWidth",value:function(){var t=this;if(!this._fitBounds({x:this._width,y:0}))return!1;this._width++;var e=this._width-1;return Array.prototype.forEach.call(this.tbody.children,function(n,i){t._addCell(n,e,i)}),!0}},{key:"_incrementToFit",value:function(t){for(var e=t.x,n=t.y;e>this._width-1&&this._incrementWidth(););for(;n>this._height-1&&this._incrementHeight(););}},{key:"_getSelectionAsArray",value:function(){var t=this._selection,e=t.rx,n=t.ry;if(e[0]===e[1])return null;for(var i=e[1]-e[0],o=n[1]-n[0],r=[],s=0;s<o;s++){r.push([]);for(var a=0;a<i;a++)r[s].push(this._getVal(e[0]+a,n[0]+s))}return r}},{key:"_setAllSelectedCellsTo",value:function(t){var e=this;this._forSelectionCoord(this._selection,function(n){var i=n.x,o=n.y;return e._setVal(i,o,t)}),this._forSelectionCoord(this._selection,this._refreshDisplayedValue),this._onDataChanged()}},{key:"_moveCursor",value:function(t,e){var n=this,i=t.x,o=void 0===i?0:i,r=t.y,s=void 0===r?0:r,a=e?this._selectionEnd:this._selectionStart,l={x:a.x+o,y:a.y+s};this._fitBounds(l)&&(this._stopEditing(),this._incrementToFit(l),this._changeSelectedCellsStyle(function(){e?n._selectionEnd=l:n._selectionStart=n._selectionEnd=n._focus=l}),this._scrollIntoView(l))}},{key:"_tabCursorInSelection",value:function(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=this._focus||{x:0,y:0},r=o.x,a=o.y,l=this._selectionSize(),c=l>1?this._selection:{rx:[0,this._options.maxCols],ry:[0,this._options.maxRows]},h=c.rx,d=c.ry;if(t)e=s(r,a,i,h[0],h[1]-1,d[0],d[1]-1);else{var u=s(a,r,i,d[0],d[1]-1,h[0],h[1]-1);e={x:u.y,y:u.x}}this._fitBounds(e)&&(this._stopEditing(),this._incrementToFit(e),this._changeSelectedCellsStyle(function(){n._focus=e,l<=1&&(n._selectionStart=n._selectionEnd=e)}),this._scrollIntoView(e))}},{key:"_scrollIntoView",value:function(t){var e=t.x,n=t.y;this._getCell(e,n).scrollIntoView({behavior:"smooth",block:"nearest"})}},{key:"_endSelection",value:function(){this._selecting=!1,this.tbody.style.userSelect=""}},{key:"_startEditing",value:function(t){var e=t.x,n=t.y;this._editing={x:e,y:n};var i=this._getCell(e,n),o=i.getBoundingClientRect(),r=i.firstChild.getBoundingClientRect();i.removeChild(i.firstChild);var s=document.createElement("input");s.type="text",s.value=this._getVal(e,n),i.appendChild(s),Object.assign(i.style,{width:o.width-2,height:o.height}),Object.assign(s.style,{width:"".concat(r.width,"px"),height:"".concat(r.height,"px")}),s.focus(),s.addEventListener("blur",this._stopEditing),s.addEventListener("keydown",this._blurIfEnter)}},{key:"_destroyEditing",value:function(){if(this._editing){var t=this._editing,e=t.x,n=t.y,i=this._getCell(e,n).firstChild;i.removeEventListener("blur",this._stopEditing),i.removeEventListener("keydown",this._blurIfEnter)}}},{key:"_revertEdit",value:function(){if(this._editing){var t=this._editing,e=t.x,n=t.y;this._getCell(e,n).firstChild.value=this._getVal(e,n)}}},{key:"_changeSelectedCellsStyle",value:function(t){var e=this._selection;t(),this._selection=this._getSelectionCoords(),this._forSelectionCoord(e,this._restyle),this._forSelectionCoord(this._selection,this._restyle)}},{key:"_getSelectionCoords",value:function(){if(!this._selectionStart)return{rx:[0,0],ry:[0,0]};var t=[this._selectionStart.x,this._selectionEnd.x];t[0]>t[1]&&t.reverse();var e=[this._selectionStart.y,this._selectionEnd.y];return e[0]>e[1]&&e.reverse(),{rx:[t[0],t[1]+1],ry:[e[0],e[1]+1]}}},{key:"_forSelectionCoord",value:function(t,e){for(var n=t.rx,i=t.ry,o=n[0];o<n[1];o++)for(var r=i[0];r<i[1];r++)this._fitBounds({x:o,y:r})&&e({x:o,y:r})}},{key:"_selectionSize",value:function(){var t=this._selection,e=t.rx,n=t.ry;return(e[1]-e[0])*(n[1]-n[0])}},{key:"_classNames",value:function(t,e){var n=this._selection,i=n.rx,o=n.ry,r="";return t>=i[0]&&t<i[1]&&e>=o[0]&&e<o[1]&&(r+=" selected",this._selectionSize()>1&&(r+=" multi")),this._focus&&this._focus.x===t&&this._focus.y===e&&(r+=" focus"),this._editing&&t===this._editing.x&&e===this._editing.y&&(r+=" editing"),r}},{key:"_getCoords",value:function(t){for(var e=t.target;!e.getAttribute("x")&&e.parentElement;)e=e.parentElement;return{x:parseInt(e.getAttribute("x"))||0,y:parseInt(e.getAttribute("y"))||0}}},{key:"setData",value:function(t){this._data._clear(),this._replaceDataWithArray(t);for(var e=0;e<this._width;e++)for(var n=0;n<this._height;n++)this._refreshDisplayedValue({x:e,y:n})}},{key:"getData",value:function(){return this._data._toArr()}},{key:"_replaceDataWithArray",value:function(t){var e=this;t.forEach(function(t,n){t.forEach(function(t,i){e._setVal(i,n,t)})})}},{key:"_setVal",value:function(t,e,n){this._fitBounds({x:t,y:e})&&(this._data._setVal(t,e,n),this._incrementToFit({x:t+1,y:e+1}),this._refreshDisplayedValue({x:t,y:e}))}},{key:"_getVal",value:function(t,e){return this._data._getVal(t,e)}},{key:"_getCell",value:function(t,e){return this.tbody.children[e].children[t]}}]),e}();function s(t,e,n,i,o,r,s){if((t+=n)<i){if(o===1/0)return{x:i,y:e};if(t=o,--e<r){if(s===1/0)return{x:i,y:r};e=s}}return t>o&&(t=i,++e>s&&(e=r,t=i)),{x:t,y:e}}function a(t){try{var e=(t.clipboardData||window.clipboardData).getData("text/html"),n=document.createElement("iframe");document.body.appendChild(n),n.contentWindow.document.open(),n.contentWindow.document.write(e),n.contentWindow.document.close();var i=n.contentWindow.document.querySelectorAll("tr"),o=[];if(Array.prototype.forEach.call(i,function(t,e){var n=t.querySelectorAll("td");Array.prototype.forEach.call(n,function(t,n){var i=t.textContent;o[e]||(o[e]=[]),o[e][n]=i})}),document.body.removeChild(n),o.length)return o}catch(r){}return(t.clipboardData||window.clipboardData).getData("text").split(/\r\n|\n|\r/).map(function(t){return t.split("")})}exports.default=r;var l=function(){function e(){t(this,e),i(this,"_data",{})}return n(e,[{key:"_setVal",value:function(t,e,n){var i=this._data,o=c(n);o?(i[t]||(i[t]={}),i[t][e]=o):i[t]&&i[t][e]&&(delete i[t][e],h(i[t])&&delete i[t])}},{key:"_clear",value:function(){this._data={}}},{key:"_getVal",value:function(t,e){var n=this._data;return n&&n[t]&&n[t][e]||""}},{key:"_toArr",value:function(){var t=1,e=1;for(var n in this._data)for(var i in this._data[n])e=Math.max(e,parseInt(i)+1),t=Math.max(t,parseInt(n)+1);for(var o=[],r=0;r<e;r++){o.push([]);for(var s=0;s<t;s++)o[r].push(this._getVal(s,r))}return o}}]),e}();function c(t){return 0===t?"0":t?t.toString():""}function h(t){return 0===Object.keys(t).length}function d(t){var e=document.createElement("table");return e.setAttribute("lang",navigator.language),t.forEach(function(t){var n=document.createElement("tr");e.appendChild(n),t.forEach(function(t){var e=document.createElement("td");n.appendChild(e),e.textContent=t})}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><html lang="'.concat(navigator.language,'"><head>\n<meta http-equiv="content-type" content="text/html; charset=utf-8"/><title></title></head><body>').concat(e.outerHTML,"</body></html>")}exports._LooseArray=l;var u="\nhtml{\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n::-webkit-scrollbar {\n  width: 0;\n  height:0;\n}\n*{\n  box-sizing: border-box;\n}\nbody{\n  padding: 0; \n  margin: 0;\n}\ntable{\n  border-spacing: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-width: 0 1px 1px 0;\n  font-size: 16px;\n  font-family: sans-serif;\n  border-collapse: separate;\n}\ntd{\n  padding:0;\n  border: 1px solid;\n  border-color: #ddd transparent transparent #ddd; \n}\ntd.selected.multi:not(.editing){\n  background:#d7f2f9;\n} \ntd.focus:not(.editing){\n  border-color: black;\n} \ntd>*{\n  border:none;\n  padding:10px;\n  min-width:100px;\n  min-height: 40px;\n  font:inherit;\n  line-height: 20px;\n  color:inherit;\n  white-space: normal;\n}\ntd>div::selection {\n    color: none;\n    background: none;\n}\n";exports._defaultCss=u;
},{}],"n4SH":[function(require,module,exports) {

},{}],"lgAh":[function(require,module,exports) {
"use strict";var e=t(require("../src/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}require("./demo.css"),window.sheet=new e.default({data:[["Product ID","Product name","Price","Unit","Category"],["256","Sample product","2.5","Piece","Stuffs"],["122","Pre mix drink","5","Bottle","Drinks"]],node:document.getElementById("editorNode"),maxCols:5}),console.info("\n\nYou can play around with the instance on the page, try :\n\nsheet.getData()\nsheet.setData([['Hello','World']])\nsheet.destroy()\n\n"),Array.prototype.forEach.call(document.getElementsByClassName("readable"),function(e){var t=document.createElement("pre");t.className="auto";var n=e.innerText.trim().replace('from "./dist/index.js"','from "importabular"').replace('from "./src/index.js"','from "importabular/src/index.js"'),r=n.split("\n"),a=r[1].match(/ +/)[0].length;n=r.map(function(e,t){return t?e.slice(0,a).trim()?e.trim():e.slice(a):e}).join("\n"),t.innerText=n,e.parentElement.appendChild(t)});
},{"../src/index.js":"uBxZ","./demo.css":"n4SH"}]},{},["lgAh"], null)
//# sourceMappingURL=https://renanlecaro.github.io/importabular/demo.3298ed6a.js.map