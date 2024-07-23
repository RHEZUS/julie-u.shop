import{P as m,H as h,F as _}from"./index-dab3cfdb.js";import{_ as f,u as g,f as x,a as e,g as c,d as o,F as w,b as y,r as a,o as r,k as H}from"./index-47c70d24.js";import"./index-61dc0fab.js";import"./transition-446dcf16.js";import"./focus-management-11ee4cc9.js";import"./keyboard-18b04f11.js";import"./use-outside-click-1f63f6e1.js";import"./hidden-6a76d261.js";import"./micro-task-89dcd6af.js";import"./open-closed-dd2cd86f.js";import"./index-c825509e.js";const P={name:"Wishlist",data(){return{products:[],productsW:[],toast:g()}},components:{ProductCart:m,HomeHeader:h,Footer:_},methods:{getProducts(){try{let t=JSON.parse(localStorage.getItem("wishlist"));if(!t){t=[];return}for(let s=t.length-1;s>=0;s--)typeof t[s]=="string"||typeof t[s]=="number"?t[s]=parseInt(t[s]):typeof t[s]=="object"&&t.splice(s,1);console.log(t),t.length>0?x.post("api/wishlist/products",{productIds:t}).then(s=>{this.products=s.data.products}).catch(s=>{}):this.products=[]}catch(t){console.log(t)}},loadProducts(){const t=JSON.parse(localStorage.getItem("wishlist"));this.productsW=products.filter(s=>t.includes(s.id))}},mounted(){this.getProducts()}},b={class:"bg-white text-black-500 h-max"},k={class:"px-2 md:px-10 min-h-80 py-10 grid grid-cols-12 gap-6"},v=o("div",{class:"col-span-full"},[o("p",{class:"text-2xl font-bold text-center"},"My Wishlist")],-1),F={class:"col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border"},N={key:1,class:"col-span-full self-end"},C=o("p",{class:"text-lg font-medium text-slate-500 text-center"},[H("No products in wishlist. "),o("a",{href:"/",class:"underline"},"Go shopping")],-1),I=[C];function S(t,s,W,B,i,n){const d=a("HomeHeader"),l=a("ProductCart"),p=a("Footer");return r(),e("div",b,[c(d),o("div",k,[v,i.products.length>0?(r(!0),e(w,{key:0},y(i.products,u=>(r(),e("div",F,[c(l,{product:u,"fetch-data":n.loadProducts},null,8,["product","fetch-data"])]))),256)):(r(),e("div",N,I))]),c(p)])}const z=f(P,[["render",S]]);export{z as default};
