import{_ as u,r as f,ab as m,o as a,c as n,N as y,g as l,d as g,t as o,h as i,m as h,w as s,W as c,F as w}from"./index-9a89a9e7.js";const b={props:{title:{type:String,default:"Tooltip on top"},content:{type:String,default:"Tooltip on top!"},btnClass:{type:String,default:"btn-outline-dark"},placement:{type:String,default:"top"},arrow:{type:Boolean,default:!1},theme:{type:String,default:""},animation:{type:String,default:"scale"},trigger:{type:String,default:"mouseenter"},interactive:{type:Boolean,default:!1},delay:{type:Number,default:0},duration:{type:Number,default:200},allowHTML:{type:Boolean,default:!1},maxWidth:{type:String,default:""},distance:{type:String,default:"1rem"},offset:{type:Array,default:()=>[0,0]}}},_=["content"],v={key:1,class:"inline-block"};function S(e,T,t,x,k,C){const r=f("tippy"),d=m("tippy");return a(),n(w,null,[e.$slots.default?i("",!0):y((a(),n("button",{key:0,content:t.content,class:l(["btn",t.btnClass])},[g(o(t.title),1)],10,_)),[[d,{placement:t.placement,arrow:t.arrow,theme:t.theme,animation:t.animation,trigger:t.trigger,interactive:t.interactive,delay:t.delay,duration:t.duration,allowHTML:t.allowHTML,distance:t.distance,offset:t.offset,maxWidth:t.maxWidth}]]),e.$slots.default?(a(),h(r,{key:1,placement:t.placement,arrow:t.arrow,theme:t.theme,animation:t.animation,trigger:t.trigger,interactive:t.interactive,delay:t.delay,duration:t.duration,allowHTML:t.allowHTML,maxWidth:t.maxWidth,distance:t.distance,offset:t.offset},{content:s(()=>[c(e.$slots,"default")]),default:s(()=>[e.$slots.button?i("",!0):(a(),n("button",{key:0,class:l(["btn",t.btnClass])},o(t.title),3)),e.$slots.button?(a(),n("button",v,[c(e.$slots,"button")])):i("",!0)]),_:3},8,["placement","arrow","theme","animation","trigger","interactive","delay","duration","allowHTML","maxWidth","distance","offset"])):i("",!0)],64)}const B=u(b,[["render",S]]);export{B as T};
