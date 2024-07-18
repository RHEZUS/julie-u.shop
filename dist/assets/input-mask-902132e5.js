import{C as s}from"./index-7b8fc2af.js";import{I as p}from"./index-fb6b8bae.js";import{T as u}from"./index-eeb0c03b.js";import{_ as d,a,g as r,w as f,r as t,o as b,d as V}from"./index-9b4a819b.js";import"./index-9a8c00d9.js";import"./vue-cleave.min-7d0aa8cb.js";const c={components:{Card:s,Textinput:u,InputGroup:p},data(){return{form:{cardNumber:null,phone:null,date:null,time:null,number:null,block:null,delimiters:null,customDelimiter:null,prefix:null},options:{creditCard:{creditCard:!0,delimiter:"-"},date:{date:!0,delimiter:"-",datePattern:["Y","m","d"]},time:{time:!0,timePattern:["h","m","s"]},number:{numeral:!0,numeralThousandsGroupStyle:"thousand"},block:{blocks:[4,3,3],uppercase:!0},delimiter:{delimiter:"·",blocks:[3,3,3],uppercase:!0},customDelimiter:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0},prefix:{prefix:"+88",blocks:[3,3,3,4],uppercase:!0}}}}},k={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"};function x(M,o,D,C,e,N){const m=t("Textinput"),i=t("InputGroup"),n=t("Card");return b(),a("div",null,[r(n,{title:"Input Mask"},{default:f(()=>[V("div",k,[r(m,{label:"Credit Card",modelValue:e.form.cardNumber,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.cardNumber=l),options:e.options.creditCard,placeholder:"0000 0000 0000 0000",isMask:""},null,8,["modelValue","options"]),r(i,{label:"Phone Number",prepend:"MY (+6)",placeholder:"Phone Number",name:"phoneNumber",modelValue:e.form.phone,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.phone=l),options:e.options.phone,isMask:""},null,8,["modelValue","options"]),r(m,{label:"Date",name:"date",modelValue:e.form.date,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.date=l),options:e.options.date,placeholder:"YYYY-MM-DD",isMask:""},null,8,["modelValue","options"]),r(m,{label:"Time",name:"time",modelValue:e.form.time,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.time=l),options:e.options.time,placeholder:"HH:MM:SS",isMask:""},null,8,["modelValue","options"]),r(m,{label:"Numeral Formatting",name:"nu",modelValue:e.form.number,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.number=l),options:e.options.number,placeholder:"10,000",isMask:""},null,8,["modelValue","options"]),r(m,{label:"Blocks",name:"block",modelValue:e.form.block,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.block=l),options:e.options.block,placeholder:"Block[1,4,7]",isMask:""},null,8,["modelValue","options"]),r(m,{label:"Delimiters",name:"delimiters",modelValue:e.form.delimiter,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.delimiter=l),options:e.options.delimiter,placeholder:"Delimiter: '.'",isMask:""},null,8,["modelValue","options"]),r(m,{label:"Custom Delimiters",name:"customDelimiter",modelValue:e.form.customDelimiter,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.customDelimiter=l),options:e.options.customDelimiter,placeholder:"Delimiter: ['.', '.', '-']",isMask:""},null,8,["modelValue","options"]),r(m,{label:"prefix",name:"prefix",modelValue:e.form.prefix,"onUpdate:modelValue":o[8]||(o[8]=l=>e.form.prefix=l),options:e.options.prefix,placeholder:"+88",isMask:""},null,8,["modelValue","options"])])]),_:1})])}const h=d(c,[["render",x]]);export{h as default};
