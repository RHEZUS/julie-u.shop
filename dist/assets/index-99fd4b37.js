import{T as F}from"./index-eee4a2bf.js";import{D as q}from"./index-75255af4.js";import{C as N}from"./index-fdbdfb57.js";import{I as O}from"./index-61dc0fab.js";import{I as L}from"./index-d89efa47.js";import{P as R}from"./index-66c4cc92.js";import{B as M}from"./index-c825509e.js";import{M as I}from"./Modal-ae2bdf02.js";import{T as k}from"./index-253d4462.js";import{T as U}from"./index-c8f2f0ea.js";import{S as A}from"./index-594d5b9d.js";import{S as j}from"./index-0a30886c.js";import{c as E,a as _,b as z}from"./object-dc431a83.js";import{_ as D,u as V,z as G,f as g,r as n,o as d,a as p,g as i,w as l,d as a,t as v,e as u,h as Q,i as H,k as J,p as K,m as W}from"./index-47c70d24.js";import{B as X}from"./index-9b1a717e.js";import{b as Y}from"./menu-18297b5b.js";import"./vue-cleave.min-2c4d7fec.js";import"./transition-446dcf16.js";import"./focus-management-11ee4cc9.js";import"./keyboard-18b04f11.js";import"./use-outside-click-1f63f6e1.js";import"./hidden-6a76d261.js";import"./micro-task-89dcd6af.js";import"./open-closed-dd2cd86f.js";import"./use-resolve-button-type-e565a52b.js";const Z={data(){return{form:{name:"",price:"",desc:"",is_active:!0},nameError:"",priceError:"",descError:"",is_activeError:"",toast:V(),router:G(),formOptions:[]}},components:{Modal:I,Button:M,Textinput:k,Select:A,Textarea:U,Switch:j},props:{formMode:{type:String,required:!0},loadData:{type:Function,required:!0}},methods:{loadEditData(o){this.form.id=o.id,this.form.name=o.name,this.form.price=o.price.toString(),this.form.desc=o.desc,this.form.is_active=o.is_active,console.log("Form after load",this.form)},resetForm(){this.form.name="",this.nameError="",this.form.price="",this.priceError="",this.form.desc="",this.descError="",this.form.is_active=!0,this.is_activeError=""},createItem(){this.form.is_active=this.form.is_active?1:0,E({name:_().required("Name is required"),price:_().required("Price is required"),desc:_().nullable("Description is required"),is_active:z().required("Status is required")}).validate({name:this.form.name,price:toString,desc:this.form.desc,is_active:this.form.is_active}).then(()=>{g.post("/api/admin/delivery-location/create",this.form,{withCredentials:!0}).then(e=>{this.$refs.modal1.closeModal(),this.toast.success("Registered successfully",{timeout:2e3}),this.resetForm(),this.loadData(),console.log(e)}).catch(e=>{console.log(e);const r=e.response.data.errors;r.hasOwnProperty("name")&&(this.nameError=r.name[0]),r.hasOwnProperty("price")&&(this.priceError=r.price[0]),r.hasOwnProperty("desc")&&(this.descError=r.desc[0]),r.hasOwnProperty("is_active")&&(this.is_activeError=r.is_active[0]),this.toast.error(e.message,{timeout:6e3})})}).catch(e=>{e.path==="name"?this.nameError=e.errors[0]:e.path==="price"?this.priceError=e.errors[0]:e.path==="desc"?this.descError=e.errors[0]:e.path==="is_active"&&(this.is_activeError=e.errors[0])})},updateItem(){E({name:_().required("Name is required")}).validate({name:this.form.name}).then(()=>{g.put(`/api/admin/delivery-location/update/${this.form.id}`,this.form).then(e=>{this.$refs.modal1.closeModal(),this.toast.success("Registered successfully",{timeout:2e3}),this.resetForm(),this.loadData()}).catch(e=>{const r=e.response.data.errors;r.hasOwnProperty("name")&&(this.nameError=r.name[0]),r.hasOwnProperty("price")&&(this.priceError=r.price[0]),r.hasOwnProperty("desc")&&(this.descError=r.desc[0]),this.toast.error(e.message,{timeout:6e3})})}).catch(e=>{e.path==="name"?this.nameError=e.errors[0]:e.path==="price"?this.priceError=e.errors[0]:e.path==="desc"&&(this.descError=e.errors[0])})}},mounted(){}},$={class:"modal-groups"},ee={key:0,class:"text-danger-500"},te={class:"py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700"};function oe(o,e,r,B,t,m){const h=n("Textinput"),b=n("Textarea"),w=n("Switch"),x=n("Button"),f=n("Modal");return d(),p("div",$,[i(f,{showLabel:!1,title:r.formMode==="create"?"Create New Brand":"Update Brand",label:"Create Brand",labelClass:"btn-outline-primary h-10 flex items-center",ref:"modal1",themeClass:"bg-primary-500"},{default:l(()=>[a("form",{onSubmit:e[4]||(e[4]=Q(c=>r.formMode==="create"?m.createItem():m.updateItem(),["prevent"])),class:"text-base text-slate-600 dark:text-slate-300"},[i(h,{type:"text",placeholder:"Location Name",name:"name",modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=c=>t.form.name=c),error:t.nameError,classInput:"h-[48px] mb-3"},null,8,["modelValue","error"]),i(h,{type:"number",placeholder:"Price",name:"name",modelValue:t.form.price,"onUpdate:modelValue":e[1]||(e[1]=c=>t.form.price=c),error:t.priceError,classInput:"h-[48px] mb-3"},null,8,["modelValue","error"]),i(b,{placeholder:"Description",name:"desc",modelValue:t.form.desc,"onUpdate:modelValue":e[2]||(e[2]=c=>t.form.desc=c),error:t.descError,classInput:"h-[48px] mb-3"},null,8,["modelValue","error"]),i(w,{modelValue:t.form.is_active,"onUpdate:modelValue":e[3]||(e[3]=c=>t.form.is_active=c),label:"Active",activeClass:"bg-primary-500",active:!!t.form.is_active,classInput:"h-[48px] mb-3"},null,8,["modelValue","active"]),t.is_activeError?(d(),p("div",ee,v(t.is_activeError),1)):u("",!0),a("div",te,[i(x,{type:"submit",text:"Save",btnClass:"btn-primary h-10 flex items-center"})])],32)]),_:1},8,["title"])])}const re=D(Z,[["render",oe]]);const se={components:{Pagination:R,InputGroup:L,Dropdown:q,Icon:O,Card:N,MenuItem:Y,Modal:I,Button:M,Textinput:k,FormModal:re,Tooltip:F,Breadcrumb:X},data(){return{locations:[],toast:V(),formMode:"create",form:{name:"",email:"",role:"",phone_number:"",password:""},item:[],current:1,perpage:10,pageRange:1,searchTerm:"",actions:[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],columns:[{label:"Id",field:"id"},{label:"Name",field:"name"},{label:"Price",field:"price"},{label:"Active",field:"is_active"},{label:"Date",field:"created_at"},{label:"Action",field:"action"}]}},methods:{async FetchData(){await g.get("/api/admin/delivery-locations",{withCredentials:!0}).then(o=>{this.locations=o.data.locations}).catch(o=>{this.toast.error("Failed to fetch locations",{timeout:2e3})})},showCreateModal(){this.formMode="create",this.$refs.formModal1.resetForm(),this.$refs.formModal1.$refs.modal1.openModal()},showEditModal(o){this.formMode="edit",this.$refs.formModal1.resetForm(),this.item=o,this.$refs.formModal1.loadEditData(o),this.$refs.formModal1.$refs.modal1.openModal()},formatDate(o){const e=new Date(o),r={day:"2-digit",month:"short",year:"numeric"};return e.toLocaleDateString("en-US",r)},confirmDelete(o){confirm("Are you sure you want to delete this item?")&&this.deleteItem(o)},async deleteItem(o){await g.delete(`/api/admin/delivery-location/delete/${o}`,{withCredentials:!0}).then(e=>{this.FetchData(),this.toast.success("Location has been deleted successfully",{timeout:2e3})}).catch(e=>{this.toast.error("Failed to delete Location",{timeout:2e3})})}},mounted(){this.FetchData()}},C=o=>(K("data-v-25e4af1c"),o=o(),W(),o),ae={class:""},ie={class:"flex justify-between flex-wrap items-start"},ne={class:"modal-groups"},ce={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},le=C(()=>a("h5",null,"Delivery Locations",-1)),me={key:0,class:"flex"},de={class:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},pe=["src","alt"],ue={class:"text-sm text-slate-600 dark:text-slate-300 capitalize"},he={key:1,class:"text-slate-500 dark:text-slate-300"},fe={key:2,class:"block w-full"},_e={key:3},ve={class:"flex space-x-3 rtl:space-x-reverse"};const ge=["onClick"],be=C(()=>a("span",null," Edit",-1)),we=["onClick"],xe=C(()=>a("span",null,"Delete",-1)),ye={class:"py-4 px-3"};function Ce(o,e,r,B,t,m){const h=n("Breadcrumb"),b=n("FormModal"),w=n("Button"),x=n("InputGroup"),f=n("Icon"),c=n("Tooltip"),S=n("Pagination"),P=n("vue-good-table"),T=n("Card");return d(),p("div",ae,[a("div",ie,[i(h),a("div",ne,[i(b,{"load-data":m.FetchData,formMode:t.formMode,user:t.item,ref:"formModal1"},null,8,["load-data","formMode","user"]),i(w,{onClick:e[0]||(e[0]=s=>m.showCreateModal()),type:"submit",text:"Create Location",btnClass:"btn-primary h-10 flex items-center"})])]),a("div",null,[i(T,{noborder:""},{default:l(()=>[a("div",ce,[le,i(x,{modelValue:t.searchTerm,"onUpdate:modelValue":e[1]||(e[1]=s=>t.searchTerm=s),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])]),i(P,{columns:t.columns,styleClass:"vgt-table bordered centered",rows:t.locations,"pagination-options":{enabled:!0,perPage:t.perpage},"search-options":{enabled:!0,externalQuery:t.searchTerm}},{"table-row":l(s=>[s.column.field=="customer"?(d(),p("span",me,[a("span",de,[a("img",{src:s.row.customer.image,alt:s.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,pe)]),a("span",ue,v(s.row.customer.name),1)])):u("",!0),s.column.field=="created_at"?(d(),p("span",he,v(m.formatDate(s.row.created_at)),1)):u("",!0),s.column.field=="is_active"?(d(),p("span",fe,[a("span",{class:H(["inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25",`${s.row.is_active===1?"text-success-500 bg-success-500":""} 
              ${s.row.is_active==="due"?"text-warning-500 bg-warning-500":""}
              ${s.row.is_active===0?"text-danger-500 bg-danger-500":""}
              
                `])},v(s.row.is_active==1?"Activated":"Deactivated"),3)])):u("",!0),s.column.field=="action"?(d(),p("span",_e,[a("div",ve,[u("",!0),i(c,{placement:"top",arrow:"",theme:"dark"},{button:l(()=>[a("div",{onClick:y=>m.showEditModal(s.row),class:"action-btn"},[i(f,{icon:"heroicons:pencil-square"})],8,ge)]),default:l(()=>[be]),_:2},1024),i(c,{placement:"top",arrow:"",theme:"danger-500"},{button:l(()=>[a("div",{onClick:y=>m.confirmDelete(s.row.id),class:"action-btn"},[i(f,{icon:"heroicons:trash"})],8,we)]),default:l(()=>[xe]),_:2},1024)])])):u("",!0)]),"pagination-bottom":l(s=>[a("div",ye,[i(S,{total:50,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:e[2]||(e[2]=y=>t.current=y),pageChanged:s.pageChanged,perPageChanged:s.perPageChanged,enableSearch:"",options:t.options},{default:l(()=>[J(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged","options"])])]),_:1},8,["columns","rows","pagination-options","search-options"])]),_:1})])])}const Xe=D(se,[["render",Ce],["__scopeId","data-v-25e4af1c"]]);export{Xe as default};
