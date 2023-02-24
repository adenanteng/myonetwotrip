import{d as T,o as l,c as p,w as d,a as t,h as s,e as H,i as S,F as C,b as c,f as M,n as h,C as b,D as f,t as r,g as y}from"./app.242527d7.js";import{_ as L}from"./LandingLayout.65a6a795.js";import{C as P,P as A,S as z}from"./carousel.es.e82cac7f.js";import{u,S as m,E as x}from"./tiptap-starter-kit.esm.bf8a5603.js";import"./DarkmodeToggle.51c509db.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.80a255e7.js";const B={class:"relative pb-10 pt-32 px-10"},E={class:"lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-5 gap-8 lg:items-start"},N={class:"relative sm:py-16 lg:py-0 lg:col-span-3"},V={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"},$={class:"carousel__item w-full aspect-video rounded-2xl relative"},q=["src"],D={class:""},I={class:"border-b border-gray-200"},j={class:"-mb-px flex space-x-8","aria-label":"Tabs"},F={class:"my-5"},K={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:col-span-2"},O={class:"pt-12 sm:pt-16 lg:pt-20"},R={class:"text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl capitalize"},G={class:"capitalize text-primary-500"},J=t("i",{class:"fa-regular fa-location-dot mr-2"},null,-1),Q=t("p",{class:"text-gray-700 mt-3"},"Mulai dari",-1),U={class:"max-w-2xl text-gray-900 text-3xl font-bold capitalize"},W=t("span",{class:"text-base font-normal"},"/ tiket",-1),X=["href"],Y={class:"text-gray-500 space-y-6"},Z={class:"mt-10 pt-10 flex items-center border-t border-gray-300"},tt={class:"flex-shrink-0"},et=["src"],st={class:"ml-3"},at={class:"text-sm font-medium text-gray-900"},rt={class:"hover:underline"},it={class:"flex space-x-1 text-sm text-gray-500"},mt={__name:"Show",props:{trip:Object},setup(e){const i=e,_=u({content:i.trip.content,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[m.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1}),v=u({content:i.trip.itinerary,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[m.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1}),w=u({content:i.trip.include,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[m.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1}),a=T(1);function k(g){return g.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return(g,o)=>(l(),p(L,{title:i.trip.name},{default:d(()=>[t("div",B,[t("div",E,[t("div",N,[t("div",V,[e.trip.media[0]?(l(),p(s(P),{key:0,"items-to-show":1,"wrap-around":!0,transition:1e3,autoplay:5e3},{slides:d(()=>[(l(!0),H(C,null,S(e.trip.media,n=>(l(),p(s(z),{key:n.id},{default:d(()=>[t("div",$,[t("img",{class:"object-cover w-full aspect-video rounded-2xl",src:n.original_url},null,8,q)])]),_:2},1024))),128))]),addons:d(()=>[c(s(A))]),_:1})):M("",!0),t("div",D,[t("div",I,[t("nav",j,[t("button",{onClick:o[0]||(o[0]=n=>a.value=1),class:h([a.value==1?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Itinerary ",2),t("button",{onClick:o[1]||(o[1]=n=>a.value=2),class:h([a.value==2?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Tiket Sudah Termasuk ",2)]),t("div",F,[b(c(s(x),{editor:s(v),required:""},null,8,["editor"]),[[f,a.value==1]]),b(c(s(x),{editor:s(w),required:""},null,8,["editor"]),[[f,a.value==2]])])])])])]),t("div",K,[t("div",O,[t("h2",R,r(e.trip.name),1),t("p",G,[J,y(r(e.trip.location)+", "+r(e.trip.city),1)]),Q,t("h3",U,[y(" Rp. "+r(k(e.trip.price))+" ",1),W]),t("a",{target:"_blank",class:"mt-2 mb-5 nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition",href:"https://api.whatsapp.com/send?phone=6285156875180&text=Halo%20Myonetwotrip%20saya%20mau%20order%20https://myonetwotrip.com/destinasi/"+e.trip.slug}," Pesan Tiket Sekarang ",8,X),t("div",Y,[c(s(x),{editor:s(_),required:""},null,8,["editor"])])]),t("div",Z,[t("div",tt,[t("img",{class:"h-10 w-10 rounded-full",src:e.trip.user.profile_photo_url,alt:""},null,8,et)]),t("div",st,[t("div",at,[t("span",rt,r(e.trip.user.name),1)]),t("div",it,[t("span",null,r(e.trip.user.email),1)])])])])])])]),_:1},8,["title"]))}};export{mt as default};
