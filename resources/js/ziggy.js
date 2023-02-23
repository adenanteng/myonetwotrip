const Ziggy = {"url":"http:\/\/trip.test","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"two-factor.enable":{"uri":"user\/two-factor-authentication","methods":["POST"]},"two-factor.confirm":{"uri":"user\/confirmed-two-factor-authentication","methods":["POST"]},"two-factor.disable":{"uri":"user\/two-factor-authentication","methods":["DELETE"]},"two-factor.qr-code":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"]},"two-factor.secret-key":{"uri":"user\/two-factor-secret-key","methods":["GET","HEAD"]},"two-factor.recovery-codes":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"landing.welcome":{"uri":"\/","methods":["GET","HEAD"]},"landing.destination":{"uri":"destinasi","methods":["GET","HEAD"]},"trip.show":{"uri":"destinasi\/{trip}","methods":["GET","HEAD"],"bindings":{"trip":"slug"}},"landing.bali":{"uri":"bali","methods":["GET","HEAD"]},"landing.yogyakarta":{"uri":"yogyakarta","methods":["GET","HEAD"]},"landing.ntb":{"uri":"nusa-tenggara-barat","methods":["GET","HEAD"]},"landing.lampung":{"uri":"lampung","methods":["GET","HEAD"]},"landing.blog":{"uri":"artikel","methods":["GET","HEAD"]},"blog.show":{"uri":"artikel\/{blog}","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"blank":{"uri":"blank","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"trip.index":{"uri":"trip","methods":["GET","HEAD"]},"trip.create":{"uri":"trip\/create","methods":["GET","HEAD"]},"trip.store":{"uri":"trip","methods":["POST"]},"trip.edit":{"uri":"trip\/{trip}\/edit","methods":["GET","HEAD"],"bindings":{"trip":"slug"}},"trip.update":{"uri":"trip\/{trip}","methods":["PUT","PATCH"],"bindings":{"trip":"slug"}},"trip.destroy":{"uri":"trip\/{trip}","methods":["DELETE"]},"trip.addHero":{"uri":"trip\/add-hero","methods":["POST"]},"trip.deleteHero":{"uri":"trip\/delete-hero\/{trip}\/{id}","methods":["DELETE"]},"blog.index":{"uri":"blog","methods":["GET","HEAD"]},"blog.create":{"uri":"blog\/create","methods":["GET","HEAD"]},"blog.store":{"uri":"blog","methods":["POST"]},"blog.edit":{"uri":"blog\/{blog}\/edit","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"blog.update":{"uri":"blog\/{blog}","methods":["PUT","PATCH"],"bindings":{"blog":"slug"}},"blog.destroy":{"uri":"blog\/{blog}","methods":["DELETE"]},"blog.addHero":{"uri":"blog\/add-hero","methods":["POST"]},"blog.deleteHero":{"uri":"blog\/delete-hero\/{blog}\/{id}","methods":["DELETE"]},"blog.addCategory":{"uri":"blog\/add-blog-category","methods":["POST"]},"blog.editCategory":{"uri":"page\/edit-blog-category\/{category}","methods":["PUT"]},"blog.deleteCategory":{"uri":"blog\/delete-blog-category\/{id}","methods":["DELETE"]},"user.index":{"uri":"user","methods":["GET","HEAD"]},"user.create":{"uri":"user\/create","methods":["GET","HEAD"]},"user.store":{"uri":"user","methods":["POST"]},"user.show":{"uri":"user\/{user}","methods":["GET","HEAD"]},"user.edit":{"uri":"user\/{user}\/edit","methods":["GET","HEAD"]},"user.update":{"uri":"user\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"user.destroy":{"uri":"user\/{user}","methods":["DELETE"]},"user.passwordReset":{"uri":"user\/reset-password\/{user}","methods":["POST"]},"setting.index":{"uri":"setting","methods":["GET","HEAD"]},"setting.create":{"uri":"setting\/create","methods":["GET","HEAD"]},"setting.store":{"uri":"setting","methods":["POST"]},"setting.show":{"uri":"setting\/{setting}","methods":["GET","HEAD"]},"setting.edit":{"uri":"setting\/{setting}\/edit","methods":["GET","HEAD"]},"setting.update":{"uri":"setting\/{setting}","methods":["PUT","PATCH"]},"setting.destroy":{"uri":"setting\/{setting}","methods":["DELETE"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };