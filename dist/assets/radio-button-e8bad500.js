import{C as v}from"./index-7b8fc2af.js";import{R as g}from"./index-803f292f.js";import{_ as C,a as d,d as n,g as o,w as c,r as p,o as r,F as m,b,c as f,t as k}from"./index-9b4a819b.js";const V={components:{Card:v,Radio:g},data(){return{picked1:"A",picked2:"C",color:"primary-500",colors:[{value:"primary-500",label:"primary",activeClass:"ring-primary-500 border-primary-500"},{value:"secondary-500",label:"secondary",activeClass:"ring-secondary-500 border-secondary-500"},{value:"success-500",label:"success",activeClass:"ring-success-500 border-success-500"},{value:"danger-500",label:"danger",activeClass:"ring-danger-500 border-danger-500"},{value:"warning-500",label:"warning",activeClass:"ring-warning-500 border-warning-500"},{value:"info-500",label:"info",activeClass:"ring-info-500 border-info-500"}],option:"Orange",options:[{value:"Orange",label:"Orange"},{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"}]}}},x={class:"grid grid-cols-1 gap-5"},_={class:"flex space-x-rb flex-wrap"},y={class:"flex space-x-rb flex-wrap"},B=n("div",{class:"flex space-x-5 flex-wrap"},null,-1),w={class:"text-slate-900 dark:text-slate-300 mt-3"};function U(R,a,A,O,e,D){const s=p("Radio"),i=p("Card");return r(),d("div",null,[n("div",x,[o(i,{title:"Basic Radio Buttons"},{default:c(()=>[n("div",_,[o(s,{label:"Checked",class:"mb-5",name:"x",value:"A",modelValue:e.picked1,"onUpdate:modelValue":a[0]||(a[0]=l=>e.picked1=l)},null,8,["modelValue"]),o(s,{label:"UnChecked",checked:!0,class:"mb-5",name:"x",value:"B",modelValue:e.picked1,"onUpdate:modelValue":a[1]||(a[1]=l=>e.picked1=l)},null,8,["modelValue"]),o(s,{label:"Checked disabled",disabled:"",class:"mb-5",name:"x2",value:"C",modelValue:e.picked2,"onUpdate:modelValue":a[2]||(a[2]=l=>e.picked2=l)},null,8,["modelValue"]),o(s,{label:"UnChecked disabled",name:"x2",disabled:"",class:"mb-5",value:"D",modelValue:e.picked2,"onUpdate:modelValue":a[3]||(a[3]=l=>e.picked2=l)},null,8,["modelValue"])])]),_:1}),o(i,{title:"Theme Color"},{default:c(()=>[n("div",y,[(r(!0),d(m,null,b(e.colors,(l,t)=>(r(),f(s,{key:t,label:l.label,activeClass:l.activeClass,class:"mb-5",modelValue:e.color,"onUpdate:modelValue":a[4]||(a[4]=u=>e.color=u),value:l.value},null,8,["label","activeClass","modelValue","value"]))),128))])]),_:1}),o(i,{title:"Radio group options array"},{default:c(()=>[B,(r(!0),d(m,null,b(e.options,(l,t)=>(r(),d("div",{key:t},[o(s,{label:l.label,class:"mb-5",name:"jorina",modelValue:e.option,"onUpdate:modelValue":a[5]||(a[5]=u=>e.option=u),value:l.value},null,8,["label","modelValue","value"])]))),128)),n("div",w," Selected: "+k(e.option),1)]),_:1})])])}const h=C(V,[["render",U]]);export{h as default};
