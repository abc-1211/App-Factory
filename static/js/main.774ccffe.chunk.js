(this["webpackJsonpapp-factory"]=this["webpackJsonpapp-factory"]||[]).push([[0],{113:function(e){e.exports=JSON.parse('[{"title":"HTML"},{"title":"JavaScript"},{"title":"Css"},{"title":"jQuery"},{"title":"React"},{"title":"Angular"},{"title":"Bootstrap"},{"title":"MongoDB"},{"title":"Express"},{"title":"Node"},{"title":"CLI"}]')},116:function(e,t,a){e.exports=a.p+"static/media/google-logo.cea6dc4b.webp"},138:function(e,t,a){e.exports=a(199)},143:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=(a(143),a(30)),l=a(12),s=a(235),m=a(8),u=a(28),p=a(76),d=a.n(p),b=a(108),g=a.n(b),h=a(239),f=a(123),E=a(240),v=a(241),O=a(269),j=a(120),k=a(270),y=a(244),x=a(62),C=a.n(x),w=a(103),N=a(104),L=a.n(N),B=Object(n.createContext)(),D=function(e){var t=e.children,a=Object(n.useState)({}),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],p=m[1],d=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("http://localhost:5000/api/user",{withCredentials:!0});case 3:t=e.sent,console.log(t.data.user),l(t.data.user),p(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("ERROR - UserState.js - getUser",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),r.a.createElement("div",null,r.a.createElement(B.Provider,{value:{user:c,setUser:l,isLoaded:u,setIsLoaded:p}},t))},I=a(4),S=a(238),A=a(268),R=Object(s.a)((function(e){return{link:{textDecoration:"none !important",color:"black"},pointer:{cursor:"pointer"}}})),T=Object(I.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(S.a);function M(e){var t=e.handleMenu,a=Object(n.useContext)(B).user,o=R();return r.a.createElement("div",null,r.a.createElement(T,{className:o.pointer,overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:t},r.a.createElement(A.a,{alt:a.displayName,src:a.avatar||"Open Menu"})))}var P=Object(s.a)((function(e){return{root:{flexGrow:1},homeButton:{color:"#fff",padding:"5px",paddingTop:"0"},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleMobile:Object(l.a)({flexGrow:1,display:"block",textAlign:"center",marginTop:e.spacing(1)},e.breakpoints.up("sm"),{display:"none"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.c)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),link:{textDecoration:"none !important",color:"black"},pointer:{cursor:"pointer"}}}));function W(){var e=Object(n.useContext)(B),t=e.user,a=e.isLoaded,o=P(),c=r.a.useState(null),l=Object(i.a)(c,2),s=l[0],m=l[1],p=Boolean(s),b=function(){m(null)};return r.a.createElement("div",{className:o.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(f.a,{className:o.titleMobile,variant:"h6",noWrap:!0},r.a.createElement(E.a,{component:u.b,to:"/","aria-label":"Home",className:o.homeButton},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement(v.a,null,r.a.createElement(f.a,{className:o.title,variant:"h6",noWrap:!0},r.a.createElement(E.a,{component:u.b,to:"/","aria-label":"Home",className:o.homeButton},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(g.a,null)),r.a.createElement(O.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),t&&a?r.a.createElement("div",null,r.a.createElement(M,{handleMenu:function(e){m(e.currentTarget)}}),r.a.createElement(j.a,{id:"menu-appbar",className:o.pointer,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},keepMounted:!0,getContentAnchorEl:null,transformOrigin:{vertical:"top",horizontal:"center"},open:p,onClose:b},r.a.createElement(k.a,{onClick:b},"Profile"),r.a.createElement(k.a,{component:u.b,to:"/dashboard",onClick:b},"My dashboard"),r.a.createElement("a",{href:"http://localhost:5000/auth/logout",className:o.link},r.a.createElement(k.a,{onClick:function(){b()}},"Logout")))):r.a.createElement(y.a,{component:u.b,to:"/login","aria-label":"Login",color:"inherit"},"Login"))))}var F=a(13),G=a(245),q=a(246),J=a(109),H=a.n(J),z=Object(s.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function U(){var e=z();return r.a.createElement(G.a,{in:!0},r.a.createElement(q.a,{component:u.b,to:"/posts/new",className:e.fab,color:"secondary","aria-label":"New Post"},r.a.createElement(H.a,null)))}var K=a(110),Y=a.n(K),$=a(25),Q=a(50),V=a(261);function X(e){var t=e.children,a=e.value,n=e.index,o=Object(Q.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),a===n&&r.a.createElement(V.a,{p:3},r.a.createElement(f.a,null,t)))}var Z=a(264),_=a(247),ee=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},te=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));function ae(){var e=te(),t=Object($.a)(),a=r.a.useState(0),n=Object(i.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static",color:"default"},r.a.createElement(Z.a,{value:o,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(_.a,Object.assign({label:"Summary"},ee(0))),r.a.createElement(_.a,Object.assign({label:"Posts"},ee(1))))),r.a.createElement(Y.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){c(e)}},r.a.createElement(X,{value:o,index:0,dir:t.direction},"Here we can put a quick summary of user stats, maybe with some tables?"),r.a.createElement(X,{value:o,index:1,dir:t.direction},"This can just be the simple listing of posts")))}function ne(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null))}var re=a(119),oe=a(15),ce=a(69),ie=a(111),le=a.n(ie),se=a(112),me=a.n(se),ue=a(263),pe=a(113),de=a(248),be=a(262),ge=a(249),he=a(250),fe=a(251),Ee=a(252),ve=a(266);function Oe(e){var t=e.postData,a=e.setPostData,n=e.handleChange,o=e.handleCategory,c=e.err,i=e.setErr,l=e.inputErrCheck;return r.a.createElement(de.a,{container:!0,spacing:3},r.a.createElement(de.a,{item:!0,xs:12,sm:3},r.a.createElement(be.a,{required:!0,fullWidth:!0,id:"title",name:"title",label:"Title",value:t.title,onChange:n,onBlur:l,error:c.title})),r.a.createElement(de.a,{item:!0,xs:12,sm:12},r.a.createElement(be.a,{required:!0,fullWidth:!0,id:"summary",name:"summary",label:"Brief summary",value:t.summary,onChange:n,onBlur:l,error:c.summary})),r.a.createElement(de.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h6"},"Select all categories that apply:"),r.a.createElement(ge.a,{required:!0,fullWidth:!0,error:c.categories||c.categoriesOverLimit,component:"fieldset"},r.a.createElement(he.a,{component:"legend"},"Pick up to two"),r.a.createElement(fe.a,{row:!0},t.categories.map((function(e){var t=e.name,a=e.checked;return r.a.createElement(Ee.a,{key:t,label:t,control:r.a.createElement(ve.a,{name:t,checked:a,onChange:o,inputProps:{"aria-label":"primary checkbox"}})})}))))),r.a.createElement(de.a,{item:!0,xs:12,sm:12},r.a.createElement(f.a,{variant:"h6",color:c.description?"error":"initial"},"Enter detailed description*:"),r.a.createElement(le.a,{editor:me.a,onChange:function(e,n){var r=n.getData();a(Object(oe.a)(Object(oe.a)({},t),{},{description:r})),i(Object(oe.a)(Object(oe.a)({},c),{},{description:0===r.length}))},onBlur:function(e,t){0===t.getData().length&&i(Object(oe.a)(Object(oe.a)({},c),{},{description:!0}))}})),r.a.createElement(de.a,{item:!0,xs:12,sm:12},r.a.createElement(ue.a,{multiple:!0,id:"tags-standard",options:pe,getOptionLabel:function(e){return e.title},renderInput:function(e){return r.a.createElement(be.a,Object.assign({},e,{variant:"standard",label:"Technologies required (optional)"}))},onChange:function(e,n){return a(Object(oe.a)(Object(oe.a)({},t),{},{technologies:n}))}})))}var je=a(267),ke=a(255),ye=a(253),xe=a(254);function Ce(e){var t=e.isAlertOpen,a=e.setAlert,n=e.errorKey,o=function(){a({open:!1,key:""})};return r.a.createElement("div",null,r.a.createElement(je.a,{open:t,onClose:o,"aria-labelledby":"Error","aria-describedby":"There is something wrong."},r.a.createElement(ye.a,null,"categoriesOverLimit"===n?r.a.createElement(xe.a,{id:"alert-dialog-description"},"Too many categories selected."):r.a.createElement(xe.a,{id:"alert-dialog-description"},"You need to add ".concat("categories"===n||"something"===n?"":"a ").concat(n))),r.a.createElement(ke.a,null,r.a.createElement(y.a,{onClick:o,color:"primary",autoFocus:!0},"Okay"))))}var we=a(242),Ne=a(256),Le=a(122),Be=a(115),De=a.n(Be),Ie=Object(s.a)((function(e){return{root:Object(l.a)({marginTop:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,backgroundColor:ce.a[500],"&:hover":{backgroundColor:ce.a[600]}}}}));function Se(){var e=Ie(),t=Object(n.useState)({title:"",summary:"",description:"",categories:[{name:"Business",checked:!1},{name:"Design",checked:!1},{name:"Gaming",checked:!1},{name:"Journalism",checked:!1},{name:"Marketing",checked:!1}],technologies:[]}),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)({title:!1,summary:!1,categories:!1,categoriesOverLimit:!1,description:!1}),m=Object(i.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)({open:!1,key:""}),b=Object(i.a)(d,2),g=b[0],h=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a,{in:!0,style:{transitionDelay:"300ms"}},r.a.createElement(Ne.a,{component:Le.a,className:e.root},r.a.createElement(f.a,{variant:"h4"},"Enter Your New App Idea:"),r.a.createElement("br",null),r.a.createElement(Oe,{postData:o,setPostData:c,handleChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(oe.a)(Object(oe.a)({},o),{},Object(l.a)({},a,n)))},handleCategory:function(e){var t=e.target,a=t.name,n=t.checked,r=o.categories,i=r.findIndex((function(e){return e.name===a})),l=Object(re.a)(r);l[i]={name:a,checked:n},c(Object(oe.a)(Object(oe.a)({},o),{},{categories:l}));var s=l.filter((function(e){return e.checked})).length;p((function(e){return Object(oe.a)(Object(oe.a)({},e),{},{categories:0===s,categoriesOverLimit:s>2})}))},inputErrCheck:function(e){var t=e.target,a=t.name,n=t.value;p(Object(oe.a)(Object(oe.a)({},u),{},Object(l.a)({},a,0===n.length)))},err:u,setErr:p}))),r.a.createElement(Ce,{isAlertOpen:g.open,setAlert:h,errorKey:g.key}),r.a.createElement(G.a,{in:!0},r.a.createElement(q.a,{onClick:function(){var e=function(e,t){var a=t.title,n=t.summary,r=t.description,o=t.categories;if(a+n+r==="")return"something";if(0===a.length)return"title";if(0===n.length)return"summary";if(0===r.length)return"description";if(0===o.filter((function(e){return e.checked})).length)return"categories";for(var c in e)if(e.hasOwnProperty(c)&&!0===e[c])return c;return!1}(u,o);if(!1===e){var t=o.categories.filter((function(e){return e.checked})).map((function(e){return e.name})),a=Object(oe.a)(Object(oe.a)({},o),{},{categories:t});console.log(a)}else h({open:!0,key:e})},className:e.fab,color:"secondary","aria-label":"New Post"},r.a.createElement(De.a,null))))}var Ae=a(117),Re=a.n(Ae),Te=a(116),Me=a.n(Te),Pe=Object(s.a)((function(e){return{facebook:{color:"#ffffff",backgroundColor:"#3b5998",margin:15,width:270,"&:hover, &:focus":{backgroundColor:"#003069"}},btnContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},icon:{marginRight:10},google:{width:270},img:{height:22,marginRight:10},poster:Object(l.a)({},e.breakpoints.up(780),{width:"50%"})}}));function We(){var e=Pe();return r.a.createElement("div",{className:e.poster},r.a.createElement(f.a,{variant:"h6"},"Sign up or login as a poster"),r.a.createElement("div",{className:e.btnContainer},r.a.createElement(y.a,{variant:"contained",className:e.facebook,href:"http://localhost:5000/auth/facebook"},r.a.createElement(Re.a,{className:e.icon}),"Continue with Facebook"),r.a.createElement(y.a,{variant:"outlined",href:"http://localhost:5000/auth/google",className:e.google},r.a.createElement("img",{src:Me.a,alt:"google",className:e.img}),"Continue with Google")))}var Fe=a(118),Ge=a.n(Fe),qe=Object(s.a)((function(e){return{github:{color:"#ffffff",backgroundColor:"#333",margin:15,width:270,"&:hover, &:focus":{backgroundColor:"#0c0c0c"}},btnContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},icon:{marginRight:10},developer:Object(l.a)({},e.breakpoints.up(780),{width:"50%"})}}));function Je(){var e=qe();return r.a.createElement("div",{className:e.developer},r.a.createElement(f.a,{variant:"h6"},"Sign up or login as a developer"),r.a.createElement("div",{className:e.btnContainer},r.a.createElement(y.a,{variant:"contained",className:e.github,color:"primary",href:"http://localhost:5000/auth/github"},r.a.createElement(Ge.a,{className:e.icon}),"Continue with Github")))}var He=a(257),ze=a(258),Ue=a(259),Ke=Object(s.a)((function(e){var t;return{container:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",width:"90%",flexGrow:1},root:(t={minWidth:"90%"},Object(l.a)(t,e.breakpoints.up(780),{minWidth:"60%"}),Object(l.a)(t,"textAlign","center"),Object(l.a)(t,"display","flex"),Object(l.a)(t,"justifyContent","center"),Object(l.a)(t,"flexDirection","column"),t),divider:{marginTop:20,marginBottom:20},dividerContainer:Object(l.a)({display:"flex",alignItems:"center",marginTop:20,marginBottom:20},e.breakpoints.up(780),{display:"none"}),border:{borderBottom:"1px solid black",width:"50%"},content:{paddingLeft:10,paddingRight:10},flex:Object(l.a)({display:"flex",flexDirection:"column"},e.breakpoints.up(780),{flexDirection:"row",justifyContent:"space-evenly"}),vertical:Object(l.a)({display:"none"},e.breakpoints.up(780),{display:"block",border:"1px solid ".concat(e.palette.divider),marginTop:20}),title:{marginBottom:20}}}));function Ye(){var e=Ke();return r.a.createElement("div",{className:e.container},r.a.createElement(we.a,{in:!0,timeout:2e3},r.a.createElement(He.a,{className:e.root,variant:"outlined"},r.a.createElement(ze.a,null,r.a.createElement(f.a,{variant:"h5",component:"h2",className:e.title},"Welcome to App Factory"),r.a.createElement("div",{className:e.flex},r.a.createElement(We,null),r.a.createElement("div",{className:e.dividerContainer},r.a.createElement("div",{className:e.border}),r.a.createElement(f.a,{component:"span",className:e.content},"or"),r.a.createElement("div",{className:e.border})),r.a.createElement(Ue.a,{className:e.vertical,orientation:"vertical",flexItem:!0}),r.a.createElement(Je,null))))))}function $e(e){var t=e.component,a=Object(Q.a)(e,["component"]),o=Object(n.useContext)(B),c=o.user,i=o.isLoaded;return r.a.createElement(F.b,Object.assign({},a,{render:function(e){return i?!c&&i?r.a.createElement(F.a,{to:{pathname:"/login",state:{from:e.location}}}):r.a.createElement(t,e):null}}))}var Qe=a(260);function Ve(e){var t=e.component,a=Object(Q.a)(e,["component"]),o=Object(n.useContext)(B),c=o.user,i=o.isLoaded;return r.a.createElement(F.b,Object.assign({},a,{render:function(e){return i?c&&i?r.a.createElement(F.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(t,e):null}}))}function Xe(){return r.a.createElement("div",{className:"App"},r.a.createElement(Qe.a,null),r.a.createElement(u.a,null,r.a.createElement(F.d,null,r.a.createElement(Ve,{path:"/login",component:Ye}),r.a.createElement(F.b,{path:"*",component:W})),r.a.createElement(F.b,{exact:!0,path:"/",component:U}),r.a.createElement($e,{path:"/dashboard",component:ne}),r.a.createElement($e,{path:"/posts/new",component:Se})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null,r.a.createElement(Xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.774ccffe.chunk.js.map