var A=Object.defineProperty;var s=(r,e)=>A(r,"name",{value:e,configurable:!0});import{w as d,a as p}from"./index-99fa693b.js";import"./iframe-4de237c0.js";import"./make-decorator-f72f34f6.js";var S=[d];function y(r,e){return _(r)||b(r,e)||T(r,e)||m()}s(y,"_slicedToArray");function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s(m,"_nonIterableRest");function T(r,e){if(r){if(typeof r=="string")return g(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(r,e)}}s(T,"_unsupportedIterableToArray");function g(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}s(g,"_arrayLikeToArray");function b(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,l=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(o){l=!0,i=o}finally{try{!a&&t.return!=null&&t.return()}finally{if(l)throw i}}return n}}s(b,"_iterableToArrayLimit");function _(r){if(Array.isArray(r))return r}s(_,"_arrayWithHoles");var v=s(function(e,t){return typeof t[e]>"u"&&!(e in t)},"isInInitialArgs"),h=s(function(e){var t=e.initialArgs,n=e.argTypes,a=e.parameters.actions;if(!a||a.disable||!a.argTypesRegex||!n)return{};var l=new RegExp(a.argTypesRegex),u=Object.entries(n).filter(function(i){var o=y(i,1),f=o[0];return!!l.test(f)});return u.reduce(function(i,o){var f=y(o,2),c=f[0];return f[1],v(c,t)&&(i[c]=p(c)),i},{})},"inferActionsFromArgTypesRegex"),I=s(function(e){var t=e.initialArgs,n=e.argTypes,a=e.parameters.actions;if(a!=null&&a.disable||!n)return{};var l=Object.entries(n).filter(function(u){var i=y(u,2);i[0];var o=i[1];return!!o.action});return l.reduce(function(u,i){var o=y(i,2),f=o[0],c=o[1];return v(f,t)&&(u[f]=p(typeof c.action=="string"?c.action:f)),u},{})},"addActionsFromArgTypes"),F=[I,h];export{F as argsEnhancers,S as decorators};
//# sourceMappingURL=preview-9d6cd6ef.js.map
