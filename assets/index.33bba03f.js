import{b as p,g as l}from"./components.84368457.js";import{S as m,a as d}from"./provide.7dc02ee4.js";import{_ as c}from"./elevation.f2e866b2.js";import{d as v,r as _,o as f,c as u,G as w,n as S}from"./vendor.9810b84e.js";function I(){const{bindParent:e,parentProvider:t}=p(m),{index:s}=l(d);if(!e||!t||!s)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:s,swipe:t,bindSwipe:e}}const E=v({name:"VarSwipeItem",setup(){const e=_(0),{swipe:t,bindSwipe:s,index:n}=I(),{size:a,vertical:i}=t;return s({index:n,setTranslate:o=>{e.value=o}}),{size:a,vertical:i,translate:e}}});function P(e,t,s,n,a,i){return f(),u("div",{class:"var-swipe-item",style:S({width:e.vertical?void 0:`${e.size}px`,height:e.vertical?`${e.size}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[w(e.$slots,"default")],4)}var r=c(E,[["render",P]]);r.install=function(e){e.component(r.name,r)};export{r as S};