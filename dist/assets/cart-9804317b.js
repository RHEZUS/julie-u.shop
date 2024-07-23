import{M as g,H as b,F as y,P as v}from"./index-dab3cfdb.js";import{_ as w,f as h,a as r,g as _,d as t,F as S,b as C,t as p,i as I,e as k,r as f,o as d,p as N,m as F,k as O}from"./index-47c70d24.js";import{B as q}from"./index-c825509e.js";import{I as J}from"./index-61dc0fab.js";import{c as V}from"./checkAuth-7fdecac9.js";import"./transition-446dcf16.js";import"./focus-management-11ee4cc9.js";import"./keyboard-18b04f11.js";import"./use-outside-click-1f63f6e1.js";import"./hidden-6a76d261.js";import"./micro-task-89dcd6af.js";import"./open-closed-dd2cd86f.js";const Q={data(){return{apiUrl:h,cartItems:[],products:[],loading:!1,total:0,delivery:2500,cart:JSON.parse(localStorage.getItem("cart"))}},components:{Modal:g,Button:q,Header:b,Footer:y,ProductCart:v,Icon:J},methods:{async getCartItems(){let s=JSON.parse(localStorage.getItem("cart"));if(!s){s=[];return}for(let e=s.length-1;e>=0;e--)typeof s[e]!="object"&&s.splice(e,1);console.log(s),s.length>0&&await h.post("api/cart/items",{productVariantIds:s}).then(e=>{let o=e.data.products;for(let l=0;l<o.length;l++)o[l].quantity=s.find(n=>n.productVariantId==o[l].id).quantity,this.total+=o[l].price*o[l].quantity;this.cartItems=o}).catch(e=>{console.log(e)})},addQuantity(s){let e=JSON.parse(localStorage.getItem("cart")),o=e.findIndex(l=>l.productVariantId==s);e[o].quantity++,localStorage.setItem("cart",JSON.stringify(e)),this.getCartItems()},reduceQuantity(s){let e=JSON.parse(localStorage.getItem("cart")),o=e.findIndex(l=>l.productVariantId==s);e[o].quantity>1&&(e[o].quantity--,localStorage.setItem("cart",JSON.stringify(e)),this.getCartItems())},updateQuantity(s,e){let o=JSON.parse(localStorage.getItem("cart")),l=o.findIndex(n=>n.productVariantId==s);o[l].quantity=e,localStorage.setItem("cart",JSON.stringify(o)),this.getCartItems()},async placeOrder(){V?this.$router.push("/place-order"):this.$router.push("/login")}},async mounted(){this.getCartItems()}},c=s=>(N("data-v-e940801f"),s=s(),F(),s),B={key:0,class:"bg-white w-full overflow-hidden"},P={key:0,class:"px-2 md:px-10 min-h-80 py-10 w-full grid grid-cols-12 gap-6"},T=c(()=>t("div",{class:"col-span-full"},[t("h1",{class:"text-2xl font-bold text-center"},"Shopping Cart")],-1)),j={class:"col-span-full"},H={class:"table-auto w-full"},A=c(()=>t("thead",null,[t("tr",{class:"border-b"},[t("th",{scope:"col",class:"table-th font-medium py-3 text-left"}," Product"),t("th",{scope:"col",class:"table-th font-medium py-3 text-left hidden sm:table-cell"},"Price"),t("th",{scope:"col",class:"table-th font-medium py-3 text-left hidden sm:table-cell"},"Quantity"),t("th",{scope:"col",class:"table-th font-medium py-3 text-right sm:text-left"},"Total")])],-1)),D={class:"table-td py-3 text-left"},L={class:"flex items-center"},M=["src"],z={class:"ml-3"},E={class:"text-sm font-semibold"},G=c(()=>t("button",null,"Delete",-1)),U={class:"col-span-4 max-w-40 h-12 text-xl relative bg-white border border-black rounded visible sm:hidden"},K=["onClick"],R=["value"],W=["onClick"],X={class:"table-td md:px-5 px-3 py-3 text-left hidden sm:table-cell"},Y={class:"text-sm font-semibold"},Z={class:"table-td md:px-5 px-3 py-3 text-left hidden sm:table-cell"},$={class:"col-span-4 max-w-40 h-12 text-xl relative bg-white border border-black rounded"},tt=["onClick"],et=["value"],st=["onClick"],ot={class:"table-td md:px-5 px-3 py-3 text-right sm:text-left"},lt={class:"text-sm font-semibold"},at={class:"h-full col-span-full gap-2 flex"},nt={class:"w-full sm:w-[400px] ml-auto"},ct={class:"col-span-full p-2 flex justify-between text-xl font-semibold"},it=c(()=>t("div",{class:""}," SubTotal ",-1)),rt={class:""},dt=c(()=>t("p",{class:"col-span-full p-2 font-normal"}," Tax included. Shipping is calculated on the payment page ",-1)),pt={class:"col-span-full"},ut={key:1,class:"col-span-full px-2 md:px-10 min-h-80 py-10 flex flex-col justify-between"},ht=c(()=>t("div",{class:"w-full pb-5"},[t("h1",{class:"text-2xl font-bold text-center"},"Shopping Cart")],-1)),_t=c(()=>t("p",{class:"text-lg font-medium text-slate-500 text-center"},[O("No products in cart. "),t("a",{href:"/",class:"underline"},"Go shopping")],-1)),ft=[ht,_t];function mt(s,e,o,l,n,i){const m=f("Header"),x=f("Footer");return n.loading?k("",!0):(d(),r("div",B,[_(m),n.cartItems&&n.cartItems.length>0?(d(),r("div",P,[T,t("div",j,[t("table",H,[A,t("tbody",null,[(d(!0),r(S,null,C(n.cartItems,a=>(d(),r("tr",{key:a.id,class:"border-b"},[t("td",D,[t("div",L,[t("img",{src:JSON.parse(a.product.images_urls)[0],alt:"product",class:"w-20 h-20 object-cover"},null,8,M),t("div",z,[t("p",E,p(a.product.title),1),G])]),t("div",U,[t("button",{onClick:u=>i.reduceQuantity(a.id),type:"button",class:"absolute w-[30px] h-full bg-transparent"},"-",8,K),t("input",{value:a.quantity,class:"w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent",readonly:"",type:"text",name:"",id:"",style:{padding:"0 30px"}},null,8,R),t("button",{onClick:u=>i.addQuantity(a.id),type:"button",class:"absolute w-[30px] h-full bg-transparent right-0"},"+",8,W)])]),t("td",X,[t("p",Y,p(a.price),1)]),t("td",Z,[t("div",$,[t("button",{onClick:u=>i.reduceQuantity(a.id),type:"button",class:"absolute w-[30px] h-full bg-transparent"},"-",8,tt),t("input",{value:a.quantity,class:"w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent",readonly:"",type:"text",name:"",id:"",style:{padding:"0 30px"}},null,8,et),t("button",{onClick:u=>i.addQuantity(a.id),type:"button",class:"absolute w-[30px] h-full bg-transparent right-0"},"+",8,st)])]),t("td",ot,[t("p",lt,p((a.price*a.quantity).toFixed(2)+" FCFA"),1)])]))),128))])])]),t("div",at,[t("div",nt,[t("div",ct,[it,t("div",rt,p(n.total+"FCFA")+"TL",1)]),dt,t("div",pt,[t("button",{onClick:e[0]||(e[0]=a=>n.cart.length>0?i.placeOrder():""),class:I([{"pointer-events-none":n.cart.length<=0,"pointer-events-auto":n.cart.length>0},"text-center w-full mt-10 font-medium text-base text-white bg-[#0e0e0e] py-3 rounded"])}," Proceed to Checkout ",2)])])])])):(d(),r("div",ut,ft)),_(x)]))}const Ot=w(Q,[["render",mt],["__scopeId","data-v-e940801f"]]);export{Ot as default};
