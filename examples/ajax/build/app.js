!function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}};function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function i(e){return null!==e&&"object"==typeof e}function o(e){return"[object Function]"===r.call(e)}function a(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var l={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:o,isStream:function(e){return i(e)&&o(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:a,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,s=arguments.length;r<s;r++)a(arguments[r],n);return t},extend:function(e,n,r){return a(n,function(n,s){e[s]=r&&"function"==typeof n?t(n,r):n}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},u="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function c(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var f=c,p=d;function h(e){if(f===setTimeout)return setTimeout(e,0);if((f===c||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}"function"==typeof u.setTimeout&&(f=setTimeout),"function"==typeof u.clearTimeout&&(p=clearTimeout);var g,m=[],b=!1,y=-1;function _(){b&&g&&(b=!1,g.length?m=g.concat(m):y=-1,m.length&&v())}function v(){if(!b){var e=h(_);b=!0;for(var t=m.length;t;){for(g=m,m=[];++y<t;)g&&g[y].run();y=-1,t=m.length}g=null,b=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===d||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}w.prototype.run=function(){this.fun.apply(null,this.array)};function R(){}var C=R,A=R,S=R,T=R,j=R,P=R,E=R;var x=u.performance||{},N=x.now||x.mozNow||x.msNow||x.oNow||x.webkitNow||function(){return(new Date).getTime()};var F=new Date;var O={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new w(e,t)),1!==m.length||b||h(v)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:C,addListener:A,once:S,off:T,removeListener:j,removeAllListeners:P,emit:E,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*N.call(x),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-F)/1e3}},k=function(e,t,n,r,s){return function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e}(new Error(e),t,n,r,s)};function D(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var B=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],H=l.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=l.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function $(){this.message="String contains an invalid character"}$.prototype=new Error,$.prototype.code=5,$.prototype.name="InvalidCharacterError";var q=function(e){for(var t,n,r=String(e),s="",i=0,o=L;r.charAt(0|i)||(o="=",i%1);s+=o.charAt(63&t>>8-i%1*8)){if((n=r.charCodeAt(i+=.75))>255)throw new $;t=t<<8|n}return s},U=l.isStandardBrowserEnv()?{write:function(e,t,n,r,s,i){var o=[];o.push(e+"="+encodeURIComponent(t)),l.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),l.isString(r)&&o.push("path="+r),l.isString(s)&&o.push("domain="+s),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},I="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||q,z=function(e){return new Promise(function(t,n){var r=e.data,s=e.headers;l.isFormData(r)&&delete s["Content-Type"];var i=new XMLHttpRequest,o="onreadystatechange",a=!1;if("test"===O.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||H(e.url)||(i=new window.XDomainRequest,o="onload",a=!0,i.onprogress=function(){},i.ontimeout=function(){}),e.auth){var u=e.auth.username||"",c=e.auth.password||"";s.Authorization="Basic "+I(u+":"+c)}if(i.open(e.method.toUpperCase(),function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(l.isURLSearchParams(t))r=t.toString();else{var s=[];l.forEach(t,function(e,t){null!=e&&(l.isArray(e)?t+="[]":e=[e],l.forEach(e,function(e){l.isDate(e)?e=e.toISOString():l.isObject(e)&&(e=JSON.stringify(e)),s.push(D(t)+"="+D(e))}))}),r=s.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i[o]=function(){if(i&&(4===i.readyState||a)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,s,o,u,c,d="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(l.forEach(r.split("\n"),function(e){if(u=e.indexOf(":"),s=l.trim(e.substr(0,u)).toLowerCase(),o=l.trim(e.substr(u+1)),s){if(c[s]&&B.indexOf(s)>=0)return;c[s]="set-cookie"===s?(c[s]?c[s]:[]).concat([o]):c[s]?c[s]+", "+o:o}}),c):c):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:d,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(k("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),i=null}},i.onerror=function(){n(k("Network Error",e,null,i)),i=null},i.ontimeout=function(){n(k("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},l.isStandardBrowserEnv()){var d=U,f=(e.withCredentials||H(e.url))&&e.xsrfCookieName?d.read(e.xsrfCookieName):void 0;f&&(s[e.xsrfHeaderName]=f)}if("setRequestHeader"in i&&l.forEach(s,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete s[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),n(e),i=null)}),void 0===r&&(r=null),i.send(r)})},M={"Content-Type":"application/x-www-form-urlencoded"};function V(e,t){!l.isUndefined(e)&&l.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var X,J={adapter:("undefined"!=typeof XMLHttpRequest?X=z:void 0!==O&&(X=z),X),transformRequest:[function(e,t){return function(e,t){l.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}(t,"Content-Type"),l.isFormData(e)||l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e)?e:l.isArrayBufferView(e)?e.buffer:l.isURLSearchParams(e)?(V(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):l.isObject(e)?(V(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};J.headers={common:{Accept:"application/json, text/plain, */*"}},l.forEach(["delete","get","head"],function(e){J.headers[e]={}}),l.forEach(["post","put","patch"],function(e){J.headers[e]=l.merge(M)});var K=J;function G(){this.handlers=[]}G.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},G.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},G.prototype.forEach=function(e){l.forEach(this.handlers,function(t){null!==t&&e(t)})};var Q=G,W=function(e,t,n){return l.forEach(n,function(n){e=n(e,t)}),e},Y=function(e){return!(!e||!e.__CANCEL__)};function Z(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ee=function(e){var t,n,r;return Z(e),e.baseURL&&(r=e.url,!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r))&&(e.url=(t=e.baseURL,(n=e.url)?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t)),e.headers=e.headers||{},e.data=W(e.data,e.headers,e.transformRequest),e.headers=l.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),l.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||K.adapter)(e).then(function(t){return Z(e),t.data=W(t.data,t.headers,e.transformResponse),t},function(t){return Y(t)||(Z(e),t&&t.response&&(t.response.data=W(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};function te(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}te.prototype.request=function(e){"string"==typeof e&&(e=l.merge({url:arguments[0]},arguments[1])),(e=l.merge(K,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[ee,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},l.forEach(["delete","get","head","options"],function(e){te.prototype[e]=function(t,n){return this.request(l.merge(n||{},{method:e,url:t}))}}),l.forEach(["post","put","patch"],function(e){te.prototype[e]=function(t,n,r){return this.request(l.merge(r||{},{method:e,url:t,data:n}))}});var ne=te;function re(e){this.message=e}re.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},re.prototype.__CANCEL__=!0;var se=re;function ie(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new se(e),t(n.reason))})}ie.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ie.source=function(){var e;return{token:new ie(function(t){e=t}),cancel:e}};var oe=ie;function ae(e){var n=new ne(e),r=t(ne.prototype.request,n);return l.extend(r,ne.prototype,n),l.extend(r,n),r}var le=ae(K);le.Axios=ne,le.create=function(e){return ae(l.merge(K,e))},le.Cancel=se,le.CancelToken=oe,le.isCancel=Y,le.all=function(e){return Promise.all(e)},le.spread=function(e){return function(t){return e.apply(null,t)}};var ue=le,ce=le;ue.default=ce;var de=ue.get;"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var fe,pe=(function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function n(e){if(!e)return!0;if(s(e)&&0===e.length)return!0;if("string"!=typeof e){for(var n in e)if(t(e,n))return!1;return!0}return!1}function r(t){return e.call(t)}var s=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function o(e){e=e||{};var o=function(e){return Object.keys(o).reduce(function(t,n){return"create"===n?t:("function"==typeof o[n]&&(t[n]=o[n].bind(o,e)),t)},{})};function a(n,r){return e.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||t(n,r)}function l(e,t){if(a(e,t))return e[t]}function u(e,t,n,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return u(e,t.split(".").map(i),n,r);var s=t[0],o=l(e,s);return 1===t.length?(void 0!==o&&r||(e[s]=n),o):(void 0===o&&("number"==typeof t[1]?e[s]=[]:e[s]={}),u(e[s],t.slice(1),n,r))}return o.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var o=0;o<r.length;o++){var a=i(r[o]);if(!("number"==typeof a&&s(n)&&a<n.length||(e.includeInheritedProps?a in Object(n):t(n,a))))return!1;n=n[a]}return!0},o.ensureExists=function(e,t,n){return u(e,t,n,!0)},o.set=function(e,t,n,r){return u(e,t,n,r)},o.insert=function(e,t,n,r){var i=o.get(e,t);r=~~r,s(i)||(i=[],o.set(e,t,i)),i.splice(r,0,n)},o.empty=function(e,t){var i,l;if(!n(t)&&null!=e&&(i=o.get(e,t))){if("string"==typeof i)return o.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===r(e)}(i))return o.set(e,t,!1);if("number"==typeof i)return o.set(e,t,0);if(s(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===r(e)}(i))return o.set(e,t,null);for(l in i)a(i,l)&&delete i[l]}}},o.push=function(e,t){var n=o.get(e,t);s(n)||(n=[],o.set(e,t,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},o.coalesce=function(e,t,n){for(var r,s=0,i=t.length;s<i;s++)if(void 0!==(r=o.get(e,t[s])))return r;return n},o.get=function(e,t,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return n;if("string"==typeof t)return o.get(e,t.split("."),n);var r=i(t[0]),s=l(e,r);return void 0===s?n:1===t.length?s:o.get(e[r],t.slice(1),n)},o.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(n(t))return e;if("string"==typeof t)return o.del(e,t.split("."));var r=i(t[0]);return a(e,r)?1!==t.length?o.del(e[r],t.slice(1)):(s(e)?e.splice(r,1):delete e[r],e):e},o}var a=o();return a.create=o,a.withInheritedProps=o({includeInheritedProps:!0}),a}()}(fe={exports:{}},fe.exports),fe.exports),he=pe.get,ge=pe.set;var me=function(e,t,n,r,s,i,o,a){const l=("function"==typeof n?n.options:n)||{};return l.__file="vue-datatable-cell.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),l._scopeId=r,l}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{style:{"text-align":e.column.align}},[e.column.component?n(e.column.component,{tag:"component",attrs:{row:e.row,column:e.column}}):e.column.interpolate?n("span",{domProps:{innerHTML:e._s(e.content)}}):n("span",[e._v(e._s(e.content))])],1)},staticRenderFns:[]},0,{props:{column:[Object,Array],row:[Object,Array]},computed:{content(){return this.column.getRepresentation(this.row)}}},void 0,!1);var be=function(e,t,n,r,s,i,o,a){const l=("function"==typeof n?n.options:n)||{};return l.__file="vue-datatable-header.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),l._scopeId=r,l}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{class:e.column.headerClass,style:{"text-align":e.column.align}},[e.column.headerComponent?n(e.column.headerComponent,{tag:"component",attrs:{column:e.column}}):n("span",[e._v(e._s(e.column.label))]),e._v(" "),e.column.sortable?n("span",{class:e.classes,on:{click:e.toggleSort}}):e._e()],1)},staticRenderFns:[]},0,{props:{model:{prop:"direction",event:"change"},column:[Object,Array],settings:Object,direction:{type:String,default:null}},computed:{canSort(){return this.column.sortable},is_sorted_ascending(){return"asc"===this.direction},is_sorted_descending(){return"desc"===this.direction},is_sorted(){return this.is_sorted_descending||this.is_sorted_ascending},classes(){var e=this.settings.get("table.sorting.classes"),t=e.canSort;return this.canSort?this.is_sorted?(this.is_sorted_ascending&&(t=t.concat(e.sortAsc)),this.is_sorted_descending&&(t=t.concat(e.sortDesc)),this.joinClasses(t)):(t=t.concat(e.sortNone),this.joinClasses(t)):""}},methods:{joinClasses(e){return this.unique(e).join(" ")},toggleSort(){this.direction&&null!==this.direction?"asc"===this.direction?this.$emit("change","desc",this.column):this.$emit("change",null,this.column):this.$emit("change","asc",this.column)},unique(e){var t={};return e.filter(function(e){return!t.hasOwnProperty(e)&&(t[e]=!0)})}}},void 0,!1);class ye{constructor(){this.properties={table:{class:"table table-hover table-striped",row:{classes:[""]},sorting:{classes:{canSort:["sort"],sortNone:["glyphicon","glyphicon-sort"],sortAsc:["glyphicon","glyphicon-sort-by-alphabet"],sortDesc:["glyphicon","glyphicon-sort-by-alphabet-alt"]}}},pager:{classes:{pager:"pagination",li:"",a:"",selected:"active",disabled:"disabled"},icons:{previous:"&lt;",next:"&gt;"}}}}get(e){return he(this.properties,e)}set(e,t){return ge(this.properties,e,t),this}merge(e){return this.properties=this._mergeObjects(this.properties,e),this}_mergeObjects(e,t){for(var n in t)null!==t[n]?"object"!=typeof t[n]?e[n]=t[n]:e[n]=this._mergeObjects(e[n],t[n]):e[n]=t[n];return e}}var _e=function(e,t,n,r,s,i,o,a){const l=("function"==typeof n?n.options:n)||{};return l.__file="vue-datatable-pager-button.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),l._scopeId=r,l}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{class:this.li_classes},[t("a",{class:this.a_classes,attrs:{href:"javascript: void(0);"},on:{click:this.sendClick}},[this._t("default",[this._v(this._s(this.value))])],2)])},staticRenderFns:[]},0,{props:{disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},value:{type:Number,default:null}},computed:{li_classes(){var e=[];return this.settings.get("pager.classes.li")&&e.push(this.settings.get("pager.classes.li")),this.disabled&&e.push(this.settings.get("pager.classes.disabled")),this.selected&&e.push(this.settings.get("pager.classes.selected")),e.join(" ")},a_classes(){var e=[];return this.settings.get("pager.classes.a")&&e.push(this.settings.get("pager.classes.a")),e.join(" ")},settings(){return this.$parent.settings}},methods:{sendClick(){this.disabled||this.$emit("click",this.value)}}},void 0,!1);class ve{constructor(e){this.setAlignment(e.align),this.label=e.label||"",this.field=e.field||null,this.representedAs=e.representedAs||null,this.component=e.component||null,this.interpolate=e.interpolate||!1,this.headerComponent=e.headerComponent||null,this.sortable=this.isSortable(e),this.filterable=this.isFilterable(e),this.headerClass=e.headerClass||""}setAlignment(e){return e&&"string"==typeof e?"center"===e.toLowerCase()?(this.align="center",this):"right"===e.toLowerCase()?(this.align="right",this):(this.align="left",this):(this.align="left",this)}isFilterable(e){return!(!1===e.filterable||!e.field&&!e.representedAs||this.component&&!this.representedAs&&!this.field)}isSortable(e){return!(!1===e.sortable||!e.field&&!e.representedAs||this.component&&!this.representedAs&&!this.field)}getRepresentation(e){return this.representedAs&&"function"==typeof this.representedAs?this.representedAs(e):this.component&&this.filterable?this.plain_text_function(e,this):he(e,this.field)}getValue(e){return this.getRepresentation(e)}matches(e,t){return-1!==(""+this.getRepresentation(e)).toLowerCase().indexOf(t.toLowerCase())}}var we=function(e,t,n,r,s,i,o,a){const l=("function"==typeof n?n.options:n)||{};return l.__file="vue-datatable.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),l._scopeId=r,l}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{class:e.table_class},[n("thead",[n("tr",e._l(e.normalized_columns,function(t,r){return n("datatable-header",{key:r,attrs:{column:t,settings:e.settings,direction:e.getSortDirectionForColumn(t)},on:{change:e.setSortDirectionForColumn}})}))]),e._v(" "),n("tbody",[e._l(e.processed_rows,function(t,r){return e._t("default",[n("tr",{key:r,class:e.getRowClasses(t)},e._l(e.normalized_columns,function(e,r){return n("datatable-cell",{key:r,attrs:{column:e,row:t}})}))],{row:t,columns:e.normalized_columns})}),e._v(" "),0==e.processed_rows.length?n("tr",[n("td",{attrs:{colspan:e.normalized_columns.length}},[e._t("no-results")],2)]):e._e()],2),e._v(" "),e.$slots.footer||e.$scopedSlots.footer?n("tfoot",[e._t("footer",null,{rows:e.processed_rows})],2):e._e()])},staticRenderFns:[]},0,{props:{name:{type:String,default:"default"},columns:[Object,Array],data:[Object,Array,String,Function],filterBy:{type:[String,Array],default:null},rowClasses:{type:[String,Array,Object,Function],default:null}},data:()=>({sort_by:null,sort_dir:null,total_rows:0,page:1,per_page:null,processed_rows:[]}),computed:{rows(){return this.data.slice(0)},settings(){return this.$options.settings},handler(){return this.$options.handler},normalized_columns(){return this.columns.map(function(e){return new ve(e)})},table_class(){return this.settings.get("table.class")}},methods:{getSortDirectionForColumn(e){return this.sort_by!==e?null:this.sort_dir},setSortDirectionForColumn(e,t){this.sort_by=t,this.sort_dir=e},processRows(){if("function"==typeof this.data){let e={filter:this.filterBy,sort_by:this.sort_by?this.sort_by.field:null,sort_dir:this.sort_dir,page_length:this.per_page,page_number:this.page};return void this.data(e,function(e,t){this.setRows(e),this.setTotalRowCount(t)}.bind(this))}let e=this.handler.filterHandler(this.rows,this.filterBy,this.normalized_columns),t=this.handler.sortHandler(e,this.sort_by,this.sort_dir),n=this.handler.paginateHandler(t,this.per_page,this.page);this.handler.displayHandler(n,{filtered_data:e,sorted_data:t,paged_data:n},this.setRows,this.setTotalRowCount)},setRows(e){this.processed_rows=e},setTotalRowCount(e){this.total_rows=e},getRowClasses(e){var t=this.rowClasses;return null===t&&(t=this.settings.get("table.row.classes")),"function"==typeof t?t(e):t}},created(){this.$datatables[this.name]=this,this.$root.$emit("table.ready",this.name),this.$watch(function(){return this.data}.bind(this),this.processRows,{deep:!0}),this.$watch("columns",this.processRows),this.$watch(function(){return this.filterBy+this.per_page+this.page+this.sort_by+this.sort_dir}.bind(this),this.processRows),this.processRows()},handler:null,settings:null},void 0,!1);var Re=function(e,t,n,r,s,i,o,a){const l=("function"==typeof n?n.options:n)||{};return l.__file="vue-datatable-pager.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),l._scopeId=r,l}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("nav",["abbreviated"===e.type?n("ul",{class:e.pagination_class},[e.page-3>=1?n("datatable-button",{attrs:{value:1},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page-4>=1?n("datatable-button",{attrs:{disabled:""}},[e._v("...")]):e._e(),e._v(" "),e.page-2>=1?n("datatable-button",{attrs:{value:e.page-2},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page-1>=1?n("datatable-button",{attrs:{value:e.page-1},on:{click:e.setPageNum}}):e._e(),e._v(" "),n("datatable-button",{attrs:{value:e.page,selected:""}}),e._v(" "),e.page+1<=e.total_pages?n("datatable-button",{attrs:{value:e.page+1},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page+2<=e.total_pages?n("datatable-button",{attrs:{value:e.page+2},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page+4<=e.total_pages?n("datatable-button",{attrs:{disabled:""}},[e._v("...")]):e._e(),e._v(" "),e.page+3<=e.total_pages?n("datatable-button",{attrs:{value:e.total_pages},on:{click:e.setPageNum}}):e._e()],1):"long"===e.type?n("ul",{class:e.pagination_class},e._l(e.total_pages,function(t){return n("datatable-button",{key:t,attrs:{value:t,selected:t===e.page},on:{click:e.setPageNum}})})):"short"===e.type?n("ul",{class:e.pagination_class},[n("datatable-button",{attrs:{disabled:e.page-1<1,value:e.page-1},on:{click:e.setPageNum}},[n("span",{domProps:{innerHTML:e._s(e.previous_icon)}})]),e._v(" "),n("datatable-button",{attrs:{value:e.page,selected:""}}),e._v(" "),n("datatable-button",{attrs:{disabled:e.page+1>e.total_pages,value:e.page+1},on:{click:e.setPageNum}},[n("span",{domProps:{innerHTML:e._s(e.next_icon)}})])],1):e._e()]):e._e()},staticRenderFns:[]},0,{model:{prop:"page",event:"change"},props:{table:{type:String,default:"default"},type:{type:String,default:"long"},perPage:{type:Number,default:10},page:{type:Number,default:1}},data:()=>({table_instance:null}),computed:{show(){return this.table_instance&&this.total_rows>0},total_rows(){return this.table_instance?this.table_instance.total_rows:0},pagination_class(){return this.settings.get("pager.classes.pager")},disabled_class(){return this.settings.get("pager.classes.disabled")},previous_link_classes(){return this.page-1<1?this.settings.get("pager.classes.disabled"):""},next_link_classes(){return this.page+1>this.total_pages?this.settings.get("pager.classes.disabled"):""},total_pages(){return this.total_rows>0?Math.ceil(this.total_rows/this.perPage):0},previous_icon(){return this.settings.get("pager.icons.previous")},next_icon(){return this.settings.get("pager.icons.next")},settings(){return this.$options.settings}},methods:{setPageNum(e){this.table_instance.page=e,this.table_instance.per_page=this.perPage,this.$emit("change",e)},getClassForPage(e){return this.page==e?this.settings.get("pager.classes.selected"):""}},watch:{total_rows(){this.page>this.total_pages&&this.setPageNum(this.total_pages)},perPage(){var e=this.page;e>this.total_pages&&(e=this.total_pages),this.setPageNum(e)}},created(){if(this.$datatables[this.table])return this.table_instance=this.$datatables[this.table],void(this.table_instance.per_page=this.perPage);this.$root.$on("table.ready",function(e){e===this.table&&(this.table_instance=this.$datatables[this.table],this.table_instance.per_page=this.perPage)}.bind(this))},settings:null},void 0,!1);class Ce{constructor(){this.filterHandler=this.handleFilter,this.sortHandler=this.handleSort,this.paginateHandler=this.handlePaginate,this.displayHandler=this.handleDisplay}handleFilter(e,t,n){return t?(Array.isArray(t)||(t=[t]),e.filter(function(e){for(var r in t){let i=t[r].split(/\s/),o=!0;for(var s in i)this.rowMatches(e,i[s],n)||(o=!1);if(o)return!0}return!1}.bind(this))):e}rowMatches(e,t,n){for(var r in n)if(n[r].matches(e,t))return!0;return!1}handleSort(e,t,n){return t&&null!==n?e.sort(function(e,r){var s=t.getRepresentation(e),i=t.getRepresentation(r);if(s==i)return 0;var o=s>i?1:-1;return"desc"===n&&(o*=-1),o}):e}handlePaginate(e,t,n){if(!t)return e;n<1&&(n=1);let r=(n-1)*t,s=n*t;return e.slice(r,s)}handleDisplay(e,t,n,r){n(e),r(t.filtered_data.length)}}class Ae{constructor(e){this.id=e,this.handler=new Ce,this.settings=new ye}getId(){return this.id}setFilterHandler(e){return this.handler.filterHandler=e,this}setSortHandler(e){return this.handler.sortHandler=e,this}setPaginateHandler(e){return this.handler.paginateHandler=e,this}setDisplayHandler(e){return this.handler.displayHandler=e,this}setting(e,t){return void 0===t?this.settings.get(e):(this.settings.set(e,t),this)}mergeSettings(e){return this.settings.merge(e),this}getTableDefinition(){let e=this.clone(we);return e.handler=this.handler,e.settings=this.settings,e.name=this.id,e}getPagerDefinition(){let e=this.clone(Re);return e.settings=this.settings,e.name=this.id,e}clone(e){var t;if(null===e||"object"!=typeof e)return e;if(e instanceof Array){t=[];for(var n=0;n<e.length;n++)t[n]=this.clone(e[n]);return t}if(e instanceof Object){for(var r in t={},e)e.hasOwnProperty(r)&&(t[r]=this.clone(e[r]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")}}var Se=new class{constructor(){this.table_types=[],this.use_default_type=!0,this.default_table_settings=new ye}useDefaultType(e){return this.use_default_type=!!e,this}registerTableType(e,t){let n=new Ae(e);return this.table_types.push(n),t&&"function"==typeof t&&t(n),this}install(e){for(var t in e.prototype.$datatables={},e.component("datatable-cell",me),e.component("datatable-header",be),e.component("datatable-button",_e),this.use_default_type&&this.registerTableType("datatable",function(e){e.mergeSettings(this.default_table_settings.properties)}.bind(this)),this.table_types)this.installTableType(this.table_types[t].getId(),this.table_types[t],e)}installTableType(e,t,n){n.component(e,t.getTableDefinition()),n.component(e+"-pager",t.getPagerDefinition())}};Se.registerTableType("ajaxtable",function(e){e.setFilterHandler(function(e,t,n){return-1===e.indexOf("?")&&(e+="?"),t&&(e+="&q="+t),e=e.replace("?&","?")}),e.setSortHandler(function(e,t,n){return t&&n&&(e+="&_sort="+t.field,e+="&_order="+n),e=e.replace("?&","?")}),e.setPaginateHandler(function(e,t,n){return e+="&_page="+n,e=(e+="&_limit="+t).replace("?&","?")}),e.setDisplayHandler(function(e,t,n,r){de(e).then(function(e){let t=1*e.headers["x-total-count"];r(t),n(e.data)})})}),e.use(Se),e.config.debug=!0,e.config.devtools=!0,window.vm=new e({el:".container",data:{filter:"",columns:[{label:"id",field:"id"},{label:"Username",field:"user.username"},{label:"First Name",field:"user.first_name"},{label:"Last Name",field:"user.last_name"},{label:"Email",field:"user.email"},{label:"address",representedAs:function(e){return e.address+"<br />"+e.city+", "+e.state},interpolate:!0,sortable:!1,filterable:!1}],url:"http://localhost:3000/profiles/",page:1}})}(Vue);
//# sourceMappingURL=app.js.map
