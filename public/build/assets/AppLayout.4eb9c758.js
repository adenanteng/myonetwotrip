import{j as I,o as M,c as V,w as P,r as Me,n as le,h as O,L as ve,k as D,d as _,l as j,p as te,m as z,q as ie,s as re,v as ae,x as ee,F as Be,y as Ze,z as Le,e as G,H as Ie,b as k,a as i,t as W,f as q,g as L,A as Ee,B as et}from"./app.242527d7.js";import{_ as tt,A as $e,a as nt,b as at,c as de,d as pe}from"./DarkmodeToggle.51c509db.js";import{o as d,u as H,P as N,t as K,b as Oe,R as ne,a as E,f as ye,c as xe,O as Y,w as lt}from"./use-controllable.80a255e7.js";import{m as ue,e as Ce,y as Ae,h as De,F as Re,c as _e,l as R,p as fe,u as ot,x as rt,a as A,v as st,M as J,D as je,O as it,E as Ne,P as oe,f as ut}from"./use-tracked-pointer.19854335.js";const se={__name:"NavLinkAlt",props:{href:String,active:Boolean},setup(e){const l=e,s=I(()=>l.active?"nightwind-prevent text-primary-300 text-sm font-medium rounded-2xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":"nightwind-prevent text-white text-sm font-medium rounded-2xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(r,t)=>(M(),V(O(ve),{href:e.href,class:le(O(s))},{default:P(()=>[Me(r.$slots,"default")]),_:3},8,["href","class"]))}};function dt({container:e,accept:l,walk:s,enabled:r}){D(()=>{let t=e.value;if(!t||r!==void 0&&!r.value)return;let a=ue(e);if(!a)return;let n=Object.assign(f=>l(f),{acceptNode:l}),u=a.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,n,!1);for(;u.nextNode();)s(u.currentNode)})}function pt(e,l,s){Ce||D(r=>{window.addEventListener(e,l,s),r(()=>window.removeEventListener(e,l,s))})}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function Ke(){let e=_(0);return pt("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function ct(e,l,s,r){Ce||D(t=>{e=e!=null?e:window,e.addEventListener(l,s,r),t(()=>e.removeEventListener(l,s,r))})}function He(){let e=[],l=[],s={enqueue(r){l.push(r)},addEventListener(r,t,a,n){return r.addEventListener(t,a,n),s.add(()=>r.removeEventListener(t,a,n))},requestAnimationFrame(...r){let t=requestAnimationFrame(...r);s.add(()=>cancelAnimationFrame(t))},nextFrame(...r){s.requestAnimationFrame(()=>{s.requestAnimationFrame(...r)})},setTimeout(...r){let t=setTimeout(...r);s.add(()=>clearTimeout(t))},add(r){e.push(r)},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of l.splice(0))await r()}};return s}var vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vt||{}),ft=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ft||{});function mt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let We=Symbol("MenuContext");function me(e){let l=ae(We,null);if(l===null){let s=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,me),s}return l}let gt=j({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:s}){let r=_(1),t=_(null),a=_(null),n=_([]),u=_(""),f=_(null),v=_(1);function o(m=p=>p){let p=f.value!==null?n.value[f.value]:null,c=it(m(n.value.slice()),x=>d(x.dataRef.domRef)),b=p?c.indexOf(p):null;return b===-1&&(b=null),{items:c,activeItemIndex:b}}let y={menuState:r,buttonRef:t,itemsRef:a,items:n,searchQuery:u,activeItemIndex:f,activationTrigger:v,closeMenu:()=>{r.value=1,f.value=null},openMenu:()=>r.value=0,goToItem(m,p,c){let b=o(),x=rt(m===A.Specific?{focus:A.Specific,id:p}:{focus:m},{resolveItems:()=>b.items,resolveActiveIndex:()=>b.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});u.value="",f.value=x,v.value=c!=null?c:1,n.value=b.items},search(m){let p=u.value!==""?0:1;u.value+=m.toLowerCase();let c=(f.value!==null?n.value.slice(f.value+p).concat(n.value.slice(0,f.value+p)):n.value).find(x=>x.dataRef.textValue.startsWith(u.value)&&!x.dataRef.disabled),b=c?n.value.indexOf(c):-1;b===-1||b===f.value||(f.value=b,v.value=1)},clearSearch(){u.value=""},registerItem(m,p){let c=o(b=>[...b,{id:m,dataRef:p}]);n.value=c.items,f.value=c.activeItemIndex,v.value=1},unregisterItem(m){let p=o(c=>{let b=c.findIndex(x=>x.id===m);return b!==-1&&c.splice(b,1),c});n.value=p.items,f.value=p.activeItemIndex,v.value=1}};return Ae([t,a],(m,p)=>{var c;y.closeMenu(),De(p,Re.Loose)||(m.preventDefault(),(c=d(t))==null||c.focus())},I(()=>r.value===0)),te(We,y),_e(I(()=>H(r.value,{[0]:R.Open,[1]:R.Closed}))),()=>{let m={open:r.value===0,close:y.closeMenu};return N({ourProps:{},theirProps:e,slot:m,slots:l,attrs:s,name:"Menu"})}}});j({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${K()}`}},setup(e,{attrs:l,slots:s,expose:r}){let t=me("MenuButton");r({el:t.buttonRef,$el:t.buttonRef});function a(v){switch(v.key){case E.Space:case E.Enter:case E.ArrowDown:v.preventDefault(),v.stopPropagation(),t.openMenu(),re(()=>{var o;(o=d(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(A.First)});break;case E.ArrowUp:v.preventDefault(),v.stopPropagation(),t.openMenu(),re(()=>{var o;(o=d(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(A.Last)});break}}function n(v){switch(v.key){case E.Space:v.preventDefault();break}}function u(v){e.disabled||(t.menuState.value===0?(t.closeMenu(),re(()=>{var o;return(o=d(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(v.preventDefault(),t.openMenu(),mt(()=>{var o;return(o=d(t.itemsRef))==null?void 0:o.focus({preventScroll:!0})})))}let f=Oe(I(()=>({as:e.as,type:l.type})),t.buttonRef);return()=>{var v;let o={open:t.menuState.value===0},{id:y,...m}=e,p={ref:t.buttonRef,id:y,type:f.value,"aria-haspopup":!0,"aria-controls":(v=d(t.itemsRef))==null?void 0:v.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:a,onKeyup:n,onClick:u};return N({ourProps:p,theirProps:m,slot:o,attrs:l,slots:s,name:"MenuButton"})}}});j({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${K()}`}},setup(e,{attrs:l,slots:s,expose:r}){let t=me("MenuItems"),a=_(null);r({el:t.itemsRef,$el:t.itemsRef}),dt({container:I(()=>d(t.itemsRef)),enabled:I(()=>t.menuState.value===0),accept(o){return o.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:o.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(o){o.setAttribute("role","none")}});function n(o){var y;switch(a.value&&clearTimeout(a.value),o.key){case E.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case E.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeItemIndex.value!==null){let m=t.items.value[t.activeItemIndex.value];(y=d(m.dataRef.domRef))==null||y.click()}t.closeMenu(),je(d(t.buttonRef));break;case E.ArrowDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(A.Next);case E.ArrowUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(A.Previous);case E.Home:case E.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(A.First);case E.End:case E.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(A.Last);case E.Escape:o.preventDefault(),o.stopPropagation(),t.closeMenu(),re(()=>{var m;return(m=d(t.buttonRef))==null?void 0:m.focus({preventScroll:!0})});break;case E.Tab:o.preventDefault(),o.stopPropagation(),t.closeMenu(),re(()=>st(d(t.buttonRef),o.shiftKey?J.Previous:J.Next));break;default:o.key.length===1&&(t.search(o.key),a.value=setTimeout(()=>t.clearSearch(),350));break}}function u(o){switch(o.key){case E.Space:o.preventDefault();break}}let f=fe(),v=I(()=>f!==null?f.value===R.Open:t.menuState.value===0);return()=>{var o,y;let m={open:t.menuState.value===0},{id:p,...c}=e,b={"aria-activedescendant":t.activeItemIndex.value===null||(o=t.items.value[t.activeItemIndex.value])==null?void 0:o.id,"aria-labelledby":(y=d(t.buttonRef))==null?void 0:y.id,id:p,onKeydown:n,onKeyup:u,role:"menu",tabIndex:0,ref:t.itemsRef};return N({ourProps:b,theirProps:c,slot:m,attrs:l,slots:s,features:ne.RenderStrategy|ne.Static,visible:v.value,name:"MenuItems"})}}});j({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${K()}`}},setup(e,{slots:l,attrs:s,expose:r}){let t=me("MenuItem"),a=_(null);r({el:a,$el:a});let n=I(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),u=I(()=>({disabled:e.disabled,textValue:"",domRef:a}));z(()=>{var c,b;let x=(b=(c=d(a))==null?void 0:c.textContent)==null?void 0:b.toLowerCase().trim();x!==void 0&&(u.value.textValue=x)}),z(()=>t.registerItem(e.id,u)),ie(()=>t.unregisterItem(e.id)),D(()=>{t.menuState.value===0&&(!n.value||t.activationTrigger.value!==0&&re(()=>{var c,b;return(b=(c=d(a))==null?void 0:c.scrollIntoView)==null?void 0:b.call(c,{block:"nearest"})}))});function f(c){if(e.disabled)return c.preventDefault();t.closeMenu(),je(d(t.buttonRef))}function v(){if(e.disabled)return t.goToItem(A.Nothing);t.goToItem(A.Specific,e.id)}let o=ot();function y(c){o.update(c)}function m(c){!o.wasMoved(c)||e.disabled||n.value||t.goToItem(A.Specific,e.id,0)}function p(c){!o.wasMoved(c)||e.disabled||!n.value||t.goToItem(A.Nothing)}return()=>{let{disabled:c}=e,b={active:n.value,disabled:c,close:t.closeMenu},{id:x,...h}=e;return N({ourProps:{id:x,ref:a,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,onClick:f,onFocus:v,onPointerenter:y,onMouseenter:y,onPointermove:m,onMousemove:m,onPointerleave:p,onMouseleave:p},theirProps:h,slot:b,attrs:s,slots:l,name:"MenuItem"})}}});var ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ht||{});let qe=Symbol("PopoverContext");function ge(e){let l=ae(qe,null);if(l===null){let s=new Error(`<${e} /> is missing a parent <${Ge.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ge),s}return l}let Ve=Symbol("PopoverGroupContext");function ze(){return ae(Ve,null)}let Ue=Symbol("PopoverPanelContext");function bt(){return ae(Ue,null)}let Ge=j({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:s,expose:r}){var t;let a=_(null);r({el:a,$el:a});let n=_(1),u=_(null),f=_(null),v=_(null),o=_(null),y=I(()=>ue(a)),m=I(()=>{var g,w;if(!d(u)||!d(o))return!1;for(let F of document.querySelectorAll("body > *"))if(Number(F==null?void 0:F.contains(d(u)))^Number(F==null?void 0:F.contains(d(o))))return!0;let S=Ne(),T=S.indexOf(d(u)),$=(T+S.length-1)%S.length,U=(T+1)%S.length,B=S[$],C=S[U];return!((g=d(o))!=null&&g.contains(B))&&!((w=d(o))!=null&&w.contains(C))}),p={popoverState:n,buttonId:_(null),panelId:_(null),panel:o,button:u,isPortalled:m,beforePanelSentinel:f,afterPanelSentinel:v,togglePopover(){n.value=H(n.value,{[0]:1,[1]:0})},closePopover(){n.value!==1&&(n.value=1)},close(g){p.closePopover();let w=(()=>g?g instanceof HTMLElement?g:g.value instanceof HTMLElement?d(g):d(p.button):d(p.button))();w==null||w.focus()}};te(qe,p),_e(I(()=>H(n.value,{[0]:R.Open,[1]:R.Closed})));let c={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},b=ze(),x=b==null?void 0:b.registerPopover;function h(){var g,w,S,T;return(T=b==null?void 0:b.isFocusWithinPopoverGroup())!=null?T:((g=y.value)==null?void 0:g.activeElement)&&(((w=d(u))==null?void 0:w.contains(y.value.activeElement))||((S=d(o))==null?void 0:S.contains(y.value.activeElement)))}return D(()=>x==null?void 0:x(c)),ct((t=y.value)==null?void 0:t.defaultView,"focus",g=>{var w,S;n.value===0&&(h()||!u||!o||g.target!==window&&((w=d(p.beforePanelSentinel))!=null&&w.contains(g.target)||(S=d(p.afterPanelSentinel))!=null&&S.contains(g.target)||p.closePopover()))},!0),Ae([u,o],(g,w)=>{var S;p.closePopover(),De(w,Re.Loose)||(g.preventDefault(),(S=d(u))==null||S.focus())},I(()=>n.value===0)),()=>{let g={open:n.value===0,close:p.close};return N({theirProps:e,ourProps:{ref:a},slot:g,slots:l,attrs:s,name:"Popover"})}}}),Te=j({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${K()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:s,expose:r}){let t=ge("PopoverButton"),a=I(()=>ue(t.button));r({el:t.button,$el:t.button}),z(()=>{t.buttonId.value=e.id}),ie(()=>{t.buttonId.value=null});let n=ze(),u=n==null?void 0:n.closeOthers,f=bt(),v=I(()=>f===null?!1:f.value===t.panelId.value),o=_(null),y=`headlessui-focus-sentinel-${K()}`;v.value||D(()=>{t.button.value=o.value});let m=Oe(I(()=>({as:e.as,type:l.type})),o);function p(h){var g,w,S,T,$;if(v.value){if(t.popoverState.value===1)return;switch(h.key){case E.Space:case E.Enter:h.preventDefault(),(w=(g=h.target).click)==null||w.call(g),t.closePopover(),(S=d(t.button))==null||S.focus();break}}else switch(h.key){case E.Space:case E.Enter:h.preventDefault(),h.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover();break;case E.Escape:if(t.popoverState.value!==0)return u==null?void 0:u(t.buttonId.value);if(!d(t.button)||((T=a.value)==null?void 0:T.activeElement)&&!(($=d(t.button))!=null&&$.contains(a.value.activeElement)))return;h.preventDefault(),h.stopPropagation(),t.closePopover();break}}function c(h){v.value||h.key===E.Space&&h.preventDefault()}function b(h){var g,w;e.disabled||(v.value?(t.closePopover(),(g=d(t.button))==null||g.focus()):(h.preventDefault(),h.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover(),(w=d(t.button))==null||w.focus()))}function x(h){h.preventDefault(),h.stopPropagation()}return()=>{let h=t.popoverState.value===0,g={open:h},{id:w,...S}=e,T=v.value?{ref:o,type:m.value,onKeydown:p,onClick:b}:{ref:o,id:w,type:m.value,"aria-expanded":e.disabled?void 0:t.popoverState.value===0,"aria-controls":d(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:p,onKeyup:c,onClick:b,onMousedown:x},$=Ke();function U(){let B=d(t.panel);if(!B)return;function C(){H($.value,{[Z.Forwards]:()=>oe(B,J.First),[Z.Backwards]:()=>oe(B,J.Last)})}C()}return ee(Be,[N({ourProps:T,theirProps:{...l,...S},slot:g,attrs:l,slots:s,name:"PopoverButton"}),h&&!v.value&&t.isPortalled.value&&ee(ye,{id:y,features:xe.Focusable,as:"button",type:"button",onFocus:U})])}}}),yt=j({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:s}){let r=ge("PopoverOverlay"),t=`headlessui-popover-overlay-${K()}`,a=fe(),n=I(()=>a!==null?a.value===R.Open:r.popoverState.value===0);function u(){r.closePopover()}return()=>{let f={open:r.popoverState.value===0};return N({ourProps:{id:t,"aria-hidden":!0,onClick:u},theirProps:e,slot:f,attrs:l,slots:s,features:ne.RenderStrategy|ne.Static,visible:n.value,name:"PopoverOverlay"})}}}),xt=j({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${K()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:s,expose:r}){let{focus:t}=e,a=ge("PopoverPanel"),n=I(()=>ue(a.panel)),u=`headlessui-focus-sentinel-before-${K()}`,f=`headlessui-focus-sentinel-after-${K()}`;r({el:a.panel,$el:a.panel}),z(()=>{a.panelId.value=e.id}),ie(()=>{a.panelId.value=null}),te(Ue,a.panelId),D(()=>{var x,h;if(!t||a.popoverState.value!==0||!a.panel)return;let g=(x=n.value)==null?void 0:x.activeElement;(h=d(a.panel))!=null&&h.contains(g)||oe(d(a.panel),J.First)});let v=fe(),o=I(()=>v!==null?v.value===R.Open:a.popoverState.value===0);function y(x){var h,g;switch(x.key){case E.Escape:if(a.popoverState.value!==0||!d(a.panel)||n.value&&!((h=d(a.panel))!=null&&h.contains(n.value.activeElement)))return;x.preventDefault(),x.stopPropagation(),a.closePopover(),(g=d(a.button))==null||g.focus();break}}function m(x){var h,g,w,S,T;let $=x.relatedTarget;!$||!d(a.panel)||(h=d(a.panel))!=null&&h.contains($)||(a.closePopover(),(((w=(g=d(a.beforePanelSentinel))==null?void 0:g.contains)==null?void 0:w.call(g,$))||((T=(S=d(a.afterPanelSentinel))==null?void 0:S.contains)==null?void 0:T.call(S,$)))&&$.focus({preventScroll:!0}))}let p=Ke();function c(){let x=d(a.panel);if(!x)return;function h(){H(p.value,{[Z.Forwards]:()=>{oe(x,J.Next)},[Z.Backwards]:()=>{var g;(g=d(a.button))==null||g.focus({preventScroll:!0})}})}h()}function b(){let x=d(a.panel);if(!x)return;function h(){H(p.value,{[Z.Forwards]:()=>{var g,w;let S=d(a.button),T=d(a.panel);if(!S)return;let $=Ne(),U=$.indexOf(S),B=$.slice(0,U+1),C=[...$.slice(U+1),...B];for(let F of C.slice())if(((w=(g=F==null?void 0:F.id)==null?void 0:g.startsWith)==null?void 0:w.call(g,"headlessui-focus-sentinel-"))||(T==null?void 0:T.contains(F))){let Q=C.indexOf(F);Q!==-1&&C.splice(Q,1)}oe(C,J.First,!1)},[Z.Backwards]:()=>oe(x,J.Previous)})}h()}return()=>{let x={open:a.popoverState.value===0,close:a.close},{id:h,focus:g,...w}=e,S={ref:a.panel,id:h,onKeydown:y,onFocusout:t&&a.popoverState.value===0?m:void 0,tabIndex:-1};return N({ourProps:S,theirProps:{...l,...w},attrs:l,slot:x,slots:{...s,default:(...T)=>{var $;return[ee(Be,[o.value&&a.isPortalled.value&&ee(ye,{id:u,ref:a.beforePanelSentinel,features:xe.Focusable,as:"button",type:"button",onFocus:c}),($=s.default)==null?void 0:$.call(s,...T),o.value&&a.isPortalled.value&&ee(ye,{id:f,ref:a.afterPanelSentinel,features:xe.Focusable,as:"button",type:"button",onFocus:b})])]}},features:ne.RenderStrategy|ne.Static,visible:o.value,name:"PopoverPanel"})}}});j({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:l,slots:s,expose:r}){let t=_(null),a=Ze([]),n=I(()=>ue(t));r({el:t,$el:t});function u(y){let m=a.value.indexOf(y);m!==-1&&a.value.splice(m,1)}function f(y){return a.value.push(y),()=>{u(y)}}function v(){var y;let m=n.value;if(!m)return!1;let p=m.activeElement;return(y=d(t))!=null&&y.contains(p)?!0:a.value.some(c=>{var b,x;return((b=m.getElementById(c.buttonId.value))==null?void 0:b.contains(p))||((x=m.getElementById(c.panelId.value))==null?void 0:x.contains(p))})}function o(y){for(let m of a.value)m.buttonId.value!==y&&m.close()}return te(Ve,{registerPopover:f,unregisterPopover:u,isFocusWithinPopoverGroup:v,closeOthers:o}),()=>N({ourProps:{ref:t},theirProps:e,slot:{},attrs:l,slots:s,name:"PopoverGroup"})}});function wt(e){let l={called:!1};return(...s)=>{if(!l.called)return l.called=!0,e(...s)}}function be(e,...l){e&&l.length>0&&e.classList.add(...l)}function ce(e,...l){e&&l.length>0&&e.classList.remove(...l)}var we=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(we||{});function St(e,l){let s=He();if(!e)return s.dispose;let{transitionDuration:r,transitionDelay:t}=getComputedStyle(e),[a,n]=[r,t].map(u=>{let[f=0]=u.split(",").filter(Boolean).map(v=>v.includes("ms")?parseFloat(v):parseFloat(v)*1e3).sort((v,o)=>o-v);return f});return a!==0?s.setTimeout(()=>l("finished"),a+n):l("finished"),s.add(()=>l("cancelled")),s.dispose}function Fe(e,l,s,r,t,a){let n=He(),u=a!==void 0?wt(a):()=>{};return ce(e,...t),be(e,...l,...s),n.nextFrame(()=>{ce(e,...s),be(e,...r),n.add(St(e,f=>(ce(e,...r,...l),be(e,...t),u(f))))}),n.add(()=>ce(e,...l,...s,...r,...t)),n.add(()=>u("cancelled")),n.dispose}function X(e=""){return e.split(" ").filter(l=>l.trim().length>1)}let Pe=Symbol("TransitionContext");var _t=(e=>(e.Visible="visible",e.Hidden="hidden",e))(_t||{});function Pt(){return ae(Pe,null)!==null}function kt(){let e=ae(Pe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function It(){let e=ae(ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let ke=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function Je(e){let l=_([]),s=_(!1);z(()=>s.value=!0),ie(()=>s.value=!1);function r(a,n=Y.Hidden){let u=l.value.findIndex(({id:f})=>f===a);u!==-1&&(H(n,{[Y.Unmount](){l.value.splice(u,1)},[Y.Hidden](){l.value[u].state="hidden"}}),!he(l)&&s.value&&(e==null||e()))}function t(a){let n=l.value.find(({id:u})=>u===a);return n?n.state!=="visible"&&(n.state="visible"):l.value.push({id:a,state:"visible"}),()=>r(a,Y.Unmount)}return{children:l,register:t,unregister:r}}let Qe=ne.RenderStrategy,Se=j({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:s,slots:r,expose:t}){if(!Pt()&&ut())return()=>ee(Xe,{...e,onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave")},r);let a=_(null),n=_("visible"),u=I(()=>e.unmount?Y.Unmount:Y.Hidden);t({el:a,$el:a});let{show:f,appear:v}=kt(),{register:o,unregister:y}=It(),m={value:!0},p=K(),c={value:!1},b=Je(()=>{c.value||(n.value="hidden",y(p),l("afterLeave"))});z(()=>{let B=o(p);ie(B)}),D(()=>{if(u.value===Y.Hidden&&!!p){if(f&&n.value!=="visible"){n.value="visible";return}H(n.value,{hidden:()=>y(p),visible:()=>o(p)})}});let x=X(e.enter),h=X(e.enterFrom),g=X(e.enterTo),w=X(e.entered),S=X(e.leave),T=X(e.leaveFrom),$=X(e.leaveTo);z(()=>{D(()=>{if(n.value==="visible"){let B=d(a);if(B instanceof Comment&&B.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function U(B){let C=m.value&&!v.value,F=d(a);!F||!(F instanceof HTMLElement)||C||(c.value=!0,f.value&&l("beforeEnter"),f.value||l("beforeLeave"),B(f.value?Fe(F,x,h,g,w,Q=>{c.value=!1,Q===we.Finished&&l("afterEnter")}):Fe(F,S,T,$,w,Q=>{c.value=!1,Q===we.Finished&&(he(b)||(n.value="hidden",y(p),l("afterLeave")))})))}return z(()=>{Le([f],(B,C,F)=>{U(F),m.value=!1},{immediate:!0})}),te(ke,b),_e(I(()=>H(n.value,{visible:R.Open,hidden:R.Closed}))),()=>{let{appear:B,show:C,enter:F,enterFrom:Q,enterTo:Mn,entered:Bn,leave:Ln,leaveFrom:On,leaveTo:Cn,...Ye}=e;return N({theirProps:Ye,ourProps:{ref:a},slot:{},slots:r,attrs:s,features:Qe,visible:n.value==="visible",name:"TransitionChild"})}}}),Et=Se,Xe=j({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:s,slots:r}){let t=fe(),a=I(()=>e.show===null&&t!==null?H(t.value,{[R.Open]:!0,[R.Closed]:!1}):e.show);D(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let n=_(a.value?"visible":"hidden"),u=Je(()=>{n.value="hidden"}),f=_(!0),v={show:a,appear:I(()=>e.appear||!f.value)};return z(()=>{D(()=>{f.value=!1,a.value?n.value="visible":he(u)||(n.value="hidden")})}),te(ke,u),te(Pe,v),()=>{let o=lt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),y={unmount:e.unmount};return N({ourProps:{...y,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[ee(Et,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...s,...y,...o},r.default)]},attrs:{},features:Qe,visible:n.value==="visible",name:"Transition"})}}});const $t={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},Tt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},Ft={class:"relative flex flex-wrap items-center justify-center lg:justify-between"},Mt={class:"absolute left-0 py-5 flex-shrink-0 lg:static flex items-center"},Bt={key:0,class:"ml-2 nightwind-prevent-block"},Lt={class:"text-white capitalize font-semibold"},Ot={class:"text-gray-200 font-light text-sm"},Ct={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},At={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Dt=["src","alt"],Rt={key:1,class:"inline-flex rounded-2xl"},jt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-2xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Nt=i("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[i("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Kt=i("div",{class:"border-t border-gray-100"},null,-1),Ht=["onSubmit"],Wt={class:"w-full py-5 lg:border-t lg:border-white lg:border-gray-300"},qt={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},Vt={class:"hidden lg:block lg:col-span-2"},zt={class:"flex space-x-4"},Ut=i("div",{class:"px-12 lg:px-0"},[i("div",{class:"flex justify-end"})],-1),Gt={class:"absolute right-0 flex-shrink-0 lg:hidden"},Jt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Qt={class:"lg:hidden"},Xt={class:"rounded-2xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200"},Yt={class:"pt-3 pb-2"},Zt={class:"flex items-center justify-between px-4"},en={class:"-mr-2"},tn={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},nn={class:"mt-3 px-2 space-y-1"},an={class:"pt-4 pb-2"},ln={class:"flex items-center px-5"},on={class:"flex-shrink-0"},rn=["src","alt"],sn={class:"ml-3 min-w-0 flex-1"},un={class:"text-base font-medium text-gray-800 truncate capitalize"},dn={class:"text-sm font-medium text-gray-500 truncate"},pn={class:"mt-3 px-2 space-y-1"},cn=["onSubmit"],vn={class:"-mt-24 pb-8"},fn={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},mn={class:""},gn={class:""},hn={class:"rounded-2xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},bn={class:"p-6"},yn={class:"sm:flex sm:items-center sm:justify-between"},xn={class:"sm:flex sm:space-x-5"},wn={class:"flex-shrink-0"},Sn=["src","alt"],_n={class:"mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left"},Pn={class:"text-sm font-medium text-gray-600"},kn={class:"text-xl font-bold text-gray-900 sm:text-2xl capitalize"},In={class:"text-sm font-medium text-gray-600"},En={key:0,class:"mt-5 flex justify-center sm:mt-0"},$n=i("div",{class:"border-t border-gray-300 bg-gray-50 bg-opacity-50 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"},[i("div",{class:"py-5"})],-1),Tn={class:"py-10"},Fn=i("footer",null,[i("div",{class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},[i("div",{class:"border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"},[i("span",{class:"block sm:inline"},"\xA9 2022 Enola."),L(),i("span",{class:"block sm:inline"},"All rights reserved.")])])],-1),Nn={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,action:String,href:String,avatar:String},setup(e){var a;const l=e,s=_((a=JSON.parse(localStorage.getItem("darkmode")))!=null?a:!1);Le(s,n=>{console.log(`darkmode is ${n}`),localStorage.setItem("darkmode",JSON.stringify(n))});const r=_(!1),t=()=>{et.Inertia.post(route("logout"))};return(n,u)=>(M(),G("div",{class:le(["transition duration-1000",s.value?"nightwind dark":"nightwind"])},[n.$page.props.appSetting?(M(),V(O(Ie),{key:0,title:e.title+" - "+n.$page.props.appSetting.name},null,8,["title"])):(M(),V(O(Ie),{key:1,title:e.title},null,8,["title"])),k(tt),i("div",$t,[k(O(Ge),{as:"header",class:"pb-24 bg-gradient-to-r from-primary-800 to-cyan-600"},{default:P(({open:f})=>[i("div",Tt,[i("div",Ft,[i("div",Mt,[k(O(ve),{href:n.route("dashboard")},{default:P(()=>[k($e,{class:"block h-9 w-auto"})]),_:1},8,["href"]),n.$page.props.appSetting?(M(),G("div",Bt,[i("h1",Lt,W(n.$page.props.appSetting.name),1),i("p",Ot,W(n.$page.props.appSetting.desc),1)])):q("",!0)]),i("div",Ct,[k(nt,{darkMode:s.value,onClick:u[0]||(u[0]=v=>s.value=!s.value)},null,8,["darkMode"]),k(O(gt),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:P(()=>[k(at,{align:"right",width:"48"},{trigger:P(()=>[n.$page.props.jetstream.managesProfilePhotos?(M(),G("button",At,[i("img",{class:"h-10 w-10 rounded-full object-cover",src:n.$page.props.user.profile_photo_url,alt:n.$page.props.user.name},null,8,Dt)])):(M(),G("span",Rt,[i("button",jt,[L(W(n.$page.props.user.name)+" ",1),Nt])]))]),content:P(()=>[k(de,{href:n.route("landing.welcome")},{default:P(()=>[L(" Beranda ")]),_:1},8,["href"]),k(de,{href:n.route("profile.show")},{default:P(()=>[L(" Profil ")]),_:1},8,["href"]),n.$page.props.jetstream.hasApiFeatures?(M(),V(de,{key:0,href:n.route("api-tokens.index")},{default:P(()=>[L(" API Tokens ")]),_:1},8,["href"])):q("",!0),Kt,i("form",{onSubmit:Ee(t,["prevent"])},[k(de,{as:"button"},{default:P(()=>[L(" Keluar ")]),_:1})],40,Ht)]),_:1})]),_:1})]),i("div",Wt,[i("div",qt,[i("div",Vt,[i("nav",zt,[k(se,{href:n.route("dashboard"),active:n.route().current("dashboard")},{default:P(()=>[L(" Dasbor ")]),_:1},8,["href","active"]),n.$page.props.user.role_id==1?(M(),V(se,{key:0,href:n.route("trip.index"),active:n.$page.component.startsWith("Trip")},{default:P(()=>[L(" Destinasi ")]),_:1},8,["href","active"])):q("",!0),n.$page.props.user.role_id==1?(M(),V(se,{key:1,href:n.route("blog.index"),active:n.$page.component.startsWith("Blog")},{default:P(()=>[L(" Blog ")]),_:1},8,["href","active"])):q("",!0),n.$page.props.user.role_id==1?(M(),V(se,{key:2,href:n.route("user.index"),active:n.$page.component.startsWith("User")},{default:P(()=>[L(" Pengguna ")]),_:1},8,["href","active"])):q("",!0),n.$page.props.user.role_id==1?(M(),V(se,{key:3,href:n.route("setting.index"),active:n.$page.component.startsWith("AppSetting")},{default:P(()=>[L(" Pengaturan ")]),_:1},8,["href","active"])):q("",!0)])]),Ut])]),i("div",Gt,[k(O(Te),{class:"bg-transparent p-2 rounded-2xl inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"},{default:P(()=>[i("button",{class:"inline-flex items-center justify-center rounded-2xl text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:u[1]||(u[1]=v=>r.value=!r.value)},[(M(),G("svg",Jt,[i("path",{class:le({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),i("path",{class:le({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])])]),k(O(Xe),{as:"template",show:f},{default:P(()=>[i("div",Qt,[k(O(Se),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:P(()=>[k(O(yt),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),k(O(Se),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:P(()=>[k(O(xt),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:P(()=>[i("div",Xt,[i("div",Yt,[i("div",Zt,[i("div",null,[k(O(ve),{href:n.route("dashboard")},{default:P(()=>[k($e,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),i("div",en,[k(O(Te),{class:"bg-white rounded-2xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:P(()=>[i("button",{class:"inline-flex items-center justify-center p-2 rounded-2xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:u[2]||(u[2]=v=>r.value=!r.value)},[(M(),G("svg",tn,[i("path",{class:le({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),i("path",{class:le({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),i("div",nn,[k(pe,{href:n.route("dashboard"),active:n.route().current("dashboard")},{default:P(()=>[L(" Dashboard ")]),_:1},8,["href","active"])])]),i("div",an,[i("div",ln,[i("div",on,[i("img",{class:"h-12 w-12 rounded-full",src:n.$page.props.user.profile_photo_url,alt:n.$page.props.user.name},null,8,rn)]),i("div",sn,[i("div",un,W(n.$page.props.user.name),1),i("div",dn,W(n.$page.props.user.email),1)])]),i("div",pn,[k(pe,{href:n.route("profile.show"),active:n.route().current("profile.show")},{default:P(()=>[L(" Profil ")]),_:1},8,["href","active"]),n.$page.props.jetstream.hasApiFeatures?(M(),V(pe,{key:0,href:n.route("api-tokens.index"),active:n.route().current("api-tokens.index")},{default:P(()=>[L(" API Tokens ")]),_:1},8,["href","active"])):q("",!0),i("form",{method:"POST",onSubmit:Ee(t,["prevent"])},[k(pe,{as:"button"},{default:P(()=>[L(" Keluar ")]),_:1})],40,cn)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:1}),i("main",vn,[i("div",fn,[i("div",mn,[i("div",gn,[i("section",null,[i("div",hn,[i("div",bn,[i("div",yn,[i("div",xn,[i("div",wn,[l.avatar?(M(),G("img",{key:0,class:"mx-auto h-20 w-20 rounded-full",src:l.avatar,alt:l.avatar},null,8,Sn)):q("",!0)]),i("div",_n,[i("p",Pn,W(l.greeting),1),i("p",kn,W(l.name),1),i("p",In,W(l.desc),1)])]),l.action?(M(),G("div",En,[k(O(ve),{href:l.href,class:"flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"},{default:P(()=>[L(W(l.action),1)]),_:1},8,["href"])])):q("",!0)])]),$n])]),i("main",Tn,[Me(n.$slots,"default")])])])])]),Fn])],2))}};export{Nn as _};
