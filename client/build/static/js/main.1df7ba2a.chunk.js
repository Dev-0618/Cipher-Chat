(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){},140:function(e,t,a){e.exports=a.p+"static/media/profile.cae08926.jpg"},144:function(e,t,a){e.exports=a(310)},149:function(e,t,a){},150:function(e,t,a){},194:function(e,t){},196:function(e,t){},231:function(e,t){},232:function(e,t){},274:function(e,t,a){},275:function(e,t,a){},299:function(e,t){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(138),u=a.n(c),s=(a(149),a(150),function(){return r.a.createElement("footer",{className:"container"},r.a.createElement("small",null,"CipherChat | ",r.a.createElement("a",{href:"https://github.com/Dwyte/CipherChat"},"Source Code")," ",r.a.createElement("br",null),r.a.createElement("small",null,"Global Channel (Not Encrypted, 100 messages max)")," ",r.a.createElement("br",null),r.a.createElement("small",null,"Private Channel (Encrypted, 10 messages max)")," ",r.a.createElement("br",null)))}),o=a(4),l=a.n(o),i=a(10),m=a(5),p=a(39),f=a.n(p),h={get:f.a.get,post:f.a.post,put:f.a.put,delete:f.a.delete},v="/api/users",b=function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(v);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post(v,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark(function e(t,a){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.put("".concat(v,"/").concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("".concat(v,"/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",Boolean(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("".concat(v,"/auth/"),t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("userToken"),a={headers:{"x-auth-token":t}},e.abrupt("return",h.get("".concat(v,"/auth"),a));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=a(21),S=a.n(j),k=S.a.SHA256,w=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(m.a)(a,2),u=c[0],s=c[1],o=Object(n.useState)(""),p=Object(m.a)(o,2),f=p[0],h=p[1],v=function(){var e=Object(i.a)(l.a.mark(function e(a){var n,r,c,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E(u);case 3:if(e.sent){e.next=6;break}return e.abrupt("return",alert("User with the username not found."));case 6:return n=k(u+f).toString(),r=k(n+f).toString(),localStorage.setItem("pvk_phrase",r),e.prev=9,e.next=12,y({auth:n});case 12:c=e.sent,s=c.data,localStorage.setItem("userToken",s),alert("Account authenticated!"),t.push("/chat"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(9),console.log(e.t0),localStorage.clear();case 23:case"end":return e.stop()}},e,null,[[9,19]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{className:"mb",type:"text",placeholder:"Pseudoname",value:u,onChange:function(e){var t=e.target;return s(t.value)},pattern:".{2,}",required:!0,title:"2 characters or more"}),r.a.createElement("input",{className:"mb",type:"password",placeholder:"Secret Password",value:f,onChange:function(e){var t=e.target;return h(t.value)},pattern:".{8,}",required:!0,title:"must be atleast 8 characters"}),r.a.createElement("input",{className:"btn-dark",type:"submit",value:"Login"}),r.a.createElement("a",{href:"/register"},"Don't have an account yet?")))},x=a(11),N=a.n(x),C=S.a.SHA256,D=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(m.a)(a,2),u=c[0],s=c[1],o=Object(n.useState)(""),p=Object(m.a)(o,2),f=p[0],h=p[1],v=function(){var e=Object(i.a)(l.a.mark(function e(a){var n,r,c,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E(u);case 3:if(!e.sent){e.next=6;break}return e.abrupt("return",alert("User with the username already exists"));case 6:return n=C(u+f).toString(),r=C(n+f).toString(),c=N.a.generateRSAKey(r,1024),s=N.a.publicKeyString(c),e.prev=10,e.next=13,d({username:u,auth:n,publicKey:s});case 13:alert("Account has been created."),t.push("/login"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[10,17]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{className:"mb",type:"text",placeholder:"Pseudoname",value:u,onChange:function(e){var t=e.target;return s(t.value)},pattern:".{2,}",required:!0,title:"2 characters or more"}),r.a.createElement("input",{className:"mb",type:"password",placeholder:"Secret Password",value:f,onChange:function(e){var t=e.target;return h(t.value)},pattern:".{8,}",required:!0,title:"must be atleast 8 characters"}),r.a.createElement("input",{className:"btn-dark",type:"submit",value:"Register"}),r.a.createElement("a",{href:"/login"},"Already have an account?")))},M=a(23),K=a(143),A=a(51),P=(a(274),a(275),function(e){var t=e.username,a=e.msgObj,c=e.isSecret,u=e.userKeys,s=e.prevMsg,o=e.decryptMsg,l=Object(n.useState)(!1),i=Object(m.a)(l,2),p=i[0],f=i[1],h=a.name,v=a.message,b=a.timestamp,d=a.decrypted;c&&(d||(h=N.a.decrypt(h,u.pvk).plaintext)===t&&o(a));var g=h===t?"float-right max-width":"",E=h===t?"float-right text-align-right":"",y=h===t?"You":h,O=function(){if(!s)return!1;var e=s.name,t=s.decrypted;return(c?t?e:N.a.decrypt(e,u.pvk).plaintext:e)===h};return r.a.createElement("div",{className:g},r.a.createElement("div",{id:"bubble-container",className:E},function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"displayName"},y));return O()?void 0:e}(),r.a.createElement("div",{id:"message-bubble",className:"pointer ".concat(O()?"mt-sm":""),onClick:c?d?function(){return f(!0)}:function(){c&&o(a)}:function(){return f(!0)},onMouseLeave:function(){return setTimeout(function(){return f(!1)},1250)}},c&&!d?r.a.createElement("i",{className:"fas fa-lock"}):v),r.a.createElement("br",null),p?function(){if(c&&!d)return r.a.createElement("div",{id:"timestamp"},"Decrypt");var e=new Date(b),t=e.getMonth(),a=e.getDay(),n=e.getDate(),u=e.getHours(),s=u<10?"0".concat(u):u,o=e.getMinutes(),l=o<10?"0".concat(o):o,i=["January","February","March","April","May","June","July","August","September","October","November","December"][t].slice(0,3),m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a].slice(0,3),p="".concat(i," ").concat(n,", ").concat(m," - ").concat(s,":").concat(l);return r.a.createElement("div",{id:"timestamp"},r.a.createElement("i",{class:"fas fa-caret-right"}),p)}():null))}),I=function(e){var t=e.sendMessage,a=Object(n.useState)(""),c=Object(m.a)(a,2),u=c[0],s=c[1],o=function(e){e.preventDefault(),""!==u&&(t(u),s(""))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message-form"},r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{value:u,onChange:function(e){var t=e.target;s(t.value)},placeholder:"Type a message...",type:"text",required:!0}))),r.a.createElement("div",{className:"message-submit"},r.a.createElement("button",{onClick:o},r.a.createElement("i",{className:"fas fa-paper-plane"}))))},F=a(139),T=a.n(F)()(""),B=function(e){var t=e.user,a=e.match,c=e.userKeys,u=Object(n.useState)([]),s=Object(m.a)(u,2),o=s[0],l=s[1],i=a.params.channel,p="global"!==i,f=p?10:100,h=p?Object(j.SHA256)(c.pbk).toString():void 0;Object(n.useEffect)(function(){return l([]),T.connect(),T.emit("get-chats",i,f,h),function(){T.disconnect()}},[i,c]),T.on("return-chats",function(e){b(e)}),T.on("new-message",function(e){if(!p){var t=[].concat(Object(A.a)(o),[e]).splice(-f);b(t)}}),T.on("new-secret-message",function(e){if(p){var t=[].concat(Object(A.a)(o),[e]).splice(-f);b(t)}});var v=function(e){var t=Object(A.a)(o),a=t.find(function(t){return t===e});a.name=N.a.decrypt(e.name,c.pvk).plaintext,a.timestamp=N.a.decrypt(e.timestamp,c.pvk).plaintext,a.message=N.a.decrypt(e.message,c.pvk).plaintext,a.decrypted=!0,l(t)},b=function(e){l(e),y()},d=function(e){var a=t.username,n=(new Date).toString(),r=localStorage.getItem("chatmate_pbk"),u=g({name:a,message:e,timestamp:n},c.pbk);T.emit("send-secret-msg-self",u);var s=g({name:a,message:e,timestamp:n},r);T.emit("send-secret-msg",s)},g=function(e,t){for(var a in e)e[a]=N.a.encrypt(e[a],t).cipher;return e.pbkHash=Object(j.SHA256)(t).toString(),e.channel=i,e},E=function(e){var a={name:t.username,channel:i,message:e,timestamp:new Date};T.emit("send-message",a)},y=function(){var e=document.getElementById("chatbox");e.scrollTop=e.scrollHeight};return r.a.createElement("div",{className:"grid-container chatbox-container"},r.a.createElement("div",{id:"chatbox"},function(){var e=null;return 0===o.length?r.a.createElement("div",{className:"chat-notif"},"No messages yet. Say hello!"):o.map(function(a){var n=r.a.createElement(P,{key:o.indexOf(a),username:t.username,userKeys:c,isSecret:p,msgObj:a,prevMsg:e,decryptMsg:v});return e=a,n})}()),r.a.createElement(I,{sendMessage:function(e){p?d(e):E(e)}}))},H=S.a.MD5,U=function(e){var t=e.user,a=e.currUser,n=e.history,c=e.setChannel,u=e.setPrivChannel;return r.a.createElement("div",{className:"container-item mb"},r.a.createElement("b",null,t.username),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=[t.publicKey,a.publicKey].sort(),r=H(e.join()).toString();localStorage.setItem("chatmate_pbk",t.publicKey),u(t.username),c(r),n.push("/chat/ch/"+r)}},r.a.createElement("i",{className:"fas fa-comment"}))))},_=(a(302),function(e){var t=e.user,a=e.history,c=e.setChannel,u=e.setPrivChannel,s=Object(n.useState)([]),o=Object(m.a)(s,2),p=o[0],f=o[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),d=v[0],g=v[1];Object(n.useEffect)(function(){!function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a=t.data,f(a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var E=p.filter(function(e){return e.username.match(new RegExp(d+".*","i"))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list mb"},E.map(function(e){return r.a.createElement(U,{key:p.indexOf(e),user:e,currUser:t,history:a,setChannel:c,setPrivChannel:u})})),r.a.createElement("input",{value:d,onChange:function(e){var t=e.target;return g(t.value)},placeholder:"Search for someone to chat..."}))}),q=(a(303),a(140)),J=a.n(q),L=function(){return r.a.createElement("div",{id:"display-pic"},r.a.createElement("img",{alt:"anon",src:J.a,width:"42"}))},R=function(e){var t=e.username;return r.a.createElement("div",{id:"display-name"},r.a.createElement("b",null,t||"Loading..."))},W=function(e){var t=e.bio,a=e.onSave,c=Object(n.useState)(!1),u=Object(m.a)(c,2),s=u[0],o=u[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),p=i[0],f=i[1],h=function(){return o(!s)};return Object(n.useEffect)(function(){f(t)},[t]),r.a.createElement("div",{id:"display-bio"},s?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{maxLength:"50",value:p,onChange:function(e){var t=e.target;return f(t.value)}}),r.a.createElement("i",{onClick:function(e){if(t===p)return h();a(p),h()},className:"fas fa-save"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("small",null,t||"bio"),r.a.createElement("i",{onClick:h,className:"fas fa-edit"})))},G=function(e){var t=e.user,a=e.onUpdateBio;return r.a.createElement("div",{className:"container grid-container"},r.a.createElement(L,null),r.a.createElement(R,{username:t.username}),r.a.createElement(W,{onSave:a,bio:t.bio}),r.a.createElement("div",{onClick:function(){localStorage.clear(),window.location="/"},id:"logout"},r.a.createElement("button",{className:"pointer"},r.a.createElement("i",{className:"fas fa-sign-out-alt"}))))},Y=(a(136),function(e){var t=e.fa,a=e.label,n=e.className,c=e.handleClick;return r.a.createElement("div",null,r.a.createElement("button",{onClick:c,className:n},r.a.createElement("i",{className:t})," ",a))}),$=function(e){var t=e.history,a=e.location,n=e.setChannel,c=e.privChannel,u=e.setPrivChannel;return r.a.createElement("div",{className:"container-item nav mb"},r.a.createElement("div",{className:"nav-grid"},r.a.createElement(Y,{fa:"fas fa-envelope",label:c,className:"/chat/ch/global"!==a.pathname?"active":"",handleClick:function(){u(""),t.push("/chat/search")}}),r.a.createElement(Y,{fa:"fas fa-globe",label:"Global",className:"/chat/ch/global"===a.pathname?"active":"",handleClick:function(){t.push("/chat/ch/global"),n("global")}})))},z=(a(304),function(e){var t=e.history,a=e.location,c=Object(n.useState)({}),u=Object(m.a)(c,2),s=u[0],o=u[1],p=Object(n.useState)("global"),f=Object(m.a)(p,2),h=f[0],v=f[1],b=Object(n.useState)({}),d=Object(m.a)(b,2),E=d[0],y=d[1],j=Object(n.useState)(""),S=Object(m.a)(j,2),k=S[0],w=S[1];Object(n.useEffect)(function(){var e=function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,a=t.data,o(a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();y(x()),e()},[]);var x=function(){console.log("get keys");var e=localStorage.getItem("pvk_phrase"),t=N.a.generateRSAKey(e,1024);return{pvk:t,pbk:N.a.publicKeyString(t)}},C=function(){var e=Object(i.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(K.a)({},s)).bio=t,e.prev=2,e.next=5,g(s._id,a);case 5:o(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{onUpdateBio:C,history:t,user:s}),r.a.createElement("div",{className:"container chat"},r.a.createElement($,{history:t,location:a,setChannel:v,privChannel:k,setPrivChannel:w}),r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/chat/ch/:channel",render:function(e){return r.a.createElement(B,Object.assign({},e,{user:s,channel:h,userKeys:E}))}}),r.a.createElement(M.b,{path:"/chat/list",render:function(e){return r.a.createElement(_,Object.assign({},e,{user:s,setChannel:v,setPrivChannel:w}))}}),r.a.createElement(M.a,{from:"/chat",to:"/chat/list"}))))});var Q=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/chat",component:z}),r.a.createElement(M.b,{path:"/login",component:w}),r.a.createElement(M.b,{path:"/register",component:D}),function(){var e=localStorage.getItem("pvk_phrase")&&localStorage.getItem("userToken");return Boolean(e)}()?r.a.createElement(M.a,{from:"/",to:"/chat"}):"",r.a.createElement(M.a,{from:"/",to:"/login"})),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(309);var V=a(50);u.a.render(r.a.createElement(V.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,1,2]]]);
//# sourceMappingURL=main.1df7ba2a.chunk.js.map