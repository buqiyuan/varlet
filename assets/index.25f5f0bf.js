import{S as m}from"./index.568b3572.js";import{B as u}from"./index.74de91de.js";import{A as f}from"./AppType.7d5457e5.js";import{w as y}from"./utils.efdc8a96.js";import{u as k,a as d,_ as v,b as S,c as b}from"./en-US.51e06fb5.js";import{_ as x}from"./elevation.8f12812c.js";import{d as p,o as h,c as j,h as a,i as s,a as _,V as U,W as C,l as o,t as c}from"./vendor.8a125dba.js";import"./elements.6bb3d81f.js";import"./shared.61f3a471.js";import"./index.23ced9c1.js";import"./index.789f7251.js";import"./index.31c5b564.js";import"./components.33246c91.js";var g={basicUsage:"\u57FA\u672C\u4F7F\u7528",localSticky:"\u5C40\u90E8\u5438\u9876"},N={basicUsage:"Basic Usage",localSticky:"Local Sticky"};const{add:l,use:B,pack:V,packs:ee,merge:ae}=k(),w=e=>{b(e),B(e)};d("zh-CN",v);d("en-US",S);l("zh-CN",g);l("en-US",N);const z={name:"StickyExample",components:{VarSticky:m,VarButton:u,AppType:f},setup(){return y(w),{pack:V}}},A=e=>(U("data-v-15a225b6"),e=e(),C(),e),I={class:"example"},E={class:"scroller"},F=A(()=>_("div",{class:"block"},null,-1));function L(e,T,$,t,D,W){const n=p("app-type"),r=p("var-button"),i=p("var-sticky");return h(),j("div",I,[a(n,null,{default:s(()=>[o(c(t.pack.basicUsage),1)]),_:1}),a(i,{"offset-top":54},{default:s(()=>[a(r,{type:"primary"},{default:s(()=>[o(c(t.pack.basicUsage),1)]),_:1})]),_:1}),a(n,null,{default:s(()=>[o(c(t.pack.localSticky),1)]),_:1}),_("div",E,[a(i,null,{default:s(()=>[a(r,{type:"success"},{default:s(()=>[o(c(t.pack.localSticky),1)]),_:1})]),_:1}),F])])}var se=x(z,[["render",L],["__scopeId","data-v-15a225b6"]]);export{se as default};