import{_ as p}from"./AppLayout.fe086264.js";import c from"./DeleteUserForm.5765dda5.js";import l from"./LogoutOtherBrowserSessionsForm.c7f6c8ce.js";import{S as s}from"./SectionBorder.a2412e52.js";import f from"./TwoFactorAuthenticationForm.429a3348.js";import u from"./UpdatePasswordForm.d5494522.js";import d from"./UpdateProfileInformationForm.e612f31d.js";import{o as e,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.96424af4.js";import"./DarkmodeToggle.34a7dfb2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.3e5534ba.js";import"./use-tracked-pointer.13eb13bc.js";import"./ActionSection.ae965b1b.js";import"./SectionTitle.d150f3ae.js";import"./DangerButton.ebbe4d83.js";import"./DialogModal.4a8e073e.js";import"./InputError.6b4db58b.js";import"./SecondaryButton.78140092.js";import"./TextInput.791e68cb.js";import"./ActionMessage.88641fc5.js";import"./PrimaryButton.5b74e080.js";import"./InputLabel.aa7b531e.js";import"./FormSection.f5a2842e.js";const $=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profil ",-1),g={class:"max-w-7xl mx-auto py-10"},w={key:0},k={key:1},y={key:2},L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(e(),_(p,{title:"Profil",name:"Profil",desc:"lorem ipsum"},{header:n(()=>[$]),default:n(()=>[i("div",null,[i("div",g,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{L as default};
