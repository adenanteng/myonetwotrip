import{u as d,o as u,c as _,w as e,g as s,a as f,b as a,h as o,n as g}from"./app.f22909ad.js";import{_ as S}from"./ActionMessage.3956d0f7.js";import{_ as V}from"./FormSection.c80fc986.js";import{_ as b}from"./InputError.31b8e64c.js";import{_ as B}from"./PrimaryButton.bce2095c.js";import{_ as $}from"./EditorInput.5aa094f5.js";import"./SectionTitle.d38fbe02.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.8304a7c7.js";const h={class:"col-span-6 sm:col-span-6"},z={__name:"UpdateContentForm",props:{trip:Object|String},setup(c){var n;const r=c,t=d({id:r.trip.id,content:(n=r.trip.content)!=null?n:null}),m=()=>{t.put(route("trip.update",r.trip),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},p=()=>{};return(x,i)=>(u(),_(V,{onSubmitted:m},{title:e(()=>[s(" Konten ")]),description:e(()=>[s(" Update your account's profile information and email address. ")]),form:e(()=>[f("div",h,[a($,{modelValue:o(t).content,"onUpdate:modelValue":i[0]||(i[0]=l=>o(t).content=l)},null,8,["modelValue"]),a(b,{message:o(t).errors.content,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(S,{on:o(t).recentlySuccessful,class:"mr-3"},{default:e(()=>[s(" Berhasil disimpan. ")]),_:1},8,["on"]),a(B,{class:g({"opacity-25":o(t).processing}),disabled:o(t).processing},{default:e(()=>[s(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{z as default};