(this["webpackJsonpapp-factory"]=this["webpackJsonpapp-factory"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),l=t.n(o),c=(t(76),t(36)),i=t(37),s=t(133),u=t(13),m=t(134),p=t(138),d=t(30),h=t(137),b=t(136),E=t(145),f=t(49),g=t.n(f),v=t(57),w=t.n(v),k=t(58),j=t.n(k),x=t(142),y=t(146),O=t(139),C=Object(s.a)((function(e){return{root:{flexGrow:1},title:Object(i.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleMobile:Object(i.a)({flexGrow:1,display:"block",textAlign:"center",marginTop:e.spacing(1)},e.breakpoints.up("sm"),{display:"none"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(){var e=C(),a=Object(n.useState)(!1),t=Object(c.a)(a,2),o=t[0],l=t[1],i=r.a.useState(null),s=Object(c.a)(i,2),u=s[0],f=s[1],v=Boolean(u),k=function(e){l(e)},I=function(){f(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{position:"static"},r.a.createElement(b.a,{className:e.titleMobile,variant:"h6",noWrap:!0},r.a.createElement(h.a,{component:d.b,to:"/","aria-label":"Home"},r.a.createElement(g.a,null)),"App Factory"),r.a.createElement(p.a,null,r.a.createElement(b.a,{className:e.title,variant:"h6",noWrap:!0},r.a.createElement(h.a,{component:d.b,to:"/","aria-label":"Home"},r.a.createElement(g.a,null)),"App Factory"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(w.a,null)),r.a.createElement(E.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),o?r.a.createElement("div",null,r.a.createElement(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit"},r.a.createElement(j.a,null)),r.a.createElement(x.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:I},r.a.createElement(y.a,{onClick:I},"Profile"),r.a.createElement(y.a,{component:d.b,to:"/dashboard",onClick:I},"My dashboard"),r.a.createElement(y.a,{onClick:function(){I(),k(!1)}},"Logout"))):r.a.createElement(O.a,{onClick:function(e){return k(!0)},color:"inherit"},"Login"))))}var N=t(141),S=t(10),L=t(59),M=t.n(L),R=t(26),W=t(144),A=t(140),B=t(60),F=t(143);function G(e){var a=e.children,t=e.value,n=e.index,o=Object(B.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),t===n&&r.a.createElement(F.a,{p:3},r.a.createElement(b.a,null,a)))}var H=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},P=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));function T(){var e=P(),a=Object(R.a)(),t=r.a.useState(0),n=Object(c.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{position:"static",color:"default"},r.a.createElement(W.a,{value:o,onChange:function(e,a){l(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(A.a,Object.assign({label:"Summary"},H(0))),r.a.createElement(A.a,Object.assign({label:"Posts"},H(1))))),r.a.createElement(M.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){l(e)}},r.a.createElement(G,{value:o,index:0,dir:a.direction},"Here we can put a quick summary of user stats, maybe with some tables?"),r.a.createElement(G,{value:o,index:1,dir:a.direction},"This can just be the simple listing of posts")))}function z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null))}function J(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,null),r.a.createElement(d.a,null,r.a.createElement(I,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/dashboard",component:z}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(100)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.e98f5f18.chunk.js.map