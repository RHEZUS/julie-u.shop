import{C as R}from"./index-3b693917.js";import{B as h}from"./index-cececd04.js";import{T as x}from"./index-3fac927e.js";import{u as y,a as s}from"./vee-validate.esm-7f6c314f.js";import{c as w,a as m,d as F,b as v}from"./object-f809b6cc.js";import{_ as V,r as i,o as f,c as _,b as l,a as b,i as S,w as E}from"./index-9a89a9e7.js";import{T as P}from"./index-298616b6.js";import"./index-a496c592.js";import"./vue-cleave.min-f3d29dfd.js";const L={components:{Textinput:x,Button:h},setup(){const u=w({email:m().required().email(),username:m().required()}),{handleSubmit:r}=y({validationSchema:u}),{value:d,errorMessage:e}=s("email"),{value:p,errorMessage:c}=s("username"),a=r(()=>{});return{email:d,emailError:e,username:p,usernameError:c,onSubmit:a}}},O={class:"text-right"};function z(u,r,d,e,p,c){const a=i("Textinput"),t=i("Button");return f(),_("form",{onSubmit:r[2]||(r[2]=S((...o)=>e.onSubmit&&e.onSubmit(...o),["prevent"])),class:"space-y-4"},[l(a,{label:"Username",type:"text",placeholder:"Type your User Name",name:"userName",modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=o=>e.username=o),error:e.usernameError},null,8,["modelValue","error"]),l(a,{label:"Email",type:"email",placeholder:"Type your email",name:"emil",modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=o=>e.email=o),error:e.emailError},null,8,["modelValue","error"]),b("div",O,[l(t,{text:"Submit",btnClass:"btn-dark"})])],32)}const A=V(L,[["render",z]]),W={components:{Textinput:x,Button:h},setup(){const u=w({email:m().required().email(),username:m().required()}),{handleSubmit:r}=y({validationSchema:u}),{value:d,errorMessage:e}=s("email"),{value:p,errorMessage:c}=s("username"),a=r(()=>{});return{email:d,emailError:e,username:p,usernameError:c,onSubmit:a}}},Y={class:"text-right"};function Z(u,r,d,e,p,c){const a=i("Textinput"),t=i("Button");return f(),_("form",{onSubmit:r[2]||(r[2]=S((...o)=>e.onSubmit&&e.onSubmit(...o),["prevent"])),class:"space-y-4"},[l(a,{label:"Username",type:"text",placeholder:"Type your User Name",name:"userName2",modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=o=>e.username=o),error:e.usernameError,msgTooltip:""},null,8,["modelValue","error"]),l(a,{label:"Email",type:"email",placeholder:"Type your email",name:"emil2",modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=o=>e.email=o),error:e.emailError,msgTooltip:""},null,8,["modelValue","error"]),b("div",Y,[l(t,{text:"Submit",btnClass:"btn-dark"})])],32)}const j=V(W,[["render",Z]]),D={components:{Textinput:x,Button:h},setup(){const u=w({email:m().required().email(),username:m().required(),password:m().required().min(8),confirmpass:m().required().oneOf([F("password")])}),{handleSubmit:r}=y({validationSchema:u}),{value:d,errorMessage:e}=s("email"),{value:p,errorMessage:c}=s("username"),{value:a,errorMessage:t}=s("password"),{value:o,errorMessage:n}=s("confirmpass"),g=r(()=>{});return{email:d,password:a,passwordError:t,emailError:e,username:p,usernameError:c,confirmpass:o,confirmpassError:n,onSubmit:g}}};function G(u,r,d,e,p,c){const a=i("Textinput"),t=i("Button");return f(),_("form",{onSubmit:r[4]||(r[4]=S((...o)=>e.onSubmit&&e.onSubmit(...o),["prevent"])),class:"lg:grid-cols-2 grid gap-5 grid-cols-1"},[l(a,{label:"Username",type:"text",placeholder:"Type your User Name",name:"multi_userName",modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=o=>e.username=o),error:e.usernameError},null,8,["modelValue","error"]),l(a,{label:"Email",type:"email",placeholder:"Type your email",name:"multi_emil",modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=o=>e.email=o),error:e.emailError},null,8,["modelValue","error"]),l(a,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"multi_password",modelValue:e.password,"onUpdate:modelValue":r[2]||(r[2]=o=>e.password=o),error:e.passwordError,hasicon:""},null,8,["modelValue","error"]),l(a,{label:"Confirm Password",type:"password",placeholder:"Password",name:"multi_password",modelValue:e.confirmpass,"onUpdate:modelValue":r[3]||(r[3]=o=>e.confirmpass=o),error:e.confirmpassError,hasicon:""},null,8,["modelValue","error"]),b("div",null,[l(t,{text:"Submit",btnClass:"btn-dark"})])],32)}const H=V(D,[["render",G]]),I={components:{Textinput:x,Button:h,Textarea:P},setup(){const u=w({username:m().required(),number:v().required().positive(),betweenNumber:v().required("The Number between field is required").positive().min(1).max(10),alphabetic:m().required().matches(/^[a-zA-Z]+$/,"Must only consist of alphabetic characters"),length:m().required("The Min Character field is required").min(3),password:m().required().min(8),url:m().required("The URL field is required").url(),message:m().required("The Message field is required")}),{handleSubmit:r}=y({validationSchema:u}),{value:d,errorMessage:e}=s("username"),{value:p,errorMessage:c}=s("number"),{value:a,errorMessage:t}=s("betweenNumber"),{value:o,errorMessage:n}=s("alphabetic"),{value:g,errorMessage:T}=s("length"),{value:M,errorMessage:U}=s("password"),{value:q,errorMessage:N}=s("url"),{value:C,errorMessage:B}=s("message"),k=r(()=>{});return{message:C,messageError:B,url:q,urlError:N,password:M,passwordError:U,length:g,lengthError:T,number:p,alphabetic:o,alphabeticError:n,betweenNumber:a,betweenNumberError:t,numberError:c,username:d,usernameError:e,onSubmit:k}}},J={class:"lg:col-span-2"};function K(u,r,d,e,p,c){const a=i("Textinput"),t=i("Textarea"),o=i("Button");return f(),_("form",{onSubmit:r[8]||(r[8]=S((...n)=>e.onSubmit&&e.onSubmit(...n),["prevent"])),class:"lg:grid-cols-2 grid gap-5 grid-cols-1"},[l(a,{label:"Required",type:"text",placeholder:"Type your User Name",name:"re_userName",modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=n=>e.username=n),error:e.usernameError},null,8,["modelValue","error"]),l(a,{label:"Must only consist of numbers",type:"text",placeholder:"Enter Number Only",name:"re_number",modelValue:e.number,"onUpdate:modelValue":r[1]||(r[1]=n=>e.number=n),error:e.numberError},null,8,["modelValue","error"]),l(a,{label:"Range Value",type:"text",placeholder:"Enter Number between 1 & 10",name:"re_number2",modelValue:e.betweenNumber,"onUpdate:modelValue":r[2]||(r[2]=n=>e.betweenNumber=n),error:e.betweenNumberError},null,8,["modelValue","error"]),l(a,{label:"alphabetic characters",type:"text",placeholder:"Enter Character Only",name:"re_special",modelValue:e.alphabetic,"onUpdate:modelValue":r[3]||(r[3]=n=>e.alphabetic=n),error:e.alphabeticError},null,8,["modelValue","error"]),l(a,{label:"Length should not be less than the specified length : 3",type:"text",placeholder:"Enter minimum 3 Characters",name:"re_length",modelValue:e.length,"onUpdate:modelValue":r[4]||(r[4]=n=>e.length=n),error:e.lengthError},null,8,["modelValue","error"]),l(a,{label:"Password",type:"password",placeholder:"8+ characters, 1 capitat letter ",name:"re_password",modelValue:e.password,"onUpdate:modelValue":r[5]||(r[5]=n=>e.password=n),error:e.passwordError},null,8,["modelValue","error"]),l(a,{label:"Must be a valid url",type:"url",placeholder:"Enter Valid URL",name:"re_url",modelValue:e.url,"onUpdate:modelValue":r[6]||(r[6]=n=>e.url=n),error:e.urlError},null,8,["modelValue","error"]),l(t,{label:"Message",placeholder:"Writte Your Message",name:"re_msg",modelValue:e.message,"onUpdate:modelValue":r[7]||(r[7]=n=>e.message=n),error:e.messageError},null,8,["modelValue","error"]),b("div",J,[l(o,{text:"Submit",btnClass:"btn-dark"})])],32)}const Q=V(I,[["render",K]]),X={components:{Card:R,Simple:A,SimpleTolltip:j,Multipule:H,Types:Q}},$={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},ee={class:"xl:col-span-2"},re={class:"xl:col-span-2"};function oe(u,r,d,e,p,c){const a=i("Simple"),t=i("Card"),o=i("SimpleTolltip"),n=i("Multipule"),g=i("Types");return f(),_("div",$,[l(t,{title:"Simple Form Validation"},{default:E(()=>[l(a)]),_:1}),l(t,{title:"Simple Form Validation with Tootltips"},{default:E(()=>[l(o)]),_:1}),b("div",ee,[l(t,{title:"Validating Multiple Rules"},{default:E(()=>[l(n)]),_:1})]),b("div",re,[l(t,{title:"Validation types"},{default:E(()=>[l(g)]),_:1})])])}const pe=V(X,[["render",oe]]);export{pe as default};
