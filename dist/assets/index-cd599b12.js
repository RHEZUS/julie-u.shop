import{I as C}from"./index-a496c592.js";import{_ as k,r as h,o as r,c as o,a as l,b as s,h as _,W as T,g as v,w as e,F as g,p,m as y,d as t}from"./index-9a89a9e7.js";import{C as I}from"./index-3b693917.js";import{c as A,d as W,e as B,f as D,g as L,h as S}from"./data-536c3fcb.js";const N={components:{Icon:C},name:"Alert",type:"primary-500",props:{type:{type:String},dismissible:{type:Boolean,default:!1},icon:{type:String},class:{type:String,default:""},customClass:{type:String,default:""}},data(){return{isDestroy:!1}},methods:{destroy(){this.isDestroy=!0},alertClass(){switch(this.type){case"primary-light":return"bg-primary-500 bg-opacity-[14%] text-primary-500";case"secondary-light":return"bg-secondary-500 bg-opacity-[14%] text-slate-600";case"success-light":return"bg-success-500 bg-opacity-[14%] text-success-500";case"info-light":return"bg-info-500 bg-opacity-[14%] text-info-500";case"warning-light":return"bg-warning-500 bg-opacity-[14%] text-warning-500";case"danger-light":return"bg-danger-500 bg-opacity-[14%] text-danger-500";case"dark-light":return"bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%]  dark:text-slate-300";case"primary":return"bg-primary-500 text-white";case"secondary":return"bg-secondary-500 text-white";case"success":return"bg-success-500 text-white";case"info":return"bg-info-500 text-white";case"warning":return"bg-warning-500 text-white";case"danger":return"bg-danger-500 text-white";case"dark":return"bg-slate-800 text-white dark:bg-slate-900 dark:text-slate-300";case"primary-outline":return"bg-white text-primary-500 border border-primary-500 dark:bg-slate-800";case"secondary-outline":return"bg-white text-secondary-500 border border-secondary-500 dark:bg-slate-800";case"success-outline":return"bg-white text-success-500 border border-success-500 dark:bg-slate-800";case"info-outline":return"bg-white text-info-500 border border-info-500 dark:bg-slate-800";case"warning-outline":return"bg-white text-warning-500 border border-warning-500 dark:bg-slate-800";case"danger-outline":return"bg-white text-danger-500 border border-danger-500 dark:bg-slate-800";case"dark-outline":return"bg-white text-slate-800 dark:text-slate-300 border border-slate-800 dark:border-slate-600  dark:bg-slate-800";default:return"bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-300"}}}},V={class:"flex items-start space-x-3 rtl:space-x-reverse"},F={key:0,class:"flex-0 text-[22px]"},O={class:"flex-1"};function Y(f,x,b,w,d,m){const a=h("Icon");return d.isDestroy?_("",!0):(r(),o("div",{key:0,class:v(["py-[18px] px-6 font-normal text-sm rounded-md",m.alertClass()+" "+b.customClass])},[l("div",V,[b.icon?(r(),o("div",F,[s(a,{icon:b.icon},null,8,["icon"])])):_("",!0),l("div",O,[T(f.$slots,"default")]),b.dismissible?(r(),o("div",{key:1,class:"flex-0 text-2xl cursor-pointer",onClick:x[0]||(x[0]=(...c)=>m.destroy&&m.destroy(...c))},[s(a,{icon:"heroicons-outline:x"})])):_("",!0)])],2))}const z=k(N,[["render",Y]]),E={components:{Card:I,Alert:z},data(){return{alertType:A,alertType2:W,alertType3:B,alertType4:D,alertType5:L,alertType6:S}}},j={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},q={class:"space-y-5"},G={class:"space-y-5"},H={class:"xl:col-span-2 col-span-1"},J={class:"space-y-5"},K={class:"space-y-5"},M={class:"space-y-5"},P=l("span",{class:"font-semibold"},"Well done!",-1),Q={class:"space-y-5"},R={class:"space-y-5"},U=l("span",{class:"font-semibold"},"Well done!",-1);function X(f,x,b,w,d,m){const a=h("Alert"),c=h("Card"),u=h("router-link");return r(),o("div",j,[s(c,{title:"Theme Color Alerts"},{default:e(()=>[l("div",q,[(r(!0),o(g,null,p(d.alertType,(i,n)=>(r(),y(a,{type:i.type,key:n},{default:e(()=>[t(" This is an alert—check it out! ")]),_:2},1032,["type"]))),128))])]),_:1}),s(c,{title:"Light Color Alerts"},{default:e(()=>[l("div",G,[(r(!0),o(g,null,p(d.alertType2,(i,n)=>(r(),y(a,{type:i.type,key:n},{default:e(()=>[t(" This is an alert—check it out! ")]),_:2},1032,["type"]))),128))])]),_:1}),l("div",H,[s(c,{title:"Link Colors"},{default:e(()=>[l("div",J,[s(a,{class:"bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%] dark:text-slate-300"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-slate-900 dark:text-slate-300 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Check it out! ")]),_:1}),s(a,{class:"bg-primary-500 bg-opacity-[14%] text-primary-500 dark:bg-primary-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-primary-500 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1}),s(a,{class:"bg-secondary-500 bg-opacity-[14%] text-slate-600 dark:bg-secondary-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-slate-600 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1}),s(a,{class:"bg-success-500 bg-opacity-[14%] text-success-500 dark:bg-success-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-success-500 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1}),s(a,{class:"bg-info-500 bg-opacity-[14%] text-info-500 dark:bg-info-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-info-500 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1}),s(a,{class:"bg-warning-500 bg-opacity-[14%] text-warning-500 dark:bg-warning-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-warning-500 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1}),s(a,{class:"bg-danger-500 bg-opacity-[14%] text-danger-500 dark:bg-danger-500 dark:bg-opacity-[14%]"},{default:e(()=>[t(" This is an alert with "),s(u,{to:"#",class:"underline text-danger-500 text-sm font-medium"},{default:e(()=>[t("an example link")]),_:1}),t(".Click It out! ")]),_:1})])]),_:1})]),s(c,{title:"Dismissible Theme Color Alerts With Icon "},{default:e(()=>[l("div",K,[(r(!0),o(g,null,p(d.alertType3,(i,n)=>(r(),y(a,{type:i.type,key:n,dismissible:"",icon:i.icon},{default:e(()=>[t(" This is an alert—check it out! ")]),_:2},1032,["type","icon"]))),128))])]),_:1}),s(c,{title:"Dismissible Light Color Alerts With Icon"},{default:e(()=>[l("div",M,[(r(!0),o(g,null,p(d.alertType4,(i,n)=>(r(),y(a,{type:i.type,key:n,dismissible:"",icon:i.icon},{default:e(()=>[P,t(" You successfully read this important alert message. ")]),_:2},1032,["type","icon"]))),128))])]),_:1}),s(c,{title:"Outline Theme Color Alerts "},{default:e(()=>[l("div",Q,[(r(!0),o(g,null,p(d.alertType5,(i,n)=>(r(),y(a,{type:i.type,key:n},{default:e(()=>[t(" This is an alert—check it out! ")]),_:2},1032,["type"]))),128))])]),_:1}),s(c,{title:"Outline Light Color Alerts With Icon"},{default:e(()=>[l("div",R,[(r(!0),o(g,null,p(d.alertType6,(i,n)=>(r(),y(a,{type:i.type,key:n,dismissible:"",icon:i.icon},{default:e(()=>[U,t(" You successfully read this important alert message. ")]),_:2},1032,["type","icon"]))),128))])]),_:1})])}const se=k(E,[["render",X]]);export{se as default};
