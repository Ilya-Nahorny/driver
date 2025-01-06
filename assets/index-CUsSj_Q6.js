(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Z0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qc={exports:{}},Hs={},Kc={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function eE(){if(Lm)return Ee;Lm=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,A={};function D(I,U,_e){this.props=I,this.context=U,this.refs=A,this.updater=_e||N}D.prototype.isReactComponent={},D.prototype.setState=function(I,U){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,U,"setState")},D.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function F(){}F.prototype=D.prototype;function M(I,U,_e){this.props=I,this.context=U,this.refs=A,this.updater=_e||N}var X=M.prototype=new F;X.constructor=M,k(X,D.prototype),X.isPureReactComponent=!0;var Z=Array.isArray,ie=Object.prototype.hasOwnProperty,W={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function ce(I,U,_e){var ye,Re={},ke=null,De=null;if(U!=null)for(ye in U.ref!==void 0&&(De=U.ref),U.key!==void 0&&(ke=""+U.key),U)ie.call(U,ye)&&!fe.hasOwnProperty(ye)&&(Re[ye]=U[ye]);var Ne=arguments.length-2;if(Ne===1)Re.children=_e;else if(1<Ne){for(var Fe=Array(Ne),It=0;It<Ne;It++)Fe[It]=arguments[It+2];Re.children=Fe}if(I&&I.defaultProps)for(ye in Ne=I.defaultProps,Ne)Re[ye]===void 0&&(Re[ye]=Ne[ye]);return{$$typeof:n,type:I,key:ke,ref:De,props:Re,_owner:W.current}}function we(I,U){return{$$typeof:n,type:I.type,key:U,ref:I.ref,props:I.props,_owner:I._owner}}function ge(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function Ze(I){var U={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return U[_e]})}var ue=/\/+/g;function me(I,U){return typeof I=="object"&&I!==null&&I.key!=null?Ze(""+I.key):U.toString(36)}function Ae(I,U,_e,ye,Re){var ke=typeof I;(ke==="undefined"||ke==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(ke){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case n:case e:De=!0}}if(De)return De=I,Re=Re(De),I=ye===""?"."+me(De,0):ye,Z(Re)?(_e="",I!=null&&(_e=I.replace(ue,"$&/")+"/"),Ae(Re,U,_e,"",function(It){return It})):Re!=null&&(ge(Re)&&(Re=we(Re,_e+(!Re.key||De&&De.key===Re.key?"":(""+Re.key).replace(ue,"$&/")+"/")+I)),U.push(Re)),1;if(De=0,ye=ye===""?".":ye+":",Z(I))for(var Ne=0;Ne<I.length;Ne++){ke=I[Ne];var Fe=ye+me(ke,Ne);De+=Ae(ke,U,_e,Fe,Re)}else if(Fe=y(I),typeof Fe=="function")for(I=Fe.call(I),Ne=0;!(ke=I.next()).done;)ke=ke.value,Fe=ye+me(ke,Ne++),De+=Ae(ke,U,_e,Fe,Re);else if(ke==="object")throw U=String(I),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return De}function Me(I,U,_e){if(I==null)return I;var ye=[],Re=0;return Ae(I,ye,"","",function(ke){return U.call(_e,ke,Re++)}),ye}function Ve(I){if(I._status===-1){var U=I._result;U=U(),U.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=U)}if(I._status===1)return I._result.default;throw I._result}var Te={current:null},q={transition:null},se={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:q,ReactCurrentOwner:W};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:Me,forEach:function(I,U,_e){Me(I,function(){U.apply(this,arguments)},_e)},count:function(I){var U=0;return Me(I,function(){U++}),U},toArray:function(I){return Me(I,function(U){return U})||[]},only:function(I){if(!ge(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ee.Component=D,Ee.Fragment=t,Ee.Profiler=o,Ee.PureComponent=M,Ee.StrictMode=s,Ee.Suspense=p,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Ee.act=Y,Ee.cloneElement=function(I,U,_e){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ye=k({},I.props),Re=I.key,ke=I.ref,De=I._owner;if(U!=null){if(U.ref!==void 0&&(ke=U.ref,De=W.current),U.key!==void 0&&(Re=""+U.key),I.type&&I.type.defaultProps)var Ne=I.type.defaultProps;for(Fe in U)ie.call(U,Fe)&&!fe.hasOwnProperty(Fe)&&(ye[Fe]=U[Fe]===void 0&&Ne!==void 0?Ne[Fe]:U[Fe])}var Fe=arguments.length-2;if(Fe===1)ye.children=_e;else if(1<Fe){Ne=Array(Fe);for(var It=0;It<Fe;It++)Ne[It]=arguments[It+2];ye.children=Ne}return{$$typeof:n,type:I.type,key:Re,ref:ke,props:ye,_owner:De}},Ee.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},Ee.createElement=ce,Ee.createFactory=function(I){var U=ce.bind(null,I);return U.type=I,U},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(I){return{$$typeof:h,render:I}},Ee.isValidElement=ge,Ee.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:Ve}},Ee.memo=function(I,U){return{$$typeof:m,type:I,compare:U===void 0?null:U}},Ee.startTransition=function(I){var U=q.transition;q.transition={};try{I()}finally{q.transition=U}},Ee.unstable_act=Y,Ee.useCallback=function(I,U){return Te.current.useCallback(I,U)},Ee.useContext=function(I){return Te.current.useContext(I)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(I){return Te.current.useDeferredValue(I)},Ee.useEffect=function(I,U){return Te.current.useEffect(I,U)},Ee.useId=function(){return Te.current.useId()},Ee.useImperativeHandle=function(I,U,_e){return Te.current.useImperativeHandle(I,U,_e)},Ee.useInsertionEffect=function(I,U){return Te.current.useInsertionEffect(I,U)},Ee.useLayoutEffect=function(I,U){return Te.current.useLayoutEffect(I,U)},Ee.useMemo=function(I,U){return Te.current.useMemo(I,U)},Ee.useReducer=function(I,U,_e){return Te.current.useReducer(I,U,_e)},Ee.useRef=function(I){return Te.current.useRef(I)},Ee.useState=function(I){return Te.current.useState(I)},Ee.useSyncExternalStore=function(I,U,_e){return Te.current.useSyncExternalStore(I,U,_e)},Ee.useTransition=function(){return Te.current.useTransition()},Ee.version="18.3.1",Ee}var Mm;function $d(){return Mm||(Mm=1,Kc.exports=eE()),Kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function tE(){if(Fm)return Hs;Fm=1;var n=$d(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var v,_={},y=null,N=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(N=p.ref);for(v in p)s.call(p,v)&&!a.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:y,ref:N,props:_,_owner:o.current}}return Hs.Fragment=t,Hs.jsx=c,Hs.jsxs=c,Hs}var Um;function nE(){return Um||(Um=1,qc.exports=tE()),qc.exports}var L=nE(),b=$d();const Zt=Z0(b);var ql={},Yc={exports:{}},Lt={},Qc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function rE(){return Vm||(Vm=1,function(n){function e(q,se){var Y=q.length;q.push(se);e:for(;0<Y;){var I=Y-1>>>1,U=q[I];if(0<o(U,se))q[I]=se,q[Y]=U,Y=I;else break e}}function t(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var se=q[0],Y=q.pop();if(Y!==se){q[0]=Y;e:for(var I=0,U=q.length,_e=U>>>1;I<_e;){var ye=2*(I+1)-1,Re=q[ye],ke=ye+1,De=q[ke];if(0>o(Re,Y))ke<U&&0>o(De,Re)?(q[I]=De,q[ke]=Y,I=ke):(q[I]=Re,q[ye]=Y,I=ye);else if(ke<U&&0>o(De,Y))q[I]=De,q[ke]=Y,I=ke;else break e}}return se}function o(q,se){var Y=q.sortIndex-se.sortIndex;return Y!==0?Y:q.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],m=[],v=1,_=null,y=3,N=!1,k=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(q){for(var se=t(m);se!==null;){if(se.callback===null)s(m);else if(se.startTime<=q)s(m),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(m)}}function Z(q){if(A=!1,X(q),!k)if(t(p)!==null)k=!0,Ve(ie);else{var se=t(m);se!==null&&Te(Z,se.startTime-q)}}function ie(q,se){k=!1,A&&(A=!1,F(ce),ce=-1),N=!0;var Y=y;try{for(X(se),_=t(p);_!==null&&(!(_.expirationTime>se)||q&&!Ze());){var I=_.callback;if(typeof I=="function"){_.callback=null,y=_.priorityLevel;var U=I(_.expirationTime<=se);se=n.unstable_now(),typeof U=="function"?_.callback=U:_===t(p)&&s(p),X(se)}else s(p);_=t(p)}if(_!==null)var _e=!0;else{var ye=t(m);ye!==null&&Te(Z,ye.startTime-se),_e=!1}return _e}finally{_=null,y=Y,N=!1}}var W=!1,fe=null,ce=-1,we=5,ge=-1;function Ze(){return!(n.unstable_now()-ge<we)}function ue(){if(fe!==null){var q=n.unstable_now();ge=q;var se=!0;try{se=fe(!0,q)}finally{se?me():(W=!1,fe=null)}}else W=!1}var me;if(typeof M=="function")me=function(){M(ue)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Me=Ae.port2;Ae.port1.onmessage=ue,me=function(){Me.postMessage(null)}}else me=function(){D(ue,0)};function Ve(q){fe=q,W||(W=!0,me())}function Te(q,se){ce=D(function(){q(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){k||N||(k=!0,Ve(ie))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(q){switch(y){case 1:case 2:case 3:var se=3;break;default:se=y}var Y=y;y=se;try{return q()}finally{y=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,se){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Y=y;y=q;try{return se()}finally{y=Y}},n.unstable_scheduleCallback=function(q,se,Y){var I=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?I+Y:I):Y=I,q){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,q={id:v++,callback:se,priorityLevel:q,startTime:Y,expirationTime:U,sortIndex:-1},Y>I?(q.sortIndex=Y,e(m,q),t(p)===null&&q===t(m)&&(A?(F(ce),ce=-1):A=!0,Te(Z,Y-I))):(q.sortIndex=U,e(p,q),k||N||(k=!0,Ve(ie))),q},n.unstable_shouldYield=Ze,n.unstable_wrapCallback=function(q){var se=y;return function(){var Y=y;y=se;try{return q.apply(this,arguments)}finally{y=Y}}}}(Xc)),Xc}var jm;function iE(){return jm||(jm=1,Qc.exports=rE()),Qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function sE(){if(zm)return Lt;zm=1;var n=$d(),e=iE();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function a(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(r){return p.call(_,r)?!0:p.call(v,r)?!1:m.test(r)?_[r]=!0:(v[r]=!0,!1)}function N(r,i,l,u){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function k(r,i,l,u){if(i===null||typeof i>"u"||N(r,i,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(r,i,l,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=l,this.propertyName=r,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new A(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];D[i]=new A(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new A(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new A(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new A(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new A(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new A(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new A(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new A(r,5,!1,r.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function M(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(F,M);D[i]=new A(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(F,M);D[i]=new A(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(F,M);D[i]=new A(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new A(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new A(r,1,!1,r.toLowerCase(),null,!0,!0)});function X(r,i,l,u){var d=D.hasOwnProperty(i)?D[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(k(i,l,d,u)&&(l=null),u||d===null?y(i)&&(l===null?r.removeAttribute(i):r.setAttribute(i,""+l)):d.mustUseProperty?r[d.propertyName]=l===null?d.type===3?!1:"":l:(i=d.attributeName,u=d.attributeNamespace,l===null?r.removeAttribute(i):(d=d.type,l=d===3||d===4&&l===!0?"":""+l,u?r.setAttributeNS(u,i,l):r.setAttribute(i,l))))}var Z=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),W=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),q=Symbol.iterator;function se(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var Y=Object.assign,I;function U(r){if(I===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+r}var _e=!1;function ye(r,i){if(!r||_e)return"";_e=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){u=P}r.call(i.prototype)}else{try{throw Error()}catch(P){u=P}r()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,w=f.length-1;1<=g&&0<=w&&d[g]!==f[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==f[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==f[w]){var E=`
`+d[g].replace(" at new "," at ");return r.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",r.displayName)),E}while(1<=g&&0<=w);break}}}finally{_e=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?U(r):""}function Re(r){switch(r.tag){case 5:return U(r.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return r=ye(r.type,!1),r;case 11:return r=ye(r.type.render,!1),r;case 1:return r=ye(r.type,!0),r;default:return""}}function ke(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case fe:return"Fragment";case W:return"Portal";case we:return"Profiler";case ce:return"StrictMode";case me:return"Suspense";case Ae:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Ze:return(r.displayName||"Context")+".Consumer";case ge:return(r._context.displayName||"Context")+".Provider";case ue:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Me:return i=r.displayName||null,i!==null?i:ke(r.type)||"Memo";case Ve:i=r._payload,r=r._init;try{return ke(r(i))}catch{}}return null}function De(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Fe(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function It(r){var i=Fe(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,f=l.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(r,i,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Mr(r){r._valueTracker||(r._valueTracker=It(r))}function Lo(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var l=i.getValue(),u="";return r&&(u=Fe(r)?r.checked?"true":"false":r.value),r=u,r!==l?(i.setValue(r),!0):!1}function Fr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function fi(r,i){var l=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function nu(r,i){var l=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;l=Ne(i.value!=null?i.value:l),r._wrapperState={initialChecked:u,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ru(r,i){i=i.checked,i!=null&&X(r,"checked",i,!1)}function Mo(r,i){ru(r,i);var l=Ne(i.value),u=i.type;if(l!=null)u==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?x(r,i.type,l):i.hasOwnProperty("defaultValue")&&x(r,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function S(r,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,l||i===r.value||(r.value=i),r.defaultValue=i}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function x(r,i,l){(i!=="number"||Fr(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var O=Array.isArray;function K(r,i,l,u){if(r=r.options,i){i={};for(var d=0;d<l.length;d++)i["$"+l[d]]=!0;for(l=0;l<r.length;l++)d=i.hasOwnProperty("$"+r[l].value),r[l].selected!==d&&(r[l].selected=d),d&&u&&(r[l].defaultSelected=!0)}else{for(l=""+Ne(l),i=null,d=0;d<r.length;d++){if(r[d].value===l){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function G(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function $(r,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(O(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}r._wrapperState={initialValue:Ne(l)}}function oe(r,i){var l=Ne(i.value),u=Ne(i.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),i.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),u!=null&&(r.defaultValue=""+u)}function ve(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function et(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qe(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?et(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var zt,Fo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,l,u,d)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=zt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Pn(r,i){if(i){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=i;return}}r.textContent=i}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iu=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(r){iu.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),An[i]=An[r]})});function as(r,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||An.hasOwnProperty(r)&&An[r]?(""+i).trim():i+"px"}function Uo(r,i){r=r.style;for(var l in i)if(i.hasOwnProperty(l)){var u=l.indexOf("--")===0,d=as(l,i[l],u);l==="float"&&(l="cssFloat"),u?r.setProperty(l,d):r[l]=d}}var Vo=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(r,i){if(i){if(Vo[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ou(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function au(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var uu=null,pi=null,mi=null;function Xh(r){if(r=Ps(r)){if(typeof uu!="function")throw Error(t(280));var i=r.stateNode;i&&(i=al(i),uu(r.stateNode,r.type,i))}}function Jh(r){pi?mi?mi.push(r):mi=[r]:pi=r}function Zh(){if(pi){var r=pi,i=mi;if(mi=pi=null,Xh(r),i)for(r=0;r<i.length;r++)Xh(i[r])}}function ef(r,i){return r(i)}function tf(){}var cu=!1;function nf(r,i,l){if(cu)return r(i,l);cu=!0;try{return ef(r,i,l)}finally{cu=!1,(pi!==null||mi!==null)&&(tf(),Zh())}}function us(r,i){var l=r.stateNode;if(l===null)return null;var u=al(l);if(u===null)return null;l=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var du=!1;if(h)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){du=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{du=!1}function ow(r,i,l,u,d,f,g,w,E){var P=Array.prototype.slice.call(arguments,3);try{i.apply(l,P)}catch(j){this.onError(j)}}var ds=!1,jo=null,zo=!1,hu=null,lw={onError:function(r){ds=!0,jo=r}};function aw(r,i,l,u,d,f,g,w,E){ds=!1,jo=null,ow.apply(lw,arguments)}function uw(r,i,l,u,d,f,g,w,E){if(aw.apply(this,arguments),ds){if(ds){var P=jo;ds=!1,jo=null}else throw Error(t(198));zo||(zo=!0,hu=P)}}function Ur(r){var i=r,l=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,i.flags&4098&&(l=i.return),r=i.return;while(r)}return i.tag===3?l:null}function rf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function sf(r){if(Ur(r)!==r)throw Error(t(188))}function cw(r){var i=r.alternate;if(!i){if(i=Ur(r),i===null)throw Error(t(188));return i!==r?null:r}for(var l=r,u=i;;){var d=l.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){l=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===l)return sf(d),r;if(f===u)return sf(d),i;f=f.sibling}throw Error(t(188))}if(l.return!==u.return)l=d,u=f;else{for(var g=!1,w=d.child;w;){if(w===l){g=!0,l=d,u=f;break}if(w===u){g=!0,u=d,l=f;break}w=w.sibling}if(!g){for(w=f.child;w;){if(w===l){g=!0,l=f,u=d;break}if(w===u){g=!0,u=f,l=d;break}w=w.sibling}if(!g)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:i}function of(r){return r=cw(r),r!==null?lf(r):null}function lf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=lf(r);if(i!==null)return i;r=r.sibling}return null}var af=e.unstable_scheduleCallback,uf=e.unstable_cancelCallback,dw=e.unstable_shouldYield,hw=e.unstable_requestPaint,tt=e.unstable_now,fw=e.unstable_getCurrentPriorityLevel,fu=e.unstable_ImmediatePriority,cf=e.unstable_UserBlockingPriority,Bo=e.unstable_NormalPriority,pw=e.unstable_LowPriority,df=e.unstable_IdlePriority,Wo=null,pn=null;function mw(r){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Wo,r,void 0,(r.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:vw,gw=Math.log,_w=Math.LN2;function vw(r){return r>>>=0,r===0?32:31-(gw(r)/_w|0)|0}var $o=64,Ho=4194304;function hs(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Go(r,i){var l=r.pendingLanes;if(l===0)return 0;var u=0,d=r.suspendedLanes,f=r.pingedLanes,g=l&268435455;if(g!==0){var w=g&~d;w!==0?u=hs(w):(f&=g,f!==0&&(u=hs(f)))}else g=l&~d,g!==0?u=hs(g):f!==0&&(u=hs(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=l&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)l=31-en(i),d=1<<l,u|=r[l],i&=~d;return u}function yw(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ww(r,i){for(var l=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,f=r.pendingLanes;0<f;){var g=31-en(f),w=1<<g,E=d[g];E===-1?(!(w&l)||w&u)&&(d[g]=yw(w,i)):E<=i&&(r.expiredLanes|=w),f&=~w}}function pu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function hf(){var r=$o;return $o<<=1,!($o&4194240)&&($o=64),r}function mu(r){for(var i=[],l=0;31>l;l++)i.push(r);return i}function fs(r,i,l){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-en(i),r[i]=l}function Ew(r,i){var l=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<l;){var d=31-en(l),f=1<<d;i[d]=0,u[d]=-1,r[d]=-1,l&=~f}}function gu(r,i){var l=r.entangledLanes|=i;for(r=r.entanglements;l;){var u=31-en(l),d=1<<u;d&i|r[u]&i&&(r[u]|=i),l&=~d}}var be=0;function ff(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var pf,_u,mf,gf,_f,vu=!1,qo=[],tr=null,nr=null,rr=null,ps=new Map,ms=new Map,ir=[],Sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(r,i){switch(r){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ps.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(i.pointerId)}}function gs(r,i,l,u,d,f){return r===null||r.nativeEvent!==f?(r={blockedOn:i,domEventName:l,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=Ps(i),i!==null&&_u(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Cw(r,i,l,u,d){switch(i){case"focusin":return tr=gs(tr,r,i,l,u,d),!0;case"dragenter":return nr=gs(nr,r,i,l,u,d),!0;case"mouseover":return rr=gs(rr,r,i,l,u,d),!0;case"pointerover":var f=d.pointerId;return ps.set(f,gs(ps.get(f)||null,r,i,l,u,d)),!0;case"gotpointercapture":return f=d.pointerId,ms.set(f,gs(ms.get(f)||null,r,i,l,u,d)),!0}return!1}function yf(r){var i=Vr(r.target);if(i!==null){var l=Ur(i);if(l!==null){if(i=l.tag,i===13){if(i=rf(l),i!==null){r.blockedOn=i,_f(r.priority,function(){mf(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ko(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var l=wu(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var u=new l.constructor(l.type,l);lu=u,l.target.dispatchEvent(u),lu=null}else return i=Ps(l),i!==null&&_u(i),r.blockedOn=l,!1;i.shift()}return!0}function wf(r,i,l){Ko(r)&&l.delete(i)}function Iw(){vu=!1,tr!==null&&Ko(tr)&&(tr=null),nr!==null&&Ko(nr)&&(nr=null),rr!==null&&Ko(rr)&&(rr=null),ps.forEach(wf),ms.forEach(wf)}function _s(r,i){r.blockedOn===i&&(r.blockedOn=null,vu||(vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iw)))}function vs(r){function i(d){return _s(d,r)}if(0<qo.length){_s(qo[0],r);for(var l=1;l<qo.length;l++){var u=qo[l];u.blockedOn===r&&(u.blockedOn=null)}}for(tr!==null&&_s(tr,r),nr!==null&&_s(nr,r),rr!==null&&_s(rr,r),ps.forEach(i),ms.forEach(i),l=0;l<ir.length;l++)u=ir[l],u.blockedOn===r&&(u.blockedOn=null);for(;0<ir.length&&(l=ir[0],l.blockedOn===null);)yf(l),l.blockedOn===null&&ir.shift()}var gi=Z.ReactCurrentBatchConfig,Yo=!0;function kw(r,i,l,u){var d=be,f=gi.transition;gi.transition=null;try{be=1,yu(r,i,l,u)}finally{be=d,gi.transition=f}}function Tw(r,i,l,u){var d=be,f=gi.transition;gi.transition=null;try{be=4,yu(r,i,l,u)}finally{be=d,gi.transition=f}}function yu(r,i,l,u){if(Yo){var d=wu(r,i,l,u);if(d===null)Fu(r,i,u,Qo,l),vf(r,u);else if(Cw(d,r,i,l,u))u.stopPropagation();else if(vf(r,u),i&4&&-1<Sw.indexOf(r)){for(;d!==null;){var f=Ps(d);if(f!==null&&pf(f),f=wu(r,i,l,u),f===null&&Fu(r,i,u,Qo,l),f===d)break;d=f}d!==null&&u.stopPropagation()}else Fu(r,i,u,null,l)}}var Qo=null;function wu(r,i,l,u){if(Qo=null,r=au(u),r=Vr(r),r!==null)if(i=Ur(r),i===null)r=null;else if(l=i.tag,l===13){if(r=rf(i),r!==null)return r;r=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Qo=r,null}function Ef(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fw()){case fu:return 1;case cf:return 4;case Bo:case pw:return 16;case df:return 536870912;default:return 16}default:return 16}}var sr=null,Eu=null,Xo=null;function Sf(){if(Xo)return Xo;var r,i=Eu,l=i.length,u,d="value"in sr?sr.value:sr.textContent,f=d.length;for(r=0;r<l&&i[r]===d[r];r++);var g=l-r;for(u=1;u<=g&&i[l-u]===d[f-u];u++);return Xo=d.slice(r,1<u?1-u:void 0)}function Jo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Zo(){return!0}function Cf(){return!1}function Bt(r){function i(l,u,d,f,g){this._reactName=l,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(l=r[w],this[w]=l?l(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Cf,this.isPropagationStopped=Cf,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Bt(_i),ys=Y({},_i,{view:0,detail:0}),Rw=Bt(ys),Cu,Iu,ws,el=Y({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ws&&(ws&&r.type==="mousemove"?(Cu=r.screenX-ws.screenX,Iu=r.screenY-ws.screenY):Iu=Cu=0,ws=r),Cu)},movementY:function(r){return"movementY"in r?r.movementY:Iu}}),If=Bt(el),Nw=Y({},el,{dataTransfer:0}),xw=Bt(Nw),Pw=Y({},ys,{relatedTarget:0}),ku=Bt(Pw),Aw=Y({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=Bt(Aw),Dw=Y({},_i,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),bw=Bt(Dw),Lw=Y({},_i,{data:0}),kf=Bt(Lw),Mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vw(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Uw[r])?!!i[r]:!1}function Tu(){return Vw}var jw=Y({},ys,{key:function(r){if(r.key){var i=Mw[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Jo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Fw[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(r){return r.type==="keypress"?Jo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Jo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),zw=Bt(jw),Bw=Y({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Bt(Bw),Ww=Y({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),$w=Bt(Ww),Hw=Y({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gw=Bt(Hw),qw=Y({},el,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Kw=Bt(qw),Yw=[9,13,27,32],Ru=h&&"CompositionEvent"in window,Es=null;h&&"documentMode"in document&&(Es=document.documentMode);var Qw=h&&"TextEvent"in window&&!Es,Rf=h&&(!Ru||Es&&8<Es&&11>=Es),Nf=" ",xf=!1;function Pf(r,i){switch(r){case"keyup":return Yw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var vi=!1;function Xw(r,i){switch(r){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(xf=!0,Nf);case"textInput":return r=i.data,r===Nf&&xf?null:r;default:return null}}function Jw(r,i){if(vi)return r==="compositionend"||!Ru&&Pf(r,i)?(r=Sf(),Xo=Eu=sr=null,vi=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var Zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Zw[r.type]:i==="textarea"}function Df(r,i,l,u){Jh(u),i=sl(i,"onChange"),0<i.length&&(l=new Su("onChange","change",null,l,u),r.push({event:l,listeners:i}))}var Ss=null,Cs=null;function e0(r){Xf(r,0)}function tl(r){var i=Ci(r);if(Lo(i))return r}function t0(r,i){if(r==="change")return i}var bf=!1;if(h){var Nu;if(h){var xu="oninput"in document;if(!xu){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),xu=typeof Lf.oninput=="function"}Nu=xu}else Nu=!1;bf=Nu&&(!document.documentMode||9<document.documentMode)}function Mf(){Ss&&(Ss.detachEvent("onpropertychange",Ff),Cs=Ss=null)}function Ff(r){if(r.propertyName==="value"&&tl(Cs)){var i=[];Df(i,Cs,r,au(r)),nf(e0,i)}}function n0(r,i,l){r==="focusin"?(Mf(),Ss=i,Cs=l,Ss.attachEvent("onpropertychange",Ff)):r==="focusout"&&Mf()}function r0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return tl(Cs)}function i0(r,i){if(r==="click")return tl(i)}function s0(r,i){if(r==="input"||r==="change")return tl(i)}function o0(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var tn=typeof Object.is=="function"?Object.is:o0;function Is(r,i){if(tn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var l=Object.keys(r),u=Object.keys(i);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var d=l[u];if(!p.call(i,d)||!tn(r[d],i[d]))return!1}return!0}function Uf(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Vf(r,i){var l=Uf(r);r=0;for(var u;l;){if(l.nodeType===3){if(u=r+l.textContent.length,r<=i&&u>=i)return{node:l,offset:i-r};r=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Uf(l)}}function jf(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?jf(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function zf(){for(var r=window,i=Fr();i instanceof r.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)r=i.contentWindow;else break;i=Fr(r.document)}return i}function Pu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function l0(r){var i=zf(),l=r.focusedElem,u=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&jf(l.ownerDocument.documentElement,l)){if(u!==null&&Pu(l)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(r,l.value.length);else if(r=(i=l.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=l.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!r.extend&&f>u&&(d=u,u=f,f=d),d=Vf(l,f);var g=Vf(l,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),f>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=l;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)r=i[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var a0=h&&"documentMode"in document&&11>=document.documentMode,yi=null,Au=null,ks=null,Ou=!1;function Bf(r,i,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ou||yi==null||yi!==Fr(u)||(u=yi,"selectionStart"in u&&Pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ks&&Is(ks,u)||(ks=u,u=sl(Au,"onSelect"),0<u.length&&(i=new Su("onSelect","select",null,i,l),r.push({event:i,listeners:u}),i.target=yi)))}function nl(r,i){var l={};return l[r.toLowerCase()]=i.toLowerCase(),l["Webkit"+r]="webkit"+i,l["Moz"+r]="moz"+i,l}var wi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Du={},Wf={};h&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function rl(r){if(Du[r])return Du[r];if(!wi[r])return r;var i=wi[r],l;for(l in i)if(i.hasOwnProperty(l)&&l in Wf)return Du[r]=i[l];return r}var $f=rl("animationend"),Hf=rl("animationiteration"),Gf=rl("animationstart"),qf=rl("transitionend"),Kf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(r,i){Kf.set(r,i),a(i,[r])}for(var bu=0;bu<Yf.length;bu++){var Lu=Yf[bu],u0=Lu.toLowerCase(),c0=Lu[0].toUpperCase()+Lu.slice(1);or(u0,"on"+c0)}or($f,"onAnimationEnd"),or(Hf,"onAnimationIteration"),or(Gf,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(qf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function Qf(r,i,l){var u=r.type||"unknown-event";r.currentTarget=l,uw(u,i,void 0,r),r.currentTarget=null}function Xf(r,i){i=(i&4)!==0;for(var l=0;l<r.length;l++){var u=r[l],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],E=w.instance,P=w.currentTarget;if(w=w.listener,E!==f&&d.isPropagationStopped())break e;Qf(d,w,P),f=E}else for(g=0;g<u.length;g++){if(w=u[g],E=w.instance,P=w.currentTarget,w=w.listener,E!==f&&d.isPropagationStopped())break e;Qf(d,w,P),f=E}}}if(zo)throw r=hu,zo=!1,hu=null,r}function Be(r,i){var l=i[Wu];l===void 0&&(l=i[Wu]=new Set);var u=r+"__bubble";l.has(u)||(Jf(i,r,2,!1),l.add(u))}function Mu(r,i,l){var u=0;i&&(u|=4),Jf(l,r,u,i)}var il="_reactListening"+Math.random().toString(36).slice(2);function Rs(r){if(!r[il]){r[il]=!0,s.forEach(function(l){l!=="selectionchange"&&(d0.has(l)||Mu(l,!1,r),Mu(l,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[il]||(i[il]=!0,Mu("selectionchange",!1,i))}}function Jf(r,i,l,u){switch(Ef(i)){case 1:var d=kw;break;case 4:d=Tw;break;default:d=yu}l=d.bind(null,i,l,r),d=void 0,!du||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,l,{capture:!0,passive:d}):r.addEventListener(i,l,!0):d!==void 0?r.addEventListener(i,l,{passive:d}):r.addEventListener(i,l,!1)}function Fu(r,i,l,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;w!==null;){if(g=Vr(w),g===null)return;if(E=g.tag,E===5||E===6){u=f=g;continue e}w=w.parentNode}}u=u.return}nf(function(){var P=f,j=au(l),z=[];e:{var V=Kf.get(r);if(V!==void 0){var Q=Su,ee=r;switch(r){case"keypress":if(Jo(l)===0)break e;case"keydown":case"keyup":Q=zw;break;case"focusin":ee="focus",Q=ku;break;case"focusout":ee="blur",Q=ku;break;case"beforeblur":case"afterblur":Q=ku;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=xw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=$w;break;case $f:case Hf:case Gf:Q=Ow;break;case qf:Q=Gw;break;case"scroll":Q=Rw;break;case"wheel":Q=Kw;break;case"copy":case"cut":case"paste":Q=bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Tf}var ne=(i&4)!==0,nt=!ne&&r==="scroll",T=ne?V!==null?V+"Capture":null:V;ne=[];for(var C=P,R;C!==null;){R=C;var B=R.stateNode;if(R.tag===5&&B!==null&&(R=B,T!==null&&(B=us(C,T),B!=null&&ne.push(Ns(C,B,R)))),nt)break;C=C.return}0<ne.length&&(V=new Q(V,ee,null,l,j),z.push({event:V,listeners:ne}))}}if(!(i&7)){e:{if(V=r==="mouseover"||r==="pointerover",Q=r==="mouseout"||r==="pointerout",V&&l!==lu&&(ee=l.relatedTarget||l.fromElement)&&(Vr(ee)||ee[On]))break e;if((Q||V)&&(V=j.window===j?j:(V=j.ownerDocument)?V.defaultView||V.parentWindow:window,Q?(ee=l.relatedTarget||l.toElement,Q=P,ee=ee?Vr(ee):null,ee!==null&&(nt=Ur(ee),ee!==nt||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Q=null,ee=P),Q!==ee)){if(ne=If,B="onMouseLeave",T="onMouseEnter",C="mouse",(r==="pointerout"||r==="pointerover")&&(ne=Tf,B="onPointerLeave",T="onPointerEnter",C="pointer"),nt=Q==null?V:Ci(Q),R=ee==null?V:Ci(ee),V=new ne(B,C+"leave",Q,l,j),V.target=nt,V.relatedTarget=R,B=null,Vr(j)===P&&(ne=new ne(T,C+"enter",ee,l,j),ne.target=R,ne.relatedTarget=nt,B=ne),nt=B,Q&&ee)t:{for(ne=Q,T=ee,C=0,R=ne;R;R=Ei(R))C++;for(R=0,B=T;B;B=Ei(B))R++;for(;0<C-R;)ne=Ei(ne),C--;for(;0<R-C;)T=Ei(T),R--;for(;C--;){if(ne===T||T!==null&&ne===T.alternate)break t;ne=Ei(ne),T=Ei(T)}ne=null}else ne=null;Q!==null&&Zf(z,V,Q,ne,!1),ee!==null&&nt!==null&&Zf(z,nt,ee,ne,!0)}}e:{if(V=P?Ci(P):window,Q=V.nodeName&&V.nodeName.toLowerCase(),Q==="select"||Q==="input"&&V.type==="file")var re=t0;else if(Of(V))if(bf)re=s0;else{re=r0;var le=n0}else(Q=V.nodeName)&&Q.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(re=i0);if(re&&(re=re(r,P))){Df(z,re,l,j);break e}le&&le(r,V,P),r==="focusout"&&(le=V._wrapperState)&&le.controlled&&V.type==="number"&&x(V,"number",V.value)}switch(le=P?Ci(P):window,r){case"focusin":(Of(le)||le.contentEditable==="true")&&(yi=le,Au=P,ks=null);break;case"focusout":ks=Au=yi=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Bf(z,l,j);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Bf(z,l,j)}var ae;if(Ru)e:{switch(r){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else vi?Pf(r,l)&&(pe="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(pe="onCompositionStart");pe&&(Rf&&l.locale!=="ko"&&(vi||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&vi&&(ae=Sf()):(sr=j,Eu="value"in sr?sr.value:sr.textContent,vi=!0)),le=sl(P,pe),0<le.length&&(pe=new kf(pe,r,null,l,j),z.push({event:pe,listeners:le}),ae?pe.data=ae:(ae=Af(l),ae!==null&&(pe.data=ae)))),(ae=Qw?Xw(r,l):Jw(r,l))&&(P=sl(P,"onBeforeInput"),0<P.length&&(j=new kf("onBeforeInput","beforeinput",null,l,j),z.push({event:j,listeners:P}),j.data=ae))}Xf(z,i)})}function Ns(r,i,l){return{instance:r,listener:i,currentTarget:l}}function sl(r,i){for(var l=i+"Capture",u=[];r!==null;){var d=r,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=us(r,l),f!=null&&u.unshift(Ns(r,f,d)),f=us(r,i),f!=null&&u.push(Ns(r,f,d))),r=r.return}return u}function Ei(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Zf(r,i,l,u,d){for(var f=i._reactName,g=[];l!==null&&l!==u;){var w=l,E=w.alternate,P=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&P!==null&&(w=P,d?(E=us(l,f),E!=null&&g.unshift(Ns(l,E,w))):d||(E=us(l,f),E!=null&&g.push(Ns(l,E,w)))),l=l.return}g.length!==0&&r.push({event:i,listeners:g})}var h0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function ep(r){return(typeof r=="string"?r:""+r).replace(h0,`
`).replace(f0,"")}function ol(r,i,l){if(i=ep(i),ep(r)!==i&&l)throw Error(t(425))}function ll(){}var Uu=null,Vu=null;function ju(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(r){return tp.resolve(null).then(r).catch(g0)}:zu;function g0(r){setTimeout(function(){throw r})}function Bu(r,i){var l=i,u=0;do{var d=l.nextSibling;if(r.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(u===0){r.removeChild(d),vs(i);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=d}while(l);vs(i)}function lr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function np(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return r;i--}else l==="/$"&&i++}r=r.previousSibling}return null}var Si=Math.random().toString(36).slice(2),mn="__reactFiber$"+Si,xs="__reactProps$"+Si,On="__reactContainer$"+Si,Wu="__reactEvents$"+Si,_0="__reactListeners$"+Si,v0="__reactHandles$"+Si;function Vr(r){var i=r[mn];if(i)return i;for(var l=r.parentNode;l;){if(i=l[On]||l[mn]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(r=np(r);r!==null;){if(l=r[mn])return l;r=np(r)}return i}r=l,l=r.parentNode}return null}function Ps(r){return r=r[mn]||r[On],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ci(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function al(r){return r[xs]||null}var $u=[],Ii=-1;function ar(r){return{current:r}}function We(r){0>Ii||(r.current=$u[Ii],$u[Ii]=null,Ii--)}function je(r,i){Ii++,$u[Ii]=r.current,r.current=i}var ur={},yt=ar(ur),Pt=ar(!1),jr=ur;function ki(r,i){var l=r.type.contextTypes;if(!l)return ur;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in l)d[f]=i[f];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function At(r){return r=r.childContextTypes,r!=null}function ul(){We(Pt),We(yt)}function rp(r,i,l){if(yt.current!==ur)throw Error(t(168));je(yt,i),je(Pt,l)}function ip(r,i,l){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,De(r)||"Unknown",d));return Y({},l,u)}function cl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ur,jr=yt.current,je(yt,r),je(Pt,Pt.current),!0}function sp(r,i,l){var u=r.stateNode;if(!u)throw Error(t(169));l?(r=ip(r,i,jr),u.__reactInternalMemoizedMergedChildContext=r,We(Pt),We(yt),je(yt,r)):We(Pt),je(Pt,l)}var Dn=null,dl=!1,Hu=!1;function op(r){Dn===null?Dn=[r]:Dn.push(r)}function y0(r){dl=!0,op(r)}function cr(){if(!Hu&&Dn!==null){Hu=!0;var r=0,i=be;try{var l=Dn;for(be=1;r<l.length;r++){var u=l[r];do u=u(!0);while(u!==null)}Dn=null,dl=!1}catch(d){throw Dn!==null&&(Dn=Dn.slice(r+1)),af(fu,cr),d}finally{be=i,Hu=!1}}return null}var Ti=[],Ri=0,hl=null,fl=0,Gt=[],qt=0,zr=null,bn=1,Ln="";function Br(r,i){Ti[Ri++]=fl,Ti[Ri++]=hl,hl=r,fl=i}function lp(r,i,l){Gt[qt++]=bn,Gt[qt++]=Ln,Gt[qt++]=zr,zr=r;var u=bn;r=Ln;var d=32-en(u)-1;u&=~(1<<d),l+=1;var f=32-en(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,bn=1<<32-en(i)+d|l<<d|u,Ln=f+r}else bn=1<<f|l<<d|u,Ln=r}function Gu(r){r.return!==null&&(Br(r,1),lp(r,1,0))}function qu(r){for(;r===hl;)hl=Ti[--Ri],Ti[Ri]=null,fl=Ti[--Ri],Ti[Ri]=null;for(;r===zr;)zr=Gt[--qt],Gt[qt]=null,Ln=Gt[--qt],Gt[qt]=null,bn=Gt[--qt],Gt[qt]=null}var Wt=null,$t=null,Ge=!1,nn=null;function ap(r,i){var l=Xt(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=r,i=r.deletions,i===null?(r.deletions=[l],r.flags|=16):i.push(l)}function up(r,i){switch(r.tag){case 5:var l=r.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Wt=r,$t=lr(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Wt=r,$t=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=zr!==null?{id:bn,overflow:Ln}:null,r.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Xt(18,null,null,0),l.stateNode=i,l.return=r,r.child=l,Wt=r,$t=null,!0):!1;default:return!1}}function Ku(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Yu(r){if(Ge){var i=$t;if(i){var l=i;if(!up(r,i)){if(Ku(r))throw Error(t(418));i=lr(l.nextSibling);var u=Wt;i&&up(r,i)?ap(u,l):(r.flags=r.flags&-4097|2,Ge=!1,Wt=r)}}else{if(Ku(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ge=!1,Wt=r}}}function cp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Wt=r}function pl(r){if(r!==Wt)return!1;if(!Ge)return cp(r),Ge=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!ju(r.type,r.memoizedProps)),i&&(i=$t)){if(Ku(r))throw dp(),Error(t(418));for(;i;)ap(r,i),i=lr(i.nextSibling)}if(cp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(i===0){$t=lr(r.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}r=r.nextSibling}$t=null}}else $t=Wt?lr(r.stateNode.nextSibling):null;return!0}function dp(){for(var r=$t;r;)r=lr(r.nextSibling)}function Ni(){$t=Wt=null,Ge=!1}function Qu(r){nn===null?nn=[r]:nn.push(r)}var w0=Z.ReactCurrentBatchConfig;function As(r,i,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,r));var d=u,f=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var w=d.refs;g===null?delete w[f]:w[f]=g},i._stringRef=f,i)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function ml(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function hp(r){var i=r._init;return i(r._payload)}function fp(r){function i(T,C){if(r){var R=T.deletions;R===null?(T.deletions=[C],T.flags|=16):R.push(C)}}function l(T,C){if(!r)return null;for(;C!==null;)i(T,C),C=C.sibling;return null}function u(T,C){for(T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function d(T,C){return T=vr(T,C),T.index=0,T.sibling=null,T}function f(T,C,R){return T.index=R,r?(R=T.alternate,R!==null?(R=R.index,R<C?(T.flags|=2,C):R):(T.flags|=2,C)):(T.flags|=1048576,C)}function g(T){return r&&T.alternate===null&&(T.flags|=2),T}function w(T,C,R,B){return C===null||C.tag!==6?(C=zc(R,T.mode,B),C.return=T,C):(C=d(C,R),C.return=T,C)}function E(T,C,R,B){var re=R.type;return re===fe?j(T,C,R.props.children,B,R.key):C!==null&&(C.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ve&&hp(re)===C.type)?(B=d(C,R.props),B.ref=As(T,C,R),B.return=T,B):(B=Vl(R.type,R.key,R.props,null,T.mode,B),B.ref=As(T,C,R),B.return=T,B)}function P(T,C,R,B){return C===null||C.tag!==4||C.stateNode.containerInfo!==R.containerInfo||C.stateNode.implementation!==R.implementation?(C=Bc(R,T.mode,B),C.return=T,C):(C=d(C,R.children||[]),C.return=T,C)}function j(T,C,R,B,re){return C===null||C.tag!==7?(C=Qr(R,T.mode,B,re),C.return=T,C):(C=d(C,R),C.return=T,C)}function z(T,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return C=zc(""+C,T.mode,R),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:return R=Vl(C.type,C.key,C.props,null,T.mode,R),R.ref=As(T,null,C),R.return=T,R;case W:return C=Bc(C,T.mode,R),C.return=T,C;case Ve:var B=C._init;return z(T,B(C._payload),R)}if(O(C)||se(C))return C=Qr(C,T.mode,R,null),C.return=T,C;ml(T,C)}return null}function V(T,C,R,B){var re=C!==null?C.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return re!==null?null:w(T,C,""+R,B);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ie:return R.key===re?E(T,C,R,B):null;case W:return R.key===re?P(T,C,R,B):null;case Ve:return re=R._init,V(T,C,re(R._payload),B)}if(O(R)||se(R))return re!==null?null:j(T,C,R,B,null);ml(T,R)}return null}function Q(T,C,R,B,re){if(typeof B=="string"&&B!==""||typeof B=="number")return T=T.get(R)||null,w(C,T,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ie:return T=T.get(B.key===null?R:B.key)||null,E(C,T,B,re);case W:return T=T.get(B.key===null?R:B.key)||null,P(C,T,B,re);case Ve:var le=B._init;return Q(T,C,R,le(B._payload),re)}if(O(B)||se(B))return T=T.get(R)||null,j(C,T,B,re,null);ml(C,B)}return null}function ee(T,C,R,B){for(var re=null,le=null,ae=C,pe=C=0,ht=null;ae!==null&&pe<R.length;pe++){ae.index>pe?(ht=ae,ae=null):ht=ae.sibling;var Pe=V(T,ae,R[pe],B);if(Pe===null){ae===null&&(ae=ht);break}r&&ae&&Pe.alternate===null&&i(T,ae),C=f(Pe,C,pe),le===null?re=Pe:le.sibling=Pe,le=Pe,ae=ht}if(pe===R.length)return l(T,ae),Ge&&Br(T,pe),re;if(ae===null){for(;pe<R.length;pe++)ae=z(T,R[pe],B),ae!==null&&(C=f(ae,C,pe),le===null?re=ae:le.sibling=ae,le=ae);return Ge&&Br(T,pe),re}for(ae=u(T,ae);pe<R.length;pe++)ht=Q(ae,T,pe,R[pe],B),ht!==null&&(r&&ht.alternate!==null&&ae.delete(ht.key===null?pe:ht.key),C=f(ht,C,pe),le===null?re=ht:le.sibling=ht,le=ht);return r&&ae.forEach(function(yr){return i(T,yr)}),Ge&&Br(T,pe),re}function ne(T,C,R,B){var re=se(R);if(typeof re!="function")throw Error(t(150));if(R=re.call(R),R==null)throw Error(t(151));for(var le=re=null,ae=C,pe=C=0,ht=null,Pe=R.next();ae!==null&&!Pe.done;pe++,Pe=R.next()){ae.index>pe?(ht=ae,ae=null):ht=ae.sibling;var yr=V(T,ae,Pe.value,B);if(yr===null){ae===null&&(ae=ht);break}r&&ae&&yr.alternate===null&&i(T,ae),C=f(yr,C,pe),le===null?re=yr:le.sibling=yr,le=yr,ae=ht}if(Pe.done)return l(T,ae),Ge&&Br(T,pe),re;if(ae===null){for(;!Pe.done;pe++,Pe=R.next())Pe=z(T,Pe.value,B),Pe!==null&&(C=f(Pe,C,pe),le===null?re=Pe:le.sibling=Pe,le=Pe);return Ge&&Br(T,pe),re}for(ae=u(T,ae);!Pe.done;pe++,Pe=R.next())Pe=Q(ae,T,pe,Pe.value,B),Pe!==null&&(r&&Pe.alternate!==null&&ae.delete(Pe.key===null?pe:Pe.key),C=f(Pe,C,pe),le===null?re=Pe:le.sibling=Pe,le=Pe);return r&&ae.forEach(function(J0){return i(T,J0)}),Ge&&Br(T,pe),re}function nt(T,C,R,B){if(typeof R=="object"&&R!==null&&R.type===fe&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ie:e:{for(var re=R.key,le=C;le!==null;){if(le.key===re){if(re=R.type,re===fe){if(le.tag===7){l(T,le.sibling),C=d(le,R.props.children),C.return=T,T=C;break e}}else if(le.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ve&&hp(re)===le.type){l(T,le.sibling),C=d(le,R.props),C.ref=As(T,le,R),C.return=T,T=C;break e}l(T,le);break}else i(T,le);le=le.sibling}R.type===fe?(C=Qr(R.props.children,T.mode,B,R.key),C.return=T,T=C):(B=Vl(R.type,R.key,R.props,null,T.mode,B),B.ref=As(T,C,R),B.return=T,T=B)}return g(T);case W:e:{for(le=R.key;C!==null;){if(C.key===le)if(C.tag===4&&C.stateNode.containerInfo===R.containerInfo&&C.stateNode.implementation===R.implementation){l(T,C.sibling),C=d(C,R.children||[]),C.return=T,T=C;break e}else{l(T,C);break}else i(T,C);C=C.sibling}C=Bc(R,T.mode,B),C.return=T,T=C}return g(T);case Ve:return le=R._init,nt(T,C,le(R._payload),B)}if(O(R))return ee(T,C,R,B);if(se(R))return ne(T,C,R,B);ml(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,C!==null&&C.tag===6?(l(T,C.sibling),C=d(C,R),C.return=T,T=C):(l(T,C),C=zc(R,T.mode,B),C.return=T,T=C),g(T)):l(T,C)}return nt}var xi=fp(!0),pp=fp(!1),gl=ar(null),_l=null,Pi=null,Xu=null;function Ju(){Xu=Pi=_l=null}function Zu(r){var i=gl.current;We(gl),r._currentValue=i}function ec(r,i,l){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===l)break;r=r.return}}function Ai(r,i){_l=r,Xu=Pi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&i&&(Ot=!0),r.firstContext=null)}function Kt(r){var i=r._currentValue;if(Xu!==r)if(r={context:r,memoizedValue:i,next:null},Pi===null){if(_l===null)throw Error(t(308));Pi=r,_l.dependencies={lanes:0,firstContext:r}}else Pi=Pi.next=r;return i}var Wr=null;function tc(r){Wr===null?Wr=[r]:Wr.push(r)}function mp(r,i,l,u){var d=i.interleaved;return d===null?(l.next=l,tc(i)):(l.next=d.next,d.next=l),i.interleaved=l,Mn(r,u)}function Mn(r,i){r.lanes|=i;var l=r.alternate;for(l!==null&&(l.lanes|=i),l=r,r=r.return;r!==null;)r.childLanes|=i,l=r.alternate,l!==null&&(l.childLanes|=i),l=r,r=r.return;return l.tag===3?l.stateNode:null}var dr=!1;function nc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Fn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(r,i,l){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,xe&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Mn(r,l)}return d=u.interleaved,d===null?(i.next=i,tc(u)):(i.next=d.next,d.next=i),u.interleaved=i,Mn(r,l)}function vl(r,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,l|=u,i.lanes=l,gu(r,l)}}function _p(r,i){var l=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var d=null,f=null;if(l=l.firstBaseUpdate,l!==null){do{var g={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};f===null?d=f=g:f=f.next=g,l=l.next}while(l!==null);f===null?d=f=i:f=f.next=i}else d=f=i;l={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=i:r.next=i,l.lastBaseUpdate=i}function yl(r,i,l,u){var d=r.updateQueue;dr=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,P=E.next;E.next=null,g===null?f=P:g.next=P,g=E;var j=r.alternate;j!==null&&(j=j.updateQueue,w=j.lastBaseUpdate,w!==g&&(w===null?j.firstBaseUpdate=P:w.next=P,j.lastBaseUpdate=E))}if(f!==null){var z=d.baseState;g=0,j=P=E=null,w=f;do{var V=w.lane,Q=w.eventTime;if((u&V)===V){j!==null&&(j=j.next={eventTime:Q,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ee=r,ne=w;switch(V=i,Q=l,ne.tag){case 1:if(ee=ne.payload,typeof ee=="function"){z=ee.call(Q,z,V);break e}z=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ne.payload,V=typeof ee=="function"?ee.call(Q,z,V):ee,V==null)break e;z=Y({},z,V);break e;case 2:dr=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,V=d.effects,V===null?d.effects=[w]:V.push(w))}else Q={eventTime:Q,lane:V,tag:w.tag,payload:w.payload,callback:w.callback,next:null},j===null?(P=j=Q,E=z):j=j.next=Q,g|=V;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;V=w,w=V.next,V.next=null,d.lastBaseUpdate=V,d.shared.pending=null}}while(!0);if(j===null&&(E=z),d.baseState=E,d.firstBaseUpdate=P,d.lastBaseUpdate=j,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Gr|=g,r.lanes=g,r.memoizedState=z}}function vp(r,i,l){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=l,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Os={},gn=ar(Os),Ds=ar(Os),bs=ar(Os);function $r(r){if(r===Os)throw Error(t(174));return r}function rc(r,i){switch(je(bs,i),je(Ds,r),je(gn,Os),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Qe(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Qe(i,r)}We(gn),je(gn,i)}function Oi(){We(gn),We(Ds),We(bs)}function yp(r){$r(bs.current);var i=$r(gn.current),l=Qe(i,r.type);i!==l&&(je(Ds,r),je(gn,l))}function ic(r){Ds.current===r&&(We(gn),We(Ds))}var qe=ar(0);function wl(r){for(var i=r;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sc=[];function oc(){for(var r=0;r<sc.length;r++)sc[r]._workInProgressVersionPrimary=null;sc.length=0}var El=Z.ReactCurrentDispatcher,lc=Z.ReactCurrentBatchConfig,Hr=0,Ke=null,ot=null,ct=null,Sl=!1,Ls=!1,Ms=0,E0=0;function wt(){throw Error(t(321))}function ac(r,i){if(i===null)return!1;for(var l=0;l<i.length&&l<r.length;l++)if(!tn(r[l],i[l]))return!1;return!0}function uc(r,i,l,u,d,f){if(Hr=f,Ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,El.current=r===null||r.memoizedState===null?k0:T0,r=l(u,d),Ls){f=0;do{if(Ls=!1,Ms=0,25<=f)throw Error(t(301));f+=1,ct=ot=null,i.updateQueue=null,El.current=R0,r=l(u,d)}while(Ls)}if(El.current=kl,i=ot!==null&&ot.next!==null,Hr=0,ct=ot=Ke=null,Sl=!1,i)throw Error(t(300));return r}function cc(){var r=Ms!==0;return Ms=0,r}function _n(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ke.memoizedState=ct=r:ct=ct.next=r,ct}function Yt(){if(ot===null){var r=Ke.alternate;r=r!==null?r.memoizedState:null}else r=ot.next;var i=ct===null?Ke.memoizedState:ct.next;if(i!==null)ct=i,ot=r;else{if(r===null)throw Error(t(310));ot=r,r={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ct===null?Ke.memoizedState=ct=r:ct=ct.next=r}return ct}function Fs(r,i){return typeof i=="function"?i(r):i}function dc(r){var i=Yt(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var u=ot,d=u.baseQueue,f=l.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,l.pending=null}if(d!==null){f=d.next,u=u.baseState;var w=g=null,E=null,P=f;do{var j=P.lane;if((Hr&j)===j)E!==null&&(E=E.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:r(u,P.action);else{var z={lane:j,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};E===null?(w=E=z,g=u):E=E.next=z,Ke.lanes|=j,Gr|=j}P=P.next}while(P!==null&&P!==f);E===null?g=u:E.next=w,tn(u,i.memoizedState)||(Ot=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,l.lastRenderedState=u}if(r=l.interleaved,r!==null){d=r;do f=d.lane,Ke.lanes|=f,Gr|=f,d=d.next;while(d!==r)}else d===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function hc(r){var i=Yt(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var u=l.dispatch,d=l.pending,f=i.memoizedState;if(d!==null){l.pending=null;var g=d=d.next;do f=r(f,g.action),g=g.next;while(g!==d);tn(f,i.memoizedState)||(Ot=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),l.lastRenderedState=f}return[f,u]}function wp(){}function Ep(r,i){var l=Ke,u=Yt(),d=i(),f=!tn(u.memoizedState,d);if(f&&(u.memoizedState=d,Ot=!0),u=u.queue,fc(Ip.bind(null,l,u,r),[r]),u.getSnapshot!==i||f||ct!==null&&ct.memoizedState.tag&1){if(l.flags|=2048,Us(9,Cp.bind(null,l,u,d,i),void 0,null),dt===null)throw Error(t(349));Hr&30||Sp(l,i,d)}return d}function Sp(r,i,l){r.flags|=16384,r={getSnapshot:i,value:l},i=Ke.updateQueue,i===null?(i={lastEffect:null,stores:null},Ke.updateQueue=i,i.stores=[r]):(l=i.stores,l===null?i.stores=[r]:l.push(r))}function Cp(r,i,l,u){i.value=l,i.getSnapshot=u,kp(i)&&Tp(r)}function Ip(r,i,l){return l(function(){kp(i)&&Tp(r)})}function kp(r){var i=r.getSnapshot;r=r.value;try{var l=i();return!tn(r,l)}catch{return!0}}function Tp(r){var i=Mn(r,1);i!==null&&ln(i,r,1,-1)}function Rp(r){var i=_n();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:r},i.queue=r,r=r.dispatch=I0.bind(null,Ke,r),[i.memoizedState,r]}function Us(r,i,l,u){return r={tag:r,create:i,destroy:l,deps:u,next:null},i=Ke.updateQueue,i===null?(i={lastEffect:null,stores:null},Ke.updateQueue=i,i.lastEffect=r.next=r):(l=i.lastEffect,l===null?i.lastEffect=r.next=r:(u=l.next,l.next=r,r.next=u,i.lastEffect=r)),r}function Np(){return Yt().memoizedState}function Cl(r,i,l,u){var d=_n();Ke.flags|=r,d.memoizedState=Us(1|i,l,void 0,u===void 0?null:u)}function Il(r,i,l,u){var d=Yt();u=u===void 0?null:u;var f=void 0;if(ot!==null){var g=ot.memoizedState;if(f=g.destroy,u!==null&&ac(u,g.deps)){d.memoizedState=Us(i,l,f,u);return}}Ke.flags|=r,d.memoizedState=Us(1|i,l,f,u)}function xp(r,i){return Cl(8390656,8,r,i)}function fc(r,i){return Il(2048,8,r,i)}function Pp(r,i){return Il(4,2,r,i)}function Ap(r,i){return Il(4,4,r,i)}function Op(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Dp(r,i,l){return l=l!=null?l.concat([r]):null,Il(4,4,Op.bind(null,i,r),l)}function pc(){}function bp(r,i){var l=Yt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(l.memoizedState=[r,i],r)}function Lp(r,i){var l=Yt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(r=r(),l.memoizedState=[r,i],r)}function Mp(r,i,l){return Hr&21?(tn(l,i)||(l=hf(),Ke.lanes|=l,Gr|=l,r.baseState=!0),i):(r.baseState&&(r.baseState=!1,Ot=!0),r.memoizedState=l)}function S0(r,i){var l=be;be=l!==0&&4>l?l:4,r(!0);var u=lc.transition;lc.transition={};try{r(!1),i()}finally{be=l,lc.transition=u}}function Fp(){return Yt().memoizedState}function C0(r,i,l){var u=gr(r);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Up(r))Vp(i,l);else if(l=mp(r,i,l,u),l!==null){var d=Tt();ln(l,r,u,d),jp(l,i,u)}}function I0(r,i,l){var u=gr(r),d={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Up(r))Vp(i,d);else{var f=r.alternate;if(r.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,w=f(g,l);if(d.hasEagerState=!0,d.eagerState=w,tn(w,g)){var E=i.interleaved;E===null?(d.next=d,tc(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}l=mp(r,i,d,u),l!==null&&(d=Tt(),ln(l,r,u,d),jp(l,i,u))}}function Up(r){var i=r.alternate;return r===Ke||i!==null&&i===Ke}function Vp(r,i){Ls=Sl=!0;var l=r.pending;l===null?i.next=i:(i.next=l.next,l.next=i),r.pending=i}function jp(r,i,l){if(l&4194240){var u=i.lanes;u&=r.pendingLanes,l|=u,i.lanes=l,gu(r,l)}}var kl={readContext:Kt,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},k0={readContext:Kt,useCallback:function(r,i){return _n().memoizedState=[r,i===void 0?null:i],r},useContext:Kt,useEffect:xp,useImperativeHandle:function(r,i,l){return l=l!=null?l.concat([r]):null,Cl(4194308,4,Op.bind(null,i,r),l)},useLayoutEffect:function(r,i){return Cl(4194308,4,r,i)},useInsertionEffect:function(r,i){return Cl(4,2,r,i)},useMemo:function(r,i){var l=_n();return i=i===void 0?null:i,r=r(),l.memoizedState=[r,i],r},useReducer:function(r,i,l){var u=_n();return i=l!==void 0?l(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=C0.bind(null,Ke,r),[u.memoizedState,r]},useRef:function(r){var i=_n();return r={current:r},i.memoizedState=r},useState:Rp,useDebugValue:pc,useDeferredValue:function(r){return _n().memoizedState=r},useTransition:function(){var r=Rp(!1),i=r[0];return r=S0.bind(null,r[1]),_n().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,l){var u=Ke,d=_n();if(Ge){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),dt===null)throw Error(t(349));Hr&30||Sp(u,i,l)}d.memoizedState=l;var f={value:l,getSnapshot:i};return d.queue=f,xp(Ip.bind(null,u,f,r),[r]),u.flags|=2048,Us(9,Cp.bind(null,u,f,l,i),void 0,null),l},useId:function(){var r=_n(),i=dt.identifierPrefix;if(Ge){var l=Ln,u=bn;l=(u&~(1<<32-en(u)-1)).toString(32)+l,i=":"+i+"R"+l,l=Ms++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=E0++,i=":"+i+"r"+l.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},T0={readContext:Kt,useCallback:bp,useContext:Kt,useEffect:fc,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:Lp,useReducer:dc,useRef:Np,useState:function(){return dc(Fs)},useDebugValue:pc,useDeferredValue:function(r){var i=Yt();return Mp(i,ot.memoizedState,r)},useTransition:function(){var r=dc(Fs)[0],i=Yt().memoizedState;return[r,i]},useMutableSource:wp,useSyncExternalStore:Ep,useId:Fp,unstable_isNewReconciler:!1},R0={readContext:Kt,useCallback:bp,useContext:Kt,useEffect:fc,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:Lp,useReducer:hc,useRef:Np,useState:function(){return hc(Fs)},useDebugValue:pc,useDeferredValue:function(r){var i=Yt();return ot===null?i.memoizedState=r:Mp(i,ot.memoizedState,r)},useTransition:function(){var r=hc(Fs)[0],i=Yt().memoizedState;return[r,i]},useMutableSource:wp,useSyncExternalStore:Ep,useId:Fp,unstable_isNewReconciler:!1};function rn(r,i){if(r&&r.defaultProps){i=Y({},i),r=r.defaultProps;for(var l in r)i[l]===void 0&&(i[l]=r[l]);return i}return i}function mc(r,i,l,u){i=r.memoizedState,l=l(u,i),l=l==null?i:Y({},i,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Tl={isMounted:function(r){return(r=r._reactInternals)?Ur(r)===r:!1},enqueueSetState:function(r,i,l){r=r._reactInternals;var u=Tt(),d=gr(r),f=Fn(u,d);f.payload=i,l!=null&&(f.callback=l),i=hr(r,f,d),i!==null&&(ln(i,r,d,u),vl(i,r,d))},enqueueReplaceState:function(r,i,l){r=r._reactInternals;var u=Tt(),d=gr(r),f=Fn(u,d);f.tag=1,f.payload=i,l!=null&&(f.callback=l),i=hr(r,f,d),i!==null&&(ln(i,r,d,u),vl(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var l=Tt(),u=gr(r),d=Fn(l,u);d.tag=2,i!=null&&(d.callback=i),i=hr(r,d,u),i!==null&&(ln(i,r,u,l),vl(i,r,u))}};function zp(r,i,l,u,d,f,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!Is(l,u)||!Is(d,f):!0}function Bp(r,i,l){var u=!1,d=ur,f=i.contextType;return typeof f=="object"&&f!==null?f=Kt(f):(d=At(i)?jr:yt.current,u=i.contextTypes,f=(u=u!=null)?ki(r,d):ur),i=new i(l,f),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Tl,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=f),i}function Wp(r,i,l,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,u),i.state!==r&&Tl.enqueueReplaceState(i,i.state,null)}function gc(r,i,l,u){var d=r.stateNode;d.props=l,d.state=r.memoizedState,d.refs={},nc(r);var f=i.contextType;typeof f=="object"&&f!==null?d.context=Kt(f):(f=At(i)?jr:yt.current,d.context=ki(r,f)),d.state=r.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(mc(r,i,f,l),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Tl.enqueueReplaceState(d,d.state,null),yl(r,l,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Di(r,i){try{var l="",u=i;do l+=Re(u),u=u.return;while(u);var d=l}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:r,source:i,stack:d,digest:null}}function _c(r,i,l){return{value:r,source:null,stack:l??null,digest:i??null}}function vc(r,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function $p(r,i,l){l=Fn(-1,l),l.tag=3,l.payload={element:null};var u=i.value;return l.callback=function(){Dl||(Dl=!0,Dc=u),vc(r,i)},l}function Hp(r,i,l){l=Fn(-1,l),l.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;l.payload=function(){return u(d)},l.callback=function(){vc(r,i)}}var f=r.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(l.callback=function(){vc(r,i),typeof u!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),l}function Gp(r,i,l){var u=r.pingCache;if(u===null){u=r.pingCache=new N0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(l)||(d.add(l),r=B0.bind(null,r,i,l),i.then(r,r))}function qp(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Kp(r,i,l,u,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===i?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=Fn(-1,1),i.tag=2,hr(l,i,1))),l.lanes|=1),r)}var x0=Z.ReactCurrentOwner,Ot=!1;function kt(r,i,l,u){i.child=r===null?pp(i,null,l,u):xi(i,r.child,l,u)}function Yp(r,i,l,u,d){l=l.render;var f=i.ref;return Ai(i,d),u=uc(r,i,l,u,f,d),l=cc(),r!==null&&!Ot?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Un(r,i,d)):(Ge&&l&&Gu(i),i.flags|=1,kt(r,i,u,d),i.child)}function Qp(r,i,l,u,d){if(r===null){var f=l.type;return typeof f=="function"&&!jc(f)&&f.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=f,Xp(r,i,f,u,d)):(r=Vl(l.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(f=r.child,!(r.lanes&d)){var g=f.memoizedProps;if(l=l.compare,l=l!==null?l:Is,l(g,u)&&r.ref===i.ref)return Un(r,i,d)}return i.flags|=1,r=vr(f,u),r.ref=i.ref,r.return=i,i.child=r}function Xp(r,i,l,u,d){if(r!==null){var f=r.memoizedProps;if(Is(f,u)&&r.ref===i.ref)if(Ot=!1,i.pendingProps=u=f,(r.lanes&d)!==0)r.flags&131072&&(Ot=!0);else return i.lanes=r.lanes,Un(r,i,d)}return yc(r,i,l,u,d)}function Jp(r,i,l){var u=i.pendingProps,d=u.children,f=r!==null?r.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Li,Ht),Ht|=l;else{if(!(l&1073741824))return r=f!==null?f.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,je(Li,Ht),Ht|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:l,je(Li,Ht),Ht|=u}else f!==null?(u=f.baseLanes|l,i.memoizedState=null):u=l,je(Li,Ht),Ht|=u;return kt(r,i,d,l),i.child}function Zp(r,i){var l=i.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function yc(r,i,l,u,d){var f=At(l)?jr:yt.current;return f=ki(i,f),Ai(i,d),l=uc(r,i,l,u,f,d),u=cc(),r!==null&&!Ot?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Un(r,i,d)):(Ge&&u&&Gu(i),i.flags|=1,kt(r,i,l,d),i.child)}function em(r,i,l,u,d){if(At(l)){var f=!0;cl(i)}else f=!1;if(Ai(i,d),i.stateNode===null)Nl(r,i),Bp(i,l,u),gc(i,l,u,d),u=!0;else if(r===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var E=g.context,P=l.contextType;typeof P=="object"&&P!==null?P=Kt(P):(P=At(l)?jr:yt.current,P=ki(i,P));var j=l.getDerivedStateFromProps,z=typeof j=="function"||typeof g.getSnapshotBeforeUpdate=="function";z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||E!==P)&&Wp(i,g,u,P),dr=!1;var V=i.memoizedState;g.state=V,yl(i,u,g,d),E=i.memoizedState,w!==u||V!==E||Pt.current||dr?(typeof j=="function"&&(mc(i,l,j,u),E=i.memoizedState),(w=dr||zp(i,l,w,u,V,E,P))?(z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=P,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,gp(r,i),w=i.memoizedProps,P=i.type===i.elementType?w:rn(i.type,w),g.props=P,z=i.pendingProps,V=g.context,E=l.contextType,typeof E=="object"&&E!==null?E=Kt(E):(E=At(l)?jr:yt.current,E=ki(i,E));var Q=l.getDerivedStateFromProps;(j=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==z||V!==E)&&Wp(i,g,u,E),dr=!1,V=i.memoizedState,g.state=V,yl(i,u,g,d);var ee=i.memoizedState;w!==z||V!==ee||Pt.current||dr?(typeof Q=="function"&&(mc(i,l,Q,u),ee=i.memoizedState),(P=dr||zp(i,l,P,u,V,ee,E)||!1)?(j||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,ee,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,ee,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&V===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&V===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ee),g.props=u,g.state=ee,g.context=E,u=P):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&V===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&V===r.memoizedState||(i.flags|=1024),u=!1)}return wc(r,i,l,u,f,d)}function wc(r,i,l,u,d,f){Zp(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&sp(i,l,!1),Un(r,i,f);u=i.stateNode,x0.current=i;var w=g&&typeof l.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=xi(i,r.child,null,f),i.child=xi(i,null,w,f)):kt(r,i,w,f),i.memoizedState=u.state,d&&sp(i,l,!0),i.child}function tm(r){var i=r.stateNode;i.pendingContext?rp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&rp(r,i.context,!1),rc(r,i.containerInfo)}function nm(r,i,l,u,d){return Ni(),Qu(d),i.flags|=256,kt(r,i,l,u),i.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Sc(r){return{baseLanes:r,cachePool:null,transitions:null}}function rm(r,i,l){var u=i.pendingProps,d=qe.current,f=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(f=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),je(qe,d&1),r===null)return Yu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(i.mode&1?r.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,r=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=jl(g,u,0,null),r=Qr(r,u,l,null),f.return=i,r.return=i,f.sibling=r,i.child=f,i.child.memoizedState=Sc(l),i.memoizedState=Ec,r):Cc(i,g));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return P0(r,i,g,u,w,d,l);if(f){f=u.fallback,g=i.mode,d=r.child,w=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=vr(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?f=vr(w,f):(f=Qr(f,g,l,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=r.child.memoizedState,g=g===null?Sc(l):{baseLanes:g.baseLanes|l,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=r.childLanes&~l,i.memoizedState=Ec,u}return f=r.child,r=f.sibling,u=vr(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=l),u.return=i,u.sibling=null,r!==null&&(l=i.deletions,l===null?(i.deletions=[r],i.flags|=16):l.push(r)),i.child=u,i.memoizedState=null,u}function Cc(r,i){return i=jl({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Rl(r,i,l,u){return u!==null&&Qu(u),xi(i,r.child,null,l),r=Cc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function P0(r,i,l,u,d,f,g){if(l)return i.flags&256?(i.flags&=-257,u=_c(Error(t(422))),Rl(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=jl({mode:"visible",children:u.children},d,0,null),f=Qr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&xi(i,r.child,null,g),i.child.memoizedState=Sc(g),i.memoizedState=Ec,f);if(!(i.mode&1))return Rl(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,f=Error(t(419)),u=_c(f,u,void 0),Rl(r,i,g,u)}if(w=(g&r.childLanes)!==0,Ot||w){if(u=dt,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Mn(r,d),ln(u,r,d,-1))}return Vc(),u=_c(Error(t(421))),Rl(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=W0.bind(null,r),d._reactRetry=i,null):(r=f.treeContext,$t=lr(d.nextSibling),Wt=i,Ge=!0,nn=null,r!==null&&(Gt[qt++]=bn,Gt[qt++]=Ln,Gt[qt++]=zr,bn=r.id,Ln=r.overflow,zr=i),i=Cc(i,u.children),i.flags|=4096,i)}function im(r,i,l){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),ec(r.return,i,l)}function Ic(r,i,l,u,d){var f=r.memoizedState;f===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=l,f.tailMode=d)}function sm(r,i,l){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(kt(r,i,u.children,l),u=qe.current,u&2)u=u&1|2,i.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&im(r,l,i);else if(r.tag===19)im(r,l,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(je(qe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(l=i.child,d=null;l!==null;)r=l.alternate,r!==null&&wl(r)===null&&(d=l),l=l.sibling;l=d,l===null?(d=i.child,i.child=null):(d=l.sibling,l.sibling=null),Ic(i,!1,d,l,f);break;case"backwards":for(l=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&wl(r)===null){i.child=d;break}r=d.sibling,d.sibling=l,l=d,d=r}Ic(i,!0,l,null,f);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Nl(r,i){!(i.mode&1)&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Un(r,i,l){if(r!==null&&(i.dependencies=r.dependencies),Gr|=i.lanes,!(l&i.childLanes))return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,l=vr(r,r.pendingProps),i.child=l,l.return=i;r.sibling!==null;)r=r.sibling,l=l.sibling=vr(r,r.pendingProps),l.return=i;l.sibling=null}return i.child}function A0(r,i,l){switch(i.tag){case 3:tm(i),Ni();break;case 5:yp(i);break;case 1:At(i.type)&&cl(i);break;case 4:rc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;je(gl,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(je(qe,qe.current&1),i.flags|=128,null):l&i.child.childLanes?rm(r,i,l):(je(qe,qe.current&1),r=Un(r,i,l),r!==null?r.sibling:null);je(qe,qe.current&1);break;case 19:if(u=(l&i.childLanes)!==0,r.flags&128){if(u)return sm(r,i,l);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),je(qe,qe.current),u)break;return null;case 22:case 23:return i.lanes=0,Jp(r,i,l)}return Un(r,i,l)}var om,kc,lm,am;om=function(r,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},kc=function(){},lm=function(r,i,l,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,$r(gn.current);var f=null;switch(l){case"input":d=fi(r,d),u=fi(r,u),f=[];break;case"select":d=Y({},d,{value:void 0}),u=Y({},u,{value:void 0}),f=[];break;case"textarea":d=G(r,d),u=G(r,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=ll)}su(l,u);var g;l=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var w=d[P];for(g in w)w.hasOwnProperty(g)&&(l||(l={}),l[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?f||(f=[]):(f=f||[]).push(P,null));for(P in u){var E=u[P];if(w=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&E!==w&&(E!=null||w!=null))if(P==="style")if(w){for(g in w)!w.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(l||(l={}),l[g]="");for(g in E)E.hasOwnProperty(g)&&w[g]!==E[g]&&(l||(l={}),l[g]=E[g])}else l||(f||(f=[]),f.push(P,l)),l=E;else P==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(f=f||[]).push(P,E)):P==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(P,""+E):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(E!=null&&P==="onScroll"&&Be("scroll",r),f||w===E||(f=[])):(f=f||[]).push(P,E))}l&&(f=f||[]).push("style",l);var P=f;(i.updateQueue=P)&&(i.flags|=4)}},am=function(r,i,l,u){l!==u&&(i.flags|=4)};function Vs(r,i){if(!Ge)switch(r.tailMode){case"hidden":i=r.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Et(r){var i=r.alternate!==null&&r.alternate.child===r.child,l=0,u=0;if(i)for(var d=r.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=l,i}function O0(r,i,l){var u=i.pendingProps;switch(qu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(i),null;case 1:return At(i.type)&&ul(),Et(i),null;case 3:return u=i.stateNode,Oi(),We(Pt),We(yt),oc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(pl(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,nn!==null&&(Mc(nn),nn=null))),kc(r,i),Et(i),null;case 5:ic(i);var d=$r(bs.current);if(l=i.type,r!==null&&i.stateNode!=null)lm(r,i,l,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Et(i),null}if(r=$r(gn.current),pl(i)){u=i.stateNode,l=i.type;var f=i.memoizedProps;switch(u[mn]=i,u[xs]=f,r=(i.mode&1)!==0,l){case"dialog":Be("cancel",u),Be("close",u);break;case"iframe":case"object":case"embed":Be("load",u);break;case"video":case"audio":for(d=0;d<Ts.length;d++)Be(Ts[d],u);break;case"source":Be("error",u);break;case"img":case"image":case"link":Be("error",u),Be("load",u);break;case"details":Be("toggle",u);break;case"input":nu(u,f),Be("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Be("invalid",u);break;case"textarea":$(u,f),Be("invalid",u)}su(l,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var w=f[g];g==="children"?typeof w=="string"?u.textContent!==w&&(f.suppressHydrationWarning!==!0&&ol(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(f.suppressHydrationWarning!==!0&&ol(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Be("scroll",u)}switch(l){case"input":Mr(u),S(u,f,!0);break;case"textarea":Mr(u),ve(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=ll)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=et(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(l,{is:u.is}):(r=g.createElement(l),l==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,l),r[mn]=i,r[xs]=u,om(r,i,!1,!1),i.stateNode=r;e:{switch(g=ou(l,u),l){case"dialog":Be("cancel",r),Be("close",r),d=u;break;case"iframe":case"object":case"embed":Be("load",r),d=u;break;case"video":case"audio":for(d=0;d<Ts.length;d++)Be(Ts[d],r);d=u;break;case"source":Be("error",r),d=u;break;case"img":case"image":case"link":Be("error",r),Be("load",r),d=u;break;case"details":Be("toggle",r),d=u;break;case"input":nu(r,u),d=fi(r,u),Be("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=Y({},u,{value:void 0}),Be("invalid",r);break;case"textarea":$(r,u),d=G(r,u),Be("invalid",r);break;default:d=u}su(l,d),w=d;for(f in w)if(w.hasOwnProperty(f)){var E=w[f];f==="style"?Uo(r,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Fo(r,E)):f==="children"?typeof E=="string"?(l!=="textarea"||E!=="")&&Pn(r,E):typeof E=="number"&&Pn(r,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?E!=null&&f==="onScroll"&&Be("scroll",r):E!=null&&X(r,f,E,g))}switch(l){case"input":Mr(r),S(r,u,!1);break;case"textarea":Mr(r),ve(r);break;case"option":u.value!=null&&r.setAttribute("value",""+Ne(u.value));break;case"select":r.multiple=!!u.multiple,f=u.value,f!=null?K(r,!!u.multiple,f,!1):u.defaultValue!=null&&K(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ll)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Et(i),null;case 6:if(r&&i.stateNode!=null)am(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(l=$r(bs.current),$r(gn.current),pl(i)){if(u=i.stateNode,l=i.memoizedProps,u[mn]=i,(f=u.nodeValue!==l)&&(r=Wt,r!==null))switch(r.tag){case 3:ol(u.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ol(u.nodeValue,l,(r.mode&1)!==0)}f&&(i.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[mn]=i,i.stateNode=u}return Et(i),null;case 13:if(We(qe),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ge&&$t!==null&&i.mode&1&&!(i.flags&128))dp(),Ni(),i.flags|=98560,f=!1;else if(f=pl(i),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[mn]=i}else Ni(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Et(i),f=!1}else nn!==null&&(Mc(nn),nn=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=l,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(r===null||qe.current&1?lt===0&&(lt=3):Vc())),i.updateQueue!==null&&(i.flags|=4),Et(i),null);case 4:return Oi(),kc(r,i),r===null&&Rs(i.stateNode.containerInfo),Et(i),null;case 10:return Zu(i.type._context),Et(i),null;case 17:return At(i.type)&&ul(),Et(i),null;case 19:if(We(qe),f=i.memoizedState,f===null)return Et(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)Vs(f,!1);else{if(lt!==0||r!==null&&r.flags&128)for(r=i.child;r!==null;){if(g=wl(r),g!==null){for(i.flags|=128,Vs(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=l,l=i.child;l!==null;)f=l,r=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=r,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,r=g.dependencies,f.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return je(qe,qe.current&1|2),i.child}r=r.sibling}f.tail!==null&&tt()>Mi&&(i.flags|=128,u=!0,Vs(f,!1),i.lanes=4194304)}else{if(!u)if(r=wl(g),r!==null){if(i.flags|=128,u=!0,l=r.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),Vs(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ge)return Et(i),null}else 2*tt()-f.renderingStartTime>Mi&&l!==1073741824&&(i.flags|=128,u=!0,Vs(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(l=f.last,l!==null?l.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=tt(),i.sibling=null,l=qe.current,je(qe,u?l&1|2:l&1),i):(Et(i),null);case 22:case 23:return Uc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Ht&1073741824&&(Et(i),i.subtreeFlags&6&&(i.flags|=8192)):Et(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function D0(r,i){switch(qu(i),i.tag){case 1:return At(i.type)&&ul(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Oi(),We(Pt),We(yt),oc(),r=i.flags,r&65536&&!(r&128)?(i.flags=r&-65537|128,i):null;case 5:return ic(i),null;case 13:if(We(qe),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ni()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return We(qe),null;case 4:return Oi(),null;case 10:return Zu(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var xl=!1,St=!1,b0=typeof WeakSet=="function"?WeakSet:Set,J=null;function bi(r,i){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Xe(r,i,u)}else l.current=null}function Tc(r,i,l){try{l()}catch(u){Xe(r,i,u)}}var um=!1;function L0(r,i){if(Uu=Yo,r=zf(),Pu(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{l.nodeType,f.nodeType}catch{l=null;break e}var g=0,w=-1,E=-1,P=0,j=0,z=r,V=null;t:for(;;){for(var Q;z!==l||d!==0&&z.nodeType!==3||(w=g+d),z!==f||u!==0&&z.nodeType!==3||(E=g+u),z.nodeType===3&&(g+=z.nodeValue.length),(Q=z.firstChild)!==null;)V=z,z=Q;for(;;){if(z===r)break t;if(V===l&&++P===d&&(w=g),V===f&&++j===u&&(E=g),(Q=z.nextSibling)!==null)break;z=V,V=z.parentNode}z=Q}l=w===-1||E===-1?null:{start:w,end:E}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vu={focusedElem:r,selectionRange:l},Yo=!1,J=i;J!==null;)if(i=J,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,J=r;else for(;J!==null;){i=J;try{var ee=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var ne=ee.memoizedProps,nt=ee.memoizedState,T=i.stateNode,C=T.getSnapshotBeforeUpdate(i.elementType===i.type?ne:rn(i.type,ne),nt);T.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var R=i.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(B){Xe(i,i.return,B)}if(r=i.sibling,r!==null){r.return=i.return,J=r;break}J=i.return}return ee=um,um=!1,ee}function js(r,i,l){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var f=d.destroy;d.destroy=void 0,f!==void 0&&Tc(i,l,f)}d=d.next}while(d!==u)}}function Pl(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&r)===r){var u=l.create;l.destroy=u()}l=l.next}while(l!==i)}}function Rc(r){var i=r.ref;if(i!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof i=="function"?i(r):i.current=r}}function cm(r){var i=r.alternate;i!==null&&(r.alternate=null,cm(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[mn],delete i[xs],delete i[Wu],delete i[_0],delete i[v0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dm(r){return r.tag===5||r.tag===3||r.tag===4}function hm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||dm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Nc(r,i,l){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(r,i):l.insertBefore(r,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(r,l)):(i=l,i.appendChild(r)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=ll));else if(u!==4&&(r=r.child,r!==null))for(Nc(r,i,l),r=r.sibling;r!==null;)Nc(r,i,l),r=r.sibling}function xc(r,i,l){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?l.insertBefore(r,i):l.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(xc(r,i,l),r=r.sibling;r!==null;)xc(r,i,l),r=r.sibling}var gt=null,sn=!1;function fr(r,i,l){for(l=l.child;l!==null;)fm(r,i,l),l=l.sibling}function fm(r,i,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Wo,l)}catch{}switch(l.tag){case 5:St||bi(l,i);case 6:var u=gt,d=sn;gt=null,fr(r,i,l),gt=u,sn=d,gt!==null&&(sn?(r=gt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):gt.removeChild(l.stateNode));break;case 18:gt!==null&&(sn?(r=gt,l=l.stateNode,r.nodeType===8?Bu(r.parentNode,l):r.nodeType===1&&Bu(r,l),vs(r)):Bu(gt,l.stateNode));break;case 4:u=gt,d=sn,gt=l.stateNode.containerInfo,sn=!0,fr(r,i,l),gt=u,sn=d;break;case 0:case 11:case 14:case 15:if(!St&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Tc(l,i,g),d=d.next}while(d!==u)}fr(r,i,l);break;case 1:if(!St&&(bi(l,i),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(w){Xe(l,i,w)}fr(r,i,l);break;case 21:fr(r,i,l);break;case 22:l.mode&1?(St=(u=St)||l.memoizedState!==null,fr(r,i,l),St=u):fr(r,i,l);break;default:fr(r,i,l)}}function pm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new b0),i.forEach(function(u){var d=$0.bind(null,r,u);l.has(u)||(l.add(u),u.then(d,d))})}}function on(r,i){var l=i.deletions;if(l!==null)for(var u=0;u<l.length;u++){var d=l[u];try{var f=r,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:gt=w.stateNode,sn=!1;break e;case 3:gt=w.stateNode.containerInfo,sn=!0;break e;case 4:gt=w.stateNode.containerInfo,sn=!0;break e}w=w.return}if(gt===null)throw Error(t(160));fm(f,g,d),gt=null,sn=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(P){Xe(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mm(i,r),i=i.sibling}function mm(r,i){var l=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(on(i,r),vn(r),u&4){try{js(3,r,r.return),Pl(3,r)}catch(ne){Xe(r,r.return,ne)}try{js(5,r,r.return)}catch(ne){Xe(r,r.return,ne)}}break;case 1:on(i,r),vn(r),u&512&&l!==null&&bi(l,l.return);break;case 5:if(on(i,r),vn(r),u&512&&l!==null&&bi(l,l.return),r.flags&32){var d=r.stateNode;try{Pn(d,"")}catch(ne){Xe(r,r.return,ne)}}if(u&4&&(d=r.stateNode,d!=null)){var f=r.memoizedProps,g=l!==null?l.memoizedProps:f,w=r.type,E=r.updateQueue;if(r.updateQueue=null,E!==null)try{w==="input"&&f.type==="radio"&&f.name!=null&&ru(d,f),ou(w,g);var P=ou(w,f);for(g=0;g<E.length;g+=2){var j=E[g],z=E[g+1];j==="style"?Uo(d,z):j==="dangerouslySetInnerHTML"?Fo(d,z):j==="children"?Pn(d,z):X(d,j,z,P)}switch(w){case"input":Mo(d,f);break;case"textarea":oe(d,f);break;case"select":var V=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var Q=f.value;Q!=null?K(d,!!f.multiple,Q,!1):V!==!!f.multiple&&(f.defaultValue!=null?K(d,!!f.multiple,f.defaultValue,!0):K(d,!!f.multiple,f.multiple?[]:"",!1))}d[xs]=f}catch(ne){Xe(r,r.return,ne)}}break;case 6:if(on(i,r),vn(r),u&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,f=r.memoizedProps;try{d.nodeValue=f}catch(ne){Xe(r,r.return,ne)}}break;case 3:if(on(i,r),vn(r),u&4&&l!==null&&l.memoizedState.isDehydrated)try{vs(i.containerInfo)}catch(ne){Xe(r,r.return,ne)}break;case 4:on(i,r),vn(r);break;case 13:on(i,r),vn(r),d=r.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Oc=tt())),u&4&&pm(r);break;case 22:if(j=l!==null&&l.memoizedState!==null,r.mode&1?(St=(P=St)||j,on(i,r),St=P):on(i,r),vn(r),u&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!j&&r.mode&1)for(J=r,j=r.child;j!==null;){for(z=J=j;J!==null;){switch(V=J,Q=V.child,V.tag){case 0:case 11:case 14:case 15:js(4,V,V.return);break;case 1:bi(V,V.return);var ee=V.stateNode;if(typeof ee.componentWillUnmount=="function"){u=V,l=V.return;try{i=u,ee.props=i.memoizedProps,ee.state=i.memoizedState,ee.componentWillUnmount()}catch(ne){Xe(u,l,ne)}}break;case 5:bi(V,V.return);break;case 22:if(V.memoizedState!==null){vm(z);continue}}Q!==null?(Q.return=V,J=Q):vm(z)}j=j.sibling}e:for(j=null,z=r;;){if(z.tag===5){if(j===null){j=z;try{d=z.stateNode,P?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(w=z.stateNode,E=z.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=as("display",g))}catch(ne){Xe(r,r.return,ne)}}}else if(z.tag===6){if(j===null)try{z.stateNode.nodeValue=P?"":z.memoizedProps}catch(ne){Xe(r,r.return,ne)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===r)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===r)break e;for(;z.sibling===null;){if(z.return===null||z.return===r)break e;j===z&&(j=null),z=z.return}j===z&&(j=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:on(i,r),vn(r),u&4&&pm(r);break;case 21:break;default:on(i,r),vn(r)}}function vn(r){var i=r.flags;if(i&2){try{e:{for(var l=r.return;l!==null;){if(dm(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Pn(d,""),u.flags&=-33);var f=hm(r);xc(r,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=hm(r);Nc(r,w,g);break;default:throw Error(t(161))}}catch(E){Xe(r,r.return,E)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function M0(r,i,l){J=r,gm(r)}function gm(r,i,l){for(var u=(r.mode&1)!==0;J!==null;){var d=J,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||xl;if(!g){var w=d.alternate,E=w!==null&&w.memoizedState!==null||St;w=xl;var P=St;if(xl=g,(St=E)&&!P)for(J=d;J!==null;)g=J,E=g.child,g.tag===22&&g.memoizedState!==null?ym(d):E!==null?(E.return=g,J=E):ym(d);for(;f!==null;)J=f,gm(f),f=f.sibling;J=d,xl=w,St=P}_m(r)}else d.subtreeFlags&8772&&f!==null?(f.return=d,J=f):_m(r)}}function _m(r){for(;J!==null;){var i=J;if(i.flags&8772){var l=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:St||Pl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!St)if(l===null)u.componentDidMount();else{var d=i.elementType===i.type?l.memoizedProps:rn(i.type,l.memoizedProps);u.componentDidUpdate(d,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&vp(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}vp(i,g,l)}break;case 5:var w=i.stateNode;if(l===null&&i.flags&4){l=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&l.focus();break;case"img":E.src&&(l.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var j=P.memoizedState;if(j!==null){var z=j.dehydrated;z!==null&&vs(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}St||i.flags&512&&Rc(i)}catch(V){Xe(i,i.return,V)}}if(i===r){J=null;break}if(l=i.sibling,l!==null){l.return=i.return,J=l;break}J=i.return}}function vm(r){for(;J!==null;){var i=J;if(i===r){J=null;break}var l=i.sibling;if(l!==null){l.return=i.return,J=l;break}J=i.return}}function ym(r){for(;J!==null;){var i=J;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{Pl(4,i)}catch(E){Xe(i,l,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Xe(i,d,E)}}var f=i.return;try{Rc(i)}catch(E){Xe(i,f,E)}break;case 5:var g=i.return;try{Rc(i)}catch(E){Xe(i,g,E)}}}catch(E){Xe(i,i.return,E)}if(i===r){J=null;break}var w=i.sibling;if(w!==null){w.return=i.return,J=w;break}J=i.return}}var F0=Math.ceil,Al=Z.ReactCurrentDispatcher,Pc=Z.ReactCurrentOwner,Qt=Z.ReactCurrentBatchConfig,xe=0,dt=null,it=null,_t=0,Ht=0,Li=ar(0),lt=0,zs=null,Gr=0,Ol=0,Ac=0,Bs=null,Dt=null,Oc=0,Mi=1/0,Vn=null,Dl=!1,Dc=null,pr=null,bl=!1,mr=null,Ll=0,Ws=0,bc=null,Ml=-1,Fl=0;function Tt(){return xe&6?tt():Ml!==-1?Ml:Ml=tt()}function gr(r){return r.mode&1?xe&2&&_t!==0?_t&-_t:w0.transition!==null?(Fl===0&&(Fl=hf()),Fl):(r=be,r!==0||(r=window.event,r=r===void 0?16:Ef(r.type)),r):1}function ln(r,i,l,u){if(50<Ws)throw Ws=0,bc=null,Error(t(185));fs(r,l,u),(!(xe&2)||r!==dt)&&(r===dt&&(!(xe&2)&&(Ol|=l),lt===4&&_r(r,_t)),bt(r,u),l===1&&xe===0&&!(i.mode&1)&&(Mi=tt()+500,dl&&cr()))}function bt(r,i){var l=r.callbackNode;ww(r,i);var u=Go(r,r===dt?_t:0);if(u===0)l!==null&&uf(l),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(l!=null&&uf(l),i===1)r.tag===0?y0(Em.bind(null,r)):op(Em.bind(null,r)),m0(function(){!(xe&6)&&cr()}),l=null;else{switch(ff(u)){case 1:l=fu;break;case 4:l=cf;break;case 16:l=Bo;break;case 536870912:l=df;break;default:l=Bo}l=xm(l,wm.bind(null,r))}r.callbackPriority=i,r.callbackNode=l}}function wm(r,i){if(Ml=-1,Fl=0,xe&6)throw Error(t(327));var l=r.callbackNode;if(Fi()&&r.callbackNode!==l)return null;var u=Go(r,r===dt?_t:0);if(u===0)return null;if(u&30||u&r.expiredLanes||i)i=Ul(r,u);else{i=u;var d=xe;xe|=2;var f=Cm();(dt!==r||_t!==i)&&(Vn=null,Mi=tt()+500,Kr(r,i));do try{j0();break}catch(w){Sm(r,w)}while(!0);Ju(),Al.current=f,xe=d,it!==null?i=0:(dt=null,_t=0,i=lt)}if(i!==0){if(i===2&&(d=pu(r),d!==0&&(u=d,i=Lc(r,d))),i===1)throw l=zs,Kr(r,0),_r(r,u),bt(r,tt()),l;if(i===6)_r(r,u);else{if(d=r.current.alternate,!(u&30)&&!U0(d)&&(i=Ul(r,u),i===2&&(f=pu(r),f!==0&&(u=f,i=Lc(r,f))),i===1))throw l=zs,Kr(r,0),_r(r,u),bt(r,tt()),l;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(r,Dt,Vn);break;case 3:if(_r(r,u),(u&130023424)===u&&(i=Oc+500-tt(),10<i)){if(Go(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){Tt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=zu(Yr.bind(null,r,Dt,Vn),i);break}Yr(r,Dt,Vn);break;case 4:if(_r(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-en(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=tt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*F0(u/1960))-u,10<u){r.timeoutHandle=zu(Yr.bind(null,r,Dt,Vn),u);break}Yr(r,Dt,Vn);break;case 5:Yr(r,Dt,Vn);break;default:throw Error(t(329))}}}return bt(r,tt()),r.callbackNode===l?wm.bind(null,r):null}function Lc(r,i){var l=Bs;return r.current.memoizedState.isDehydrated&&(Kr(r,i).flags|=256),r=Ul(r,i),r!==2&&(i=Dt,Dt=l,i!==null&&Mc(i)),r}function Mc(r){Dt===null?Dt=r:Dt.push.apply(Dt,r)}function U0(r){for(var i=r;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var d=l[u],f=d.getSnapshot;d=d.value;try{if(!tn(f(),d))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(r,i){for(i&=~Ac,i&=~Ol,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var l=31-en(i),u=1<<l;r[l]=-1,i&=~u}}function Em(r){if(xe&6)throw Error(t(327));Fi();var i=Go(r,0);if(!(i&1))return bt(r,tt()),null;var l=Ul(r,i);if(r.tag!==0&&l===2){var u=pu(r);u!==0&&(i=u,l=Lc(r,u))}if(l===1)throw l=zs,Kr(r,0),_r(r,i),bt(r,tt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Yr(r,Dt,Vn),bt(r,tt()),null}function Fc(r,i){var l=xe;xe|=1;try{return r(i)}finally{xe=l,xe===0&&(Mi=tt()+500,dl&&cr())}}function qr(r){mr!==null&&mr.tag===0&&!(xe&6)&&Fi();var i=xe;xe|=1;var l=Qt.transition,u=be;try{if(Qt.transition=null,be=1,r)return r()}finally{be=u,Qt.transition=l,xe=i,!(xe&6)&&cr()}}function Uc(){Ht=Li.current,We(Li)}function Kr(r,i){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,p0(l)),it!==null)for(l=it.return;l!==null;){var u=l;switch(qu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ul();break;case 3:Oi(),We(Pt),We(yt),oc();break;case 5:ic(u);break;case 4:Oi();break;case 13:We(qe);break;case 19:We(qe);break;case 10:Zu(u.type._context);break;case 22:case 23:Uc()}l=l.return}if(dt=r,it=r=vr(r.current,null),_t=Ht=i,lt=0,zs=null,Ac=Ol=Gr=0,Dt=Bs=null,Wr!==null){for(i=0;i<Wr.length;i++)if(l=Wr[i],u=l.interleaved,u!==null){l.interleaved=null;var d=u.next,f=l.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}l.pending=u}Wr=null}return r}function Sm(r,i){do{var l=it;try{if(Ju(),El.current=kl,Sl){for(var u=Ke.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Sl=!1}if(Hr=0,ct=ot=Ke=null,Ls=!1,Ms=0,Pc.current=null,l===null||l.return===null){lt=1,zs=i,it=null;break}e:{var f=r,g=l.return,w=l,E=i;if(i=_t,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var P=E,j=w,z=j.tag;if(!(j.mode&1)&&(z===0||z===11||z===15)){var V=j.alternate;V?(j.updateQueue=V.updateQueue,j.memoizedState=V.memoizedState,j.lanes=V.lanes):(j.updateQueue=null,j.memoizedState=null)}var Q=qp(g);if(Q!==null){Q.flags&=-257,Kp(Q,g,w,f,i),Q.mode&1&&Gp(f,P,i),i=Q,E=P;var ee=i.updateQueue;if(ee===null){var ne=new Set;ne.add(E),i.updateQueue=ne}else ee.add(E);break e}else{if(!(i&1)){Gp(f,P,i),Vc();break e}E=Error(t(426))}}else if(Ge&&w.mode&1){var nt=qp(g);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Kp(nt,g,w,f,i),Qu(Di(E,w));break e}}f=E=Di(E,w),lt!==4&&(lt=2),Bs===null?Bs=[f]:Bs.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var T=$p(f,E,i);_p(f,T);break e;case 1:w=E;var C=f.type,R=f.stateNode;if(!(f.flags&128)&&(typeof C.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(pr===null||!pr.has(R)))){f.flags|=65536,i&=-i,f.lanes|=i;var B=Hp(f,w,i);_p(f,B);break e}}f=f.return}while(f!==null)}km(l)}catch(re){i=re,it===l&&l!==null&&(it=l=l.return);continue}break}while(!0)}function Cm(){var r=Al.current;return Al.current=kl,r===null?kl:r}function Vc(){(lt===0||lt===3||lt===2)&&(lt=4),dt===null||!(Gr&268435455)&&!(Ol&268435455)||_r(dt,_t)}function Ul(r,i){var l=xe;xe|=2;var u=Cm();(dt!==r||_t!==i)&&(Vn=null,Kr(r,i));do try{V0();break}catch(d){Sm(r,d)}while(!0);if(Ju(),xe=l,Al.current=u,it!==null)throw Error(t(261));return dt=null,_t=0,lt}function V0(){for(;it!==null;)Im(it)}function j0(){for(;it!==null&&!dw();)Im(it)}function Im(r){var i=Nm(r.alternate,r,Ht);r.memoizedProps=r.pendingProps,i===null?km(r):it=i,Pc.current=null}function km(r){var i=r;do{var l=i.alternate;if(r=i.return,i.flags&32768){if(l=D0(l,i),l!==null){l.flags&=32767,it=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{lt=6,it=null;return}}else if(l=O0(l,i,Ht),l!==null){it=l;return}if(i=i.sibling,i!==null){it=i;return}it=i=r}while(i!==null);lt===0&&(lt=5)}function Yr(r,i,l){var u=be,d=Qt.transition;try{Qt.transition=null,be=1,z0(r,i,l,u)}finally{Qt.transition=d,be=u}return null}function z0(r,i,l,u){do Fi();while(mr!==null);if(xe&6)throw Error(t(327));l=r.finishedWork;var d=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var f=l.lanes|l.childLanes;if(Ew(r,f),r===dt&&(it=dt=null,_t=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||bl||(bl=!0,xm(Bo,function(){return Fi(),null})),f=(l.flags&15990)!==0,l.subtreeFlags&15990||f){f=Qt.transition,Qt.transition=null;var g=be;be=1;var w=xe;xe|=4,Pc.current=null,L0(r,l),mm(l,r),l0(Vu),Yo=!!Uu,Vu=Uu=null,r.current=l,M0(l),hw(),xe=w,be=g,Qt.transition=f}else r.current=l;if(bl&&(bl=!1,mr=r,Ll=d),f=r.pendingLanes,f===0&&(pr=null),mw(l.stateNode),bt(r,tt()),i!==null)for(u=r.onRecoverableError,l=0;l<i.length;l++)d=i[l],u(d.value,{componentStack:d.stack,digest:d.digest});if(Dl)throw Dl=!1,r=Dc,Dc=null,r;return Ll&1&&r.tag!==0&&Fi(),f=r.pendingLanes,f&1?r===bc?Ws++:(Ws=0,bc=r):Ws=0,cr(),null}function Fi(){if(mr!==null){var r=ff(Ll),i=Qt.transition,l=be;try{if(Qt.transition=null,be=16>r?16:r,mr===null)var u=!1;else{if(r=mr,mr=null,Ll=0,xe&6)throw Error(t(331));var d=xe;for(xe|=4,J=r.current;J!==null;){var f=J,g=f.child;if(J.flags&16){var w=f.deletions;if(w!==null){for(var E=0;E<w.length;E++){var P=w[E];for(J=P;J!==null;){var j=J;switch(j.tag){case 0:case 11:case 15:js(8,j,f)}var z=j.child;if(z!==null)z.return=j,J=z;else for(;J!==null;){j=J;var V=j.sibling,Q=j.return;if(cm(j),j===P){J=null;break}if(V!==null){V.return=Q,J=V;break}J=Q}}}var ee=f.alternate;if(ee!==null){var ne=ee.child;if(ne!==null){ee.child=null;do{var nt=ne.sibling;ne.sibling=null,ne=nt}while(ne!==null)}}J=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,J=g;else e:for(;J!==null;){if(f=J,f.flags&2048)switch(f.tag){case 0:case 11:case 15:js(9,f,f.return)}var T=f.sibling;if(T!==null){T.return=f.return,J=T;break e}J=f.return}}var C=r.current;for(J=C;J!==null;){g=J;var R=g.child;if(g.subtreeFlags&2064&&R!==null)R.return=g,J=R;else e:for(g=C;J!==null;){if(w=J,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:Pl(9,w)}}catch(re){Xe(w,w.return,re)}if(w===g){J=null;break e}var B=w.sibling;if(B!==null){B.return=w.return,J=B;break e}J=w.return}}if(xe=d,cr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Wo,r)}catch{}u=!0}return u}finally{be=l,Qt.transition=i}}return!1}function Tm(r,i,l){i=Di(l,i),i=$p(r,i,1),r=hr(r,i,1),i=Tt(),r!==null&&(fs(r,1,i),bt(r,i))}function Xe(r,i,l){if(r.tag===3)Tm(r,r,l);else for(;i!==null;){if(i.tag===3){Tm(i,r,l);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){r=Di(l,r),r=Hp(i,r,1),i=hr(i,r,1),r=Tt(),i!==null&&(fs(i,1,r),bt(i,r));break}}i=i.return}}function B0(r,i,l){var u=r.pingCache;u!==null&&u.delete(i),i=Tt(),r.pingedLanes|=r.suspendedLanes&l,dt===r&&(_t&l)===l&&(lt===4||lt===3&&(_t&130023424)===_t&&500>tt()-Oc?Kr(r,0):Ac|=l),bt(r,i)}function Rm(r,i){i===0&&(r.mode&1?(i=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):i=1);var l=Tt();r=Mn(r,i),r!==null&&(fs(r,i,l),bt(r,l))}function W0(r){var i=r.memoizedState,l=0;i!==null&&(l=i.retryLane),Rm(r,l)}function $0(r,i){var l=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(l=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Rm(r,l)}var Nm;Nm=function(r,i,l){if(r!==null)if(r.memoizedProps!==i.pendingProps||Pt.current)Ot=!0;else{if(!(r.lanes&l)&&!(i.flags&128))return Ot=!1,A0(r,i,l);Ot=!!(r.flags&131072)}else Ot=!1,Ge&&i.flags&1048576&&lp(i,fl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Nl(r,i),r=i.pendingProps;var d=ki(i,yt.current);Ai(i,l),d=uc(null,i,u,r,d,l);var f=cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,At(u)?(f=!0,cl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nc(i),d.updater=Tl,i.stateNode=d,d._reactInternals=i,gc(i,u,r,l),i=wc(null,i,u,!0,f,l)):(i.tag=0,Ge&&f&&Gu(i),kt(null,i,d,l),i=i.child),i;case 16:u=i.elementType;e:{switch(Nl(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=G0(u),r=rn(u,r),d){case 0:i=yc(null,i,u,r,l);break e;case 1:i=em(null,i,u,r,l);break e;case 11:i=Yp(null,i,u,r,l);break e;case 14:i=Qp(null,i,u,rn(u.type,r),l);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:rn(u,d),yc(r,i,u,d,l);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:rn(u,d),em(r,i,u,d,l);case 3:e:{if(tm(i),r===null)throw Error(t(387));u=i.pendingProps,f=i.memoizedState,d=f.element,gp(r,i),yl(i,u,null,l);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=Di(Error(t(423)),i),i=nm(r,i,u,l,d);break e}else if(u!==d){d=Di(Error(t(424)),i),i=nm(r,i,u,l,d);break e}else for($t=lr(i.stateNode.containerInfo.firstChild),Wt=i,Ge=!0,nn=null,l=pp(i,null,u,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ni(),u===d){i=Un(r,i,l);break e}kt(r,i,u,l)}i=i.child}return i;case 5:return yp(i),r===null&&Yu(i),u=i.type,d=i.pendingProps,f=r!==null?r.memoizedProps:null,g=d.children,ju(u,d)?g=null:f!==null&&ju(u,f)&&(i.flags|=32),Zp(r,i),kt(r,i,g,l),i.child;case 6:return r===null&&Yu(i),null;case 13:return rm(r,i,l);case 4:return rc(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=xi(i,null,u,l):kt(r,i,u,l),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:rn(u,d),Yp(r,i,u,d,l);case 7:return kt(r,i,i.pendingProps,l),i.child;case 8:return kt(r,i,i.pendingProps.children,l),i.child;case 12:return kt(r,i,i.pendingProps.children,l),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,je(gl,u._currentValue),u._currentValue=g,f!==null)if(tn(f.value,g)){if(f.children===d.children&&!Pt.current){i=Un(r,i,l);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var w=f.dependencies;if(w!==null){g=f.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(f.tag===1){E=Fn(-1,l&-l),E.tag=2;var P=f.updateQueue;if(P!==null){P=P.shared;var j=P.pending;j===null?E.next=E:(E.next=j.next,j.next=E),P.pending=E}}f.lanes|=l,E=f.alternate,E!==null&&(E.lanes|=l),ec(f.return,l,i),w.lanes|=l;break}E=E.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(t(341));g.lanes|=l,w=g.alternate,w!==null&&(w.lanes|=l),ec(g,l,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}kt(r,i,d.children,l),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ai(i,l),d=Kt(d),u=u(d),i.flags|=1,kt(r,i,u,l),i.child;case 14:return u=i.type,d=rn(u,i.pendingProps),d=rn(u.type,d),Qp(r,i,u,d,l);case 15:return Xp(r,i,i.type,i.pendingProps,l);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:rn(u,d),Nl(r,i),i.tag=1,At(u)?(r=!0,cl(i)):r=!1,Ai(i,l),Bp(i,u,d),gc(i,u,d,l),wc(null,i,u,!0,r,l);case 19:return sm(r,i,l);case 22:return Jp(r,i,l)}throw Error(t(156,i.tag))};function xm(r,i){return af(r,i)}function H0(r,i,l,u){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(r,i,l,u){return new H0(r,i,l,u)}function jc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function G0(r){if(typeof r=="function")return jc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ue)return 11;if(r===Me)return 14}return 2}function vr(r,i){var l=r.alternate;return l===null?(l=Xt(r.tag,i,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=i,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,i=r.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Vl(r,i,l,u,d,f){var g=2;if(u=r,typeof r=="function")jc(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case fe:return Qr(l.children,d,f,i);case ce:g=8,d|=8;break;case we:return r=Xt(12,l,i,d|2),r.elementType=we,r.lanes=f,r;case me:return r=Xt(13,l,i,d),r.elementType=me,r.lanes=f,r;case Ae:return r=Xt(19,l,i,d),r.elementType=Ae,r.lanes=f,r;case Te:return jl(l,d,f,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ge:g=10;break e;case Ze:g=9;break e;case ue:g=11;break e;case Me:g=14;break e;case Ve:g=16,u=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Xt(g,l,i,d),i.elementType=r,i.type=u,i.lanes=f,i}function Qr(r,i,l,u){return r=Xt(7,r,u,i),r.lanes=l,r}function jl(r,i,l,u){return r=Xt(22,r,u,i),r.elementType=Te,r.lanes=l,r.stateNode={isHidden:!1},r}function zc(r,i,l){return r=Xt(6,r,null,i),r.lanes=l,r}function Bc(r,i,l){return i=Xt(4,r.children!==null?r.children:[],r.key,i),i.lanes=l,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function q0(r,i,l,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wc(r,i,l,u,d,f,g,w,E){return r=new q0(r,i,l,w,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Xt(3,null,null,i),r.current=f,f.stateNode=r,f.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(f),r}function K0(r,i,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:u==null?null:""+u,children:r,containerInfo:i,implementation:l}}function Pm(r){if(!r)return ur;r=r._reactInternals;e:{if(Ur(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(At(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(At(l))return ip(r,l,i)}return i}function Am(r,i,l,u,d,f,g,w,E){return r=Wc(l,u,!0,r,d,f,g,w,E),r.context=Pm(null),l=r.current,u=Tt(),d=gr(l),f=Fn(u,d),f.callback=i??null,hr(l,f,d),r.current.lanes=d,fs(r,d,u),bt(r,u),r}function zl(r,i,l,u){var d=i.current,f=Tt(),g=gr(d);return l=Pm(l),i.context===null?i.context=l:i.pendingContext=l,i=Fn(f,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=hr(d,i,g),r!==null&&(ln(r,d,g,f),vl(r,d,g)),g}function Bl(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Om(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<i?l:i}}function $c(r,i){Om(r,i),(r=r.alternate)&&Om(r,i)}var Dm=typeof reportError=="function"?reportError:function(r){console.error(r)};function Hc(r){this._internalRoot=r}Wl.prototype.render=Hc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));zl(r,i,null,null)},Wl.prototype.unmount=Hc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;qr(function(){zl(null,r,null,null)}),i[On]=null}};function Wl(r){this._internalRoot=r}Wl.prototype.unstable_scheduleHydration=function(r){if(r){var i=gf();r={blockedOn:null,target:r,priority:i};for(var l=0;l<ir.length&&i!==0&&i<ir[l].priority;l++);ir.splice(l,0,r),l===0&&yf(r)}};function Gc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function $l(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function bm(){}function Y0(r,i,l,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var P=Bl(g);f.call(P)}}var g=Am(i,u,r,0,null,!1,!1,"",bm);return r._reactRootContainer=g,r[On]=g.current,Rs(r.nodeType===8?r.parentNode:r),qr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var P=Bl(E);w.call(P)}}var E=Wc(r,0,!1,null,null,!1,!1,"",bm);return r._reactRootContainer=E,r[On]=E.current,Rs(r.nodeType===8?r.parentNode:r),qr(function(){zl(i,E,l,u)}),E}function Hl(r,i,l,u,d){var f=l._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var w=d;d=function(){var E=Bl(g);w.call(E)}}zl(i,g,r,d)}else g=Y0(l,i,r,d,u);return Bl(g)}pf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var l=hs(i.pendingLanes);l!==0&&(gu(i,l|1),bt(i,tt()),!(xe&6)&&(Mi=tt()+500,cr()))}break;case 13:qr(function(){var u=Mn(r,1);if(u!==null){var d=Tt();ln(u,r,1,d)}}),$c(r,1)}},_u=function(r){if(r.tag===13){var i=Mn(r,134217728);if(i!==null){var l=Tt();ln(i,r,134217728,l)}$c(r,134217728)}},mf=function(r){if(r.tag===13){var i=gr(r),l=Mn(r,i);if(l!==null){var u=Tt();ln(l,r,i,u)}$c(r,i)}},gf=function(){return be},_f=function(r,i){var l=be;try{return be=r,i()}finally{be=l}},uu=function(r,i,l){switch(i){case"input":if(Mo(r,l),i=l.name,l.type==="radio"&&i!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var u=l[i];if(u!==r&&u.form===r.form){var d=al(u);if(!d)throw Error(t(90));Lo(u),Mo(u,d)}}}break;case"textarea":oe(r,l);break;case"select":i=l.value,i!=null&&K(r,!!l.multiple,i,!1)}},ef=Fc,tf=qr;var Q0={usingClientEntryPoint:!1,Events:[Ps,Ci,al,Jh,Zh,Fc]},$s={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=of(r),r===null?null:r.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Wo=Gl.inject(X0),pn=Gl}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0,Lt.createPortal=function(r,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(i))throw Error(t(200));return K0(r,i,null,l)},Lt.createRoot=function(r,i){if(!Gc(r))throw Error(t(299));var l=!1,u="",d=Dm;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Wc(r,1,!1,null,null,l,!1,u,d),r[On]=i.current,Rs(r.nodeType===8?r.parentNode:r),new Hc(i)},Lt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=of(i),r=r===null?null:r.stateNode,r},Lt.flushSync=function(r){return qr(r)},Lt.hydrate=function(r,i,l){if(!$l(i))throw Error(t(200));return Hl(null,r,i,!0,l)},Lt.hydrateRoot=function(r,i,l){if(!Gc(r))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,d=!1,f="",g=Dm;if(l!=null&&(l.unstable_strictMode===!0&&(d=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onRecoverableError!==void 0&&(g=l.onRecoverableError)),i=Am(i,null,r,1,l??null,d,!1,f,g),r[On]=i.current,Rs(r),u)for(r=0;r<u.length;r++)l=u[r],d=l._getVersion,d=d(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,d]:i.mutableSourceEagerHydrationData.push(l,d);return new Wl(i)},Lt.render=function(r,i,l){if(!$l(i))throw Error(t(200));return Hl(null,r,i,!1,l)},Lt.unmountComponentAtNode=function(r){if(!$l(r))throw Error(t(40));return r._reactRootContainer?(qr(function(){Hl(null,null,r,!1,function(){r._reactRootContainer=null,r[On]=null})}),!0):!1},Lt.unstable_batchedUpdates=Fc,Lt.unstable_renderSubtreeIntoContainer=function(r,i,l,u){if(!$l(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Hl(r,i,l,!1,u)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var Bm;function oE(){if(Bm)return Yc.exports;Bm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yc.exports=sE(),Yc.exports}var Wm;function lE(){if(Wm)return ql;Wm=1;var n=oE();return ql.createRoot=n.createRoot,ql.hydrateRoot=n.hydrateRoot,ql}var aE=lE(),Gs={},$m;function uE(){if($m)return Gs;$m=1,Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.parse=c,Gs.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function c(y,N){const k=new a,A=y.length;if(A<2)return k;const D=(N==null?void 0:N.decode)||v;let F=0;do{const M=y.indexOf("=",F);if(M===-1)break;const X=y.indexOf(";",F),Z=X===-1?A:X;if(M>Z){F=y.lastIndexOf(";",M-1)+1;continue}const ie=h(y,F,M),W=p(y,M,ie),fe=y.slice(ie,W);if(k[fe]===void 0){let ce=h(y,M+1,Z),we=p(y,Z,ce);const ge=D(y.slice(ce,we));k[fe]=ge}F=Z+1}while(F<A);return k}function h(y,N,k){do{const A=y.charCodeAt(N);if(A!==32&&A!==9)return N}while(++N<k);return k}function p(y,N,k){for(;N>k;){const A=y.charCodeAt(--N);if(A!==32&&A!==9)return N+1}return k}function m(y,N,k){const A=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(y))throw new TypeError(`argument name is invalid: ${y}`);const D=A(N);if(!e.test(D))throw new TypeError(`argument val is invalid: ${N}`);let F=y+"="+D;if(!k)return F;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);F+="; Max-Age="+k.maxAge}if(k.domain){if(!t.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);F+="; Domain="+k.domain}if(k.path){if(!s.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);F+="; Path="+k.path}if(k.expires){if(!_(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);F+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(F+="; HttpOnly"),k.secure&&(F+="; Secure"),k.partitioned&&(F+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":F+="; Priority=Low";break;case"medium":F+="; Priority=Medium";break;case"high":F+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":F+="; SameSite=Strict";break;case"lax":F+="; SameSite=Lax";break;case"none":F+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return F}function v(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function _(y){return o.call(y)==="[object Date]"}return Gs}uE();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hm="popstate";function cE(n={}){function e(s,o){let{pathname:a,search:c,hash:h}=s.location;return vd("",{pathname:a,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:co(o)}return hE(e,t,null,n)}function Ye(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Tn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dE(){return Math.random().toString(36).substring(2,10)}function Gm(n,e){return{usr:n.state,key:n.key,idx:e}}function vd(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Zi(e):e,state:t,key:e&&e.key||s||dE()}}function co({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Zi(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function hE(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:a=!1}=s,c=o.history,h="POP",p=null,m=v();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function v(){return(c.state||{idx:null}).idx}function _(){h="POP";let D=v(),F=D==null?null:D-m;m=D,p&&p({action:h,location:A.location,delta:F})}function y(D,F){h="PUSH";let M=vd(A.location,D,F);m=v()+1;let X=Gm(M,m),Z=A.createHref(M);try{c.pushState(X,"",Z)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;o.location.assign(Z)}a&&p&&p({action:h,location:A.location,delta:1})}function N(D,F){h="REPLACE";let M=vd(A.location,D,F);m=v();let X=Gm(M,m),Z=A.createHref(M);c.replaceState(X,"",Z),a&&p&&p({action:h,location:A.location,delta:0})}function k(D){let F=o.location.origin!=="null"?o.location.origin:o.location.href,M=typeof D=="string"?D:co(D);return M=M.replace(/ $/,"%20"),Ye(F,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,F)}let A={get action(){return h},get location(){return n(o,c)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Hm,_),p=D,()=>{o.removeEventListener(Hm,_),p=null}},createHref(D){return e(o,D)},createURL:k,encodeLocation(D){let F=k(D);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:y,replace:N,go(D){return c.go(D)}};return A}function S_(n,e,t="/"){return fE(n,e,t,!1)}function fE(n,e,t,s){let o=typeof e=="string"?Zi(e):e,a=Pr(o.pathname||"/",t);if(a==null)return null;let c=C_(n);pE(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=kE(a);h=CE(c[p],m,s)}return h}function C_(n,e=[],t=[],s=""){let o=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=Gn([s,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(Ye(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),C_(a.children,e,v,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:EE(m,a.index),routesMeta:v})};return n.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))o(a,c);else for(let p of I_(a.path))o(a,c,p)}),e}function I_(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(s.length===0)return o?[a,""]:[a];let c=I_(s.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function pE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:SE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var mE=/^:[\w-]+$/,gE=3,_E=2,vE=1,yE=10,wE=-2,qm=n=>n==="*";function EE(n,e){let t=n.split("/"),s=t.length;return t.some(qm)&&(s+=wE),e&&(s+=_E),t.filter(o=>!qm(o)).reduce((o,a)=>o+(mE.test(a)?gE:a===""?vE:yE),s)}function SE(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function CE(n,e,t=!1){let{routesMeta:s}=n,o={},a="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,v=a==="/"?e:e.slice(a.length)||"/",_=ua({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),y=p.route;if(!_&&m&&t&&!s[s.length-1].route.index&&(_=ua({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Gn([a,_.pathname]),pathnameBase:xE(Gn([a,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(a=Gn([a,_.pathnameBase]))}return c}function ua(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=IE(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:_},y)=>{if(v==="*"){let k=h[y]||"";c=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const N=h[y];return _&&!N?m[v]=void 0:m[v]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:n}}function IE(n,e=!1,t=!0){Tn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function kE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Pr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function TE(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Zi(n):n;return{pathname:t?t.startsWith("/")?t:RE(t,e):e,search:PE(s),hash:AE(o)}}function RE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Jc(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function k_(n){let e=NE(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function T_(n,e,t,s=!1){let o;typeof n=="string"?o=Zi(n):(o={...n},Ye(!o.pathname||!o.pathname.includes("?"),Jc("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Jc("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Jc("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,h;if(c==null)h=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),_-=1;o.pathname=y.join("/")}h=_>=0?e[_]:"/"}let p=TE(o,h),m=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var Gn=n=>n.join("/").replace(/\/\/+/g,"/"),xE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),PE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,AE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function OE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var R_=["POST","PUT","PATCH","DELETE"];new Set(R_);var DE=["GET",...R_];new Set(DE);var es=b.createContext(null);es.displayName="DataRouter";var Ua=b.createContext(null);Ua.displayName="DataRouterState";var N_=b.createContext({isTransitioning:!1});N_.displayName="ViewTransition";var bE=b.createContext(new Map);bE.displayName="Fetchers";var LE=b.createContext(null);LE.displayName="Await";var Nn=b.createContext(null);Nn.displayName="Navigation";var So=b.createContext(null);So.displayName="Location";var Jn=b.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var Hd=b.createContext(null);Hd.displayName="RouteError";function ME(n,{relative:e}={}){Ye(Co(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=b.useContext(Nn),{hash:o,pathname:a,search:c}=Io(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:Gn([t,a])),s.createHref({pathname:h,search:c,hash:o})}function Co(){return b.useContext(So)!=null}function ui(){return Ye(Co(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(So).location}var x_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P_(n){b.useContext(Nn).static||b.useLayoutEffect(n)}function Gd(){let{isDataRoute:n}=b.useContext(Jn);return n?YE():FE()}function FE(){Ye(Co(),"useNavigate() may be used only in the context of a <Router> component.");let n=b.useContext(es),{basename:e,navigator:t}=b.useContext(Nn),{matches:s}=b.useContext(Jn),{pathname:o}=ui(),a=JSON.stringify(k_(s)),c=b.useRef(!1);return P_(()=>{c.current=!0}),b.useCallback((p,m={})=>{if(Tn(c.current,x_),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=T_(p,JSON.parse(a),o,m.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Gn([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,a,o,n])}b.createContext(null);function Io(n,{relative:e}={}){let{matches:t}=b.useContext(Jn),{pathname:s}=ui(),o=JSON.stringify(k_(t));return b.useMemo(()=>T_(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function UE(n,e){return A_(n,e)}function A_(n,e,t,s){var F;Ye(Co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(Nn),{matches:a}=b.useContext(Jn),c=a[a.length-1],h=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",v=c&&c.route;{let M=v&&v.path||"";O_(p,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let _=ui(),y;if(e){let M=typeof e=="string"?Zi(e):e;Ye(m==="/"||((F=M.pathname)==null?void 0:F.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${M.pathname}" was given in the \`location\` prop.`),y=M}else y=_;let N=y.pathname||"/",k=N;if(m!=="/"){let M=m.replace(/^\//,"").split("/");k="/"+N.replace(/^\//,"").split("/").slice(M.length).join("/")}let A=S_(n,{pathname:k});Tn(v||A!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Tn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=WE(A&&A.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:Gn([m,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:Gn([m,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),a,t,s);return e&&D?b.createElement(So.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},D):D}function VE(){let n=KE(),e=OE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:a},"ErrorBoundary")," or"," ",b.createElement("code",{style:a},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),t?b.createElement("pre",{style:o},t):null,c)}var jE=b.createElement(VE,null),zE=class extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?b.createElement(Jn.Provider,{value:this.props.routeContext},b.createElement(Hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function BE({routeContext:n,match:e,children:t}){let s=b.useContext(es);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(Jn.Provider,{value:n},t)}function WE(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:v,errors:_}=t,y=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||y){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,v)=>{let _,y=!1,N=null,k=null;t&&(_=a&&m.route.id?a[m.route.id]:void 0,N=m.route.errorElement||jE,c&&(h<0&&v===0?(O_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,k=null):h===v&&(y=!0,k=m.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,v+1)),D=()=>{let F;return _?F=N:y?F=k:m.route.Component?F=b.createElement(m.route.Component,null):m.route.element?F=m.route.element:F=p,b.createElement(BE,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:t!=null},children:F})};return t&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?b.createElement(zE,{location:t.location,revalidation:t.revalidation,component:N,error:_,children:D(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):D()},null)}function qd(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $E(n){let e=b.useContext(es);return Ye(e,qd(n)),e}function HE(n){let e=b.useContext(Ua);return Ye(e,qd(n)),e}function GE(n){let e=b.useContext(Jn);return Ye(e,qd(n)),e}function Kd(n){let e=GE(n),t=e.matches[e.matches.length-1];return Ye(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function qE(){return Kd("useRouteId")}function KE(){var s;let n=b.useContext(Hd),e=HE("useRouteError"),t=Kd("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function YE(){let{router:n}=$E("useNavigate"),e=Kd("useNavigate"),t=b.useRef(!1);return P_(()=>{t.current=!0}),b.useCallback(async(o,a={})=>{Tn(t.current,x_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Km={};function O_(n,e,t){!e&&!Km[n]&&(Km[n]=!0,Tn(!1,t))}b.memo(QE);function QE({routes:n,future:e,state:t}){return A_(n,void 0,t,e)}function Zl(n){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XE({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:a=!1}){Ye(!Co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Zi(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:y="default"}=t,N=b.useMemo(()=>{let k=Pr(p,c);return k==null?null:{location:{pathname:k,search:m,hash:v,state:_,key:y},navigationType:s}},[c,p,m,v,_,y,s]);return Tn(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:b.createElement(Nn.Provider,{value:h},b.createElement(So.Provider,{children:e,value:N}))}function JE({children:n,location:e}){return UE(yd(n),e)}function yd(n,e=[]){let t=[];return b.Children.forEach(n,(s,o)=>{if(!b.isValidElement(s))return;let a=[...e,o];if(s.type===b.Fragment){t.push.apply(t,yd(s.props.children,a));return}Ye(s.type===Zl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=yd(s.props.children,a)),t.push(c)}),t}var ea="get",ta="application/x-www-form-urlencoded";function Va(n){return n!=null&&typeof n.tagName=="string"}function ZE(n){return Va(n)&&n.tagName.toLowerCase()==="button"}function eS(n){return Va(n)&&n.tagName.toLowerCase()==="form"}function tS(n){return Va(n)&&n.tagName.toLowerCase()==="input"}function nS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rS(n,e){return n.button===0&&(!e||e==="_self")&&!nS(n)}var Kl=null;function iS(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var sS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zc(n){return n!=null&&!sS.has(n)?(Tn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ta}"`),null):n}function oS(n,e){let t,s,o,a,c;if(eS(n)){let h=n.getAttribute("action");s=h?Pr(h,e):null,t=n.getAttribute("method")||ea,o=Zc(n.getAttribute("enctype"))||ta,a=new FormData(n)}else if(ZE(n)||tS(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(s=p?Pr(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||ea,o=Zc(n.getAttribute("formenctype"))||Zc(h.getAttribute("enctype"))||ta,a=new FormData(h,n),!iS()){let{name:m,type:v,value:_}=n;if(v==="image"){let y=m?`${m}.`:"";a.append(`${y}x`,"0"),a.append(`${y}y`,"0")}else m&&a.append(m,_)}}else{if(Va(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ea,s=null,o=ta,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:a,body:c}}function Yd(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function lS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function aS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function uS(n,e,t){let s=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await lS(a,t);return c.links?c.links():[]}return[]}));return fS(s.flat(1).filter(aS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ym(n,e,t,s,o,a){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,h=(p,m)=>{var v;return t[m].pathname!==p.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):a==="data"?e.filter((p,m)=>{var _;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function cS(n,e){return dS(n.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function dS(n){return[...new Set(n)]}function hS(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function fS(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let a=JSON.stringify(hS(o));return t.has(a)||(t.add(a),s.push({key:a,link:o})),s},[])}function pS(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function mS(){let n=b.useContext(es);return Yd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gS(){let n=b.useContext(Ua);return Yd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qd=b.createContext(void 0);Qd.displayName="FrameworkContext";function D_(){let n=b.useContext(Qd);return Yd(n,"You must render this element inside a <HydratedRouter> element"),n}function _S(n,e){let t=b.useContext(Qd),[s,o]=b.useState(!1),[a,c]=b.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:_}=e,y=b.useRef(null);b.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let A=F=>{F.forEach(M=>{c(M.isIntersecting)})},D=new IntersectionObserver(A,{threshold:.5});return y.current&&D.observe(y.current),()=>{D.disconnect()}}},[n]),b.useEffect(()=>{if(s){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[s]);let N=()=>{o(!0)},k=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,y,{}]:[a,y,{onFocus:qs(h,N),onBlur:qs(p,k),onMouseEnter:qs(m,N),onMouseLeave:qs(v,k),onTouchStart:qs(_,N)}]:[!1,y,{}]}function qs(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function vS({page:n,...e}){let{router:t}=mS(),s=b.useMemo(()=>S_(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?b.createElement(wS,{page:n,matches:s,...e}):null}function yS(n){let{manifest:e,routeModules:t}=D_(),[s,o]=b.useState([]);return b.useEffect(()=>{let a=!1;return uS(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),s}function wS({page:n,matches:e,...t}){let s=ui(),{manifest:o,routeModules:a}=D_(),{loaderData:c,matches:h}=gS(),p=b.useMemo(()=>Ym(n,e,h,o,s,"data"),[n,e,h,o,s]),m=b.useMemo(()=>Ym(n,e,h,o,s,"assets"),[n,e,h,o,s]),v=b.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let N=new Set,k=!1;if(e.forEach(D=>{var M;let F=o.routes[D.route.id];!F||!F.hasLoader||(!p.some(X=>X.route.id===D.route.id)&&D.route.id in c&&((M=a[D.route.id])!=null&&M.shouldRevalidate)||F.hasClientLoader?k=!0:N.add(D.route.id))}),N.size===0)return[];let A=pS(n);return k&&N.size>0&&A.searchParams.set("_routes",e.filter(D=>N.has(D.route.id)).map(D=>D.route.id).join(",")),[A.pathname+A.search]},[c,s,o,p,e,n,a]),_=b.useMemo(()=>cS(m,o),[m,o]),y=yS(m);return b.createElement(b.Fragment,null,v.map(N=>b.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),_.map(N=>b.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),y.map(({key:N,link:k})=>b.createElement("link",{key:N,...k})))}function ES(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var b_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b_&&(window.__reactRouterVersion="7.1.1")}catch{}function SS({basename:n,children:e,window:t}){let s=b.useRef();s.current==null&&(s.current=cE({window:t,v5Compat:!0}));let o=s.current,[a,c]=b.useState({action:o.action,location:o.location}),h=b.useCallback(p=>{b.startTransition(()=>c(p))},[c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.createElement(XE,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var L_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M_=b.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:a,replace:c,state:h,target:p,to:m,preventScrollReset:v,viewTransition:_,...y},N){let{basename:k}=b.useContext(Nn),A=typeof m=="string"&&L_.test(m),D,F=!1;if(typeof m=="string"&&A&&(D=m,b_))try{let we=new URL(window.location.href),ge=m.startsWith("//")?new URL(we.protocol+m):new URL(m),Ze=Pr(ge.pathname,k);ge.origin===we.origin&&Ze!=null?m=Ze+ge.search+ge.hash:F=!0}catch{Tn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=ME(m,{relative:o}),[X,Z,ie]=_S(s,y),W=TS(m,{replace:c,state:h,target:p,preventScrollReset:v,relative:o,viewTransition:_});function fe(we){e&&e(we),we.defaultPrevented||W(we)}let ce=b.createElement("a",{...y,...ie,href:D||M,onClick:F||a?e:fe,ref:ES(N,Z),target:p,"data-discover":!A&&t==="render"?"true":void 0});return X&&!A?b.createElement(b.Fragment,null,ce,b.createElement(vS,{page:M})):ce});M_.displayName="Link";var CS=b.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:a,to:c,viewTransition:h,children:p,...m},v){let _=Io(c,{relative:m.relative}),y=ui(),N=b.useContext(Ua),{navigator:k,basename:A}=b.useContext(Nn),D=N!=null&&AS(_)&&h===!0,F=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,M=y.pathname,X=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(M=M.toLowerCase(),X=X?X.toLowerCase():null,F=F.toLowerCase()),X&&A&&(X=Pr(X,A)||X);const Z=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let ie=M===F||!o&&M.startsWith(F)&&M.charAt(Z)==="/",W=X!=null&&(X===F||!o&&X.startsWith(F)&&X.charAt(F.length)==="/"),fe={isActive:ie,isPending:W,isTransitioning:D},ce=ie?e:void 0,we;typeof s=="function"?we=s(fe):we=[s,ie?"active":null,W?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let ge=typeof a=="function"?a(fe):a;return b.createElement(M_,{...m,"aria-current":ce,className:we,ref:v,style:ge,to:c,viewTransition:h},typeof p=="function"?p(fe):p)});CS.displayName="NavLink";var IS=b.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:a,method:c=ea,action:h,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:_,...y},N)=>{let k=xS(),A=PS(h,{relative:m}),D=c.toLowerCase()==="get"?"get":"post",F=typeof h=="string"&&L_.test(h),M=X=>{if(p&&p(X),X.defaultPrevented)return;X.preventDefault();let Z=X.nativeEvent.submitter,ie=(Z==null?void 0:Z.getAttribute("formmethod"))||c;k(Z||X.currentTarget,{fetcherKey:e,method:ie,navigate:t,replace:o,state:a,relative:m,preventScrollReset:v,viewTransition:_})};return b.createElement("form",{ref:N,method:D,action:A,onSubmit:s?p:M,...y,"data-discover":!F&&n==="render"?"true":void 0})});IS.displayName="Form";function kS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F_(n){let e=b.useContext(es);return Ye(e,kS(n)),e}function TS(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:a,viewTransition:c}={}){let h=Gd(),p=ui(),m=Io(n,{relative:a});return b.useCallback(v=>{if(rS(v,e)){v.preventDefault();let _=t!==void 0?t:co(p)===co(m);h(n,{replace:_,state:s,preventScrollReset:o,relative:a,viewTransition:c})}},[p,h,m,t,s,e,n,o,a,c])}var RS=0,NS=()=>`__${String(++RS)}__`;function xS(){let{router:n}=F_("useSubmit"),{basename:e}=b.useContext(Nn),t=qE();return b.useCallback(async(s,o={})=>{let{action:a,method:c,encType:h,formData:p,body:m}=oS(s,e);if(o.navigate===!1){let v=o.fetcherKey||NS();await n.fetch(v,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function PS(n,{relative:e}={}){let{basename:t}=b.useContext(Nn),s=b.useContext(Jn);Ye(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),a={...Io(n||".",{relative:e})},c=ui();if(n==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(v=>v==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let v=h.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Gn([t,a.pathname])),co(a)}function AS(n,e={}){let t=b.useContext(N_);Ye(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=F_("useViewTransitionState"),o=Io(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Pr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Pr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return ua(o.pathname,c)!=null||ua(o.pathname,a)!=null}new TextEncoder;var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw ts(e)},ts=function(n){return new Error("Firebase Database ("+U_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OS=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[s++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,m=p?n[o+2]:0,v=a>>2,_=(a&3)<<4|h>>4;let y=(h&15)<<2|m>>6,N=m&63;p||(N=64,c||(y=64)),s.push(t[v],t[_],t[y],t[N])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(V_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const _=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||m==null||_==null)throw new DS;const y=a<<2|h>>4;if(s.push(y),m!==64){const N=h<<4&240|m>>2;if(s.push(N),_!==64){const k=m<<6&192|_;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class DS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const j_=function(n){const e=V_(n);return Xd.encodeByteArray(e,!0)},ca=function(n){return j_(n).replace(/\./g,"")},da=function(n){try{return Xd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n){return z_(void 0,n)}function z_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LS(t)||(n[t]=z_(n[t],e[t]));return n}function LS(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=()=>MS().__FIREBASE_DEFAULTS__,US=()=>{if(typeof process>"u"||typeof Qm>"u")return;const n=Qm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},VS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&da(n[1]);return e&&JSON.parse(e)},Jd=()=>{try{return FS()||US()||VS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},B_=n=>{var e,t;return(t=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},W_=n=>{const e=B_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$_=()=>{var n;return(n=Jd())===null||n===void 0?void 0:n.config},H_=n=>{var e;return(e=Jd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ca(JSON.stringify(t)),ca(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function jS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BS(){const n=Nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function K_(){return U_.NODE_ADMIN===!0}function WS(){try{return typeof indexedDB=="object"}catch{return!1}}function $S(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="FirebaseError";class Zn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=HS,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?GS(a,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new Zn(o,h,s)}}function GS(n,e){return n.replace(qS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const qS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){return JSON.parse(n)}function mt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(n){let e={},t={},s={},o="";try{const a=n.split(".");e=ho(da(a[0])||""),t=ho(da(a[1])||""),o=a[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},KS=function(n){const e=Y_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},YS=function(n){const e=Y_(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ki(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ha(n,e,t){const s={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(s[o]=e.call(t,n[o],o,n));return s}function fa(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const a=n[o],c=e[o];if(Xm(a)&&Xm(c)){if(!fa(a,c))return!1}else if(a!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Xm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function to(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,a]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function no(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)s[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const y=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(y<<1|y>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,v;for(let _=0;_<80;_++){_<40?_<20?(m=h^a&(c^h),v=1518500249):(m=a^c^h,v=1859775393):_<60?(m=a&c|h&(a|c),v=2400959708):(m=a^c^h,v=3395469782);const y=(o<<5|o>>>27)+m+p+v+s[_]&4294967295;p=h,h=c,c=(a<<30|a>>>2)&4294967295,a=o,o=y}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const a=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}else for(;o<t;)if(a[c]=e[o],++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[o]>>a&255,++s;return e}}function XS(n,e){const t=new JS(n,e);return t.subscribe.bind(t)}class JS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ed),o.error===void 0&&(o.error=ed),o.complete===void 0&&(o.complete=ed);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ed(){}function eh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);if(o>=55296&&o<=56319){const a=o-55296;s++,H(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;o=65536+(a<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},za=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n){return n&&n._delegate?n._delegate:n}class Ar{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ja;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rC(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});s.resolve(a)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);s===h&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),a=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nC(n){return n===Xr?void 0:n}function rC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const sC={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},oC=Le.INFO,lC={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},aC=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=lC[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class th{constructor(e){this.name=e,this._logLevel=oC,this._logHandler=aC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const uC=(n,e)=>e.some(t=>n instanceof t);let Jm,Zm;function cC(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dC(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,Ed=new WeakMap,X_=new WeakMap,td=new WeakMap,nh=new WeakMap;function hC(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Tr(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Q_.set(t,n)}).catch(()=>{}),nh.set(e,n),e}function fC(n){if(Ed.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ed.set(n,e)}let Sd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ed.get(n);if(e==="objectStoreNames")return n.objectStoreNames||X_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pC(n){Sd=n(Sd)}function mC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(nd(this),e,...t);return X_.set(s,e.sort?e.sort():[e]),Tr(s)}:dC().includes(n)?function(...e){return n.apply(nd(this),e),Tr(Q_.get(this))}:function(...e){return Tr(n.apply(nd(this),e))}}function gC(n){return typeof n=="function"?mC(n):(n instanceof IDBTransaction&&fC(n),uC(n,cC())?new Proxy(n,Sd):n)}function Tr(n){if(n instanceof IDBRequest)return hC(n);if(td.has(n))return td.get(n);const e=gC(n);return e!==n&&(td.set(n,e),nh.set(e,n)),e}const nd=n=>nh.get(n);function _C(n,e,{blocked:t,upgrade:s,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),h=Tr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Tr(c.result),p.oldVersion,p.newVersion,Tr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const vC=["get","getKey","getAll","getAllKeys","count"],yC=["put","add","delete","clear"],rd=new Map;function eg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=yC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vC.includes(t)))return;const a=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&p.done]))[0]};return rd.set(e,a),a}pC(n=>({...n,get:(e,t,s)=>eg(e,t)||n.get(e,t,s),has:(e,t)=>!!eg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(EC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function EC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cd="@firebase/app",tg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new th("@firebase/app"),SC="@firebase/app-compat",CC="@firebase/analytics-compat",IC="@firebase/analytics",kC="@firebase/app-check-compat",TC="@firebase/app-check",RC="@firebase/auth",NC="@firebase/auth-compat",xC="@firebase/database",PC="@firebase/data-connect",AC="@firebase/database-compat",OC="@firebase/functions",DC="@firebase/functions-compat",bC="@firebase/installations",LC="@firebase/installations-compat",MC="@firebase/messaging",FC="@firebase/messaging-compat",UC="@firebase/performance",VC="@firebase/performance-compat",jC="@firebase/remote-config",zC="@firebase/remote-config-compat",BC="@firebase/storage",WC="@firebase/storage-compat",$C="@firebase/firestore",HC="@firebase/vertexai",GC="@firebase/firestore-compat",qC="firebase",KC="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="[DEFAULT]",YC={[Cd]:"fire-core",[SC]:"fire-core-compat",[IC]:"fire-analytics",[CC]:"fire-analytics-compat",[TC]:"fire-app-check",[kC]:"fire-app-check-compat",[RC]:"fire-auth",[NC]:"fire-auth-compat",[xC]:"fire-rtdb",[PC]:"fire-data-connect",[AC]:"fire-rtdb-compat",[OC]:"fire-fn",[DC]:"fire-fn-compat",[bC]:"fire-iid",[LC]:"fire-iid-compat",[MC]:"fire-fcm",[FC]:"fire-fcm-compat",[UC]:"fire-perf",[VC]:"fire-perf-compat",[jC]:"fire-rc",[zC]:"fire-rc-compat",[BC]:"fire-gcs",[WC]:"fire-gcs-compat",[$C]:"fire-fst",[GC]:"fire-fst-compat",[HC]:"fire-vertex","fire-js":"fire-js",[qC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map,QC=new Map,kd=new Map;function ng(n,e){try{n.container.addComponent(e)}catch(t){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ri(n){const e=n.name;if(kd.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,n);for(const t of pa.values())ng(t,n);for(const t of QC.values())ng(t,n);return!0}function Ba(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new ko("app","Firebase",XC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=KC;function J_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Id,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Rr.create("bad-app-name",{appName:String(o)});if(t||(t=$_()),!t)throw Rr.create("no-options");const a=pa.get(o);if(a){if(fa(t,a.options)&&fa(s,a.config))return a;throw Rr.create("duplicate-app",{appName:o})}const c=new iC(o);for(const p of kd.values())c.addComponent(p);const h=new JC(t,s,c);return pa.set(o,h),h}function rh(n=Id){const e=pa.get(n);if(!e&&n===Id&&$_())return J_();if(!e)throw Rr.create("no-app",{appName:n});return e}function Cn(n,e,t){var s;let o=(s=YC[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(h.join(" "));return}ri(new Ar(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="firebase-heartbeat-database",eI=1,fo="firebase-heartbeat-store";let id=null;function Z_(){return id||(id=_C(ZC,eI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rr.create("idb-open",{originalErrorMessage:n.message})})),id}async function tI(n){try{const t=(await Z_()).transaction(fo),s=await t.objectStore(fo).get(ev(n));return await t.done,s}catch(e){if(e instanceof Zn)Kn.warn(e.message);else{const t=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(t.message)}}}async function rg(n,e){try{const s=(await Z_()).transaction(fo,"readwrite");await s.objectStore(fo).put(e,ev(n)),await s.done}catch(t){if(t instanceof Zn)Kn.warn(t.message);else{const s=Rr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kn.warn(s.message)}}}function ev(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ig();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=rI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ig(),{heartbeatsToSend:s,unsentEntries:o}=sI(this._heartbeatsCache.heartbeats),a=ca(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Kn.warn(t),""}}}function ig(){return new Date().toISOString().substring(0,10)}function sI(n,e=nI){const t=[];let s=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),sg(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),sg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WS()?$S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return rg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return rg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function sg(n){return ca(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n){ri(new Ar("platform-logger",e=>new wC(e),"PRIVATE")),ri(new Ar("heartbeat",e=>new iI(e),"PRIVATE")),Cn(Cd,tg,n),Cn(Cd,tg,"esm2017"),Cn("fire-js","")}lI("");var aI="firebase",uI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(aI,uI,"app");function ih(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function tv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cI=tv,nv=new ko("auth","Firebase",tv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new th("@firebase/auth");function dI(n,...e){ma.logLevel<=Le.WARN&&ma.warn(`Auth (${ci}): ${n}`,...e)}function na(n,...e){ma.logLevel<=Le.ERROR&&ma.error(`Auth (${ci}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n,...e){throw sh(n,...e)}function In(n,...e){return sh(n,...e)}function rv(n,e,t){const s=Object.assign(Object.assign({},cI()),{[e]:t});return new ko("auth","Firebase",s).create(e,{appName:n.name})}function Nr(n){return rv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return nv.create(n,...e)}function de(n,e,...t){if(!n)throw sh(e,...t)}function Bn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw na(e),new Error(e)}function Yn(n,e){n||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hI(){return og()==="http:"||og()==="https:"}function og(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hI()||zS()||"connection"in navigator)?navigator.onLine:!0}function pI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yn(t>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||q_()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n,e){Yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new To(3e4,6e4);function di(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function br(n,e,t,s,o={}){return sv(n,o,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const h=ns(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},a);return jS()||(m.referrerPolicy="no-referrer"),iv.fetch()(ov(n,n.config.apiHost,t,h),m)})}async function sv(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},mI),e);try{const o=new vI(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Yl(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Yl(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Yl(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw rv(n,v,m);fn(n,v)}}catch(o){if(o instanceof Zn)throw o;fn(n,"network-request-failed",{message:String(o)})}}async function Wa(n,e,t,s,o={}){const a=await br(n,e,t,s,o);return"mfaPendingCredential"in a&&fn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function ov(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?oh(n.config,o):`${n.config.apiScheme}://${o}`}function _I(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(In(this.auth,"network-request-failed")),gI.get())})}}function Yl(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=In(n,e,s);return o.customData._tokenResponse=t,o}function lg(n){return n!==void 0&&n.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _I(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wI(n,e){return br(n,"GET","/v2/recaptchaConfig",di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,e){return br(n,"POST","/v1/accounts:delete",e)}async function lv(n,e){return br(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(n,e=!1){const t=xt(n),s=await t.getIdToken(e),o=lh(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:s,authTime:ro(sd(o.auth_time)),issuedAtTime:ro(sd(o.iat)),expirationTime:ro(sd(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function sd(n){return Number(n)*1e3}function lh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const o=da(t);return o?JSON.parse(o):(na("Failed to decode base64 JWT payload"),null)}catch(o){return na("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ag(n){const e=lh(n);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Zn&&CI(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function CI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(n){var e;const t=n.auth,s=await n.getIdToken(),o=await po(n,lv(t,{idToken:s}));de(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?av(a.providerUserInfo):[],h=TI(n.providerData,c),p=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),v=p?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Rd(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,_)}async function kI(n){const e=xt(n);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TI(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function av(n){return n.map(e=>{var{providerId:t}=e,s=ih(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(n,e){const t=await sv(n,{},async()=>{const s=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=ov(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",iv.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NI(n,e){return br(n,"POST","/v2/accounts:revokeToken",di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=ag(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:a}=await RI(e,t);this.updateTokensAndExpiration(s,o,Number(a))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:a}=t,c=new Bi;return s&&(de(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(de(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,e){de(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,a=ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Rd(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await po(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SI(this,e)}reload(){return kI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ga(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await po(this,EI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,a,c,h,p,m,v;const _=(s=t.displayName)!==null&&s!==void 0?s:void 0,y=(o=t.email)!==null&&o!==void 0?o:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,k=(c=t.photoURL)!==null&&c!==void 0?c:void 0,A=(h=t.tenantId)!==null&&h!==void 0?h:void 0,D=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,F=(m=t.createdAt)!==null&&m!==void 0?m:void 0,M=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:X,emailVerified:Z,isAnonymous:ie,providerData:W,stsTokenManager:fe}=t;de(X&&fe,e,"internal-error");const ce=Bi.fromJSON(this.name,fe);de(typeof X=="string",e,"internal-error"),wr(_,e.name),wr(y,e.name),de(typeof Z=="boolean",e,"internal-error"),de(typeof ie=="boolean",e,"internal-error"),wr(N,e.name),wr(k,e.name),wr(A,e.name),wr(D,e.name),wr(F,e.name),wr(M,e.name);const we=new Wn({uid:X,auth:e,email:y,emailVerified:Z,displayName:_,isAnonymous:ie,photoURL:k,phoneNumber:N,tenantId:A,stsTokenManager:ce,createdAt:F,lastLoginAt:M});return W&&Array.isArray(W)&&(we.providerData=W.map(ge=>Object.assign({},ge))),D&&(we._redirectEventId=D),we}static async _fromIdTokenResponse(e,t,s=!1){const o=new Bi;o.updateFromServerResponse(t);const a=new Wn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ga(a),a}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?av(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new Bi;h.updateFromIdToken(s);const p=new Wn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new Map;function $n(n){Yn(n instanceof Function,"Expected a class definition");let e=ug.get(n);return e?(Yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ug.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uv.type="NONE";const cg=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e,t){return`firebase:${n}:${e}:${t}`}class Wi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:a}=this.auth;this.fullUserKey=ra(this.userKey,o.apiKey,a),this.fullPersistenceKey=ra("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Wi($n(cg),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||$n(cg);const c=ra(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const v=await m._get(c);if(v){const _=Wn._fromJSON(e,v);m!==a&&(h=_),a=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Wi(a,e,s):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new Wi(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mv(e))return"Blackberry";if(gv(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||hv(e))&&!e.includes("edge/"))return"Chrome";if(pv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cv(n=Nt()){return/firefox\//i.test(n)}function dv(n=Nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hv(n=Nt()){return/crios\//i.test(n)}function fv(n=Nt()){return/iemobile/i.test(n)}function pv(n=Nt()){return/android/i.test(n)}function mv(n=Nt()){return/blackberry/i.test(n)}function gv(n=Nt()){return/webos/i.test(n)}function ah(n=Nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xI(n=Nt()){var e;return ah(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PI(){return BS()&&document.documentMode===10}function _v(n=Nt()){return ah(n)||pv(n)||gv(n)||mv(n)||/windows phone/i.test(n)||fv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n,e=[]){let t;switch(n){case"Browser":t=dg(Nt());break;case"Worker":t=`${dg(Nt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(n,e={}){return br(n,"GET","/v2/passwordPolicy",di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=6;class bI{constructor(e){var t,s,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:DI,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hg(this),this.idTokenSubscription=new hg(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$n(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lv(this,{idToken:e}),s=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(Nr(this));const t=e?xt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OI(this),t=new bI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ko("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await NI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$n(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[$n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rs(n){return xt(n)}class hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(n){$a=n}function yv(n){return $a.loadJS(n)}function FI(){return $a.recaptchaEnterpriseScript}function UI(){return $a.gapiScript}function VI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jI{constructor(){this.enterprise=new zI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const BI="recaptcha-enterprise",wv="NO_RECAPTCHA";class WI{constructor(e){this.type=BI,this.auth=rs(e)}async verify(e="verify",t=!1){async function s(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{wI(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new yI(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function o(a,c,h){const p=window.grecaptcha;lg(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(wv)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jI().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(h=>{if(!t&&lg(window.grecaptcha))o(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=FI();p.length!==0&&(p+=h),yv(p).then(()=>{o(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function fg(n,e,t,s=!1,o=!1){const a=new WI(n);let c;if(o)c=wv;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function pg(n,e,t,s,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await fg(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await fg(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n,e){const t=Ba(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(fa(a,e??{}))return o;fn(o,"already-initialized")}return t.initialize({options:e})}function HI(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map($n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function GI(n,e,t){const s=rs(n);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,a=Ev(e),{host:c,port:h}=qI(e),p=h===null?"":`:${h}`;s.config.emulator={url:`${a}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),KI()}function Ev(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qI(n){const e=Ev(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const a=o[1];return{host:a,port:mg(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:mg(c)}}}function mg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function KI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,t){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function YI(n,e){return br(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(n,e){return Wa(n,"POST","/v1/accounts:signInWithPassword",di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n,e){return Wa(n,"POST","/v1/accounts:signInWithEmailLink",di(n,e))}async function JI(n,e){return Wa(n,"POST","/v1/accounts:signInWithEmailLink",di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends uh{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new mo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new mo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pg(e,t,"signInWithPassword",QI);case"emailLink":return XI(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pg(e,s,"signUpPassword",YI);case"emailLink":return JI(e,{idToken:t,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n,e){return Wa(n,"POST","/v1/accounts:signInWithIdp",di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="http://localhost";class ii extends uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,a=ih(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new ii(s,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return $i(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,$i(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$i(e,t)}buildRequest(){const e={requestUri:ZI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ns(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tk(n){const e=to(no(n)).link,t=e?to(no(e)).deep_link_id:null,s=to(no(n)).deep_link_id;return(s?to(no(s)).link:null)||s||t||e||n}class ch{constructor(e){var t,s,o,a,c,h;const p=to(no(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(s=p.oobCode)!==null&&s!==void 0?s:null,_=ek((o=p.mode)!==null&&o!==void 0?o:null);de(m&&v&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=tk(e);try{return new ch(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,t){return mo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ch.parseLink(t);return de(s,"argument-error"),mo._fromEmailAndCode(e,s.code,s.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Sv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ro{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ii._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Sr.credential(t,s)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ro{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ro{constructor(){super("twitter.com")}static credential(e,t){return ii._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const a=await Wn._fromIdTokenResponse(e,s,o),c=gg(s);return new Yi({user:a,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=gg(s);return new Yi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function gg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Zn{constructor(e,t,s,o){var a;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new _a(e,t,s,o)}}function Cv(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(n,a,e,s):a})}async function nk(n,e,t=!1){const s=await po(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yi._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(n,e,t=!1){const{auth:s}=n;if(zn(s.app))return Promise.reject(Nr(s));const o="reauthenticate";try{const a=await po(n,Cv(s,o,e,n),t);de(a.idToken,s,"internal-error");const c=lh(a.idToken);de(c,s,"internal-error");const{sub:h}=c;return de(n.uid===h,s,"user-mismatch"),Yi._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,e,t=!1){if(zn(n.app))return Promise.reject(Nr(n));const s="signIn",o=await Cv(n,s,e),a=await Yi._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(a.user),a}async function ik(n,e){return Iv(rs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(n){const e=rs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ok(n,e,t){return zn(n.app)?Promise.reject(Nr(n)):ik(xt(n),is.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&sk(n),s})}function lk(n,e,t,s){return xt(n).onIdTokenChanged(e,t,s)}function ak(n,e,t){return xt(n).beforeAuthStateChanged(e,t)}function uk(n,e,t,s){return xt(n).onAuthStateChanged(e,t,s)}function ck(n){return xt(n).signOut()}const va="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=1e3,hk=10;class Tv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);PI()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tv.type="LOCAL";const fk=Tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rv.type="SESSION";const Nv=Rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,a)),p=await pk(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const m=dh("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const y=_;if(y.data.eventId===m)switch(y.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(y.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function gk(n){kn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function _k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yk(){return xv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebaseLocalStorageDb",wk=1,ya="firebaseLocalStorage",Av="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ga(n,e){return n.transaction([ya],e?"readwrite":"readonly").objectStore(ya)}function Ek(){const n=indexedDB.deleteDatabase(Pv);return new No(n).toPromise()}function Nd(){const n=indexedDB.open(Pv,wk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ya,{keyPath:Av})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ya)?e(s):(s.close(),await Ek(),e(await Nd()))})})}async function _g(n,e,t){const s=Ga(n,!0).put({[Av]:e,value:t});return new No(s).toPromise()}async function Sk(n,e){const t=Ga(n,!1).get(e),s=await new No(t).toPromise();return s===void 0?null:s.value}function vg(n,e){const t=Ga(n,!0).delete(e);return new No(t).toPromise()}const Ck=800,Ik=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Ik)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(yk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new mk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await _g(e,va,"1"),await vg(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>_g(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Sk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Ga(o,!1).getAll();return new No(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const kk=Ov;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(n,e){return e?$n(e):(de(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $i(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rk(n){return Iv(n.auth,new hh(n),n.bypassAuthState)}function Nk(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),rk(t,new hh(n),n.bypassAuthState)}async function xk(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),nk(t,new hh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,s,o,a=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rk;case"linkViaPopup":case"linkViaRedirect":return xk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:fn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new To(2e3,1e4);class Vi extends Dv{constructor(e,t,s,o,a){super(e,t,o,a),this.provider=s,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pk.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="pendingRedirect",ia=new Map;class Ok extends Dv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const s=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(n,e){const t=Mk(e),s=Lk(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function bk(n,e){ia.set(n._key(),e)}function Lk(n){return $n(n._redirectPersistence)}function Mk(n){return ra(Ak,n.config.apiKey,n.name)}async function Fk(n,e,t=!1){if(zn(n.app))return Promise.reject(Nr(n));const s=rs(n),o=Tk(s,e),c=await new Ok(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=10*60*1e3;class Vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!bv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(In(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(yg(e))}saveEventToCache(e){this.cachedEventUids.add(yg(e)),this.lastProcessedEventTime=Date.now()}}function yg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(n,e={}){return br(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wk=/^https?/;async function $k(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zk(n);for(const t of e)try{if(Hk(t))return}catch{}fn(n,"unauthorized-domain")}function Hk(n){const e=Td(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!Wk.test(t))return!1;if(Bk.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new To(3e4,6e4);function wg(){const n=kn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qk(n){return new Promise((e,t)=>{var s,o,a;function c(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),t(In(n,"network-request-failed"))},timeout:Gk.get()})}if(!((o=(s=kn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=kn().gapi)===null||a===void 0)&&a.load)c();else{const h=VI("iframefcb");return kn()[h]=()=>{gapi.load?c():t(In(n,"network-request-failed"))},yv(`${UI()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw sa=null,e})}let sa=null;function Kk(n){return sa=sa||qk(n),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new To(5e3,15e3),Qk="__/auth/iframe",Xk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eT(n){const e=n.config;de(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oh(e,Xk):`https://${n.config.authDomain}/${Qk}`,s={apiKey:e.apiKey,appName:n.name,v:ci},o=Zk.get(n.config.apiHost);o&&(s.eid=o);const a=n._getFrameworks();return a.length&&(s.fw=a.join(",")),`${t}?${ns(s).slice(1)}`}async function tT(n){const e=await Kk(n),t=kn().gapi;return de(t,n,"internal-error"),e.open({where:document.body,url:eT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},s=>new Promise(async(o,a)=>{await s.restyle({setHideOnLeave:!1});const c=In(n,"network-request-failed"),h=kn().setTimeout(()=>{a(c)},Yk.get());function p(){kn().clearTimeout(h),o(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rT=500,iT=600,sT="_blank",oT="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lT(n,e,t,s=rT,o=iT){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},nT),{width:s.toString(),height:o.toString(),top:a,left:c}),m=Nt().toLowerCase();t&&(h=hv(m)?sT:t),cv(m)&&(e=e||oT,p.scrollbars="yes");const v=Object.entries(p).reduce((y,[N,k])=>`${y}${N}=${k},`,"");if(xI(m)&&h!=="_self")return aT(e||"",h),new Eg(null);const _=window.open(e||"",h,v);de(_,n,"popup-blocked");try{_.focus()}catch{}return new Eg(_)}function aT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="__/auth/handler",cT="emulator/auth/handler",dT=encodeURIComponent("fac");async function Sg(n,e,t,s,o,a){de(n.config.authDomain,n,"auth-domain-config-required"),de(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ci,eventId:o};if(e instanceof Sv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",wd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))c[v]=_}if(e instanceof Ro){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const p=await n._getAppCheckToken(),m=p?`#${dT}=${encodeURIComponent(p)}`:"";return`${hT(n)}?${ns(h).slice(1)}${m}`}function hT({config:n}){return n.emulator?oh(n,cT):`https://${n.authDomain}/${uT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=Fk,this._overrideRedirectResult=bk}async _openPopup(e,t,s,o){var a;Yn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Sg(e,t,s,Td(),o);return lT(e,c,dh())}async _openRedirect(e,t,s,o){await this._originValidation(e);const a=await Sg(e,t,s,Td(),o);return gk(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Yn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await tT(e),s=new Vk(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[od];c!==void 0&&t(!!c),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$k(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _v()||dv()||ah()}}const pT=fT;var Cg="@firebase/auth",Ig="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _T(n){ri(new Ar("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;de(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(n)},m=new LI(s,o,a,p);return HI(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ri(new Ar("auth-internal",e=>{const t=rs(e.getProvider("auth").getImmediate());return(s=>new mT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(Cg,Ig,gT(n)),Cn(Cg,Ig,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=5*60,yT=H_("authIdTokenMaxAge")||vT;let kg=null;const wT=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>yT)return;const o=t==null?void 0:t.token;kg!==o&&(kg=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ET(n=rh()){const e=Ba(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$I(n,{popupRedirectResolver:pT,persistence:[kk,fk,Nv]}),s=H_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=wT(a.toString());ak(t,c,()=>c(t.currentUser)),lk(t,h=>c(h))}}const o=B_("auth");return o&&GI(t,`http://${o}`),t}function ST(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}MI({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const a=In("internal-error");a.customData=o,t(a)},s.type="text/javascript",s.charset="UTF-8",ST().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_T("Browser");var Tg={};const Rg="@firebase/database",Ng="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lv="";function CT(n){Lv=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ho(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IT(e)}}catch{}return new kT},ei=Mv("localStorage"),TT=Mv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new th("@firebase/database"),RT=function(){let n=1;return function(){return n++}}(),Fv=function(n){const e=eC(n),t=new QS;t.update(e);const s=t.digest();return Xd.encodeByteArray(s)},xo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xo.apply(null,s):typeof s=="object"?e+=mt(s):e+=s,e+=" "}return e};let io=null,xg=!0;const NT=function(n,e){H(!e,"Can't turn on custom loggers persistently."),Hi.logLevel=Le.VERBOSE,io=Hi.log.bind(Hi)},Ct=function(...n){if(xg===!0&&(xg=!1,io===null&&TT.get("logging_enabled")===!0&&NT()),io){const e=xo.apply(null,n);io(e)}},Po=function(n){return function(...e){Ct(n,...e)}},xd=function(...n){const e="FIREBASE INTERNAL ERROR: "+xo(...n);Hi.error(e)},Qn=function(...n){const e=`FIREBASE FATAL ERROR: ${xo(...n)}`;throw Hi.error(e),new Error(e)},Vt=function(...n){const e="FIREBASE WARNING: "+xo(...n);Hi.warn(e)},xT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},PT=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qi="[MIN_NAME]",si="[MAX_NAME]",ss=function(n,e){if(n===e)return 0;if(n===Qi||e===si)return-1;if(e===Qi||n===si)return 1;{const t=Pg(n),s=Pg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},AT=function(n,e){return n===e?0:n<e?-1:1},Ks=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+mt(e))},fh=function(n){if(typeof n!="object"||n===null)return mt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=mt(e[s]),t+=":",t+=fh(n[e[s]]);return t+="}",t},Vv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(n.substring(o,t)):s.push(n.substring(o,o+e));return s};function jt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const jv=function(n){H(!Uv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,a,c,h,p;n===0?(a=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),s),a=h+s,c=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-s-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(o?1:0),m.reverse();const v=m.join("");let _="";for(p=0;p<64;p+=8){let y=parseInt(v.substr(p,8),2).toString(16);y.length===1&&(y="0"+y),_=_+y}return _.toLowerCase()},OT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const LT=new RegExp("^-?(0*)\\d{1,10}$"),MT=-2147483648,FT=2147483647,Pg=function(n){if(LT.test(n)){const e=Number(n);if(e>=MT&&e<=FT)return e}return null},os=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vt("Exception was thrown by user callback.",t),e},Math.floor(0))}},UT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},so=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class oa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="5",zv="v",Bv="s",Wv="r",$v="f",Hv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gv="ls",qv="p",Pd="ac",Kv="websocket",Yv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,s,o,a=!1,c="",h=!1,p=!1){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xv(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let s;if(e===Kv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Yv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zT(n)&&(t.ns=n.namespace);const o=[];return jt(t,(a,c)=>{o.push(a+"="+c)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.counters_={}}incrementCounter(e,t=1){er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={},ad={};function mh(n){const e=n.toString();return ld[e]||(ld[e]=new BT),ld[e]}function WT(n,e){const t=n.toString();return ad[t]||(ad[t]=e()),ad[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&os(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="start",HT="close",GT="pLPCommand",qT="pRTLPCB",Jv="id",Zv="pw",ey="ser",KT="cb",YT="seg",QT="ts",XT="d",JT="dframe",ty=1870,ny=30,ZT=ty-ny,e1=25e3,t1=3e4;class ji{constructor(e,t,s,o,a,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Po(e),this.stats_=mh(t),this.urlFn=p=>(this.appCheckToken&&(p[Pd]=this.appCheckToken),Xv(t,Yv,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new $T(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(t1)),PT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gh((...a)=>{const[c,h,p,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Ag)this.id=h,this.password=p;else if(c===HT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ag]="t",s[ey]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[KT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zv]=ph,this.transportSessionId&&(s[Bv]=this.transportSessionId),this.lastSessionId&&(s[Gv]=this.lastSessionId),this.applicationId&&(s[qv]=this.applicationId),this.appCheckToken&&(s[Pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hv.test(location.hostname)&&(s[Wv]=$v);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ji.forceAllow_=!0}static forceDisallow(){ji.forceDisallow_=!0}static isAvailable(){return ji.forceAllow_?!0:!ji.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OT()&&!DT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=j_(t),o=Vv(s,ZT);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[JT]="t",s[Jv]=e,s[Zv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=mt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gh{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=RT(),window[GT+this.uniqueCallbackIdentifier]=e,window[qT+this.uniqueCallbackIdentifier]=t,this.myIFrame=gh.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){Ct("frame writing exception"),h.stack&&Ct(h.stack),Ct(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jv]=this.myID,e[Zv]=this.myPW,e[ey]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ny+s.length<=ty;){const c=this.pendingSegs.shift();s=s+"&"+YT+o+"="+c.seg+"&"+QT+o+"="+c.ts+"&"+XT+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(e1)),a=()=>{clearTimeout(o),s()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=16384,r1=45e3;let wa=null;typeof MozWebSocket<"u"?wa=MozWebSocket:typeof WebSocket<"u"&&(wa=WebSocket);class En{constructor(e,t,s,o,a,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Po(this.connId),this.stats_=mh(t),this.connURL=En.connectionURL_(t,c,h,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,a){const c={};return c[zv]=ph,typeof location<"u"&&location.hostname&&Hv.test(location.hostname)&&(c[Wv]=$v),t&&(c[Bv]=t),s&&(c[Gv]=s),o&&(c[Pd]=o),a&&(c[qv]=a),Xv(e,Kv,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let s;K_(),this.mySock=new wa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wa!==null&&!En.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ho(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Vv(t,n1);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(r1))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}En.responsesRequiredToBeHealthy=2;En.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{static get ALL_TRANSPORTS(){return[ji,En]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=En.isAvailable();let s=t&&!En.previouslyFailed();if(e.webSocketOnly&&(t||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[En];else{const o=this.transports_=[];for(const a of go.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}go.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=6e4,s1=5e3,o1=10*1024,l1=100*1024,ud="t",Og="d",a1="s",Dg="r",u1="e",bg="o",Lg="a",Mg="n",Fg="p",c1="h";class d1{constructor(e,t,s,o,a,c,h,p,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Po("c:"+this.id+":"),this.transportManager_=new go(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=so(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>l1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>o1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ud in e){const t=e[ud];t===Lg?this.upgradeIfSecondaryHealthy_():t===Dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ks("t",e),s=Ks("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ks("t",e),s=Ks("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ks(ud,e);if(Og in e){const s=e[Og];if(t===c1){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===a1?this.onConnectionShutdown_(s):t===Dg?this.onReset_(s):t===u1?xd("Server Error: "+s):t===bg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ph!==s&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),so(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(i1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):so(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(s1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!s||s===o[a].context)){o.splice(a,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends iy{static getInstance(){return new Ea}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=32,Vg=768;class Ue{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Oe(){return new Ue("")}function Se(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Or(n){return n.pieces_.length-n.pieceNum_}function ze(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ue(n.pieces_,e)}function sy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function h1(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oy(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ly(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ue(e,0)}function ut(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new Ue(t,0)}function Ie(n){return n.pieceNum_>=n.pieces_.length}function Ft(n,e){const t=Se(n),s=Se(e);if(t===null)return e;if(t===s)return Ft(ze(n),ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _h(n,e){if(Or(n)!==Or(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function un(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Or(n)>Or(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class f1{constructor(e,t){this.errorPrefix_=t,this.parts_=oy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=za(this.parts_[s]);ay(this)}}function p1(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=za(e),ay(n)}function m1(n){const e=n.parts_.pop();n.byteLength_-=za(e),n.parts_.length>0&&(n.byteLength_-=1)}function ay(n){if(n.byteLength_>Vg)throw new Error(n.errorPrefix_+"has a key path longer than "+Vg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ug)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ug+") or object contains a cycle "+Jr(n))}function Jr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends iy{static getInstance(){return new vh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=1e3,g1=60*5*1e3,jg=30*1e3,_1=1.3,v1=3e4,y1="server_kill",zg=3;class qn extends ry{constructor(e,t,s,o,a,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=qn.nextPersistentConnectionId_++,this.log_=Po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=g1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!K_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(mt(a)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new ja,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,s,o){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const a={p:s},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const p=h.d,m=h.s;qn.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&er(e,"w")){const s=Ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=KS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const a=o.s,c=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";o&&(a.q=s,a.t=o),this.sendRequest(c,a)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const a={p:t,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,a){this.initConnection_();const c={p:t,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xd("Unrecognized action received from server: "+mt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>v1&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+qn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(_){H(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:p,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,y]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=y&&y.token,h=new d1(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,N=>{Vt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(y1)},a))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&Vt(_),p())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wd(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(a=>fh(a)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new Ue(e).toString();let o;if(this.listens.has(s)){const a=this.listens.get(s);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){Ct("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zg&&(this.reconnectDelay_=jg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ct("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Lv.replace(/\./g,"-")]=1,Zd()?e["framework.cordova"]=1:q_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ea.getInstance().currentlyOnline();return wd(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ce(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ce(Qi,e),o=new Ce(Qi,t);return this.compare(s,o)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;class uy extends qa{static get __EMPTY_NODE(){return Ql}static set __EMPTY_NODE(e){Ql=e}compare(e,t){return ss(e.name,t.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(si,Ql)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,Ql)}toString(){return".key"}}const Gi=new uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,s,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,t,s,o,a){this.key=e,this.value=t,this.color=s??pt.RED,this.left=o??Ut.EMPTY_NODE,this.right=a??Ut.EMPTY_NODE}copy(e,t,s,o,a){return new pt(e??this.key,t??this.value,s??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const a=s(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class w1{copy(e,t,s,o,a){return this}insert(e,t,s){return new pt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(e,t=Ut.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ut(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}Ut.EMPTY_NODE=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e){return ss(n.name,e.name)}function yh(n,e){return ss(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;function S1(n){Ad=n}const cy=function(n){return typeof n=="number"?"number:"+jv(n):"string:"+n},dy=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&er(e,".sv"),"Priority must be a string or number.")}else H(n===Ad||n.isEmpty(),"priority of unexpected type.");H(n===Ad||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg;class ft{static set __childrenNodeConstructor(e){Bg=e}static get __childrenNodeConstructor(){return Bg}constructor(e,t=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Se(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Se(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(H(s!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=jv(this.value_):e+=this.value_,this.lazyHash_=Fv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=ft.VALUE_TYPE_ORDER.indexOf(t),a=ft.VALUE_TYPE_ORDER.indexOf(s);return H(o>=0,"Unknown leaf type: "+t),H(a>=0,"Unknown leaf type: "+s),o===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hy,fy;function C1(n){hy=n}function I1(n){fy=n}class k1 extends qa{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),a=s.compareTo(o);return a===0?ss(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(si,new ft("[PRIORITY-POST]",fy))}makePost(e,t){const s=hy(e);return new Ce(t,new ft("[PRIORITY-POST]",s))}toString(){return".priority"}}const Je=new k1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=Math.log(2);class R1{constructor(e){const t=a=>parseInt(Math.log(a)/T1,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(n,e,t,s){n.sort(e);const o=function(p,m){const v=m-p;let _,y;if(v===0)return null;if(v===1)return _=n[p],y=t?t(_):_,new pt(y,_.node,pt.BLACK,null,null);{const N=parseInt(v/2,10)+p,k=o(p,N),A=o(N+1,m);return _=n[N],y=t?t(_):_,new pt(y,_.node,pt.BLACK,k,A)}},a=function(p){let m=null,v=null,_=n.length;const y=function(k,A){const D=_-k,F=_;_-=k;const M=o(D+1,F),X=n[D],Z=t?t(X):X;N(new pt(Z,X.node,A,null,M))},N=function(k){m?(m.left=k,m=k):(v=k,m=k)};for(let k=0;k<p.count;++k){const A=p.nextBitIsOne(),D=Math.pow(2,p.count-(k+1));A?y(D,pt.BLACK):(y(D,pt.BLACK),y(D,pt.RED))}return v},c=new R1(n.length),h=a(c);return new Ut(s||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;const Qs={};class Hn{static get Default(){return H(Je,"ChildrenNode.ts has not been loaded"),cd=cd||new Hn({".priority":Qs},{".priority":Je}),cd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ki(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ut?t:null}hasIndex(e){return er(this.indexSet_,e.toString())}addIndex(e,t){H(e!==Gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const a=t.getIterator(Ce.Wrap);let c=a.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let h;o?h=Sa(s,e.getCompare()):h=Qs;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const v=Object.assign({},this.indexes_);return v[p]=h,new Hn(v,m)}addToIndexes(e,t){const s=ha(this.indexes_,(o,a)=>{const c=Ki(this.indexSet_,a);if(H(c,"Missing index implementation for "+a),o===Qs)if(c.isDefinedOn(e.node)){const h=[],p=t.getIterator(Ce.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),Sa(h,c.getCompare())}else return Qs;else{const h=t.get(e.name);let p=o;return h&&(p=p.remove(new Ce(e.name,h))),p.insert(e,e.node)}});return new Hn(s,this.indexSet_)}removeFromIndexes(e,t){const s=ha(this.indexes_,o=>{if(o===Qs)return o;{const a=t.get(e.name);return a?o.remove(new Ce(e.name,a)):o}});return new Hn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class he{static get EMPTY_NODE(){return Xs||(Xs=new he(new Ut(yh),null,Hn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dy(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Xs:t}}getChild(e){const t=Se(e);return t===null?this:this.getImmediateChild(t).getChild(ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ce(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?Xs:this.priorityNode_;return new he(o,c,a)}}updateChild(e,t){const s=Se(e);if(s===null)return t;{H(Se(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(ze(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,a=!0;if(this.forEachChild(Je,(c,h)=>{t[c]=h.val(e),s++,a&&he.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):a=!1}),!e&&a&&o<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cy(this.getPriority().val())+":"),this.forEachChild(Je,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Fv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const a=o.getPredecessorKey(new Ce(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Ce.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ao?-1:0}withIndex(e){if(e===Gi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Je),o=t.getIterator(Je);let a=s.getNext(),c=o.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=o.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Gi?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class N1 extends he{constructor(){super(new Ut(yh),he.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Ao=new N1;Object.defineProperties(Ce,{MIN:{value:new Ce(Qi,he.EMPTY_NODE)},MAX:{value:new Ce(si,Ao)}});uy.__EMPTY_NODE=he.EMPTY_NODE;ft.__childrenNodeConstructor=he;S1(Ao);I1(Ao);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=!0;function vt(n,e=null){if(n===null)return he.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ft(t,vt(e))}if(!(n instanceof Array)&&x1){const t=[];let s=!1;if(jt(n,(c,h)=>{if(c.substring(0,1)!=="."){const p=vt(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ce(c,p)))}}),t.length===0)return he.EMPTY_NODE;const a=Sa(t,E1,c=>c.name,yh);if(s){const c=Sa(t,Je.getCompare());return new he(a,vt(e),new Hn({".priority":c},{".priority":Je}))}else return new he(a,vt(e),Hn.Default)}else{let t=he.EMPTY_NODE;return jt(n,(s,o)=>{if(er(n,s)&&s.substring(0,1)!=="."){const a=vt(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(s,a))}}),t.updatePriority(vt(e))}}C1(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1 extends qa{constructor(e){super(),this.indexPath_=e,H(!Ie(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),a=s.compareTo(o);return a===0?ss(e.name,t.name):a}makePost(e,t){const s=vt(e),o=he.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(t,o)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Ao);return new Ce(si,e)}toString(){return oy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1 extends qa{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ss(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const s=vt(e);return new Ce(t,s)}toString(){return".value"}}const O1=new A1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n){return{type:"value",snapshotNode:n}}function Xi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _o(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function vo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function D1(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.index_=e}updateChild(e,t,s,o,a,c){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(_o(t,h)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Xi(t,s)):c.trackChildChange(vo(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Je,(o,a)=>{t.hasChild(o)||s.trackChildChange(_o(o,a))}),t.isLeafNode()||t.forEachChild(Je,(o,a)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(a)||s.trackChildChange(vo(o,a,c))}else s.trackChildChange(Xi(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?he.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.indexedFilter_=new wh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yo.getStartPost_(e),this.endPost_=yo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,a,c){return this.matches(new Ce(t,s))||(s=he.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,a,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=he.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(he.EMPTY_NODE);const a=this;return t.forEachChild(Je,(c,h)=>{a.matches(new Ce(c,h))||(o=o.updateImmediateChild(c,he.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new yo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,a,c){return this.rangedFilter_.matches(new Ce(t,s))||(s=he.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,a,c):this.fullLimitUpdateChild_(e,t,s,a,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=he.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=he.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(he.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,he.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,a){let c;if(this.reverse_){const _=this.index_.getCompare();c=(y,N)=>_(N,y)}else c=this.index_.getCompare();const h=e;H(h.numChildren()===this.limit_,"");const p=new Ce(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(h.hasChild(t)){const _=h.getImmediateChild(t);let y=o.getChildAfterChild(this.index_,m,this.reverse_);for(;y!=null&&(y.name===t||h.hasChild(y.name));)y=o.getChildAfterChild(this.index_,y,this.reverse_);const N=y==null?1:c(y,p);if(v&&!s.isEmpty()&&N>=0)return a!=null&&a.trackChildChange(vo(t,s,_)),h.updateImmediateChild(t,s);{a!=null&&a.trackChildChange(_o(t,_));const A=h.updateImmediateChild(t,he.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(a!=null&&a.trackChildChange(Xi(y.name,y.node)),A.updateImmediateChild(y.name,y.node)):A}}else return s.isEmpty()?e:v&&c(m,p)>=0?(a!=null&&(a.trackChildChange(_o(m.name,m.node)),a.trackChildChange(Xi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,he.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new Eh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function L1(n){return n.loadsAllData()?new wh(n.getIndex()):n.hasLimit()?new b1(n):new yo(n)}function Wg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Je?t="$priority":n.index_===O1?t="$value":n.index_===Gi?t="$key":(H(n.index_ instanceof P1,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=mt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=mt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+mt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=mt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+mt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $g(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Je&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends ry{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Po("p:rest:"),this.listens_={}}listen(e,t,s,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Ca.getListenId_(e,s),h={};this.listens_[c]=h;const p=Wg(e._queryParams);this.restRequest_(a+".json",p,(m,v)=>{let _=v;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(a,_,!1,s),Ki(this.listens_,c)===h){let y;m?m===401?y="permission_denied":y="rest_error:"+m:y="ok",o(y,null)}})}unlisten(e,t){const s=Ca.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Wg(e._queryParams),s=e._path.toString(),o=new ja;return this.restRequest_(s+".json",t,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ns(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=ho(h.responseText)}catch{Vt("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&Vt("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){return{value:null,children:new Map}}function my(n,e,t){if(Ie(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Se(e);n.children.has(s)||n.children.set(s,Ia());const o=n.children.get(s);e=ze(e),my(o,e,t)}}function Od(n,e,t){n.value!==null?t(e,n.value):F1(n,(s,o)=>{const a=new Ue(e.toString()+"/"+s);Od(o,a,t)})}function F1(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&jt(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=10*1e3,V1=30*1e3,j1=5*60*1e3;class z1{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new U1(e);const s=Hg+(V1-Hg)*Math.random();so(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;jt(e,(o,a)=>{a>0&&er(this.statsToReport_,o)&&(t[o]=a,s=!0)}),s&&this.server_.reportStats(t),so(this.reportStats_.bind(this),Math.floor(Math.random()*2*j1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function gy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ch(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=cn.ACK_USER_WRITE,this.source=gy()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ue(e));return new ka(Oe(),t,this.revert)}}else return H(Se(this.path)===e,"operationForChild called for unrelated child."),new ka(ze(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.source=e,this.path=t,this.type=cn.LISTEN_COMPLETE}operationForChild(e){return Ie(this.path)?new wo(this.source,Oe()):new wo(this.source,ze(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=cn.OVERWRITE}operationForChild(e){return Ie(this.path)?new oi(this.source,Oe(),this.snap.getImmediateChild(e)):new oi(this.source,ze(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=cn.MERGE}operationForChild(e){if(Ie(this.path)){const t=this.children.subtree(new Ue(e));return t.isEmpty()?null:t.value?new oi(this.source,Oe(),t.value):new Eo(this.source,Oe(),t)}else return H(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const t=Se(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W1(n,e,t,s){const o=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(D1(c.childName,c.snapshotNode))}),Js(n,o,"child_removed",e,s,t),Js(n,o,"child_added",e,s,t),Js(n,o,"child_moved",a,s,t),Js(n,o,"child_changed",e,s,t),Js(n,o,"value",e,s,t),o}function Js(n,e,t,s,o,a){const c=s.filter(h=>h.type===t);c.sort((h,p)=>H1(n,h,p)),c.forEach(h=>{const p=$1(n,h,a);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,n.query_))})})}function $1(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function H1(n,e,t){if(e.childName==null||t.childName==null)throw ts("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),o=new Ce(t.childName,t.snapshotNode);return n.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e){return{eventCache:n,serverCache:e}}function oo(n,e,t,s){return Ka(new li(e,t,s),n.serverCache)}function _y(n,e,t,s){return Ka(n.eventCache,new li(e,t,s))}function Dd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ai(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;const G1=()=>(dd||(dd=new Ut(AT)),dd);class He{static fromObject(e){let t=new He(null);return jt(e,(s,o)=>{t=t.set(new Ue(s),o)}),t}constructor(e,t=G1()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Oe(),value:this.value};if(Ie(e))return null;{const s=Se(e),o=this.children.get(s);if(o!==null){const a=o.findRootMostMatchingPathAndValue(ze(e),t);return a!=null?{path:ut(new Ue(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const t=Se(e),s=this.children.get(t);return s!==null?s.subtree(ze(e)):new He(null)}}set(e,t){if(Ie(e))return new He(t,this.children);{const s=Se(e),a=(this.children.get(s)||new He(null)).set(ze(e),t),c=this.children.insert(s,a);return new He(this.value,c)}}remove(e){if(Ie(e))return this.children.isEmpty()?new He(null):new He(null,this.children);{const t=Se(e),s=this.children.get(t);if(s){const o=s.remove(ze(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new He(null):new He(this.value,a)}else return this}}get(e){if(Ie(e))return this.value;{const t=Se(e),s=this.children.get(t);return s?s.get(ze(e)):null}}setTree(e,t){if(Ie(e))return t;{const s=Se(e),a=(this.children.get(s)||new He(null)).setTree(ze(e),t);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new He(this.value,c)}}fold(e){return this.fold_(Oe(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,a)=>{s[o]=a.fold_(ut(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Oe(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(Ie(e))return null;{const a=Se(e),c=this.children.get(a);return c?c.findOnPath_(ze(e),ut(t,a),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Oe(),t)}foreachOnPath_(e,t,s){if(Ie(e))return this;{this.value&&s(t,this.value);const o=Se(e),a=this.children.get(o);return a?a.foreachOnPath_(ze(e),ut(t,o),s):new He(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(ut(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new He(null))}}function lo(n,e,t){if(Ie(e))return new hn(new He(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let a=s.value;const c=Ft(o,e);return a=a.updateChild(c,t),new hn(n.writeTree_.set(o,a))}else{const o=new He(t),a=n.writeTree_.setTree(e,o);return new hn(a)}}}function Gg(n,e,t){let s=n;return jt(t,(o,a)=>{s=lo(s,ut(e,o),a)}),s}function qg(n,e){if(Ie(e))return hn.empty();{const t=n.writeTree_.setTree(e,new He(null));return new hn(t)}}function bd(n,e){return hi(n,e)!=null}function hi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ft(t.path,e)):null}function Kg(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Je,(s,o)=>{e.push(new Ce(s,o))}):n.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new Ce(s,o.value))}),e}function xr(n,e){if(Ie(e))return n;{const t=hi(n,e);return t!=null?new hn(new He(t)):new hn(n.writeTree_.subtree(e))}}function Ld(n){return n.writeTree_.isEmpty()}function Ji(n,e){return vy(Oe(),n.writeTree_,e)}function vy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(H(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):t=vy(ut(n,o),a,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ut(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n,e){return Sy(e,n)}function q1(n,e,t,s,o){H(s>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(n.visibleWrites=lo(n.visibleWrites,e,t)),n.lastWriteId=s}function K1(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Y1(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let o=s.visible,a=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const h=n.allWrites[c];h.visible&&(c>=t&&Q1(h,s.path)?o=!1:un(s.path,h.path)&&(a=!0)),c--}if(o){if(a)return X1(n),!0;if(s.snap)n.visibleWrites=qg(n.visibleWrites,s.path);else{const h=s.children;jt(h,p=>{n.visibleWrites=qg(n.visibleWrites,ut(s.path,p))})}return!0}else return!1}function Q1(n,e){if(n.snap)return un(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&un(ut(n.path,t),e))return!0;return!1}function X1(n){n.visibleWrites=yy(n.allWrites,J1,Oe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function J1(n){return n.visible}function yy(n,e,t){let s=hn.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const c=a.path;let h;if(a.snap)un(t,c)?(h=Ft(t,c),s=lo(s,h,a.snap)):un(c,t)&&(h=Ft(c,t),s=lo(s,Oe(),a.snap.getChild(h)));else if(a.children){if(un(t,c))h=Ft(t,c),s=Gg(s,h,a.children);else if(un(c,t))if(h=Ft(c,t),Ie(h))s=Gg(s,Oe(),a.children);else{const p=Ki(a.children,Se(h));if(p){const m=p.getChild(ze(h));s=lo(s,Oe(),m)}}}else throw ts("WriteRecord should have .snap or .children")}}return s}function wy(n,e,t,s,o){if(!s&&!o){const a=hi(n.visibleWrites,e);if(a!=null)return a;{const c=xr(n.visibleWrites,e);if(Ld(c))return t;if(t==null&&!bd(c,Oe()))return null;{const h=t||he.EMPTY_NODE;return Ji(c,h)}}}else{const a=xr(n.visibleWrites,e);if(!o&&Ld(a))return t;if(!o&&t==null&&!bd(a,Oe()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(un(m.path,e)||un(e,m.path))},h=yy(n.allWrites,c,e),p=t||he.EMPTY_NODE;return Ji(h,p)}}}function Z1(n,e,t){let s=he.EMPTY_NODE;const o=hi(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Je,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(t){const a=xr(n.visibleWrites,e);return t.forEachChild(Je,(c,h)=>{const p=Ji(xr(a,new Ue(c)),h);s=s.updateImmediateChild(c,p)}),Kg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=xr(n.visibleWrites,e);return Kg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function eR(n,e,t,s,o){H(s||o,"Either existingEventSnap or existingServerSnap must exist");const a=ut(e,t);if(bd(n.visibleWrites,a))return null;{const c=xr(n.visibleWrites,a);return Ld(c)?o.getChild(t):Ji(c,o.getChild(t))}}function tR(n,e,t,s){const o=ut(e,t),a=hi(n.visibleWrites,o);if(a!=null)return a;if(s.isCompleteForChild(t)){const c=xr(n.visibleWrites,o);return Ji(c,s.getNode().getImmediateChild(t))}else return null}function nR(n,e){return hi(n.visibleWrites,e)}function rR(n,e,t,s,o,a,c){let h;const p=xr(n.visibleWrites,e),m=hi(p,Oe());if(m!=null)h=m;else if(t!=null)h=Ji(p,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const v=[],_=c.getCompare(),y=a?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let N=y.getNext();for(;N&&v.length<o;)_(N,s)!==0&&v.push(N),N=y.getNext();return v}else return[]}function iR(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function Ta(n,e,t,s){return wy(n.writeTree,n.treePath,e,t,s)}function kh(n,e){return Z1(n.writeTree,n.treePath,e)}function Yg(n,e,t,s){return eR(n.writeTree,n.treePath,e,t,s)}function Ra(n,e){return nR(n.writeTree,ut(n.treePath,e))}function sR(n,e,t,s,o,a){return rR(n.writeTree,n.treePath,e,t,s,o,a)}function Th(n,e,t){return tR(n.writeTree,n.treePath,e,t)}function Ey(n,e){return Sy(ut(n.treePath,e),n.writeTree)}function Sy(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(s,vo(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(s,_o(s,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(s,Xi(s,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(s,vo(s,e.snapshotNode,o.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Cy=new lR;class Rh{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new li(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Th(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ai(this.viewCache_),a=sR(this.writes_,o,t,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){return{filter:n}}function uR(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cR(n,e,t,s,o){const a=new oR;let c,h;if(t.type===cn.OVERWRITE){const m=t;m.source.fromUser?c=Md(n,e,m.path,m.snap,s,o,a):(H(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!Ie(m.path),c=Na(n,e,m.path,m.snap,s,o,h,a))}else if(t.type===cn.MERGE){const m=t;m.source.fromUser?c=hR(n,e,m.path,m.children,s,o,a):(H(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Fd(n,e,m.path,m.children,s,o,h,a))}else if(t.type===cn.ACK_USER_WRITE){const m=t;m.revert?c=mR(n,e,m.path,s,o,a):c=fR(n,e,m.path,m.affectedTree,s,o,a)}else if(t.type===cn.LISTEN_COMPLETE)c=pR(n,e,t.path,s,a);else throw ts("Unknown operation type: "+t.type);const p=a.getChanges();return dR(e,c,p),{viewCache:c,changes:p}}function dR(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Dd(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&t.push(py(Dd(e)))}}function Iy(n,e,t,s,o,a){const c=e.eventCache;if(Ra(s,t)!=null)return e;{let h,p;if(Ie(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ai(e),v=m instanceof he?m:he.EMPTY_NODE,_=kh(s,v);h=n.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const m=Ta(s,ai(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Se(t);if(m===".priority"){H(Or(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const _=Yg(s,t,v,p);_!=null?h=n.filter.updatePriority(v,_):h=c.getNode()}else{const v=ze(t);let _;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const y=Yg(s,t,c.getNode(),p);y!=null?_=c.getNode().getImmediateChild(m).updateChild(v,y):_=c.getNode().getImmediateChild(m)}else _=Th(s,m,e.serverCache);_!=null?h=n.filter.updateChild(c.getNode(),m,_,v,o,a):h=c.getNode()}}return oo(e,h,c.isFullyInitialized()||Ie(t),n.filter.filtersNodes())}}function Na(n,e,t,s,o,a,c,h){const p=e.serverCache;let m;const v=c?n.filter:n.filter.getIndexedFilter();if(Ie(t))m=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(t,s);m=v.updateFullNode(p.getNode(),N,null)}else{const N=Se(t);if(!p.isCompleteForPath(t)&&Or(t)>1)return e;const k=ze(t),D=p.getNode().getImmediateChild(N).updateChild(k,s);N===".priority"?m=v.updatePriority(p.getNode(),D):m=v.updateChild(p.getNode(),N,D,k,Cy,null)}const _=_y(e,m,p.isFullyInitialized()||Ie(t),v.filtersNodes()),y=new Rh(o,_,a);return Iy(n,_,t,o,y,h)}function Md(n,e,t,s,o,a,c){const h=e.eventCache;let p,m;const v=new Rh(o,e,a);if(Ie(t))m=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=oo(e,m,!0,n.filter.filtersNodes());else{const _=Se(t);if(_===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),s),p=oo(e,m,h.isFullyInitialized(),h.isFiltered());else{const y=ze(t),N=h.getNode().getImmediateChild(_);let k;if(Ie(y))k=s;else{const A=v.getCompleteChild(_);A!=null?sy(y)===".priority"&&A.getChild(ly(y)).isEmpty()?k=A:k=A.updateChild(y,s):k=he.EMPTY_NODE}if(N.equals(k))p=e;else{const A=n.filter.updateChild(h.getNode(),_,k,y,v,c);p=oo(e,A,h.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Qg(n,e){return n.eventCache.isCompleteForChild(e)}function hR(n,e,t,s,o,a,c){let h=e;return s.foreach((p,m)=>{const v=ut(t,p);Qg(e,Se(v))&&(h=Md(n,h,v,m,o,a,c))}),s.foreach((p,m)=>{const v=ut(t,p);Qg(e,Se(v))||(h=Md(n,h,v,m,o,a,c))}),h}function Xg(n,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Fd(n,e,t,s,o,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Ie(t)?m=s:m=new He(null).setTree(t,s);const v=e.serverCache.getNode();return m.children.inorderTraversal((_,y)=>{if(v.hasChild(_)){const N=e.serverCache.getNode().getImmediateChild(_),k=Xg(n,N,y);p=Na(n,p,new Ue(_),k,o,a,c,h)}}),m.children.inorderTraversal((_,y)=>{const N=!e.serverCache.isCompleteForChild(_)&&y.value===null;if(!v.hasChild(_)&&!N){const k=e.serverCache.getNode().getImmediateChild(_),A=Xg(n,k,y);p=Na(n,p,new Ue(_),A,o,a,c,h)}}),p}function fR(n,e,t,s,o,a,c){if(Ra(o,t)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ie(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Na(n,e,t,p.getNode().getChild(t),o,a,h,c);if(Ie(t)){let m=new He(null);return p.getNode().forEachChild(Gi,(v,_)=>{m=m.set(new Ue(v),_)}),Fd(n,e,t,m,o,a,h,c)}else return e}else{let m=new He(null);return s.foreach((v,_)=>{const y=ut(t,v);p.isCompleteForPath(y)&&(m=m.set(v,p.getNode().getChild(y)))}),Fd(n,e,t,m,o,a,h,c)}}function pR(n,e,t,s,o){const a=e.serverCache,c=_y(e,a.getNode(),a.isFullyInitialized()||Ie(t),a.isFiltered());return Iy(n,c,t,s,Cy,o)}function mR(n,e,t,s,o,a){let c;if(Ra(s,t)!=null)return e;{const h=new Rh(s,e,o),p=e.eventCache.getNode();let m;if(Ie(t)||Se(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Ta(s,ai(e));else{const _=e.serverCache.getNode();H(_ instanceof he,"serverChildren would be complete if leaf node"),v=kh(s,_)}v=v,m=n.filter.updateFullNode(p,v,a)}else{const v=Se(t);let _=Th(s,v,e.serverCache);_==null&&e.serverCache.isCompleteForChild(v)&&(_=p.getImmediateChild(v)),_!=null?m=n.filter.updateChild(p,v,_,ze(t),h,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(p,v,he.EMPTY_NODE,ze(t),h,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Ta(s,ai(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||Ra(s,Oe())!=null,oo(e,m,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new wh(s.getIndex()),a=L1(s);this.processor_=aR(a);const c=t.serverCache,h=t.eventCache,p=o.updateFullNode(he.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(he.EMPTY_NODE,h.getNode(),null),v=new li(p,c.isFullyInitialized(),o.filtersNodes()),_=new li(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=Ka(_,v),this.eventGenerator_=new B1(this.query_)}get query(){return this.query_}}function _R(n){return n.viewCache_.serverCache.getNode()}function vR(n,e){const t=ai(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ie(e)&&!t.getImmediateChild(Se(e)).isEmpty())?t.getChild(e):null}function Jg(n){return n.eventRegistrations_.length===0}function yR(n,e){n.eventRegistrations_.push(e)}function Zg(n,e,t){const s=[];if(t){H(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const c=n.eventRegistrations_[a];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return s}function e_(n,e,t,s){e.type===cn.MERGE&&e.source.queryId!==null&&(H(ai(n.viewCache_),"We should always have a full cache before handling merges"),H(Dd(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=cR(n.processor_,o,e,t,s);return uR(n.processor_,a.viewCache),H(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,ky(n,a.changes,a.viewCache.eventCache.getNode(),null)}function wR(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Je,(a,c)=>{s.push(Xi(a,c))}),t.isFullyInitialized()&&s.push(py(t.getNode())),ky(n,s,t.getNode(),e)}function ky(n,e,t,s){const o=s?[s]:n.eventRegistrations_;return W1(n.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;class ER{constructor(){this.views=new Map}}function SR(n){H(!xa,"__referenceConstructor has already been defined"),xa=n}function CR(){return H(xa,"Reference.ts has not been loaded"),xa}function IR(n){return n.views.size===0}function Nh(n,e,t,s){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return H(a!=null,"SyncTree gave us an op for an invalid query."),e_(a,e,t,s)}else{let a=[];for(const c of n.views.values())a=a.concat(e_(c,e,t,s));return a}}function kR(n,e,t,s,o){const a=e._queryIdentifier,c=n.views.get(a);if(!c){let h=Ta(t,o?s:null),p=!1;h?p=!0:s instanceof he?(h=kh(t,s),p=!1):(h=he.EMPTY_NODE,p=!1);const m=Ka(new li(h,p,!1),new li(s,o,!1));return new gR(e,m)}return c}function TR(n,e,t,s,o,a){const c=kR(n,e,s,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),yR(c,t),wR(c,t)}function RR(n,e,t,s){const o=e._queryIdentifier,a=[];let c=[];const h=Dr(n);if(o==="default")for(const[p,m]of n.views.entries())c=c.concat(Zg(m,t,s)),Jg(m)&&(n.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=n.views.get(o);p&&(c=c.concat(Zg(p,t,s)),Jg(p)&&(n.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return h&&!Dr(n)&&a.push(new(CR())(e._repo,e._path)),{removed:a,events:c}}function Ty(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function qi(n,e){let t=null;for(const s of n.views.values())t=t||vR(s,e);return t}function Ry(n,e){if(e._queryParams.loadsAllData())return Ya(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ny(n,e){return Ry(n,e)!=null}function Dr(n){return Ya(n)!=null}function Ya(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;function NR(n){H(!Pa,"__referenceConstructor has already been defined"),Pa=n}function xR(){return H(Pa,"Reference.ts has not been loaded"),Pa}let PR=1;class t_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new He(null),this.pendingWriteTree_=iR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xy(n,e,t,s,o){return q1(n.pendingWriteTree_,e,t,s,o),o?Oo(n,new oi(gy(),e,t)):[]}function ti(n,e,t=!1){const s=K1(n.pendingWriteTree_,e);if(Y1(n.pendingWriteTree_,e)){let a=new He(null);return s.snap!=null?a=a.set(Oe(),!0):jt(s.children,c=>{a=a.set(new Ue(c),!0)}),Oo(n,new ka(s.path,a,t))}else return[]}function Qa(n,e,t){return Oo(n,new oi(Sh(),e,t))}function AR(n,e,t){const s=He.fromObject(t);return Oo(n,new Eo(Sh(),e,s))}function OR(n,e){return Oo(n,new wo(Sh(),e))}function DR(n,e,t){const s=Ph(n,t);if(s){const o=Ah(s),a=o.path,c=o.queryId,h=Ft(a,e),p=new wo(Ch(c),h);return Oh(n,a,p)}else return[]}function Ud(n,e,t,s,o=!1){const a=e._path,c=n.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||Ny(c,e))){const p=RR(c,e,t,s);IR(c)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=p.removed;if(h=p.events,!o){const v=m.findIndex(y=>y._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(a,(y,N)=>Dr(N));if(v&&!_){const y=n.syncPointTree_.subtree(a);if(!y.isEmpty()){const N=MR(y);for(let k=0;k<N.length;++k){const A=N[k],D=A.query,F=Oy(n,A);n.listenProvider_.startListening(ao(D),Aa(n,D),F.hashFn,F.onComplete)}}}!_&&m.length>0&&!s&&(v?n.listenProvider_.stopListening(ao(e),null):m.forEach(y=>{const N=n.queryToTagMap.get(Xa(y));n.listenProvider_.stopListening(ao(y),N)}))}FR(n,m)}return h}function bR(n,e,t,s){const o=Ph(n,s);if(o!=null){const a=Ah(o),c=a.path,h=a.queryId,p=Ft(c,e),m=new oi(Ch(h),p,t);return Oh(n,c,m)}else return[]}function LR(n,e,t,s){const o=Ph(n,s);if(o){const a=Ah(o),c=a.path,h=a.queryId,p=Ft(c,e),m=He.fromObject(t),v=new Eo(Ch(h),p,m);return Oh(n,c,v)}else return[]}function n_(n,e,t,s=!1){const o=e._path;let a=null,c=!1;n.syncPointTree_.foreachOnPath(o,(y,N)=>{const k=Ft(y,o);a=a||qi(N,k),c=c||Dr(N)});let h=n.syncPointTree_.get(o);h?(c=c||Dr(h),a=a||qi(h,Oe())):(h=new ER,n.syncPointTree_=n.syncPointTree_.set(o,h));let p;a!=null?p=!0:(p=!1,a=he.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((N,k)=>{const A=qi(k,Oe());A&&(a=a.updateImmediateChild(N,A))}));const m=Ny(h,e);if(!m&&!e._queryParams.loadsAllData()){const y=Xa(e);H(!n.queryToTagMap.has(y),"View does not exist, but we have a tag");const N=UR();n.queryToTagMap.set(y,N),n.tagToQueryMap.set(N,y)}const v=Ih(n.pendingWriteTree_,o);let _=TR(h,e,t,v,a,p);if(!m&&!c&&!s){const y=Ry(h,e);_=_.concat(VR(n,e,y))}return _}function xh(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,h)=>{const p=Ft(c,e),m=qi(h,p);if(m)return m});return wy(o,e,a,t,!0)}function Oo(n,e){return Py(e,n.syncPointTree_,null,Ih(n.pendingWriteTree_,Oe()))}function Py(n,e,t,s){if(Ie(n.path))return Ay(n,e,t,s);{const o=e.get(Oe());t==null&&o!=null&&(t=qi(o,Oe()));let a=[];const c=Se(n.path),h=n.operationForChild(c),p=e.children.get(c);if(p&&h){const m=t?t.getImmediateChild(c):null,v=Ey(s,c);a=a.concat(Py(h,p,m,v))}return o&&(a=a.concat(Nh(o,n,s,t))),a}}function Ay(n,e,t,s){const o=e.get(Oe());t==null&&o!=null&&(t=qi(o,Oe()));let a=[];return e.children.inorderTraversal((c,h)=>{const p=t?t.getImmediateChild(c):null,m=Ey(s,c),v=n.operationForChild(c);v&&(a=a.concat(Ay(v,h,p,m)))}),o&&(a=a.concat(Nh(o,n,s,t))),a}function Oy(n,e){const t=e.query,s=Aa(n,t);return{hashFn:()=>(_R(e)||he.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?DR(n,t._path,s):OR(n,t._path);{const a=bT(o,t);return Ud(n,t,null,a)}}}}function Aa(n,e){const t=Xa(e);return n.queryToTagMap.get(t)}function Xa(n){return n._path.toString()+"$"+n._queryIdentifier}function Ph(n,e){return n.tagToQueryMap.get(e)}function Ah(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ue(n.substr(0,e))}}function Oh(n,e,t){const s=n.syncPointTree_.get(e);H(s,"Missing sync point for query tag that we're tracking");const o=Ih(n.pendingWriteTree_,e);return Nh(s,t,o,null)}function MR(n){return n.fold((e,t,s)=>{if(t&&Dr(t))return[Ya(t)];{let o=[];return t&&(o=Ty(t)),jt(s,(a,c)=>{o=o.concat(c)}),o}})}function ao(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xR())(n._repo,n._path):n}function FR(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Xa(s),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function UR(){return PR++}function VR(n,e,t){const s=e._path,o=Aa(n,e),a=Oy(n,t),c=n.listenProvider_.startListening(ao(e),o,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(s);if(o)H(!Dr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,v,_)=>{if(!Ie(m)&&v&&Dr(v))return[Ya(v).query];{let y=[];return v&&(y=y.concat(Ty(v).map(N=>N.query))),jt(_,(N,k)=>{y=y.concat(k)}),y}});for(let m=0;m<p.length;++m){const v=p[m];n.listenProvider_.stopListening(ao(v),Aa(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Dh(t)}node(){return this.node_}}class bh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ut(this.path_,e);return new bh(this.syncTree_,t)}node(){return xh(this.syncTree_,this.path_)}}const jR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},r_=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return BR(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},BR=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&H(!1,"Unexpected increment value: "+s);const o=e.node();if(H(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},WR=function(n,e,t,s){return Lh(e,new bh(t,n),s)},Dy=function(n,e,t){return Lh(n,new Dh(e),t)};function Lh(n,e,t){const s=n.getPriority().val(),o=r_(s,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,h=r_(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new ft(h,vt(o)):n}else{const c=n;return a=c,o!==c.getPriority().val()&&(a=a.updatePriority(new ft(o))),c.forEachChild(Je,(h,p)=>{const m=Lh(p,e.getImmediateChild(h),t);m!==p&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Fh(n,e){let t=e instanceof Ue?e:new Ue(e),s=n,o=Se(t);for(;o!==null;){const a=Ki(s.node.children,o)||{children:{},childCount:0};s=new Mh(o,s,a),t=ze(t),o=Se(t)}return s}function ls(n){return n.node.value}function by(n,e){n.node.value=e,Vd(n)}function Ly(n){return n.node.childCount>0}function $R(n){return ls(n)===void 0&&!Ly(n)}function Ja(n,e){jt(n.node.children,(t,s)=>{e(new Mh(t,n,s))})}function My(n,e,t,s){t&&!s&&e(n),Ja(n,o=>{My(o,e,!0,s)})}function HR(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Do(n){return new Ue(n.parent===null?n.name:Do(n.parent)+"/"+n.name)}function Vd(n){n.parent!==null&&GR(n.parent,n.name,n)}function GR(n,e,t){const s=$R(t),o=er(n.node.children,e);s&&o?(delete n.node.children[e],n.node.childCount--,Vd(n)):!s&&!o&&(n.node.children[e]=t.node,n.node.childCount++,Vd(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=/[\[\].#$\/\u0000-\u001F\u007F]/,KR=/[\[\].#$\u0000-\u001F\u007F]/,hd=10*1024*1024,Fy=function(n){return typeof n=="string"&&n.length!==0&&!qR.test(n)},Uy=function(n){return typeof n=="string"&&n.length!==0&&!KR.test(n)},YR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uy(n)},QR=function(n,e,t,s){Uh(eh(n,"value"),e,t)},Uh=function(n,e,t){const s=t instanceof Ue?new f1(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Jr(s));if(typeof e=="function")throw new Error(n+"contains a function "+Jr(s)+" with contents = "+e.toString());if(Uv(e))throw new Error(n+"contains "+e.toString()+" "+Jr(s));if(typeof e=="string"&&e.length>hd/3&&za(e)>hd)throw new Error(n+"contains a string greater than "+hd+" utf8 bytes "+Jr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(jt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Fy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Jr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);p1(s,c),Uh(n,h,s),m1(s)}),o&&a)throw new Error(n+' contains ".value" child '+Jr(s)+" in addition to actual children.")}},Vy=function(n,e,t,s){if(!Uy(t))throw new Error(eh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XR=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vy(n,e,t)},JR=function(n,e){if(Se(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ZR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!YR(t))throw new Error(eh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vh(n,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],a=o.getPath();t!==null&&!_h(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function jy(n,e,t){Vh(n,t),zy(n,s=>_h(s,e))}function Xn(n,e,t){Vh(n,t),zy(n,s=>un(s,e)||un(e,s))}function zy(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const o=n.eventLists_[s];if(o){const a=o.path;e(a)?(tN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function tN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();io&&Ct("event: "+t.toString()),os(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="repo_interrupt",rN=25;class iN{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ia(),this.transactionQueueTree_=new Mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sN(n,e,t){if(n.stats_=mh(n.repoInfo_),n.forceRestClient_||UT())n.server_=new Ca(n.repoInfo_,(s,o,a,c)=>{i_(n,s,o,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>s_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new qn(n.repoInfo_,e,(s,o,a,c)=>{i_(n,s,o,a,c)},s=>{s_(n,s)},s=>{lN(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=WT(n.repoInfo_,()=>new z1(n.stats_,n.server_)),n.infoData_=new M1,n.infoSyncTree_=new t_({startListening:(s,o,a,c)=>{let h=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(h=Qa(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),zh(n,"connected",!1),n.serverSyncTree_=new t_({startListening:(s,o,a,c)=>(n.server_.listen(s,a,o,(h,p)=>{const m=c(h,p);Xn(n.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{n.server_.unlisten(s,o)}})}function oN(n){const t=n.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jh(n){return jR({timestamp:oN(n)})}function i_(n,e,t,s,o){n.dataUpdateCount++;const a=new Ue(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const p=ha(t,m=>vt(m));c=LR(n.serverSyncTree_,a,p,o)}else{const p=vt(t);c=bR(n.serverSyncTree_,a,p,o)}else if(s){const p=ha(t,m=>vt(m));c=AR(n.serverSyncTree_,a,p)}else{const p=vt(t);c=Qa(n.serverSyncTree_,a,p)}let h=a;c.length>0&&(h=Za(n,a)),Xn(n.eventQueue_,h,c)}function s_(n,e){zh(n,"connected",e),e===!1&&uN(n)}function lN(n,e){jt(e,(t,s)=>{zh(n,t,s)})}function zh(n,e,t){const s=new Ue("/.info/"+e),o=vt(t);n.infoData_.updateSnapshot(s,o);const a=Qa(n.infoSyncTree_,s,o);Xn(n.eventQueue_,s,a)}function By(n){return n.nextWriteId_++}function aN(n,e,t,s,o){Bh(n,"set",{path:e.toString(),value:t,priority:s});const a=jh(n),c=vt(t,s),h=xh(n.serverSyncTree_,e),p=Dy(c,h,a),m=By(n),v=xy(n.serverSyncTree_,e,p,m,!0);Vh(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(y,N)=>{const k=y==="ok";k||Vt("set at "+e+" failed: "+y);const A=ti(n.serverSyncTree_,m,!k);Xn(n.eventQueue_,e,A),fN(n,o,y,N)});const _=qy(n,e);Za(n,_),Xn(n.eventQueue_,_,[])}function uN(n){Bh(n,"onDisconnectEvents");const e=jh(n),t=Ia();Od(n.onDisconnect_,Oe(),(o,a)=>{const c=WR(o,a,n.serverSyncTree_,e);my(t,o,c)});let s=[];Od(t,Oe(),(o,a)=>{s=s.concat(Qa(n.serverSyncTree_,o,a));const c=qy(n,o);Za(n,c)}),n.onDisconnect_=Ia(),Xn(n.eventQueue_,Oe(),s)}function cN(n,e,t){let s;Se(e._path)===".info"?s=n_(n.infoSyncTree_,e,t):s=n_(n.serverSyncTree_,e,t),jy(n.eventQueue_,e._path,s)}function dN(n,e,t){let s;Se(e._path)===".info"?s=Ud(n.infoSyncTree_,e,t):s=Ud(n.serverSyncTree_,e,t),jy(n.eventQueue_,e._path,s)}function hN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(nN)}function Bh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ct(t,...e)}function fN(n,e,t,s){e&&os(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;s&&(a+=": "+s);const c=new Error(a);c.code=o,e(c)}})}function Wy(n,e,t){return xh(n.serverSyncTree_,e,t)||he.EMPTY_NODE}function Wh(n,e=n.transactionQueueTree_){if(e||eu(n,e),ls(e)){const t=Hy(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&pN(n,Do(e),t)}else Ly(e)&&Ja(e,t=>{Wh(n,t)})}function pN(n,e,t){const s=t.map(m=>m.currentWriteId),o=Wy(n,e,s);let a=o;const c=o.hash();for(let m=0;m<t.length;m++){const v=t[m];H(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const _=Ft(e,v.path);a=a.updateChild(_,v.currentOutputSnapshotRaw)}const h=a.val(!0),p=e;n.server_.put(p.toString(),h,m=>{Bh(n,"transaction put response",{path:p.toString(),status:m});let v=[];if(m==="ok"){const _=[];for(let y=0;y<t.length;y++)t[y].status=2,v=v.concat(ti(n.serverSyncTree_,t[y].currentWriteId)),t[y].onComplete&&_.push(()=>t[y].onComplete(null,!0,t[y].currentOutputSnapshotResolved)),t[y].unwatcher();eu(n,Fh(n.transactionQueueTree_,e)),Wh(n,n.transactionQueueTree_),Xn(n.eventQueue_,e,v);for(let y=0;y<_.length;y++)os(_[y])}else{if(m==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{Vt("transaction at "+p.toString()+" failed: "+m);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=m}Za(n,e)}},c)}function Za(n,e){const t=$y(n,e),s=Do(t),o=Hy(n,t);return mN(n,o,s),s}function mN(n,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=Ft(t,p.path);let v=!1,_;if(H(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,_=p.abortReason,o=o.concat(ti(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=rN)v=!0,_="maxretry",o=o.concat(ti(n.serverSyncTree_,p.currentWriteId,!0));else{const y=Wy(n,p.path,c);p.currentInputSnapshot=y;const N=e[h].update(y.val());if(N!==void 0){Uh("transaction failed: Data returned ",N,p.path);let k=vt(N);typeof N=="object"&&N!=null&&er(N,".priority")||(k=k.updatePriority(y.getPriority()));const D=p.currentWriteId,F=jh(n),M=Dy(k,y,F);p.currentOutputSnapshotRaw=k,p.currentOutputSnapshotResolved=M,p.currentWriteId=By(n),c.splice(c.indexOf(D),1),o=o.concat(xy(n.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(ti(n.serverSyncTree_,D,!0))}else v=!0,_="nodata",o=o.concat(ti(n.serverSyncTree_,p.currentWriteId,!0))}Xn(n.eventQueue_,t,o),o=[],v&&(e[h].status=2,function(y){setTimeout(y,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}eu(n,n.transactionQueueTree_);for(let h=0;h<s.length;h++)os(s[h]);Wh(n,n.transactionQueueTree_)}function $y(n,e){let t,s=n.transactionQueueTree_;for(t=Se(e);t!==null&&ls(s)===void 0;)s=Fh(s,t),e=ze(e),t=Se(e);return s}function Hy(n,e){const t=[];return Gy(n,e,t),t.sort((s,o)=>s.order-o.order),t}function Gy(n,e,t){const s=ls(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Ja(e,o=>{Gy(n,o,t)})}function eu(n,e){const t=ls(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,by(e,t.length>0?t:void 0)}Ja(e,s=>{eu(n,s)})}function qy(n,e){const t=Do($y(n,e)),s=Fh(n.transactionQueueTree_,e);return HR(s,o=>{fd(n,o)}),fd(n,s),My(s,o=>{fd(n,o)}),t}function fd(n,e){const t=ls(e);if(t){const s=[];let o=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(H(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(H(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(ti(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?by(e,void 0):t.length=a+1,Xn(n.eventQueue_,Do(e),o);for(let c=0;c<s.length;c++)os(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function _N(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vt(`Invalid query segment '${t}' in query '${n}'`)}return e}const o_=function(n,e){const t=vN(n),s=t.namespace;t.domain==="firebase.com"&&Qn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xT();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qv(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new Ue(t.pathString)}},vN=function(n){let e="",t="",s="",o="",a="",c=!0,h="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(v,_)),v<_&&(o=gN(n.substring(v,_)));const y=_N(n.substring(Math.min(n.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const N=e.slice(0,m);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const k=e.indexOf(".");s=e.substring(0,k).toLowerCase(),t=e.substring(k+1),a=s}"ns"in y&&(a=y.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:h,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+mt(this.snapshot.exportVal())}}class wN{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return Ie(this._path)?null:sy(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=$g(this._queryParams),t=fh(e);return t==="{}"?"default":t}get _queryObject(){return $g(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof $h))return!1;const t=this._repo===e._repo,s=_h(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+h1(this._path)}}class Lr extends $h{constructor(e,t){super(e,t,new Eh,!1)}get parent(){const e=ly(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oa{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ue(e),s=zd(this.ref,e);return new Oa(this._node.getChild(t),s,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Oa(o,zd(this.ref,s),Je)))}hasChild(e){const t=new Ue(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jd(n,e){return n=xt(n),n._checkNotDeleted("ref"),e!==void 0?zd(n._root,e):n._root}function zd(n,e){return n=xt(n),Se(n._path)===null?XR("child","path",e):Vy("child","path",e),new Lr(n._repo,ut(n._path,e))}function SN(n,e){n=xt(n),JR("set",n._path),QR("set",e,n._path);const t=new ja;return aN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Hh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new yN("value",this,new Oa(e.snapshotNode,new Lr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wN(this,e,t):null}matches(e){return e instanceof Hh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CN(n,e,t,s,o){const a=new EN(t,void 0),c=new Hh(a);return cN(n._repo,n,c),()=>dN(n._repo,n,c)}function IN(n,e,t,s){return CN(n,"value",e)}SR(Lr);NR(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="FIREBASE_DATABASE_EMULATOR_HOST",Bd={};let TN=!1;function RN(n,e,t,s){n.repoInfo_=new Qv(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function NN(n,e,t,s,o){let a=s||n.options.databaseURL;a===void 0&&(n.options.projectId||Qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=o_(a,o),h=c.repoInfo,p;typeof process<"u"&&Tg&&(p=Tg[kN]),p?(a=`http://${p}?ns=${h.namespace}`,c=o_(a,o),h=c.repoInfo):c.repoInfo.secure;const m=new jT(n.name,n.options,e);ZR("Invalid Firebase Database URL",c),Ie(c.path)||Qn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=PN(h,n,m,new VT(n.name,t));return new AN(v,n)}function xN(n,e){const t=Bd[e];(!t||t[n.key]!==n)&&Qn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),hN(n),delete t[n.key]}function PN(n,e,t,s){let o=Bd[e.name];o||(o={},Bd[e.name]=o);let a=o[n.toURLString()];return a&&Qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new iN(n,TN,t,s),o[n.toURLString()]=a,a}class AN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qn("Cannot call "+e+" on a deleted database.")}}function ON(n=rh(),e){const t=Ba(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=W_("database");s&&DN(t,...s)}return t}function DN(n,e,t,s={}){n=xt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Qn("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let a;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new oa(oa.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:G_(s.mockUserToken,n.app.options.projectId);a=new oa(c)}RN(o,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(n){CT(ci),ri(new Ar("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return NN(s,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Cn(Rg,Ng,n),Cn(Rg,Ng,"esm2017")}qn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};qn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};bN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebasestorage.googleapis.com",LN="storageBucket",MN=2*60*1e3,FN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Zn{constructor(e,t,s=0){super(pd(e),`Firebase Storage: ${t} (${pd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Rn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Rn||(Rn={}));function pd(n){return"storage/"+n}function UN(){const n="An unknown error occurred, please check the error payload for server response.";return new xn(Rn.UNKNOWN,n)}function VN(){return new xn(Rn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jN(){return new xn(Rn.CANCELED,"User canceled the upload/download.")}function zN(n){return new xn(Rn.INVALID_URL,"Invalid URL '"+n+"'.")}function BN(n){return new xn(Rn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function l_(n){return new xn(Rn.INVALID_ARGUMENT,n)}function Yy(){return new xn(Rn.APP_DELETED,"The Firebase app was deleted.")}function WN(n){return new xn(Rn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=dn.makeFromUrl(e,t)}catch{return new dn(e,"")}if(s.path==="")return s;throw BN(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function a(Z){Z.path.charAt(Z.path.length-1)==="/"&&(Z.path_=Z.path_.slice(0,-1))}const c="(/(.*))?$",h=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function m(Z){Z.path_=decodeURIComponent(Z.path)}const v="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",N=new RegExp(`^https?://${_}/${v}/b/${o}/o${y}`,"i"),k={bucket:1,path:3},A=t===Ky?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",F=new RegExp(`^https?://${A}/${o}/${D}`,"i"),X=[{regex:h,indices:p,postModify:a},{regex:N,indices:k,postModify:m},{regex:F,indices:{bucket:1,path:2},postModify:m}];for(let Z=0;Z<X.length;Z++){const ie=X[Z],W=ie.regex.exec(e);if(W){const fe=W[ie.indices.bucket];let ce=W[ie.indices.path];ce||(ce=""),s=new dn(fe,ce),ie.postModify(s);break}}if(s==null)throw zN(e);return s}}class $N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n,e,t){let s=1,o=null,a=null,c=!1,h=0;function p(){return h===2}let m=!1;function v(...D){m||(m=!0,e.apply(null,D))}function _(D){o=setTimeout(()=>{o=null,n(N,p())},D)}function y(){a&&clearTimeout(a)}function N(D,...F){if(m){y();return}if(D){y(),v.call(null,D,...F);return}if(p()||c){y(),v.call(null,D,...F);return}s<64&&(s*=2);let X;h===1?(h=2,X=0):X=(s+Math.random())*1e3,_(X)}let k=!1;function A(D){k||(k=!0,y(),!m&&(o!==null?(D||(h=2),clearTimeout(o),_(0)):D||(h=1)))}return _(0),a=setTimeout(()=>{c=!0,A(!0)},t),A}function GN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(n){return n!==void 0}function a_(n,e,t,s){if(s<e)throw l_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw l_(`Invalid value for '${n}'. Expected ${t} or less.`)}function KN(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Da;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Da||(Da={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t,s,o,a,c,h,p,m,v,_,y=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=h,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=_,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,k)=>{this.resolve_=N,this.reject_=k,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Jl(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=h=>{const p=h.loaded,m=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const h=a.getErrorCode()===Da.NO_ERROR,p=a.getStatus();if(!h||YN(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Da.ABORT;s(!1,new Jl(!1,null,v));return}const m=this.successCodes_.indexOf(p)!==-1;s(!0,new Jl(m,a))})},t=(s,o)=>{const a=this.resolve_,c=this.reject_,h=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(h,h.getResponse());qN(p)?a(p):a()}catch(p){c(p)}else if(h!==null){const p=UN();p.serverResponse=h.getErrorText(),this.errorCallback_?c(this.errorCallback_(h,p)):c(p)}else if(o.canceled){const p=this.appDelete_?Yy():jN();c(p)}else{const p=VN();c(p)}};this.canceled_?t(!1,new Jl(!1,null,!0)):this.backoffId_=HN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jl{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function XN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ex(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tx(n,e,t,s,o,a,c=!0){const h=KN(n.urlParams),p=n.url+h,m=Object.assign({},n.headers);return ZN(m,e),XN(m,t),JN(m,a),ex(m,s),new QN(p,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function rx(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this._service=e,t instanceof dn?this._location=t:this._location=dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ba(e,t)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rx(this._location.path)}get storage(){return this._service}get parent(){const e=nx(this._location.path);if(e===null)return null;const t=new dn(this._location.bucket,e);return new ba(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw WN(e)}}function u_(n,e){const t=e==null?void 0:e[LN];return t==null?null:dn.makeFromBucketSpec(t,n)}function ix(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=s;o&&(n._overrideAuthToken=typeof o=="string"?o:G_(o,n.app.options.projectId))}class sx{constructor(e,t,s,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=Ky,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MN,this._maxUploadRetryTime=FN,this._requests=new Set,o!=null?this._bucket=dn.makeFromBucketSpec(o,this._host):this._bucket=u_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=u_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ba(this,e)}_makeRequest(e,t,s,o,a=!0){if(this._deleted)return new $N(Yy());{const c=tx(e,this._appId,s,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const c_="@firebase/storage",d_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="storage";function ox(n=rh(),e){n=xt(n);const s=Ba(n,Qy).getImmediate({identifier:e}),o=W_("storage");return o&&lx(s,...o),s}function lx(n,e,t,s={}){ix(n,e,t,s)}function ax(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new sx(t,s,o,e,ci)}function ux(){ri(new Ar(Qy,ax,"PUBLIC").setMultipleInstances(!0)),Cn(c_,d_,""),Cn(c_,d_,"esm2017")}ux();const cx={apiKey:"AIzaSyAsgZsVdugSxaPJj-8VnSqmmjGfaVcI7_U",authDomain:"drivers-questionnaire.firebaseapp.com",databaseURL:"https://drivers-questionnaire-default-rtdb.firebaseio.com/",projectId:"drivers-questionnaire",storageBucket:"drivers-questionnaire.appspot.com",messagingSenderId:"321432155998",appId:"1:321432155998:web:77708e3f2f4aefb8b941cf"},Gh=J_(cx),dx=ET(Gh),hx=ON(Gh),fx=ox(Gh),Zr={auth:dx,driversBase:hx,storage:fx},{auth:px}=Zr,mx=()=>{const[n,e]=b.useState(""),[t,s]=b.useState(""),[o,a]=b.useState({}),[c,h]=b.useState(null),p=Gd(),m=()=>{const _={};return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(_.email="Введите корректный email."):_.email="Введите email.",t?t.length<6?_.password="Пароль должен быть не менее 6 символов.":/[A-Z]/.test(t)?/[0-9]/.test(t)||(_.password="Пароль должен содержать хотя бы одну цифру."):_.password="Пароль должен содержать хотя бы одну заглавную букву.":_.password="Введите пароль.",a(_),Object.keys(_).length===0},v=async _=>{if(_.preventDefault(),h(null),!!m())try{await ok(px,n,t),p("/drivers")}catch(y){h("Ошибка входа: "+y.message)}};return L.jsx("section",{className:"d-flex align-items-center justify-content-center min-vh-100 bg-light login-form",children:L.jsxs("div",{className:"card p-4 shadow",style:{maxWidth:"400px",width:"100%"},children:[L.jsx("h1",{className:"text-center mb-4",children:"Вход"}),L.jsxs("form",{onSubmit:v,children:[L.jsxs("div",{className:"mb-3",children:[L.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),L.jsx("input",{id:"email",name:"email",type:"email",className:`form-control ${o.email?"is-invalid":""}`,placeholder:"Введите ваш email",value:n,onChange:_=>e(_.target.value)}),o.email&&L.jsx("div",{className:"invalid-feedback",children:o.email})]}),L.jsxs("div",{className:"mb-3",children:[L.jsx("label",{htmlFor:"password",className:"form-label",children:"Пароль"}),L.jsx("input",{id:"password",name:"password",type:"password",className:`form-control ${o.password?"is-invalid":""}`,placeholder:"Введите ваш пароль",value:t,onChange:_=>s(_.target.value)}),o.password&&L.jsx("div",{className:"invalid-feedback",children:o.password})]}),c&&L.jsx("div",{className:"alert alert-danger text-center",role:"alert",children:c}),L.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Войти"})]})]})})};var bo=n=>n.type==="checkbox",ni=n=>n instanceof Date,Rt=n=>n==null;const Xy=n=>typeof n=="object";var rt=n=>!Rt(n)&&!Array.isArray(n)&&Xy(n)&&!ni(n),gx=n=>rt(n)&&n.target?bo(n.target)?n.target.checked:n.target.value:n,_x=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,vx=(n,e)=>n.has(_x(e)),yx=n=>{const e=n.constructor&&n.constructor.prototype;return rt(e)&&e.hasOwnProperty("isPrototypeOf")},qh=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Jt(n){let e;const t=Array.isArray(n),s=typeof FileList<"u"?n instanceof FileList:!1;if(n instanceof Date)e=new Date(n);else if(n instanceof Set)e=new Set(n);else if(!(qh&&(n instanceof Blob||s))&&(t||rt(n)))if(e=t?[]:{},!t&&!yx(n))e=n;else for(const o in n)n.hasOwnProperty(o)&&(e[o]=Jt(n[o]));else return n;return e}var tu=n=>Array.isArray(n)?n.filter(Boolean):[],st=n=>n===void 0,te=(n,e,t)=>{if(!e||!rt(n))return t;const s=tu(e.split(/[,[\].]+?/)).reduce((o,a)=>Rt(o)?o:o[a],n);return st(s)||s===n?st(n[e])?t:n[e]:s},yn=n=>typeof n=="boolean",Kh=n=>/^\w*$/.test(n),Jy=n=>tu(n.replace(/["|']|\]/g,"").split(/\.|\[/)),$e=(n,e,t)=>{let s=-1;const o=Kh(e)?[e]:Jy(e),a=o.length,c=a-1;for(;++s<a;){const h=o[s];let p=t;if(s!==c){const m=n[h];p=rt(m)||Array.isArray(m)?m:isNaN(+o[s+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;n[h]=p,n=n[h]}return n};const h_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},an={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},jn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var wx=(n,e,t,s=!0)=>{const o={defaultValues:e._defaultValues};for(const a in n)Object.defineProperty(o,a,{get:()=>{const c=a;return e._proxyFormState[c]!==an.all&&(e._proxyFormState[c]=!s||an.all),n[c]}});return o},Mt=n=>rt(n)&&!Object.keys(n).length,Ex=(n,e,t,s)=>{t(n);const{name:o,...a}=n;return Mt(a)||Object.keys(a).length>=Object.keys(e).length||Object.keys(a).find(c=>e[c]===an.all)},la=n=>Array.isArray(n)?n:[n];function Sx(n){const e=Zt.useRef(n);e.current=n,Zt.useEffect(()=>{const t=!n.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{t&&t.unsubscribe()}},[n.disabled])}var Sn=n=>typeof n=="string",Cx=(n,e,t,s,o)=>Sn(n)?(s&&e.watch.add(n),te(t,n,o)):Array.isArray(n)?n.map(a=>(s&&e.watch.add(a),te(t,a))):(s&&(e.watchAll=!0),t),Ix=(n,e,t,s,o)=>e?{...t[n],types:{...t[n]&&t[n].types?t[n].types:{},[s]:o||!0}}:{},f_=n=>({isOnSubmit:!n||n===an.onSubmit,isOnBlur:n===an.onBlur,isOnChange:n===an.onChange,isOnAll:n===an.all,isOnTouch:n===an.onTouched}),p_=(n,e,t)=>!t&&(e.watchAll||e.watch.has(n)||[...e.watch].some(s=>n.startsWith(s)&&/^\.\w+/.test(n.slice(s.length))));const uo=(n,e,t,s)=>{for(const o of t||Object.keys(n)){const a=te(n,o);if(a){const{_f:c,...h}=a;if(c){if(c.refs&&c.refs[0]&&e(c.refs[0],o)&&!s)return!0;if(c.ref&&e(c.ref,c.name)&&!s)return!0;if(uo(h,e))break}else if(rt(h)&&uo(h,e))break}}};var kx=(n,e,t)=>{const s=la(te(n,t));return $e(s,"root",e[t]),$e(n,t,s),n},Yh=n=>n.type==="file",wn=n=>typeof n=="function",La=n=>{if(!qh)return!1;const e=n?n.ownerDocument:0;return n instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},aa=n=>Sn(n),Qh=n=>n.type==="radio",Ma=n=>n instanceof RegExp;const m_={value:!1,isValid:!1},g_={value:!0,isValid:!0};var Zy=n=>{if(Array.isArray(n)){if(n.length>1){const e=n.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!st(n[0].attributes.value)?st(n[0].value)||n[0].value===""?g_:{value:n[0].value,isValid:!0}:g_:m_}return m_};const __={isValid:!1,value:null};var ew=n=>Array.isArray(n)?n.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,__):__;function v_(n,e,t="validate"){if(aa(n)||Array.isArray(n)&&n.every(aa)||yn(n)&&!n)return{type:t,message:aa(n)?n:"",ref:e}}var Ui=n=>rt(n)&&!Ma(n)?n:{value:n,message:""},y_=async(n,e,t,s,o,a)=>{const{ref:c,refs:h,required:p,maxLength:m,minLength:v,min:_,max:y,pattern:N,validate:k,name:A,valueAsNumber:D,mount:F}=n._f,M=te(t,A);if(!F||e.has(A))return{};const X=h?h[0]:c,Z=ue=>{o&&X.reportValidity&&(X.setCustomValidity(yn(ue)?"":ue||""),X.reportValidity())},ie={},W=Qh(c),fe=bo(c),ce=W||fe,we=(D||Yh(c))&&st(c.value)&&st(M)||La(c)&&c.value===""||M===""||Array.isArray(M)&&!M.length,ge=Ix.bind(null,A,s,ie),Ze=(ue,me,Ae,Me=jn.maxLength,Ve=jn.minLength)=>{const Te=ue?me:Ae;ie[A]={type:ue?Me:Ve,message:Te,ref:c,...ge(ue?Me:Ve,Te)}};if(a?!Array.isArray(M)||!M.length:p&&(!ce&&(we||Rt(M))||yn(M)&&!M||fe&&!Zy(h).isValid||W&&!ew(h).isValid)){const{value:ue,message:me}=aa(p)?{value:!!p,message:p}:Ui(p);if(ue&&(ie[A]={type:jn.required,message:me,ref:X,...ge(jn.required,me)},!s))return Z(me),ie}if(!we&&(!Rt(_)||!Rt(y))){let ue,me;const Ae=Ui(y),Me=Ui(_);if(!Rt(M)&&!isNaN(M)){const Ve=c.valueAsNumber||M&&+M;Rt(Ae.value)||(ue=Ve>Ae.value),Rt(Me.value)||(me=Ve<Me.value)}else{const Ve=c.valueAsDate||new Date(M),Te=Y=>new Date(new Date().toDateString()+" "+Y),q=c.type=="time",se=c.type=="week";Sn(Ae.value)&&M&&(ue=q?Te(M)>Te(Ae.value):se?M>Ae.value:Ve>new Date(Ae.value)),Sn(Me.value)&&M&&(me=q?Te(M)<Te(Me.value):se?M<Me.value:Ve<new Date(Me.value))}if((ue||me)&&(Ze(!!ue,Ae.message,Me.message,jn.max,jn.min),!s))return Z(ie[A].message),ie}if((m||v)&&!we&&(Sn(M)||a&&Array.isArray(M))){const ue=Ui(m),me=Ui(v),Ae=!Rt(ue.value)&&M.length>+ue.value,Me=!Rt(me.value)&&M.length<+me.value;if((Ae||Me)&&(Ze(Ae,ue.message,me.message),!s))return Z(ie[A].message),ie}if(N&&!we&&Sn(M)){const{value:ue,message:me}=Ui(N);if(Ma(ue)&&!M.match(ue)&&(ie[A]={type:jn.pattern,message:me,ref:c,...ge(jn.pattern,me)},!s))return Z(me),ie}if(k){if(wn(k)){const ue=await k(M,t),me=v_(ue,X);if(me&&(ie[A]={...me,...ge(jn.validate,me.message)},!s))return Z(me.message),ie}else if(rt(k)){let ue={};for(const me in k){if(!Mt(ue)&&!s)break;const Ae=v_(await k[me](M,t),X,me);Ae&&(ue={...Ae,...ge(me,Ae.message)},Z(Ae.message),s&&(ie[A]=ue))}if(!Mt(ue)&&(ie[A]={ref:X,...ue},!s))return ie}}return Z(!0),ie};function Tx(n,e){const t=e.slice(0,-1).length;let s=0;for(;s<t;)n=st(n)?s++:n[e[s++]];return n}function Rx(n){for(const e in n)if(n.hasOwnProperty(e)&&!st(n[e]))return!1;return!0}function at(n,e){const t=Array.isArray(e)?e:Kh(e)?[e]:Jy(e),s=t.length===1?n:Tx(n,t),o=t.length-1,a=t[o];return s&&delete s[a],o!==0&&(rt(s)&&Mt(s)||Array.isArray(s)&&Rx(s))&&at(n,t.slice(0,-1)),n}var md=()=>{let n=[];return{get observers(){return n},next:o=>{for(const a of n)a.next&&a.next(o)},subscribe:o=>(n.push(o),{unsubscribe:()=>{n=n.filter(a=>a!==o)}}),unsubscribe:()=>{n=[]}}},Wd=n=>Rt(n)||!Xy(n);function kr(n,e){if(Wd(n)||Wd(e))return n===e;if(ni(n)&&ni(e))return n.getTime()===e.getTime();const t=Object.keys(n),s=Object.keys(e);if(t.length!==s.length)return!1;for(const o of t){const a=n[o];if(!s.includes(o))return!1;if(o!=="ref"){const c=e[o];if(ni(a)&&ni(c)||rt(a)&&rt(c)||Array.isArray(a)&&Array.isArray(c)?!kr(a,c):a!==c)return!1}}return!0}var tw=n=>n.type==="select-multiple",Nx=n=>Qh(n)||bo(n),gd=n=>La(n)&&n.isConnected,nw=n=>{for(const e in n)if(wn(n[e]))return!0;return!1};function Fa(n,e={}){const t=Array.isArray(n);if(rt(n)||t)for(const s in n)Array.isArray(n[s])||rt(n[s])&&!nw(n[s])?(e[s]=Array.isArray(n[s])?[]:{},Fa(n[s],e[s])):Rt(n[s])||(e[s]=!0);return e}function rw(n,e,t){const s=Array.isArray(n);if(rt(n)||s)for(const o in n)Array.isArray(n[o])||rt(n[o])&&!nw(n[o])?st(e)||Wd(t[o])?t[o]=Array.isArray(n[o])?Fa(n[o],[]):{...Fa(n[o])}:rw(n[o],Rt(e)?{}:e[o],t[o]):t[o]=!kr(n[o],e[o]);return t}var Zs=(n,e)=>rw(n,e,Fa(e)),iw=(n,{valueAsNumber:e,valueAsDate:t,setValueAs:s})=>st(n)?n:e?n===""?NaN:n&&+n:t&&Sn(n)?new Date(n):s?s(n):n;function _d(n){const e=n.ref;return Yh(e)?e.files:Qh(e)?ew(n.refs).value:tw(e)?[...e.selectedOptions].map(({value:t})=>t):bo(e)?Zy(n.refs).value:iw(st(e.value)?n.ref.value:e.value,n)}var xx=(n,e,t,s)=>{const o={};for(const a of n){const c=te(e,a);c&&$e(o,a,c._f)}return{criteriaMode:t,names:[...n],fields:o,shouldUseNativeValidation:s}},eo=n=>st(n)?n:Ma(n)?n.source:rt(n)?Ma(n.value)?n.value.source:n.value:n;const w_="AsyncFunction";var Px=n=>!!n&&!!n.validate&&!!(wn(n.validate)&&n.validate.constructor.name===w_||rt(n.validate)&&Object.values(n.validate).find(e=>e.constructor.name===w_)),Ax=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate);function E_(n,e,t){const s=te(n,t);if(s||Kh(t))return{error:s,name:t};const o=t.split(".");for(;o.length;){const a=o.join("."),c=te(e,a),h=te(n,a);if(c&&!Array.isArray(c)&&t!==a)return{name:t};if(h&&h.type)return{name:a,error:h};o.pop()}return{name:t}}var Ox=(n,e,t,s,o)=>o.isOnAll?!1:!t&&o.isOnTouch?!(e||n):(t?s.isOnBlur:o.isOnBlur)?!n:(t?s.isOnChange:o.isOnChange)?n:!0,Dx=(n,e)=>!tu(te(n,e)).length&&at(n,e);const bx={mode:an.onSubmit,reValidateMode:an.onChange,shouldFocusError:!0};function Lx(n={}){let e={...bx,...n},t={submitCount:0,isDirty:!1,isLoading:wn(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},s={},o=rt(e.defaultValues)||rt(e.values)?Jt(e.defaultValues||e.values)||{}:{},a=e.shouldUnregister?{}:Jt(o),c={action:!1,mount:!1,watch:!1},h={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,m=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:md(),array:md(),state:md()},y=f_(e.mode),N=f_(e.reValidateMode),k=e.criteriaMode===an.all,A=S=>x=>{clearTimeout(m),m=setTimeout(S,x)},D=async S=>{if(!e.disabled&&(v.isValid||S)){const x=e.resolver?Mt((await ce()).errors):await ge(s,!0);x!==t.isValid&&_.state.next({isValid:x})}},F=(S,x)=>{!e.disabled&&(v.isValidating||v.validatingFields)&&((S||Array.from(h.mount)).forEach(O=>{O&&(x?$e(t.validatingFields,O,x):at(t.validatingFields,O))}),_.state.next({validatingFields:t.validatingFields,isValidating:!Mt(t.validatingFields)}))},M=(S,x=[],O,K,G=!0,$=!0)=>{if(K&&O&&!e.disabled){if(c.action=!0,$&&Array.isArray(te(s,S))){const oe=O(te(s,S),K.argA,K.argB);G&&$e(s,S,oe)}if($&&Array.isArray(te(t.errors,S))){const oe=O(te(t.errors,S),K.argA,K.argB);G&&$e(t.errors,S,oe),Dx(t.errors,S)}if(v.touchedFields&&$&&Array.isArray(te(t.touchedFields,S))){const oe=O(te(t.touchedFields,S),K.argA,K.argB);G&&$e(t.touchedFields,S,oe)}v.dirtyFields&&(t.dirtyFields=Zs(o,a)),_.state.next({name:S,isDirty:ue(S,x),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else $e(a,S,x)},X=(S,x)=>{$e(t.errors,S,x),_.state.next({errors:t.errors})},Z=S=>{t.errors=S,_.state.next({errors:t.errors,isValid:!1})},ie=(S,x,O,K)=>{const G=te(s,S);if(G){const $=te(a,S,st(O)?te(o,S):O);st($)||K&&K.defaultChecked||x?$e(a,S,x?$:_d(G._f)):Me(S,$),c.mount&&D()}},W=(S,x,O,K,G)=>{let $=!1,oe=!1;const ve={name:S};if(!e.disabled){const et=!!(te(s,S)&&te(s,S)._f&&te(s,S)._f.disabled);if(!O||K){v.isDirty&&(oe=t.isDirty,t.isDirty=ve.isDirty=ue(),$=oe!==ve.isDirty);const Qe=et||kr(te(o,S),x);oe=!!(!et&&te(t.dirtyFields,S)),Qe||et?at(t.dirtyFields,S):$e(t.dirtyFields,S,!0),ve.dirtyFields=t.dirtyFields,$=$||v.dirtyFields&&oe!==!Qe}if(O){const Qe=te(t.touchedFields,S);Qe||($e(t.touchedFields,S,O),ve.touchedFields=t.touchedFields,$=$||v.touchedFields&&Qe!==O)}$&&G&&_.state.next(ve)}return $?ve:{}},fe=(S,x,O,K)=>{const G=te(t.errors,S),$=v.isValid&&yn(x)&&t.isValid!==x;if(e.delayError&&O?(p=A(()=>X(S,O)),p(e.delayError)):(clearTimeout(m),p=null,O?$e(t.errors,S,O):at(t.errors,S)),(O?!kr(G,O):G)||!Mt(K)||$){const oe={...K,...$&&yn(x)?{isValid:x}:{},errors:t.errors,name:S};t={...t,...oe},_.state.next(oe)}},ce=async S=>{F(S,!0);const x=await e.resolver(a,e.context,xx(S||h.mount,s,e.criteriaMode,e.shouldUseNativeValidation));return F(S),x},we=async S=>{const{errors:x}=await ce(S);if(S)for(const O of S){const K=te(x,O);K?$e(t.errors,O,K):at(t.errors,O)}else t.errors=x;return x},ge=async(S,x,O={valid:!0})=>{for(const K in S){const G=S[K];if(G){const{_f:$,...oe}=G;if($){const ve=h.array.has($.name),et=G._f&&Px(G._f);et&&v.validatingFields&&F([K],!0);const Qe=await y_(G,h.disabled,a,k,e.shouldUseNativeValidation&&!x,ve);if(et&&v.validatingFields&&F([K]),Qe[$.name]&&(O.valid=!1,x))break;!x&&(te(Qe,$.name)?ve?kx(t.errors,Qe,$.name):$e(t.errors,$.name,Qe[$.name]):at(t.errors,$.name))}!Mt(oe)&&await ge(oe,x,O)}}return O.valid},Ze=()=>{for(const S of h.unMount){const x=te(s,S);x&&(x._f.refs?x._f.refs.every(O=>!gd(O)):!gd(x._f.ref))&&ke(S)}h.unMount=new Set},ue=(S,x)=>!e.disabled&&(S&&x&&$e(a,S,x),!kr(I(),o)),me=(S,x,O)=>Cx(S,h,{...c.mount?a:st(x)?o:Sn(S)?{[S]:x}:x},O,x),Ae=S=>tu(te(c.mount?a:o,S,e.shouldUnregister?te(o,S,[]):[])),Me=(S,x,O={})=>{const K=te(s,S);let G=x;if(K){const $=K._f;$&&(!$.disabled&&$e(a,S,iw(x,$)),G=La($.ref)&&Rt(x)?"":x,tw($.ref)?[...$.ref.options].forEach(oe=>oe.selected=G.includes(oe.value)):$.refs?bo($.ref)?$.refs.length>1?$.refs.forEach(oe=>(!oe.defaultChecked||!oe.disabled)&&(oe.checked=Array.isArray(G)?!!G.find(ve=>ve===oe.value):G===oe.value)):$.refs[0]&&($.refs[0].checked=!!G):$.refs.forEach(oe=>oe.checked=oe.value===G):Yh($.ref)?$.ref.value="":($.ref.value=G,$.ref.type||_.values.next({name:S,values:{...a}})))}(O.shouldDirty||O.shouldTouch)&&W(S,G,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&Y(S)},Ve=(S,x,O)=>{for(const K in x){const G=x[K],$=`${S}.${K}`,oe=te(s,$);(h.array.has(S)||rt(G)||oe&&!oe._f)&&!ni(G)?Ve($,G,O):Me($,G,O)}},Te=(S,x,O={})=>{const K=te(s,S),G=h.array.has(S),$=Jt(x);$e(a,S,$),G?(_.array.next({name:S,values:{...a}}),(v.isDirty||v.dirtyFields)&&O.shouldDirty&&_.state.next({name:S,dirtyFields:Zs(o,a),isDirty:ue(S,$)})):K&&!K._f&&!Rt($)?Ve(S,$,O):Me(S,$,O),p_(S,h)&&_.state.next({...t}),_.values.next({name:c.mount?S:void 0,values:{...a}})},q=async S=>{c.mount=!0;const x=S.target;let O=x.name,K=!0;const G=te(s,O),$=()=>x.type?_d(G._f):gx(S),oe=ve=>{K=Number.isNaN(ve)||ni(ve)&&isNaN(ve.getTime())||kr(ve,te(a,O,ve))};if(G){let ve,et;const Qe=$(),zt=S.type===h_.BLUR||S.type===h_.FOCUS_OUT,Fo=!Ax(G._f)&&!e.resolver&&!te(t.errors,O)&&!G._f.deps||Ox(zt,te(t.touchedFields,O),t.isSubmitted,N,y),Pn=p_(O,h,zt);$e(a,O,Qe),zt?(G._f.onBlur&&G._f.onBlur(S),p&&p(0)):G._f.onChange&&G._f.onChange(S);const An=W(O,Qe,zt,!1),iu=!Mt(An)||Pn;if(!zt&&_.values.next({name:O,type:S.type,values:{...a}}),Fo)return v.isValid&&(e.mode==="onBlur"&&zt?D():zt||D()),iu&&_.state.next({name:O,...Pn?{}:An});if(!zt&&Pn&&_.state.next({...t}),e.resolver){const{errors:as}=await ce([O]);if(oe(Qe),K){const Uo=E_(t.errors,s,O),Vo=E_(as,s,Uo.name||O);ve=Vo.error,O=Vo.name,et=Mt(as)}}else F([O],!0),ve=(await y_(G,h.disabled,a,k,e.shouldUseNativeValidation))[O],F([O]),oe(Qe),K&&(ve?et=!1:v.isValid&&(et=await ge(s,!0)));K&&(G._f.deps&&Y(G._f.deps),fe(O,et,ve,An))}},se=(S,x)=>{if(te(t.errors,x)&&S.focus)return S.focus(),1},Y=async(S,x={})=>{let O,K;const G=la(S);if(e.resolver){const $=await we(st(S)?S:G);O=Mt($),K=S?!G.some(oe=>te($,oe)):O}else S?(K=(await Promise.all(G.map(async $=>{const oe=te(s,$);return await ge(oe&&oe._f?{[$]:oe}:oe)}))).every(Boolean),!(!K&&!t.isValid)&&D()):K=O=await ge(s);return _.state.next({...!Sn(S)||v.isValid&&O!==t.isValid?{}:{name:S},...e.resolver||!S?{isValid:O}:{},errors:t.errors}),x.shouldFocus&&!K&&uo(s,se,S?G:h.mount),K},I=S=>{const x={...c.mount?a:o};return st(S)?x:Sn(S)?te(x,S):S.map(O=>te(x,O))},U=(S,x)=>({invalid:!!te((x||t).errors,S),isDirty:!!te((x||t).dirtyFields,S),error:te((x||t).errors,S),isValidating:!!te(t.validatingFields,S),isTouched:!!te((x||t).touchedFields,S)}),_e=S=>{S&&la(S).forEach(x=>at(t.errors,x)),_.state.next({errors:S?t.errors:{}})},ye=(S,x,O)=>{const K=(te(s,S,{_f:{}})._f||{}).ref,G=te(t.errors,S)||{},{ref:$,message:oe,type:ve,...et}=G;$e(t.errors,S,{...et,...x,ref:K}),_.state.next({name:S,errors:t.errors,isValid:!1}),O&&O.shouldFocus&&K&&K.focus&&K.focus()},Re=(S,x)=>wn(S)?_.values.subscribe({next:O=>S(me(void 0,x),O)}):me(S,x,!0),ke=(S,x={})=>{for(const O of S?la(S):h.mount)h.mount.delete(O),h.array.delete(O),x.keepValue||(at(s,O),at(a,O)),!x.keepError&&at(t.errors,O),!x.keepDirty&&at(t.dirtyFields,O),!x.keepTouched&&at(t.touchedFields,O),!x.keepIsValidating&&at(t.validatingFields,O),!e.shouldUnregister&&!x.keepDefaultValue&&at(o,O);_.values.next({values:{...a}}),_.state.next({...t,...x.keepDirty?{isDirty:ue()}:{}}),!x.keepIsValid&&D()},De=({disabled:S,name:x,field:O,fields:K})=>{(yn(S)&&c.mount||S||h.disabled.has(x))&&(S?h.disabled.add(x):h.disabled.delete(x),W(x,_d(O?O._f:te(K,x)._f),!1,!1,!0))},Ne=(S,x={})=>{let O=te(s,S);const K=yn(x.disabled)||yn(e.disabled);return $e(s,S,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:S}},name:S,mount:!0,...x}}),h.mount.add(S),O?De({field:O,disabled:yn(x.disabled)?x.disabled:e.disabled,name:S}):ie(S,!0,x.value),{...K?{disabled:x.disabled||e.disabled}:{},...e.progressive?{required:!!x.required,min:eo(x.min),max:eo(x.max),minLength:eo(x.minLength),maxLength:eo(x.maxLength),pattern:eo(x.pattern)}:{},name:S,onChange:q,onBlur:q,ref:G=>{if(G){Ne(S,x),O=te(s,S);const $=st(G.value)&&G.querySelectorAll&&G.querySelectorAll("input,select,textarea")[0]||G,oe=Nx($),ve=O._f.refs||[];if(oe?ve.find(et=>et===$):$===O._f.ref)return;$e(s,S,{_f:{...O._f,...oe?{refs:[...ve.filter(gd),$,...Array.isArray(te(o,S))?[{}]:[]],ref:{type:$.type,name:S}}:{ref:$}}}),ie(S,!1,void 0,$)}else O=te(s,S,{}),O._f&&(O._f.mount=!1),(e.shouldUnregister||x.shouldUnregister)&&!(vx(h.array,S)&&c.action)&&h.unMount.add(S)}}},Fe=()=>e.shouldFocusError&&uo(s,se,h.mount),It=S=>{yn(S)&&(_.state.next({disabled:S}),uo(s,(x,O)=>{const K=te(s,O);K&&(x.disabled=K._f.disabled||S,Array.isArray(K._f.refs)&&K._f.refs.forEach(G=>{G.disabled=K._f.disabled||S}))},0,!1))},Mr=(S,x)=>async O=>{let K;O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let G=Jt(a);if(h.disabled.size)for(const $ of h.disabled)$e(G,$,void 0);if(_.state.next({isSubmitting:!0}),e.resolver){const{errors:$,values:oe}=await ce();t.errors=$,G=oe}else await ge(s);if(at(t.errors,"root"),Mt(t.errors)){_.state.next({errors:{}});try{await S(G,O)}catch($){K=$}}else x&&await x({...t.errors},O),Fe(),setTimeout(Fe);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(t.errors)&&!K,submitCount:t.submitCount+1,errors:t.errors}),K)throw K},Lo=(S,x={})=>{te(s,S)&&(st(x.defaultValue)?Te(S,Jt(te(o,S))):(Te(S,x.defaultValue),$e(o,S,Jt(x.defaultValue))),x.keepTouched||at(t.touchedFields,S),x.keepDirty||(at(t.dirtyFields,S),t.isDirty=x.defaultValue?ue(S,Jt(te(o,S))):ue()),x.keepError||(at(t.errors,S),v.isValid&&D()),_.state.next({...t}))},Fr=(S,x={})=>{const O=S?Jt(S):o,K=Jt(O),G=Mt(S),$=G?o:K;if(x.keepDefaultValues||(o=O),!x.keepValues){if(x.keepDirtyValues){const oe=new Set([...h.mount,...Object.keys(Zs(o,a))]);for(const ve of Array.from(oe))te(t.dirtyFields,ve)?$e($,ve,te(a,ve)):Te(ve,te($,ve))}else{if(qh&&st(S))for(const oe of h.mount){const ve=te(s,oe);if(ve&&ve._f){const et=Array.isArray(ve._f.refs)?ve._f.refs[0]:ve._f.ref;if(La(et)){const Qe=et.closest("form");if(Qe){Qe.reset();break}}}}s={}}a=e.shouldUnregister?x.keepDefaultValues?Jt(o):{}:Jt($),_.array.next({values:{...$}}),_.values.next({values:{...$}})}h={mount:x.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!v.isValid||!!x.keepIsValid||!!x.keepDirtyValues,c.watch=!!e.shouldUnregister,_.state.next({submitCount:x.keepSubmitCount?t.submitCount:0,isDirty:G?!1:x.keepDirty?t.isDirty:!!(x.keepDefaultValues&&!kr(S,o)),isSubmitted:x.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:G?{}:x.keepDirtyValues?x.keepDefaultValues&&a?Zs(o,a):t.dirtyFields:x.keepDefaultValues&&S?Zs(o,S):x.keepDirty?t.dirtyFields:{},touchedFields:x.keepTouched?t.touchedFields:{},errors:x.keepErrors?t.errors:{},isSubmitSuccessful:x.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},fi=(S,x)=>Fr(wn(S)?S(a):S,x);return{control:{register:Ne,unregister:ke,getFieldState:U,handleSubmit:Mr,setError:ye,_executeSchema:ce,_getWatch:me,_getDirty:ue,_updateValid:D,_removeUnmounted:Ze,_updateFieldArray:M,_updateDisabledField:De,_getFieldArray:Ae,_reset:Fr,_resetDefaultValues:()=>wn(e.defaultValues)&&e.defaultValues().then(S=>{fi(S,e.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:S=>{t={...t,...S}},_disableForm:It,_subjects:_,_proxyFormState:v,_setErrors:Z,get _fields(){return s},get _formValues(){return a},get _state(){return c},set _state(S){c=S},get _defaultValues(){return o},get _names(){return h},set _names(S){h=S},get _formState(){return t},set _formState(S){t=S},get _options(){return e},set _options(S){e={...e,...S}}},trigger:Y,register:Ne,handleSubmit:Mr,watch:Re,setValue:Te,getValues:I,reset:fi,resetField:Lo,clearErrors:_e,unregister:ke,setError:ye,setFocus:(S,x={})=>{const O=te(s,S),K=O&&O._f;if(K){const G=K.refs?K.refs[0]:K.ref;G.focus&&(G.focus(),x.shouldSelect&&wn(G.select)&&G.select())}},getFieldState:U}}function Mx(n={}){const e=Zt.useRef(void 0),t=Zt.useRef(void 0),[s,o]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:wn(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,defaultValues:wn(n.defaultValues)?void 0:n.defaultValues});e.current||(e.current={...Lx(n),formState:s});const a=e.current.control;return a._options=n,Sx({subject:a._subjects.state,next:c=>{Ex(c,a._proxyFormState,a._updateFormState)&&o({...a._formState})}}),Zt.useEffect(()=>a._disableForm(n.disabled),[a,n.disabled]),Zt.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==s.isDirty&&a._subjects.state.next({isDirty:c})}},[a,s.isDirty]),Zt.useEffect(()=>{n.values&&!kr(n.values,t.current)?(a._reset(n.values,a._options.resetOptions),t.current=n.values,o(c=>({...c}))):a._resetDefaultValues()},[n.values,a]),Zt.useEffect(()=>{n.errors&&a._setErrors(n.errors)},[n.errors,a]),Zt.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),Zt.useEffect(()=>{n.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[n.shouldUnregister,a]),e.current.formState=wx(s,a),e.current}const Fx=()=>{const{register:n,handleSubmit:e,formState:{errors:t}}=Mx(),s=async o=>{try{const a=o.fullName.replace(/\s+/g,"_"),c={fullName:o.fullName,address:o.address,phoneNumber:o.phoneNumber,pesel:o.pesel,childrenInfo:o.childrenInfo,education:o.education,bankAccount:o.bankAccount,experience:o.experience,emergencyContact:{name:o.emergencyContactName,phone:o.emergencyContactPhone}},h=jd(Zr.driversBase,`drivers/${a}`);await SN(h,c),alert("Анкета успешно отправлена!")}catch(a){console.error("Ошибка при отправке анкеты:",a)}};return L.jsxs("section",{className:"container py-4",children:[L.jsx("h1",{className:"text-center mb-4",children:"Заполните анкету"}),L.jsxs("form",{onSubmit:e(s),className:"row g-3",children:[L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"fullName",className:"form-label",children:"Имя и фамилия"}),L.jsx("input",{...n("fullName",{required:'Поле "Имя и фамилия" обязательно для заполнения.',pattern:{value:/^[a-zA-Z\s\-]+$/,message:"Имя и фамилия могут содержать только латинские буквы и пробелы."}}),id:"fullName",placeholder:"Имя и фамилия",className:`form-control ${t.fullName?"is-invalid":""}`}),t.fullName&&L.jsx("div",{className:"invalid-feedback",children:t.fullName.message})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"address",className:"form-label",children:"Адрес в родной стране"}),L.jsx("input",{...n("address",{required:'Поле "Адрес" обязательно для заполнения.',pattern:{value:/^[a-zA-Z0-9\s,\.]+$/,message:"Адрес может содержать только латинские буквы, цифры, пробелы, запятые и точки."}}),id:"address",placeholder:"Адрес в родной стране",className:`form-control ${t.address?"is-invalid":""}`}),t.address&&L.jsx("div",{className:"invalid-feedback",children:t.address.message})]}),L.jsxs("div",{className:"col-12 col-md-6",children:[L.jsx("label",{htmlFor:"phoneNumber",className:"form-label",children:"Телефон"}),L.jsx("input",{...n("phoneNumber",{required:"Номер телефона обязателен.",pattern:{value:/^\+?[0-9]{10,15}$/,message:"Номер телефона должен быть в правильном формате (например, +79991234567)."}}),id:"phoneNumber",placeholder:"Телефон",className:`form-control ${t.phoneNumber?"is-invalid":""}`}),t.phoneNumber&&L.jsx("div",{className:"invalid-feedback",children:t.phoneNumber.message})]}),L.jsxs("div",{className:"col-12 col-md-6",children:[L.jsx("label",{htmlFor:"pesel",className:"form-label",children:"PESEL"}),L.jsx("input",{...n("pesel",{required:'Поле "PESEL" обязательно для заполнения.',pattern:{value:/^[0-9]{11}$/,message:"PESEL должен состоять из 11 цифр."}}),id:"pesel",maxLength:11,placeholder:"PESEL",className:`form-control ${t.pesel?"is-invalid":""}`}),t.pesel&&L.jsx("div",{className:"invalid-feedback",children:t.pesel.message})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"childrenInfo",className:"form-label",children:"Информация о детях и родственниках"}),L.jsx("textarea",{...n("childrenInfo"),id:"childrenInfo",placeholder:"Информация о детях и родственниках",className:"form-control"})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"education",className:"form-label",children:"Образование и опыт работы"}),L.jsx("textarea",{...n("education"),id:"education",placeholder:"Образование и опыт работы",className:"form-control"})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"bankAccount",className:"form-label",children:"Номер банковского счёта"}),L.jsx("input",{...n("bankAccount",{required:'Поле "Номер банковского счёта" обязательно для заполнения.',pattern:{value:/^[0-9]{20}$/,message:"Номер банковского счёта должен состоять из 20 цифр."}}),id:"bankAccount",placeholder:"Номер банковского счёта",className:`form-control ${t.bankAccount?"is-invalid":""}`}),t.bankAccount&&L.jsx("div",{className:"invalid-feedback",children:t.bankAccount.message})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"experience",className:"form-label",children:"Опыт работы водителем E + C в Европе (от 0 до 35 лет)"}),L.jsx("input",{...n("experience",{required:'Поле "Опыт работы" обязательно для заполнения.',validate:o=>/^[0-9]+$/.test(o)?o<0||o>35?"Опыт работы должен быть от 0 до 35 лет.":!0:"Опыт работы должен быть числовым значением."}),id:"experience",placeholder:"Опыт работы в годах",className:`form-control ${t.experience?"is-invalid":""}`}),t.experience&&L.jsx("div",{className:"invalid-feedback",children:t.experience.message})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"emergencyContactName",className:"form-label",children:"Имя экстренного контакта"}),L.jsx("input",{...n("emergencyContactName",{required:'Поле "Имя экстренного контакта" обязательно для заполнения.',pattern:{value:/^[a-zA-Z\s\-]+$/,message:"Имя экстренного контакта может содержать только латинские буквы и пробелы."}}),id:"emergencyContactName",placeholder:"Имя экстренного контакта",className:`form-control ${t.emergencyContactName?"is-invalid":""}`}),t.emergencyContactName&&L.jsx("div",{className:"invalid-feedback",children:t.emergencyContactName.message})]}),L.jsxs("div",{className:"col-12",children:[L.jsx("label",{htmlFor:"emergencyContactPhone",className:"form-label",children:"Телефон экстренного контакта"}),L.jsx("input",{...n("emergencyContactPhone",{required:"Телефон экстренного контакта обязателен.",pattern:{value:/^\+?[0-9]{10,15}$/,message:"Телефон экстренного контакта должен быть в правильном формате."}}),id:"emergencyContactPhone",placeholder:"Телефон экстренного контакта",className:`form-control ${t.emergencyContactPhone?"is-invalid":""}`}),t.emergencyContactPhone&&L.jsx("div",{className:"invalid-feedback",children:t.emergencyContactPhone.message})]}),L.jsx("div",{className:"col-12",children:L.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Отправить"})})]})]})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ux(n,e,t,s){function o(a){return a instanceof t?a:new t(function(c){c(a)})}return new(t||(t=Promise))(function(a,c){function h(v){try{m(s.next(v))}catch(_){c(_)}}function p(v){try{m(s.throw(v))}catch(_){c(_)}}function m(v){v.done?a(v.value):o(v.value).then(h,p)}m((s=s.apply(n,[])).next())})}function Vx(n,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},s,o,a,c;return c={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function h(m){return function(v){return p([m,v])}}function p(m){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,o&&(a=m[0]&2?o.return:m[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,m[1])).done)return a;switch(o=0,a&&(m=[m[0]&2,a.value]),m[0]){case 0:case 1:a=m;break;case 4:return t.label++,{value:m[1],done:!1};case 5:t.label++,o=m[1],m=[0];continue;case 7:m=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(m[0]===6||m[0]===2)){t=0;continue}if(m[0]===3&&(!a||m[1]>a[0]&&m[1]<a[3])){t.label=m[1];break}if(m[0]===6&&t.label<a[1]){t.label=a[1],a=m;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(m);break}a[2]&&t.ops.pop(),t.trys.pop();continue}m=e.call(n,t)}catch(v){m=[6,v],o=0}finally{s=a=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zi=function(){return zi=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},zi.apply(this,arguments)},sw=function(n){return{loading:n==null,value:n}},jx=function(){return function(n,e){switch(e.type){case"error":return zi(zi({},n),{error:e.error,loading:!1,value:void 0});case"reset":return sw(e.defaultValue);case"value":return zi(zi({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},zx=function(n){var e=n(),t=b.useReducer(jx(),sw(e)),s=t[0],o=t[1],a=b.useCallback(function(){var p=n();o({type:"reset",defaultValue:p})},[n]),c=b.useCallback(function(p){o({type:"error",error:p})},[]),h=b.useCallback(function(p){o({type:"value",value:p})},[]);return b.useMemo(function(){return{error:s.error,loading:s.loading,reset:a,setError:c,setValue:h,value:s.value}},[s.error,s.loading,a,c,h,s.value])},Bx=function(n,e){var t=zx(function(){return n.currentUser}),s=t.error,o=t.loading,a=t.setError,c=t.setValue,h=t.value;return b.useEffect(function(){var p=uk(n,function(m){return Ux(void 0,void 0,void 0,function(){var v;return Vx(this,function(_){switch(_.label){case 0:return[3,4];case 1:return _.trys.push([1,3,,4]),[4,e.onUserChanged(m)];case 2:return _.sent(),[3,4];case 3:return v=_.sent(),a(v),[3,4];case 4:return c(m),[2]}})})},a);return function(){p()}},[n]),[h,o,s]};const Wx=()=>{const[n,e]=b.useState([]),[t,s]=b.useState(!0),[o,a]=b.useState(""),[c,h]=b.useState(null),[p,m]=b.useState(new Set),[v,_]=Bx(Zr.auth),y=Gd();b.useEffect(()=>{if(!v)return;const W=jd(Zr.driversBase,"drivers"),fe=IN(W,ce=>{const we=ce.val();if(we){const ge=Object.keys(we).map(Ze=>({id:Ze,...we[Ze]}));e(ge)}else e([]);s(!1)});return()=>fe()},[v]);const N=W=>{h(c===W?null:W)},k=W=>{a(W.target.value)},A=async()=>{try{await ck(Zr.auth),y("/login")}catch(W){console.error("Ошибка при выходе:",W)}},D=W=>{m(fe=>{const ce=new Set(fe);return ce.has(W)?ce.delete(W):ce.add(W),ce})},F=()=>{p.size===n.length?m(new Set):m(new Set(n.map(W=>W.id)))},M=()=>{p.forEach(W=>{const fe=jd(Zr.driversBase,`drivers/${W}`);Zr.database().ref(fe).remove()}),m(new Set)},X=W=>{var Ze,ue;const fe=`Информация о водителе:

Имя и фамилия: ${W.fullName}
Адрес: ${W.address}
Телефон: ${W.phoneNumber}
PESEL: ${W.pesel}
Дети: ${W.childrenInfo||"Не указано"}
Образование: ${W.education||"Не указано"}
Банковский счёт: ${W.bankAccount||"Не указано"}
Экстренный контакт: ${((Ze=W.emergencyContact)==null?void 0:Ze.name)||"Не указано"} (${((ue=W.emergencyContact)==null?void 0:ue.phone)||"Нет телефона"})
`,ce=new Blob([fe],{type:"text/plain"}),we=URL.createObjectURL(ce),ge=document.createElement("a");ge.href=we,ge.download=`${W.fullName.replace(/\s+/g,"_")}_details.txt`,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge)},Z=()=>{p.forEach(W=>{const fe=n.find(ce=>ce.id===W);fe&&X(fe)})},ie=n.filter(W=>W.fullName.toLowerCase().includes(o.toLowerCase()));return _?L.jsx("p",{children:"Загрузка данных..."}):L.jsx("div",{className:"container-fluid py-4 d-flex justify-content-center drivers-list",children:L.jsxs("div",{className:"w-100",style:{maxWidth:"1200px"},children:[L.jsx("h1",{className:"text-center mb-4",children:"Список водителей"}),v&&L.jsx("button",{onClick:A,className:"btn btn-danger mb-4",children:"Выйти"}),L.jsx("div",{className:"mb-4",children:L.jsxs("div",{className:"input-group",children:[L.jsx("input",{type:"text",placeholder:"Поиск по имени",value:o,onChange:k,className:"form-control"}),L.jsx("span",{className:"input-group-text",children:L.jsx("i",{className:"bi bi-search"})})]})}),L.jsxs("div",{className:"mb-4",children:[L.jsx("button",{onClick:F,className:"btn btn-outline-primary me-2",children:p.size===n.length?"Отменить выбор":"Выбрать всех"}),L.jsx("button",{onClick:M,className:"btn btn-danger me-2",children:"Удалить выбранных"}),L.jsx("button",{onClick:Z,className:"btn btn-success",children:"Скачать TXT для выбранных"})]}),L.jsx("ul",{className:"list-group",children:ie.length>0||o===""?ie.map(W=>{var fe,ce;return L.jsxs("li",{className:"list-group-item mb-3",children:[L.jsxs("div",{className:"d-flex align-items-center",children:[L.jsx("input",{type:"checkbox",checked:p.has(W.id),onChange:()=>D(W.id),className:"form-check-input me-2"}),L.jsx("div",{className:"driver-name text-primary cursor-pointer",onClick:()=>N(W.id),children:L.jsx("strong",{children:W.fullName})}),L.jsxs("div",{className:"ms-auto",children:[L.jsx("button",{className:`btn btn-sm me-2 ${c===W.id?"btn-secondary":"btn-outline-secondary"}`,onClick:()=>N(W.id),children:c===W.id?"Скрыть":"Показать"}),L.jsx("button",{className:"btn btn-sm btn-success",onClick:()=>X(W),children:"Скачать TXT"})]})]}),c===W.id&&L.jsxs("div",{className:"driver-details mt-3",children:[L.jsxs("div",{className:"row",children:[L.jsxs("div",{className:"col-12 col-md-6",children:[L.jsxs("p",{children:[L.jsx("strong",{children:"Адрес:"})," ",W.address]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Телефон:"})," ",W.phoneNumber]})]}),L.jsxs("div",{className:"col-12 col-md-6",children:[L.jsxs("p",{children:[L.jsx("strong",{children:"PESEL:"})," ",W.pesel]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Дети:"})," ",W.childrenInfo||"Не указано"]})]})]}),L.jsxs("div",{className:"row",children:[L.jsx("div",{className:"col-12 col-md-6",children:L.jsxs("p",{children:[L.jsx("strong",{children:"Образование:"})," ",W.education||"Не указано"]})}),L.jsx("div",{className:"col-12 col-md-6",children:L.jsxs("p",{children:[L.jsx("strong",{children:"Банковский счёт:"})," ",W.bankAccount||"Не указано"]})})]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Экстренный контакт:"})," ",((fe=W.emergencyContact)==null?void 0:fe.name)||"Не указано"," ","(",((ce=W.emergencyContact)==null?void 0:ce.phone)||"Нет телефона",")"]})]})]},W.id)}):L.jsx("p",{children:"Результатов не найдено. Попробуйте изменить запрос."})})]})})};function $x(){return L.jsx(SS,{children:L.jsxs(JE,{children:[L.jsx(Zl,{path:"/driver",element:L.jsx(Fx,{})}),L.jsx(Zl,{path:"/driver/drivers",element:L.jsx(Wx,{})}),L.jsx(Zl,{path:"/driver/login",element:L.jsx(mx,{})})]})})}aE.createRoot(document.getElementById("root")).render(L.jsx(b.StrictMode,{children:L.jsx($x,{})}));
