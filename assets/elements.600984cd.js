import{k as b,i as d,g as s,t as x}from"./components.57927f97.js";function B(t){const{left:n}=t.getBoundingClientRect();return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function E(t){const{top:n}=t.getBoundingClientRect();return n+(document.body.scrollTop||document.documentElement.scrollTop)}function S(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function F(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}async function N(t){await C();const{top:n,bottom:o,left:r,right:e}=t.getBoundingClientRect(),{innerWidth:a,innerHeight:c}=window,l=r<=a&&e>=0,f=n<=c&&o>=0;return l&&f}function k(t){const{transform:n}=window.getComputedStyle(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function L(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:r,overflow:e}=window.getComputedStyle(n);if(o.test(r)||o.test(e))return n}return window}function O(t){const n=[];let o=t;for(;o!==window;)o=L(o),n.push(o);return n}const w=t=>s(t)&&t.endsWith("rem"),P=t=>s(t)&&t.endsWith("px")||d(t),W=t=>s(t)&&t.endsWith("%"),p=t=>s(t)&&t.endsWith("vw"),g=t=>s(t)&&t.endsWith("vh"),A=t=>{if(d(t))return t;if(P(t))return+t.replace("px","");if(p(t))return+t.replace("vw","")*window.innerWidth/100;if(g(t))return+t.replace("vh","")*window.innerHeight/100;if(w(t)){const n=+t.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(o)}return s(t)?x(t):0},q=t=>{if(t!=null)return W(t)||p(t)||g(t)||w(t)?t:`${A(t)}px`};function i(t){return globalThis.requestAnimationFrame?globalThis.requestAnimationFrame(t):globalThis.setTimeout(t,16)}function y(t){globalThis.cancelAnimationFrame?globalThis.cancelAnimationFrame(t):globalThis.clearTimeout(t)}function z(t){i(()=>{i(t)})}function C(){return new Promise(t=>{i(()=>{i(t)})})}function I(t,{top:n=0,left:o=0,duration:r=300,animation:e}){const a=Date.now(),c=S(t),l=F(t);return new Promise(f=>{const m=()=>{const u=(Date.now()-a)/r;if(u<1){const h=c+(n-c)*e(u),T=l+(o-l)*e(u);t.scrollTo(T,h),i(m)}else t.scrollTo(o,n),f()};i(m)})}function V(t){return Object.entries(t!=null?t:{}).reduce((n,[o,r])=>{const e=o.startsWith("--")?o:`--${b(o)}`;return n[e]=r,n},{})}function j(){return typeof window!="undefined"&&"ontouchstart"in window}export{B as a,A as b,L as c,F as d,I as e,S as f,E as g,y as h,C as i,N as j,O as k,k as l,V as m,z as n,i as r,j as s,q as t};
