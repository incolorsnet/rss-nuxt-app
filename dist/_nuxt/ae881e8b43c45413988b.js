/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=123},138:function(t,e,n){"use strict";var r=n(43);n.n(r).a},139:function(t,e,n){"use strict";var r=n(44);n.n(r).a},140:function(t,e,n){},141:function(t,e,n){"use strict";var r=n(45);n.n(r).a},160:function(t,e,n){"use strict";n.r(e);n(62),n(35),n(36);var r=n(23),o=(n(37),n(95),n(4)),c=(n(74),n(76),n(79),n(18),n(56),n(41),n(80),n(110),n(122),n(0)),h=(n(58),n(123)),l=h.keys();function f(t){var e=h(t);return e.default||e}var d={},m=!0,v=!1,x=void 0;try{for(var y,w=l[Symbol.iterator]();!(m=(y=w.next()).done);m=!0){var $=y.value;d[$.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=f($)}}catch(t){v=!0,x=t}finally{try{m||null==w.return||w.return()}finally{if(v)throw x}}var _=d,k=(n(124),n(125),n(126),n(128),n(130),n(131),n(134),n(11));function C(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function E(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(k.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function O(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function R(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function T(t){return Promise.all(R(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=O(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function S(t){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:return t.abrupt("return",Object(k.a)({},e,{meta:j(e).map(function(t,n){return Object(k.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function M(t,e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=Y(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,S(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,S(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function P(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function D(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?Q:encodeURIComponent,h=0;h<t.length;h++){var l=t[h];if("string"!=typeof l){var f=data[l.name||"pathMatch"],d=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<f.length;m++){if(d=c(f[m]),!e[h].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===m?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(f),!e[h].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",h=e&&e.delimiter||"/";for(;null!=(n=X.exec(t));){var l=n[0],f=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,f)path+=f[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],$=n[6],_=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,C="+"===$||"*"===$,E="?"===$||"*"===$,O=n[2]||h,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:O,optional:E,repeat:C,partial:k,asterisk:!!_,pattern:pattern?V(pattern):_?".*":"[^"+U(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function B(t,e){var n={},r=Object(k.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function I(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(k.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var X=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Q(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Y(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),h=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),h+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(h+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),h+=o?"#"+o:""}var H=n(91),J=n.n(H),K=n(60),z=function(){return n.e(2).then(n.bind(null,169)).then(function(t){return t.default||t})};c.a.use(K.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var F=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var W=n(92),G=n.n(W),Z=Object(k.a)({},G.a,{name:"NoSsr"}),tt={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,h=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var f=c[l]||h,d={};et.forEach(function(t){void 0!==f[t]&&(d[t]=f[t])});var m={};nt.forEach(function(t){"function"==typeof f[t]&&(m[t]=f[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:d,on:m},x)}},et=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],nt=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],ot={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},it=(n(138),n(22)),at=Object(it.a)(ot,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,st={name:"Nuxt",components:{NuxtChild:tt,NuxtError:at},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||D(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ut={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ct=(n(139),Object(it.a)(ut,void 0,void 0,!1,null,null,null).exports),ht=(n(140),n(141),{_default:Object(it.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null).exports}),lt={head:{title:"nokura.me",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"nokura.me"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"nokura.me"},{hid:"author",name:"author",content:"yuuki takahashi"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"nokura.me"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"nokura.me"},{hid:"og:description",name:"og:description",property:"og:description",content:"nokura.me"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.3b58cc9a.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ht["_"+t]||(t="default"),this.layoutName=t,this.layout=ht["_"+t],this.layout},loadLayout:function(t){return t&&ht["_"+t]||(t="default"),Promise.resolve(ht["_"+t])}},components:{NuxtLoading:ct}},pt=n(61),ft=n.n(pt),mt=function(t,e){return vt.apply(this,arguments)};function vt(){return(vt=Object(o.a)(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n((r={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}}).iconProperty.replace("$",""),xt(r.icons));case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}for(var xt=function(t){return function(e){return t[e]||""}},gt=n(93),bt=n.n(gt),yt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,c=void 0;try{for(var h,l=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(h=l.next()).done);r=!0){var f=h.value;if(!e)return void delete this.defaults.headers[f][t];this.defaults.headers[f][t]=e}}catch(t){o=!0,c=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},wt=["request","delete","get","head","options","post","put","patch"],$t=function(){var t=wt[_t];yt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},_t=0;_t<wt.length;_t++)$t();var kt=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=bt.a.create(n);!function(t){for(var e in yt)t[e]=yt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var c=function(t){if(o){var progress=100*t.loaded/(t.total*o);r().set(Math.min(100,progress))}};t.defaults.onUploadProgress=c,t.defaults.onDownloadProgress=c}(r),t.$axios=r,e("axios",r)},Ct=n(94),Et=n.n(Ct);c.a.use(Et.a,{touchClass:"tap",tapTolerance:0}),c.a.component(Z.name,Z),c.a.component(tt.name,tt),c.a.component("NChild",tt),c.a.component(st.name,st),c.a.use(J.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Ot={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function jt(){return(jt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,h,path,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new K.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:F,routes:[{path:"/",component:z,name:"index"}],fallback:!1});case 2:return n=t.sent,r=Object(k.a)({router:n,nuxt:{defaultTransition:Ot,transitions:[Ot],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Ot,{name:t}):Object.assign({},Ot,t):Ot}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?I(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},lt),o=e?e.next:function(t){return r.router.push(t)},e?h=n.resolve(e.url).route:(path=P(n.options.base),h=n.resolve(path).route),t.next=8,M(r,{route:h,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof mt){t.next=12;break}return t.next=12,mt(r.context,l);case 12:if("function"!=typeof kt){t.next=15;break}return t.next=15,kt(r.context,l);case 15:t.next=18;break;case 18:if("function"!=typeof ft.a){t.next=22;break}return t.next=22,ft()(r.context,l);case 22:t.next=25;break;case 25:return t.abrupt("return",{app:r,router:n});case 26:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Rt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},Tt=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),St={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||Rt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(Tt.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){Tt&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),Tt.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){Tt.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var h=o.value;try{h(),h.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component(St.name,St),c.a.component("NLink",St);var Lt,Mt,Nt=[],At=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var Pt=c.a.config.errorHandler||console.error;function qt(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Dt(t,e,n){return Bt.apply(this,arguments)}function Bt(){return(Bt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,h,l,f=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Lt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?B(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,T(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return f._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},h=c.statusCode||c.status||c.response&&c.response.status||500,l=c.message||"",!/^Loading chunk (\d)+ failed\./.test(l)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:h,message:l}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function It(t,e){return At.serverRendered&&e&&E(t,e),t._Ctor=t,t}function Xt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=O(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof _[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),_[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():A(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Qt(t,e,n){return Ut.apply(this,arguments)}function Ut(){return(Ut=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,h,l,f,d,m,v,x,y,w,$,_,k,O,R,T=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Nt=e===n?[]:j(n,o=[]).map(function(t,i){return D(n.matched[o[i]].path)(n.params)}),c=!1,h=function(path){n.path===path.path&&T.$loading.finish&&T.$loading.finish(),n.path!==path.path&&T.$loading.pause&&T.$loading.pause(),c||(c=!0,r(path))},t.next=7,M(Lt,{route:e,from:n,next:h.bind(this)});case 7:if(this._dateLastError=Lt.nuxt.dateErr,this._hadError=!!Lt.nuxt.err,(f=j(e,l=[])).length){t.next=25;break}return t.next=14,Xt.call(this,f,Lt.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof at.layout?at.layout(Lt.context):at.layout);case 18:return d=t.sent,t.next=21,Xt.call(this,f,Lt.context,d);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Lt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return f.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(qt(f,e,n)),t.prev=27,t.next=30,Xt.call(this,f,Lt.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Lt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(m=f[0].options.layout)&&(m=m(Lt.context)),t.next=38,this.loadLayout(m);case 38:return m=t.sent,t.next=41,Xt.call(this,f,Lt.context,m);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Lt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:v=!0,t.prev=46,x=!0,y=!1,w=void 0,t.prev=50,$=f[Symbol.iterator]();case 52:if(x=(_=$.next()).done){t.next=64;break}if("function"==typeof(k=_.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,k.options.validate(Lt.context);case 58:if(v=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:x=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),y=!0,w=t.t0;case 70:t.prev=70,t.prev=71,x||null==$.return||$.return();case 73:if(t.prev=73,!y){t.next=76;break}throw w;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(v){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(f.map(function(t,i){if(t._path=D(e.matched[l[i]].path)(e.params),t._dataRefresh=!1,T._pathChanged&&T._queryChanged||t._path!==Nt[i])t._dataRefresh=!0;else if(!T._pathChanged&&T._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return T._diffQuery[t]}))}if(!T._hadError&&T._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,h=o&&c?30:45;if(o){var f=A(t.options.asyncData,Lt.context).then(function(e){E(t,e),T.$loading.increase&&T.$loading.increase(h)});r.push(f)}if(T.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Lt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){T.$loading.increase&&T.$loading.increase(h)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(O=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,O));case 97:return Nt=[],C(O),"function"==typeof(R=at.layout)&&(R=R(Lt.context)),t.next=103,this.loadLayout(R);case 103:this.error(O),this.$nuxt.$emit("routeChanged",e,n,O),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Vt(t,e){R(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function Yt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?at.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Lt.context)),this.setLayout(e)}function Ht(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=j(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),Yt.call(n,t)})}function Jt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Mt.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Kt(){return(Kt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,h,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Lt=e.app,Mt=e.router,t.next=4,Promise.all((path=void 0,path=P((f=Mt).options.base,f.options.mode),R(f.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return h=It(O(e),At.data?At.data[c]:null),r.components[o]=h,t.abrupt("return",h);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new c.a(Lt),h=At.layout||"default",t.next=9,r.loadLayout(h);case 9:if(r.setLayout(h),l=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){Jt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(qt(n,Mt.currentRoute)),Nt=Mt.currentRoute.matched.map(function(t){return D(t.path)(Mt.currentRoute.params)})),r.$loading={},At.error&&r.error(At.error),Mt.beforeEach(Dt.bind(r)),Mt.beforeEach(Qt.bind(r)),Mt.afterEach(Vt),Mt.afterEach(Ht.bind(r)),!At.serverRendered){t.next=22;break}return l(),t.abrupt("return");case 22:Qt.call(r,Mt.currentRoute,Mt.currentRoute,function(path){if(!path)return Vt(Mt.currentRoute,Mt.currentRoute),Yt.call(r,Mt.currentRoute),void l();Mt.push(path,function(){return l()},function(t){if(!t)return l();Pt(t)})});case 23:case"end":return t.stop()}var f,path},t)}))).apply(this,arguments)}(function(t){return jt.apply(this,arguments)})().then(function(t){return Kt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Pt(t)})},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},61:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},92:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),h=c.default;void 0===h&&(h=[]);var l=c.placeholder;return n._isMounted?h:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||l)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||l):h.length>0?h.map(function(){return t(!1)}):t(!1))}};t.exports=r},94:function(t,e,n){function r(t){return t.touches[0].clientX}function o(t){return t.touches[0].clientY}var c=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h={install:function(t,e){function n(t){var e=this.$$touchObj;e.supportTouch=!0,e.touchStarted||($(this),e.touchStarted=!0,e.touchMoved=!1,e.swipeOutBounded=!1,e.startX=r(t),e.startY=o(t),e.currentX=0,e.currentY=0,e.touchStartTime=t.timeStamp,w(t,this,"start"))}function h(t){var n=this.$$touchObj;if(n.currentX=r(t),n.currentY=o(t),n.touchMoved){if(!n.swipeOutBounded){var c=e.swipeTolerance;n.swipeOutBounded=Math.abs(n.startX-n.currentX)>c&&Math.abs(n.startY-n.currentY)>c}}else{var h=e.tapTolerance;n.touchMoved=Math.abs(n.startX-n.currentX)>h||Math.abs(n.startY-n.currentY)>h,n.touchMoved&&w(t,this,"moved")}n.touchMoved&&w(t,this,"moving")}function l(){var t=this.$$touchObj;_(this),t.touchStarted=t.touchMoved=!1,t.startX=t.startY=0}function f(t){var n=this.$$touchObj;if(n.touchStarted=!1,_(this),n.touchMoved){if(!n.swipeOutBounded){var r,o=e.swipeTolerance;r=Math.abs(n.startX-n.currentX)<o?n.startY>n.currentY?"top":"bottom":n.startX>n.currentX?"left":"right",n.callbacks["swipe."+r]?w(t,this,"swipe."+r,r):w(t,this,"swipe",r)}}else n.callbacks.longtap&&t.timeStamp-n.touchStartTime>e.longTapTimeInterval?(t.preventDefault(),w(t,this,"longtap")):w(t,this,"tap"),w(t,this,"end")}function d(t){this.$$touchObj.supportTouch||e.disableClick||w(t,this,"tap")}function m(t){this.$$touchObj.supportTouch||e.disableClick||w(t,this,"start")}function v(t){this.$$touchObj.supportTouch||e.disableClick||w(t,this,"end")}function x(){$(this)}function y(){_(this)}function w(t,e,n,param){var r=e.$$touchObj.callbacks[n]||[];if(0===r.length)return null;for(var i=0;i<r.length;i++){var o=r[i];o.modifiers.stop&&t.stopPropagation(),o.modifiers.prevent&&t.preventDefault(),o.modifiers.self&&t.target!==t.currentTarget||"function"==typeof o.value&&(param?o.value(param,t):o.value(t))}}function $(t){var n=t.$$touchClass||e.touchClass;n&&t.classList.add(n)}function _(t){var n=t.$$touchClass||e.touchClass;n&&t.classList.remove(n)}e=Object.assign({},{disableClick:!1,tapTolerance:10,swipeTolerance:30,longTapTimeInterval:400,touchClass:""},e||{}),t.directive("touch",{bind:function(t,r){t.$$touchObj=t.$$touchObj||{supportTouch:!1,callbacks:{},hasBindTouchEvents:!1};var o=r.arg||"tap";switch(o){case"swipe":var w=r.modifiers;if(w.left||w.right||w.top||w.bottom){for(var i in r.modifiers)if(["left","right","top","bottom"].indexOf(i)>=0){var $="swipe."+i;t.$$touchObj.callbacks[$]=t.$$touchObj.callbacks[$]||[],t.$$touchObj.callbacks[$].push(r)}}else t.$$touchObj.callbacks.swipe=t.$$touchObj.callbacks.swipe||[],t.$$touchObj.callbacks.swipe.push(r);break;default:t.$$touchObj.callbacks[o]=t.$$touchObj.callbacks[o]||[],t.$$touchObj.callbacks[o].push(r)}if(!t.$$touchObj.hasBindTouchEvents){var _=!!c&&{passive:!0};t.addEventListener("touchstart",n,_),t.addEventListener("touchmove",h,_),t.addEventListener("touchcancel",l),t.addEventListener("touchend",f),e.disableClick||(t.addEventListener("click",d),t.addEventListener("mousedown",m),t.addEventListener("mouseup",v),t.addEventListener("mouseenter",x),t.addEventListener("mouseleave",y)),t.$$touchObj.hasBindTouchEvents=!0}},unbind:function(t){t.removeEventListener("touchstart",n),t.removeEventListener("touchmove",h),t.removeEventListener("touchcancel",l),t.removeEventListener("touchend",f),e.disableClick||(t.removeEventListener("click",d),t.removeEventListener("mousedown",m),t.removeEventListener("mouseup",v),t.removeEventListener("mouseenter",x),t.removeEventListener("mouseleave",y)),delete t.$$touchObj}}),t.directive("touch-class",{bind:function(t,e){t.$$touchClass=e.value},unbind:function(t){delete t.$$touchClass}})}};t.exports=h},96:function(t,e,n){t.exports=n(160)}},[[96,3,1]]]);