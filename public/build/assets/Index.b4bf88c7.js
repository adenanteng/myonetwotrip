import{d as l,o as u,c,w as d,a as p,b as r}from"./app.242527d7.js";import"./DarkmodeToggle.51c509db.js";import{_ as f}from"./TextInput.4a328817.js";import{_}from"./AppLayout.4eb9c758.js";import{_ as g}from"./Table.1caa2853.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.80a255e7.js";import"./use-tracked-pointer.19854335.js";const h={id:"search"},v={__name:"Index",props:{users:Object|String},setup(t){const o=t,e=l(""),s=["Nama","Email","Peran","Bergabung"],m=["name","email","role","created"];return(n,a)=>(u(),c(_,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum",action:"Tambah Pengguna",href:n.route("user.create")},{default:d(()=>[p("form",h,[r(f,{name:"query",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),r(g,{title:s,data:o.users,columns:m,"filter-key":e.value,routes:"user",edit:!0},null,8,["data","filter-key"])]),_:1},8,["href"]))}};export{v as default};
