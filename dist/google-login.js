!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}("undefined"!=typeof self?self:this,(function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,c){if(c!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t,n,o,r){var i=e.getElementsByTagName(t)[0],c=i,a=i;(a=e.createElement(t)).id=n,a.src=o,c&&c.parentNode?c.parentNode.insertBefore(a,c):e.head.appendChild(a),a.onload=r}function a(e){return f.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function u(e){return f.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},f.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("g",{fill:"#000",fillRule:"evenodd"},f.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),f.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),f.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),f.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),f.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function l(e){var t=r(Object(s.useState)(!1),2),n=t[0],o=t[1],i=r(Object(s.useState)(!1),2),c=i[0],l=i[1],d=e.tag,g=e.type,y=e.className,b=e.disabledStyle,h=e.buttonText,m=e.children,v=e.render,S=e.theme,j=e.icon,w=e.disabled,I=p({onSuccess:e.onSuccess,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,onFailure:e.onFailure,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,onRequest:e.onRequest,prompt:e.prompt}),O=I.signIn;console.log("LOADED",I.loaded);var x=w;if(v)return v({onClick:O,disabled:x});var k={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},T=x?Object.assign({},k,b):c?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return f.a.createElement(d,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),l(!1)},onMouseDown:function(){return l(!0)},onMouseUp:function(){return l(!1)},onClick:O,style:T,type:g,className:y},[j&&f.a.createElement(u,{key:1,active:c}),f.a.createElement(a,{icon:j,key:2},m||h)])}n.r(t);var s=n(0),f=n.n(s),d=(n(1),null),p=function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},r(e)}function n(e){if(e&&e.preventDefault(),k){var n=window.gapi.auth2.getAuthInstance(),o={prompt:O};I(),"code"===j?n.grantOfflineAccess(o).then((function(e){return r(e)}),(function(e){return h(e)})):n.signIn(o).then((function(e){return t(e)}),(function(e){return h(e)}))}}var r=e.onSuccess,i=e.clientId,a=e.cookiePolicy,u=e.loginHint,l=e.hostedDomain,f=e.autoLoad,p=e.isSignedIn,g=e.fetchBasicProfile,y=e.redirectUri,b=e.discoveryDocs,h=e.onFailure,m=e.uxMode,v=e.scope,S=e.accessType,j=e.responseType,w=e.jsSrc,I=e.onRequest,O=e.prompt,x=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(s.useState)(!1),2),k=x[0],_=x[1];return Object(s.useEffect)((function(){c(document,"script","google-login",w,(function(){console.log("CALL BACK");var e={client_id:i,cookie_policy:a,login_hint:u,hosted_domain:l,fetch_basic_profile:g,discoveryDocs:b,ux_mode:m,redirect_uri:y,scope:v,access_type:S};"code"===j&&(e.access_type="offline"),d=setInterval((function(){try{"function"==typeof window.gapi.auth2.getAuthInstance&&(clearInterval(d),console.log("INTERVAL SCRIPT IS FINALLY LOADED"),_(!0),window.gapi.auth2.getAuthInstance()||(console.log("getAuthInstance IS false"),window.gapi.auth2.init(e).then((function(e){console.log("auth2.init"),p&&e.isSignedIn.get()&&t(e.currentUser.get())}),(function(e){return h(e)}))),console.log("getAuthInstance IS true"),f&&n())}catch(e){console.log("CATCH",e)}})),console.log("window.gapi",window.gapi,o(window.gapi.load)),window.gapi.load("auth2",(function(){console.log("SCRIPT IS LOADED")}))}))}),[]),{signIn:n,loaded:k}};function g(e){var t=i(Object(s.useState)(!1),2),n=t[0],o=t[1],r=i(Object(s.useState)(!1),2),c=r[0],l=r[1],d=e.tag,p=e.type,g=e.className,y=e.disabledStyle,h=e.buttonText,m=e.children,v=e.render,S=e.theme,j=e.icon,w=e.disabled,I=b({jsSrc:e.jsSrc,onFailure:e.onFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),O=I.signOut,x=w||!I.loaded;if(v)return v({onClick:O,disabled:x});var k={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},T=x?Object.assign({},k,y):c?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return f.a.createElement(d,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),l(!1)},onMouseDown:function(){return l(!0)},onMouseUp:function(){return l(!1)},onClick:O,style:T,type:p,disabled:x,className:g},[j&&f.a.createElement(u,{key:1,active:c}),f.a.createElement(a,{icon:j,key:2},m||h)])}l.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/api.js"};var y=l,b=function(e){var t=e.jsSrc,n=e.onFailure,o=e.clientId,r=e.cookiePolicy,i=e.loginHint,a=e.hostedDomain,u=e.fetchBasicProfile,l=e.discoveryDocs,f=e.uxMode,d=e.redirectUri,p=e.scope,g=e.accessType,y=e.onLogoutSuccess,b=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(s.useState)(!1),2),h=b[0],m=b[1];return Object(s.useEffect)((function(){c(document,"script","google-login",t,(function(){var e={client_id:o,cookie_policy:r,login_hint:i,hosted_domain:a,fetch_basic_profile:u,discoveryDocs:l,ux_mode:f,redirect_uri:d,scope:p,access_type:g};window.gapi.load("auth2",(function(){m(!0),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(e).then((function(){}),(function(e){return n(e)}))}))}))}),[]),{signOut:function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(e.disconnect().then(y))}},loaded:h}};g.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var h=g;n.d(t,"default",(function(){return y})),n.d(t,"GoogleLogin",(function(){return y})),n.d(t,"GoogleLogout",(function(){return h})),n.d(t,"useGoogleLogin",(function(){return p})),n.d(t,"useGoogleLogout",(function(){return b}))}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}));