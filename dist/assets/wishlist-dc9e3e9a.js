import{P as y}from"./index-fbba176e.js";import{H as L,F as P,N as S}from"./index-53c25878.js";import{H,S as N,P as v}from"./ProductCardLoader-2f44c75c.js";import{_ as b,u as k,f as C,a as e,g as i,c as F,w as I,e as p,d as r,t as B,F as m,b as u,r as a,o as s,l as V}from"./index-88b678ca.js";import"./index-cb27a196.js";import"./transition-cc45222d.js";import"./focus-management-5a2adc5d.js";import"./keyboard-3a59ea43.js";import"./use-outside-click-4d5a1c68.js";import"./hidden-d37d12f8.js";import"./micro-task-89dcd6af.js";import"./open-closed-6bc6740d.js";import"./index-ec894d07.js";import"./swiper.min-d0b8aee9.js";import"./navigation.min-a0e37133.js";import"./effect-fade.min-2630f166.js";import"./effect-virtual-transition-end-65e3f5a7.js";import"./logo-j-f2980ccb.js";import"./auth-b77d730a.js";import"./logout-265189ee.js";const J={name:"Wishlist",data(){return{products:[],productsW:[],toast:k(),pageLoading:!1}},components:{ProductCart:y,HomeHeader:L,Footer:P,NavLoader:S,HeroLoader:H,Section:N,ProductLoader:v},methods:{async getProducts(){try{let t=JSON.parse(localStorage.getItem("wishlist"));if(!t){t=[];return}for(let o=t.length-1;o>=0;o--)typeof t[o]=="string"||typeof t[o]=="number"?t[o]=parseInt(t[o]):typeof t[o]=="object"&&t.splice(o,1);console.log(t),t.length>0?await C.post("api/wishlist/products",{productIds:t}).then(o=>{this.products=o.data.products,t=t.filter(n=>this.products.map(d=>d.id).includes(n)),localStorage.setItem("wishlist",JSON.stringify(t)),console.log("wishlist",t)}).catch(o=>{}):this.products=[]}catch(t){console.log(t)}finally{this.pageLoading=!1}},loadProducts(){const t=JSON.parse(localStorage.getItem("wishlist"));this.productsW=products.filter(o=>t.includes(o.id))}},mounted(){this.pageLoading=!0,this.getProducts().then(()=>{this.pageLoading=!1})}},O={class:"bg-white text-black-500 h-max"},W={class:"grid grid-cols-12 gap-6 px-2 md:px-10"},T={class:"col-span-6 sm:col-span-6 md:col-span-4 mt-6 lg:col-span-3 border"},j={key:1,class:"px-2 md:px-10 min-h-80 py-10 grid grid-cols-12 gap-6"},D={class:"col-span-full"},E={class:"text-2xl font-bold text-center"},G={class:"col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border"},q={key:1,class:"col-span-full self-end"},z=r("p",{class:"text-lg font-medium text-slate-500 text-center"},[V("No products in wishlist. "),r("a",{href:"/",class:"underline"},"Go shopping")],-1),A=[z];function K(t,o,n,d,c,h){const g=a("HomeHeader"),_=a("ProductLoader"),f=a("Section"),x=a("ProductCart"),w=a("Footer");return s(),e("div",O,[i(g),c.pageLoading==!0?(s(),F(f,{key:0},{default:I(()=>[r("div",W,[(s(),e(m,null,u(8,l=>r("div",T,[i(_)])),64))])]),_:1})):p("",!0),c.pageLoading==!1?(s(),e("div",j,[r("div",D,[r("p",E,B(t.$t("wishlist")),1)]),c.products.length>0?(s(!0),e(m,{key:0},u(c.products,l=>(s(),e("div",G,[i(x,{product:l,"fetch-data":h.loadProducts},null,8,["product","fetch-data"])]))),256)):(s(),e("div",q,A))])):p("",!0),i(w)])}const mt=b(J,[["render",K]]);export{mt as default};
