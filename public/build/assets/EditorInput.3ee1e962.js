import{u as x,S as b,E as v}from"./tiptap-starter-kit.esm.bf8a5603.js";import{o as g,e as c,r as f,j as y,n as _,h as o,z as $,b as r,w as s,g as a,F as H,a as m}from"./app.242527d7.js";const k={class:"relative z-0 inline-flex shadow-sm rounded-2xl"},C={__name:"GroupButton",setup(p){return(u,i)=>(g(),c("span",k,[f(u.$slots,"default")]))}},l={__name:"GroupButtonLink",setup(p){const u=y(()=>"-ml-px relative disabled:opacity-50 inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500");return(i,n)=>(g(),c("button",{type:"button",class:_(o(u))},[f(i.$slots,"default")],2))}},V=m("i",null,"Italic",-1),B=m("b",null,"Bold",-1),S={__name:"EditorInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(p,{emit:u}){const i=p,n=x({editorProps:{attributes:{class:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl p-3 mt-3 focus:outline-none bg-white border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}},extensions:[b.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],onUpdate:({editor:d})=>{let e=d.getHTML();u("update:modelValue",e)},content:i.modelValue});return $(()=>i.modelValue,(d,e)=>{const t=d===e;console.log(`Same: ${t}`)}),(d,e)=>(g(),c(H,null,[r(C,null,{default:s(()=>[r(l,{onClick:e[0]||(e[0]=t=>o(n).chain().focus().toggleHeading({level:1}).run()),class:"rounded-l-2xl"},{default:s(()=>[a("H1")]),_:1}),r(l,{onClick:e[1]||(e[1]=t=>o(n).chain().focus().toggleHeading({level:2}).run())},{default:s(()=>[a("H2")]),_:1}),r(l,{onClick:e[2]||(e[2]=t=>o(n).chain().focus().toggleHeading({level:3}).run())},{default:s(()=>[a("H3")]),_:1}),r(l,{onClick:e[3]||(e[3]=t=>o(n).chain().focus().toggleHeading({level:4}).run())},{default:s(()=>[a("H4")]),_:1}),r(l,{onClick:e[4]||(e[4]=t=>o(n).chain().focus().toggleHeading({level:5}).run())},{default:s(()=>[a("H5")]),_:1}),r(l,{onClick:e[5]||(e[5]=t=>o(n).chain().focus().setParagraph().run()),class:"rounded-r-2xl mr-2"},{default:s(()=>[a("P")]),_:1}),r(l,{onClick:e[6]||(e[6]=t=>o(n).chain().focus().toggleItalic().run()),class:"rounded-l-2xl"},{default:s(()=>[V]),_:1}),r(l,{onClick:e[7]||(e[7]=t=>o(n).chain().focus().toggleBold().run())},{default:s(()=>[B]),_:1}),r(l,{onClick:e[8]||(e[8]=t=>o(n).chain().focus().toggleBulletList().run()),class:"rounded-r-2xl mr-2"},{default:s(()=>[a("List")]),_:1})]),_:1}),r(o(v),{ref:"input",onInput:e[9]||(e[9]=t=>d.$emit("update:modelValue",t.target.value)),editor:o(n),required:""},null,8,["editor"])],64))}};export{S as _};
