import{_ as p}from"./AppLayout.6edfc5b5.js";import c from"./DeleteUserForm.dd42f86e.js";import l from"./LogoutOtherBrowserSessionsForm.8ac453d4.js";import{S as s}from"./SectionBorder.873a724e.js";import f from"./TwoFactorAuthenticationForm.1f8fdbce.js";import u from"./UpdatePasswordForm.ffc7553b.js";import d from"./UpdateProfileInformationForm.7dca3ba1.js";import{o as e,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.17c2719e.js";import"./DarkmodeToggle.380057d9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.23f9bb52.js";import"./use-tracked-pointer.7735188d.js";import"./ActionSection.064f87c9.js";import"./SectionTitle.92022927.js";import"./DangerButton.6ef6bdcf.js";import"./DialogModal.30644245.js";import"./InputError.b70e3d10.js";import"./SecondaryButton.cf570991.js";import"./TextInput.023198ff.js";import"./ActionMessage.5b2763a5.js";import"./PrimaryButton.da825be2.js";import"./InputLabel.53435275.js";import"./FormSection.75b3fb57.js";const $=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profil ",-1),g={class:"max-w-7xl mx-auto py-10"},w={key:0},k={key:1},y={key:2},L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(e(),_(p,{title:"Profil",name:"Profil",desc:"lorem ipsum"},{header:n(()=>[$]),default:n(()=>[i("div",null,[i("div",g,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{L as default};
