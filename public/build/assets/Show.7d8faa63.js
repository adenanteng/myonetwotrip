import{o as a,c as i,w as l,a as t,h as s,e as g,i as m,F as u,b as n,f as x,t as o,n as h,g as p}from"./app.6527f19c.js";import{_}from"./LandingLayout.8ec4a287.js";/* empty css                 */import{C as f,P as b,S as y}from"./carousel.es.7e53dc9e.js";import{u as v,S as w,E as k}from"./index.e6600f08.js";import"./DarkmodeToggle.3f697955.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={class:"relative pb-10 pt-32"},S={class:"lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"},B={class:"relative sm:py-16 lg:py-0"},E=t("div",{"aria-hidden":"true",class:"hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"},[t("div",{class:"absolute inset-y-0 right-1/2 w-full bg-primary-500 rounded-r-2xl lg:right-72"}),t("svg",{class:"absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12",width:"404",height:"392",fill:"none",viewBox:"0 0 404 392"},[t("defs",null,[t("pattern",{id:"02f20b47-fd69-4224-a62a-4c9de5c763f7",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},[t("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"})])]),t("rect",{width:"404",height:"392",fill:"url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"})])],-1),N={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"},V={class:"carousel__item w-full aspect-square rounded-2xl relative"},q=["src"],z={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"},H={class:"pt-12 sm:pt-16 lg:pt-20"},L={class:"text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl capitalize"},P={class:"mt-3 text-gray-500 space-y-6"},T={class:"capitalize text-primary-500"},j={class:"mt-10 pt-10 flex items-center border-t border-gray-300"},A={class:"flex-shrink-0"},F=["src"],M={class:"ml-3"},O={class:"text-sm font-medium text-gray-900"},U={class:"hover:underline"},D={class:"flex space-x-1 text-sm text-gray-500"},Y={__name:"Show",props:{blog:Object},setup(e){const r=e,d=v({content:r.blog.content,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[w.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1});return(K,$)=>(a(),i(_,{title:r.blog.name},{default:l(()=>[t("div",C,[t("div",S,[t("div",B,[E,t("div",N,[e.blog.media[0]?(a(),i(s(f),{key:0,"items-to-show":1,"wrap-around":!0,transition:1e3,autoplay:5e3},{slides:l(()=>[(a(!0),g(u,null,m(e.blog.media,c=>(a(),i(s(y),{key:c.id},{default:l(()=>[t("div",V,[t("img",{class:"object-cover w-full aspect-square rounded-2xl",src:c.original_url},null,8,q)])]),_:2},1024))),128))]),addons:l(()=>[n(s(b))]),_:1})):x("",!0)])]),t("div",z,[t("div",H,[t("h2",L,o(e.blog.name),1),t("div",P,[t("p",T,[t("i",{class:h(["fa-regular mr-2",e.blog.category.icon])},null,2),p(o(e.blog.category.name),1)]),n(s(k),{editor:s(d),required:""},null,8,["editor"])])]),t("div",j,[t("div",A,[t("img",{class:"h-10 w-10 rounded-full",src:e.blog.user.profile_photo_url,alt:""},null,8,F)]),t("div",M,[t("div",O,[t("span",U,o(e.blog.user.name),1)]),t("div",D,[t("span",null,o(e.blog.user.email),1)])])])])])])]),_:1},8,["title"]))}};export{Y as default};