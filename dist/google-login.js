!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}("undefined"!=typeof self?self:this,(function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,c){if(c!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t,n,o,r){var i=e.getElementsByTagName(t)[0],c=i,a=i;(a=e.createElement(t)).id=n,a.src=o,c&&c.parentNode?c.parentNode.insertBefore(a,c):e.head.appendChild(a),a.onload=r}function c(e){return l.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function a(e){return l.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},l.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{fill:"#000",fillRule:"evenodd"},l.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),l.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),l.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),l.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),l.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function u(e){var t=o(Object(s.useState)(!1),2),n=t[0],r=t[1],i=o(Object(s.useState)(!1),2),u=i[0],d=i[1],p=e.tag,g=e.type,y=e.className,b=e.disabledStyle,h=e.buttonText,m=e.children,v=e.render,S=e.theme,j=e.icon,O=e.disabled,x=f({onSuccess:e.onSuccess,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,onFailure:e.onFailure,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,onRequest:e.onRequest,prompt:e.prompt}),w=x.signIn;console.log("LOADED",x.loaded);var I=O;if(v)return v({onClick:w,disabled:I});var k={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},T=I?Object.assign({},k,b):u?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return l.a.createElement(p,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),d(!1)},onMouseDown:function(){return d(!0)},onMouseUp:function(){return d(!1)},onClick:w,style:T,type:g,className:y},[j&&l.a.createElement(a,{key:1,active:u}),l.a.createElement(c,{icon:j,key:2},m||h)])}n.r(t);var s=n(0),l=n.n(s),f=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},o(e)}function n(e){if(e&&e.preventDefault(),w){var n=window.gapi.auth2.getAuthInstance(),r={prompt:O};j(),"code"===v?n.grantOfflineAccess(r).then((function(e){return o(e)}),(function(e){return y(e)})):n.signIn(r).then((function(e){return t(e)}),(function(e){return y(e)}))}}var o=e.onSuccess,r=e.clientId,c=e.cookiePolicy,a=e.loginHint,u=e.hostedDomain,l=e.autoLoad,f=e.isSignedIn,d=e.fetchBasicProfile,p=e.redirectUri,g=e.discoveryDocs,y=e.onFailure,b=e.uxMode,h=e.scope,m=e.accessType,v=e.responseType,S=e.jsSrc,j=e.onRequest,O=e.prompt,x=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(s.useState)(!1),2),w=x[0],I=x[1];return Object(s.useEffect)((function(){i(document,"script","google-login",S,(function(){console.log("CALL BACK");var e={client_id:r,cookie_policy:c,login_hint:a,hosted_domain:u,fetch_basic_profile:d,discoveryDocs:g,ux_mode:b,redirect_uri:p,scope:h,access_type:m};"code"===v&&(e.access_type="offline"),setTimeout((function(){window.gapi.load("auth2",(function(){console.log("SCRIPT IS LOADED"),I(!0),window.gapi.auth2.getAuthInstance()||(console.log("getAuthInstance IS false"),window.gapi.auth2.init(e).then((function(e){console.log("auth2.init"),f&&e.isSignedIn.get()&&t(e.currentUser.get())}),(function(e){return y(e)}))),console.log("getAuthInstance IS true"),l&&n()}))}),1e3)}))}),[]),{signIn:n,loaded:w}});function d(e){var t=r(Object(s.useState)(!1),2),n=t[0],o=t[1],i=r(Object(s.useState)(!1),2),u=i[0],f=i[1],d=e.tag,p=e.type,y=e.className,b=e.disabledStyle,h=e.buttonText,m=e.children,v=e.render,S=e.theme,j=e.icon,O=e.disabled,x=g({jsSrc:e.jsSrc,onFailure:e.onFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),w=x.signOut,I=O||!x.loaded;if(v)return v({onClick:w,disabled:I});var k={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},T=I?Object.assign({},k,b):u?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return l.a.createElement(d,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),f(!1)},onMouseDown:function(){return f(!0)},onMouseUp:function(){return f(!1)},onClick:w,style:T,type:p,disabled:I,className:y},[j&&l.a.createElement(a,{key:1,active:u}),l.a.createElement(c,{icon:j,key:2},m||h)])}u.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/api.js"};var p=u,g=function(e){var t=e.jsSrc,n=e.onFailure,o=e.clientId,r=e.cookiePolicy,c=e.loginHint,a=e.hostedDomain,u=e.fetchBasicProfile,l=e.discoveryDocs,f=e.uxMode,d=e.redirectUri,p=e.scope,g=e.accessType,y=e.onLogoutSuccess,b=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(s.useState)(!1),2),h=b[0],m=b[1];return Object(s.useEffect)((function(){i(document,"script","google-login",t,(function(){var e={client_id:o,cookie_policy:r,login_hint:c,hosted_domain:a,fetch_basic_profile:u,discoveryDocs:l,ux_mode:f,redirect_uri:d,scope:p,access_type:g};window.gapi.load("auth2",(function(){m(!0),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(e).then((function(){}),(function(e){return n(e)}))}))}))}),[]),{signOut:function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(e.disconnect().then(y))}},loaded:h}};d.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var y=d;n.d(t,"default",(function(){return p})),n.d(t,"GoogleLogin",(function(){return p})),n.d(t,"GoogleLogout",(function(){return y})),n.d(t,"useGoogleLogin",(function(){return f})),n.d(t,"useGoogleLogout",(function(){return g}))}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}));