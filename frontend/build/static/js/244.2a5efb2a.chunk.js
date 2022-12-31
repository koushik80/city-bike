"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[244],{1244:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(4165),o=n(7762),c=n(5861),a=n(885),i=n(2791),u=n(3373),s=n.n(u),l=(n(3161),n(184));s().accessToken="pk.eyJ1IjoiZmluZm90ZWs4MCIsImEiOiJjbGJvMHp6anowNDR0M3ZsYzVpcGJrM2tzIn0.IHRlDUjRCVu7p5kXlSvnsw";var p=function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useState)(24.94),u=(0,a.Z)(n,2),p=u[0],d=u[1],f=(0,i.useState)(60.19),y=(0,a.Z)(f,2),m=y[0],g=y[1],v=(0,i.useState)(9),h=(0,a.Z)(v,2),b=h[0],j=h[1],w=[p,m];(0,i.useEffect)((function(){t.current||(t.current=new(s().Map)({container:e.current,style:"mapbox://styles/mapbox/streets-v12",center:[p,m],zoom:b}),t.current.on("move",(function(){d(t.current.getCenter().lng.toFixed(4)),g(t.current.getCenter().lat.toFixed(4)),j(t.current.getZoom().toFixed(2))})),x())}),[t.current]);var x=function(){t.current.addControl(new(s().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,style:{right:10,top:10},position:"bottom-left",showUserHeading:!0})),t.current.on("load",(function(){t.current.addLayer({id:"point",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:w}}]}},paint:{"circle-radius":10,"circle-color":"#3887be"}}),t.current.on("click",(function(e){var n=Object.keys(e.lngLat).map((function(t){return e.lngLat[t]})),r={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}]};t.current.getLayer("end")?t.current.getSource("end").setData(r):t.current.addLayer({id:"end",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}]}},paint:{"circle-radius":10,"circle-color":"#f30"}}),function(e){Z.apply(this,arguments)}(n)}))}))};function Z(){return Z=(0,c.Z)((0,r.Z)().mark((function e(n){var c,a,i,u,l,p,d,f,y,m,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mapbox.com/directions/v5/mapbox/cycling/".concat(w[0],",").concat(w[1],";").concat(n[0],",").concat(n[1],"?steps=true&geometries=geojson&access_token=").concat(s().accessToken),{method:"GET"});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,i=a.routes[0],u=i.geometry.coordinates,l={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:u}},t.current.getSource("route")?t.current.getSource("route").setData(l):t.current.addLayer({id:"route",type:"line",source:{type:"geojson",data:l},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#3887be","line-width":5,"line-opacity":.75}}),p=document.getElementById("instructions"),d=i.legs[0].steps,f="",y=(0,o.Z)(d);try{for(y.s();!(m=y.n()).done;)g=m.value,f+="<li>".concat(g.maneuver.instruction,"</li>")}catch(r){y.e(r)}finally{y.f()}p.innerHTML="<p><strong>Trip duration: ".concat(Math.floor(i.duration/60)," min \ud83d\udeb4 </strong></p><ol>").concat(f,"</ol>");case 16:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:e,className:"d-container"}),(0,l.jsx)("div",{id:"instructions",className:"instructions"})]})}},7762:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=244.2a5efb2a.chunk.js.map