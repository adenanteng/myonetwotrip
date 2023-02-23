import{u as _,o as c,e as f,b as e,h as a,w as l,F as g,H as w,g as m,a as t,f as h,L as v,n as y,A as V}from"./app.242527d7.js";import{_ as k}from"./AuthenticationCard.663a6203.js";import{_ as b}from"./AuthenticationCardLogo.932c1a3f.js";import{_ as x}from"./Checkbox.b9fc6c0c.js";import{_ as i}from"./InputError.97b603f8.js";import{_ as n}from"./InputLabel.c0b03793.js";import{_ as $}from"./PrimaryButton.2d35a289.js";import{_ as u}from"./TextInput.4a328817.js";const P=["onSubmit"],q={class:"mt-4"},F={class:"mt-4"},N={class:"mt-4"},U={key:0,class:"mt-4"},S={class:"flex items-center"},j={class:"ml-2"},B=["href"],C=["href"],T={class:"flex items-center justify-end mt-4"},M={__name:"Register",setup(z){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,o)=>(c(),f(g,null,[e(a(w),{title:"Register"}),e(k,null,{logo:l(()=>[e(b)]),title:l(()=>[m(" Daftar untuk menjadi anggota ")]),default:l(()=>[t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(n,{for:"name",value:"Nama"}),e(u,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).name=r),type:"text",class:"mt-1 block w-full capitalize",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",q,[e(n,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",F,[e(n,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",N,[e(n,{for:"password_confirmation",value:"Konfirmasi Password"}),e(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",U,[e(n,{for:"terms"},{default:l(()=>[t("div",S,[e(x,{id:"terms",checked:a(s).terms,"onUpdate:checked":o[4]||(o[4]=r=>a(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",j,[m(" I agree to the "),t("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,B),m(" and "),t("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,C)])]),e(i,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",T,[e(a(v),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[m(" Sudah punya akun? ")]),_:1},8,["href"]),e($,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:l(()=>[m(" Daftar ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{M as default};
