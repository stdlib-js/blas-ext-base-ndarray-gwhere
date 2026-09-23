"use strict";var s=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var q=s(function(x,o){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-gwhere/dist').ndarray;function g(t){var e,r,i,u;return e=t[0],i=t[1],u=t[2],r=t[3],c(d(e,0),a(e),n(e,0),v(e),a(i),n(i,0),v(i),a(u),n(u,0),v(u),a(r),n(r,0),v(r)),r}o.exports=g
});var f=q();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
