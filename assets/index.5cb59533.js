import{h as p,m}from"./components.57927f97.js";import{S as l,a as d}from"./provide.0e4b5061.js";import{_ as c}from"./elevation.4d11ec3f.js";import{d as v,r as _,o as u,c as f,G as w,n as S}from"./vendor.49f89f0d.js";function I(){const{bindParent:e,parentProvider:t}=p(l),{index:r}=m(d);if(!e||!t||!r)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:r,swipe:t,bindSwipe:e}}const E=v({name:"VarSwipeItem",setup(){const e=_(0),{swipe:t,bindSwipe:r,index:n}=I(),{size:a,vertical:i}=t;return r({index:n,setTranslate:o=>{e.value=o}}),{size:a,vertical:i,translate:e}}});function P(e,t,r,n,a,i){return u(),f("div",{class:"var-swipe-item",style:S({width:e.vertical?void 0:`${e.size}px`,height:e.vertical?`${e.size}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[w(e.$slots,"default")],4)}var s=c(E,[["render",P]]);s.install=function(e){e.component(s.name,s)};export{s as S};
