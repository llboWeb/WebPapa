(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const i=()=>{const s=document.querySelector(".header__bars"),r=document.querySelector(".mobile-nav"),l=document.querySelectorAll(".mobile-nav__link");let t=!1;console.log(t),s.addEventListener("click",()=>{t=!t,t?(r.style.display="flex",document.body.style.overflowY="hidden"):(r.style.display="none",document.body.style.overflowY="auto"),console.log(t),l.forEach(e=>{e.addEventListener("click",()=>{t=!1,r.style.display="none",document.body.style.overflowY="auto"})})})};i();
