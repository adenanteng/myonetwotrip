import{d as l,o as m,c as n,w as c,a as p,b as t}from"./app.14237257.js";import"./DarkmodeToggle.8cd66db2.js";import{_ as u}from"./TextInput.163632f3.js";import{_ as d}from"./AppLayout.7318a844.js";import{_}from"./Table.e8689bdb.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={id:"search"},v={__name:"Index",props:{trip:Object|String},setup(g){const e=l(""),r=["Nama","Keterangan","Kategori","Kota"],o=["name","desc","category","city"];return(s,a)=>(m(),n(d,{title:"Paket Wisata",name:"Paket Wisata",desc:"lorem ipsum",action:"Tambah Paket",href:"trip/create"},{default:c(()=>[p("form",f,[t(u,{name:"query",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),t(_,{title:r,data:s.$page.props.trip,columns:o,"filter-key":e.value,routes:"trip",slug:!0,view:!0,edit:!0},null,8,["data","filter-key"])]),_:1}))}};export{v as default};