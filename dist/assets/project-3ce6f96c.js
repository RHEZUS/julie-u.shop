import{_ as S}from"./Breadcrumbs-7edf302a.js";import{C as B}from"./index-0f0aeca9.js";import{C as j}from"./index-787ca0f9.js";import{I as N}from"./index-ead31d90.js";import{c as A,m as V,T as E}from"./data-2cae7fc4.js";import{l as J,m as z,p as L,n as O,o as F}from"./data-5b23bf4e.js";import{D as I,_ as P}from"./SelectMonth-8c594135.js";import{T as U,s as g,p as Z,f as G,a as H,z as W,b as q,c as K}from"./scr-1-2392cc84.js";import{_ as Q,a as l,g as s,d as e,w as o,r as c,o as a,F as p,b as _,j as u,t as r,l as R,e as v}from"./index-95066904.js";import"./index-ccda43c4.js";import"./vue-tailwind-datepicker-e8542111.js";import"./utils-54aeb6c8.js";import"./ck-white-c040c98a.js";import"./index-a236bf4d.js";import"./menu-c2f259bf.js";import"./keyboard-850e91b4.js";import"./use-outside-click-d9af4c19.js";import"./focus-management-fdb901a8.js";import"./use-resolve-button-type-5b7d25b9.js";import"./open-closed-5ea505c4.js";import"./listbox-3f98fae6.js";import"./hidden-13296901.js";import"./index-a05ed3db.js";import"./index-41f36d12.js";import"./user-1-6dc19296.js";import"./user-4-bcaadb45.js";const X="/assets/dc-276a250d.svg";const Y={components:{Card:B,Icon:N,Checkbox:j,Teamtable:U,DropEvent:I,Breadcrumb:S,SelectMonth:P},data(){return{basicArea:J,basicAreaDark:z,pieChart:L,donutTwo:O,donutTwoDark:F,trackingParcel:A,message:V,TodoList:E,attributes:[{key:"today",highlight:{color:"gray-500",fillMode:"solid"},dates:new Date},{}],meets:[{img:g,title:"Meeting with client",date:"01 Nov 2021",meet:"Zoom meeting"},{img:Z,title:"Design meeting (team)",date:"01 Nov 2021",meet:"Skyp meeting"},{img:X,title:"Background research",date:"01 Nov 2021",meet:"Google meeting"},{img:g,title:"Meeting with client",date:"01 Nov 2021",meet:"Zoom meeting"}],files:[{img:G,title:"Dashboard.fig",date:"06 June 2021 / 155MB"},{img:H,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:W,title:"Job portal_app.zip",date:"06 June 2021 / 155MB"},{img:q,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:K,title:"Screenshot.jpg",date:"06 June 2021 / 155MB"}],statistics:[{title:"Total Task",count:"64",bg:"bg-info-500",text:"text-info-500",percent:"25.67% ",icon:"heroicons-outline:menu-alt-1"},{title:"Completed ",count:"45",bg:"bg-warning-500",text:"text-warning-500",percent:"8.67%",icon:"heroicons-outline:chart-pie"},{title:"Hours",count:"190",bg:"bg-primary-500",text:"text-primary-500",percent:"1.67%  ",icon:"heroicons-outline:clock"},{title:"Spendings",count:"$3,564",bg:"bg-success-500",text:"text-success-500",percent:"11.67%  ",icon:"heroicons-outline:calculator"}],Campaigns:[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}]}},methods:{removeTodo(x){this.TodoList=this.TodoList.filter(b=>b.id!==x)}}},$={class:"card-auto space-y-5"},ee={class:"grid grid-cols-12 gap-5"},te={class:"lg:col-span-8 col-span-12 space-y-5"},se={class:"grid grid-cols-12 gap-5"},oe={class:"xl:col-span-8 col-span-12"},le={class:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"},ae={class:"block text-sm text-slate-600 font-medium dark:text-white mb-1"},ie={class:"block mb- text-2xl text-slate-900 dark:text-white font-medium"},re={class:"xl:col-span-4 col-span-12"},ne={class:"bg-slate-50 dark:bg-slate-900 rounded-md p-4"},ce=e("span",{class:"block dark:text-slate-400 text-sm text-slate-600"},"Progress",-1),de={class:"lg:col-span-4 col-span-12 space-y-5"},pe=e("button",{type:"button",class:"btn btn-dark btn-sm"}," Add More ",-1),_e={class:"-mx-6 custom-calender"},ue={class:"divide-y divide-slate-100 dark:divide-slate-700"},he={class:"flex space-x-2 rtl:space-x-reverse"},me={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},xe={class:"flex-none"},be={class:"h-8 w-8"},fe=["src"],ge={class:"flex-1"},ve={class:"block text-slate-600 text-sm dark:text-slate-300 mb-1 font-medium"},ke={class:"flex font-normal text-xs dark:text-slate-400 text-slate-500"},ye={class:"text-base inline-block mr-1"},we={class:"flex-none"},De={class:"block text-xs text-slate-600 dark:text-slate-400"},Te={class:"grid xl:grid-cols-3 grid-cols-1 gap-5"},Ce={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},Me={class:"flex-none flex space-x-2 items-center rtl:space-x-reverse"},Se=["src"],Be={class:"flex-1 text-sm text-slate-600 dark:text-slate-300"},je={class:"flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse"},Ne={key:0,type:"button"},Ae=["onClick"],Ve={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},Ee={class:"flex ltr:text-left rtl:text-right"},Je={class:"flex-none ltr:mr-3 rtl:ml-3"},ze={class:"h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative"},Le=["src"],Oe={class:"flex-1"},Fe={class:"text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`"},Ie={class:"text-xs hover:text-[#68768A] font-normal text-slate-600 dark:text-slate-300"},Pe=e("div",{class:"text-slate-400 dark:text-slate-400 text-xs mt-1"}," 3 min ago ",-1),Ue={key:0,class:"flex-0"},Ze={class:"h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white"},Ge={class:"relative ltr:pl-2 rtl:pr-2"},He={class:"p-[10px] relative top-[-20px]"},We={class:"text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600"},qe={class:"text-xs capitalize dark:text-slate-400"},Ke={class:"grid grid-cols-12 gap-5"},Qe={class:"xl:col-span-8 lg:col-span-7 col-span-12"},Re={class:"xl:col-span-4 lg:col-span-5 col-span-12"},Xe={class:"divide-y divide-slate-100 dark:divide-slate-700"},Ye={class:"flex space-x-2 rtl:space-x-reverse"},$e={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},et={class:"flex-none"},tt={class:"h-8 w-8"},st=["src"],ot={class:"flex-1"},lt={class:"block text-slate-600 text-sm dark:text-slate-300"},at={class:"block font-normal text-xs text-slate-500 mt-1"},it=e("div",{class:"flex-none"},[e("button",{type:"button",class:"text-xs text-slate-900 dark:text-white"}," Download ")],-1);function rt(x,b,nt,ct,i,k){const y=c("Breadcrumb"),m=c("Icon"),f=c("apexchart"),d=c("Card"),h=c("DropEvent"),w=c("v-calendar"),D=c("Checkbox"),T=c("router-link"),C=c("SelectMonth"),M=c("Teamtable");return a(),l("div",null,[s(y),e("div",$,[e("div",ee,[e("div",te,[s(d,null,{default:o(()=>[e("div",se,[e("div",oe,[e("div",le,[(a(!0),l(p,null,_(i.statistics,(t,n)=>(a(),l("div",{key:n,class:u([t.bg,"rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center"])},[e("div",{class:u(["mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4",t.text])},[s(m,{icon:t.icon},null,8,["icon"])],2),e("span",ae,r(t.title),1),e("span",ie,r(t.count),1)],2))),128))])]),e("div",re,[e("div",ne,[ce,s(f,{type:"donut",height:"113",options:this.$store.themeSettingsStore.isDark?i.donutTwoDark.chartOptions:i.donutTwo.chartOptions,series:i.donutTwo.series},null,8,["options","series"])])])])]),_:1}),s(d,{title:"Deal distribution by stage"},{header:o(()=>[s(h)]),default:o(()=>[s(f,{type:"area",height:"310",options:this.$store.themeSettingsStore.isDark?i.basicAreaDark.chartOptions:i.basicArea.chartOptions,series:i.basicArea.series},null,8,["options","series"])]),_:1})]),e("div",de,[s(d,{title:"Notes"},{header:o(()=>[pe]),default:o(()=>[e("div",_e,[s(w,{"is-expanded":"",attributes:i.attributes,"is-dark":this.$store.themeSettingsStore.isDark},null,8,["attributes","is-dark"])]),e("ul",ue,[(a(!0),l(p,null,_(i.meets,(t,n)=>(a(),l("li",{key:n,class:"block py-[10px]"},[e("div",he,[e("div",me,[e("div",xe,[e("div",be,[e("img",{src:t.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,fe)])]),e("div",ge,[e("span",ve,r(t.title),1),e("span",ke,[e("span",ye,[s(m,{icon:"heroicons-outline:video-camera"})]),R(" "+r(t.meet),1)])])]),e("div",we,[e("span",De,r(t.date),1)])])]))),128))])]),_:1})])]),e("div",Te,[s(d,{title:"Task list"},{header:o(()=>[s(h)]),default:o(()=>[e("ul",Ce,[(a(!0),l(p,null,_(i.TodoList,t=>(a(),l("li",{class:"flex items-center px-6 space-x-4 py-4 rtl:space-x-reverse",key:t.id},[e("div",Me,[s(D,{modelValue:t.isDone,"onUpdate:modelValue":n=>t.isDone=n},null,8,["modelValue","onUpdate:modelValue"]),e("div",{class:u(["h-8 w-8 rounded-full text-white",t.isDone?" opacity-20":" opacity-100"])},[e("img",{src:t.image,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,Se)],2)]),e("div",{class:u(["flex-1 flex",t.isDone?"line-through dark:text-white":""])},[e("span",Be,r(t.title.slice(0,20)+"..."),1),e("span",je,[t.isDone===!1?(a(),l("button",Ne,[s(m,{icon:"heroicons-outline:pencil-alt"})])):v("",!0),e("button",{type:"button",onClick:n=>k.removeTodo(t.id),class:"transition duration-150 hover:text-danger-500"},[s(m,{icon:"heroicons-outline:trash"})],8,Ae)])],2)]))),128))])]),_:1}),s(d,{title:"Messages"},{header:o(()=>[s(h)]),default:o(()=>[e("ul",Ve,[(a(!0),l(p,null,_(i.message.slice(0,5),(t,n)=>(a(),l("li",{key:n},[s(T,{to:"chat",class:"hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-slate-800 text-slate-600 dark:text-slate-300 block w-full px-4 py-3 text-sm mb-2 last:mb-0 cursor-pointer"},{default:o(()=>[e("div",Ee,[e("div",Je,[e("div",ze,[e("span",{class:u(`${t.active?"bg-secondary-500":"bg-success-500"} w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`)},null,2),e("img",{src:t.image,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,Le)])]),e("div",Oe,[e("div",Fe,r(t.title),1),e("div",Ie,r(t.desc),1),Pe]),t.hasnotifaction?(a(),l("div",Ue,[e("span",Ze,r(t.notification_count),1)])):v("",!0)])]),_:2},1024)]))),128))])]),_:1}),s(d,{title:"Activity"},{header:o(()=>[s(h)]),default:o(()=>[e("ul",Ge,[(a(!0),l(p,null,_(i.trackingParcel.slice(0,5),(t,n)=>(a(),l("li",{key:n,class:u([t.status==="ok"?"before:opacity-100":" before:opacity-50","ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')]"])},[e("div",He,[e("h2",We,r(t.title),1),e("p",qe,r(t.date),1)])],2))),128))])]),_:1})]),e("div",Ke,[e("div",Qe,[s(d,{title:"Team members",noborder:""},{header:o(()=>[s(C)]),default:o(()=>[s(M)]),_:1})]),e("div",Re,[s(d,{title:"Files"},{header:o(()=>[s(h)]),default:o(()=>[e("ul",Xe,[(a(!0),l(p,null,_(i.files,(t,n)=>(a(),l("li",{key:n,class:"block py-[8px]"},[e("div",Ye,[e("div",$e,[e("div",et,[e("div",tt,[e("img",{src:t.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,st)])]),e("div",ot,[e("span",lt,r(t.title),1),e("span",at,r(t.date),1)])]),it])]))),128))])]),_:1})])])])])}const zt=Q(Y,[["render",rt]]);export{zt as default};
