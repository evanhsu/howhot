"use strict";(self.webpackChunkhowhot=self.webpackChunkhowhot||[]).push([[583],{3071:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var s=a(4586),r=a(6479),n=a.n(r),i=a(6540);const m="wrapper_yaEw",d="temperatureLabel_rO6Q",u="degreeLabel_oS5k";var p=a(4848);const g=e=>(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("span",{className:d,children:e.temperature.toFixed(0)}),(0,p.jsx)("span",{className:u,children:"\xb0F"})]}),c="infoGraphicCluster_gKDi",o="sentimentImage_WprC",l="loading_Z6BC",h=e=>{const{temperatureData:t,sentimentImagePath:a}=e;return 0===t.timestampMs?(0,p.jsx)("div",{className:l,children:"LOADING!"}):(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(g,{temperature:t.temperatureInside}),(0,p.jsx)("div",{className:o,children:(0,p.jsx)("img",{src:a})})]})},I=e=>{let{gradientFrom:t,gradientTo:a,children:s}=e;return(0,p.jsx)("div",{className:"full-page-wrapper",style:{backgroundImage:`linear-gradient(${t}, ${a})`},children:s})},b="rgb(117, 224, 255)",j="rgb(255,255,255)",x="rgb(255,252,11)",f="rgb(255, 172, 0)",w="rgb(255,96,0)",F=e=>e<80?{sentimentImage:"/img/style2/sauna-1.png",gradientFrom:b,gradientTo:j}:e>=80&&e<120?{sentimentImage:"/img/style2/sauna-2.png",gradientFrom:j,gradientTo:x}:e>=120&&e<150?{sentimentImage:"/img/style2/sauna-3.png",gradientFrom:x,gradientTo:f}:{sentimentImage:"/img/style2/sauna-4.png",gradientFrom:f,gradientTo:w},v={temperatureInside:0,temperatureOutside:0,timestampMs:0};function N(){const{siteConfig:e}=(0,s.A)(),[t,a]=(0,i.useState)(v);(0,i.useEffect)((()=>{fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-vgwek/endpoint/latest").then((e=>e.json())).then((e=>{a({temperatureInside:e.temperatureInside,temperatureOutside:e.temperatureOutside,timestampMs:e.timestampMs})}));const t=new(n())(e.customFields.pusherKey,{cluster:e.customFields.pusherCluster});return t.subscribe("temperature").bind("sauna/temperature",(function(e){a({temperatureInside:e.temperatureInside,temperatureOutside:e.temperatureOutside,timestampMs:e.timestampMs})})),()=>{t.disconnect()}}),[]);const{gradientFrom:r,gradientTo:m,sentimentImage:d}=F(t.temperatureInside);return(0,p.jsx)(I,{gradientFrom:r,gradientTo:m,children:(0,p.jsx)("main",{children:(0,p.jsx)(h,{temperatureData:t,sentimentImagePath:d})})})}}}]);