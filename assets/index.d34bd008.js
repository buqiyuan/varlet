var C=Object.defineProperty,U=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,l,u)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,V=(e,l)=>{for(var u in l||(l={}))g.call(l,u)&&v(e,u,l[u]);if(p)for(var u of p(l))w.call(l,u)&&v(e,u,l[u]);return e},f=(e,l)=>U(e,k(l));import{A as F}from"./AppType.8af12281.js";import{S as j}from"./index.f15e123b.js";import{u as A,a as c,_ as h,b as z,c as S}from"./en-US.51e06fb5.js";import{w as E,a as N}from"./utils.05837e06.js";import{_ as y}from"./elevation.7a86b580.js";import{p as B,Z as D,d as b,o as x,c as L,h as o,i as n,a as m,F as T,l as i,t as r}from"./vendor.8a125dba.js";import"./components.581beddd.js";import"./shared.cba5a5a3.js";import"./provide.92646073.js";import"./index.860f6244.js";import"./index.23ced9c1.js";import"./index.789f7251.js";var I={basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",notAvailable:"\u4E0D\u53EF\u7528",size:"\u4E0D\u540C\u5927\u5C0F",loading:"\u52A0\u8F7D\u72B6\u6001",validateValue:"\u503C\u7684\u6821\u9A8C",text:"\u662F\u5426\u6253\u5F00\u5F00\u5173",state:"\u9519\u8BEF\uFF01"},M={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"};const{add:_,use:R,pack:W,packs:me,merge:pe}=A(),Z=e=>{S(e),R(e)};c("zh-CN",h);c("en-US",z);_("zh-CN",I);_("en-US",M);const q={name:"SwitchExample",components:{VarSwitch:j,AppType:F},setup(){const e=B({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return E(Z),N(),f(V({},D(e)),{pack:W})}},G={class:"var-switch__example-block"},H={class:"var-switch__example-block"},J={class:"var-switch__example-block"},K={class:"var-switch__example-block"},O={class:"var-switch__example-block"};function P(e,l,u,t,Q,X){const d=b("app-type"),s=b("var-switch");return x(),L(T,null,[o(d,null,{default:n(()=>[i(r(t.pack.basicUsage),1)]),_:1}),m("div",G,[o(s,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.notAvailable),1)]),_:1}),m("div",H,[o(s,{modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value1=a),disabled:""},null,8,["modelValue"]),o(s,{modelValue:e.value1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value1=a),readonly:""},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.customColor),1)]),_:1}),m("div",J,[o(s,{modelValue:e.value2,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value2=a),ripple:!1},null,8,["modelValue"]),o(s,{modelValue:e.value2,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value2=a),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.size),1)]),_:1}),m("div",K,[o(s,{modelValue:e.value3,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value3=a),size:"15"},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value3=a)},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value3=a),size:"25"},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.loading),1)]),_:1}),m("div",O,[o(s,{"model-value":!0,loading:""}),o(s,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),o(d,null,{default:n(()=>[i(r(t.pack.validateValue),1)]),_:1}),o(s,{modelValue:e.value4,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value4=a),rules:[a=>a===!0||t.pack.state]},null,8,["modelValue","rules"])],64)}var ve=y(q,[["render",P],["__scopeId","data-v-d0073fe0"]]);export{ve as default};