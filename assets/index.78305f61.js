import{I as C}from"./index.d410b4f8.js";import{R as S}from"./index.6e927d89.js";import{S as _}from"./index.a28ccb1c.js";import{A as F}from"./AppType.120606bc.js";import{q as z,r as f,x as I,L as B,e as h,f as N,o as d,c as k,i as o,j as t,a as g,F as x,k as E,m as l,t as a,w as A,n as L}from"./vendor.49f89f0d.js";import{d as D}from"./index.aae57b26.js";import{u as U,a as b,_ as T,b as V,c as j}from"./en-US.628e0d34.js";import{w as q,a as M}from"./utils.3a4595f4.js";import{_ as R}from"./elevation.4d11ec3f.js";import"./components.57927f97.js";import"./elements.600984cd.js";import"./index.48ee5316.js";import"./index.9e0cd9a2.js";import"./zIndex.8c13fd4c.js";import"./lock.c5636ec8.js";var G=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json"],H={iconSize:"\u56FE\u6807\u5C3A\u5BF8",iconColor:"\u56FE\u6807\u989C\u8272",useImage:"\u4F7F\u7528\u56FE\u7247",events:"\u6CE8\u518C\u4E8B\u4EF6",iconAnimation:"\u56FE\u6807\u5207\u6362\u52A8\u753B (\u70B9\u51FB\u5207\u6362)",toggle:"\u5207\u6362",iconList:"\u56FE\u6807\u5217\u8868 (\u70B9\u51FB\u590D\u5236)",copySuccess:"\u590D\u5236\u6210\u529F",clickSuccess:"\u70B9\u51FB\u6210\u529F"},J={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"};const{add:w,use:K,pack:v,packs:de,merge:ke}=U(),O=r=>{j(r),K(r)};b("zh-CN",T);b("en-US",V);w("zh-CN",H);w("en-US",J);const P={name:"IconExample",components:{VarIcon:C,AppType:F},directives:{Ripple:S},setup(){const r=z(G),n=f("information"),m=f("#fff"),e=()=>{n.value=n.value==="information"?"checkbox-marked-circle":"information"};return I(()=>{new B(".example__icon",{text:s=>`<var-icon name="${s.getAttribute("data-clipboard-text")}" />`}).on("success",s=>{_.success(`${s.text}${v.value.copySuccess}!`)})}),q(O),M(D,p=>{m.value=p==="darkThemes"?"#303030":"#fff"}),{pack:v,background:m,iconNames:r,iconName:n,toggle:e,Snackbar:_}}},Q={class:"example__icons"},W=["data-clipboard-text"],X={class:"example__icon-name"};function Y(r,n,m,e,p,s){const i=h("app-type"),c=h("var-icon"),y=N("ripple");return d(),k(x,null,[o(i,null,{default:t(()=>[l(a(e.pack.iconSize),1)]),_:1}),o(c,{class:"example__animation-icon",name:"checkbox-marked-circle"}),o(c,{class:"example__animation-icon",name:"checkbox-marked-circle",size:26}),o(i,null,{default:t(()=>[l(a(e.pack.iconColor),1)]),_:1}),o(c,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff"}),o(c,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",size:26}),o(i,null,{default:t(()=>[l(a(e.pack.useImage),1)]),_:1}),o(c,{class:"example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(i,null,{default:t(()=>[l(a(e.pack.events),1)]),_:1}),o(c,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",onClick:n[0]||(n[0]=()=>e.Snackbar.success(e.pack.clickSuccess))}),o(i,null,{default:t(()=>[l(a(e.pack.iconAnimation),1)]),_:1}),o(c,{class:"example__animation-icon",color:"#2979ff",size:30,transition:300,name:e.iconName,onClick:e.toggle},null,8,["name","onClick"]),o(i,null,{default:t(()=>[l(a(e.pack.iconList),1)]),_:1}),g("div",Q,[(d(!0),k(x,null,E(e.iconNames,u=>A((d(),k("div",{class:"example__icon var-elevation--2",style:L({background:e.background}),"data-clipboard-text":u,key:u},[o(c,{name:u},null,8,["name"]),g("div",X,a(u),1)],12,W)),[[y]])),128))])],64)}var _e=R(P,[["render",Y],["__scopeId","data-v-3447a07e"]]);export{_e as default};
