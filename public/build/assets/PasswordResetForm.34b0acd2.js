import{d as p,u as i,o as m,c as d,w as s,g as e,a as o,b as t,h as l}from"./app.30ef99a5.js";import{_}from"./ActionSection.4f3d299d.js";import{_ as u}from"./PrimaryButton.c72e7318.js";import{_ as f}from"./ActionMessage.ff8c0f3f.js";import"./SectionTitle.2e2a8120.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w=o("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah reset password, password akan diganti secara permanen. ",-1),x={class:"mt-5 flex items-center gap-3"},S={__name:"PasswordResetForm",props:{users:Object},setup(c){const a=c;p(null);const r=i({id:a.users.id}),n=()=>{r.post(route("user.passwordReset",a.users),{preserveScroll:!0})};return(g,h)=>(m(),d(_,null,{title:s(()=>[e(" Reset Password Pengguna ")]),description:s(()=>[e(" Reset password pengguna secara permanen ")]),content:s(()=>[w,o("div",x,[t(u,{class:"",onClick:n},{default:s(()=>[e(" Reset Password ")]),_:1}),t(f,{on:l(r).recentlySuccessful,class:"mr-3"},{default:s(()=>[e(" Berhasil reset password. ")]),_:1},8,["on"])])]),_:1}))}};export{S as default};