import{u as l,d,o as c,e as u,b as o,h as e,w as r,F as f,H as p,a,n as _,g as w,A as b}from"./app.4eb3f73d.js";import{_ as g}from"./AuthenticationCard.ec8f74be.js";import{_ as h}from"./AuthenticationCardLogo.7e496c0e.js";import{_ as x}from"./InputError.8799caff.js";import{_ as v}from"./InputLabel.5efa3ac2.js";import{_ as y}from"./PrimaryButton.2d70b2e5.js";import{_ as V}from"./TextInput.d5f7fbd3.js";const $=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),k=["onSubmit"],C={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(F){const s=l({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(c(),u(f,null,[o(e(p),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[$,a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[o(v,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=m=>e(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",C,[o(y,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,k)]),_:1})],64))}};export{j as default};