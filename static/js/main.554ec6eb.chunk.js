(this["webpackJsonppandemic-assistant"]=this["webpackJsonppandemic-assistant"]||[]).push([[1],{60:function(e,t,n){var r={"./ion-action-sheet.entry.js":[89,5],"./ion-alert.entry.js":[90,6],"./ion-app_8.entry.js":[91,7],"./ion-avatar_3.entry.js":[92,17],"./ion-back-button.entry.js":[93,18],"./ion-backdrop.entry.js":[94,43],"./ion-button_2.entry.js":[95,19],"./ion-card_5.entry.js":[96,20],"./ion-checkbox.entry.js":[97,21],"./ion-chip.entry.js":[98,22],"./ion-col_3.entry.js":[99,44],"./ion-datetime_3.entry.js":[100,10],"./ion-fab_3.entry.js":[101,23],"./ion-img.entry.js":[102,45],"./ion-infinite-scroll_2.entry.js":[103,46],"./ion-input.entry.js":[104,24],"./ion-item-option_3.entry.js":[105,25],"./ion-item_8.entry.js":[106,26],"./ion-loading.entry.js":[107,27],"./ion-menu_3.entry.js":[108,28],"./ion-modal.entry.js":[109,8],"./ion-nav_2.entry.js":[110,14],"./ion-popover.entry.js":[111,9],"./ion-progress-bar.entry.js":[112,29],"./ion-radio_2.entry.js":[113,30],"./ion-range.entry.js":[114,31],"./ion-refresher_2.entry.js":[115,11],"./ion-reorder_2.entry.js":[116,16],"./ion-ripple-effect.entry.js":[117,47],"./ion-route_4.entry.js":[118,32],"./ion-searchbar.entry.js":[119,33],"./ion-segment_2.entry.js":[120,34],"./ion-select_3.entry.js":[121,35],"./ion-slide_2.entry.js":[122,48],"./ion-spinner.entry.js":[123,13],"./ion-split-pane.entry.js":[124,49],"./ion-tab-bar_2.entry.js":[125,36],"./ion-tab_2.entry.js":[126,15],"./ion-text.entry.js":[127,37],"./ion-textarea.entry.js":[128,38],"./ion-toast.entry.js":[129,39],"./ion-toggle.entry.js":[130,12],"./ion-virtual-scroll.entry.js":[131,50]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=60,e.exports=i},62:function(e,t,n){var r={"./ion-icon.entry.js":[132,57]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=62,e.exports=i},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r,i=n(0),s=n.n(i),c=n(27),a=n.n(c),o=n(21),u=n(2),l=n(46),d=n(12),h=n(4),j=n(5),p=n(8),b=n(9),f=(n(70),n(1)),y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.g,{icon:this.props.drawn?d.c:d.h,slot:"end"}),Object(f.jsxs)(u.m,{children:["Epidemic ",this.props.position]})]},this.props.position)}}]),n}(s.a.Component),k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).mounted=!1,r.handler=function(){r.mounted?r.setState({epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()}):r.state={epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()}},r.state={epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()},r.props.controller.attachPlayerDeckHandler(r.handler),r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.controller.detachPlayerDeckHandler(this.handler)}},{key:"render",value:function(){var e=this,t=Math.ceil(this.state.minCards/2),n=Math.ceil(this.state.maxCards/2);return Object(f.jsxs)(u.n,{children:[Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.m,{children:"Cards to Next Epidemic"}),Object(f.jsx)(u.o,{slot:"end",color:"dark",children:0===this.state.minCards&&0===this.state.maxCards?"0":"".concat(this.state.minCards,"-").concat(this.state.maxCards)})]}),Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.m,{children:"Rounds to Next Epidemic"}),Object(f.jsx)(u.o,{slot:"end",color:"dark",children:0===t&&0===n?"0":"".concat(t,"-").concat(n)})]}),this.state.epidemics.map((function(e,t){return Object(f.jsx)(y,{drawn:e,position:t+1},t)})),Object(f.jsx)(u.e,{children:Object(f.jsxs)(u.s,{children:[Object(f.jsx)(u.c,{}),Object(f.jsx)(u.c,{children:Object(f.jsx)(u.b,{color:"danger",expand:"block",onClick:function(){e.props.controller.drawPlayerDeck(!0)},children:Object(f.jsx)(u.g,{icon:d.s})})}),Object(f.jsx)(u.c,{children:Object(f.jsx)(u.b,{color:"success",expand:"block",onClick:function(){e.props.controller.drawPlayerDeck(!1)},children:Object(f.jsx)(u.g,{icon:d.k})})}),Object(f.jsx)(u.c,{})]})})]})}}]),n}(s.a.Component),O=(n(72),function(e){var t=e.controller;return Object(f.jsxs)(u.p,{children:[Object(f.jsx)(u.f,{children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{children:"Epidemics"})})}),Object(f.jsxs)(u.d,{fullscreen:!0,children:[Object(f.jsx)(u.f,{collapse:"condense",children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{size:"large",children:"Epidemics"})})}),Object(f.jsx)(k,{controller:t})]})]})});n(73);function x(e){switch(e){case r.SanFrancisco:return"San Francisco";case r.Chicago:return"Chicago";case r.Montreal:return"Montreal";case r.Atlanta:return"Atlanta";case r.NewYork:return"New York";case r.WashingtonDC:return"Washington D.C.";case r.London:return"London";case r.Paris:return"Paris";case r.Madrid:return"Madrid";case r.Essen:return"Essen";case r.StPetersburg:return"St. Petersburg";case r.Milan:return"Milan";case r.LosAngeles:return"Los Angeles";case r.Miami:return"Miami";case r.MexicoCity:return"Mexico City";case r.Bogota:return"Bogota";case r.SaoPaolo:return"Sao Paolo";case r.BuenosAires:return"Buenos Aires";case r.Lima:return"Lima";case r.Santiago:return"Santiago";case r.Lagos:return"Lagos";case r.Kinshasa:return"Kinshasa";case r.Johannesburg:return"Johannesburg";case r.Khartoum:return"Khartoum";case r.Moscow:return"Moscow";case r.Algiers:return"Algiers";case r.Riyadh:return"Riyadh";case r.Baghdad:return"Baghdad";case r.Tehran:return"Tehran";case r.Cairo:return"Cairo";case r.Istanbul:return"Istanbul";case r.Karachi:return"Karachi";case r.Delhi:return"Delhi";case r.Mumbai:return"Mumbai";case r.Chennai:return"Chennai";case r.Kolkata:return"Kolkata";case r.Beijing:return"Beijing";case r.Shanghai:return"Shanghai";case r.HongKong:return"Hong Kong";case r.Taipei:return"Taipei";case r.Bangkok:return"Bangkok";case r.Manila:return"Manila";case r.Jakarta:return"Jakarta";case r.HoChiMinhCity:return"Ho Chi Minh City";case r.Seoul:return"Seoul";case r.Tokyo:return"Tokyo";case r.Osaka:return"Osaka";case r.Sydney:return"Sydney"}}!function(e){e.SanFrancisco="SanFrancisco",e.Chicago="Chicago",e.Montreal="Montreal",e.Atlanta="Atlanta",e.NewYork="NewYork",e.WashingtonDC="WashingtonDC",e.London="London",e.Paris="Paris",e.Madrid="Madrid",e.Essen="Essen",e.StPetersburg="StPetersburg",e.Milan="Milan",e.LosAngeles="LosAngeles",e.Miami="Miami",e.MexicoCity="MexicoCity",e.Bogota="Bogota",e.SaoPaolo="SaoPaolo",e.BuenosAires="BuenosAires",e.Lima="Lima",e.Santiago="Santiago",e.Lagos="Lagos",e.Kinshasa="Kinshasa",e.Johannesburg="Johannesburg",e.Khartoum="Khartoum",e.Moscow="Moscow",e.Algiers="Algiers",e.Riyadh="Riyadh",e.Baghdad="Baghdad",e.Tehran="Tehran",e.Cairo="Cairo",e.Istanbul="Istanbul",e.Karachi="Karachi",e.Delhi="Delhi",e.Mumbai="Mumbai",e.Chennai="Chennai",e.Kolkata="Kolkata",e.Beijing="Beijing",e.Shanghai="Shanghai",e.HongKong="HongKong",e.Taipei="Taipei",e.Bangkok="Bangkok",e.Manila="Manila",e.Jakarta="Jakarta",e.HoChiMinhCity="HoChiMinhCity",e.Seoul="Seoul",e.Tokyo="Tokyo",e.Osaka="Osaka",e.Sydney="Sydney"}(r||(r={}));var m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).mounted=!1,r.handler=function(){r.updateState()},r.state={groups:r.props.controller.getCityGroups(),discards:r.props.controller.getDiscards()},r.props.controller.attachInfectionDeckHandler(r.handler),r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.controller.detachInfectionDeckHandler(this.handler)}},{key:"updateState",value:function(){this.mounted?this.setState({groups:this.props.controller.getCityGroups(),discards:this.props.controller.getDiscards()}):this.state={groups:this.props.controller.getCityGroups(),discards:this.props.controller.getDiscards()}}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.e,{children:Object(f.jsxs)(u.s,{children:[Object(f.jsx)(u.c,{}),Object(f.jsx)(u.c,{children:Object(f.jsx)(u.b,{expand:"block",onClick:function(){e.props.controller.intensify(),e.updateState()},children:"Intensify"})}),Object(f.jsx)(u.c,{})]})}),Object(f.jsxs)(u.n,{children:[Object(f.jsx)(u.i,{sticky:!0,children:"Discards"}),this.state.discards.map((function(t,n){var r="discard-".concat(n);return Object(f.jsxs)(u.l,{id:r,children:[Object(f.jsx)(u.h,{children:Object(f.jsx)(u.m,{children:x(t)})}),Object(f.jsx)(u.k,{side:"end",children:Object(f.jsx)(u.j,{color:"danger",onClick:function(){e.props.controller.removeInfectionCard(t),e.updateState(),document.getElementById(r).close()},children:"Remove"})})]},n)})),this.state.groups.map((function(t,n){return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.i,{sticky:!0,children:0===n?"Current Group":"Group ".concat(n+1)}),t.map((function(t,n){return Object(f.jsx)(u.h,{button:!0,onClick:function(){e.props.controller.drawInfectionDeck(t),e.updateState()},children:Object(f.jsx)(u.m,{children:x(t)})},n)}))]},n)}))]})]})}}]),n}(s.a.Component),g=(n(74),function(e){var t=e.controller;return Object(f.jsxs)(u.p,{children:[Object(f.jsx)(u.f,{children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{children:"Infections"})})}),Object(f.jsxs)(u.d,{fullscreen:!0,children:[Object(f.jsx)(u.f,{collapse:"condense",children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{size:"large",children:"Infections"})})}),Object(f.jsx)(m,{controller:t})]})]})}),v=(n(75),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={playerCount:2,eventCards:4,epidemicCards:5},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(u.p,{children:[Object(f.jsx)(u.f,{children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{children:"Pandemic Assistant"})})}),Object(f.jsxs)(u.d,{fullscreen:!0,children:[Object(f.jsx)(u.f,{collapse:"condense",children:Object(f.jsx)(u.z,{children:Object(f.jsx)(u.y,{size:"large",children:"Pandemic Assistant"})})}),Object(f.jsxs)(u.n,{children:[Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.m,{children:"Player Count"}),Object(f.jsxs)(u.t,{value:String(this.state.playerCount),interface:"popover",onIonChange:function(t){e.setState({playerCount:Number(t.detail.value)})},children:[Object(f.jsx)(u.u,{value:"1",children:"1"}),Object(f.jsx)(u.u,{value:"2",children:"2"}),Object(f.jsx)(u.u,{value:"3",children:"3"}),Object(f.jsx)(u.u,{value:"4",children:"4"}),Object(f.jsx)(u.u,{value:"5",children:"5"})]})]}),Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.m,{children:"Event Cards"}),Object(f.jsxs)(u.t,{value:String(this.state.eventCards),interface:"popover",onIonChange:function(t){e.setState({eventCards:Number(t.detail.value)})},children:[Object(f.jsx)(u.u,{value:"0",children:"0"}),Object(f.jsx)(u.u,{value:"1",children:"1"}),Object(f.jsx)(u.u,{value:"2",children:"2"}),Object(f.jsx)(u.u,{value:"3",children:"3"}),Object(f.jsx)(u.u,{value:"4",children:"4"}),Object(f.jsx)(u.u,{value:"5",children:"5"}),Object(f.jsx)(u.u,{value:"6",children:"6"}),Object(f.jsx)(u.u,{value:"7",children:"7"}),Object(f.jsx)(u.u,{value:"8",children:"8"})]})]}),Object(f.jsxs)(u.h,{children:[Object(f.jsx)(u.m,{children:"Epidemic Cards"}),Object(f.jsxs)(u.t,{value:String(this.state.epidemicCards),interface:"popover",onIonChange:function(t){e.setState({epidemicCards:Number(t.detail.value)})},children:[Object(f.jsx)(u.u,{value:"4",children:"4"}),Object(f.jsx)(u.u,{value:"5",children:"5"}),Object(f.jsx)(u.u,{value:"6",children:"6"}),Object(f.jsx)(u.u,{value:"7",children:"7"})]})]}),Object(f.jsx)(u.e,{children:Object(f.jsxs)(u.s,{children:[Object(f.jsx)(u.c,{}),Object(f.jsx)(u.c,{children:Object(f.jsx)(u.b,{expand:"block",onClick:function(){e.props.controller.setup(e.state.playerCount,e.state.eventCards,e.state.epidemicCards)},children:"Setup"})}),Object(f.jsx)(u.c,{})]})})]})]})]})}}]),n}(s.a.Component)),C=(n(76),n(77),n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(86),n(48)),D=function(){function e(){Object(h.a)(this,e),this.groups=void 0,this.discards=[],this.groups=[[]];for(var t=0,n=Object.keys(r);t<n.length;t++){var i=n[t];this.groups[0].push(i)}this.groups[0].sort((function(e,t){return e.localeCompare(t)}))}return Object(j.a)(e,[{key:"draw",value:function(e){this.discards.push(e),this.discards.sort((function(e,t){return e.localeCompare(t)}));var t,n=Object(C.a)(this.groups);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=r.indexOf(e);if(-1!==i){r.splice(i,1),0===r.length&&this.groups.splice(0,1);break}}}catch(s){n.e(s)}finally{n.f()}}},{key:"intensify",value:function(){this.groups.splice(0,0,this.discards),this.discards=[]}},{key:"removeInfectionCard",value:function(e){var t=this.discards.indexOf(e);if(-1===t)throw new Error("Can only remove a card that is in the discard pile");this.discards.splice(t,1)}},{key:"getCityGroups",value:function(){return this.groups}},{key:"getDiscards",value:function(){return this.discards}},{key:"hasDiscards",value:function(){return this.discards.length>0}}]),e}(),w=function(){function e(t,n,r){Object(h.a)(this,e),this.playerCount=t,this.eventCards=n,this.epidemicCards=r,this.counts=[],this.drawnEpidemics=[],this.drawnCards=0,this.drawnCurrentBucket=0,this.deck=void 0,this.currentBucket=void 0;var i=48+this.eventCards+this.epidemicCards;this.deck=i-this.getStartingRemoval();var s=this.deck,c=this.epidemicCards;for(this.counts=[];c>0;){var a=Math.floor(s/c);s-=Math.floor(a),c--,this.counts.push(a),this.drawnEpidemics.push(!1)}this.currentBucket=this.counts.length-1}return Object(j.a)(e,[{key:"draw",value:function(e){if(this.drawnCards++,this.drawnCurrentBucket++,e){if(this.drawnEpidemics[this.currentBucket])throw new Error("Already drew an epidemic for this bucket");this.drawnEpidemics[this.currentBucket]=!0}for(var t=this.deck-this.drawnCards,n=0,r=0;r<this.counts.length;r++){if((n+=this.counts[r])>t)return;if(n==t)return this.currentBucket--,void(this.drawnCurrentBucket=0)}}},{key:"getMinRemainder",value:function(){return this.drawnEpidemics[this.currentBucket]?this.counts[this.currentBucket]-this.drawnCurrentBucket:0}},{key:"getMaxRemainder",value:function(){return this.drawnEpidemics[this.currentBucket]?this.counts[this.currentBucket]-this.drawnCurrentBucket+this.counts[this.currentBucket-1]-1:this.counts[this.currentBucket]-this.drawnCurrentBucket-1}},{key:"getCounts",value:function(){return this.counts}},{key:"getStartingRemoval",value:function(){return 3===this.playerCount?9:8}}]),e}(),M=function(){function e(){Object(h.a)(this,e),this.playerDeck=void 0,this.infectionDeck=void 0,this.epidemicsDrawn=[],this.epidemicsDrawnIndex=0,this.playerDeck=new w(2,2,5),this.infectionDeck=new D}return Object(j.a)(e,[{key:"setup",value:function(e,t,n){this.playerDeck=new w(e,t,n),this.infectionDeck=new D,this.epidemicsDrawn=[];for(var r=0;r<n;r++)this.epidemicsDrawn.push(!1)}},{key:"getMinRemainder",value:function(){return this.playerDeck.getMinRemainder()}},{key:"getMaxRemainder",value:function(){return this.playerDeck.getMaxRemainder()}},{key:"drawPlayerDeck",value:function(e){this.playerDeck.draw(e),e&&(this.epidemicsDrawn[this.epidemicsDrawnIndex]=!0,this.epidemicsDrawnIndex++)}},{key:"drawInfectionDeck",value:function(e){this.infectionDeck.draw(e)}},{key:"removeInfectionCard",value:function(e){this.infectionDeck.removeInfectionCard(e)}},{key:"intensify",value:function(){this.infectionDeck.intensify()}},{key:"getCityGroups",value:function(){return this.infectionDeck.getCityGroups()}},{key:"getDiscards",value:function(){return this.infectionDeck.getDiscards()}},{key:"getEpidemicsDrawn",value:function(){return this.epidemicsDrawn}}]),e}(),S=(new M,new(function(){function e(){Object(h.a)(this,e),this.playerDeckHandlers=[],this.infectionDeckHandlers=[],this.assistant=void 0,this.assistant=new M}return Object(j.a)(e,[{key:"attachPlayerDeckHandler",value:function(e){this.playerDeckHandlers.push(e)}},{key:"attachInfectionDeckHandler",value:function(e){this.infectionDeckHandlers.push(e)}},{key:"detachPlayerDeckHandler",value:function(e){var t=this.playerDeckHandlers.indexOf(e);-1!==t&&this.playerDeckHandlers.splice(t,1)}},{key:"detachInfectionDeckHandler",value:function(e){var t=this.infectionDeckHandlers.indexOf(e);-1!==t&&this.infectionDeckHandlers.splice(t,1)}},{key:"notifyHandlers",value:function(e){e.forEach((function(e){e()}))}},{key:"notifyPlayerDeckHandlers",value:function(){this.notifyHandlers(this.playerDeckHandlers)}},{key:"notifyInfectionDeckHandlers",value:function(){this.notifyHandlers(this.infectionDeckHandlers)}},{key:"setup",value:function(e,t,n){this.assistant.setup(e,t,n),this.notifyPlayerDeckHandlers(),this.notifyInfectionDeckHandlers()}},{key:"drawPlayerDeck",value:function(e){this.assistant.drawPlayerDeck(e),this.notifyPlayerDeckHandlers()}},{key:"drawInfectionDeck",value:function(e){this.assistant.drawInfectionDeck(e)}},{key:"removeInfectionCard",value:function(e){this.assistant.removeInfectionCard(e)}},{key:"intensify",value:function(){this.assistant.intensify()}},{key:"getCityGroups",value:function(){return this.assistant.getCityGroups()}},{key:"getDiscards",value:function(){return this.assistant.getDiscards()}},{key:"getEpidemicsDrawn",value:function(){return this.assistant.getEpidemicsDrawn()}},{key:"getMinRemainder",value:function(){return this.assistant.getMinRemainder()}},{key:"getMaxRemainder",value:function(){return this.assistant.getMaxRemainder()}}]),e}())),B=function(){return Object(f.jsx)(u.a,{children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(u.x,{children:[Object(f.jsxs)(u.r,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/setup",children:Object(f.jsx)(v,{controller:S})}),Object(f.jsx)(o.b,{exact:!0,path:"/epidemics",children:Object(f.jsx)(O,{controller:S})}),Object(f.jsx)(o.b,{exact:!0,path:"/infections",children:Object(f.jsx)(g,{controller:S})}),Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(o.a,{to:"/setup"})})]}),Object(f.jsxs)(u.v,{slot:"bottom",children:[Object(f.jsxs)(u.w,{tab:"setup",href:"/setup",children:[Object(f.jsx)(u.g,{icon:d.r}),Object(f.jsx)(u.m,{children:"Setup"})]}),Object(f.jsxs)(u.w,{tab:"epidemics",href:"/epidemics",children:[Object(f.jsx)(u.g,{icon:d.s}),Object(f.jsx)(u.m,{children:"Epidemics"})]}),Object(f.jsxs)(u.w,{tab:"infections",href:"/infections",children:[Object(f.jsx)(u.g,{icon:d.j}),Object(f.jsx)(u.m,{children:"Infections"})]})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){e&&e instanceof Function&&n.e(58).then(n.bind(null,149)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),s(e),c(e)}))};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()}},[[87,3,4]]]);
//# sourceMappingURL=main.554ec6eb.chunk.js.map