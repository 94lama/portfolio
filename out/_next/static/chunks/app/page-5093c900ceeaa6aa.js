(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1030:function(e,t,n){Promise.resolve().then(n.bind(n,6810))},6810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(3827),r=n(703),i=n(4090);let s=window.location.href+"/assets/img/home_7.jpg",a=window.location.href+"/assets/img/rain.png";function c(){let e=new Date().getHours(),[t,n]=(0,i.useState)(s);return(0,o.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},children:(0,o.jsx)(r.default,{id:"weather",src:t,fill:!0,style:{objectFit:"cover",zIndex:-1},alt:"weather",onLoad:()=>{fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(45.07,"&longitude=").concat(7.69,"&hourly=temperature_2m,rain,weathercode,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin"),{cache:"no-store"}).then(e=>e.json()).then(t=>{!0==t.hourly.rain[e]>5?n(a):n(s)})},priority:!0})})}}},function(e){e.O(0,[703,971,69,744],function(){return e(e.s=1030)}),_N_E=e.O()}]);