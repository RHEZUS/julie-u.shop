import{c as Q,_ as K}from"./counter-button-df3d4502.js";import{I as o}from"./index-9a8c00d9.js";import{B as U}from"./index-f9140052.js";import{C as H}from"./index-7b8fc2af.js";import{B as $}from"./index-0543b3cb.js";import{i as W,$ as F,a as N,S as R}from"./swiper.min-c415042e.js";import{N as Y}from"./navigation.min-06c263cb.js";import{s as z,R as Z,D as ee,o as h,a as g,g as a,w as b,F as T,b as B,B as t,d as e,i as q,t as f,c as te,am as se,n as X}from"./index-9b4a819b.js";import{u as le}from"./useQuery-97491d46.js";import{m as ae,p as oe,x as re,I as ne,y as J}from"./tabs-7aa688ed.js";import"./keyboard-307349a2.js";import"./use-resolve-button-type-978eb12a.js";import"./hidden-cdb3f715.js";import"./focus-management-4ae2c282.js";import"./micro-task-89dcd6af.js";function ie({swiper:l,extendParams:v,on:m}){v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let I=!1,j=!1;l.thumbs={swiper:null};function L(){const n=l.thumbs.swiper;if(!n||n.destroyed)return;const s=n.clickedIndex,c=n.clickedSlide;if(c&&F(c).hasClass(l.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let x;if(n.params.loop?x=parseInt(F(n.clickedSlide).attr("data-swiper-slide-index"),10):x=s,l.params.loop){let _=l.activeIndex;l.slides.eq(_).hasClass(l.params.slideDuplicateClass)&&(l.loopFix(),l._clientLeft=l.$wrapperEl[0].clientLeft,_=l.activeIndex);const k=l.slides.eq(_).prevAll(`[data-swiper-slide-index="${x}"]`).eq(0).index(),d=l.slides.eq(_).nextAll(`[data-swiper-slide-index="${x}"]`).eq(0).index();typeof k>"u"?x=d:typeof d>"u"?x=k:d-_<_-k?x=d:x=k}l.slideTo(x)}function C(){const{thumbs:n}=l.params;if(I)return!1;I=!0;const s=l.constructor;if(n.swiper instanceof s)l.thumbs.swiper=n.swiper,Object.assign(l.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(l.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(W(n.swiper)){const c=Object.assign({},n.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),l.thumbs.swiper=new s(c),j=!0}return l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass),l.thumbs.swiper.on("tap",L),!0}function u(n){const s=l.thumbs.swiper;if(!s||s.destroyed)return;const c=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let x=1;const _=l.params.thumbs.slideThumbActiveClass;if(l.params.slidesPerView>1&&!l.params.centeredSlides&&(x=l.params.slidesPerView),l.params.thumbs.multipleActiveThumbs||(x=1),x=Math.floor(x),s.slides.removeClass(_),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let i=0;i<x;i+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${l.realIndex+i}"]`).addClass(_);else for(let i=0;i<x;i+=1)s.slides.eq(l.realIndex+i).addClass(_);const k=l.params.thumbs.autoScrollOffset,d=k&&!s.params.loop;if(l.realIndex!==s.realIndex||d){let i=s.activeIndex,p,y;if(s.params.loop){s.slides.eq(i).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,i=s.activeIndex);const S=s.slides.eq(i).prevAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index(),w=s.slides.eq(i).nextAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index();typeof S>"u"?p=w:typeof w>"u"?p=S:w-i===i-S?p=s.params.slidesPerGroup>1?w:i:w-i<i-S?p=w:p=S,y=l.activeIndex>l.previousIndex?"next":"prev"}else p=l.realIndex,y=p>l.previousIndex?"next":"prev";d&&(p+=y==="next"?k:-1*k),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(p)<0&&(s.params.centeredSlides?p>i?p=p-Math.floor(c/2)+1:p=p+Math.floor(c/2)-1:p>i&&s.params.slidesPerGroup,s.slideTo(p,n?0:void 0))}}m("beforeInit",()=>{const{thumbs:n}=l.params;!n||!n.swiper||(C(),u(!0))}),m("slideChange update resize observerUpdate",()=>{u()}),m("setTransition",(n,s)=>{const c=l.thumbs.swiper;!c||c.destroyed||c.setTransition(s)}),m("beforeDestroy",()=>{const n=l.thumbs.swiper;!n||n.destroyed||j&&n.destroy()}),Object.assign(l.thumbs,{init:C,update:u})}const O="/assets/classical-black-tshirt-7202f0eb.png",de="/assets/black-t-shirt-0d1cc8b7.png",ce="/assets/check-shirt-0ff14c2f.png",xe="/assets/gray-jumper-0be3833d.png",pe="/assets/gray-t-shirt-c7fcb16c.png",ue="/assets/pink-blazer-188aa42f.png",me="/assets/red-t-shirt-1ba39e1a.png",fe="/assets/yellow-frok-8af7aa05.png",he="/assets/yellow-jumper-350dccb3.png",be="/assets/1-dc48e254.png",_e="/assets/2-4f28f3a2.png",G="/assets/3-66143187.png",ge="/assets/gmail-e77e24f1.svg",ve="/assets/facebook-c31ab33d.svg",ke="/assets/twitter-3194be8c.svg",we="/assets/insta-23d253f1.svg",ye="/assets/linkedin-42b7f674.svg";const Se=["src"],Ce=["src"],Ie={__name:"thumb-slider",props:{product:Object,id:String},setup(l){const v=[O,de,ce,pe,xe,ue,me,fe,he],m=z(null),I=u=>{m.value=u},j=Z(),L=z(!1);ee(j,u=>{L.value=u.direction});const C=[Y,ie];return(u,n)=>(h(),g(T,null,[a(t(R),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,spaceBetween:10,navigation:!1,thumbs:{swiper:m.value},modules:C,class:"mySwiper2"},{default:b(()=>[(h(),g(T,null,B(v,(s,c)=>a(t(N),{key:c,class:"h-[409px] w-[396px] py-11 px-14 bg-secondary-200 rounded-md"},{default:b(()=>[e("img",{class:"h-full w-full object-contain transition-all duration-300 group-hover:scale-105",src:s,alt:"."},null,8,Se)]),_:2},1024)),64))]),_:1},8,["thumbs"]),e("div",{class:q(["flex mt-6 space-x-3",L.value?"space-x-reverse":""])},[a(t(R),{onSwiper:I,loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:C,class:"mySwiper"},{default:b(()=>[(h(),g(T,null,B(v,(s,c)=>a(t(N),{key:c,class:"h-[90px] w-[90px] py-[14px] px-[17px] bg-secondary-200 rounded"},{default:b(()=>[e("img",{class:"h-full w-full object-contain",src:s,alt:"."},null,8,Ce)]),_:2},1024)),64))]),_:1})],2)],64))}},je={key:0},Le={key:1,class:"w-full bg-white dark:bg-slate-800 p-6 rounded-lg"},Te={class:"pb-5"},Pe={class:"grid grid-cols-12 md:space-x-6 md:space-y-0 space-y-4 sm:space-y-4 rtl:space-x-reverse"},Be={class:"col-span-12 md:col-span-5 lg:col-span-4 space-y-4"},$e={class:"col-span-12 md:col-span-7 lg:col-span-8 space-y-2"},qe={class:"space-y-2"},ze={class:"text-slate-900 dark:text-slate-300 text-xl lg:text-2xl font-medium"},Ae={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse"},Oe=e("span",{class:"ltr:pl-2 rtl:pr-2 text-slate-500 dark:text-slate-400"}," (789 reviews) ",-1),Ve={class:"flex items-center space-x-2 rtl:space-x-reverse"},Me=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Brand: ",-1),De={class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 capitalize"},Ee=e("div",{class:"flex items-center space-x-2 rtl:space-x-reverse"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Available: "),e("p",{class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300"}," In Stock ")],-1),Fe={class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"},Ne={class:"flex flex-col space-y-4 py-4 !mt-0"},Re={class:"flex flex-col space-y-3"},Xe={class:"flex items-center space-x-2 rtl:space-x-reverse"},Je=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Color: ",-1),Ge={class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 capitalize"},Qe={class:"flex space-x-4 rtl:space-x-reverse h-6"},Ke=["value","onChange"],Ue={class:"flex flex-col space-y-3"},He={class:"flex items-center space-x-2 rtl:space-x-reverse"},We=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Size: ",-1),Ye={class:"font-medium text-base text-slate-900 dark:text-slate-300"},Ze={class:"flex items-center space-x-4 rtl:space-x-reverse mb-4 h-6"},et=["value","onChange"],tt=e("div",{class:"w-full border-t border-slate-300 dark:border-slate-600"},null,-1),st={class:"overflow-x-auto"},lt={class:"inline-block max-w-full align-middle"},at={class:"overflow-hidden"},ot={class:"min-w-full"},rt={class:"bg-white dark:bg-slate-800"},nt=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Price: ",-1),it={class:"table-td py-2 px-8 space-x-3 rtl:space-x-reverse"},dt={class:"text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},ct={class:"text-slate-500 dark:text-slate-400 font-semibold text-base lg:text-xl"},xt=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Quantity: ",-1),pt={class:"table-td py-2 px-8"},ut={key:1},mt={class:"flex space-x-4 rtl:space-x-reverse items-center cursor-not-allowed"},ft={class:"flex-1 h-8 flex border border-1 border-slate-400 delay-150 ease-in-out dark:border-slate-600 divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-slate-500 dark:divide-slate-600 rounded cursor-not-allowed"},ht={type:"button",class:"flex-none px-2 dark:text-white text-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 cursor-not-allowed opacity-50"},bt=e("div",{class:"flex-1 w-[62px] text-center text-slate-500 dark:text-slate-300 flex items-center justify-center cursor-not-allowed"}," 0 ",-1),_t={type:"button",class:"flex-none px-2 cursor-not-allowed opacity-50 text-slate-900 hover:bg-slate-900 hover:text-white dark:text-white dark:hover:bg-slate-700 rtl:dark:hover:rounded-l ltr:dark:hover:rounded-r"},gt=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Total Price: ",-1),vt={key:0,class:"table-td py-2 px-8 text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},kt={key:1,class:"table-td py-2 px-8 text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},wt={class:"flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse pb-5"},yt={class:"flex space-x-3 rtl:space-x-reverse"},St={class:"flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 rtl:space-x-reverse"},Ct=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Share to: ",-1),It={class:"flex items-center space-x-3 rtl:space-x-reverse"},jt={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},Lt=["src"],Tt={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},Pt=["src"],Bt={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},$t=["src"],qt={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},zt=["src"],At={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},Ot=["src"],Vt={class:"space-y-5"},Mt={class:"border border-1 dark:border-slate-700 rounded"},Dt=e("div",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"},[e("p",null," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. "),e("ul",{class:"space-y-3 p-6 sm:ml-14 lg:ml-28 ml-0 rounded-md bg-slate-white dark:bg-slate-800"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[10px] w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Lorem ipsum dolor sit amet.")])]),e("p",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. ")],-1),Et=e("div",{class:"text-slate-600 dark:text-slate-400 text-sm font-normal"},[e("div",{class:"flex justify-between items-start pb-4 overflow-auto space-x-3 rtl:space-x-reverse"},[e("ul",{class:"space-y-3 rounded-md bg-slate-white dark:bg-slate-800 min-w-[200px]"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Brand : Easy")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Material : Cotton")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Pattern : Solid Color")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Collar : Square Neck")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Color : As given picture")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Sleeve Length : Long Sleeve")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Plate Type : Slim")])]),e("ul",{class:"space-y-3 rounded-md bg-slate-white dark:bg-slate-800 min-w-[200px]"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Sales Channel Type : E-commerce Only Sells Online")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Material Composition : 100% Cotton")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Size : M,L,XL")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' M- long: 29", body: 40"')]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' L- long: 30 ", body: 42"')]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' XL- long: 31", body: 44"')])])]),e("p",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. ")],-1),Ft={class:"border border-1 dark:border-slate-700 rounded p-6"},Nt=e("h6",{class:"text-slate-900 dark:text-slate-300 pb-6 text-lg lg:text-xl"}," Reviews & Ratings ",-1),Rt={class:"space-y-12"},Xt={class:"bg-secondary-100 dark:bg-slate-700 p-6 rounded grid grid-cols-12"},Jt={class:"col-span-12 items-center md:col-span-6 flex space-x-3 justify-center md:justify-start rtl:space-x-reverse order-2 md:order-1 mt-3 md:mt-0"},Gt=e("div",{class:"font-medium items-center flex"},[e("p",{class:"text-slate-900 dark:text-slate-300 text-base lg:text-lg"}," 4.2 "),e("p",{class:"text-slate-500 dark:text-slate-400 text-sm lg:text-base"}," /5 ")],-1),Qt={class:"flex flex-col sm:flex-row sm:items-center md:justify-start text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base"},Kt={class:"flex items-center space-x-1.5"},Ut=e("div",{class:"text-slate-500 dark:text-slate-400"}," (789 reviews) ",-1),Ht=e("div",{class:"col-span-12 md:col-span-6 flex justify-center md:justify-end items-center order-1 md:order-2"},[e("button",{type:"button",class:"bg-yellow-500 text-white rounded px-6 py-3 text-sm lg:text-base"}," Rate this product ")],-1),Wt={class:"flex space-x-3 rtl:space-x-reverse"},Yt={class:"h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"},Zt=["src"],es=e("p",{class:"text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"}," Devied Beakhum ",-1),ts=e("p",{class:"text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"}," 08-03-2023 ",-1),ss={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"},ls=e("p",{class:"pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ",-1),as=e("div",{class:"flex space-x-2 rtl:space-x-reverse pb-3"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Info: "),e("p",{class:"font-medium text-sm lg:text-base text-[#10B26C]"}," Verified Purchase ")],-1),os={class:"grid grid-cols-12"},rs={class:"col-span-12 flex justify-end space-x-4 rtl:space-x-reverse dark:text-slate-400"},ns={class:"flex items-center space-x-2 rtl:space-x-reverse"},is={class:"cursor-pointer"},ds=e("span",null,"02",-1),cs={class:"flex items-center space-x-2 rtl:space-x-reverse"},xs={class:"cursor-pointer"},ps=e("span",null,"00",-1),us={class:"flex space-x-3 rtl:space-x-reverse"},ms={class:"h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"},fs=["src"],hs=e("p",{class:"text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"}," Devied Beakhum ",-1),bs=e("p",{class:"text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"}," 08-03-2023 ",-1),_s={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"},gs=e("p",{class:"pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ",-1),vs=e("div",{class:"flex space-x-2 rtl:space-x-reverse pb-3"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Info: "),e("p",{class:"font-medium text-sm lg:text-base text-[#10B26C]"}," Verified Purchase ")],-1),ks={class:"grid grid-cols-12"},ws={class:"col-span-12 mb-3"},ys={class:"flex space-x-2 rtl:space-x-reverse mb-9"},Ss={class:"h-[90px] w-[90px] rounded bg-slate-100 p-1 overflow-hidden"},Cs=["src"],Is={class:"h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"},js=["src"],Ls={class:"h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"},Ts=["src"],Ps={class:"max-h-[400px] max-w-[346px] rounded bg-slate-100 overflow-hidden p-1"},Bs=["src"],$s={class:"col-span-12 flex justify-end dark:text-slate-400 space-x-4 rtl:space-x-reverse"},qs={class:"flex items-center space-x-2 rtl:space-x-reverse"},zs={class:"cursor-pointer"},As=e("span",null,"02",-1),Os={class:"flex items-center space-x-2 rtl:space-x-reverse"},Vs={class:"cursor-pointer"},Ms=e("span",null,"00",-1),el={__name:"product-details",props:{product:Object,id:String},setup(l){const v=z("black"),m=z("S"),I=[{code:"black"},{code:"pink"},{code:"orange"},{code:"red"},{code:"yellow"}],j=[{code:"S"},{code:"M"},{code:"L"},{code:"XL"},{code:"XXL"}],L=y=>{m.value=y},C=y=>{v.value=y},u=Q(),s=se().params.id,c=[{title:"Description"},{title:"Additional Info"}],{isLoading:x,isError:_,isFetching:k,data:d,error:i,refetch:p}=le({queryKey:["product"],queryFn:()=>getProductById(s)});return(y,S)=>{var w,V,M,D,E;return t(x)?(h(),g("span",je," loading...")):(h(),g("div",Le,[e("div",Te,[e("div",Pe,[e("div",Be,[a(Ie,{product:t(d).product},null,8,["product"])]),e("div",$e,[e("div",qe,[e("h1",ze,f(t(d).product.name),1),e("p",Ae,[a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-slate-300/80"}),Oe]),e("div",Ve,[Me,e("p",De,f(t(d).product.brand),1)]),Ee,e("p",Fe,f(t(d).product.desc),1)]),e("div",Ne,[e("div",Re,[e("div",Xe,[Je,e("p",Ge,f(v.value),1)]),e("div",Qe,[(h(),g(T,null,B(I,(r,P)=>e("label",{key:P},[e("input",{type:"radio",name:"color",value:r.code,onChange:A=>C(r.code),class:"hidden"},null,40,Ke),e("div",{style:X({backgroundColor:r.code}),class:q(["h-7 w-7",{"ring-slate-900 dark:ring-slate-50":r.code===v.value,"ring-slate-300 dark:ring-slate-700":r.code!==v.value,"ring-1":!0,"ring-offset-2":!0,"dark:ring-offset-slate-800 ring-offset-slate-50":!0,"cursor-pointer":!0,"rounded-sm":!0}])},null,6)])),64))])]),e("div",Ue,[e("div",He,[We,e("p",Ye,f(m.value),1)]),e("div",Ze,[(h(),g(T,null,B(j,(r,P)=>e("label",{key:P},[e("input",{type:"radio",name:"size",value:r.code,onChange:A=>L(r.code),class:"hidden h-7 w-7"},null,40,et),e("div",{style:X({backgroundColor:r.code}),class:q(["h-7 w-7",{"ring-slate-900 dark:ring-slate-50":r.code===m.value,"ring-slate-300 dark:ring-slate-700":r.code!==m.value,"ring-1":!0,"dark:text-slate-300 text-slate-900":!0,"dark:ring-slate-900":r.code===m.value,"ring-offset-2":!0,flex:!0,"justify-center":!0,"items-center":!0,"ring-offset-white dark:ring-offset-slate-900":!0,"cursor-pointer":!0,"dark:ring-offset-transparent":!0,"rounded-sm":!0}])},f(r.code),7)])),64))])])]),tt,e("div",st,[e("div",lt,[e("div",at,[e("table",ot,[e("tbody",rt,[e("tr",null,[nt,e("td",it,[e("span",dt," $"+f(t(d).product.price),1),e("del",ct,f(t(d).product.oldPrice),1),a(t(U),{class:"font-normal text-[10px] bg-danger-600 text-white"},{default:b(()=>[e("span",null,f(t(d).product.percent),1)]),_:1})])]),e("tr",null,[xt,e("td",pt,[t(u).getItems.find(r=>r.id==t(s))?(h(),te(K,{key:0,product:(w=t(d))==null?void 0:w.product},null,8,["product"])):(h(),g("span",ut,[e("div",mt,[e("div",ft,[e("button",ht,[a(t(o),{icon:"eva:minus-fill"})]),bt,e("button",_t,[a(t(o),{icon:"eva:plus-fill"})])])])]))])]),e("tr",null,[gt,t(u).getItems.find(r=>r.id===t(s))?(h(),g("td",vt," $"+f(((M=(V=t(d))==null?void 0:V.product)==null?void 0:M.price)*t(u).getItems.find(r=>r.id===t(s)).quantity),1)):(h(),g("td",kt," $"+f((E=(D=t(d))==null?void 0:D.product)==null?void 0:E.price),1))])])])])])]),e("div",wt,[a(t($),{onClick:S[0]||(S[0]=r=>t(u).addToCart(t(d).product)),disabled:t(u).getItems.find(r=>r.id===t(s)),text:"Add to Cart",icon:"heroicons:shopping-bag",btnClass:"btn-outline-dark w-[180px] btn-sm font-medium hover:bg-slate-900 dark:text-white hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center  disabled:cursor-not-allowed disabled:opacity-50",iconClass:" text-sm leading-none"},null,8,["disabled"]),a(t($),{text:"Buy Now",btnClass:"btn-outline-dark w-[180px] btn-sm bg-slate-900 dark:bg-slate-800 font-medium hover:bg-white text-white hover:text-slate-900 dark:hover:text-white dark:hover:!bg-slate-700 flex items-center",iconClass:" text-sm leading-none"}),e("div",yt,[a(t($),{icon:"octicon:heart-16",btnClass:"btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center",iconClass:" text-sm leading-none"}),a(t($),{icon:"eva:repeat-fill",btnClass:"btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center",iconClass:" text-sm leading-none"})])]),e("div",St,[Ct,e("div",It,[e("button",jt,[e("img",{class:"w-full h-full",src:t(ge)},null,8,Lt)]),e("button",Tt,[e("img",{class:"w-full h-full",src:t(ve)},null,8,Pt)]),e("button",Bt,[e("img",{class:"w-full h-full",src:t(ke)},null,8,$t)]),e("button",qt,[e("img",{class:"w-full h-full",src:t(we)},null,8,zt)]),e("button",At,[e("img",{class:"w-full h-full",src:t(ye)},null,8,Ot)])])])])])]),e("div",Vt,[e("div",Mt,[a(t(H),null,{default:b(()=>[a(t(ae),null,{default:b(()=>[a(t(oe),{class:"lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse"},{default:b(()=>[(h(),g(T,null,B(c,(r,P)=>a(t(re),{as:"template",key:P},{default:b(({selected:A})=>[e("button",{class:q([[A?"text-slate-900 dark:text-slate-300 before:w-full":"text-slate-500 before:w-0 dark:text-slate-500"],"text-lg lg:text-xl font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-slate-900 dark:before:bg-slate-300 before:-translate-x-1/2"])},f(r.title),3)]),_:2},1024)),64))]),_:1}),a(t(ne),null,{default:b(()=>[a(t(J),null,{default:b(()=>[Dt]),_:1}),a(t(J),null,{default:b(()=>[Et]),_:1})]),_:1})]),_:1})]),_:1})]),e("div",Ft,[Nt,e("div",Rt,[e("div",Xt,[e("div",Jt,[Gt,e("div",Qt,[e("div",Kt,[a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-slate-300/80"})]),Ut])]),Ht]),e("div",Wt,[e("div",Yt,[e("img",{class:"h-full w-full object-contain",src:t(O)},null,8,Zt)]),e("div",null,[e("div",null,[es,ts,e("p",ss,[a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"})]),ls,as]),e("div",os,[e("div",rs,[e("p",ns,[e("span",is,[a(t(o),{icon:"heroicons:hand-thumb-up"})]),ds]),e("p",cs,[e("span",xs,[a(t(o),{icon:"carbon:reply"})]),ps])])])])]),e("div",us,[e("div",ms,[e("img",{class:"h-full w-full object-contain",src:t(O)},null,8,fs)]),e("div",null,[e("div",null,[hs,bs,e("p",_s,[a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"}),a(t(o),{icon:"ph:star-fill",class:"text-yellow-400"})]),gs,vs]),e("div",ks,[e("div",ws,[e("div",ys,[e("div",Ss,[e("img",{class:"h-full w-full object-contain",src:t(G)},null,8,Cs)]),e("div",Is,[e("img",{class:"h-full w-full object-contain",src:t(be)},null,8,js)]),e("div",Ls,[e("img",{class:"h-full w-full object-contain",src:t(_e)},null,8,Ts)])]),e("div",Ps,[e("img",{class:"h-full w-full object-contain",src:t(G)},null,8,Bs)])]),e("div",$s,[e("p",qs,[e("span",zs,[a(t(o),{icon:"heroicons:hand-thumb-up"})]),As]),e("p",Os,[e("span",Vs,[a(t(o),{icon:"carbon:reply"})]),Ms])])])])])])])])]))}}};export{el as default};
