import{_ as k,q as P,s as A,r as x,o,a as r,i as h,e as n,g,w as y,c as w,d as t,x as W,F as p,p as S,m as M,t as c,f as C,h as q,b as _,n as V,j as z,l as R,v as L,k as $,y as v}from"./index-9b4a819b.js";import{I as T}from"./index-9a8c00d9.js";import{S as E,h as J,_ as U,Y as H}from"./transition-2cc5eee0.js";import{B as D}from"./index-0543b3cb.js";const Z=P({components:{Icon:T,TransitionRoot:E,TransitionChild:J,Dialog:U,DialogPanel:H},props:{labelClass:{type:String,default:"btn-primary"},showLabel:{type:Boolean,default:!0},centered:{type:Boolean,default:!1},title:{type:String},label:{type:String,default:""},disableBackdrop:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1},themeClass:{type:String,default:"bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700"},sizeClass:{type:String,default:"max-w-xl"},scrollContent:{type:Boolean,default:!1},activeModal:{type:Boolean,default:!1}},setup(e){const a=A(e.activeModal);return{closeModal:()=>{a.value=!1},openModal:()=>{a.value=!a.value},isOpen:a}}}),j=e=>(S("data-v-219c4e5d"),e=e(),M(),e),Q=j(()=>t("div",{class:"prod-btn-desc bg-black-500 duration-500 absolute bg-black text-white text-sm right-10 min-w-max py-1 px-4 rounded-lg"},c("Quick View"),-1)),Y=j(()=>t("i",{class:"bx bx-show"},null,-1)),K=[Q,Y],G=j(()=>t("div",{class:"fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm"},null,-1)),X={class:"fixed inset-0 overflow-y-auto"},tt=j(()=>t("i",{class:"bx bx-x"},null,-1)),et=[tt];function st(e,a,i,b,s,d){const u=x("TransitionChild"),l=x("DialogPanel"),f=x("Dialog"),F=x("TransitionRoot");return o(),r(p,null,[e.showLabel==!0?(o(),r("button",{key:0,type:"button",onClick:a[0]||(a[0]=(...O)=>e.openModal&&e.openModal(...O)),class:h(["prod-btn relative w-10 h-10 hover:bg-black-500 border-0 hover:text-white rounded-full group flex items-center justify-center text-black-500 bg-white",e.labelClass])},K,2)):n("",!0),g(F,{show:e.isOpen,as:"template"},{default:y(()=>[e.disableBackdrop===!1?(o(),w(f,{key:0,as:"div",onClose:e.closeModal,class:"relative zblack-500-[99999]"},{default:y(()=>[g(u,{enter:e.noFade?"":"duration-300 ease-out","enter-from":e.noFade?"":"opacity-0","enter-to":e.noFade?"":"opacity-100",leave:e.noFade?"":"duration-300 ease-in","leave-from":e.noFade?"":"opacity-100","leave-to":e.noFade?"":"opacity-0"},{default:y(()=>[G]),_:1},8,["enter","enter-from","enter-to","leave","leave-from","leave-to"]),t("div",X,[t("div",{class:h(["flex min-h-full justify-center text-center p-6",e.centered?"items-center":"items-start "])},[g(u,{as:"template",enter:e.noFade?"":"duration-300  ease-out","enter-from":e.noFade?"":"opacity-0 scale-95","enter-to":e.noFade?"":"opacity-100 scale-100",leave:e.noFade?"":"duration-200 ease-in","leave-from":e.noFade?"":"opacity-100 scale-100","leave-to":e.noFade?"":"opacity-0 scale-95"},{default:y(()=>[g(l,{class:h(["w-full transform overflow-hidden rounded-md bg-white text-black-500 text-left align-middle z-50 shadow-xl transition-all","max-w-[960px] min-h-[400px]"])},{default:y(()=>[t("div",{class:h(["px-6 relative",e.scrollContent?"overflow-y-auto min-h-[400] max-h-[400px]":""])},[t("div",{onClick:a[1]||(a[1]=O=>e.closeModal()),class:"absolute top-2 z-20 w-8 h-8 flex items-center justify-center rounded-full right-6 text-2xl hover:bg-black-200",style:{"z-index":"100"}},et),W(e.$slots,"default",{},void 0,!0)],2)]),_:3})]),_:3},8,["enter","enter-from","enter-to","leave","leave-from","leave-to"])],2)])]),_:3},8,["onClose"])):n("",!0)]),_:3},8,["show"])],64)}const at=k(Z,[["render",st],["__scopeId","data-v-219c4e5d"]]);const ot={data(){return{apiClient:C,inWishlist:this.isInWishlist(),selected_color:null,price:0,success:null,loadAddToCart:!1,colorVariants:[],form:{product_variant_id:null,quantity:1}}},components:{Modal:at,Button:D},props:{product:{type:Object,required:!0},fetchData:{type:Function,required:!1},willFetch:{type:Boolean,required:!1}},methods:{loadData(e=0,a=null){if(this.product.options.length==0)this.price=this.product.variants[0].price,this.form.product_variant_id=this.product.variants[0].id;else if(this.product.options.length==1&&this.product.options[0].name=="Color")this.price=this.product.variants[e].price,this.form.product_variant_id=this.product.variants[e].id;else if(this.product.options.length==1&&this.product.options[0].name!="Color")this.price=this.product.variants[e].price,this.form.product_variant_id=this.product.variants[e].id;else if(this.product.options.length>1&&this.product.options[0].name=="Color"){this.selected_color=this.product.options[0].values[e].value;const i=this.getColorsVariants(this.selected_color);this.colorVariants=i,this.price=i[0].price,this.form.product_variant_id=i[0].id}},getVariantPrice(e){return this.product.variants.find(a=>a.id===e).price},selectVariant(e){this.form.product_variant_id=e,this.price=this.getVariantPrice(e)},getColorsVariants(e){const a=this.product.variants.filter(i=>i.option1===e);return this.form.product_variant_id=a[0].id,this.selected_color=e,a},addQuantity(){this.form.quantity++},reduceQuantity(){this.form.quantity>1&&this.form.quantity--},isSelectedVariant(e){return this.form.product_variant_id==e},isSelected(e){return this.form.product_variant_id==e},addToCart(){let e=this.form.product_variant_id,a=this.form.quantity,i=JSON.parse(localStorage.getItem("cart"))||[];const b=i.findIndex(s=>s.productVariantId===e);b!==-1?i[b].quantity+=a:i.push({productVariantId:e,quantity:a}),localStorage.setItem("cart",JSON.stringify(i)),console.log("cart: ",i)},addToWishlist(){let e=this.product.id,a=JSON.parse(localStorage.getItem("wishlist"))||[];a.includes(e)||(a.push(e),localStorage.setItem("wishlist",JSON.stringify(a)),this.inWishlist=!0)},isInWishlist(){return(JSON.parse(localStorage.getItem("wishlist"))||[]).includes(this.product.id)},removeFromWishlist(){let e=JSON.parse(localStorage.getItem("wishlist"))||[];e=e.filter(a=>a!==this.product.id),localStorage.setItem("wishlist",JSON.stringify(e)),this.inWishlist=!1,this.fetchData&&this.fetchData()},handleClickOutside(e){this.$refs.ProductCart&&!this.$refs.ProductCart.contains(e.target)&&(this.showProductModal=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside),this.loadData(0)},oreDestroy(){document.removeEventListener("click",this.handleClickOutside)}},m=e=>(S("data-v-60f56df2"),e=e(),M(),e),it={class:"w-full overflow-hidden",ref:"ProductCart border"},lt={class:"relative group z-0"},rt={class:"flex items-center justify-center"},nt=["href"],dt=["src"],ct={class:"absolute top-4 md:top-14 group-hover:right-1 -right-16 duration-500 flex flex-col gap-4"},ut={class:"prod-btn-desc duration-500 absolute bg-black-500 text-white text-sm right-10 min-w-max py-1 px-2 rounded-lg"},ht=m(()=>t("i",{class:"bx bx-star"},null,-1)),pt={class:"modal-groups"},ft={class:"grid grid-cols-12"},bt={class:"modal-inner modal-image col-span-12 lg:col-span-6 group flex items-center overflow-hidden justify-center"},_t=["src"],xt={class:"modal-inner modal-details bg-white col-span-12 lg:col-span-6 relative bg-transparent scrollCard"},vt={href:"#"},mt={class:"text-2xl font-medium mt-3 text-black"},gt={class:"text-xl font-medium text-black mt-4 flex flex-wrap items-center gap-4"},wt={class:"text-md font-medium text-black-500"},yt={key:0},kt=m(()=>t("span",{class:"bg-red-600 h-3 flex items-center p-1 text-white text-[10px] rounded-lg"},"EARNINGS: 12%",-1)),Ct={class:""},St={class:"text-gray-500 text-md mt-6"},Mt=["href"],$t=m(()=>t("div",{class:"mt-4"},null,-1)),Ft={key:0,class:"mt-4"},jt=m(()=>t("p",null,[t("span",{class:"font-semibold"},c("Color")+":"),$(" black")],-1)),It={class:"flex gap-4 text-black-500 items-center px-2 py-5"},Vt=["for"],zt=["id","onChange"],Bt={key:1,class:"mt-4"},Ot={class:"font-semibold"},qt={class:"flex gap-4 text-black-500 items-center px-2 py-5"},Lt=["for"],Tt=["id","disabled","onChange"],Dt={key:0,class:"flex gap-4 items-center px-2 py-5"},Nt={key:2,class:"mt-4"},Pt=m(()=>t("p",null,[t("span",{class:"font-semibold"},c("Color")+":")],-1)),At={class:"flex gap-4 text-black-500 items-center px-2 py-5"},Wt=["onClick"],Rt={class:"font-semibold"},Et={class:"flex gap-4 items-center py-5 flex-wrap"},Jt=["for"],Ut=["id","value","disabled","onChange"],Ht={key:3,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},Zt={class:"mt-4"},Qt=m(()=>t("p",null,[t("span",{class:"font-semibold"},"Quantity: ")],-1)),Yt={class:"grid grid-cols-12 mt-4 gap-4"},Kt={class:"col-span-4 h-12 text-xl relative bg-white border border-black rounded"},Gt={class:"col-span-8 bg-[#0e0e0e] rounded"},Xt={type:"submit",class:"text-center w-full font-medium text-base text-white py-3"},te={key:0,"aria-hidden":"true",class:"mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ee=m(()=>t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1)),se=m(()=>t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1)),ae=[ee,se],oe=m(()=>t("div",{class:"h-5"},null,-1)),ie={class:"w-full px-2"},le={href:"#"},re={class:"text-lg font-medium mt-3 text-black-500"},ne={class:"text-md font-medium text-black-500"},de={key:0},ce={key:0,class:"flex gap-4 text-black-500 items-center px-2 py-5"};function ue(e,a,i,b,s,d){const u=x("Modal");return o(),r("div",it,[t("div",lt,[t("div",rt,[t("a",{href:"/product/"+i.product.slug,class:""},[t("img",{class:"h-full w-full",src:s.apiClient+"/storage/"+JSON.parse(i.product.images_urls)[0],alt:""},null,8,dt)],8,nt)]),t("div",ct,[t("button",{onClick:a[0]||(a[0]=l=>d.isInWishlist()?d.removeFromWishlist():d.addToWishlist()),type:"button",class:h([{"bg-black-500  text-white":s.inWishlist,"bg-white text-black-500":!s.inWishlist},"prod-btn relative w-10 h-10 hover:bg-black-500 hover:text-white rounded-full flex items-center justify-center"])},[t("div",ut,c(s.inWishlist?"Remove From Wishlist":"Add To Wishlist"),1),ht],2),t("div",pt,[g(u,{themeClass:"bg-white ",labelClass:"btn-outline-dark  bg-white",ref:"modal4",sizeClass:"max-w-5xl"},{default:y(()=>[t("div",ft,[t("div",bt,[t("img",{class:"w-full h-full",src:s.apiClient+`/storage/${JSON.parse(i.product.images_urls)[0]}`,alt:""},null,8,_t)]),t("div",xt,[t("form",{onSubmit:a[6]||(a[6]=q(l=>d.addToCart(),["prevent"])),class:"w-full flex flex-col h-full px-5 py-5"},[t("a",vt,[t("p",mt,c(i.product.title),1)]),t("p",gt,[t("p",wt,[i.product.discount?(o(),r("span",yt,"699.00 Francs CFA ")):n("",!0),t("span",{class:h(["",{"text-[#afaeae] line-through":i.product.discount,"text-black-500":!i.product.discount}])},c((s.price*s.form.quantity).toFixed(2)+" Francs CFA"),3)]),kt]),t("div",Ct,[t("p",St,c(i.product.description),1),t("a",{class:"text-md mt-4 underline font-medium",href:"/product/"+i.product.slug},c("ViewDetails"),8,Mt)]),$t,i.product.options.length==1&&i.product.options[0].name=="Color"?(o(),r("div",Ft,[jt,t("div",It,[(o(!0),r(p,null,_(i.product.variants,l=>(o(),r("div",null,[t("label",{for:"variant-"+l.id},[t("div",{style:V({backgroundColor:l.option1}),class:h([{"ring-black-500":d.isSelectedVariant(l.id),"ring-black-300":!d.isSelectedVariant(l.id)},"w-8 h-8 rounded-full border-2 ring-2 border-white hover:cursor-pointer"])},null,6)],8,Vt),t("input",{type:"radio",class:"hidden",name:"product_variant_id",id:"variant-"+l.id,onChange:f=>{d.selectVariant(l.id)}},null,40,zt)]))),256))])])):n("",!0),i.product.options.length==1&&i.product.options[0].name!="Color"?(o(),r("div",Bt,[t("p",null,[t("span",Ot,c(i.product.options[0].name)+":",1)]),t("div",qt,[(o(!0),r(p,null,_(i.product.variants,l=>(o(),r("div",{class:h([{"text-neutral-400 hover:bg-white hover:text-neutral-400":l.inventory_quantity==0,"hover:text-white":l.inventory_quantity>0,"bg-black-500 text-white":d.isSelectedVariant(l.id),"bg-white":!d.isSelectedVariant(l.id)},"w-fit p-1 h-9 hover:cursor-pointer rounded-md flex items-center justify-center hover:bg-black-500 border"])},[t("label",{for:"variant-"+l.id,class:"w-full h-full flex justify-center items-center"},c(l.option1),9,Lt),t("input",{type:"radio",class:"hidden",name:"product_variant_id",id:"variant-"+l.id,disabled:l.inventory_quantity==0,onChange:f=>{d.selectVariant(l.id)}},null,40,Tt)],2))),256))]),i.product.options.length>1&&i.product.options[1].name=="Color"?(o(),r("div",Dt,[(o(!0),r(p,null,_(i.product.product_color,l=>(o(),r("div",{class:h([["bg-["+l.color+"]"],"w-7 h-7 rounded-full border hover:cursor-pointer"]),onClick:a[1]||(a[1]=f=>d.loadData(e.key))},null,2))),256))])):n("",!0)])):n("",!0),i.product.options.length>1&&i.product.options[0].name=="Color"?(o(),r("div",Nt,[Pt,t("div",At,[(o(!0),r(p,null,_(i.product.options[0].values,(l,f)=>(o(),r("div",{key:f,style:V({backgroundColor:l.value}),class:h([{"ring-black-500":l.value==s.selected_color,"ring-black-300":l.value!=s.selected_color},"w-8 h-8 rounded-full border-2 ring-2 border-white"]),onClick:F=>d.loadData(f)},null,14,Wt))),128))]),t("p",null,[t("span",Rt,c(i.product.options[1].name)+": ",1)]),t("div",Et,[(o(!0),r(p,null,_(s.colorVariants,l=>(o(),r("div",{class:h([{"text-neutral-400 hover:bg-white hover:text-neutral-400":l.inventory_quantity==0,"hover:text-white":l.inventory_quantity>0,"bg-black-500 text-white":d.isSelectedVariant(l.id),"bg-white":!d.isSelectedVariant(l.id)},"w-fit p-1 h-9 hover:cursor-pointer rounded-md flex items-center justify-center hover:bg-black-500 border"])},[t("label",{for:["variant-"+l.id],class:"w-full h-full flex justify-center items-center"},c(l.option2),9,Jt),z(t("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=f=>s.form.product_variant_id=f),class:"hidden",id:"variant-"+l.id,value:l.id,disabled:l.inventory_quantity==0,onChange:f=>{d.selectVariant(l.id)}},null,40,Ut),[[R,s.form.product_variant_id]])],2))),256))])])):n("",!0),s.success?(o(),r("div",Ht,c(s.success),1)):n("",!0),t("div",Zt,[Qt,t("div",Yt,[t("div",Kt,[t("button",{onClick:a[3]||(a[3]=l=>d.reduceQuantity()),type:"button",class:"absolute w-[30px] h-full bg-transparent"},"-"),z(t("input",{"onUpdate:modelValue":a[4]||(a[4]=l=>s.form.quantity=l),class:"w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent",readonly:"",type:"text",name:"",id:"",style:{padding:"0 30px"}},null,512),[[L,s.form.quantity]]),t("button",{onClick:a[5]||(a[5]=l=>d.addQuantity()),type:"button",class:"absolute w-[30px] h-full bg-transparent right-0"},"+")]),t("div",Gt,[t("button",Xt,[s.loadAddToCart?(o(),r("svg",te,ae)):n("",!0),$(" Add to cart ")])])])]),oe],32)])])]),_:1},512)])])]),t("div",ie,[t("a",le,[t("p",re,c(i.product.title),1)]),t("p",ne,[i.product.discount?(o(),r("span",de,"699.00 Francs CFA ")):n("",!0),t("span",{class:h(["",{"text-[#afaeae] line-through":i.product.discount,"text-black-500":!i.product.discount}])},c(i.product.variants[0].price+" Francs CFA"),3)])]),i.product.options.length>0&&i.product.options[0].name=="Color"?(o(),r("div",ce,[(o(!0),r(p,null,_(i.product.options[0].values,l=>(o(),r("div",{style:V({backgroundColor:l.value}),class:"w-8 h-8 rounded-full border"},null,4))),256))])):n("",!0)],512)}const aa=k(ot,[["render",ue],["__scopeId","data-v-60f56df2"]]),he={data(){return{apiUrl:C}},props:{product:{type:Object,required:!0,default:{}}}},pe={class:"col-span-6 sm:col-span-3 md:col-span-3"},fe=["href"],be=["src"],_e={href:"#"},xe={class:"text-lg font-medium mt-3 text-black"},ve={class:"text-md font-medium text-black"},me=t("span",{class:"text-[#afaeae] line-through"},"699.00TL",-1);function ge(e,a,i,b,s,d){return o(),r("div",pe,[t("a",{href:"/product/"+i.product.slug},[t("img",{class:"w-full h-full md:mx-4",src:`${s.apiUrl}/storage/${i.product.image}`,alt:""},null,8,be)],8,fe),t("a",_e,[t("h1",xe,c(i.product.name),1)]),t("p",ve,[t("span",null,c(i.product.product_color[0].product_color_sizes[0].price+" F CFA"),1),$(),me])])}const we=k(he,[["render",ge]]),ye="/assets/logo-j-b79007d1.svg",ke={data(){return{showSearch:!1,keywordSet:!1,keyword:"",products:[],loading:!1}},components:{ProductCart:we},methods:{async search(){this.loading=!0;const e=this.keyword.trim();e?C.get(`/products/search/${e}`).then(a=>{this.products=a.data.products,this.keywordSet=!0,console.log(a.data),console.log("products length: "+this.products.length)}).catch(a=>{console.log(a)}):(this.keyword="",this.keywordSet=!1,this.products=[]),this.loading=!1},handleClickOutside(e){this.$refs.searchModal&&!this.$refs.searchModal.contains(e.target)&&(this.showSearch=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)}},Ce={class:"",ref:"searchModal"},Se={class:"text-3xl hover:cursor-pointer flex items-center"},Me=t("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22",height:"22",viewBox:"0 0 30 30"},[t("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})],-1),$e=[Me],Fe={key:0,class:"fixed left-0 top-0 z-50 w-full md:h-auto bg-white border overflow-y-hidden scrollCard"},je={class:"relative w-full bg-white text-black font-semibold px-5 py-4"},Ie={class:"w-full grid grid-cols-12 items-center"},Ve=t("div",{class:"hidden md:flex col-span-3"},[t("a",{href:"/"},[t("img",{src:ye,alt:"logo",class:"w-9 h-9"})])],-1),ze=["href"],Be={key:0,"aria-hidden":"true",class:"mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Oe=t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),qe=t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Le=[Oe,qe],Te={key:1,class:"mx-auto",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22",height:"22",viewBox:"0 0 30 30"},De=t("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"},null,-1),Ne=[De],Pe={key:1,type:"button",class:"absolute top-0 right-0 w-[40px] h-full"},Ae={key:0,"aria-hidden":"true",class:"mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},We=t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Re=t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Ee=[We,Re],Je={key:1,class:"mx-auto",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22",height:"22",viewBox:"0 0 30 30"},Ue=t("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"},null,-1),He=[Ue],Ze={class:"hidden md:flex col-span-3 items-center justify-end"},Qe=t("i",{class:"bx bx-x"},null,-1),Ye=[Qe],Ke=v('<div class="flex gap-1 mt-3 justify-center"><div class="font-normal capitalize text-[#afaeae]">Popular Search: </div><ul class="flex gap-3 font-normal"><a href=""><li class="underline font-medium text-black">Home</li></a><a href=""><li class="underline font-medium text-black">Bikini</li></a><a href=""><li class="underline font-medium text-black">Contact Us</li></a></ul></div>',1),Ge={class:"grid grid-cols-12 gap-8"},Xe={key:0,class:"col-span-12 capitalize mb-2 text-lg text-center font-medium mt-3 text-[#afaeae]"},ts={class:"text-black"},es={key:0,class:"col-span-12 mt-16 flex justify-center"},ss=["href"];function as(e,a,i,b,s,d){const u=x("ProductCart");return o(),r(p,null,[t("div",{class:h(["fixed w-full h-screen top-[59px] left-0 duration-700",{visible:s.showSearch,hidden:!s.showSearch}]),style:{"background-color":"rgb(0 0 0 / 50%)"}},null,2),t("div",Ce,[t("li",Se,[t("div",{class:"",onClick:a[0]||(a[0]=l=>s.showSearch=!s.showSearch)},$e)]),s.showSearch?(o(),r("div",Fe,[t("div",je,[t("div",Ie,[Ve,t("form",{onKeyup:a[2]||(a[2]=q(l=>d.search(),["prevent"])),class:"col-span-12 md:col-span-6 relative w-full h-10 border border-black rounded"},[z(t("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>s.keyword=l),type:"search",class:"font-normal w-full h-full rounded focus:ring-0 border-none focus:border-none pl-4",placeholder:"Search Product",style:{"padding-right":"45px"},name:"",id:""},null,512),[[L,s.keyword]]),s.keywordSet&&!s.loading?(o(),r("a",{key:0,href:"/products/search/"+s.keyword,class:"absolute top-2 right-0 w-[40px] h-full"},[s.loading?(o(),r("svg",Be,Le)):n("",!0),s.loading?n("",!0):(o(),r("svg",Te,Ne))],8,ze)):(o(),r("button",Pe,[s.loading?(o(),r("svg",Ae,Ee)):n("",!0),s.loading?n("",!0):(o(),r("svg",Je,He))]))],32),t("div",Ze,[t("div",{class:"text-black text-3xl mt-2",onClick:a[3]||(a[3]=l=>s.showSearch=!1)},Ye)])]),Ke,t("div",Ge,[s.keywordSet?(o(),r("h1",Xe,[$(c(s.products.length)+" "+c(e.$t("resultsFor"))+": ",1),t("span",ts,c('"'+s.keyword+'"'),1)])):n("",!0),s.products.length>0?(o(),w(u,{key:1,product:s.products[0]},null,8,["product"])):n("",!0),s.products.length>1?(o(),w(u,{key:2,product:s.products[1]},null,8,["product"])):n("",!0),s.products.length>2?(o(),w(u,{key:3,product:s.products[2]},null,8,["product"])):n("",!0),s.products.length>3?(o(),w(u,{key:4,product:s.products[3]},null,8,["product"])):n("",!0),s.products.length>4?(o(),w(u,{key:5,product:s.products[4]},null,8,["product"])):n("",!0),s.products.length>5?(o(),w(u,{key:6,product:s.products[5]},null,8,["product"])):n("",!0)]),s.keywordSet?(o(),r("div",es,[t("a",{href:"/products/search/"+s.keyword,class:"mx-auto text-center px-3 mt-6 font-medium text-base text-white bg-[#0e0e0e] py-2 rounded mb-3"},"Load More Results: ",8,ss)])):n("",!0)])])):n("",!0)],512)],64)}const os=k(ke,[["render",as]]);const is={data(){return{showSidebar:!1}},components:{},props:{categories:{type:Array,default:()=>[]}},methods:{handleClickOutside(e){this.$refs.RespNav&&!this.$refs.RespNav.contains(e.target)&&(this.showSidebar=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)}},B=e=>(S("data-v-d8d2c18c"),e=e(),M(),e),ls={ref:"RespNav",class:"visible lg:hidden col-span-2"},rs={key:0,class:"pointer-events-none"},ns=B(()=>t("svg",{class:"w-[22px] h-[22px]",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[t("path",{d:"M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"})],-1)),ds=[ns],cs={class:"flex justify-between items-center gap-2"},us=v('<a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md" data-v-d8d2c18c><i class="text-2xl bx bx-user" data-v-d8d2c18c></i></a><a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md" data-v-d8d2c18c><i class="text-2xl bi bi-cart3" data-v-d8d2c18c></i></a><a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md" data-v-d8d2c18c><i class="text-2xl bx bx-heart" data-v-d8d2c18c></i></a>',3),hs={key:0,class:"text-2xl text-black bx bx-x"},ps={class:"grid grid-cols-2 justify-between flex-wrap items-center gap-2 my-3"},fs=B(()=>t("p",{class:"col-span-2 mt-3 text-black-500 font-bold text-center py-[4px] text-[20px]"},"Categories",-1)),bs={href:"#",class:"bg-black-50 col-span-1 py-2 text-start px-2 rounded-md flex items-center justify-between"},_s=B(()=>t("img",{class:"w-8 h-8 rounded-full",src:"https://www.zeeman.com/media/catalog/product/2/0/2010020408999_Front03.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700"},null,-1)),xs=v('<div class="grid grid-cols-5 justify-between flex-wrap items-center gap-2 my-3" data-v-d8d2c18c><p class="col-span-5 mt-3 text-black-500 font-bold text-center py-[4px] text-[20px]" data-v-d8d2c18c>Social Media</p><a href="#" class="col-span-1 text-2xl text-start rounded-md" data-v-d8d2c18c><i class="bx bxl-facebook" data-v-d8d2c18c></i></a><a href="#" class="col-span-1 text-2xl text-start rounded-md" data-v-d8d2c18c><i class="bx bxl-instagram" data-v-d8d2c18c></i></a><a href="#" class="col-span-1 text-2xl text-start rounded-md" data-v-d8d2c18c><i class="bx bxl-twitter" data-v-d8d2c18c></i></a><a href="#" class="col-span-1 text-2xl text-start rounded-md" data-v-d8d2c18c><i class="bx bxl-pinterest-alt" data-v-d8d2c18c></i></a><a href="#" class="col-span-1 text-2xl text-start rounded-md" data-v-d8d2c18c><i class="bx bxl-tiktok" data-v-d8d2c18c></i></a></div>',1);function vs(e,a,i,b,s,d){return o(),r(p,null,[t("div",{class:h(["fixed w-full h-screen top-[0px] left-0 duration-700 hidden",{visible:s.showSidebar,hidden:!s.showSidebar}]),style:{"background-color":"rgb(0 0 0 / 50%)"}},null,2),t("div",ls,[t("div",{onClick:a[0]||(a[0]=u=>s.showSidebar=!0),class:"col-span-2 text-black visible text-3xl hover:cursor-pointer relative flex items-center"},[s.showSidebar?n("",!0):(o(),r("div",rs,ds))]),t("div",{class:h([{"translate-x-0":s.showSidebar,"-translate-x-[600px]":!s.showSidebar},"duration-700 border lg:hidden absolute left-0 top-[0px] p-5 w-full sm:w-[400px] z-50 bg-white text-black"]),ref:"sidebar",style:{height:"calc(100vh - 0px)","box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},[t("div",cs,[us,t("button",{onClick:a[1]||(a[1]=u=>s.showSidebar=!1),class:"w-1/4"},[s.showSidebar?(o(),r("i",hs)):n("",!0)])]),t("div",ps,[fs,(o(!0),r(p,null,_(i.categories.slice(0,8),u=>(o(),r("a",bs,[t("span",null,c(u),1),_s]))),256))]),xs],2)],512)],64)}const ms=k(is,[["render",vs],["__scopeId","data-v-d8d2c18c"]]);const gs={name:"HomeHeader",data(){return{isShow:!1,isAuth:!0,categories:["victoria secret","calvin klein","tommy hilfiger","adidas","nike","puma","reebok","under armour","champion","fila","asics","new balance","skechers","converse","vans","birkenstock","dr martens","clarks","timberland","crocs","teva","sorel","ugg","hunter","salomon","merrell","keen","the north face","patagonia","arcteryx","marmot","columbia","mountain hardwear","black diamond","prana","icebreaker","smartwool","patagonia","arcteryx","marmot","columbia","mountain hardwear","black diamond","prana","icebreaker","smartwool","patagonia","arcteryx","marmot","columbia","mountain hardwear","black diamond","prana","icebreaker","smartwool","patagonia","arcteryx","marmot","columbia","mountain hardwear","black diamond","prana","icebreaker","smartwool","patagonia","arcteryx","marmot","columbia","mountain hardwear","black diamond","prana","icebreaker","smartwool"]}},components:{Button:D,Icon:T,Responsive:ms,Search:os},methods:{showLanguage(){this.isShow=!this.isShow}}},I=e=>(S("data-v-527651b3"),e=e(),M(),e),ws={class:"grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b"},ys=v('<div class="col-span-3 lg:col-span-4 hidden md:block" data-v-527651b3><div class="flex group w-fit relative hover:cursor-pointer justify-center items-center bg-black-50" data-v-527651b3><div class="px-2" data-v-527651b3><i class="bx bx-world" data-v-527651b3></i></div><div class="text-lg px-2" data-v-527651b3>EN</div><div class="bg-white w-max p-4 hidden group-hover:flex font-medium hover:cursor-pointer flex-col gap-3 absolute left-0 top-8 border h-max" style="box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px;" data-v-527651b3><p data-v-527651b3><i class="bx bx-world" data-v-527651b3></i> Choose language </p><div class="flex gap-2" data-v-527651b3><button class="border py-1 px-2" data-v-527651b3> English </button><button class="border py-1 px-2" data-v-527651b3> Francais </button></div></div></div></div>',1),ks={class:"col-span-1 block md:hidden"},Cs=v('<div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center" data-v-527651b3><a href="/" class="uppercase font-bold text-[30px] whitespace-nowrap inline text-white" data-v-527651b3><div class="pointer-events-none" data-v-527651b3><span class="text-black-500 px-2" data-v-527651b3>Julie</span><span class="text-pink-600 px-2 hidden sm:inline" data-v-527651b3>Underwear</span><span class="text-white bg-pink-600 px-2 inline sm:hidden" data-v-527651b3>U</span></div></a></div>',1),Ss={class:"col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6"},Ms={class:"group relative",style:{"z-index":"1"}},$s=I(()=>t("i",{class:"text-2xl bx bx-user"},null,-1)),Fs={key:0,class:"bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max",style:{"box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},js={class:"border-b-2 p-6 flex flex-col gap-4"},Is=I(()=>t("div",{class:"text-lg font-semibold"},"You are not logged in Yet ",-1)),Vs=v('<div class="flex justify-between items-center gap-4 p-6 text-base" data-v-527651b3><div class="" data-v-527651b3><i class="bi bi-cart3" data-v-527651b3></i> <span data-v-527651b3>Track your orders</span></div><div class="" data-v-527651b3><i class="bi bi-heart-fill" data-v-527651b3></i> <span data-v-527651b3>Your Favorites</span></div></div>',1),zs={key:1,class:"bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max",style:{"box-shadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}},Bs=v('<div class="border-b p-4 flex flex-col gap-4" data-v-527651b3><a href="#" class="text-start flex gap-2" data-v-527651b3><i class="text-lg bx bx-user" data-v-527651b3></i> Profile</a><a href="#" class="text-start flex gap-2" data-v-527651b3><i class="text-lg bi bi-cart3" data-v-527651b3></i> Track Orders</a><a href="/wishlist" class="text-start flex gap-2" data-v-527651b3><i class="text-lg bx bx-heart" data-v-527651b3></i> Wishlist</a><a href="#" class="text-start flex gap-2" data-v-527651b3><i class="text-lg bx bx-help-circle" data-v-527651b3></i> Help</a></div><div class="flex justify-between items-center gap-4 p-4 text-base" data-v-527651b3><a href="#" data-v-527651b3>Logout</a></div>',2),Os=[Bs],qs=I(()=>t("a",{href:"/wishlist"},[t("i",{class:"text-2xl bx bx-heart"})],-1)),Ls=I(()=>t("a",{href:"/cart"},[t("i",{class:"text-2xl bi bi-cart3"})],-1)),Ts={class:"hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-scroll"},Ds={class:"text-base font-medium text-nowrap",href:"#"},Ns=v('<div class="bg-black-500 text-black-300" data-v-527651b3><div class="px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm" data-v-527651b3><div class="" data-v-527651b3><i class="text-lg bi bi-cart3" data-v-527651b3></i> Free Shipping </div><div class="" data-v-527651b3><i class="bi bi-repeat" data-v-527651b3></i> 30 Days return policy</div><div class="" data-v-527651b3><i class="bi bi-credit-card" data-v-527651b3></i> Secure payment</div></div></div>',1);function Ps(e,a,i,b,s,d){const u=x("Responsive"),l=x("Search"),f=x("Button");return o(),r("div",null,[t("div",ws,[ys,t("div",ks,[g(u,{categories:s.categories},null,8,["categories"])]),Cs,t("div",Ss,[g(l),t("button",Ms,[$s,s.isAuth?(o(),r("div",zs,Os)):(o(),r("div",Fs,[t("div",js,[Is,g(f,{btnClass:"w-full border py-2 btn-dark"},{default:y(()=>[$(" Login ")]),_:1})]),Vs]))]),qs,Ls])]),t("div",Ts,[(o(!0),r(p,null,_(s.categories.slice(0,12),F=>(o(),r("a",Ds,c(F),1))),256))]),Ns])}const oa=k(gs,[["render",Ps],["__scopeId","data-v-527651b3"]]);const As={data(){return{token:localStorage.getItem("authToken"),categories:[],brands:[]}},methods:{fetchBrands(){C.get("api/brands/top").then(e=>{const a=e.data;this.brands=a.brands}).catch(e=>{console.error("Error fetching brands:",e)})},fetchCategories(){C.get("api/categories/top").then(e=>{const a=e.data;this.categories=a.categories}).catch(e=>{console.error("Error fetching categories:",e)})}},mounted(){this.fetchBrands(),this.fetchCategories()}},N=e=>(S("data-v-1f16436a"),e=e(),M(),e),Ws={class:"page-padding footer-container bg-white border-t py-10 gap-8 text-black-500"},Rs=v('<div class="capitalize col-span-2" data-v-1f16436a><p class="text-xl font-medium py-3" data-v-1f16436a> Julie Underweare</p><p class="py-2" data-v-1f16436a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla rem.</p><ul data-v-1f16436a><li class="py-2 flex items-start gap-4" data-v-1f16436a><i class="text-base bx bx-current-location" data-v-1f16436a></i> Atalar Mahallesi, Kurban Sokak, 34710 Üsküdar, Istanbul, Turkey </li><li class="py-2 flex items-start gap-4" data-v-1f16436a><i class="text-base bx bxs-phone-call" data-v-1f16436a></i> +905526456574 </li><li class="py-2 flex items-start gap-4" data-v-1f16436a><i class="text-base bx bx-envelope" data-v-1f16436a></i> ludivinseunda2@gmail.com </li><li class="py-2 flex items-start gap-4" data-v-1f16436a><a href="#" class="" data-v-1f16436a><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg" data-v-1f16436a><i class="bx bxl-facebook" data-v-1f16436a></i></div></a><a href="#" class="" data-v-1f16436a><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg" data-v-1f16436a><i class="bx bxl-whatsapp" data-v-1f16436a></i></div></a><a href="#" class="" data-v-1f16436a><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg" data-v-1f16436a><i class="bx bxl-tiktok" data-v-1f16436a></i></div></a><a href="#" class="" data-v-1f16436a><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg" data-v-1f16436a><i class="bx bxl-instagram" data-v-1f16436a></i></div></a></li></ul></div><div class="capitalize text-base" data-v-1f16436a><p class="text-xl font-medium py-3" data-v-1f16436a> Useful Links</p><a href="/" data-v-1f16436a><li class="py-2 text-base text-black-500 flex items-start gap-4" data-v-1f16436a> Home </li></a><a href="" data-v-1f16436a><li class="py-2 text-base text-black-500 flex items-start gap-4" data-v-1f16436a> Contact Us </li></a><a href="/wishlist" data-v-1f16436a><li class="py-2 text-black-500 flex items-start gap-4" data-v-1f16436a> Wishlist </li></a><a href="" data-v-1f16436a><li class="py-2 text-base text-black-500 flex items-start gap-4" data-v-1f16436a> My Cart </li></a><a href="/order-again" data-v-1f16436a><li class="py-2 text-base text-black-500 flex items-start gap-4" data-v-1f16436a> Track Orders </li></a></div>',2),Es={class:"capitalize"},Js=N(()=>t("p",{class:"text-xl font-medium py-3"}," Categories",-1)),Us=["href"],Hs={class:"py-2 text-black-500 flex items-start gap-4"},Zs={class:"capitalize text-base"},Qs=N(()=>t("p",{class:"text-xl font-medium py-3"}," Brands",-1)),Ys=["href"],Ks={class:"py-2 text-black-500 flex items-start gap-4"};function Gs(e,a,i,b,s,d){return o(),r("div",Ws,[Rs,t("div",Es,[Js,(o(!0),r(p,null,_(s.categories.slice(0,6),u=>(o(),r("a",{href:"/product/category/"+u.name},[t("li",Hs,c(u.name),1)],8,Us))),256))]),t("div",Zs,[Qs,(o(!0),r(p,null,_(s.brands.slice(0,6),u=>(o(),r("a",{href:"/product/brand/"+u.name},[t("li",Ks,c(u.name),1)],8,Ys))),256))])])}const ia=k(As,[["render",Gs],["__scopeId","data-v-1f16436a"]]);export{ia as F,oa as H,at as M,aa as P};
