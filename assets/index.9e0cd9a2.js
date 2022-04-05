import{c as b,t as h,d as z}from"./components.57927f97.js";import{_ as w}from"./elevation.4d11ec3f.js";import{d as N,b as g,o as s,c as a,p as n,G as v,h as r,a as d,n as o,F as l,k as y,m as V,t as k}from"./vendor.49f89f0d.js";function B(e){return["circle","wave","cube","rect","disappear"].includes(e)}function C(e){return["normal","mini","small","large"].includes(e)}const L={type:{type:String,default:"circle",validator:B},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:C},color:{type:String,default:"currentColor"},description:{type:String},loading:{type:Boolean,default:!1}};const{n:D,classes:R}=b("loading"),T=N({name:"VarLoading",props:L,setup(e,{slots:u}){const c={wave:5,cube:4,rect:8,disappear:3},p={mini:9,small:12,normal:15,large:18},m=g(()=>e.radius?h(e.radius):p[e.size]),f=g(()=>z(u.default)?e.loading:!0);return{n:D,classes:R,loadingTypeDict:c,getRadius:m,isShow:f}}}),F=d("svg",{viewBox:"25 25 50 50"},[d("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),E=[F];function G(e,u,c,p,m,f){return s(),a("div",{class:n(e.n())},[e.$slots.default?(s(),a("div",{key:0,class:n(e.classes(e.n("content"),[e.loading,e.n("content--active")]))},[v(e.$slots,"default")],2)):r("v-if",!0),e.isShow?(s(),a("div",{key:1,class:n(e.classes("var--box",e.n("body"),[e.$slots.default,e.n("inside")]))},[e.type==="circle"?(s(),a("div",{key:0,class:n(e.n("circle"))},[d("span",{class:n(e.n("circle-block")),style:o({width:e.getRadius*2+"px",height:e.getRadius*2+"px",color:e.color})},E,6)],2)):r("v-if",!0),(s(!0),a(l,null,y(e.loadingTypeDict,($,i)=>(s(),a(l,{key:i},[e.type===i?(s(),a("div",{key:0,class:n(e.classes(e.n(i),e.n(`${i}-${e.size}`)))},[(s(!0),a(l,null,y($,S=>(s(),a("div",{key:S+i,style:o({backgroundColor:e.color}),class:n(e.classes(e.n(`${i}-item`),e.n(`${i}-item-${e.size}`)))},null,6))),128))],2)):r("v-if",!0)],64))),128)),e.$slots.description||e.description?(s(),a("div",{key:1,class:n(e.classes(e.n("description"),e.n(`description--${e.size}`))),style:o({color:e.color})},[v(e.$slots,"description",{},()=>[V(k(e.description),1)])],6)):r("v-if",!0)],2)):r("v-if",!0)],2)}var t=w(T,[["render",G]]);t.install=function(e){e.component(t.name,t)};export{t as L,L as p};
