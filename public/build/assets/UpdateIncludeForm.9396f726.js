import{u as d,o as u,c as _,w as s,g as o,a as f,b as r,h as a,n as g}from"./app.48751362.js";import{_ as S}from"./ActionMessage.4551bdf5.js";import{_ as V}from"./FormSection.eb8dc81b.js";import{_ as b}from"./InputError.164fb6a5.js";import{_ as B}from"./PrimaryButton.72bf1624.js";import{_ as $}from"./EditorInput.c8df81ee.js";import"./SectionTitle.3ceaa375.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.3bd213af.js";const h={class:"col-span-6 sm:col-span-6"},j={__name:"UpdateIncludeForm",props:{trip:Object|String},setup(c){var i;const t=c,e=d({id:t.trip.id,include:(i=t.trip.include)!=null?i:null}),l=()=>{e.put(route("trip.update",t.trip),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>m()})},m=()=>{};return(x,n)=>(u(),_(V,{onSubmitted:l},{title:s(()=>[o(" Include ")]),description:s(()=>[o(" Update your account's profile information and email address. ")]),form:s(()=>[f("div",h,[r($,{modelValue:a(e).include,"onUpdate:modelValue":n[0]||(n[0]=p=>a(e).include=p)},null,8,["modelValue"]),r(b,{message:a(e).errors.include,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[r(S,{on:a(e).recentlySuccessful,class:"mr-3"},{default:s(()=>[o(" Berhasil disimpan. ")]),_:1},8,["on"]),r(B,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:s(()=>[o(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};