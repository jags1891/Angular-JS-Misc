webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),e=u("aR8+"),i=u("wQAS"),r=u("ZErz"),o=u("skOw"),a=u("q4dy"),c=u("qbdv"),_=u("fc+i"),s=u("CPp0"),d=u("BkNc"),f=u("XeAJ"),p=u("ECCM"),h=u("QTq/");u.d(n,"a",function(){return g});var g=t.b(e.a,[i.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[r.a,o.a,a.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,c.a,c.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,_.b,_.c,[c.c]),t.d(6144,t.p,null,[_.b]),t.d(4608,_.d,_.e,[]),t.d(5120,_.f,function(l,n,u,t){return[new _.g(l),new _.h(n),new _.i(u,t)]},[c.c,c.c,c.c,_.d]),t.d(4608,_.j,_.j,[_.f,t.q]),t.d(135680,_.k,_.k,[c.c]),t.d(4608,_.l,_.l,[_.j,_.k]),t.d(6144,t.r,null,[_.l]),t.d(6144,_.m,null,[_.k]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,_.n,_.n,[c.c]),t.d(4608,_.o,_.o,[c.c]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.c,[]),t.d(5120,s.d,s.e,[]),t.d(4608,s.f,s.f,[s.a,s.b,s.d]),t.d(4608,s.g,s.h,[]),t.d(5120,s.i,s.j,[s.f,s.g]),t.d(5120,d.a,d.b,[d.c]),t.d(4608,d.d,d.d,[]),t.d(6144,d.e,null,[d.d]),t.d(135680,d.f,d.f,[d.c,t.t,t.u,t.v,d.e]),t.d(4608,d.g,d.g,[]),t.d(5120,d.h,d.i,[d.j]),t.d(5120,t.w,function(l){return[l]},[d.h]),t.d(4608,f.a,f.a,[s.i]),t.d(512,c.d,c.d,[]),t.d(1024,t.x,_.p,[]),t.d(1024,t.y,function(){return[d.k()]},[]),t.d(512,d.j,d.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[_.q(l,n),d.l(u)]},[[2,_.r],[2,t.y],d.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,_.s,_.s,[[3,_.s]]),t.d(512,s.k,s.k,[]),t.d(1024,d.m,d.n,[[3,d.c]]),t.d(512,d.o,d.p,[]),t.d(512,d.q,d.q,[]),t.d(256,d.r,{},[]),t.d(1024,c.e,d.s,[c.f,[2,c.g],d.r]),t.d(512,c.h,c.h,[c.e]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,d.t,function(){return[[{path:"",component:p.a},{path:"followers",component:h.a}]]},[]),t.d(1024,d.c,d.u,[t.D,d.o,d.q,c.h,t.v,t.t,t.u,d.t,d.r,[2,d.v],[2,d.w]]),t.d(512,d.x,d.x,[[2,d.m],[2,d.c]]),t.d(512,e.a,e.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"75cc":function(l,n,u){"use strict";var t=u("p5Ee");u.d(n,"a",function(){return e});var e=function(){function l(){this.navBarColor=t.a.navigationBarColor}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},ECCM:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="Deployment demo"}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},JdMA:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"QTq/":function(l,n,u){"use strict";var t=u("BkNc"),e=u("XeAJ"),i=u("bKpL"),r=(u.n(i),u("vJ3t")),o=(u.n(r),u("5v8a")),a=(u.n(o),u("Pic8"));u.n(a);u.d(n,"a",function(){return c});var c=function(){function l(l,n){this.route=l,this.service=n}return l.prototype.ngOnInit=function(){var l=this;i.Observable.combineLatest([this.route.paramMap,this.route.queryParamMap]).switchMap(function(n){n[0].get("id"),n[1].get("page");return l.service.getFollowers()}).subscribe(function(n){return l.followers=n})},l.ctorParameters=function(){return[{type:t.a},{type:e.a}]},l}()},XeAJ:function(l,n,u){"use strict";var t=u("CPp0"),e=u("5v8a");u.n(e);u.d(n,"a",function(){return i});var i=function(){function l(l){this.http=l,this._url="https://api.github.com/users/mosh-hamedani/followers"}return l.prototype.getFollowers=function(){return this.http.get(this._url).map(function(l){return l.json()})},l.ctorParameters=function(){return[{type:t.i}]},l}()},YfjE:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},ZErz:function(l,n,u){"use strict";function t(l){return r._23(0,[(l()(),r._24(0,0,null,null,4,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),r._26(-1,null,["\n  "])),(l()(),r._24(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r._26(3,null,["\n    Welcome to ","!\n  "])),(l()(),r._26(-1,null,["\n  \n"])),(l()(),r._26(-1,null,["\n"])),(l()(),r._24(6,0,null,null,37,"div",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n   "])),(l()(),r._24(8,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r._26(-1,null,["GitHub deployment steps:"])),(l()(),r._26(-1,null,[" \n    "])),(l()(),r._24(11,0,null,null,31,"ol",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Install xcode: xcode-select --install (if required)"])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Set Github origin: git remote add origin https://github.com/jags1891/followers-app.git"])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Push code to repository: git push origin master (enter username/password for github when prompted)"])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(22,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Install the package: sudo npm i -g angular-cli-ghpages"])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['Build: ng build --prod --base-href="http://jags1891.github.io/followers-app/"'])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(28,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Publish: sudo ngh"])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(31,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Steps 5,6 can be replaced by creating a custom command in scripts object in package.json.\n          "])),(l()(),r._24(33,0,null,null,7,"ul",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n            "])),(l()(),r._24(35,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['Add: "deploy-gh": "ng build --prod --base-href=\'https://jags1891.github.io/followers-app//\' && sudo ngh"'])),(l()(),r._26(-1,null,["\n            "])),(l()(),r._24(38,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Run this command: npm run deploy:gh"])),(l()(),r._26(-1,null,["\n          "])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._26(-1,null,["\n    "])),(l()(),r._26(-1,null,["\n"])),(l()(),r._26(-1,null,["\n\n"])),(l()(),r._24(45,0,null,null,40,"div",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n    "])),(l()(),r._24(47,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Firebase deployment steps:"])),(l()(),r._26(-1,null,[" \n     "])),(l()(),r._24(50,0,null,null,34,"ol",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(52,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Install tools: sudo npm i -g firebase-tools"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(55,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Login: firebase login"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(58,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Initialize Firebase: firebase init -> select hosting by using up/down keys.-> select the app if you already created one or create new"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(61,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Open the file firebase.json -> add \n         "])),(l()(),r._24(63,0,null,null,1,"pre",[["ngNonBindable",""]],null,null,null,null,null)),(l()(),r._26(-1,null,[' \n          {{ "hosting": {"public": "dist","rewrites": [{"source": "**","destination": "/index.html"}]}}\n        '])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Build: ng build --prod"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(70,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Publish: firebase deploy"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(73,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["To eliminate typing too many commands: Open Package.json\n          "])),(l()(),r._24(75,0,null,null,7,"ul",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(77,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['Add: "deploy-firebase": "ng build --prod && firebase deploy"'])),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(80,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Run this command: npm run deploy-firebase"])),(l()(),r._26(-1,null,["\n            "])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._26(-1,null,["\n     "])),(l()(),r._26(-1,null,["\n "])),(l()(),r._26(-1,null,["\n\n "])),(l()(),r._24(87,0,null,null,66,"div",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n    "])),(l()(),r._24(89,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Heroku deployment steps:"])),(l()(),r._26(-1,null,[" \n     "])),(l()(),r._24(92,0,null,null,60,"ol",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(94,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Install Heroku cli: check version: heroku --version"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(97,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Login: heroku login"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(100,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Create a new app: heroku create [appname]/ heroku create (heroku will assign random name to the app)-> heroku open"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(103,0,null,null,13,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,[" Open Package.json and move the following dependencies from dev dependencies to dependencies\n          "])),(l()(),r._24(105,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(107,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['"@angular/cli": "1.2.4",'])),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(110,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['"@angular/compiler-cli": "^4.0.0",'])),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(113,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,[' "typescript": "~2.3.3"'])),(l()(),r._26(-1,null,["\n            "])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(118,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['Add entry "postinstall":"ng build --prod", to the scripts object in package.json.'])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(121,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["If you are using express as a backend server, run : npm i express --save"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(124,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['change "start": "ng serve" in scripts section of package.json to "node server.js"'])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(127,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['Commit the changes to Git: git add .-> git commit -m "Prepare for heroku"'])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(130,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["run -> git remote: you will see heroku and origin"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(133,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["run -> git push heroku master"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(136,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["run -> heroku open"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(139,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Incase of any issuee, run -> heroku logs -t"])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._24(142,0,null,null,9,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,['As a best practice add a section "engines" in the package.json\n          '])),(l()(),r._24(144,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),r._26(-1,null,["\n              "])),(l()(),r._24(146,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),r._26(-1,null,["Example: "])),(l()(),r._24(148,0,null,null,1,"pre",[["ngNonBindable",""]],null,null,null,null,null)),(l()(),r._26(-1,null,[' \n                  "engines": {{\n                    "node":"7.10.0",\n                    "npm": "4.2.0"\n                  }}\n                '])),(l()(),r._26(-1,null,["\n            "])),(l()(),r._26(-1,null,["\n       "])),(l()(),r._26(-1,null,["\n       \n     "])),(l()(),r._26(-1,null,["\n "])),(l()(),r._26(-1,null,["\n"]))],null,function(l,n){l(n,3,0,n.component.title)})}function e(l){return r._23(0,[(l()(),r._24(0,0,null,null,1,"app-home",[],null,null,null,t,c)),r._25(1,114688,null,0,o.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("JdMA"),r=u("/oeL"),o=u("ECCM");u.d(n,"a",function(){return _});var a=[i.a],c=r._22({encapsulation:0,styles:a,data:{}}),_=r._27("app-home",o.a,e,{},{},[])},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),i=u("+h1B"),r=u("fc+i");e.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(i.a)},lF9t:function(l,n,u){"use strict";function t(l){return r._23(0,[(l()(),r._24(0,0,null,null,31,"nav",[["class","navbar navbar-default"]],[[4,"backgroundColor",null]],null,null,null,null)),(l()(),r._26(-1,null,["\n  "])),(l()(),r._24(2,0,null,null,28,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),r._26(-1,null,["\n    "])),(l()(),r._24(4,0,null,null,25,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(l()(),r._26(-1,null,["\n      "])),(l()(),r._24(6,0,null,null,22,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),r._26(-1,null,["\n        "])),(l()(),r._24(8,0,null,null,9,"li",[["routerLinkActive","active"]],null,null,null,null,null)),r._25(9,1720320,null,2,o.z,[o.c,r.P,r.O,r.T],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),r._28(603979776,1,{links:1}),r._28(603979776,2,{linksWithHrefs:1}),r._29(12,{exact:0}),(l()(),r._26(-1,null,["\n          "])),(l()(),r._24(14,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==r._30(l,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),r._25(15,671744,[[2,4]],0,o.A,[o.c,o.a,a.e],{routerLink:[0,"routerLink"]},null),(l()(),r._26(-1,null,["Home"])),(l()(),r._26(-1,null,["\n        "])),(l()(),r._26(-1,null,["\n        "])),(l()(),r._24(19,0,null,null,8,"li",[["routerLinkActive","active"]],null,null,null,null,null)),r._25(20,1720320,null,2,o.z,[o.c,r.P,r.O,r.T],{routerLinkActive:[0,"routerLinkActive"]},null),r._28(603979776,3,{links:1}),r._28(603979776,4,{linksWithHrefs:1}),(l()(),r._26(-1,null,["\n          "])),(l()(),r._24(24,0,null,null,2,"a",[["routerLink","/followers"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==r._30(l,25).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),r._25(25,671744,[[4,4]],0,o.A,[o.c,o.a,a.e],{routerLink:[0,"routerLink"]},null),(l()(),r._26(-1,null,["Followers"])),(l()(),r._26(-1,null,["\n        "])),(l()(),r._26(-1,null,["\n      "])),(l()(),r._26(-1,null,["\n    "])),(l()(),r._26(-1,null,["\n  "])),(l()(),r._26(-1,null,["\n"]))],function(l,n){l(n,9,0,l(n,12,0,!0),"active");l(n,15,0,"/");l(n,20,0,"active");l(n,25,0,"/followers")},function(l,n){l(n,0,0,n.component.navBarColor),l(n,14,0,r._30(n,15).target,r._30(n,15).href),l(n,24,0,r._30(n,25).target,r._30(n,25).href)})}function e(l){return r._23(0,[(l()(),r._24(0,0,null,null,1,"navbar",[],null,null,null,t,s)),r._25(1,114688,null,0,c.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("YfjE"),r=u("/oeL"),o=u("BkNc"),a=u("qbdv"),c=u("75cc");u.d(n,"b",function(){return s}),n.a=t;var _=[i.a],s=r._22({encapsulation:0,styles:_,data:{}});r._27("navbar",c.a,e,{},{},[])},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0,navigationBarColor:"white"}},q4dy:function(l,n,u){"use strict";function t(l){return r._23(0,[(l()(),r._24(0,0,null,null,1,"navbar",[],null,null,null,o.a,o.b)),r._25(1,114688,null,0,a.a,[],null,null),(l()(),r._26(-1,null,["\n"])),(l()(),r._24(3,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._26(-1,null,["\n  "])),(l()(),r._24(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._25(6,212992,null,0,c.y,[c.q,r.W,r.e,[8,null],r.T],null,null),(l()(),r._26(-1,null,["\n"]))],function(l,n){l(n,1,0),l(n,6,0)},null)}function e(l){return r._23(0,[(l()(),r._24(0,0,null,null,1,"app-root",[],null,null,null,t,d)),r._25(1,49152,null,0,_.a,[],null,null)],null,null)}var i=u("NhKt"),r=u("/oeL"),o=u("lF9t"),a=u("75cc"),c=u("BkNc"),_=u("wQAS");u.d(n,"a",function(){return f});var s=[i.a],d=r._22({encapsulation:0,styles:s,data:{}}),f=r._27("app-root",_.a,e,{},{},[])},qG8o:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".media[_ngcontent-%COMP%]{margin-bottom:30px}"]},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},skOw:function(l,n,u){"use strict";function t(l){return o._23(0,[(l()(),o._24(0,0,null,null,15,"div",[["class","media"]],null,null,null,null,null)),(l()(),o._26(-1,null,["\n  "])),(l()(),o._24(2,0,null,null,12,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),o._26(-1,null,["\n    "])),(l()(),o._24(4,0,null,null,6,"h4",[["class","media-heading"]],null,null,null,null,null)),(l()(),o._26(-1,null,["\n      "])),(l()(),o._24(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._30(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._25(7,671744,null,0,a.A,[a.c,a.a,c.e],{routerLink:[0,"routerLink"]},null),o._31(8,3),(l()(),o._26(9,null,["",""])),(l()(),o._26(-1,null,["\n    "])),(l()(),o._26(-1,null,["\n    "])),(l()(),o._24(12,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),o._26(13,null,["",""])),(l()(),o._26(-1,null,["\n  "])),(l()(),o._26(-1,null,["\n"]))],function(l,n){l(n,7,0,l(n,8,0,"/followers",n.context.$implicit.id,n.context.$implicit.login))},function(l,n){l(n,6,0,o._30(n,7).target,o._30(n,7).href),l(n,9,0,n.context.$implicit.login),l(n,12,0,o._32(1,"",n.context.$implicit.html_url,"")),l(n,13,0,n.context.$implicit.html_url)})}function e(l){return o._23(0,[(l()(),o._33(16777216,null,null,1,null,t)),o._25(1,802816,null,0,c.n,[o.W,o._8,o.l],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.followers)},null)}function i(l){return o._23(0,[(l()(),o._24(0,0,null,null,1,"github-followers",[],null,null,null,e,f)),o._25(1,114688,null,0,_.a,[a.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var r=u("qG8o"),o=u("/oeL"),a=u("BkNc"),c=u("qbdv"),_=u("QTq/"),s=u("XeAJ");u.d(n,"a",function(){return p});var d=[r.a],f=o._22({encapsulation:0,styles:d,data:{}}),p=o._27("github-followers",_.a,i,{},{},[])},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="app"}return l}()}},[0]);