import{u as d,o as u,c as _,w as a,g as s,a as f,b as t,h as e,n as y}from"./app.67a0578b.js";import{_ as g}from"./ActionMessage.97fe1e65.js";import{_ as S}from"./FormSection.aa6ddfaf.js";import{_ as V}from"./InputError.10be53da.js";import{_ as b}from"./PrimaryButton.d019527a.js";import{_ as B}from"./EditorInput.38d98738.js";import"./SectionTitle.1f46f2ac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.8ab5538c.js";const $={class:"col-span-6 sm:col-span-6"},j={__name:"UpdateItineraryForm",props:{trip:Object|String},setup(m){var i;const o=m,r=d({id:o.trip.id,itinerary:(i=o.trip.itinerary)!=null?i:null}),c=()=>{r.put(route("trip.update",o.trip),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},p=()=>{};return(h,n)=>(u(),_(S,{onSubmitted:c},{title:a(()=>[s(" Itinerary ")]),description:a(()=>[s(" Update your account's profile information and email address. ")]),form:a(()=>[f("div",$,[t(B,{modelValue:e(r).itinerary,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).itinerary=l)},null,8,["modelValue"]),t(V,{message:e(r).errors.itinerary,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[t(g,{on:e(r).recentlySuccessful,class:"mr-3"},{default:a(()=>[s(" Berhasil disimpan. ")]),_:1},8,["on"]),t(b,{class:y({"opacity-25":e(r).processing}),disabled:e(r).processing},{default:a(()=>[s(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};
