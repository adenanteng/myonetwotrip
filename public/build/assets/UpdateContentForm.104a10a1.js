import{u as d,o as u,c as _,w as e,g as s,a as f,b as a,h as o,n as g}from"./app.4eb3f73d.js";import{_ as S}from"./ActionMessage.b564e9f8.js";import{_ as V}from"./FormSection.440de630.js";import{_ as b}from"./InputError.8799caff.js";import{_ as B}from"./PrimaryButton.2d70b2e5.js";import{_ as $}from"./EditorInput.a12f54ab.js";import"./SectionTitle.f00184a7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.30e2aaa9.js";const h={class:"col-span-6 sm:col-span-6"},z={__name:"UpdateContentForm",props:{trip:Object|String},setup(c){var n;const r=c,t=d({id:r.trip.id,content:(n=r.trip.content)!=null?n:null}),m=()=>{t.put(route("trip.update",r.trip),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},p=()=>{};return(x,i)=>(u(),_(V,{onSubmitted:m},{title:e(()=>[s(" Konten ")]),description:e(()=>[s(" Update your account's profile information and email address. ")]),form:e(()=>[f("div",h,[a($,{modelValue:o(t).content,"onUpdate:modelValue":i[0]||(i[0]=l=>o(t).content=l)},null,8,["modelValue"]),a(b,{message:o(t).errors.content,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(S,{on:o(t).recentlySuccessful,class:"mr-3"},{default:e(()=>[s(" Berhasil disimpan. ")]),_:1},8,["on"]),a(B,{class:g({"opacity-25":o(t).processing}),disabled:o(t).processing},{default:e(()=>[s(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{z as default};