import{C as i}from"./index-0f0aeca9.js";import{P as u}from"./index-a05ed3db.js";import{_ as g,a as c,g as r,w as a,d as p,r as s,o as P}from"./index-95066904.js";import"./utils-54aeb6c8.js";import"./index-ead31d90.js";import"./index-41f36d12.js";const d={components:{Card:i,Pagination:u},data(){return{current:1,perPage:6,total:40,options:[{value:1,label:"1"},{value:3,label:"3"},{value:5,label:"5"},{value:7,label:"7"}]}}},f={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},m={class:"xl:col-span-2"},_={class:"xl:col-span-2"},x={class:"xl:col-span-2"};function C(b,t,v,h,e,w){const o=s("Pagination"),l=s("Card");return P(),c("div",f,[r(l,{title:"Basic Pagination"},{default:a(()=>[r(o,{current:e.current,total:e.total,"per-page":e.perPage,onPageChanged:t[0]||(t[0]=n=>e.current=n)},null,8,["current","total","per-page"])]),_:1}),r(l,{title:"Pagination With Background"},{default:a(()=>[r(o,{wrapperClass:"bg-slate-100 dark:bg-slate-500  w-fit py-2 px-3 rounded mx-auto",current:e.current,total:e.total,"per-page":e.perPage,onPageChanged:t[1]||(t[1]=n=>e.current=n)},null,8,["current","total","per-page"])]),_:1}),p("div",m,[r(l,{title:"Pagination With Text"},{default:a(()=>[r(o,{wrapperClass:" flex justify-center ",current:e.current,total:e.total,enableText:"","per-page":e.perPage,onPageChanged:t[2]||(t[2]=n=>e.current=n)},null,8,["current","total","per-page"])]),_:1})]),p("div",_,[r(l,{title:"Advanced Pagination"},{default:a(()=>[r(o,{current:e.current,total:e.total,"per-page":e.perPage,enableSearch:"",enableSelect:"",options:e.options,onPageChanged:t[3]||(t[3]=n=>e.current=n)},null,8,["current","total","per-page","options"])]),_:1})]),p("div",x,[r(l,{title:"Advanced Pagination With Page Selector"},{default:a(()=>[r(o,{current:e.current,total:e.total,"per-page":e.perPage,enableSearch:"",enableInput:"",onPageChanged:t[4]||(t[4]=n=>e.current=n)},null,8,["current","total","per-page"])]),_:1})])])}const N=g(d,[["render",C]]);export{N as default};
