"use strict";(self.webpackChunkfun_chat=self.webpackChunkfun_chat||[]).push([[424],{202:(e,t,s)=>{s.r(t),s.d(t,{Chat:()=>V});var n=s(766);class a extends n.S{constructor(e,t){super({tag:"button",classNames:["btn__info"]}),this.router=t,this.handleClick=this.handleClick.bind(this),this.setupBtnInfo(e),this.setupEventListener()}handleClick(){this.router.navigate("about")}setupEventListener(){this.getElement().addEventListener("click",this.handleClick)}setupBtnInfo(e){this.getElement().textContent=e}}class i extends n.S{constructor(e){super({tag:"button",classNames:["btn__logout"]}),this.setupBtnLogout(e)}setupBtnLogout(e){this.getElement().textContent=e}}class r extends n.S{constructor(e="ann"){super({tag:"div",classNames:["chat__user"]}),this.setupUserName(e)}setupUserName(e){this.getElement().textContent=`user: ${e}`}}class l extends n.S{constructor(){super({tag:"div",classNames:["wrapper__title"]})}}class o extends n.S{constructor(e){super({tag:"h3",classNames:["header__title"]}),this.setupTitle(e)}setupTitle(e){this.getElement().textContent=e}}class h extends n.S{constructor(){super({tag:"div",classNames:["wrapper__btn"]})}}class g extends n.S{constructor(e){super({tag:"div",classNames:["chat__header"]}),this.userName=new r,this.btnInfo=new a("about",e),this.btnLogout=new i("logout"),this.setupHeader()}getUserName(){return this.userName}getBtnInfo(){return this.btnInfo}getBtnLogout(){return this.btnLogout}createBtnBlock(){const e=(new h).getElement();return e.append(this.btnInfo.getElement(),this.btnLogout.getElement()),e}createUserAndTitleBlock(){const e=new o("fun-chat").getElement(),t=(new l).getElement();return t.append(this.userName.getElement(),e),t}setupHeader(){const e=this.createUserAndTitleBlock(),t=this.createBtnBlock();this.getElement().append(e,t)}}class c extends n.S{constructor(){super({tag:"a",classNames:["footer__author"],textContent:"anturchin"}),this.setupAuthor()}setupAuthor(){this.getElement().href="https://github.com/anturchin",this.getElement().target="_blanc"}}const d=s.p+"images/rsschool..svg";class u extends n.S{constructor(){super({tag:"a",classNames:["footer__school"]}),this.setupSchool()}setupSchool(){this.getElement().href="https://rs.school/",this.getElement().target="_blanc";const e=document.createElement("img");e.src=d,this.addInnerElement(e)}}class m extends n.S{constructor(){super({tag:"div",classNames:["footer__year"],textContent:"2024"})}}class p extends n.S{constructor(){super({tag:"div",classNames:["chat__footer"]}),this.setupFooter()}setupFooter(){const e=(new c).getElement(),t=(new u).getElement(),s=(new m).getElement();this.getElement().append(t,e,s)}}class E extends n.S{constructor(){super({tag:"input",classNames:["search__input"]}),this.setupSearch()}setupSearch(){this.getElement().setAttribute("type","text"),this.getElement().setAttribute("placeholder","Search")}}class v extends n.S{constructor(e,t){super({tag:"li",classNames:t?["user__item","active"]:["user__item"],textContent:`${e}`}),this.counter=0,this.setupUserItem(e,t),this.updateCounterDisplay()}getCounter(){return this.counter}increaseCounter(){this.counter+=1,this.updateCounterDisplay()}decreaseCounter(){this.counter>0&&(this.counter-=1),this.updateCounterDisplay()}setCounter(e){this.counter=e,this.updateCounterDisplay()}resetCounter(){this.counter=0,this.updateCounterDisplay()}updateStatus(e){e?this.getElement().classList.add("active"):this.getElement().classList.remove("active"),this.getElement().setAttribute("data-active",""+(e?1:0))}updateCounterDisplay(){const e=this.getElement().querySelector(".counter");e&&(this.getElement().classList.contains("active")?e.classList.add("active"):e.classList.remove("active"),this.counter>0?(e.classList.remove("hidden"),e.textContent=`${this.counter}`):e.classList.add("hidden"))}setupUserItem(e,t){this.getElement().setAttribute("data-name",e),this.getElement().setAttribute("data-active",""+(t?1:0));const s=document.createElement("span");s.classList.add("counter","hidden"),this.addInnerElement(s)}}class C extends n.S{constructor(){super({tag:"ul",classNames:["user__list"]}),this.userItems=[]}moveToBottomInactiveUserItem(){this.userItems.forEach((e=>this.moveToBottomIfInactive(e.getElement())))}updateUserList(e){const t=this.findUserItem(e);if(t)return void t.updateStatus(e.isLogined);const s=new v(e.login,e.isLogined);this.userItems.push(s),this.addNewItemToUserList(s.getElement())}initialUserList(e){this.userItems=[];const t=this.getElement();for(;t.firstChild;)t.removeChild(t.firstChild);this.setUserItems(e)}getUserItems(){return this.userItems}setUserItems(e){this.userItems=e.map((e=>new v(e.login,e.isLogined))),this.userItems.forEach((e=>this.addInnerElement(e.getElement())))}findUserItem(e){return this.userItems.find((t=>t.getElement().getAttribute("data-name")===e.login))}moveToBottomIfInactive(e){const t=this.getElement();e.classList.contains("active")||(t.removeChild(e),t.insertAdjacentElement("beforeend",e))}addNewItemToUserList(e){const t=this.getElement(),s=e.classList.contains("active"),n=t.querySelector(".user__item.active:last-child");if(s)n?n.insertAdjacentElement("afterend",e):t.appendChild(e);else{const s=t.querySelector(".user__item:not(.active):last-child");s?s.insertAdjacentElement("afterend",e):n?n.insertAdjacentElement("afterend",e):t.appendChild(e)}}}class S extends n.S{constructor(){super({tag:"div",classNames:["chat__left-panel"]}),this.searchInput=new E,this.userList=new C,this.setupLeftPanel()}increaseCounterInUserItem(e){const t=this.getUserItems().find((t=>t.getElement().getAttribute("data-name")===e));t&&t.increaseCounter()}getUserItem(e){return this.userList.getUserItems().find((t=>t.getElement().dataset.name===e))}getUserList(){return this.userList}getUserItems(){return this.userList.getUserItems()}getSearchInput(){return this.searchInput}setupLeftPanel(){this.getElement().append(this.searchInput.getElement(),this.userList.getElement())}}class I extends n.S{constructor(){super({tag:"p",classNames:["companion__name"]})}getCompanionNameText(){return this.getElement().textContent}}class f extends n.S{constructor(){super({tag:"p"})}}class M extends n.S{constructor(){super({tag:"div",classNames:["right-panel__top"]}),this.companionName=new I,this.companionStatus=new f,this.setupRightPanelTop()}setupRightPanelTop(){this.getElement().append(this.companionName.getElement(),this.companionStatus.getElement())}}class L extends n.S{constructor(){super({tag:"span",classNames:["message__placeholder"],textContent:"Select a user to send a message..."})}}class _ extends n.S{constructor(){super({tag:"div",classNames:["message__wrapper"]}),this.placeholder=new L,this.setupWrapperMessage()}placeHolderHidden(){this.placeholder.getElement().classList.add("hidden")}placeHolderShow(){this.placeholder.getElement().classList.remove("hidden")}updateTextContentInPlaceholder(){this.placeholder.getElement().textContent="Write your first message..."}setupWrapperMessage(){this.addInnerElement(this.placeholder.getElement())}}class P extends n.S{constructor(){super({tag:"button",classNames:["btn__send"],textContent:"send"}),this.setupBtnSend()}setupBtnSend(){this.getElement().disabled=!0}}class U extends n.S{constructor(){super({tag:"input",classNames:["textarea__send"]}),this.setupInputSend()}setupInputSend(){this.getElement().placeholder="Your message",this.getElement().disabled=!0}}class b extends n.S{constructor(){super({tag:"form",classNames:["form__send"]}),this.inputSend=new U,this.btn=new P,this.handleInputChange=this.handleInputChange.bind(this),this.setupFormSend(),this.setEventListenerInputChange()}clearInputValue(){this.inputSend.getElement().value="",this.enableBtn(!0)}getInputValue(){return this.inputSend.getElement().value}enableInputs(e){this.inputSend.getElement().disabled=e}enableBtn(e){this.btn.getElement().disabled=e}setEventListenerInputChange(){this.inputSend.getElement().addEventListener("input",this.handleInputChange)}handleInputChange(e){const{value:t}=e.target;t.length>0?this.enableBtn(!1):this.enableBtn(!0)}setupFormSend(){this.getElement().append(this.inputSend.getElement(),this.btn.getElement())}}class x extends n.S{constructor(e,t){let s=t.isDelivered?"delivered":"sent";t.isReaded&&(s="read"),super({tag:"p",classNames:["delivery__info",e],textContent:s}),this.status=t}}class w extends n.S{constructor(e){super({tag:"p",classNames:["message__content"],textContent:e})}}class N extends n.S{constructor(e,t){super({tag:"p",classNames:["date__time",e]}),this.setupDateTime(t)}padZero(e){return e.toString().padStart(2,"0")}formattedDate(e){const t=new Date(e);return`( ${this.padZero(t.getDate())}.${this.padZero(t.getMonth()+1)}.${this.padZero(t.getDate())}, ${this.padZero(t.getHours())}:${this.padZero(t.getMinutes())}:${this.padZero(t.getSeconds())} )`}setupDateTime(e){this.getElement().textContent=this.formattedDate(e)}}class T extends n.S{constructor(e,t){super({tag:"p",classNames:["user__info",e],textContent:"left"===e?`( ${t} )`:"( You )"})}}class k extends n.S{constructor(e,t,s){super({tag:"div",classNames:["message__top",e]}),this.setupMessageTop(e,t,s)}setupMessageTop(e,t,s){const n=new T(e,t).getElement(),a=new N(e,s).getElement();this.getElement().append(n,a)}}class A extends n.S{constructor(e,t){super({tag:"div",classNames:["message__item",e]}),this.message=t,this.userNameFromMessage=t.from,this.messageTop=new k(e,this.message.from,this.message.datetime),this.messageContent=new w(this.message.text),this.messageStatus=new x(e,this.message.status),this.setupMessageItem(e)}getUserNameFromMessage(){return this.userNameFromMessage}getMessageContent(){return this.messageContent}setMessageContent(e){this.messageContent.getElement().textContent=e}getMessageStatus(){return this.messageStatus}setMessageStatus(e){this.messageStatus.getElement().textContent=e}setupMessageItem(e){const t=document.createElement("span");t.classList.add("delete");const s=document.createElement("span");s.classList.add("edit"),this.getElement().append(this.messageTop.getElement(),this.messageContent.getElement(),this.messageStatus.getElement()),"right"===e&&this.getElement().append(t,s),this.getElement().setAttribute("data-id",this.message.id)}}class B extends n.S{constructor(e,t,s){super({tag:"div",classNames:["message__container",e]}),this.messageItem=new A(e,t),this.chat=s,this.handleItemClick=this.handleItemClick.bind(this),this.setupMessageContainer(),this.setupEventListener()}getMessageItem(){return this.messageItem}setupMessageContainer(){this.addInnerElement(this.messageItem.getElement())}handleItemClick(e){var t;const s=e.target,n=this.chat.getChatController().getRightPanelController();if(s.matches(".message__item.right .delete")){const e=null===(t=s.parentElement)||void 0===t?void 0:t.dataset.id;e&&n.handleClickRemoveMessage(e)}else s.matches(".message__item.right .edit")&&console.log(s.parentElement)}setupEventListener(){this.getElement().addEventListener("click",this.handleItemClick)}}var H=s(624);class y extends n.S{constructor(e){super({tag:"div",classNames:["chat__right-panel"]}),this.messages=[],this.chat=e,this.panelTop=new M,this.wrapperMessage=new _,this.formSend=new b,this.render()}getPanelTop(){return this.panelTop}getWrapperMessage(){return this.wrapperMessage}getFormSend(){return this.formSend}getMessages(){return this.messages}removeMessage(e){const t=this.wrapperMessage,s=this.messages.indexOf(e);t.getElement().removeChild(e.getElement()),-1!==s&&this.messages.splice(s,1)}scrollMessagesToBottom(){const e=this.wrapperMessage.getElement(),{scrollHeight:t}=e,{clientHeight:s}=e,n=document.querySelector(".divider");if(n&&!(t-s<n.offsetTop))return;const a=t-s-5;e.scrollTop=a}render(){this.renderPanelTop(),this.renderWrapperMessage(),this.renderFormSend()}updateMessageList(e){const t=this.determineMessageAlignment(e),s=new B(t,e,this.chat);this.messages.push(s),this.wrapperMessage.placeHolderHidden(),this.wrapperMessage.getElement().append(s.getElement())}updatePanelTop(e,t){const{companionName:s,companionStatus:n}=this.panelTop;s.getElement().textContent=e;const a=t?"online":"offline";n.getElement().textContent=a,n.getElement().classList.add("companion__status"),t?n.getElement().classList.add("active"):n.getElement().classList.remove("active")}clearMessageList(){this.wrapperMessage.getElement().querySelectorAll(".message__container").forEach((e=>e.remove())),this.messages=[]}initialMessages(e){const t=[];this.clearMessageList(),e.forEach((e=>{const s=this.determineMessageAlignment(e);t.push(new B(s,e,this.chat))})),this.messages.push(...t),this.wrapperMessage.getElement().append(...this.messages.map((e=>e.getElement())))}switchOnInput(e){this.formSend.enableInputs(e)}determineMessageAlignment(e){const t=H.d.getUserData();return(null==t?void 0:t.login)===e.to?"left":"right"}renderFormSend(){this.addInnerElement(this.formSend.getElement())}renderWrapperMessage(){this.addInnerElement(this.wrapperMessage.getElement())}renderPanelTop(){this.addInnerElement(this.panelTop.getElement())}}class R extends n.S{constructor(){super({tag:"div",classNames:["chat__wrapper"]})}}class W{constructor(e,t,s){this.chatService=e,this.headerChat=t,this.mainController=s,this.setUserName(),this.onClickBtnLogout()}logoutHandle(){this.chatService.getLogoutService().logout()}onClickBtnLogout(){this.headerChat.getBtnLogout().getElement().addEventListener("click",(()=>{this.logoutHandle()}))}setUserName(){this.headerChat.getUserName().getElement().textContent=`user: ${this.getUserNameInSs()}`}getUserNameInSs(){const e=H.d.getUserData();if(e){const{login:t}=e;return t}return null}}class D{constructor(e,t,s,n){this.inputValue="",this.chatService=e,this.leftPanel=t,this.state=s,this.chatController=n,this.state.registerUserObserver(this.constructor.name,this),this.onHandleInput=this.onHandleInput.bind(this),this.handleUserItemClick=this.handleUserItemClick.bind(this),this.initialUserList(),this.setupSearchInput(),this.setupUserItemClickListeners()}updateUsers(e){const t=this.leftPanel.getUserList();t.updateUserList(e),t.moveToBottomInactiveUserItem(),this.leftPanel.getUserItems().forEach((e=>e.updateCounterDisplay()));const s=this.chatController.getRightPanel(),{companionName:n}=s.getPanelTop();n.getCompanionNameText()===e.login&&s.updatePanelTop(e.login,e.isLogined)}updateCounter(){const e=this.state.getMessages(),t=new Map,s=H.d.getUserData();s&&(e.forEach(((e,n)=>{const a=e.filter((e=>!e.status.isReaded)).filter((e=>e.from!==s.login));a.length>0&&t.set(n,a)})),t.forEach(((e,t)=>{const s=e.length,n=this.leftPanel.getUserItems().find((e=>e.getElement().getAttribute("data-name")===t));null==n||n.setCounter(s)})))}updateCounterInUserItems(){const e=this.leftPanel.getUserItems();0!==e.length&&e.forEach((e=>{const t=e.getElement().getAttribute("data-name");this.chatService.getMessageReceiveService().sendRequestHistoryMessages(t||"",!1,this.updateCounter.bind(this))}))}initialUserList(){const e=this.leftPanel.getUserList();this.chatService.getUserService().fetchAllUsers((t=>{e.initialUserList(t),this.handleFilterUserList()}),this.updateCounterInUserItems.bind(this))}handleFilterUserList(){const e=this.leftPanel.getUserItems().filter((e=>this.filterListItem(e,this.inputValue)));this.filterUserList(e)}filterListItem(e,t){var s;const n=null===(s=e.getElement().textContent)||void 0===s?void 0:s.toLocaleLowerCase();return!!(null==n?void 0:n.includes(t))}filterUserList(e){const t=this.leftPanel.getUserList().getElement();for(;t.firstChild;)t.removeChild(t.firstChild);t.append(...e.map((e=>e.getElement())))}onHandleInput(e){const{value:t}=e.target;this.inputValue=t,this.handleFilterUserList()}setupSearchInput(){this.leftPanel.getSearchInput().getElement().addEventListener("input",this.onHandleInput)}handleUserItemClick(e){const t=e.target;if(t.classList.contains("user__item")){const e=t.getAttribute("data-name"),s=this.chatService.getMessageReceiveService(),n=document.querySelector(".divider");n&&n.remove(),e&&s.sendRequestHistoryMessages(e,!0)}}setupUserItemClickListeners(){this.leftPanel.getUserList().getElement().addEventListener("click",this.handleUserItemClick)}}class F extends n.S{constructor(){super({tag:"div",classNames:["divider"],textContent:"New message"})}}class q{constructor(e,t,s,n){this.ignoreHandleClickWrapperMsg=!1,this.chatService=e,this.rightPanel=t,this.leftPanel=s,this.state=n,this.handleFormSubmit=this.handleFormSubmit.bind(this),this.updateReadStatusMessage=this.updateReadStatusMessage.bind(this),this.removeMessageByIdAndUpdateMessages=this.removeMessageByIdAndUpdateMessages.bind(this),this.state.registerMessageObserver(this.constructor.name,this);const a=this.chatService.getMessageReceiveService();a.registerStatusObserver(this.constructor.name,this),a.setCallbackUpdateReadStatusMsg(this.updateReadStatusMessage),a.setCallbackDeleteMessage(this.removeMessageByIdAndUpdateMessages),this.setEventListenerFormSubmit(),this.setEventListenerClickWrapperMsg(),this.setEventListenerScrollWrapperMsg()}handleClickRemoveMessage(e){this.chatService.getMessageReceiveService().sendRequestDeleteMessage(e,this.removeMessageByIdAndUpdateMessages)}removeMessageByIdAndUpdateMessages(e){var t;this.ignoreHandleClickWrapperMsg=!0;const s=this.rightPanel.getWrapperMessage(),n=this.rightPanel.getMessages();if(n.length){const{id:s}=e,a=n.find((({messageItem:e})=>e.getElement().dataset.id===s));if(a){const e=a.getMessageItem().getMessageStatus().getElement().textContent,s=a.getMessageItem().getUserNameFromMessage();if(this.rightPanel.removeMessage(a),"read"!==e){const e=this.leftPanel.getUserItem(s);null==e||e.decreaseCounter(),0===(null==e?void 0:e.getCounter())&&(null===(t=document.querySelector(".divider"))||void 0===t||t.remove())}}}0===n.length&&(s.updateTextContentInPlaceholder(),s.placeHolderShow())}updateStatus(e){this.rightPanel.getMessages().forEach((t=>{const s=t.getMessageItem(),n=s.getElement().getAttribute("data-id");n&&e.id===n&&s.setMessageStatus("delivered")}))}updateReadStatusMessage(e){this.rightPanel.getMessages().forEach((t=>{const s=t.getMessageItem(),n=s.getElement().getAttribute("data-id");n&&e.id===n&&s.setMessageStatus("read")}))}addUnreadMessageDivider(e){var t;const s=(new F).getElement(),n=(null===(t=this.leftPanel.getUserItem(e))||void 0===t?void 0:t.getCounter())||0,a=this.rightPanel.getMessages().filter((e=>e.getElement().classList.contains("left"))),i=a[a.length-n],r=document.querySelector(".divider");i&&!r&&this.rightPanel.getWrapperMessage().getElement().insertBefore(s,i.getElement())}updateMessages(e){if(e.length>0){const t=e[0],s=t.from,n=t.to,{companionName:a}=this.rightPanel.getPanelTop(),i=H.d.getUserData();i&&((s===i.login&&n===a.getCompanionNameText()||n===i.login&&s===a.getCompanionNameText())&&(this.rightPanel.updateMessageList(e[0]),this.rightPanel.scrollMessagesToBottom()),this.leftPanel.increaseCounterInUserItem(e[0].from)),this.addUnreadMessageDivider(e[0].from),this.rightPanel.scrollMessagesToBottom()}}initialMessages(e,t){this.updatePlaceHolder(e),this.updateTopPanel(t),this.updateMessageContainer(e),this.addUnreadMessageDivider(t.login);const s=document.querySelector(".divider");if(s){const e=s.nextElementSibling.querySelector(".message__content");null==e||e.scrollIntoView({block:"end",behavior:"smooth"})}}updatePlaceHolder(e){const t=this.rightPanel.getWrapperMessage();e.length<1?t.updateTextContentInPlaceholder():t.placeHolderHidden()}updateTopPanel(e){this.rightPanel.updatePanelTop(e.login,e.isLogined)}updateMessageContainer(e){e.length>0?this.rightPanel.initialMessages(e):(this.rightPanel.clearMessageList(),this.rightPanel.getWrapperMessage().placeHolderShow()),this.rightPanel.switchOnInput(!1)}clearInput(){this.rightPanel.getFormSend().clearInputValue()}handleFormSubmit(e){e.preventDefault();const t=this.rightPanel.getFormSend().getInputValue(),{companionName:s}=this.rightPanel.getPanelTop();this.chatService.getMessageReceiveService().sendRequestToReceiveMessages(s.getCompanionNameText()||"",t),this.clearInput(),this.handleClickWrapperMsg()}setEventListenerFormSubmit(){this.rightPanel.getFormSend().getElement().addEventListener("submit",this.handleFormSubmit)}handleClickWrapperMsg(){const e=this.rightPanel.getWrapperMessage().getElement().querySelectorAll(".message__item.left"),t=this.chatService.getMessageReceiveService();e.forEach((e=>{const s=e.getAttribute("data-id");t.sendRequestReadMessage(s||"",this.updateReadStatusMessage)}));const{companionName:s}=this.rightPanel.getPanelTop(),n=s.getCompanionNameText(),a=this.leftPanel.getUserItems().find((e=>e.getElement().getAttribute("data-name")===n));null==a||a.resetCounter();const i=document.querySelector(".divider");i&&i.remove()}setEventListenerClickWrapperMsg(){this.rightPanel.getWrapperMessage().getElement().addEventListener("click",(()=>{this.handleClickWrapperMsg()}))}setEventListenerScrollWrapperMsg(){const e=this.rightPanel.getWrapperMessage().getElement();e.addEventListener("scroll",(()=>{const{scrollHeight:t}=e,{scrollTop:s}=e,{clientHeight:n}=e;t-s===n&&(this.ignoreHandleClickWrapperMsg||this.handleClickWrapperMsg()),this.ignoreHandleClickWrapperMsg=!1}))}}class ${constructor(e,t,s,n,a){this.headerChat=e,this.leftPanel=t,this.rightPanel=s,this.chatService=n,this.headerController=new W(this.chatService,this.headerChat,this),this.leftPanelController=new D(this.chatService,this.leftPanel,a,this),this.rightPanelController=new q(this.chatService,this.rightPanel,this.leftPanel,a)}getRightPanelController(){return this.rightPanelController}getRightPanel(){return this.rightPanel}}class V extends n.S{constructor(e,t){super({tag:"section",classNames:["chat"]}),this.headerChat=new g(t),this.leftPanel=new S,this.rightPanel=new y(this),this.chatController=new $(this.headerChat,this.leftPanel,this.rightPanel,e.getChatService(),e.getState()),this.render()}getChatController(){return this.chatController}render(){this.renderHeader(),this.renderChatWrapper(),this.renderFooter()}renderHeader(){this.getElement().prepend(this.headerChat.getElement())}renderChatWrapper(){const e=(new R).getElement();e.append(this.leftPanel.getElement(),this.rightPanel.getElement()),this.addInnerElement(e)}renderFooter(){const e=(new p).getElement();this.getElement().append(e)}}}}]);