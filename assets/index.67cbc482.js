import{j as Y,l as j,c as O,d as R,h as G,m as W}from"./components.57927f97.js";import{_ as E}from"./elevation.4d11ec3f.js";import{d as N,b as m,o as u,c as h,G as I,p as f,n as b,r as C,y as q,e as S,a as k,l as B,t as r,h as H,i as a,j as i,F as J,m as c}from"./vendor.49f89f0d.js";import{I as Q}from"./index.d410b4f8.js";import{B as X}from"./index.dc4624d0.js";import{A as Z}from"./AppType.120606bc.js";import{d as x}from"./index.aae57b26.js";import{u as ee,a as V,_ as te,b as ne,c as ae}from"./en-US.628e0d34.js";import{w as ie,a as oe}from"./utils.3a4595f4.js";import"./elements.600984cd.js";import"./index.6e927d89.js";import"./index.48ee5316.js";import"./index.9e0cd9a2.js";const F=Symbol("STEPS_BIND_STEP_KEY"),T=Symbol("STEPS_COUNT_STEP_KEY");function re(){const{bindChildren:e,childProviders:o}=Y(F),{length:s}=j(T);return{length:s,step:o,bindStep:e}}function ce(e){return["horizontal","vertical"].includes(e)}const se={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:ce},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const{n:le}=O("steps"),ue=N({name:"VarSteps",props:se,setup(e){const o=m(()=>e.active),s=m(()=>e.activeColor),t=m(()=>e.inactiveColor),p=m(()=>e.direction),{length:d,bindStep:l}=re();return l({active:o,length:d,direction:p,activeColor:s,inactiveColor:t,clickStep:_=>{R(e.onClickStep,_)}}),{n:le}}});function pe(e,o,s,t,p,d){return u(),h("div",{class:f(e.n()),style:b({flexDirection:e.direction==="horizontal"?"row":"column"})},[I(e.$slots,"default")],6)}var y=E(ue,[["render",pe]]);y.install=function(e){e.component(y.name,y)};const de={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function ve(){const{parentProvider:e,bindParent:o}=G(F),{index:s}=W(T);if(!e||!o||!s)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:s,steps:e,bindSteps:o}}const fe=N({name:"VarStep",components:{VarIcon:Q},props:de,setup(){const e=C(null),o=C(""),s=C(!1),{index:t,steps:p,bindSteps:d}=ve(),{active:l,length:n,activeColor:v,inactiveColor:_,direction:P,clickStep:U}=p,$=m(()=>l.value===t.value),w=m(()=>t.value!==-1&&l.value>t.value),D={index:t},K=()=>U(t.value),L=A=>{P.value==="horizontal"&&(e.value=A)};return d(D),q(n,A=>{if(s.value=A-1===t.value,e.value){const M=e.value.offsetWidth/2-14;o.value=`0 -${M}px`}}),{main:e,index:t,isActive:w,isCurrent:$,direction:P,lineMargin:o,activeColor:v,inactiveColor:_,isLastChild:s,click:K,getRef:L}}}),me={class:"var-step"},_e={key:3};function Se(e,o,s,t,p,d){const l=S("var-icon");return u(),h("div",me,[k("div",{class:f(`var-step-${e.direction}`)},[k("div",{class:f(`var-step-${e.direction}__main`),ref:e.getRef},[k("div",{class:f({[`var-step-${e.direction}__tag`]:!0,[`var-step-${e.direction}__tag--active`]:e.isActive||e.isCurrent}),style:b({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(u(),B(l,{key:0,class:"var-step__icon","var-step-cover":"",name:e.activeIcon},null,8,["name"])):e.isCurrent&&e.currentIcon?(u(),B(l,{key:1,class:"var-step__icon","var-step-cover":"",name:e.currentIcon},null,8,["name"])):e.inactiveIcon?(u(),B(l,{key:2,class:"var-step__icon","var-step-cover":"",name:e.inactiveIcon},null,8,["name"])):(u(),h("span",_e,r(e.index+1),1))],6),k("div",{class:f({[`var-step-${e.direction}__content`]:!0,[`var-step-${e.direction}__content--active`]:e.isActive||e.isCurrent}),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[I(e.$slots,"default")],2)],2),e.isLastChild?H("v-if",!0):(u(),h("div",{key:0,class:f(`var-step-${e.direction}__line`),style:b({margin:e.lineMargin})},null,6))],2)])}var g=E(fe,[["render",Se]]);g.install=function(e){e.component(g.name,g)};var he={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},ke={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:z,use:Ce,pack:ye,packs:Ke,merge:Le}=ee(),ge=e=>{ae(e),Ce(e)};V("zh-CN",te);V("en-US",ne);z("zh-CN",he);z("en-US",ke);const Ae={name:"StepsExample",components:{VarSteps:y,VarStep:g,VarButton:X,AppType:Z},setup(){const e=C(0),o=()=>{e.value=(e.value+1)%4};return ie(ge),oe(x),{pack:ye,next:o,active:e}}};function Be(e,o,s,t,p,d){const l=S("app-type"),n=S("var-step"),v=S("var-steps"),_=S("var-button");return u(),h(J,null,[a(l,null,{default:i(()=>[c(r(t.pack.basicUsage),1)]),_:1}),a(v,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.customStyle),1)]),_:1}),a(v,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.vertical),1)]),_:1}),a(v,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(_,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[c(r(t.pack.next),1)]),_:1},8,["onClick"])],64)}var Me=E(Ae,[["render",Be]]);export{Me as default};
