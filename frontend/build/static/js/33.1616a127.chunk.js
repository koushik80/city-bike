"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[33,900],{9248:function(n,t,e){var i=e(2791),r=e(184),o=function(n,t){var e=n.type,i=n.placeholder;return(0,r.jsx)("input",{ref:t,type:e,placeholder:i})},a=i.forwardRef(o);t.Z=a},4205:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var i=e(2982),r=e(885),o=e(1614),a=e(3767),s=e(890),c=e(1889),d=e(6088),u=e(2791),l=e(5048),v=e(6319),f=e(6722),h=e(7621),m=e(7047),x=e(184),p=function(){return(0,x.jsx)(c.ZP,{item:!0,xs:8,md:6,lg:3,children:(0,x.jsxs)(h.Z,{style:{padding:"1rem"},children:[(0,x.jsx)(m.Z,{variant:"text",sx:{fontSize:"2rem"}}),(0,x.jsx)(m.Z,{variant:"text",sx:{fontSize:"2rem"}}),(0,x.jsx)(m.Z,{variant:"text",sx:{fontSize:"2rem"}})]})})},j=e(1087),g=function(n){var t=n.item;return(0,x.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,x.jsx)(j.rU,{to:"/station/".concat(null===t||void 0===t?void 0:t._id),children:(0,x.jsxs)(h.Z,{className:"station-card",children:[(0,x.jsxs)(s.Z,{gutterBottom:!0,variant:"body2",component:"div",children:[(0,x.jsx)("b",{children:"ID:"})," ",null===t||void 0===t?void 0:t.id]}),(0,x.jsxs)(s.Z,{gutterBottom:!0,variant:"body1",component:"div",children:[(0,x.jsx)("b",{children:"Name:"})," ",null===t||void 0===t?void 0:t.name]}),(0,x.jsxs)(s.Z,{gutterBottom:!0,variant:"body2",component:"div",children:[(0,x.jsx)("b",{children:"Operaattor:"})," ",null===t||void 0===t?void 0:t.operaattor]})]})})})},y=e(9248),Z=function(){var n,t,e,h=(0,l.I0)(),m=function(n,t){var e;return function(i){e&&clearTimeout(e),e=setTimeout((function(){n(i)}),t)}}((function(n){h((0,v.yC)(n))}),500),j=(0,u.useRef)(null);(0,u.useEffect)((function(){j.current.focus()}),[]);var Z=(0,u.useState)(1),b=(0,r.Z)(Z,2),S=b[0],k=b[1],w=(0,l.v9)((function(n){return n.filter})),N="?page=".concat(null===w||void 0===w?void 0:w.page);N=void 0!==(null===w||void 0===w?void 0:w.search)||null!==w&&void 0!==w&&w.search&&null!==w&&void 0!==w&&w.search?"?keyword=".concat(null===w||void 0===w?void 0:w.search,"&page=").concat(null===w||void 0===w?void 0:w.page):"?page=".concat(null===w||void 0===w?void 0:w.page);var C,E,q=(0,f.bg)(N),P=q.data,B=q.isLoading,D=q.isError,A=q.error;(B&&(C=(0,i.Z)(new Array(40)).map((function(n,t){return(0,x.jsx)(p,{},t)}))),!B&&D&&(C=(0,x.jsx)("div",{children:null===A||void 0===A?void 0:A.message})),B||D||0!==(null===P||void 0===P||null===(n=P.stations)||void 0===n?void 0:n.length)||(C=(0,x.jsx)("div",{children:"data not found..."})),B||D||0===(null===P||void 0===P||null===(t=P.stations)||void 0===t?void 0:t.length))||(C=null===P||void 0===P||null===(E=P.stations)||void 0===E?void 0:E.map((function(n,t){return(0,x.jsx)(g,{item:n},null===n||void 0===n?void 0:n._id)})));return(0,x.jsx)(o.Z,{children:(0,x.jsxs)("div",{className:"station-page",children:[(0,x.jsx)("div",{className:"station-page--search-section",children:(0,x.jsx)("form",{action:"",onSubmit:function(n){return n.preventDefault()},children:(0,x.jsxs)("div",{className:"station-page--search-section--div",children:[(0,x.jsx)(y.Z,{ref:j,type:"search",placeholder:"search by station name",onChange:function(n){var t=n.target;return m(t.value)},onBlur:function(n){var t=n.target;return m(t.value)}}),(0,x.jsx)("button",{type:"submit",children:(0,x.jsx)("i",{className:"fa-solid fa-magnifying-glass"})})]})})}),(0,x.jsx)(a.Z,{direction:"row",alignItems:"center",justifyContent:"center",mb:1,children:(0,x.jsx)(s.Z,{variant:"h5",fontWeight:"bold",color:"#C73866",gutterBottom:!0,children:"Stations"})}),(0,x.jsx)(c.ZP,{container:!0,spacing:2,children:C}),(0,x.jsx)("div",{className:"station-page--pagination",children:100===(null===P||void 0===P||null===(e=P.stations)||void 0===e?void 0:e.length)?(0,x.jsx)(d.Z,{count:Math.round((null===P||void 0===P?void 0:P.totalStations)/100)||0,variant:"outlined",color:"primary",page:S,onChange:function(n,t){k(t),h((0,v.oA)(t))}}):""})]})})}},6722:function(n,t,e){e.d(t,{S6:function(){return a},bg:function(){return s}});var i=e(4165),r=e(5861),o=e(6720).Z.injectEndpoints({endpoints:function(n){return{getStations:n.query({query:function(n){return"/station/all".concat(n)}}),getStationDetails:n.query({query:function(n){return"/station/".concat(n)}}),addStation:n.mutation({query:function(n){var t=n.data;n.url;return{url:"/station/create",method:"POST",body:t}},onQueryStarted:function(n,t){return(0,r.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.queryFulfilled,t.dispatch;case 1:case"end":return n.stop()}}),n)})))()}}),deleteStation:n.mutation({query:function(n){var t=n.id;n.url;return{url:"/station/".concat(t),method:"DELETE"}},onQueryEnded:function(n,t){return(0,r.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.queryFulfilled,t.dispatch;case 1:case"end":return n.stop()}}),n)})))()}})}}}),a=(o.useAddStationMutation,o.useDeleteStationMutation,o.useGetStationDetailsQuery),s=o.useGetStationsQuery},9156:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var i=e(2791),r=e(1614),o=e(1889),a=e.p+"static/media/c2.2a04cb84a31be29a98cd.gif",s=e(184),c=function(){return(0,s.jsx)("header",{className:"header",children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,s.jsxs)("div",{className:"header--content",children:[(0,s.jsx)("h1",{children:"Helsinki City-Bike"}),(0,s.jsx)("p",{children:"Welcome to use city bikes! City bikes are available in Helsinki and Espoo from the beginning of April to the end of October. Enjoy your ride!"})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,s.jsx)("div",{className:"header--image",children:(0,s.jsx)("img",{src:a,alt:""})})})]})})})},d=e(4205),u=function(){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(d.default,{})]})}}}]);
//# sourceMappingURL=33.1616a127.chunk.js.map