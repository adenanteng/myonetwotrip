import{d as i,o as l,c as u,w as c,a as d,b as t}from"./app.f22909ad.js";import"./DarkmodeToggle.7419afe0.js";import{_ as p}from"./TextInput.db296e3c.js";import{_}from"./AppLayout.40de9b83.js";import{_ as f}from"./Table.20c98bb5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.c5798340.js";import"./use-tracked-pointer.e339f591.js";const g={id:"search"},v={__name:"Index",props:{users:Object|String},setup(r){const o=r,e=i(""),s=["Nama","Email","Peran","Bergabung"],m=["name","email","role","created"];return(h,a)=>(l(),u(_,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum",action:"Tambah Pengguna",href:"user/create"},{default:c(()=>[d("form",g,[t(p,{name:"query",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=n=>e.value=n),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),t(f,{title:s,data:o.users,columns:m,"filter-key":e.value,routes:"user",edit:!0},null,8,["data","filter-key"])]),_:1}))}};export{v as default};