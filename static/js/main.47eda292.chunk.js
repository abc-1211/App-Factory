(this["webpackJsonpapp-factory"]=this["webpackJsonpapp-factory"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),l=t.n(o),c=(t(78),t(36)),i=t(37),s=t(125),u=t(13),m=t(30),p=t(50),d=t.n(p),h=t(61),b=t.n(h),E=t(62),f=t.n(E),g=t(126),v=t(128),w=t(129),k=t(130),j=t(137),x=t(134),y=t(138),O=t(131),C=Object(s.a)((function(e){return{root:{flexGrow:1},title:Object(i.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleMobile:Object(i.a)({flexGrow:1,display:"block",textAlign:"center",marginTop:e.spacing(1)},e.breakpoints.up("sm"),{display:"none"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(){var e=C(),a=Object(n.useState)(!1),t=Object(c.a)(a,2),o=t[0],l=t[1],i=r.a.useState(null),s=Object(c.a)(i,2),u=s[0],p=s[1],h=Boolean(u),E=function(e){l(e)},I=function(){p(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,{className:e.titleMobile,variant:"h6",noWrap:!0},r.a.createElement(w.a,{component:m.b,to:"/","aria-label":"Home"},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement(k.a,null,r.a.createElement(v.a,{className:e.title,variant:"h6",noWrap:!0},r.a.createElement(w.a,{component:m.b,to:"/","aria-label":"Home"},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(b.a,null)),r.a.createElement(j.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),o?r.a.createElement("div",null,r.a.createElement(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},r.a.createElement(f.a,null)),r.a.createElement(x.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:I},r.a.createElement(y.a,{onClick:I},"Profile"),r.a.createElement(y.a,{component:m.b,to:"/dashboard",onClick:I},"My dashboard"),r.a.createElement(y.a,{onClick:function(){I(),E(!1)}},"Logout"))):r.a.createElement(O.a,{onClick:function(e){return E(!0)},color:"inherit"},"Login"))))}var N=t(10),S=t(63),L=t.n(S),M=t(26),R=t(64),W=t(135);function A(e){var a=e.children,t=e.value,n=e.index,o=Object(R.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),t===n&&r.a.createElement(W.a,{p:3},r.a.createElement(v.a,null,a)))}var B=t(136),F=t(132),G=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},H=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));function P(){var e=H(),a=Object(M.a)(),t=r.a.useState(0),n=Object(c.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static",color:"default"},r.a.createElement(B.a,{value:o,onChange:function(e,a){l(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(F.a,Object.assign({label:"Summary"},G(0))),r.a.createElement(F.a,Object.assign({label:"Posts"},G(1))))),r.a.createElement(L.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){l(e)}},r.a.createElement(A,{value:o,index:0,dir:a.direction},"Here we can put a quick summary of user stats, maybe with some tables?"),r.a.createElement(A,{value:o,index:1,dir:a.direction},"This can just be the simple listing of posts")))}function T(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))}var z=t(133);function J(){return r.a.createElement("div",{className:"App"},r.a.createElement(z.a,null),r.a.createElement(m.a,null,r.a.createElement(I,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/dashboard",component:T}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t(102)},78:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.47eda292.chunk.js.map