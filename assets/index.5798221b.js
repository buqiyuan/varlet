var W=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var D=(e,a,t)=>a in e?W(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,O=(e,a)=>{for(var t in a||(a={}))X.call(a,t)&&D(e,t,a[t]);if(M)for(var t of M(a))Z.call(a,t)&&D(e,t,a[t]);return e},z=(e,a)=>J(e,Q(a));import{A as $}from"./AppType.120606bc.js";import{j as x,l as ee,c as K,d as H,z as P,h as ae,m as le}from"./components.57927f97.js";import{_ as w}from"./elevation.4d11ec3f.js";import{d as Y,b as B,y as L,o as N,c as U,G as y,p as b,z as T,r as A,e as k,a as v,w as te,v as ne,m as d,t as u,i as o,q as oe,$ as se,j as n}from"./vendor.49f89f0d.js";import{r as ie}from"./elements.600984cd.js";import{I as de}from"./index.d410b4f8.js";import{B as re}from"./index.dc4624d0.js";import{d as ue}from"./index.aae57b26.js";import{u as ce,a as j,_ as me,b as fe,c as ve}from"./en-US.628e0d34.js";import{w as pe,a as Ce}from"./utils.3a4595f4.js";import"./index.6e927d89.js";import"./index.48ee5316.js";import"./index.9e0cd9a2.js";const q=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"),G=Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");function he(){const{bindChildren:e,childProviders:a}=x(q),{length:t}=ee(G);return{length:t,collapseItem:a,bindCollapseItem:e}}const be={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Ve}=K("collapse"),ge=Y({name:"VarCollapse",props:be,setup(e){const{length:a,collapseItem:t,bindCollapseItem:l}=he(),m=B(()=>e.modelValue),C=B(()=>e.offset),c=()=>!e.accordion&&!P(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&P(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,r=(i,s)=>c()?s?e.accordion?i:[...e.modelValue,i]:e.accordion?null:e.modelValue.filter(h=>h!==i):null,p=(i,s)=>{const h=r(i,s);H(e["onUpdate:modelValue"],h),H(e.onChange,h)},g=()=>{if(e.accordion)return t.find(({name:s})=>e.modelValue===s.value);const i=t.filter(({name:s})=>s.value===void 0?!1:e.modelValue.includes(s.value));return i.length?i:void 0},f=()=>e.accordion?t.find(({index:i,name:s})=>s.value===void 0?e.modelValue===i.value:!1):t.filter(({index:i,name:s})=>s.value===void 0?e.modelValue.includes(i.value):!1),_=()=>{if(!c())return;const i=g()||f();if(e.accordion&&!i||!e.accordion&&!i.length){t.forEach(s=>{s.init(e.accordion,!1)});return}t.forEach(s=>{const h=e.accordion?i===s:i.includes(s);s.init(e.accordion,h)})};return l({active:m,offset:C,updateItem:p}),L(()=>a.value,()=>T().then(_)),L(()=>e.modelValue,()=>T().then(_)),{n:Ve}}});function ke(e,a,t,l,m,C){return N(),U("div",{class:b(e.n())},[y(e.$slots,"default")],2)}var E=w(ge,[["render",ke]]);E.install=function(e){e.component(E.name,E)};function _e(){const{parentProvider:e,bindParent:a}=ae(q),{index:t}=le(G);if(!e||!a||!t)throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");return{index:t,collapse:e,bindCollapse:a}}const ye={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}};const{n:Ee,classes:Ie}=K("collapse-item"),Se=Y({name:"VarCollapseItem",components:{VarIcon:de},props:ye,setup(e){const{index:a,collapse:t,bindCollapse:l}=_e(),m=A(null),C=A(!1),c=A(!1),{active:r,offset:p,updateItem:g}=t,f=B(()=>e.name),_=(V,F)=>{r.value===void 0||V&&P(r.value)||F===c.value||(c.value=F,S(!0))},S=V=>{e.disabled||V||g(e.name||a.value,!c.value)},i=()=>{!m.value||(m.value.style.height="",C.value=!0,T(()=>{const{offsetHeight:V}=m.value;m.value.style.height=0+"px",ie(()=>{m.value.style.height=V+"px"})}))},s=()=>{!m.value||(m.value.style.height=0+"px")},h=()=>{c.value||(C.value=!1,m.value.style.height="")};return l({index:a,name:f,init:_}),L(c,V=>{V?i():s()}),{n:Ee,classes:Ie,show:C,isShow:c,offset:p,toggle:S,contentEl:m,transitionend:h}}});function Ae(e,a,t,l,m,C){const c=k("var-icon");return N(),U("div",{class:b(e.classes(e.n(),[e.offset&&e.isShow,e.n("--active")],[e.disabled,e.n("--disable")]))},[v("div",{class:b(e.n("header")),onClick:a[0]||(a[0]=r=>e.toggle())},[v("div",{class:b(e.n("header-title"))},[y(e.$slots,"title",{},()=>[d(u(e.title),1)])],2),v("div",{class:b(e.n("header-icon"))},[y(e.$slots,"icon",{},()=>[o(c,{name:e.icon,transition:250,class:b(e.classes(e.n("header-icon"),[e.isShow&&e.icon==="chevron-down",e.n("header-open")],[e.disabled,e.n("header--disable")]))},null,8,["name","class"])])],2)],2),te(v("div",{class:b(e.n("content")),ref:"contentEl",onTransitionend:a[1]||(a[1]=(...r)=>e.transitionend&&e.transitionend(...r))},[v("div",{class:b(e.n("content-wrap"))},[y(e.$slots,"default")],2)],34),[[ne,e.show]])],2)}var I=w(Se,[["render",Ae]]);I.install=function(e){e.component(I.name,I)};var Pe={basicUsage:"\u57FA\u672C\u4F7F\u7528",hideMargin:"\u9690\u85CF\u8FB9\u8DDD",accordionMode:"\u624B\u98CE\u7434\u6A21\u5F0F",disabled:"\u7981\u7528",enable:"\u542F\u7528",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",title:"\u6807\u9898",text:"\u6587\u672C",slotTitle:"\u8FD9\u662F\u6807\u9898",slotContent:"\u8FD9\u662F\u5185\u5BB9"},Be={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"};const{add:R,use:Le,pack:Te,packs:$e,merge:xe}=ce(),we=e=>{ve(e),Le(e)};j("zh-CN",me);j("en-US",fe);R("zh-CN",Pe);R("en-US",Be);const Ne={name:"CollapseExample",components:{VarCollapse:E,VarCollapseItem:I,VarButton:re,AppType:$},setup(){const e=oe({disabled:!1,value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]}),a=t=>{console.log(t)};return pe(we),Ce(ue),z(O({},se(e)),{pack:Te,changeHandle:a})}},Ue={class:"collapse-demo"},Fe=d("^_^");function Me(e,a,t,l,m,C){const c=k("app-type"),r=k("var-collapse-item"),p=k("var-collapse"),g=k("var-button");return N(),U("div",Ue,[v("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.basicUsage),1)]),_:1}),o(p,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),onChange:l.changeHandle},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","onChange"])]),v("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.hideMargin),1)]),_:1}),o(p,{modelValue:e.value4,"onUpdate:modelValue":a[1]||(a[1]=f=>e.value4=f),offset:!1},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),v("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.accordionMode),1)]),_:1}),o(p,{modelValue:e.value1,"onUpdate:modelValue":a[2]||(a[2]=f=>e.value1=f),accordion:"",offset:!1},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),v("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.disabled),1)]),_:1}),o(g,{onClick:a[3]||(a[3]=f=>e.disabled=!e.disabled),style:{"margin-bottom":"8px"}},{default:n(()=>[d(u(e.disabled?l.pack.enable:l.pack.disabled),1)]),_:1}),o(p,{modelValue:e.value2,"onUpdate:modelValue":a[4]||(a[4]=f=>e.value2=f)},{default:n(()=>[o(r,{title:l.pack.title,name:1,disabled:e.disabled},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"]),o(r,{title:l.pack.title,name:2,disabled:e.disabled},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),v("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.customContent),1)]),_:1}),o(p,{modelValue:e.value3,"onUpdate:modelValue":a[5]||(a[5]=f=>e.value3=f)},{default:n(()=>[o(r,{title:l.pack.slotTitle,name:"1",icon:"account-circle"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{name:"2"},{title:n(()=>[d(u(l.pack.slotTitle),1)]),icon:n(()=>[Fe]),default:n(()=>[d(" "+u(l.pack.slotContent),1)]),_:1})]),_:1},8,["modelValue"])])])}var ea=w(Ne,[["render",Me]]);export{ea as default};
