import{u as ae,ac as be,D as g,z as A,r as D,o as d,a as p,g as a,w as c,d as l,i as se,B as o,U as P,t as T,am as ie,_ as re,e as w,an as xe,F as E,b as O,k as N,V as K,j as _,X as _e,T as ne,c as U,L as ke,G as ye,v as we}from"./index-95066904.js";import{B as W}from"./index-338dc922.js";import{C as Q}from"./index-0f0aeca9.js";import{D as Te}from"./index-a236bf4d.js";import{I as L}from"./index-ead31d90.js";import{L as Y}from"./Todo-22b745c8.js";import{F as de}from"./index-6e2ffff3.js";import{M as ue}from"./index-928a5738.js";import{V as R,C as G}from"./VueSelect-f5a04ffa.js";import{T as ce}from"./index-8134bbe5.js";import{T as me}from"./index-16cf0800.js";import{u as pe,a as H}from"./vee-validate.esm-33833da0.js";import{j as ee,k as C,l as fe,o as Se,q as te}from"./data-2cae7fc4.js";import{v as I}from"./v4-4a60fe23.js";import{c as $e,a as Ce,d as le}from"./array-0fe57cd9.js";import{T as ve}from"./index-f397d7c2.js";import{w as Me}from"./window-8455d27e.js";import{B as De}from"./index-34d2c0e2.js";import{b as Ve}from"./menu-c2f259bf.js";import"./utils-54aeb6c8.js";import"./transition-768acd64.js";import"./focus-management-fdb901a8.js";import"./keyboard-850e91b4.js";import"./use-outside-click-d9af4c19.js";import"./hidden-13296901.js";import"./micro-task-89dcd6af.js";import"./open-closed-5ea505c4.js";import"./vue-cleave.min-45643fef.js";import"./use-resolve-button-type-5b7d25b9.js";const oe=ae(),q=be("todo",{state:()=>({addModal:!1,editModal:!1,todoSearch:"",eidtModalId:null,mobileTodoSidebar:!1,isLoading:null,isSkeleton:!0,trashTodo:[],editItem:{},todos:[{id:I(),image:[{image:ee,title:"Mahedi Amin"},{image:C,title:"Sovo Haldar"},{image:C,title:"Rakibul Islam"}],title:"laboriosam mollitia et enim quasi adipisci quia provident illum",isDone:!1,isfav:!1,catagory:[{value:"team",label:"team"}]},{id:I(),image:[{image:C,title:"Rakibul Islam"}],title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",isDone:!0,isfav:!0,catagory:[{value:"low",label:"low"}]},{id:I(),image:[{image:C,title:"Sovo Haldar"},{image:C,title:"Rakibul Islam"}],title:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",isDone:!0,isfav:!0,catagory:[{value:"medium",label:"medium"},{value:"low",label:"low"}]},{id:I(),image:[{image:ee,title:"Mahedi Amin"},{image:C,title:"Sovo Haldar"},{image:C,title:"Rakibul Islam"}],title:"illo expedita consequatur quia in",isDone:!1,isfav:!1,catagory:[{value:"high",label:"high"},{value:"low",label:"low"}]},{id:I(),image:[{image:C,title:"Rakibul Islam"}],title:"illo expedita consequatur quia in",isDone:!1,isfav:!1,catagory:[{value:"update",label:"update"}]}]}),getters:{todosGetter:t=>t.todoSearch===""?t.todos:t.todos.filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),trashTodoGetter:t=>t.todoSearch===""?t.trashTodo:t.trashTodo.filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),isDone:t=>t.todoSearch===""?t.todos.filter(e=>e.isDone===!0):t.todos.filter(e=>e.isDone===!0).filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),isFav:t=>t.todoSearch===""?t.todos.filter(e=>e.isfav===!0):t.todos.filter(e=>e.isfav===!0).filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),high:t=>t.todoSearch===""?t.todos.filter(e=>e.catagory[0].value==="high"):t.todos.filter(e=>e.catagory[0].value==="high").filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),medium:t=>t.todoSearch===""?t.todos.filter(e=>e.catagory[0].value==="medium"):t.todos.filter(e=>e.catagory[0].value==="medium").filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),low:t=>t.todoSearch===""?t.todos.filter(e=>e.catagory[0].value==="low"):t.todos.filter(e=>e.catagory[0].value==="low").filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),team:t=>t.todoSearch===""?t.todos.filter(e=>e.catagory[0].value==="team"):t.todos.filter(e=>e.catagory[0].value==="team").filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,""))),update:t=>t.todoSearch===""?t.todos.filter(e=>e.catagory[0].value==="update"):t.todos.filter(e=>e.catagory[0].value==="update").filter(e=>e.title.toLowerCase().replace(/\s+/g,"").includes(t.todoSearch.toLowerCase().replace(/\s+/g,"")))},actions:{openTodo(){this.addModal=!0},closeTodo(){this.addModal=!1},OPEN_EDIT_MODAL(t){this.editModal=!0,this.eidtModalId=t},closeEditModal(){this.editModal=!1},GET_TODO(t){this.todo=t},addTodo(t){this.isLoading=!0,this.mobileTodoSidebar=!1,setTimeout(()=>{this.todos.unshift(t),this.isLoading=!1,oe.success("Task added",{timeout:2e3})},1500),this.addModal=!1},editTodo(t){this.todos.findIndex(e=>{if(e.id===t.id){this.editItem=e,this.editModal=!this.editModal;let v=this.todos.indexOf(e);this.todos.splice(v,1,{id:t.id,title:t.title,isDone:t.isDone,isfav:t.isfav,image:t.image,catagory:t.catagory})}})},removeTodo(t){var e=this.todos;e.splice(e.indexOf(t),1),this.trashTodo.unshift(t),oe.error("Task Delete",{timeout:2e3})},COMPLETE_TODO(t){t.completed=!t.completed},CLEAR_TODO(){this.todo=""},sortAZ(){this.todos.sort((t,e)=>t.title.localeCompare(e.title))},sortZA(){this.todos.sort((t,e)=>e.title.localeCompare(t.title))},resetSort(){this.todos.sort((t,e)=>t.id.localeCompare(e.id))},openMobileTodoSidebar(){this.mobileTodoSidebar=!0},closeMobileTodoSidebar(){this.mobileTodoSidebar=!1}}}),Le={class:"assagin space-y-4"},Ie={class:"flex items-center space-x-4"},Ae={class:"flex-none"},Ue={class:"h-7 w-7 rounded-full"},Ee=["src"],Oe={class:"flex-1"},qe={class:"flex items-center space-x-4"},ze={class:"flex-none"},Fe={class:"h-7 w-7 rounded-full"},Be=["src"],Ne={class:"flex-1"},Re={class:"ltr:text-right rtl:text-left"},Ge={__name:"Addtodo",setup(t){let e=q();const v=g(()=>e.addModal),r=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],M=$e({newTodoText:Ce().required("Title is required"),selecttag:le().nullable().required("Please select tag"),assign:le().nullable().required("Please select One")}),{handleSubmit:i}=pe({validationSchema:M}),{value:f,errorMessage:$}=H("newTodoText"),{value:k,errorMessage:n}=H("selecttag"),{value:y,errorMessage:s}=H("assign"),b=A(""),z=i(()=>{e.addTodo({id:I(),title:f.value,isDone:!1,image:y.value,catagory:k.value}),f.value="",k.value="",y.value=""}),F=()=>{e.closeTodo()};return(j,x)=>{const B=D("flat-pickr");return d(),p("div",null,[a(o(ue),{activeModal:v.value,onClose:F,title:"Add Task",centered:""},{default:c(()=>[l("form",{onSubmit:x[4]||(x[4]=se((...h)=>o(z)&&o(z)(...h),["prevent"])),class:"space-y-4"},[a(o(me),{label:"title",type:"text",placeholder:"Task Name",name:"title",modelValue:o(f),"onUpdate:modelValue":x[0]||(x[0]=h=>P(f)?f.value=h:null),modelModifiers:{trim:!0},error:o($)},null,8,["modelValue","error"]),l("div",Le,[a(o(R),{label:"Assignee",error:o(s)},{default:c(()=>[a(o(G),{options:o(fe),label:"title",modelValue:o(y),"onUpdate:modelValue":x[1]||(x[1]=h=>P(y)?y.value=h:null),multiple:""},{option:c(({title:h,image:V})=>[l("span",Ie,[l("div",Ae,[l("div",Ue,[l("img",{src:V,alt:"",class:"w-full h-full rounded-full"},null,8,Ee)])]),l("span",Oe,T(h),1)])]),"selected-option":c(({title:h,image:V})=>[l("span",qe,[l("div",ze,[l("div",Fe,[l("img",{src:V,alt:"",class:"w-full h-full rounded-full"},null,8,Be)])]),l("span",Ne,T(h),1)])]),_:1},8,["options","modelValue"])]),_:1},8,["error"]),a(o(de),{label:"Due Date",name:"d1"},{default:c(()=>[a(B,{modelValue:b.value,"onUpdate:modelValue":x[2]||(x[2]=h=>b.value=h),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1}),a(o(R),{label:"Tag",error:o(n)},{default:c(()=>[a(o(G),{options:r,modelValue:o(k),"onUpdate:modelValue":x[3]||(x[3]=h=>P(k)?k.value=h:null),multiple:""},null,8,["modelValue"])]),_:1},8,["error"]),a(o(ce),{label:"Description",placeholder:"Description"})]),l("div",Re,[a(o(W),{text:"Add",btnClass:"btn-dark"})])],32)]),_:1},8,["activeModal"])])}}},je={class:"assagin space-y-4"},Ze={class:"flex items-center space-x-4 rtl:space-x-reverse"},Pe={class:"flex-none"},He={class:"h-7 w-7 rounded-full"},We=["src"],Xe={class:"flex-1"},Je={class:"flex items-center space-x-4 rtl:space-x-reverse"},Ke={class:"flex-none"},Qe={class:"h-7 w-7 rounded-full"},Ye=["src"],et={class:"flex-1"},tt={class:"ltr:text-right rtl:text-left"},lt={__name:"EditTodo",setup(t){let e=q();const v=g(()=>e.editModal),{handleSubmit:r}=pe(),M=ae(),i=A(""),f=g(()=>e.editItem.title.length>0&&e.editItem.image&&e.editItem.catagory),$=r(()=>{f.value&&(e.editTodo({id:e.editItem.id,title:e.editItem.title,isDone:!1,image:e.editItem.image,catagory:e.editItem.catagory}),e.editModal=!1,M.success("Task updated",{timeout:2e3}))});return(k,n)=>{const y=D("flat-pickr");return d(),p("div",null,[a(o(ue),{activeModal:v.value,onClose:n[5]||(n[5]=s=>o(e).closeEditModal()),title:"Edit Task",centered:""},{default:c(()=>[l("form",{onSubmit:n[4]||(n[4]=se((...s)=>o($)&&o($)(...s),["prevent"])),class:"space-y-4"},[a(o(me),{label:"title",type:"text",placeholder:"Task Name",name:"title",modelValue:o(e).editItem.title,"onUpdate:modelValue":n[0]||(n[0]=s=>o(e).editItem.title=s),modelModifiers:{trim:!0}},null,8,["modelValue"]),l("div",je,[a(o(R),{label:"Assignee"},{default:c(()=>[a(o(G),{options:o(fe),label:"title",modelValue:o(e).editItem.image,"onUpdate:modelValue":n[1]||(n[1]=s=>o(e).editItem.image=s),multiple:""},{option:c(({title:s,image:b})=>[l("span",Ze,[l("div",Pe,[l("div",He,[l("img",{src:b,alt:"",class:"w-full h-full rounded-full"},null,8,We)])]),l("span",Xe,T(s),1)])]),"selected-option":c(({title:s,image:b})=>[l("span",Je,[l("div",Ke,[l("div",Qe,[l("img",{src:b,alt:"",class:"w-full h-full rounded-full"},null,8,Ye)])]),l("span",et,T(s),1)])]),_:1},8,["options","modelValue"])]),_:1}),a(o(de),{label:"Due Date",name:"d1"},{default:c(()=>[a(y,{modelValue:i.value,"onUpdate:modelValue":n[2]||(n[2]=s=>i.value=s),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1}),a(o(R),{label:"Tag"},{default:c(()=>[a(o(G),{options:o(Se),modelValue:o(e).editItem.catagory,"onUpdate:modelValue":n[3]||(n[3]=s=>o(e).editItem.catagory=s),multiple:""},null,8,["options","modelValue"])]),_:1}),a(o(ce),{label:"Description",placeholder:"Description"})]),l("div",tt,[a(o(W),{text:"Update",btnClass:"btn-dark",isDisabled:!f.value},null,8,["isDisabled"])])],32)]),_:1},8,["activeModal"])])}}},ot={components:{Badge:De},props:{todos:{type:Array}},computed:{...ie(q,["todoSearch"])}},at={key:0};function st(t,e,v,r,M,i){const f=D("Badge");return d(),p("div",null,[v.todos.length===0&&t.todoSearch!==""||v.todos.length===0?(d(),p("div",at,[a(f,{label:"No Result Found",badgeClass:"bg-danger-500 text-white w-full block text-center mt-10 "})])):w("",!0)])}const it=re(ot,[["render",st]]),rt={mixins:[Me],components:{Icon:L,Tooltip:ve,Noresult:it},computed:{...ie(q,["todoSearch"])},props:{todos:{type:Array,default:()=>[]}},methods:{...xe(q,["removeTodo","editTodo"])}},nt={class:"cursor-pointer text-white flex flex-col"},dt=["onUpdate:modelValue"],ut=["onUpdate:modelValue"],ct={class:"flex"},mt={class:"flex-none space-x-2 text-base text-secondary-500 flex rtl:space-x-reverse"},pt={class:"flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse"},ft=["src","alt"],vt=["onClick"],ht=["onClick"],gt={key:0,class:"mx-6"};function bt(t,e,v,r,M,i){const f=D("Icon"),$=D("Tooltip"),k=D("Noresult");return v.todos?(d(),p("ul",{key:0,class:_(["divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full",t.window.width<1024?"whitespace-nowrap  overflow-x-auto ":""])},[(d(!0),p(E,null,O(v.todos,(n,y)=>(d(),p("li",{class:"flex items-center px-6 space-x-4 py-6 hover:-translate-y-1 hover:shadow-todo transition-all duration-200 rtl:space-x-reverse",key:y},[l("label",nt,[N(l("input",{type:"checkbox","onUpdate:modelValue":s=>n.isDone=s,class:"hidden"},null,8,dt),[[K,n.isDone]]),l("span",{class:_(["h-4 w-4 rounded inline-flex relative transition-all duration-150",n.isDone===!0?"    bg-slate-900 ring-2 ring-offset-2 ring-black-500 dark:ring-slate-900 dark:ring-offset-slate-800 dark:bg-slate-900 ":" bg-slate-100 dark:bg-slate-500 ring-0 ring-offset-0 ring-transparent "])},[a(ne,{name:"check-transition"},{default:c(()=>[N(a(f,{icon:"heroicons-outline:check"},null,512),[[_e,n.isDone===!0]])]),_:2},1024)],2)]),l("label",null,[N(l("input",{type:"checkbox","onUpdate:modelValue":s=>n.isfav=s,class:"hidden"},null,8,ut),[[K,n.isfav]]),n.isfav?w("",!0):(d(),U(f,{key:0,icon:"heroicons:star",class:"text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"})),n.isfav?(d(),U(f,{key:1,icon:"heroicons:star-20-solid",class:"text-xl leading-[1] cursor-pointer text-[#FFCE30]"})):w("",!0)]),l("span",{class:_(["flex-1 text-sm text-slate-600 dark:text-slate-300 truncate",n.isDone?"line-through dark:text-slate-300":""])},T(n.title),3),l("div",ct,[l("span",mt,[l("div",pt,[(d(!0),p(E,null,O(n.image,(s,b)=>(d(),p("div",{class:_(["h-6 w-6 rounded-full ring-1 ring-secondary-500",n.isDone?" opacity-40":" opacity-100"]),key:b},[a($,{placement:"top",arrow:""},{button:c(()=>[l("img",{src:s.image,alt:s.title,class:"w-full h-full rounded-full"},null,8,ft)]),default:c(()=>[l("span",null,T(s.title),1)]),_:2},1024)],2))),128))]),(d(!0),p(E,null,O(n.catagory,(s,b)=>(d(),p("div",{key:b},[l("span",{class:_([`
            
             ${s.value==="team"?"bg-danger-500 text-danger-500":""}
                  ${s.value==="low"?"bg-success-500 text-success-500":""}
                  ${s.value==="medium"?"bg-warning-500 text-warning-500":""}
                  ${s.value==="high"?"bg-primary-500 text-primary-500":""}
                  ${s.value==="update"?"bg-info-500 text-info-500":""}
            `,"bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block"])},T(s.label),3)]))),128)),n.isDone===!1?(d(),p("button",{key:0,type:"button",onClick:s=>t.editTodo(n),class:"text-slate-400"},[a(f,{icon:"heroicons-outline:pencil-alt"})],8,vt)):w("",!0),l("button",{onClick:s=>t.removeTodo(n),type:"button",class:"transition duration-150 hover:text-danger-500 text-slate-400"},[a(f,{icon:"heroicons-outline:trash"})],8,ht)])])]))),128)),v.todos.length===0&&t.todoSearch!==""||v.todos.length===0?(d(),p("li",gt,[a(k,{todos:v.todos},null,8,["todos"])])):w("",!0)],2)):w("",!0)}const xt=re(rt,[["render",bt]]);const _t={class:"flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse"},kt={class:"flex-1 h-full"},yt={class:"px-6"},wt={class:"list mt-6"},Tt=["onClick"],St={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},$t={class:"flex-none font-normal capitalize text-sm"},Ct=l("div",{class:"block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase"}," Tags ",-1),Mt=["onClick"],Dt={class:"transition duration-150"},Vt={class:"flex-1 md:w-[calc(100%-320px)]"},Lt={class:"md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md"},It={class:"flex items-center space-x-3 rtl:space-x-reverse"},At=l("span",null," Sidebar Open",-1),Ut={class:"max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse"},Et={class:"flex-none dark:text-slate-300"},Ot={class:"flex-1"},qt={class:"md:block hidden"},zt={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},Ft=["onClick"],Bt={class:"text-base"},gl={__name:"index",setup(t){const e=A(0),v=()=>{e.value=window.innerWidth};ke(()=>{window.addEventListener("resize",v),v()});let r=q();const M=()=>{r.openTodo()},i=A("all"),f=[{name:"Reset Sort",icon:"heroicons-outline:sort-ascending",doit:()=>{r.resetSort()}},{name:"Sort A-Z ",icon:"heroicons-outline:sort-ascending",doit:()=>{r.sortAZ()}},{name:" Sort Z-A ",icon:"heroicons-outline:sort-descending",doit:()=>{r.sortZA()}}],$=g(()=>r.todoSearch),k=g(()=>r.mobileTodoSidebar),n=()=>{r.openMobileTodoSidebar()},y=()=>{r.closeMobileTodoSidebar()},s=g(()=>r.todosGetter),b=g(()=>r.isDone),z=g(()=>r.isFav),F=g(()=>r.high),j=g(()=>r.low),x=g(()=>r.team),B=g(()=>r.medium),h=g(()=>r.update),V=g(()=>r.trashTodoGetter),S=A(s.value.length),m=A(null),he=g(()=>{if(i.value==="all")return s.value;if(i.value==="done")return b.value;if(i.value==="fav")return z.value;if(i.value==="high")return F.value;if(i.value==="low")return j.value;if(i.value==="medium")return B.value;if(i.value==="team")return x.value;if(i.value==="update")return h.value;if(i.value==="trash")return V.value}),ge=g(()=>r.isLoading);return ye(i,()=>{switch(i.value){case"all":i.value="all",m.value=!0,S.value=s.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"done":i.value="done",m.value=!0,S.value=b.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"trash":i.value="trash",m.value=!0,S.value=V.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"fav":i.value="fav",m.value=!0,S.value=z.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"high":i.value="high",m.value=!0,S.value=F.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"low":i.value="low",m.value=!0,S.value=j.value.length,setTimeout(()=>{m.value=!1},500);break;case"medium":i.value="medium",m.value=!0,S.value=B.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"team":i.value="team",m.value=!0,S.value=x.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;case"update":i.value="update",m.value=!0,S.value=h.value.length,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break;default:i.value="all",m.value=!0,r.mobileTodoSidebar=!1,setTimeout(()=>{m.value=!1},500);break}},{deep:!0}),(Nt,X)=>{const J=D("perfect-scrollbar");return d(),p("div",_t,[l("div",{class:_(["transition-all duration-150",[e.value<1280?" absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]",e.value<1280&&k.value?"left-0 ":"-left-full "]])},[a(o(Q),{bodyClass:" py-6 h-full flex flex-col",class:"h-full"},{default:c(()=>[l("div",kt,[l("div",yt,[a(o(W),{icon:"heroicons-outline:plus",text:"Add Task",btnClass:"btn-dark w-full block  ",onClick:M})]),a(J,{class:"h-full px-6"},{default:c(()=>[l("ul",wt,[(d(!0),p(E,null,O(o(te).slice(0,4),u=>(d(),p("li",{key:u.label},[l("label",{class:_(["flex items-center cursor-pointer px-2 py-3 rounded",i.value===u.value?"bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200":"  text-slate-600 dark:text-slate-300 "]),onClick:Z=>i.value=u.value},[l("div",St,[l("span",{class:_(["text-xl",[i.value===u.value?" text-slate-900 dark:text-slate-100":" text-slate-400 dark:text-slate-400"]])},[a(o(L),{icon:u.icon},null,8,["icon"])],2),l("span",{class:_(["capitalize text-sm",[i.value===u.value?" font-medium":"font-normal"]])},T(u.name),3)]),l("span",$t,T(u.count),1)],10,Tt)]))),128))]),Ct,l("ul",null,[(d(!0),p(E,null,O(o(te).slice(4),u=>(d(),p("li",{key:u.label,onClick:Z=>i.value=u.value,class:_(["flex space-x-2 text-sm capitalize py-2 cursor-pointer items-center rtl:space-x-reverse",i.value===u.value?"font-medium text-slate-800 dark:text-slate-300":"font-normal text-slate-600 dark:text-slate-300"])},[l("span",{class:_(["inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150",`
                  ${u.value==="team"?"bg-danger-500 ring-danger-500":""}
                  ${u.value==="low"?"bg-success-500 ring-success-500":""}
                  ${u.value==="medium"?"bg-warning-500 ring-warning-500":""}
                  ${u.value==="high"?"bg-primary-500 ring-primary-500":""}
                  ${u.value==="update"?"bg-info-500 ring-info-500":""}
                  ${i.value===u.value?"ring-4":"ring-0"}
                  
                  `])},null,2),l("span",Dt,T(u.name),1)],10,Mt))),128))])]),_:1})])]),_:1})],2),a(ne,{name:"overlay-fade"},{default:c(()=>[e.value<1280&&k.value?(d(),p("div",{key:0,class:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md",onClick:y})):w("",!0)]),_:1}),l("div",Vt,[a(o(Q),{bodyClass:"p-0  h-full",class:"h-full"},{default:c(()=>[a(J,{class:"h-full all-todos overflow-x-hidden"},{default:c(()=>[l("div",Lt,[l("div",It,[e.value<1280?(d(),U(o(ve),{key:0,placement:"top",arrow:"",theme:"dark"},{button:c(()=>[l("div",{onClick:n,class:"md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"},[a(o(L),{icon:"heroicons-outline:menu-alt-2"})])]),default:c(()=>[At]),_:1})):w("",!0),l("div",Ut,[l("div",Et,[a(o(L),{icon:"heroicons-outline:search"})]),l("div",Ot,[N(l("input",{type:"text",placeholder:"Search Task","onUpdate:modelValue":X[0]||(X[0]=u=>$.value=u),class:"bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"},null,512),[[we,$.value]])])])]),l("div",qt,[a(o(Te),{classMenuItems:"w-[130px]"},{menus:c(()=>[(d(),p(E,null,O(f,(u,Z)=>a(o(Ve),{key:Z},{default:c(()=>[l("div",{onClick:u.doit,class:_(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `)},[l("span",Bt,[a(o(L),{icon:u.icon},null,8,["icon"])]),l("span",null,T(u.name),1)],8,Ft)]),_:2},1024)),64))]),default:c(()=>[l("span",zt,[a(o(L),{icon:"heroicons-outline:dots-vertical"})])]),_:1})])]),ge.value?(d(),U(o(Y),{key:0,count:1})):w("",!0),m.value?(d(),U(o(Y),{key:1,count:S.value},null,8,["count"])):w("",!0),m.value?w("",!0):(d(),U(o(xt),{key:2,todos:he.value},null,8,["todos"]))]),_:1})]),_:1})]),a(o(Ge)),a(o(lt))])}}};export{gl as default};
