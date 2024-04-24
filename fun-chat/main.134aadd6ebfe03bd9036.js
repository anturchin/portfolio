(()=>{"use strict";var e,t,s={385:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},226:(e,t,s)=>{s.d(t,{Y:()=>r});class r{constructor(e){this.element=document.createElement(e.tag),e.classNames&&this.setCssSelector(e.classNames),e.textContent&&this.setTextContent(e.textContent),e.callback&&this.setCallback(e.callback)}getElement(){return this.element}addInnerElement(e){e instanceof r?this.element.append(e.getElement()):this.element.append(e)}setCssSelector(e){e.forEach((e=>{this.element.classList.add(e)}))}setTextContent(e){this.element.textContent=e}setCallback(e){this.element.addEventListener("click",e)}}},624:(e,t,s)=>{s.d(t,{d:()=>r});class r{static saveUserData({id:e,login:t,password:s}){const r={id:e,login:t,password:s},a=JSON.stringify(r);sessionStorage.setItem("userData",a)}static getUserData(){const e=sessionStorage.getItem("userData");return e?JSON.parse(e):null}static removeUserData(){sessionStorage.removeItem("userData")}static generateRequestId(){let e="";for(let t=0;t<10;t+=1)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}}},766:(e,t,s)=>{s.d(t,{S:()=>a});var r=s(226);class a{constructor(e){this.viewHtmlElement=this.createElement(e)}createElement(e){return new r.Y(e)}getElement(){return this.viewHtmlElement.getElement()}addInnerElement(e){this.viewHtmlElement.addInnerElement(e)}render(e){console.log(e)}}},249:(e,t,s)=>{e.exports=s.p+"images/apple-touch-icon..png"},912:(e,t,s)=>{e.exports=s.p+"images/favicon-16x16..png"},780:(e,t,s)=>{e.exports=s.p+"images/favicon-32x32..png"}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return s[e](n,n.exports,a),n.exports}a.m=s,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[])),a.u=e=>e+"."+{424:"ac6268302f089c5baf8b",920:"0ce57c25927bcad1ea95",962:"4b4887876fa9372c2c0e",988:"92f6600ef0345d9f3cfd"}[e]+".js",a.miniCssF=e=>"css/"+e+"."+{424:"eae822c1",920:"01393c87",962:"c6b09662",988:"6521a4df"}[e]+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="fun-chat:",a.l=(s,r,n,i)=>{if(e[s])e[s].push(r);else{var o,l;if(void 0!==n)for(var h=document.getElementsByTagName("script"),c=0;c<h.length;c++){var d=h[c];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+n){o=d;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+n),o.src=s),e[s]=[r];var u=(t,r)=>{o.onerror=o.onload=null,clearTimeout(g);var a=e[s];if(delete e[s],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var r=s.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=s[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{if("undefined"!=typeof document){var e={792:0};a.f.miniCss=(t,s)=>{e[t]?s.push(e[t]):0!==e[t]&&{424:1,920:1,962:1,988:1}[t]&&s.push(e[t]=(e=>new Promise(((t,s)=>{var r=a.miniCssF(e),n=a.p+r;if(((e,t)=>{for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var a=(i=s[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){var i;if((a=(i=n[r]).getAttribute("data-href"))===e||a===t)return i}})(r,n))return t();((e,t,s,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",a.nc&&(i.nonce=a.nc),i.onerror=i.onload=s=>{if(i.onerror=i.onload=null,"load"===s.type)r();else{var a=s&&s.type,o=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+o+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=o,i.parentNode&&i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,n,0,t,s)})))(t).then((()=>{e[t]=0}),(s=>{throw delete e[t],s})))}}})(),(()=>{a.b=document.baseURI||self.location.href;var e={792:0};a.f.j=(t,s)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var n=new Promise(((s,a)=>r=e[t]=[s,a]));s.push(r[2]=n);var i=a.p+a.u(t),o=new Error;a.l(i,(s=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r[1](o)}}),"chunk-"+t,t)}};var t=(t,s)=>{var r,n,[i,o,l]=s,h=0;if(i.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);l&&l(a)}for(t&&t(s);h<i.length;h++)n=i[h],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},s=self.webpackChunkfun_chat=self.webpackChunkfun_chat||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),(()=>{var e=a(385),t=a.n(e),s=new URL(a(249),a.b),r=new URL(a(780),a.b),n=new URL(a(912),a.b);t()(s),t()(r),t()(n);var i=a(624);class o{constructor(e){this.router=e,this.handleHashChange=this.handleHashChange.bind(this),this.clearHash(),this.setupEventListener(),this.handleHashChange()}clearHash(){window.location.hash=""}updateHashUrl(e){window.location.hash=e}getHashUrl(){const{hash:e}=window.location;return e.slice(1)}handleHashChange(){const e=i.d.getUserData();if(!this.getHashUrl())return e?void this.updateHashUrl("chat"):void this.updateHashUrl("login");if(!e&&"chat"===this.getHashUrl())return void this.updateHashUrl("login");const t=this.router.findRoute(this.getHashUrl());if(t){if(e&&"login"===this.getHashUrl())return void this.updateHashUrl("chat");t.callback()}else this.updateHashUrl("not-found")}setupEventListener(){window.addEventListener("hashchange",this.handleHashChange)}}class l{constructor({path:e,callback:t}){this.path=e,this.callback=t}}class h{constructor(e){this.routes=[],this.addRoute(e),this.hashRouter=new o(this)}addRoute(e){e.forEach((e=>this.routes.push(new l(e))))}findRoute(e){return this.routes.find((t=>t.path===e))}showNotFoundPage(){var e;null===(e=this.findRoute("not-found"))||void 0===e||e.callback()}updateContentForCurrentRoute(){var e;const t=this.hashRouter.getHashUrl(),s=null===(e=this.findRoute(t))||void 0===e?void 0:e.callback;s&&s()}navigate(e){this.findRoute(e)?this.hashRouter.updateHashUrl(e):this.showNotFoundPage()}}class c{constructor(){this.user=null,this.usersActive=[],this.usersInActive=[],this.allUsers=[],this.selectedUserMessages=new Map,this.userObservers=new Map,this.messageObservers=new Map;const e=i.d.getUserData();e&&(this.user=Object.assign(Object.assign({},e),{isLogined:!0}))}clearSelectedUserMessages(){this.selectedUserMessages=new Map}registerUserObserver(e,t){this.userObservers.set(e,t)}removeUserObserver(e){this.userObservers.delete(e)}notifyUserObservers(e){this.userObservers.forEach((t=>t.updateUsers(e)))}registerMessageObserver(e,t){this.messageObservers.set(e,t)}removeMessageObserver(e){this.messageObservers.delete(e)}notifyMessageObservers(e,t){this.messageObservers.forEach((s=>s.initialMessages(e,t)))}notifyNewMessageObservers(e){this.messageObservers.forEach((t=>t.updateMessages(e.slice(-1))))}addUserToAllUsers(e){this.changeStatusUser(e)||this.allUsers.push(e),this.notifyUserObservers(e)}changeStatusUserFromAllUsers(e){this.changeStatusUser(e),this.notifyUserObservers(e)}setAllUsers(e){const t=[...e];t.sort(((e,t)=>e.isLogined===t.isLogined?0:e.isLogined?-1:1)),this.allUsers=[...t]}updateStatusMessage(e){this.selectedUserMessages.forEach((t=>{t.forEach((t=>{t.id===e.id&&(t.status.isDelivered=e.status.isDelivered)}))}))}updateReadStatusMessage(e){this.selectedUserMessages.forEach((t=>{t.forEach((t=>{t.id===e.id&&(t.status.isReaded=e.status.isReaded)}))}))}addMessageToSelectedUserMessages(e){const t=e.from,s=this.selectedUserMessages.get(t)||[];s.some((t=>t.id===e.id))||(s.push(e),this.selectedUserMessages.set(t,s),this.notifyNewMessageObservers(s))}getMessages(){return this.selectedUserMessages}setMessages(e,t,s){this.selectedUserMessages.has(t)||this.selectedUserMessages.set(t,[]);const r=this.selectedUserMessages.get(t)||[],a=e.filter((e=>!r.some((t=>t.id===e.id)))),n=[...r,...a];n.sort(((e,t)=>e.datetime-t.datetime)),this.selectedUserMessages.set(t,n);const i=this.findUserIndex(t),o=this.allUsers[i];s&&this.notifyMessageObservers(n,o)}removeMessageById(e){this.selectedUserMessages.forEach(((t,s)=>{const r=t.filter((t=>t.id!==e));this.selectedUserMessages.set(s,r)}))}getAllUsers(){return this.allUsers}setUsersActive(e){this.usersActive=e}getUsersActive(){return this.usersActive}setUsersInActive(e){this.usersInActive=e}getUsersInActive(){return this.usersInActive}setUser(e){this.user=e}getUser(){return this.user||null}changeStatusUser(e){const t=this.findUserIndex(e.login);return-1!==t&&(this.allUsers[t].isLogined=e.isLogined,!0)}findUserIndex(e){return this.allUsers.findIndex((t=>t.login===e))}}var d=a(766);class u extends d.S{constructor(){super({tag:"main",classNames:["main"]})}updateRender(e){this.getElement().innerHTML="",this.getElement().append(e.getElement())}}class g{constructor(e,t,s){this.errorAuth=null,this.webSocketService=e,this.router=t,this.state=s}getState(){return this.state}login(e,t,s,r){this.errorAuth=r||null;const a={id:e,type:"USER_LOGIN",payload:{user:{login:t,password:s}}};this.state.setUser({id:e,login:t,password:s,isLogined:!1}),this.webSocketService.sendRequest(a,this)}handleUserLogin(e){const{isLogined:t}=e.payload.user,s=this.state.getUser();if(s){this.state.setUser(Object.assign(Object.assign({},s),{isLogined:t})),this.router.navigate("chat");const{id:e,login:r,password:a}=s;this.saveUserDataToLocalStorage({id:e,login:r,password:a})}}handleUserExternal(e){this.state.addUserToAllUsers(e)}handleErrorMessage(e){var t;if(e.payload&&"error"in e.payload){const s=e.payload.error;null===(t=this.errorAuth)||void 0===t||t.showMessage(s),i.d.removeUserData()}}saveUserDataToLocalStorage({id:e,login:t,password:s}){i.d.saveUserData({id:e,login:t,password:s})}}class p{constructor(e,t,s){this.webSocketService=e,this.router=t,this.state=s}logout(){const e=this.state.getUser();if(e){const t={id:e.id,type:"USER_LOGOUT",payload:{user:{login:e.login,password:e.password}}};this.webSocketService.sendRequest(t,this)}}handleUserLogout(){i.d.removeUserData(),this.state.setUser(null),this.router.navigate("login")}handleUserExternalLogout(e){this.state.changeStatusUserFromAllUsers(e)}handleErrorMessage(e){if(e.payload&&"error"in e.payload){const t=e.payload.error;console.error(t)}}}class v{constructor(e,t,s){this.selectedUserName=[],this.statusObservers=new Map,this.shouldNotifyObservers=!1,this.webSocketService=e,this.router=t,this.state=s}setCallbackUpdateReadStatusMsg(e){this.updateReadStatusMsg=e}setCallbackDeleteMessage(e){this.deleteMessage=e}registerStatusObserver(e,t){this.statusObservers.set(e,t)}removeStatusObserver(e){this.statusObservers.delete(e)}notifyStatusObservers(e){this.statusObservers.forEach((t=>t.updateStatus(e)))}sendRequestToReceiveMessages(e,t){const s={id:i.d.generateRequestId(),type:"MSG_SEND",payload:{message:{to:e,text:t}}};this.webSocketService.sendRequest(s,this)}handleResponseWithReceivedMessages(e){this.state.addMessageToSelectedUserMessages(e)}sendRequestHistoryMessages(e,t,s){this.shouldNotifyObservers=t,this.updateCounter=s,this.selectedUserName.push(e);const r={id:i.d.generateRequestId(),type:"MSG_FROM_USER",payload:{user:{login:e}}};this.webSocketService.sendRequest(r,this)}handleResponseHistoryMessages(e){var t;const s=this.selectedUserName.shift();s&&this.state.setMessages(e,s,this.shouldNotifyObservers),null===(t=this.updateCounter)||void 0===t||t.call(this)}handleResponseDeliveryStatusChange(e){this.state.updateStatusMessage(e),this.notifyStatusObservers(e)}sendRequestReadMessage(e,t){this.updateReadStatusMsg=t;const s={id:i.d.generateRequestId(),type:"MSG_READ",payload:{message:{id:e}}};this.webSocketService.sendRequest(s,this)}handleResponseReadStatusChange(e){var t;this.state.updateReadStatusMessage(e),null===(t=this.updateReadStatusMsg)||void 0===t||t.call(this,e)}sendRequestDeleteMessage(e,t){this.deleteMessage=t;const s={id:i.d.generateRequestId(),type:"MSG_DELETE",payload:{message:{id:e}}};this.webSocketService.sendRequest(s,this)}handleResponseDeleteMessage(e){var t;this.state.removeMessageById(e.id),null===(t=this.deleteMessage)||void 0===t||t.call(this,e)}handleErrorMessage(e){if(e.payload&&"error"in e.payload){const t=e.payload.error;console.error(t),this.router.navigate("login")}}}class S{constructor(e,t,s){this.webSocketService=e,this.router=t,this.state=s}fetchAllUsers(e,t){this.updateUserList=e,this.secondUpdateUserList=t,this.sendRequest()}sendRequest(){const e={id:i.d.generateRequestId(),type:"USER_ACTIVE",payload:null},t={id:i.d.generateRequestId(),type:"USER_INACTIVE",payload:null};this.webSocketService.sendRequest(e,this),this.webSocketService.sendRequest(t,this)}handleUsers(e){var t,s;if("USER_ACTIVE"===e.type){const t=e.payload?e.payload.users:[];return void this.state.setUsersActive(t)}if("USER_INACTIVE"===e.type){const t=e.payload?e.payload.users:[];this.state.setUsersInActive(t)}const r=i.d.getUserData(),a=[...this.state.getUsersActive(),...this.state.getUsersInActive()].filter((e=>e.login!==(null==r?void 0:r.login)));this.state.setAllUsers(a),null===(t=this.updateUserList)||void 0===t||t.call(this,this.state.getAllUsers()),null===(s=this.secondUpdateUserList)||void 0===s||s.call(this)}handleErrorMessage(e){if(e.payload&&"error"in e.payload){const t=e.payload.error;console.error(t)}}}class f{constructor(e,t,s){this.webSocketService=e,this.router=t,this.state=s,this.logoutService=new p(this.webSocketService,this.router,this.state),this.userService=new S(this.webSocketService,this.router,this.state),this.messageReceiveService=new v(this.webSocketService,this.router,this.state)}getLogoutService(){return this.logoutService}getUserService(){return this.userService}getMessageReceiveService(){return this.messageReceiveService}handleErrorMessage(e){if(e.payload&&"error"in e.payload){const t=e.payload.error;console.error(t)}}}class U{constructor(e,t,s){this.lastRequest=null,this.firstRenderCompleted=!1,this.socketUrl=e,this.socket=new WebSocket(this.socketUrl),this.loginService=new g(this,t,s),this.chatService=new f(this,t,s),this.router=t,this.state=s,this.handleMessage=this.handleMessage.bind(this),this.handleClose=this.handleClose.bind(this),this.handleError=this.handleError.bind(this),this.setupEventListener()}getState(){return this.state}getChatService(){return this.chatService}getLoginService(){return this.loginService}sendRequest(e,t){return new Promise((s=>{const r=()=>{this.socket.send(JSON.stringify(e)),this.lastRequest=t,s()};this.socket.readyState===WebSocket.OPEN?r():this.socket.addEventListener("open",r)}))}close(){this.socket.close()}handleUserLoginAndLogout(e){const t=this.chatService.getLogoutService();if("USER_LOGIN"!==e.type)if("USER_EXTERNAL_LOGIN"!==e.type)if("USER_LOGOUT"!==e.type){if("USER_EXTERNAL_LOGOUT"===e.type){const{user:s}=e.payload;t.handleUserExternalLogout(s)}}else t.handleUserLogout();else{const{user:t}=e.payload;this.loginService.handleUserExternal(t)}else this.loginService.handleUserLogin(e)}handleUsers(e){const t=this.chatService.getUserService();"USER_ACTIVE"!==e.type?"USER_INACTIVE"===e.type&&t.handleUsers(e):t.handleUsers(e)}handleReceivedMessages(e){const t=this.chatService.getMessageReceiveService();if("MSG_SEND"!==e.type)if("MSG_FROM_USER"!==e.type)if("MSG_DELIVER"!==e.type){if("MSG_READ"===e.type){const{message:s}=e.payload;t.handleResponseReadStatusChange(s)}if("MSG_DELETE"===e.type){const{message:s}=e.payload;t.handleResponseDeleteMessage(s)}}else{const{message:s}=e.payload;t.handleResponseDeliveryStatusChange(s)}else{const{messages:s}=e.payload;t.handleResponseHistoryMessages(s)}else{const{message:s}=e.payload;t.handleResponseWithReceivedMessages(s)}}handleMessage(e){const t=JSON.parse(e.data);"USER_LOGIN"!==t.type&&"USER_EXTERNAL_LOGIN"!==t.type&&"USER_LOGOUT"!==t.type&&"USER_EXTERNAL_LOGOUT"!==t.type?"USER_ACTIVE"!==t.type&&"USER_INACTIVE"!==t.type?("MSG_SEND"!==t.type&&"MSG_FROM_USER"!==t.type&&"MSG_DELIVER"!==t.type&&"MSG_READ"!==t.type&&"MSG_DELETE"!==t.type||this.handleReceivedMessages(t),"ERROR"===t.type&&this.lastRequest&&(this.lastRequest.handleErrorMessage(t),this.lastRequest=null)):this.handleUsers(t):this.handleUserLoginAndLogout(t)}onMessage(){this.socket.addEventListener("message",this.handleMessage)}onConnection(){this.clearReconnectInterval(),this.socket.addEventListener("open",(()=>{const e=document.querySelector(".loader");e&&e.classList.remove("show");const t=i.d.getUserData();if(t){const{id:e,login:s,password:r}=t;this.loginService.login(e,s,r)}console.log("WebSocket connection established")}))}handleClose(e){this.showLoader(),console.log(`WebSocket connection ${e.type} code: ${e.code}`),this.reconnect()}handleError(e){this.showLoader(),console.log(`WebSocket connection ${e.type}`),this.reconnect()}reconnect(){this.reconnectIntervalId||(this.reconnectIntervalId=setInterval((()=>{this.socket=new WebSocket(this.socketUrl),this.setupEventListener(),this.state.clearSelectedUserMessages(),this.router.updateContentForCurrentRoute()}),3e3))}clearReconnectInterval(){this.reconnectIntervalId&&(clearInterval(this.reconnectIntervalId),this.reconnectIntervalId=void 0)}showLoader(){const e=document.querySelector(".loader");e&&e.classList.add("show")}onCloseConnection(){this.socket.addEventListener("close",this.handleClose)}onErrorConnection(){this.socket.addEventListener("error",this.handleError)}setupEventListener(){this.onConnection(),this.onMessage(),this.onCloseConnection(),this.onErrorConnection()}}class m extends d.S{constructor(){super({tag:"div",classNames:["loader__container"]})}}class E extends d.S{constructor(){super({tag:"div",classNames:["loader__spinner"]})}}class y extends d.S{constructor(){super({tag:"p",classNames:["loader__text"],textContent:"Please wait, connecting to the server..."})}}class b extends d.S{constructor(){super({tag:"div",classNames:["loader"]}),this.setupLoader()}setupLoader(){const e=(new m).getElement(),t=(new y).getElement(),s=(new E).getElement();e.append(t,s),this.addInnerElement(e)}}var R=function(e,t,s,r){return new(s||(s=Promise))((function(a,n){function i(e){try{l(r.next(e))}catch(e){n(e)}}function o(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}l((r=r.apply(e,t||[])).next())}))};(new class{constructor(){this.state=new c,this.router=new h(this.initialRoutes()),this.socket=new U("ws://localhost:4000",this.router,this.state),this.main=new u}render(){const e=(new b).getElement();document.body.append(this.main.getElement(),e)}updateContent(e){this.main.updateRender(e)}initialRoutes(){return[{path:"login",callback:()=>R(this,void 0,void 0,(function*(){const{Login:e}=yield a.e(920).then(a.bind(a,920));this.updateContent(new e(this.socket,this.router))}))},{path:"chat",callback:()=>R(this,void 0,void 0,(function*(){const{Chat:e}=yield a.e(424).then(a.bind(a,202));this.updateContent(new e(this.socket,this.router))}))},{path:"about",callback:()=>R(this,void 0,void 0,(function*(){const{About:e}=yield a.e(962).then(a.bind(a,962));this.updateContent(new e(this.router))}))},{path:"not-found",callback:()=>R(this,void 0,void 0,(function*(){const{NotFount:e}=yield a.e(988).then(a.bind(a,988));this.updateContent(new e)}))}]}}).render()})()})();