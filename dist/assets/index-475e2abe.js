import{C as M,_ as b,f as _,o as a,a as l,d as e,j as m,h as A,k as B,v as N,e as c,l as x,t as n,F as r,b as d,n as y,i as u,p as L,q as j,r as k,g as $}from"./index-c8e4a2fa.js";import{l as U}from"./logo-j-f2980ccb.js";import{I as z}from"./index-a29ad72f.js";import{B as E}from"./index-68000b46.js";import{l as F}from"./logout-d1f416d8.js";M({events:{},emit(t,o){this.events[t]&&this.events[t].forEach(h=>h(o))},on(t,o){this.events[t]||(this.events[t]=[]),this.events[t].push(o)},off(t,o){this.events[t]&&(this.events[t]=this.events[t].filter(h=>h!==o))}});const H={data(){return{showSearch:!1,keywordSet:!1,apiUrl:_.defaults.baseURL,keyword:"",products:[],loading:!1}},methods:{async search(){this.loading=!0;const t=this.keyword.trim();t?_.get(`/api/products/search/${t}`).then(o=>{this.products=o.data.products.data,this.keywordSet=!0,console.log(o.data),console.log("products length: "+this.products.length)}).catch(o=>{console.log(o)}):(this.keyword="",this.keywordSet=!1,this.products=[]),this.loading=!1},handleClickOutside(t){this.$refs.searchModal&&!this.$refs.searchModal.contains(t.target)&&(this.showSearch=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)}},O={class:"",ref:"searchModal"},R={class:"text-3xl hover:cursor-pointer flex items-center"},V=e("i",{class:"bx bx-search text-2xl hover:text-pink-600"},null,-1),Z=[V],D={key:0,class:"fixed left-0 top-0 z-50 w-full h-full md:h-auto bg-white border overflow-y-scroll md:overflow-y-hidden"},P={class:"relative w-full bg-white text-black font-semibold px-5 py-4"},T={class:"w-full grid grid-cols-12 items-center"},J=e("div",{class:"hidden md:flex col-span-3"},[e("a",{href:"/"},[e("img",{src:U,alt:"logo",class:"w-9 h-9"})])],-1),K=["placeholder"],W=["href"],q={key:0,"aria-hidden":"true",class:"mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Y=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Q=[G,Y],X={key:1,class:"mx-auto",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22",height:"22",viewBox:"0 0 30 30"},ee=e("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"},null,-1),te=[ee],se={key:1,type:"button",class:"absolute top-0 right-0 w-[40px] h-full"},ae={key:0,"aria-hidden":"true",class:"mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},le=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),oe=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),ie=[le,oe],ne={key:1,class:"mx-auto",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22",height:"22",viewBox:"0 0 30 30"},ce=e("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"},null,-1),re=[ce],de={class:"flex col-span-2 md:col-span-3 items-center justify-end"},he=e("i",{class:"bx bx-x"},null,-1),pe=[he],ue=u('<div class="gap-1 mt-2 justify-center hidden"><div class="font-normal capitalize text-[#afaeae]">Popular Search: </div><ul class="flex gap-3 font-normal"><a href=""><li class="underline font-medium text-black">Home</li></a><a href=""><li class="underline font-medium text-black">Bikini</li></a><a href=""><li class="underline font-medium text-black">Contact Us</li></a></ul></div>',1),ge={class:"grid grid-cols-12 gap-3"},xe={key:0,class:"col-span-12 capitalize mb-2 text-lg text-center font-medium mt-3 text-[#afaeae]"},_e={class:"text-black"},be=["product"],fe=["href"],ve=e("div",{class:"w-full h-full bg-transparent"},null,-1),me=[ve],we=["href"],ye=["src"],ke={href:"#"},$e={class:"text-base font-medium mt-3 px-2 text-black"},Ce={class:"text-md font-medium px-2 text-black"},Se={key:0,class:"flex gap-4 text-black-500 items-center px-2 py-5"},Le={key:2,class:"col-span-full flex justify-center"},je=["href"];function ze(t,o,h,f,s,g){return a(),l(r,null,[e("div",{class:m(["fixed w-full h-screen z-50 top-[59px] left-0 duration-700",{visible:s.showSearch,hidden:!s.showSearch}]),style:{"background-color":"rgb(0 0 0 / 50%)"}},null,2),e("div",O,[e("li",R,[e("div",{class:"hover:text-pink-600",onClick:o[0]||(o[0]=i=>s.showSearch=!s.showSearch)},Z)]),s.showSearch?(a(),l("div",D,[e("div",P,[e("div",T,[J,e("form",{onKeyup:o[2]||(o[2]=A(i=>g.search(),["prevent"])),class:"col-span-10 md:col-span-6 relative w-full h-10 border border-black rounded"},[B(e("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>s.keyword=i),type:"search",class:"font-normal w-full h-full rounded focus:ring-0 border-none focus:border-none pl-4",placeholder:t.$t("searchProduct"),style:{"padding-right":"45px"},name:"",id:""},null,8,K),[[N,s.keyword]]),s.keywordSet&&!s.loading?(a(),l("a",{key:0,href:"/products/search/"+s.keyword,class:"absolute top-2 right-0 w-[40px] h-full"},[s.loading?(a(),l("svg",q,Q)):c("",!0),s.loading?c("",!0):(a(),l("svg",X,te))],8,W)):(a(),l("button",se,[s.loading?(a(),l("svg",ae,ie)):c("",!0),s.loading?c("",!0):(a(),l("svg",ne,re))]))],32),e("div",de,[e("div",{class:"text-black text-3xl mt-2 text-blue-600 hover:cursor-pointer",onClick:o[3]||(o[3]=i=>s.showSearch=!1)},pe)])]),ue,e("div",ge,[s.keywordSet?(a(),l("h1",xe,[x(n(s.products.length)+" "+n(t.$t("resultsFor"))+": ",1),e("span",_e,n('"'+s.keyword+'"'),1)])):c("",!0),s.products.length>0?(a(!0),l(r,{key:1},d(s.products.slice(0,1),i=>(a(),l("div",{product:i,class:"col-span-6 sm:col-span-3 border md:col-span-3"},[e("div",{class:"w-full h-[260px] overflow-hidden bg-cover bg-center bg-no-repeat",style:y({backgroundImage:`url(${s.apiUrl}/storage/${i.image_url})`})},[e("a",{href:"/product/"+i.slug,class:""},me,8,fe)],4),e("a",{href:"/product/"+i.slug,class:"w-full h-[260px] overflow-hidden hidden",style:y({backgroundImage:`${s.apiUrl}/storage/${i.image_url}`})},[e("img",{class:"w-full max-h-[300px] hidden",src:`${s.apiUrl}/storage/${i.image_url}`,alt:""},null,8,ye)],12,we),e("a",ke,[e("h1",$e,n(i.title),1)]),e("p",Ce,[e("span",null,n(i.variants[0].price+" FCFA"),1)]),i.options.length>0&&i.options[0].name=="color"?(a(),l("div",Se,[(a(!0),l(r,null,d(i.options[0].values,w=>(a(),l("div",{style:y({backgroundColor:w.value}),class:"w-8 h-8 rounded-full border"},null,4))),256))])):c("",!0)],8,be))),256)):c("",!0),s.keywordSet?(a(),l("div",Le,[e("a",{href:"/products/search/"+s.keyword,class:"mx-auto text-center px-3 font-medium text-base text-white bg-[#0e0e0e] py-2 rounded mb-3"},n(t.$t("loadMoreResults")),9,je)])):c("",!0)])])])):c("",!0)],512)],64)}const Ie=b(H,[["render",ze]]);const Me={data(){return{showSidebar:!1}},components:{Icon:z},props:{categories:{type:Array,default:()=>[]}},methods:{handleClickOutside(t){this.$refs.RespNav&&!this.$refs.RespNav.contains(t.target)&&(this.showSidebar=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)}},C=t=>(L("data-v-3caeb12c"),t=t(),j(),t),Ae={ref:"RespNav",class:"visible lg:hidden col-span-2"},Be={key:0,class:"pointer-events-none"},Ne=C(()=>e("svg",{class:"w-[22px] h-[22px]",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"})],-1)),Ue=[Ne],Ee={class:"flex justify-between items-center gap-2"},Fe=u('<a href="#" class="bg-black-50 hover:bg-pink-600 hover:text-white w-1/4 py-1 text-center rounded-md" data-v-3caeb12c><i class="text-2xl bx bx-user" data-v-3caeb12c></i></a><a href="/cart" class="bg-black-50 hover:bg-pink-600 hover:text-white w-1/4 py-1 text-center rounded-md" data-v-3caeb12c><i class="text-2xl bi bi-cart3" data-v-3caeb12c></i></a><a href="/wishlist" class="bg-black-50 hover:bg-pink-600 hover:text-white w-1/4 py-1 text-center rounded-md" data-v-3caeb12c><i class="text-2xl bx bx-heart" data-v-3caeb12c></i></a>',3),He={key:0,class:"text-2xl text-black bx bx-x"},Oe={class:"justify-between flex-wrap items-center gap-2 my-3"},Re=C(()=>e("p",{class:"col-span-2 mt-3 text-black-500 font-medium text-center py-[4px] text-[18px]"},"Categories",-1)),Ve={href:"#",class:"group hover:text-pink-600 py-2 text-start px-2 gap-2 rounded-md flex items-center justify-start"},Ze=C(()=>e("i",{class:"hidden group-hover:block text-lg bx bx-right-arrow-alt"},null,-1)),De=u('<div class="grid grid-cols-5 justify-between flex-wrap items-center gap-2 my-3" data-v-3caeb12c><p class="col-span-5 mt-3 text-black-500 font-medium text-center py-[4px] text-[18px]" data-v-3caeb12c>Social Media</p><a href="#" target="_blank" class="hover:text-pink-600 col-span-1 text-2xl text-start rounded-md" data-v-3caeb12c><i class="bx bxl-facebook" data-v-3caeb12c></i></a><a href="#" target="_blank" class="hover:text-pink-600 col-span-1 text-2xl text-start rounded-md" data-v-3caeb12c><i class="bx bxl-instagram" data-v-3caeb12c></i></a><a href="#" target="_blank" class="hover:text-pink-600 col-span-1 text-2xl text-start rounded-md" data-v-3caeb12c><i class="bx bxl-twitter" data-v-3caeb12c></i></a><a href="#" target="_blank" class="hover:text-pink-600 col-span-1 text-2xl text-start rounded-md" data-v-3caeb12c><i class="bx bxl-pinterest-alt" data-v-3caeb12c></i></a><a href="https://www.tiktok.com/@sybirine?_t=8oGsA1Nj9AD&amp;_r=1" target="_blank" class="col-span-1 text-2xl text-start rounded-md" data-v-3caeb12c><i class="bx bxl-tiktok" data-v-3caeb12c></i></a></div>',1);function Pe(t,o,h,f,s,g){return a(),l(r,null,[e("div",{class:m(["fixed w-full h-screen top-[0px] left-0 duration-700 hidden",{visible:s.showSidebar,hidden:!s.showSidebar}]),style:{"background-color":"rgb(0 0 0 / 50%)"}},null,2),e("div",Ae,[e("div",{onClick:o[0]||(o[0]=i=>s.showSidebar=!0),class:"col-span-2 text-black visible text-3xl hover:cursor-pointer relative flex items-center"},[s.showSidebar?c("",!0):(a(),l("div",Be,Ue))]),e("div",{class:m([{"translate-x-0":s.showSidebar,"-translate-x-[600px]":!s.showSidebar},"duration-700 border lg:hidden absolute left-0 top-[0px] p-5 w-full sm:w-[400px] h-fit overflow-y-scroll z-50 bg-white text-black"]),ref:"sidebar",style:{height:"calc(100vh - 0px)","box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},[e("div",Ee,[Fe,e("button",{onClick:o[1]||(o[1]=i=>s.showSidebar=!1),class:"w-1/4"},[s.showSidebar?(a(),l("i",He)):c("",!0)])]),e("div",Oe,[Re,h.categories.length>0?(a(!0),l(r,{key:0},d(h.categories.slice(0,8),i=>(a(),l("a",Ve,[e("span",null,n(i.name),1),Ze]))),256)):c("",!0)]),De],2)],512)],64)}const Te=b(Me,[["render",Pe],["__scopeId","data-v-3caeb12c"]]),Je={data(){return{selectedLanguage:this.$i18n.locale}},methods:{changeLanguage(t){this.$i18n.locale=t,localStorage.setItem("locale",t),this.selectedLanguage=t,window.location.reload()}},mounted(){this.selectedLanguage=localStorage.getItem("locale")||this.$i18n.locale,this.$i18n.locale=this.selectedLanguage}},Ke={class:"col-span-3 lg:col-span-4 hidden md:block"},We={class:"flex group w-fit relative hover:cursor-pointer justify-center items-center bg-black-50"},qe=e("div",{class:"px-2"},[e("i",{class:"bx bx-world"})],-1),Ge={class:"text-lg px-2 uppercase"},Ye={class:"bg-white w-max p-4 hidden group-hover:flex font-medium hover:cursor-pointer flex-col gap-3 absolute left-0 top-7 border h-max",style:{"box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},Qe=e("i",{class:"bx bx-world"},null,-1),Xe={class:"flex gap-2"};function et(t,o,h,f,s,g){return a(),l("div",Ke,[e("div",We,[qe,e("div",Ge,n(s.selectedLanguage),1),e("div",Ye,[e("p",null,[Qe,x(" "+n(t.$t("chooseLanguage")),1)]),e("div",Xe,[e("button",{class:m(["border py-1 px-2",s.selectedLanguage=="en"?"border-pink-500":""]),onClick:o[0]||(o[0]=i=>g.changeLanguage("en"))}," English ",2),e("button",{class:m(["border py-1 px-2",s.selectedLanguage=="fr"?"border-pink-500":""]),onClick:o[1]||(o[1]=i=>g.changeLanguage("fr"))}," Francais ",2)])])])])}const tt=b(Je,[["render",et]]),st={name:"NavbarLoader",props:{pageLoading:{type:Boolean,default:!1}}},at={class:"bg-white"},lt={class:"grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b"},ot=u('<div class="col-span-3 lg:col-span-4 hidden md:block"><div class="flex h-6 w-6 bg-slate-200"></div></div><div class="col-span-1 block md:hidden"><div class="flex h-6 w-6 bg-slate-200"></div></div><div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center"><div class="h-4 w-full bg-slate-200"></div></div>',3),it={class:"col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6"},nt={class:"h-6 w-6 bg-slate-200 rounded-full col-span-2"},ct={class:"hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-hidden"},rt={class:"h-4 w-1/4 bg-slate-200"},dt=e("div",{class:"bg-slate-200 text-white hidden"},[e("div",{class:"px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm"})],-1);function ht(t,o,h,f,s,g){return a(),l("div",at,[e("div",lt,[ot,e("div",it,[(a(),l(r,null,d(5,i=>e("div",nt)),64))])]),e("div",ct,[(a(),l(r,null,d(10,i=>e("div",rt)),64))]),dt])}const pt=b(st,[["render",ht]]);async function S(){await _.get("/api/user").then(t=>t.data.user).catch(t=>!1)}const ut={name:"HomeHeader",data(){return{isShow:!1,isAuth:!!S(),categories:[],cartItemCount:0,eventContent:"",logout:F,pageLoading:!1}},components:{Button:E,Icon:z,Responsive:Te,Search:Ie,Language:tt,NavLoader:pt},methods:{showLanguage(){this.isShow=!this.isShow},changeLanguage(){},countCart(){this.cartItemCount=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0},async fetchCategories(){await _.get("api/categories/top").then(t=>{const o=t.data;this.categories=o.categories}).catch(t=>{console.error("Error fetching categories:",t)})}},async mounted(){this.pageLoading=!0,this.fetchCategories().then(()=>{this.countCart(),this.isAuth=S().then(t=>{console.log(this.isAuth)}),this.isAuth=!!this.isAuth,this.emitter.on("cartUpdated",t=>{this.cartItemCount=t.eventContent})}).finally(()=>{this.pageLoading=!1})}},p=t=>(L("data-v-5d9b7486"),t=t(),j(),t),gt={key:0,class:"bg-white"},xt={class:"grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b"},_t=u('<div class="col-span-3 lg:col-span-4 hidden md:block" data-v-5d9b7486><div class="flex h-6 w-6 bg-slate-200" data-v-5d9b7486></div></div><div class="col-span-1 block md:hidden" data-v-5d9b7486><div class="flex h-6 w-6 bg-slate-200" data-v-5d9b7486></div></div><div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center" data-v-5d9b7486><div class="h-4 w-full bg-slate-200" data-v-5d9b7486></div></div>',3),bt={class:"col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6"},ft={class:"h-6 w-6 bg-slate-200 rounded-full col-span-2"},vt={class:"hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-hidden"},mt={class:"h-4 w-1/4 bg-slate-200"},wt=p(()=>e("div",{class:"bg-slate-200 text-white hidden"},[e("div",{class:"px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm"})],-1)),yt={key:1,class:"bg-white"},kt={class:"grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b"},$t={class:"col-span-1 block md:hidden"},Ct=u('<div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center" data-v-5d9b7486><a href="/" class="uppercase font-bold text-[30px] whitespace-nowrap inline text-white" data-v-5d9b7486><div class="pointer-events-none" data-v-5d9b7486><span class="text-black-500 px-2" data-v-5d9b7486>Julie</span><span class="text-pink-600 px-2 hidden sm:inline" data-v-5d9b7486>Underwear</span><span class="text-white bg-pink-600 px-2 inline sm:hidden" data-v-5d9b7486>U</span></div></a></div>',1),St={class:"col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6"},Lt={class:"group relative",style:{"z-index":"1"}},jt=p(()=>e("i",{class:"text-2xl bx bx-user hover:text-pink-600"},null,-1)),zt={key:0,class:"bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max",style:{"box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},It={class:"border-b-2 p-6 flex flex-col gap-4"},Mt={class:"text-lg font-semibold"},At=p(()=>e("a",{href:"/login",class:"w-full border py-2 btn-dark"}," Login ",-1)),Bt={class:"flex justify-between items-center gap-4 p-6 text-base"},Nt={href:"/cart",class:"hover:text-pink-600"},Ut=p(()=>e("i",{class:"bi bi-cart3"},null,-1)),Et={href:"/wishlist",class:"hover:text-pink-600"},Ft=p(()=>e("i",{class:"bi bi-heart-fill"},null,-1)),Ht={key:1,class:"bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max",style:{"box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},Ot=u('<div class="border-b p-4 flex flex-col gap-4" data-v-5d9b7486><a href="/profile-setting" class="text-start flex gap-2 hover:text-pink-600" data-v-5d9b7486><i class="text-lg nullbx bx-user" data-v-5d9b7486></i> Profile</a><a href="#" class="text-start flex gap-2 hover:text-pink-600" data-v-5d9b7486><i class="text-lg bi bi-cart3" data-v-5d9b7486></i> Track Orders</a><a href="/wishlist" class="text-start flex gap-2 hover:text-pink-600" data-v-5d9b7486><i class="text-lg bx bx-heart" data-v-5d9b7486></i> Wishlist</a><a href="#" class="text-start gap-2 hidden hover:text-pink-600" data-v-5d9b7486><i class="text-lg bx bx-help-circle" data-v-5d9b7486></i> Help</a></div>',1),Rt=p(()=>e("button",null,"Logout",-1)),Vt=[Rt],Zt=p(()=>e("a",{class:"hover:text-pink-600",href:"/wishlist"},[e("i",{class:"text-2xl bx bx-heart"})],-1)),Dt={class:"hover:text-pink-600 relative",href:"/cart"},Pt=p(()=>e("i",{class:"text-2xl bi bi-cart3"},null,-1)),Tt={class:"w-5 h-5 p-2 top-0 -right-2 rounded-full bg-pink-600 text-white absolute flex items-center justify-center"},Jt={key:0,class:"hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-scroll"},Kt=["href"],Wt={class:"bg-pink-600 text-white"},qt={class:"px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm"},Gt={class:""},Yt=p(()=>e("i",{class:"text-lg bi bi-cart3"},null,-1)),Qt={class:""},Xt=p(()=>e("i",{class:"bi bi-repeat"},null,-1)),es={class:""},ts=p(()=>e("i",{class:"bi bi-credit-card"},null,-1));function ss(t,o,h,f,s,g){const i=k("Language"),w=k("Responsive"),I=k("Search");return a(),l(r,null,[s.pageLoading?(a(),l("div",gt,[e("div",xt,[_t,e("div",bt,[(a(),l(r,null,d(5,v=>e("div",ft)),64))])]),e("div",vt,[(a(),l(r,null,d(10,v=>e("div",mt)),64))]),wt])):c("",!0),s.pageLoading?c("",!0):(a(),l("div",yt,[e("div",kt,[$(i),e("div",$t,[$(w,{categories:s.categories},null,8,["categories"])]),Ct,e("div",St,[$(I),e("button",Lt,[jt,s.isAuth===!1?(a(),l("div",zt,[e("div",It,[e("div",Mt,n(t.$t("notLoggedInYet")),1),At]),e("div",Bt,[e("a",Nt,[Ut,x(),e("span",null,n(t.$t("myCart")),1)]),e("a",Et,[Ft,x(),e("span",null,n(t.$t("wishlist")),1)])])])):c("",!0),s.isAuth!=!1?(a(),l("div",Ht,[Ot,e("div",{onClick:o[0]||(o[0]=v=>s.logout()),class:"flex hover:text-pink-600 justify-between items-center gap-4 p-4 text-base"},Vt)])):c("",!0)]),Zt,e("a",Dt,[Pt,e("div",Tt,n(s.cartItemCount),1)])])]),s.categories.length>0?(a(),l("div",Jt,[(a(!0),l(r,null,d(s.categories.slice(0,12),v=>(a(),l("a",{class:"text-base font-medium text-nowrap hover:text-pink-600",href:"/products/category/"+v.slug},n(v.name),9,Kt))),256))])):c("",!0),e("div",Wt,[e("div",qt,[e("div",Gt,[Yt,x(" "+n(t.$t("freeShipping")),1)]),e("div",Qt,[Xt,x(" 30 "+n(t.$t("returnPolicy")),1)]),e("div",es,[ts,x(" "+n(t.$t("securePayment")),1)])])])]))],64)}const Xs=b(ut,[["render",ss],["__scopeId","data-v-5d9b7486"]]),as={data(){return{token:localStorage.getItem("authToken"),categories:[],brands:[],loading:!1}},methods:{async fetchBrands(){await _.get("api/brands/top").then(t=>{const o=t.data;this.brands=o.brands}).catch(t=>{console.error("Error fetching brands:",t)})},async fetchCategories(){await _.get("api/categories/top").then(t=>{this.categories=t.data.categories,console.log(this.categories)}).catch(t=>{console.error("Error fetching categories:",t)})}},mounted(){this.loading=!0,this.fetchBrands().then(()=>{this.fetchCategories().then(()=>{this.loading=!1})})}},ls={key:0,class:"px-2 md:px-10 grid grid-cols-12 lg:grid-cols-10 bg-white border-t py-10 gap-8 text-black-500"},os={class:"capitalize col-span-full md:col-span-6 lg:col-span-4"},is=u('<div class="mt-4 h-2 w-16 bg-slate-200"></div><div class="space-y-3 mt-6"><div class="h-2 bg-slate-200 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-200 rounded col-span-2"></div><div class="h-2 bg-slate-200 rounded col-span-1"></div></div><div class="h-2 bg-slate-200 rounded"></div></div>',2),ns={class:"py-2 flex items-start gap-4"},cs=e("div",{class:"h-4 w-4 bg-slate-200 rounded-full col-span-2"},null,-1),rs=e("div",{class:"h-2 w-[80%] bg-slate-200 rounded"},null,-1),ds=[cs,rs],hs={class:"py-2 flex items-start gap-4"},ps={class:"h-6 w-6 bg-slate-200 rounded-full col-span-2"},us={class:"capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},gs=e("div",{class:"mt-4 h-2 w-16 bg-slate-200"},null,-1),xs={class:"h-full"},_s={class:"h-2 my-4 w-full bg-slate-200"},bs={class:"capitalize col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},fs=e("div",{class:"mt-4 h-2 w-16 bg-slate-200"},null,-1),vs={class:"h-full"},ms={class:"h-2 my-4 w-full bg-slate-200"},ws={class:"capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},ys=e("div",{class:"mt-4 h-2 w-16 bg-slate-200"},null,-1),ks={class:"h-full"},$s={class:"h-2 my-4 w-full bg-slate-200"},Cs={key:1,class:"px-2 md:px-10 grid grid-cols-12 lg:grid-cols-10 bg-white border-t py-10 gap-8 text-black-500"},Ss=u('<div class="capitalize col-span-full md:col-span-6 lg:col-span-4"><p class="text-xl font-medium py-3"> Julie Underweare</p><p class="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla rem.</p><ul><li class="py-2 flex items-start gap-4"><i class="text-base bx bx-current-location"></i> Atalar Mahallesi, Kurban Sokak, 34710 Üsküdar, Istanbul, Turkey </li><li class="py-2 flex items-start gap-4"><i class="text-base bx bxs-phone-call"></i> +905526456574 </li><li class="py-2 flex items-start gap-4"><i class="text-base bx bx-envelope"></i> ludivinseunda2@gmail.com </li><li class="py-2 flex items-start gap-4"><a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class="bx bxl-facebook"></i></div></a><a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class="bx bxl-whatsapp"></i></div></a><a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class="bx bxl-tiktok"></i></div></a><a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class="bx bxl-instagram"></i></div></a></li></ul></div>',1),Ls={class:"capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},js={class:"text-xl font-medium py-3"},zs={href:"/"},Is={class:"py-2 text-base text-black-500 flex items-start gap-4"},Ms={href:""},As={class:"py-2 text-base text-black-500 flex items-start gap-4"},Bs={href:"/wishlist"},Ns={class:"py-2 text-black-500 flex items-start gap-4"},Us={href:""},Es={class:"py-2 text-base text-black-500 flex items-start gap-4"},Fs={href:"/order-again"},Hs={class:"py-2 text-base text-black-500 flex items-start gap-4"},Os={class:"capitalize col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},Rs={class:"text-xl font-medium py-3"},Vs=["href"],Zs={class:"py-2 text-black-500 flex items-start gap-4"},Ds={class:"capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"},Ps={class:"text-xl font-medium py-3"},Ts=["href"],Js={class:"py-2 text-black-500 flex items-start gap-4"};function Ks(t,o,h,f,s,g){return s.loading?(a(),l("div",ls,[e("div",os,[is,e("ul",null,[(a(),l(r,null,d(3,i=>e("div",ns,ds)),64)),e("li",hs,[(a(),l(r,null,d(4,i=>e("div",ps)),64))])])]),e("div",us,[gs,e("ul",xs,[(a(),l(r,null,d(6,i=>e("li",_s)),64))])]),e("div",bs,[fs,e("ul",vs,[(a(),l(r,null,d(6,i=>e("li",ms)),64))])]),e("div",ws,[ys,e("ul",ks,[(a(),l(r,null,d(6,i=>e("li",$s)),64))])])])):(a(),l("div",Cs,[Ss,e("div",Ls,[e("p",js,n(t.$t("usefulLinks")),1),e("a",zs,[e("li",Is,n(t.$t("Home")),1)]),e("a",Ms,[e("li",As,n(t.$t("contactUs")),1)]),e("a",Bs,[e("li",Ns,n(t.$t("wishlist")),1)]),e("a",Us,[e("li",Es,n(t.$t("myCart")),1)]),e("a",Fs,[e("li",Hs,n(t.$t("myOrders")),1)])]),e("div",Os,[e("p",Rs,n(t.$t("categories")),1),s.categories.length>0?(a(!0),l(r,{key:0},d(s.categories.slice(0,6),i=>(a(),l("a",{href:"/products/category/"+i.slug},[e("li",Zs,n(i.name),1)],8,Vs))),256)):c("",!0)]),e("div",Ds,[e("p",Ps,n(t.$t("brands")),1),(a(!0),l(r,null,d(s.brands.slice(0,6),i=>(a(),l("a",{href:"/product/brand/"+i.name},[e("li",Js,n(i.name),1)],8,Ts))),256))])]))}const ea=b(as,[["render",Ks]]);export{ea as F,Xs as H,pt as N,S as c};
