import{o as f,c as d,u as p,R as m,a as _,b as h,d as y}from"./vendor.9eee2fdf.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};v();const g={setup(i){return(n,s)=>(f(),d(p(m)))}},L="modulepreload",c={},b="/vue3-tainan-project/",E=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${b}${o}`,o in c)return;c[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":L,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((l,u)=>{r.addEventListener("load",l),r.addEventListener("error",u)})})).then(()=>n())},O=_({history:h("/vue3-tainan-project/"),routes:[{path:"/",name:"list",component:()=>E(()=>import("./ListView.c38e41e5.js"),["assets/ListView.c38e41e5.js","assets/ListView.1cc27ce3.css","assets/vendor.9eee2fdf.js"])}]}),a=y(g);a.use(O);a.mount("#app");