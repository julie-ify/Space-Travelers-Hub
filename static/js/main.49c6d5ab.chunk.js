(this["webpackJsonpspace-travelers-hub"]=this["webpackJsonpspace-travelers-hub"]||[]).push([[0],{43:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);c(32);var s=c(0),r=c.n(s),n=c(17),a=c.n(n),i=c(5),o=c(10),j=c.n(o),d=c(11),l=(c(43),c(18)),u=c(4),b=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/rockets");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.next=8,c.map((function(e){return{id:e.id,rocket_name:e.rocket_name,description:e.description,flickr_images:e.flickr_images}}));case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=c(2),p="Space/Rocket/BOOK_RESERVATION",m="Space/Rocket/CANCEL_RESERVATION",h="Space/Rocket/SET_RESERVATION",x=[],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{rockets:t.payload});case p:return Object(O.a)(Object(O.a)({},e),{},{rockets:e.rockets.map((function(e){return e.id!==parseInt(t.id,10)?Object(O.a)({},e):Object(O.a)(Object(O.a)({},e),{},{reserved:!0})}))});case m:return Object(O.a)(Object(O.a)({},e),{},{rockets:e.rockets.map((function(e){return e.id!==parseInt(t.id,10)?Object(O.a)({},e):Object(O.a)(Object(O.a)({},e),{},{reserved:!1})}))});default:return e}},f=c.p+"static/media/space.3f6fb274.png",k=c(1),N=function(){return Object(k.jsxs)("div",{className:"headerWrap",children:[Object(k.jsx)("img",{src:f,alt:"planet",className:"logoImg"}),Object(k.jsx)("h1",{children:"Space Traveler's Hub"})]})},y=function(){return Object(k.jsx)("nav",{className:"navBar",children:Object(k.jsxs)("div",{className:"navWrap",children:[Object(k.jsx)(N,{}),Object(k.jsx)("ul",{className:"navLinks",children:[{id:1,path:"/",text:"Rockets"},{id:2,path:"/Missions",text:"Missions"},{id:3,path:"/MyProfile",text:"My Profile"}].map((function(e){return Object(k.jsx)("li",{className:"navLink",children:Object(k.jsx)(l.b,{"data-testid":e.id,to:e.path,exact:!0,activeClassName:"active",children:e.text})},e.id)}))})]})})},R=function(){var e,t=Object(i.c)((function(e){return e.rocketsReducer.rockets}));return t&&(e=t.filter((function(e){return e.reserved}))),Object(k.jsxs)("div",{className:"rocketProfileWrap",children:[Object(k.jsx)("h4",{className:"myRockets",children:"My Rockets"}),e&&Object(k.jsx)("ul",{className:"myRocketLists",children:e.map((function(e){return Object(k.jsx)("li",{className:"myRocketList",children:e.rocket_name},e.id)}))}),(!e||!e[0])&&Object(k.jsx)("h5",{className:"noReservation",children:"No reservation yet!"})]})},g=function(){var e,t=Object(i.c)((function(e){return e.missionsReducer.missions}));return t&&(e=t.filter((function(e){return e.reserved}))),Object(k.jsxs)("div",{className:"myProfile mt-4",children:[Object(k.jsxs)("div",{className:"rocketProfileWrap me-5",children:[Object(k.jsx)("h4",{className:"myRockets",children:"My Missions"}),Object(k.jsx)("ul",{className:"myRocketLists",children:e&&e.map((function(e){return Object(k.jsx)("li",{className:"myRocketList",children:e.name},e.id)}))}),(!e||!e[0])&&Object(k.jsx)("h5",{className:"noReservation",children:"No mission yet!"})]}),Object(k.jsx)(R,{})]})},M=function(e){var t=e.rocketProps,c=Object(i.b)(),s=function(e){return t.reserved?c((s=e.target.id,{type:m,id:s})):c(function(e){return{type:p,id:e}}(e.target.id));var s};return Object(k.jsxs)("li",{className:"rocketWrap",children:[Object(k.jsx)("div",{className:"imgWrap",children:Object(k.jsx)("img",{src:t.flickr_images,alt:"rocket images",className:"rocketImg"})}),Object(k.jsxs)("div",{className:"textWrap",children:[Object(k.jsx)("p",{className:"rocketName",children:t.rocket_name}),Object(k.jsx)("div",{className:"mb-3",children:t.reserved?Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{className:"reserveBadge",children:"Reserved"}),t.description]}):t.description}),t.reserved&&Object(k.jsx)("button",{id:t.id,type:"button",className:"cancelReserveBtn",onClick:s,children:"Cancel Reservation"}),!t.reserved&&Object(k.jsx)("button",{id:t.id,type:"button",className:"reserveBtn",onClick:s,children:"Reserve Rocket"})]})]},t.id)},S=function(){var e=Object(i.c)((function(e){return e.rocketsReducer.rockets}));return Object(k.jsx)("div",{children:Object(k.jsx)("ul",{children:e&&e.map((function(e){return Object(k.jsx)(M,{rocketProps:e},e.id)}))})})},E=c(19),I=c(28),_=c.n(I),w=c(29),L=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/missions");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A="space-travelers-hub/missions/LOAD_MISSIONS",C="space-travelers-hub/missions/JOIN_MISSION",P="space-travelers-hub/missions/LEAVE_MISSION",B=[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(O.a)(Object(O.a)({},e),{},{missions:t.payload});case C:return Object(O.a)(Object(O.a)({},e),{},{missions:e.missions.map((function(e){return e.id!==t.payload?Object(O.a)({},e):Object(O.a)(Object(O.a)({},e),{},{reserved:!0})}))});case P:return Object(O.a)(Object(O.a)({},e),{},{missions:e.missions.map((function(e){return e.id!==t.payload?Object(O.a)({},e):Object(O.a)(Object(O.a)({},e),{},{reserved:!1})}))});default:return e}},T=Object(E.b)({missionsReducer:W,rocketsReducer:v}),J=Object(E.c)(T,Object(E.a)(_.a,w.a)),V=c(31),z=c(30),D=c(24),H=c(23),K=function(e){var t=e.mission,c=Object(i.b)(),s=function(e){c(function(e){return{type:C,payload:e}}(e))},r=function(e){c(function(e){return{type:P,payload:e}}(e))};return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pb-4 col-1",children:Object(k.jsx)("strong",{children:t.name})}),Object(k.jsx)("td",{className:"pb-4 col-8",children:t.description}),Object(k.jsxs)("td",{className:"align-middle col-1",children:[t.reserved&&Object(k.jsx)(H.a,{className:"bg-badge",children:"Active Member"}),!t.reserved&&Object(k.jsx)(H.a,{bg:"secondary",children:"NOT A MEMBER"})]}),Object(k.jsxs)("td",{className:"align-middle ps-2",children:[t.reserved&&Object(k.jsx)(D.a,{variant:"outline-danger",size:"sm",onClick:function(){return r(t.id)},children:"Leave Mission"}),!t.reserved&&Object(k.jsx)(D.a,{variant:"outline-dark",size:"sm",onClick:function(){return s(t.id)},children:"Join Mission"})]})]},t.id)},q=function(){var e=Object(i.c)((function(e){return e.missionsReducer.missions}));return Object(k.jsx)(z.a,{className:"mt-4",children:Object(k.jsxs)(V.a,{striped:!0,bordered:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Mission"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Status"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:e&&e.map((function(e){return Object(k.jsx)(K,{mission:e},e.id)}))})]})})};var F=function(){var e=Object(i.b)();return Object(s.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:c=e.sent,(s=c.map((function(e){return{id:e.mission_id,name:e.mission_name,description:e.description}})))&&t({type:A,payload:s});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(s.useEffect)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,J.dispatch({type:h,payload:t});case 4:case"end":return e.stop()}}),e)}))),[]),Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(l.a,{children:[Object(k.jsx)(y,{}),Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{exact:!0,path:"/",children:Object(k.jsx)(S,{})}),Object(k.jsx)(u.a,{path:"/Missions",children:Object(k.jsx)(q,{})}),Object(k.jsx)(u.a,{path:"/MyProfile",children:Object(k.jsx)(g,{})})]})]})})};a.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(i.a,{store:J,children:Object(k.jsx)(F,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.49c6d5ab.chunk.js.map