import{n as u}from"./data-536c3fcb.js";import{C as f}from"./index-3b693917.js";import{_ as b,c as r,b as d,w as l,r as n,o,F as h,p as k,m as g,a as t,g as a,t as i,h as v}from"./index-9a89a9e7.js";import{b as w,I as y}from"./menu-4488107e.js";import"./keyboard-cb68def5.js";import"./use-outside-click-2e68ea20.js";import"./focus-management-2ca33658.js";import"./use-resolve-button-type-cea600ab.js";import"./open-closed-82d4f461.js";const C={components:{MenuItem:w,Menu:y,Card:f},data(){return{notifications:u}}},$=t("div",{class:"flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600"},[t("div",{class:"text-sm text-slate-800 dark:text-slate-200 font-medium leading-6"}," All Notifications ")],-1),M={class:"flex text-left"},I={class:"flex-none mr-3"},B={class:"h-8 w-8 bg-white rounded-full"},N=["src"],V={class:"flex-1"},j=t("div",{class:"text-secondary-500 dark:text-slate-400 text-xs"}," 3 min ago ",-1),A={key:0,class:"flex-0"},F=t("span",{class:"h-[10px] w-[10px] bg-danger-500 border border-white rounded-full inline-block"},null,-1),z=[F];function D(E,L,S,q,c,G){const x=n("MenuItem"),_=n("Menu"),m=n("Card");return o(),r("div",null,[d(m,{bodyClass:"px-6 "},{default:l(()=>[d(_,{as:"div",class:"-mx-6"},{default:l(()=>[$,(o(!0),r(h,null,k(c.notifications,(e,p)=>(o(),g(x,{key:p},{default:l(({active:s})=>[t("div",{class:a(`${s?"bg-slate-100 dark:bg-slate-600 dark:bg-opacity-70 text-slate-800":"text-slate-600 dark:text-slate-300"} block w-full px-4 py-2 text-sm mb-2 last:mb-0 cursor-pointer`)},[t("div",M,[t("div",I,[t("div",B,[t("img",{src:e.image,alt:"",class:a(`${s?" border-white":" border-transparent"} block w-full h-full object-cover rounded-full border`)},null,10,N)])]),t("div",V,[t("div",{class:a(`${s?"text-slate-600 dark:text-slate-300":" text-slate-600 dark:text-slate-300"} text-sm`)},i(e.title),3),t("div",{class:a(`${s?"text-[#68768A] dark:text-slate-200":" text-slate-600 dark:text-slate-300"} text-xs leading-4`)},i(e.desc),3),j]),e.unread?(o(),r("div",A,z)):v("",!0)])],2)]),_:2},1024))),128))]),_:1})]),_:1})])}const W=b(C,[["render",D]]);export{W as default};
