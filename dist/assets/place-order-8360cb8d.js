import{M as b,P as I}from"./index-fbba176e.js";import{H as V,F as C,c as S}from"./index-53c25878.js";import{S as w,C as O}from"./white-32bd1cde.js";import{_ as q,x as F,f as d,a as p,g as a,d as t,w as g,t as m,j as k,e as N,r as c,o as u,p as T,q as A,l as j}from"./index-88b678ca.js";import{B}from"./index-ec894d07.js";import{T as P}from"./white-eeb021e1.js";import{I as U}from"./index-cb27a196.js";import"./transition-cc45222d.js";import"./focus-management-5a2adc5d.js";import"./keyboard-3a59ea43.js";import"./use-outside-click-4d5a1c68.js";import"./hidden-d37d12f8.js";import"./micro-task-89dcd6af.js";import"./open-closed-6bc6740d.js";import"./swiper.min-d0b8aee9.js";import"./navigation.min-a0e37133.js";import"./effect-fade.min-2630f166.js";import"./effect-virtual-transition-end-65e3f5a7.js";import"./logo-j-f2980ccb.js";import"./auth-b77d730a.js";import"./logout-265189ee.js";import"./utils-54aeb6c8.js";import"./vue-cleave.min-5b332cbf.js";const H={data(){return{apiUrl:F,cartItems:[],products:[],loading:!1,total:0,delivery:2500,cart:JSON.parse(localStorage.getItem("cart")),detailAddressSaved:!1,form:{ville:"",quartier:""},locationOptions:[],locations:[]}},components:{Modal:b,Button:B,Header:V,Footer:C,ProductCart:I,Icon:U,TextInput:P,Select:w,Card:O},methods:{async getCartItems(){let o=JSON.parse(localStorage.getItem("cart"));if(!o){o=[];return}for(let e=o.length-1;e>=0;e--)typeof o[e]!="object"&&o.splice(e,1);console.log(o),o.length>0&&await d.post("api/cart/items",{productVariantIds:o}).then(e=>{let l=e.data.products;for(let n=0;n<l.length;n++)l[n].quantity=o.find(s=>s.productVariantId==l[n].id).quantity,this.total+=l[n].price*l[n].quantity;this.cartItems=l,console.log(this.cartItems)}).catch(e=>{console.log(e)})},getLocations(){d.get("api/delivery-locations/active").then(o=>{this.locationOptions=o.data.locations.map(e=>({value:e.id,label:e.name})),this.locations=o.data.locations,console.log(this.locationOptions)}).catch(o=>{console.log(o)})},async placeOrder(){if(!S()){this.$router.push("/login");return}if(!this.form.ville||!this.form.quartier){this.toast.error("Please fill in the address fields",{timeout:2e3});return}let o=JSON.parse(localStorage.getItem("cart")),e=[];for(let l=0;l<o.length;l++)e.push(o[l].productVariantId);await d.post("api/orders",{productVariantIds:e,ville:this.form.ville,quartier:this.form.quartier}).then(l=>{this.toast.success("Order placed successfully",{timeout:2e3}),localStorage.removeItem("cart"),this.$router.push("/orders")}).catch(l=>{this.toast.error("Failed to place order",{timeout:2e3})})}},async mounted(){this.getCartItems(),this.getLocations()}},i=o=>(T("data-v-d1266cf1"),o=o(),A(),o),J={key:0,class:"bg-white"},D={key:0,class:"px-2 md:px-10 min-h-80 py-10 grid grid-cols-12 gap-6"},L=i(()=>t("div",{class:"col-span-full"},[t("h1",{class:"text-2xl font-bold text-center"},"Shopping Cart")],-1)),M={class:"col-span-full md:col-span-8"},Q={class:"pb-6 md:space-y-0 space-y-3 items-center"},z=i(()=>t("h5",{class:"text-start mb-3"},"Shopping Address",-1)),E={class:"grid grid-cols-12 gap-6"},G={class:"col-span-full sm:col-span-6"},K={class:"col-span-full sm:col-span-6"},R={class:"h-full col-span-full md:col-span-4 gap-2 rounded-lg flex bg-white"},W={class:"min-w-full flex flex-col gap-3 ml-auto border p-2 font-medium"},X=i(()=>t("h3",{class:"text-lg"}," Order Summary",-1)),Y={class:"border-b pb-2"},Z={class:"flex items-center justify-between py-1"},$=i(()=>t("div",{class:"text-sm text-start"},"Product Total",-1)),tt={class:"text-sm text-end"},et={class:"flex items-center justify-between py-1"},ot=i(()=>t("div",{class:"text-sm text-start"},"Delivery",-1)),st={class:"text-sm text-end"},lt={class:"flex items-center justify-between py-1"},it=i(()=>t("div",{class:"text-sm text-start"},"Total",-1)),rt={class:"text-sm text-end"},at={class:"col-span-full"},nt={class:"col-span-full visible"},ct={class:"pb-6 md:space-y-0 space-y-3 items-center"},dt=i(()=>t("h5",{class:"text-start mb-3"},"Shopping Address",-1)),pt={class:"grid grid-cols-12 gap-6"},mt={class:"col-span-full sm:col-span-6"},ut={class:"col-span-full sm:col-span-6"},ht={key:1,class:"col-span-full px-2 md:px-10 min-h-80 py-10 flex flex-col justify-between"},_t=i(()=>t("div",{class:"w-full pb-5"},[t("h1",{class:"text-2xl font-bold text-center"},"Shopping Cart")],-1)),ft=i(()=>t("p",{class:"text-lg font-medium text-slate-500 text-center"},[j("No products in cart. "),t("a",{href:"/",class:"underline"},"Go shopping")],-1)),gt=[_t,ft];function xt(o,e,l,n,s,x){const v=c("Header"),h=c("Select"),_=c("TextInput"),f=c("Card"),y=c("Footer");return s.loading?N("",!0):(u(),p("div",J,[a(v),s.cartItems&&s.cartItems.length>0?(u(),p("div",D,[L,t("div",M,[a(f,{noborder:""},{default:g(()=>[t("div",Q,[z,t("div",E,[t("div",G,[a(h,{modelValue:s.form.city,"onUpdate:modelValue":e[0]||(e[0]=r=>s.form.city=r),placeholder:"Ville",options:s.locationOptions,onChange:e[1]||(e[1]=()=>{})},null,8,["modelValue","options"])]),t("div",K,[a(_,{modelValue:s.form.quartier,"onUpdate:modelValue":e[2]||(e[2]=r=>s.form.quartier=r),placeholder:"Quartier"},null,8,["modelValue"])])])])]),_:1})]),t("div",R,[t("div",W,[X,t("div",Y,[t("div",Z,[$,t("div",tt,m(s.total+"FCFA"),1)]),t("div",et,[ot,t("div",st,m(s.delivery+"FCFA"),1)])]),t("div",lt,[it,t("div",rt,m(s.total+s.delivery+"FCFA"),1)]),t("div",at,[t("button",{onClick:e[3]||(e[3]=r=>s.cart.length>0?x.placeOrder():""),class:k([{"pointer-events-none":s.cart.length<=0,"pointer-events-auto":s.cart.length>0},"text-center bg-pink-600 w-full mt-10 font-medium text-base text-white py-3 rounded"])}," Proceed to Checkout ",2)])])]),t("div",nt,[a(f,{noborder:""},{default:g(()=>[t("div",ct,[dt,t("div",pt,[t("div",mt,[a(h,{modelValue:s.form.city,"onUpdate:modelValue":e[4]||(e[4]=r=>s.form.city=r),placeholder:"Ville",options:s.locationOptions,onChange:e[5]||(e[5]=()=>{})},null,8,["modelValue","options"])]),t("div",ut,[a(_,{modelValue:s.form.quartier,"onUpdate:modelValue":e[6]||(e[6]=r=>s.form.quartier=r),placeholder:"Quartier"},null,8,["modelValue"])])])])]),_:1})])])):(u(),p("div",ht,gt)),a(y)]))}const Mt=q(H,[["render",xt],["__scopeId","data-v-d1266cf1"]]);export{Mt as default};
