import{u as v,o as y,c as B,w as r,g as m,a as n,b as s,h as o,n as V}from"./app.f22909ad.js";import{_ as $}from"./ActionMessage.3956d0f7.js";import{_ as S}from"./FormSection.c80fc986.js";import{_ as i}from"./InputError.31b8e64c.js";import{_ as c}from"./InputLabel.6bcfed16.js";import{_ as w}from"./PrimaryButton.bce2095c.js";import{_ as k}from"./TextInput.db296e3c.js";import{_ as I}from"./TextAreaInput.5b091db7.js";import{_ as U}from"./SelectInput.e724115a.js";import"./SectionTitle.d38fbe02.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.c5798340.js";import"./use-tracked-pointer.e339f591.js";const x={class:"col-span-6 sm:col-span-4"},h={class:"col-span-6 sm:col-span-5"},q={class:"col-span-6 sm:col-span-5"},E={__name:"UpdateInformationForm",props:{blog:Object|String},setup(_){var u,p,f;const l=_,e=v({name:(u=l.blog.name)!=null?u:null,desc:(p=l.blog.desc)!=null?p:null,category_id:(f=l.blog.category_id)!=null?f:null,photo:null}),g=()=>{l.blog.name==null?e.post(route("blog.store"),{errorBag:"storeBlogInformation",preserveScroll:!0,onSuccess:()=>d()}):e.put(route("blog.update",l.blog),{errorBag:"updateBlogInformation",preserveScroll:!0,onSuccess:()=>d()})},d=()=>{};return(b,a)=>(y(),B(S,{onSubmitted:g},{title:r(()=>[m(" Informasi Blog ")]),description:r(()=>[m(" Update your account's profile information and email address. ")]),form:r(()=>[n("div",x,[s(c,{for:"name",value:"Judul"}),s(k,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).name=t),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name",required:""},null,8,["modelValue"]),s(i,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),n("div",h,[s(c,{for:"desc",value:"Deskripsi"}),s(I,{id:"desc",modelValue:o(e).desc,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).desc=t),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),s(i,{message:o(e).errors.desc,class:"mt-2"},null,8,["message"])]),n("div",q,[s(c,{for:"desc",value:"Kategori"}),s(U,{id:"category","model-value":o(e).category_id,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).category_id=t),"model-valueModifiers":{number:!0},option:b.$page.props.selectCategory,required:""},null,8,["model-value","option"]),s(i,{message:o(e).errors.category_id,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[s($,{on:o(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),s(w,{class:V({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:r(()=>[m(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{E as default};