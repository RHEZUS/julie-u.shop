import{C as h}from"./index-0f0aeca9.js";import{_ as g,o as t,a as r,j as m,e as o,l as C,d as n,g as s,w as i,r as d,F as v,b as k,c as w}from"./index-95066904.js";import"./utils-54aeb6c8.js";const I={props:{src:{type:String,required:!0},alt:{type:String,default:"image title"},imageClass:{type:String,default:""},parentClass:{type:String,default:""}}},y=["src","alt"],S={key:1,class:"bg-neutral-300 w-full h-[200px] flex flex-col items-center justify-center font-medium rounded-md text-xl text-slate-900 capitalize"},B=n("code",{class:"text-sm text-primary-500 lowercase mt-3"},' [src="images/all-img/image-1.png"] ',-1);function N(u,p,e,f,a,_){return t(),r("div",{class:m(["relative",e.parentClass])},[e.src?(t(),r("img",{key:0,src:e.src,alt:e.alt,class:m([e.imageClass,"max-w-full block"])},null,10,y)):o("",!0),e.src?o("",!0):(t(),r("div",S,[C(" Please Set Image "),B]))],2)}const V=g(I,[["render",N]]),$="/assets/image-1-7cb9ebd9.png",j="/assets/image-2-d5c69ef8.png",z="/assets/image-3-e1ab9ff8.png",F="/assets/thumb-1-99dacc0e.png",L="/assets/thumb-2-dfb96599.png",R="/assets/thumb-3-3dc5faa9.png",q="/assets/thumb-4-dff1bf1d.png",E="/assets/thumb-5-0472f40b.png",P="/assets/thumb-6-6fca5971.png",T={components:{Card:h,Image:V},data(){return{image1:$,image2:j,image3:z,images:[{src:F},{src:L},{src:R},{src:q},{src:E},{src:P}]}}},A={class:"space-y-5"},D=n("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Small image with fluid",-1),G=n("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Large image with fluid-grow:",-1),H={class:"grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"};function J(u,p,e,f,a,_){const c=d("Image"),l=d("Card");return t(),r("div",A,[s(l,{title:"Images"},{default:i(()=>[s(c,{src:a.image1,alt:"image one",imageClass:"rounded-md"},null,8,["src"])]),_:1}),s(l,{title:"Responsive images"},{default:i(()=>[D,s(c,{src:a.image2,alt:"Small image with fluid:",imageClass:"rounded-md mb-6"},null,8,["src"]),G,s(c,{src:a.image3,alt:"Small image with fluid-grow:",imageClass:"rounded-md w-full "},null,8,["src"])]),_:1}),s(l,{title:"Responsive images"},{default:i(()=>[n("div",H,[(t(!0),r(v,null,k(a.images,(b,x)=>(t(),w(c,{src:b.src,alt:"thumb-1",imageClass:"rounded-md border-4 border-slate-300",key:x},null,8,["src"]))),128))])]),_:1})])}const Q=g(T,[["render",J]]);export{Q as default};
