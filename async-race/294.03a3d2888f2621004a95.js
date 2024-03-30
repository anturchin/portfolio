"use strict";(self.webpackChunkasync_race=self.webpackChunkasync_race||[]).push([[294],{294:(t,e,n)=>{n.r(e),n.d(e,{WinnerView:()=>v});var s=n(256);class i extends s.S{constructor(t,e){super({tag:"button",classNames:["next-winner__btn"]}),this.controller=t,this.winnerView=e,this.onClickNext=this.onClickNext.bind(this),this.setupButton(),this.setupEventListener()}setupEventListener(){this.getElement().addEventListener("click",this.onClickNext)}onClickNext(){return t=this,e=void 0,s=function*(){try{yield this.controller.nextPage(),this.winnerView.updateTitleAndTable()}catch(t){t instanceof Error&&console.error(t.message)}},new((n=void 0)||(n=Promise))((function(i,r){function o(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((s=s.apply(t,e||[])).next())}));var t,e,n,s}setupButton(){this.getElement().textContent="next"}}class r extends s.S{constructor(t,e){super({tag:"button",classNames:["prev-winner__btn"]}),this.controller=t,this.winnerView=e,this.onClickPrev=this.onClickPrev.bind(this),this.setupButton(),this.setupEventListener()}setupEventListener(){this.getElement().addEventListener("click",this.onClickPrev)}onClickPrev(){return t=this,e=void 0,s=function*(){try{yield this.controller.prevPage(),this.winnerView.updateTitleAndTable()}catch(t){t instanceof Error&&console.error(t.message)}},new((n=void 0)||(n=Promise))((function(i,r){function o(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((s=s.apply(t,e||[])).next())}));var t,e,n,s}setupButton(){this.getElement().textContent="prev"}}class o extends s.S{constructor(t,e){super({tag:"section",classNames:["pagination-winner"]}),this.setupPagination(t,e)}setupPagination(t,e){const n=new r(t,e),s=new i(t,e);this.getElement().append(n.getElement(),s.getElement())}}class a extends s.S{constructor(t){super({tag:"h2",classNames:["winner__subtitle"]}),this.setupSubTitle(t)}setupSubTitle(t){this.getElement().textContent="page ";const{page:e}=t.getPageAndTotalCount(),n=document.createElement("span");n.classList.add("subtitle__count"),n.textContent=`# ${e}`,this.addInnerElement(n)}}class c extends s.S{constructor(t){super({tag:"th",classNames:["thead__th"],textContent:`${t}`}),this.setupTh(t)}setupTh(t){this.getElement().dataset.name=t}}class l extends s.S{constructor(){super({tag:"tr",classNames:["thead__tr"]})}}const h=["Number","ID-Car","Car","Name","Wins","Best time (seconds)"],u=new Map;u.set("ID-Car","id"),u.set("Wins","wins"),u.set("Best time (seconds)","time");class d extends s.S{constructor(t,e){super({tag:"thead",classNames:["table__thead"]}),this.controller=t,this.winnerView=e,this.onClickSortBy=this.onClickSortBy.bind(this),this.setupThead(),this.setupEventListener()}setupEventListener(){this.getElement().addEventListener("click",this.onClickSortBy)}onClickSortBy(t){return e=this,n=void 0,i=function*(){const e=t.target,n=e.classList.contains("thead__th"),s=e.getAttribute("data-name")||"";if(n&&u.has(s)){const t=u.get(s);try{t&&(yield this.controller.handleSortBy(t)),this.winnerView.updateTitleAndTable()}catch(t){t instanceof Error&&console.error(t.message)}}},new((s=void 0)||(s=Promise))((function(t,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(t){t(n)}))).then(o,a)}c((i=i.apply(e,n||[])).next())}));var e,n,s,i}setupThead(){const t=(new l).getElement(),e=[];h.forEach((t=>{e.push(new c(t).getElement())})),t.append(...e),this.addInnerElement(t)}}class p extends s.S{constructor(){super({tag:"tr",classNames:["tbody__tr"]})}}class g extends s.S{constructor(t){super({tag:"td",classNames:["tbody__td"],textContent:`${t}`})}}var m=n(614);class w extends s.S{constructor(t){super({tag:"tbody",classNames:["table__tbody"]}),this.controller=t,this.setupTbody()}getMergeArray(t,e){return t.map((t=>{const n=e.find((e=>e.id===t.id));return n?Object.assign(Object.assign({},t),{wins:n.wins,time:n.time}):Object.assign({},t)}))}createTd(t,e){const n=[],{id:s,color:i,name:r,time:o,wins:a}=t,c=new g(`${e+1}`).getElement();n.push(c);const l=new g(`${s}`).getElement();n.push(l);const h=(new g).getElement(),u=m.R.create(i,"60px","60px");h.innerHTML=u,n.push(h);const d=new g(r).getElement();n.push(d);const p=new g(`${a}`).getElement();n.push(p);const w=new g(`${o}`).getElement();return n.push(w),n}setupTbody(){const t=this.controller.getCars(),e=this.controller.getWinners();this.getMergeArray(t,e).forEach(((t,e)=>{const n=(new p).getElement();n.append(...this.createTd(t,e)),this.addInnerElement(n)}))}}class E extends s.S{constructor(t,e){super({tag:"table",classNames:["winners-table"]}),this.controller=t,this.winnerView=e,this.setupTable()}updateTable(){for(;this.getElement().firstChild;){const t=this.getElement().firstChild;t&&this.getElement().removeChild(t)}this.setupTable()}setupTable(){const t=new d(this.controller,this.winnerView).getElement(),e=new w(this.controller).getElement();this.getElement().append(t,e)}}class b extends s.S{constructor(t){super({tag:"h1",classNames:["winner__title"]}),this.setupTitle(t)}setupTitle(t){this.getElement().textContent="winners ";const{totalWinnersCount:e}=t.getPageAndTotalCount(),n=document.createElement("span");n.classList.add("title__count"),n.textContent=`(${e})`,this.addInnerElement(n)}}class v extends s.S{constructor(t){super({tag:"section"}),this.controller=t,this.title=new b(this.controller),this.subTitle=new a(this.controller),this.table=new E(this.controller,this),this.render()}updateTitleAndTable(){const{totalWinnersCount:t}=this.controller.getPageAndTotalCount(),e=this.title.getElement().querySelector("span");e&&(e.textContent=`(${t})`);const{page:n}=this.controller.getPageAndTotalCount(),s=this.subTitle.getElement().querySelector("span");s&&(s.textContent=`# ${n}`),this.table.updateTable()}render(){return t=this,e=void 0,s=function*(){try{yield this.controller.loadWinners(),this.renderTitle(),this.renderSubTitle(),this.renderTable(),this.renderPagination()}catch(t){t instanceof Error&&console.error(t.message)}},new((n=void 0)||(n=Promise))((function(i,r){function o(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((s=s.apply(t,e||[])).next())}));var t,e,n,s}renderPagination(){const t=new o(this.controller,this).getElement();this.addInnerElement(t)}renderTable(){this.addInnerElement(this.table.getElement())}renderSubTitle(){this.addInnerElement(this.subTitle.getElement())}renderTitle(){this.addInnerElement(this.title.getElement())}}}}]);