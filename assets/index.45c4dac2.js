import{S as b}from"./index.672d8bdd.js";import{u as _}from"./provide.e1906a2c.js";import{c as w,d as I}from"./components.57927f97.js";import{_ as C}from"./elevation.4d11ec3f.js";import{d as S,r as g,y as d,e as y,o as T,l as $,j as B,G as x,p as A}from"./vendor.49f89f0d.js";const N={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const{n:P}=w("tabs-items"),k=S({name:"VarTabsItems",components:{VarSwipe:b},props:N,setup(e){const r=g(null),{tabItemList:n,bindTabItem:l,length:p}=_(),m=t=>n.find(({name:a})=>t===a.value),c=t=>n.find(({index:a})=>t===a.value),f=t=>m(t)||c(t),u=t=>{var o;const a=f(t);!a||(n.forEach(({setCurrent:s})=>s(!1)),a.setCurrent(!0),(o=r.value)==null||o.to(a.index.value))},v=t=>{var s;const a=n.find(({index:h})=>h.value===t),o=(s=a.name.value)!=null?s:a.index.value;I(e["onUpdate:active"],o)};return l({}),d(()=>e.active,u),d(()=>p.value,()=>u(e.active)),{swipe:r,n:P,handleSwipeChange:v}}});function U(e,r,n,l,p,m){const c=y("var-swipe");return T(),$(c,{class:A(e.n()),ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:B(()=>[x(e.$slots,"default")]),_:3},8,["class","loop","touchable","onChange"])}var i=C(k,[["render",U]]);i.install=function(e){e.component(i.name,i)};export{i as T};
