import{o as s,e as r,a as e,t as l,r as x,F as g,b as p,w as i,n as u,g as m,h,L as f,d as b,c as _,i as y}from"./app.242527d7.js";import{_ as w}from"./LandingLayout.65a6a795.js";import"./carousel.es.e82cac7f.js";import"./DarkmodeToggle.51c509db.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.80a255e7.js";const v={class:"grid px-10 my-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"},k={class:"text-3xl font-extrabold sm:text-4xl capitalize text-gray-900"},S={class:"max-w-prose text-base text-gray-500"},B={class:"my-12 grid gap-5 lg:grid-cols-4 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-0"},$={__name:"Blog",props:{name:String,desc:String},setup(o){const t=o;return(c,n)=>(s(),r(g,null,[e("div",v,[e("p",k,l(t.name),1),e("p",S,l(t.desc),1)]),e("div",B,[x(c.$slots,"detail")])],64))}},j={class:"flex flex-col rounded-2xl border border-gray-300 shadow-lg overflow-hidden"},z={class:"flex-shrink-0"},L=["src"],N={key:1,class:"block h-60 w-full bg-primary-100 flex justify-center items-center"},V=e("i",{class:"fa-duotone fa-image text-primary-600 text-7xl"},null,-1),A=[V],C={class:"flex-1 bg-white bg-opacity-50 pt-6 pb-3 px-6 flex flex-col justify-between"},D={class:"flex-1"},F={class:"text-sm font-medium text-primary-600"},O={class:"hover:underline capitalize"},E={class:"block mt-1"},M={class:"text-base font-semibold text-gray-900 capitalize"},T={class:"mt-3 pt-3 flex items-center border-t border-gray-300"},q={class:""},G={class:"text-sm font-medium text-primary-600"},H={class:"hover:underline capitalize"},I=e("i",{class:"fa-regular fa-clock mr-1"},null,-1),J={__name:"BlogDetail",props:{slug:String,name:String,desc:String,content:String,category:Object,img:String|Boolean,created:String},setup(o){const t=o;return(c,n)=>(s(),r("div",j,[p(h(f),{href:c.route("blog.show",t.slug)},{default:i(()=>[e("div",z,[t.img[0]?(s(),r("img",{key:0,class:"h-60 w-full object-cover",src:t.img[0].original_url,alt:""},null,8,L)):(s(),r("span",N,A))]),e("div",C,[e("div",D,[e("p",F,[e("span",O,[e("i",{class:u(["fa-regular mr-1",t.category.icon])},null,2),m(" "+l(t.category.name),1)])]),e("div",E,[e("p",M,l(t.name),1)])]),e("div",T,[e("div",q,[e("div",G,[e("span",H,[I,m(" "+l(t.created),1)])])])])])]),_:1},8,["href"])]))}},X={__name:"Blog",props:{blog:Object},setup(o){const t=o;return b(null),(c,n)=>(s(),_(w,{title:"Artikel",header:"Artikel",desc:"Lorem ipsum dolor sit amet",img:"/img/sindoro.jpg"},{default:i(()=>[p($,{name:"Membaca itu baik",desc:"Lorem ipsum dolor sit amet"},{detail:i(()=>[(s(!0),r(g,null,y(t.blog,a=>{var d;return s(),_(J,{slug:a.slug,name:a.name,desc:a.desc,category:a.category,img:(d=a.media)!=null?d:!1,created:a.created},null,8,["slug","name","desc","category","img","created"])}),256))]),_:1})]),_:1}))}};export{X as default};
