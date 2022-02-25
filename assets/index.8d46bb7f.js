var G=Object.defineProperty,R=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var D=(e,a,t)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,O=(e,a)=>{for(var t in a||(a={}))$.call(a,t)&&D(e,t,a[t]);if(M)for(var t of M(a))J.call(a,t)&&D(e,t,a[t]);return e},z=(e,a)=>R(e,W(a));import{A as Q}from"./AppType.ed11fb41.js";import{c as X,d as Z,b as ee,f as ae}from"./components.721843ff.js";import{d as P}from"./shared.506a394a.js";import{_ as w}from"./elevation.eb606728.js";import{d as K,b as B,y as L,o as U,c as N,G as k,z as T,r as A,e as V,a as p,w as le,v as te,p as H,m as d,t as u,i as n,q as oe,$ as ne,j as o}from"./vendor.49f89f0d.js";import{r as ie}from"./elements.6395be39.js";import{I as se}from"./index.b873ddd6.js";import{B as de}from"./index.c81e339b.js";import{d as re}from"./index.9b1139e6.js";import{u as ue,a as Y,_ as ce,b as me,c as fe}from"./en-US.628e0d34.js";import{w as ve,a as pe}from"./utils.1735a57b.js";import"./index.e35ca8e8.js";import"./index.48ee5316.js";import"./index.539e8257.js";const q=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"),j=Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");function _e(){const{bindChildren:e,childProviders:a}=X(q),{length:t}=Z(j);return{length:t,collapseItem:a,bindCollapseItem:e}}const Ce={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const he=K({name:"VarCollapse",props:Ce,setup(e){const{length:a,collapseItem:t,bindCollapseItem:l}=_e(),m=B(()=>e.modelValue),C=B(()=>e.offset),c=()=>!e.accordion&&!P(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&P(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,r=(s,i)=>c()?i?e.accordion?s:[...e.modelValue,s]:e.accordion?null:e.modelValue.filter(h=>h!==s):null,_=(s,i)=>{var S,v;const h=r(s,i);(S=e["onUpdate:modelValue"])==null||S.call(e,h),(v=e.onChange)==null||v.call(e,h)},b=()=>{if(e.accordion)return t.find(({name:i})=>e.modelValue===i.value);const s=t.filter(({name:i})=>i.value===void 0?!1:e.modelValue.includes(i.value));return s.length?s:void 0},f=()=>e.accordion?t.find(({index:s,name:i})=>i.value===void 0?e.modelValue===s.value:!1):t.filter(({index:s,name:i})=>i.value===void 0?e.modelValue.includes(s.value):!1),g=()=>{if(!c())return;const s=b()||f();if(e.accordion&&!s||!e.accordion&&!s.length){t.forEach(i=>{i.init(e.accordion,!1)});return}t.forEach(i=>{const h=e.accordion?s===i:s.includes(i);i.init(e.accordion,h)})};l({active:m,offset:C,updateItem:_}),L(()=>a.value,()=>T().then(g)),L(()=>e.modelValue,()=>T().then(g))}}),be={class:"var-collapse"};function Ve(e,a,t,l,m,C){return U(),N("div",be,[k(e.$slots,"default")])}var y=w(he,[["render",Ve]]);y.install=function(e){e.component(y.name,y)};function ge(){const{parentProvider:e,bindParent:a}=ee(q),{index:t}=ae(j);if(!e||!a||!t)throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");return{index:t,collapse:e,bindCollapse:a}}const ke={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}};const ye=K({name:"VarCollapseItem",components:{VarIcon:se},props:ke,setup(e){const{index:a,collapse:t,bindCollapse:l}=ge(),m=A(null),C=A(!1),c=A(!1),{active:r,offset:_,updateItem:b}=t,f=B(()=>e.name),g=(v,F)=>{r.value===void 0||v&&P(r.value)||F===c.value||(c.value=F,I(!0))},I=v=>{e.disabled||v||b(e.name||a.value,!c.value)},s=()=>{!m.value||(m.value.style.height="",C.value=!0,T(()=>{const{offsetHeight:v}=m.value;m.value.style.height=0+"px",ie(()=>{m.value.style.height=v+"px"})}))},i=()=>{!m.value||(m.value.style.height=0+"px")},h=()=>{c.value||(C.value=!1,m.value.style.height="")};return l({index:a,name:f,init:g}),L(c,v=>{v?s():i()}),{show:C,isShow:c,offset:_,toggle:I,contentEl:m,transitionend:h}}}),Ee={class:"var-collapse-item-header__title"},Ie={class:"var-collapse-item-header__icon"},Se={class:"var-collapse-item__wrap"};function Ae(e,a,t,l,m,C){const c=V("var-icon");return U(),N("div",{class:H({"var-collapse-item":!0,"var-collapse-item__active":e.offset&&e.isShow,"var-collapse-item__disable":e.disabled})},[p("div",{class:"var-collapse-item-header",onClick:a[0]||(a[0]=r=>e.toggle())},[p("div",Ee,[k(e.$slots,"title",{},()=>[d(u(e.title),1)])]),p("div",Ie,[k(e.$slots,"icon",{},()=>[n(c,{name:e.icon,transition:250,class:H({"var-collapse-item-header__icon":!0,"var-collapse-item-header__open":e.isShow&&e.icon==="chevron-down","var-collapse-item-header__disable":e.disabled})},null,8,["name","class"])])])]),le(p("div",{class:"var-collapse-item-content",ref:"contentEl",onTransitionend:a[1]||(a[1]=(...r)=>e.transitionend&&e.transitionend(...r))},[p("div",Se,[k(e.$slots,"default")])],544),[[te,e.show]])],2)}var E=w(ye,[["render",Ae]]);E.install=function(e){e.component(E.name,E)};var Pe={basicUsage:"\u57FA\u672C\u4F7F\u7528",hideMargin:"\u9690\u85CF\u8FB9\u8DDD",accordionMode:"\u624B\u98CE\u7434\u6A21\u5F0F",disabled:"\u7981\u7528",enable:"\u542F\u7528",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",title:"\u6807\u9898",text:"\u6587\u672C",slotTitle:"\u8FD9\u662F\u6807\u9898",slotContent:"\u8FD9\u662F\u5185\u5BB9"},Be={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"};const{add:x,use:Le,pack:Te,packs:Xe,merge:Ze}=ue(),we=e=>{fe(e),Le(e)};Y("zh-CN",ce);Y("en-US",me);x("zh-CN",Pe);x("en-US",Be);const Ue={name:"CollapseExample",components:{VarCollapse:y,VarCollapseItem:E,VarButton:de,AppType:Q},setup(){const e=oe({disabled:!1,value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]}),a=t=>{console.log(t)};return ve(we),pe(re),z(O({},ne(e)),{pack:Te,changeHandle:a})}},Ne={class:"collapse-demo"},Fe=d("^_^");function Me(e,a,t,l,m,C){const c=V("app-type"),r=V("var-collapse-item"),_=V("var-collapse"),b=V("var-button");return U(),N("div",Ne,[p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.basicUsage),1)]),_:1}),n(_,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),onChange:l.changeHandle},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","onChange"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.hideMargin),1)]),_:1}),n(_,{modelValue:e.value4,"onUpdate:modelValue":a[1]||(a[1]=f=>e.value4=f),offset:!1},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.accordionMode),1)]),_:1}),n(_,{modelValue:e.value1,"onUpdate:modelValue":a[2]||(a[2]=f=>e.value1=f),accordion:"",offset:!1},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.disabled),1)]),_:1}),n(b,{onClick:a[3]||(a[3]=f=>e.disabled=!e.disabled),style:{"margin-bottom":"8px"}},{default:o(()=>[d(u(e.disabled?l.pack.enable:l.pack.disabled),1)]),_:1}),n(_,{modelValue:e.value2,"onUpdate:modelValue":a[4]||(a[4]=f=>e.value2=f)},{default:o(()=>[n(r,{title:l.pack.title,name:1,disabled:e.disabled},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"]),n(r,{title:l.pack.title,name:2,disabled:e.disabled},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.customContent),1)]),_:1}),n(_,{modelValue:e.value3,"onUpdate:modelValue":a[5]||(a[5]=f=>e.value3=f)},{default:o(()=>[n(r,{title:l.pack.slotTitle,name:"1",icon:"account-circle"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{name:"2"},{title:o(()=>[d(u(l.pack.slotTitle),1)]),icon:o(()=>[Fe]),default:o(()=>[d(" "+u(l.pack.slotContent),1)]),_:1})]),_:1},8,["modelValue"])])])}var ea=w(Ue,[["render",Me]]);export{ea as default};
