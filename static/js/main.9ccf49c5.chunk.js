(this["webpackJsonppandemic-assistant"]=this["webpackJsonppandemic-assistant"]||[]).push([[1],{62:function(e,t,n){var r={"./ion-action-sheet.entry.js":[88,5],"./ion-alert.entry.js":[89,6],"./ion-app_8.entry.js":[90,7],"./ion-avatar_3.entry.js":[91,17],"./ion-back-button.entry.js":[92,18],"./ion-backdrop.entry.js":[93,44],"./ion-button_2.entry.js":[94,19],"./ion-card_5.entry.js":[95,20],"./ion-checkbox.entry.js":[96,21],"./ion-chip.entry.js":[97,22],"./ion-col_3.entry.js":[98,45],"./ion-datetime_3.entry.js":[99,10],"./ion-fab_3.entry.js":[100,23],"./ion-img.entry.js":[101,46],"./ion-infinite-scroll_2.entry.js":[102,47],"./ion-input.entry.js":[103,24],"./ion-item-option_3.entry.js":[104,25],"./ion-item_8.entry.js":[105,26],"./ion-loading.entry.js":[106,27],"./ion-menu_3.entry.js":[107,28],"./ion-modal.entry.js":[108,8],"./ion-nav_2.entry.js":[109,14],"./ion-popover.entry.js":[110,9],"./ion-progress-bar.entry.js":[111,29],"./ion-radio_2.entry.js":[112,30],"./ion-range.entry.js":[113,31],"./ion-refresher_2.entry.js":[114,11],"./ion-reorder_2.entry.js":[115,16],"./ion-ripple-effect.entry.js":[116,48],"./ion-route_4.entry.js":[117,32],"./ion-searchbar.entry.js":[118,33],"./ion-segment_2.entry.js":[119,34],"./ion-select_3.entry.js":[120,35],"./ion-slide_2.entry.js":[121,49],"./ion-spinner.entry.js":[122,13],"./ion-split-pane.entry.js":[123,50],"./ion-tab-bar_2.entry.js":[124,36],"./ion-tab_2.entry.js":[125,15],"./ion-text.entry.js":[126,37],"./ion-textarea.entry.js":[127,38],"./ion-toast.entry.js":[128,39],"./ion-toggle.entry.js":[129,12],"./ion-virtual-scroll.entry.js":[130,51]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=62,e.exports=a},64:function(e,t,n){var r={"./ion-icon.entry.js":[131,58]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=64,e.exports=a},72:function(e,t,n){},74:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(28),s=n.n(i),c=n(4),o=n(5),l=n(7),u=n(8),d=n(22),h=n(1),j=n(53),f=n(13),p=(n(72),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.i,{icon:this.props.drawn?f.c:f.h,slot:"end"}),Object(p.jsxs)(h.p,{children:[this.props.label," ",this.props.position]})]},this.props.position)}}]),n}(a.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).mounted=!1,r.handler=function(){r.mounted?r.setState({playerCards:r.props.controller.getRemainingPlayerCards(),epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()}):r.state={playerCards:r.props.controller.getRemainingPlayerCards(),epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()}},r.state={playerCards:r.props.controller.getRemainingPlayerCards(),epidemics:r.props.controller.getEpidemicsDrawn(),minCards:r.props.controller.getMinRemainder(),maxCards:r.props.controller.getMaxRemainder()},r.props.controller.attachPlayerDeckHandler(r.handler),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.controller.detachPlayerDeckHandler(this.handler)}},{key:"render",value:function(){var e=this,t=Math.floor(this.state.minCards/2),n=Math.floor(this.state.maxCards/2),r=0!==this.state.epidemics.length&&this.state.epidemics.reduce((function(e,t){return e&&t})),a=0===this.props.controller.getSeason()?"Escalation":"Epidemic";return Object(p.jsxs)(h.q,{children:[Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Player Deck Size"}),Object(p.jsx)(h.r,{slot:"end",color:"dark",children:this.state.playerCards})]}),!r&&Object(p.jsxs)(h.k,{children:[Object(p.jsxs)(h.p,{children:["Cards to Next ",a]}),Object(p.jsx)(h.r,{slot:"end",color:"dark",children:0===this.state.minCards&&0===this.state.maxCards?"0":"".concat(this.state.minCards,"-").concat(this.state.maxCards)})]}),!r&&Object(p.jsxs)(h.k,{children:[Object(p.jsxs)(h.p,{children:["Rounds to Next ",a]}),Object(p.jsx)(h.r,{slot:"end",color:"dark",children:0===t&&0===n?"0":"".concat(t,"-").concat(n)})]}),this.state.epidemics.map((function(e,t){return Object(p.jsx)(m,{label:a,drawn:e,position:t+1},t)})),!r&&Object(p.jsx)(h.g,{children:Object(p.jsxs)(h.v,{children:[Object(p.jsx)(h.e,{}),Object(p.jsx)(h.e,{children:Object(p.jsx)(h.c,{disabled:this.state.minCards>0,color:"danger",expand:"block",onClick:function(){e.props.controller.drawPlayerDeck(!0)},children:Object(p.jsx)(h.i,{icon:f.s})})}),Object(p.jsx)(h.e,{children:Object(p.jsx)(h.c,{color:"success",expand:"block",onClick:function(){e.props.controller.drawPlayerDeck(!1)},children:Object(p.jsx)(h.i,{icon:f.l})})}),Object(p.jsx)(h.e,{})]})})]})}}]),n}(a.a.Component),b=function(e){var t=e.controller;return Object(p.jsxs)(h.s,{children:[Object(p.jsx)(h.h,{children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{children:0===t.getSeason()?"Escalations":"Epidemics"})})}),Object(p.jsxs)(h.f,{fullscreen:!0,children:[Object(p.jsx)(h.h,{collapse:"condense",children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{size:"large",children:0===t.getSeason()?"Escalations":"Epidemics"})})}),Object(p.jsx)(g,{controller:t})]})]})},y=(n(74),function(e){var t=e.season,n=e.city,r=e.onClick;return Object(p.jsxs)(h.k,{button:void 0!==r,onClick:r,children:[Object(p.jsx)(h.p,{children:n.getLabel(t)}),Object(p.jsx)(h.i,{icon:f.j,color:n.getColour(t),slot:"end"})]})}),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).mounted=!1,r.handler=function(){r.updateState()},r.state={filter:"all",groups:r.props.controller.getCityGroups(),discards:r.props.controller.getDiscards()},r.props.controller.attachInfectionDeckHandler(r.handler),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.controller.detachInfectionDeckHandler(this.handler)}},{key:"updateState",value:function(){this.mounted?this.setState({groups:this.props.controller.getCityGroups(),discards:this.props.controller.getDiscards()}):this.state={filter:"all",groups:this.props.controller.getCityGroups(),discards:this.props.controller.getDiscards()}}},{key:"shouldShow",value:function(e){if("all"===this.state.filter)return!0;if("green"===this.state.filter)return e.isInfected();switch(e.getColour(this.props.season)){case"dark":return"black"===this.state.filter;case"danger":return"red"===this.state.filter;case"primary":return"blue"===this.state.filter;case"warning":return"yellow"===this.state.filter}return!1}},{key:"render",value:function(){var e=this,t=this.state.discards.length>0;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(h.E,{children:[0===this.props.season&&Object(p.jsxs)(h.w,{value:this.state.filter,onIonChange:function(t){e.setState({filter:t.detail.value})},children:[Object(p.jsx)(h.x,{value:"all",children:"all"}),Object(p.jsx)(h.x,{value:"blue",children:"allied"}),Object(p.jsx)(h.x,{value:"black",children:"neutral"}),Object(p.jsx)(h.x,{value:"red",children:"soviet"}),this.props.month>=3&&Object(p.jsx)(h.x,{value:"green",children:"infected"})]}),1===this.props.season&&Object(p.jsxs)(h.w,{value:this.state.filter,onIonChange:function(t){e.setState({filter:t.detail.value})},children:[Object(p.jsx)(h.x,{value:"all",children:"all"}),Object(p.jsx)(h.x,{value:"black",children:"black"}),Object(p.jsx)(h.x,{value:"blue",children:"blue"}),Object(p.jsx)(h.x,{value:"red",children:"red"}),Object(p.jsx)(h.x,{value:"yellow",children:"yellow"})]}),2===this.props.season&&Object(p.jsxs)(h.w,{value:this.state.filter,onIonChange:function(t){e.setState({filter:t.detail.value})},children:[Object(p.jsx)(h.x,{value:"all",children:"all"}),Object(p.jsx)(h.x,{value:"black",children:"black"}),Object(p.jsx)(h.x,{value:"blue",children:"blue"}),Object(p.jsx)(h.x,{value:"yellow",children:"yellow"})]})]}),Object(p.jsx)(h.g,{children:Object(p.jsxs)(h.v,{children:[Object(p.jsx)(h.e,{}),Object(p.jsx)(h.e,{children:Object(p.jsx)(h.c,{disabled:!t,expand:"block",onClick:function(){e.props.controller.intensify(),e.updateState()},children:"Intensify"})}),Object(p.jsx)(h.e,{})]})}),Object(p.jsxs)(h.q,{children:[t&&Object(p.jsx)(h.l,{sticky:!0,children:0===this.state.discards.length?"Discards":"Discards (".concat(this.state.discards.length,")")}),t&&this.state.discards.map((function(t,n){if(!e.shouldShow(t))return Object(p.jsx)("div",{},n);var r="discard-".concat(n);return Object(p.jsxs)(h.o,{id:r,children:[Object(p.jsx)(y,{season:e.props.season,city:t}),Object(p.jsx)(h.n,{side:"end",children:Object(p.jsx)(h.m,{color:"danger",onClick:function(){e.props.controller.removeInfectionCard(t),e.updateState(),document.getElementById(r).close()},children:"Remove"})})]},n)})),this.state.groups.map((function(t,n){var r="Group ".concat(n+1," (").concat(t.length,")");return n===e.state.groups.length-1?r="Deck":0===n&&(r="Current Group (".concat(t.length,")")),Object(p.jsxs)("div",{children:[Object(p.jsx)(h.l,{sticky:!0,children:r}),t.map((function(t,n){return e.shouldShow(t)?Object(p.jsx)(y,{season:e.props.season,city:t,onClick:function(){e.props.controller.drawInfectionDeck(t),e.updateState()}},n):Object(p.jsx)("div",{},n)}))]},n)}))]})]})}}]),n}(a.a.Component),x=function(e){var t=e.controller;return Object(p.jsxs)(h.s,{children:[Object(p.jsx)(h.h,{children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{children:0===t.getSeason()?"Threats":"Infections"})})}),Object(p.jsxs)(h.f,{fullscreen:!0,children:[Object(p.jsx)(h.h,{collapse:"condense",children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{size:"large",children:0===t.getSeason()?"Threats":"Infections"})})}),Object(p.jsx)(v,{controller:t,season:t.getSeason(),month:t.getMonth()})]})]})},k=n(18),O=n(31),w=function(){function e(t,n,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Object(c.a)(this,e),this.name=t,this.flag=n,this.colours=r,this.region=a,this.infected=i}return Object(o.a)(e,[{key:"getName",value:function(){return this.name}},{key:"getLabel",value:function(e){return 2===e?this.name:this.infected?"\u2623\ufe0f ".concat(this.name," (").concat(this.region,")"):"".concat(this.flag," ").concat(this.name," (").concat(this.region,")")}},{key:"getColour",value:function(e){if(this.colours.length<2)throw new Error(this.name);return this.infected?"success":this.colours[e]}},{key:"infect",value:function(){return new e(this.name,this.flag,this.colours,this.region,!0)}},{key:"isInfected",value:function(){return this.infected}}]),e}(),C=new w("San Francisco","\ud83c\uddfa\ud83c\uddf8",["primary","primary"],"North America"),D=new w("Chicago","\ud83c\uddfa\ud83c\uddf8",["primary","primary"],"North America"),N=new w("Montreal","\ud83c\udde8\ud83c\udde6",["primary","primary"],"North America"),S=new w("Atlanta","\ud83c\uddfa\ud83c\uddf8",["primary","primary"],"North America"),A=new w("New York","\ud83c\uddfa\ud83c\uddf8",["primary","primary","primary"],"North America"),E=new w("Washington DC","\ud83c\uddfa\ud83c\uddf8",["primary","primary"],"North America"),I=new w("London","\ud83c\uddec\ud83c\udde7",["primary","primary","primary"],"Europe"),T=new w("Paris","\ud83c\udde8\ud83c\uddf5",["primary","primary"],"Europe"),z=new w("Madrid","\ud83c\uddea\ud83c\uddf8",["dark","primary"],"Europe"),M=new w("Essen","\ud83c\udde9\ud83c\uddea",["primary","primary"],"Europe"),P=new w("St. Petersburg","\ud83c\uddf7\ud83c\uddfa",["primary","primary"],"Europe"),R=new w("Milan","\ud83c\uddee\ud83c\uddf9",["primary","primary"],"Europe"),H=new w("Los Angeles","\ud83c\uddfa\ud83c\uddf8",["primary","warning"],"North America"),B=new w("Miami","\ud83c\uddfa\ud83c\uddf8",["warning","warning"],"North America"),_=new w("Mexico City","\ud83c\uddf2\ud83c\uddfd",["dark","warning"],"North America"),Z=new w("Bogota","\ud83c\udde8\ud83c\uddf4",["dark","warning"],"South America"),L=new w("Sao Paolo","\ud83c\udde7\ud83c\uddf7",["warning","warning"],"South America"),G=new w("Buenos Aires","\ud83c\udde6\ud83c\uddf7",["dark","warning"],"South America"),J=new w("Lima","\ud83c\uddf5\ud83c\uddea",["dark","warning"],"South America"),F=new w("Santiago","\ud83c\udde8\ud83c\uddf1",["dark","warning"],"South America"),W=new w("Lagos","\ud83c\uddf3\ud83c\uddec",["dark","warning","warning"],"Africa"),K=new w("Kinshasa","\ud83c\udde8\ud83c\udde9",["warning","warning"],"Africa"),U=new w("Johannesburg","\ud83c\uddff\ud83c\udde6",["primary","warning"],"Africa"),q=new w("Khartoum","\ud83c\uddf8\ud83c\udde9",["dark","warning"],"Africa"),Y=new w("Moscow","\ud83c\uddf7\ud83c\uddfa",["danger","dark"],"Europe"),$=new w("Algiers","\ud83c\udde9\ud83c\uddff",["primary","dark"],"Africa"),Q=new w("Riyadh","\ud83c\uddf8\ud83c\udde6",["dark","dark"],"Asia"),V=new w("Baghdad","\ud83c\uddee\ud83c\uddf6",["danger","dark"],"Asia"),X=new w("Tehran","\ud83c\uddee\ud83c\uddf7",["dark","dark"],"Asia"),ee=new w("Cairo","\ud83c\uddea\ud83c\uddec",["danger","dark","dark"],"Asia"),te=new w("Istanbul","\ud83c\uddf9\ud83c\uddf7",["primary","dark","dark"],"Europe"),ne=new w("Karachi","\ud83c\uddf5\ud83c\uddf0",["dark","dark"],"Asia"),re=new w("Delhi","\ud83c\uddee\ud83c\uddf3",["dark","dark"],"Asia"),ae=new w("Mumbai","\ud83c\uddee\ud83c\uddf3",["dark","dark"],"Asia"),ie=new w("Chennai","\ud83c\uddee\ud83c\uddf3",["dark","dark"],"Asia"),se=new w("Kolkata","\ud83c\uddee\ud83c\uddf3",["dark","dark"],"Asia"),ce=new w("Beijing","\ud83c\udde8\ud83c\uddf3",["danger","danger"],"Asia"),oe=new w("Shanghai","\ud83c\udde8\ud83c\uddf3",["danger","danger"],"Asia"),le=new w("Hong Kong","\ud83c\udded\ud83c\uddf0",["danger","danger"],"Asia"),ue=new w("Taipei","\ud83c\uddf9\ud83c\uddfc",["danger","danger"],"Asia"),de=new w("Bangkok","\ud83c\uddf9\ud83c\udded",["dark","danger"],"Asia"),he=new w("Manila","\ud83c\uddf5\ud83c\udded",["dark","danger"],"Pacific Rim"),je=new w("Jakarta","\ud83c\uddee\ud83c\udde9",["dark","danger"],"Pacific Rim"),fe=new w("Ho Chi Minh City","\ud83c\uddfb\ud83c\uddf3",["danger","danger"],"Pacific Rim"),pe=new w("Seoul","\ud83c\uddf0\ud83c\uddf7",["danger","danger"],"Pacific Rim"),me=new w("Tokyo","\ud83c\uddef\ud83c\uddf5",["dark","danger"],"Pacific Rim"),ge=new w("Osaka","\ud83c\uddef\ud83c\uddf5",["dark","danger"],"Pacific Rim"),be=new w("Sydney","\ud83c\udde6\ud83c\uddfa",["primary","danger"],"Pacific Rim"),ye=new w("Leopoldville","\ud83c\udde8\ud83c\udde9",["dark","dark"],"Africa"),ve=new w("Bombay","\ud83c\uddee\ud83c\uddf3",["danger","danger"],"Asia"),xe=new w("Calcutta","\ud83c\uddee\ud83c\uddf3",["dark","dark"],"Asia"),ke=new w("Hanoi","\ud83c\uddfb\ud83c\uddf3",["danger","danger"],"Asia"),Oe=new w("Novosibirsk","\ud83c\uddf7\ud83c\uddfa",["danger","danger"],"Asia"),we=new w("Peking","\ud83c\udde8\ud83c\uddf3",["danger","danger"],"Asia"),Ce=new w("Pyongyang","\ud83c\uddf0\ud83c\uddf5",["danger","danger"],"Asia"),De=new w("Saigon","\ud83c\uddfb\ud83c\uddf3",["primary","primary"],"Asia"),Ne=new w("East Berlin","\ud83c\udde9\ud83c\uddea",["danger","danger"],"Europe"),Se=new w("Kiev","\ud83c\uddfa\ud83c\udde6",["danger","danger"],"Europe"),Ae=new w("Leningrad","\ud83c\uddf7\ud83c\uddfa",["danger","danger"],"Europe"),Ee=new w("Prague","\ud83c\udde8\ud83c\uddff",["danger","danger"],"Europe"),Ie=new w("Rome","\ud83c\uddee\ud83c\uddf9",["primary","primary"],"Europe"),Te=new w("Warsaw","\ud83c\uddf5\ud83c\uddf1",["danger","danger"],"Europe"),ze=new w("Havana","\ud83c\udde8\ud83c\uddfa",["danger","danger"],"North America"),Me=new w("Toronto","\ud83c\udde8\ud83c\udde6",["primary","primary"],"North America"),Pe=new w("Washington","\ud83c\uddfa\ud83c\uddf8",["primary","primary","primary"],"North America"),Re=new w("Sao Paulo","\ud83c\udde7\ud83c\uddf7",["dark","dark","warning"],"South America"),He=new w("Tripoli","\ud83c\uddf1\ud83c\uddfe",["dark","dark","dark"],"Africa"),Be=new w("Jacksonville","\ud83c\uddfa\ud83c\uddf8",["warning","warning","warning"],"North America");function _e(e){switch(e){case $.getName():return $.infect();case ee.getName():return ee.infect();case U.getName():return U.infect();case q.getName():return q.infect();case W.getName():return W.infect();case ye.getName():return ye.infect();case Z.getName():return Z.infect();case G.getName():return G.infect();case J.getName():return J.infect();case F.getName():return F.infect();case Re.getName():return Re.infect();case Ne.getName():return Ne.infect();case te.getName():return te.infect();case Se.getName():return Se.infect();case Ae.getName():return Ae.infect();case I.getName():return I.infect();case z.getName():return z.infect();case Y.getName():return Y.infect();case T.getName():return T.infect();case Ee.getName():return Ee.infect();case Ie.getName():return Ie.infect();case Te.getName():return Te.infect();case V.getName():return V.infect();case de.getName():return de.infect();case ve.getName():return ve.infect();case xe.getName():return xe.infect();case re.getName():return re.infect();case ke.getName():return ke.infect();case ne.getName():return ne.infect();case Oe.getName():return Oe.infect();case we.getName():return we.infect();case Ce.getName():return Ce.infect();case Q.getName():return Q.infect();case De.getName():return De.infect();case oe.getName():return oe.infect()}throw new Error(e)}var Ze=function(){function e(t,n){var r=this;Object(c.a)(this,e),this.groups=void 0,this.discards=[],this.groups=[[]];var a,i=Object(O.a)(function(e){return 2===e?[I,I,I,A,A,A,Pe,Pe,Pe,ee,ee,ee,te,te,te,He,He,He,Be,Be,Be,W,W,W,Re,Re,Re]:0===e?[C,Me,A,H,S,Pe,_,ze,Z,J,Re,F,G,I,Ne,T,z,Te,Ae,Y,Ie,te,Ee,Se,$,W,ee,q,ye,U,Oe,we,Ce,re,V,ne,Q,ke,xe,oe,ve,de,De,ge,me,be,he,je]:[C,D,N,S,A,E,I,T,z,M,P,R,H,B,_,Z,L,G,J,F,W,K,U,q,Y,$,Q,V,X,ee,te,ne,re,ae,ie,se,ce,oe,le,ue,de,he,je,fe,pe,me,ge,be]}(t));try{for(i.s();!(a=i.n()).done;){var s=a.value;this.groups[0].push(s)}}catch(o){i.e(o)}finally{i.f()}n.africaThreatCards.forEach((function(e){r.discards.push(_e(e))})),n.southAmericaThreatCards.forEach((function(e){r.discards.push(_e(e))})),n.europeThreatCards.forEach((function(e){r.discards.push(_e(e))})),n.asiaThreatCards.forEach((function(e){r.discards.push(_e(e))})),n.northAmericaThreatCards.forEach((function(e){r.discards.push(_e(e))})),this.groups[0].sort((function(e,t){return e.getName().localeCompare(t.getName())})),this.discards.sort((function(e,t){return e.getName().localeCompare(t.getName())}))}return Object(o.a)(e,[{key:"draw",value:function(e){this.discards.push(e),this.discards.sort((function(e,t){return e.getName().localeCompare(t.getName())}));var t,n=Object(O.a)(this.groups);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=r.indexOf(e);if(-1!==a){r.splice(a,1),0===r.length&&this.groups.splice(0,1);break}}}catch(i){n.e(i)}finally{n.f()}}},{key:"intensify",value:function(){this.groups.splice(0,0,this.discards),this.discards=[]}},{key:"removeInfectionCard",value:function(e){var t=this.discards.indexOf(e);if(-1===t)throw new Error("Can only remove a card that is in the discard pile");this.discards.splice(t,1)}},{key:"getCityGroups",value:function(){return this.groups}},{key:"getDiscards",value:function(){return this.discards}},{key:"hasDiscards",value:function(){return this.discards.length>0}}]),e}(),Le=function(){function e(t,n,r,a,i){Object(c.a)(this,e),this.playerCount=n,this.counts=[],this.drawnEpidemics=[],this.drawnCards=0,this.drawnCurrentBucket=0,this.deck=void 0,this.currentBucket=void 0;var s=t+r+a+i;this.deck=s-this.getStartingRemoval();var o=this.deck,l=a;for(this.counts=[];l>0;){var u=Math.floor(o/l);o-=Math.floor(u),l--,this.counts.push(u),this.drawnEpidemics.push(!1)}this.currentBucket=this.counts.length-1}return Object(o.a)(e,[{key:"getRemainingCards",value:function(){return this.deck}},{key:"draw",value:function(e){if(this.drawnCards++,this.drawnCurrentBucket++,e){if(this.drawnEpidemics[this.currentBucket])throw new Error("Already drew an epidemic for this bucket");this.drawnEpidemics[this.currentBucket]=!0}for(var t=this.deck-this.drawnCards,n=0,r=0;r<this.counts.length;r++){if((n+=this.counts[r])>t)return;if(n==t)return this.currentBucket--,void(this.drawnCurrentBucket=0)}}},{key:"getMinRemainder",value:function(){return this.drawnEpidemics[this.currentBucket]?this.counts[this.currentBucket]-this.drawnCurrentBucket:0}},{key:"getMaxRemainder",value:function(){return this.drawnEpidemics[this.currentBucket]?this.counts[this.currentBucket]-this.drawnCurrentBucket+this.counts[this.currentBucket-1]-1:this.counts[this.currentBucket]-this.drawnCurrentBucket-1}},{key:"getCounts",value:function(){return this.counts}},{key:"getStartingRemoval",value:function(){return 3===this.playerCount?9:8}}]),e}(),Ge=function(){function e(){Object(c.a)(this,e),this.playerDeck=void 0,this.infectionDeck=void 0,this.epidemicsDrawn=[],this.epidemicsDrawnIndex=0,this.season=0,this.month=0,this.playerDeck=new Le(48,2,2,5,0),this.infectionDeck=new Ze(1,{africaThreatCards:[],southAmericaThreatCards:[],europeThreatCards:[],asiaThreatCards:[],northAmericaThreatCards:[]})}return Object(o.a)(e,[{key:"setup",value:function(e,t,n,r,a,i,s){this.season=e,this.month=t,this.playerDeck=new Le(2===e?44:48,n,r,a,i),this.infectionDeck=new Ze(e,s),this.epidemicsDrawn=[];for(var c=0;c<a;c++)this.epidemicsDrawn.push(!1);this.epidemicsDrawnIndex=0}},{key:"getRemainingPlayerCards",value:function(){return this.playerDeck.getRemainingCards()}},{key:"getMinRemainder",value:function(){return this.playerDeck.getMinRemainder()}},{key:"getMaxRemainder",value:function(){return this.playerDeck.getMaxRemainder()}},{key:"drawPlayerDeck",value:function(e){this.playerDeck.draw(e),e&&(this.epidemicsDrawn[this.epidemicsDrawnIndex]=!0,this.epidemicsDrawnIndex++)}},{key:"drawInfectionDeck",value:function(e){this.infectionDeck.draw(e)}},{key:"removeInfectionCard",value:function(e){this.infectionDeck.removeInfectionCard(e)}},{key:"intensify",value:function(){this.infectionDeck.intensify()}},{key:"getCityGroups",value:function(){return this.infectionDeck.getCityGroups()}},{key:"getDiscards",value:function(){return this.infectionDeck.getDiscards()}},{key:"getEpidemicsDrawn",value:function(){return this.epidemicsDrawn}},{key:"getSeason",value:function(){return this.season}},{key:"getMonth",value:function(){return this.month}}]),e}(),Je=(new Ge,new(function(){function e(){Object(c.a)(this,e),this.playerDeckHandlers=[],this.infectionDeckHandlers=[],this.assistant=void 0,this.assistant=new Ge}return Object(o.a)(e,[{key:"attachPlayerDeckHandler",value:function(e){this.playerDeckHandlers.push(e)}},{key:"attachInfectionDeckHandler",value:function(e){this.infectionDeckHandlers.push(e)}},{key:"detachPlayerDeckHandler",value:function(e){var t=this.playerDeckHandlers.indexOf(e);-1!==t&&this.playerDeckHandlers.splice(t,1)}},{key:"detachInfectionDeckHandler",value:function(e){var t=this.infectionDeckHandlers.indexOf(e);-1!==t&&this.infectionDeckHandlers.splice(t,1)}},{key:"notifyHandlers",value:function(e){e.forEach((function(e){e()}))}},{key:"notifyPlayerDeckHandlers",value:function(){this.notifyHandlers(this.playerDeckHandlers)}},{key:"notifyInfectionDeckHandlers",value:function(){this.notifyHandlers(this.infectionDeckHandlers)}},{key:"setup",value:function(e,t,n,r,a,i,s){this.assistant.setup(e,t,n,r,a,i,s),this.notifyPlayerDeckHandlers(),this.notifyInfectionDeckHandlers()}},{key:"drawPlayerDeck",value:function(e){this.assistant.drawPlayerDeck(e),this.notifyPlayerDeckHandlers()}},{key:"drawInfectionDeck",value:function(e){this.assistant.drawInfectionDeck(e)}},{key:"removeInfectionCard",value:function(e){this.assistant.removeInfectionCard(e)}},{key:"intensify",value:function(){this.assistant.intensify()}},{key:"getRemainingPlayerCards",value:function(){return this.assistant.getRemainingPlayerCards()}},{key:"getCityGroups",value:function(){return this.assistant.getCityGroups()}},{key:"getDiscards",value:function(){return this.assistant.getDiscards()}},{key:"getEpidemicsDrawn",value:function(){return this.assistant.getEpidemicsDrawn()}},{key:"getMinRemainder",value:function(){return this.assistant.getMinRemainder()}},{key:"getMaxRemainder",value:function(){return this.assistant.getMaxRemainder()}},{key:"getSeason",value:function(){return this.assistant.getSeason()}},{key:"getMonth",value:function(){return this.assistant.getMonth()}}]),e}())),Fe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={season:0},k.a.get({key:"setup"}).then((function(e){k.a.get({key:"initialized"}).then((function(t){if("false"===t.value){var n=JSON.parse(e.value);Je.setup(n.season,n.month,n.playerCount,n.eventCards,n.epidemicCards,n.modifier,n.seasonZeroConfiguration),k.a.set({key:"initialized",value:"true"})}}))})),r}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(h.C,{children:[Object(p.jsxs)(h.u,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/epidemics",children:Object(p.jsx)(b,{controller:Je})}),Object(p.jsx)(d.a,{exact:!0,path:"/infections",children:Object(p.jsx)(x,{controller:Je})})]}),Object(p.jsxs)(h.A,{slot:"bottom",children:[Object(p.jsxs)(h.B,{tab:"epidemics",href:"/epidemics",children:[Object(p.jsx)(h.i,{icon:f.s}),Object(p.jsx)(h.p,{children:0===this.state.season?"Escalations":"Epidemics"})]}),Object(p.jsxs)(h.B,{tab:"infections",href:"/infections",children:[Object(p.jsx)(h.i,{icon:f.k}),Object(p.jsx)(h.p,{children:0===this.state.season?"Threats":"Infections"})]})]})]})}}]),n}(a.a.Component),We=n(6),Ke=n.n(We),Ue=n(12),qe=function(e){var t=Object(h.N)();return Object(p.jsx)(h.c,{expand:"block",onClick:Object(Ue.a)(Ke.a.mark((function n(){return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.set({key:"season",value:String(e.season)});case 2:return n.next=4,k.a.set({key:"playerCount",value:String(e.playerCount)});case 4:return n.next=6,k.a.set({key:"month",value:String(e.month)});case 6:t.push("/setup/".concat(e.season));case 7:case"end":return n.stop()}}),n)}))),children:"Next"})},Ye=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={season:0,month:1,playerCount:2},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(h.s,{children:[Object(p.jsx)(h.h,{children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{children:"Pandemic Assistant"})})}),Object(p.jsxs)(h.f,{fullscreen:!0,children:[Object(p.jsx)(h.h,{collapse:"condense",children:Object(p.jsx)(h.E,{children:Object(p.jsx)(h.D,{size:"large",children:"Pandemic Assistant"})})}),Object(p.jsxs)(h.q,{children:[Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Season"}),Object(p.jsxs)(h.y,{value:String(this.state.season),interface:"popover",onIonChange:function(t){e.setState({season:Number(t.detail.value)})},children:[Object(p.jsx)(h.z,{value:"0",children:"0"}),Object(p.jsx)(h.z,{value:"1",children:"1"}),Object(p.jsx)(h.z,{value:"2",children:"2"})]})]}),Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Player Count"}),Object(p.jsxs)(h.y,{value:String(this.state.playerCount),interface:"popover",onIonChange:function(t){e.setState({playerCount:Number(t.detail.value)})},children:[Object(p.jsx)(h.z,{value:"1",children:"1"}),Object(p.jsx)(h.z,{value:"2",children:"2"}),Object(p.jsx)(h.z,{value:"3",children:"3"}),Object(p.jsx)(h.z,{value:"4",children:"4"}),Object(p.jsx)(h.z,{value:"5",children:"5"})]})]}),Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Month"}),Object(p.jsxs)(h.y,{value:String(this.state.month),interface:"popover",onIonChange:function(t){e.setState({month:Number(t.detail.value)})},children:[Object(p.jsx)(h.z,{value:"0",children:"Prologue"}),Object(p.jsx)(h.z,{value:"1",children:"January"}),Object(p.jsx)(h.z,{value:"2",children:"February"}),Object(p.jsx)(h.z,{value:"3",children:"March"}),Object(p.jsx)(h.z,{value:"4",children:"April"}),Object(p.jsx)(h.z,{value:"5",children:"May"}),Object(p.jsx)(h.z,{value:"6",children:"June"}),Object(p.jsx)(h.z,{value:"7",children:"July"}),Object(p.jsx)(h.z,{value:"8",children:"August"}),Object(p.jsx)(h.z,{value:"9",children:"September"}),Object(p.jsx)(h.z,{value:"10",children:"October"}),Object(p.jsx)(h.z,{value:"11",children:"November"}),Object(p.jsx)(h.z,{value:"12",children:"December"})]})]}),Object(p.jsx)(h.g,{children:Object(p.jsxs)(h.v,{children:[Object(p.jsx)(h.e,{}),Object(p.jsx)(h.e,{children:Object(p.jsx)(qe,{season:this.state.season,playerCount:this.state.playerCount,month:this.state.month})}),Object(p.jsx)(h.e,{})]})})]})]})]})}}]),n}(a.a.Component),$e=(n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(10));function Qe(e){var t=[];e.seasonZeroConfiguration.africaThreatCards.forEach((function(e){t.push(e.getName())}));var n=[];e.seasonZeroConfiguration.southAmericaThreatCards.forEach((function(e){n.push(e.getName())}));var r=[];e.seasonZeroConfiguration.europeThreatCards.forEach((function(e){r.push(e.getName())}));var a=[];e.seasonZeroConfiguration.asiaThreatCards.forEach((function(e){a.push(e.getName())}));var i=[];e.seasonZeroConfiguration.northAmericaThreatCards.forEach((function(e){i.push(e.getName())}));var s=0;return 0===e.season&&(7===e.month?s=3:8===e.month?s=4:e.month>=9&&(s=5),s-=e.objectiveCards),{season:e.season,playerCount:e.playerCount,month:e.month,eventCards:e.eventCards,epidemicCards:e.epidemicCards,modifier:s,seasonZeroConfiguration:{africaThreatCards:t,southAmericaThreatCards:n,europeThreatCards:r,asiaThreatCards:a,northAmericaThreatCards:i}}}var Ve=function(e){var t=Object(h.N)();return Object(p.jsx)(h.c,{expand:"block",onClick:Object(Ue.a)(Ke.a.mark((function n(){return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.set({key:"initialized",value:"false"});case 2:return n.next=4,k.a.set({key:"setup",value:JSON.stringify(Qe(e.config))});case 4:t.push("/epidemics");case 5:case"end":return n.stop()}}),n)}))),children:"Start"})},Xe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={season:0,playerCount:4,month:1,eventCards:4,epidemicCards:5,modifier:0,objectiveCards:0,seasonZeroConfiguration:{africaThreatCards:new Set,asiaThreatCards:new Set,southAmericaThreatCards:new Set,europeThreatCards:new Set,northAmericaThreatCards:new Set}},k.a.get({key:"season"}).then((function(e){var t=Number(e.value);0===t?r.setState({season:t,epidemicCards:5}):r.setState({season:t})})),k.a.get({key:"playerCount"}).then((function(e){r.setState({playerCount:Number(e.value)})})),k.a.get({key:"month"}).then((function(e){var t=Number(e.value);r.setState({month:t,objectiveCards:r.getObjectiveCards(t)})})),r.updateExtraThreatCards.bind(Object($e.a)(r)),r}return Object(o.a)(n,[{key:"getObjectiveCards",value:function(e){switch(e){case 0:case 1:return 1;case 2:return 4;case 3:return 1;case 4:return 4;case 5:return 1;case 6:return 5}return 0}},{key:"updateExtraThreatCards",value:function(e,t){e.clear();var n,r=Object(O.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.add(a)}}catch(i){r.e(i)}finally{r.f()}}},{key:"createInfectionSelection",value:function(e,t,n,r){var a=this;return 0===this.state.season&&this.state.month>=e?Object(p.jsxs)(h.k,{children:[Object(p.jsxs)(h.p,{children:["Infected Cities (",t,")"]}),Object(p.jsx)(h.y,{multiple:!0,interface:"popover",onIonChange:function(e){a.updateExtraThreatCards(n,e.detail.value)},children:r.map((function(e){return Object(p.jsx)(h.z,{value:e,children:e.getName()},e.getName())}))})]}):Object(p.jsx)("div",{})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(h.s,{children:[Object(p.jsx)(h.h,{children:Object(p.jsxs)(h.E,{children:[Object(p.jsx)(h.d,{slot:"start",children:Object(p.jsx)(h.b,{defaultHref:"/"})}),Object(p.jsxs)(h.D,{children:["Season ",this.state.season]})]})}),Object(p.jsx)(h.f,{fullscreen:!0,children:Object(p.jsxs)(h.q,{children:[Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Event Cards"}),Object(p.jsxs)(h.y,{value:String(this.state.eventCards),interface:"popover",onIonChange:function(t){e.setState({eventCards:Number(t.detail.value)})},children:[Object(p.jsx)(h.z,{value:"0",children:"0"}),Object(p.jsx)(h.z,{value:"1",children:"1"}),Object(p.jsx)(h.z,{value:"2",children:"2"}),Object(p.jsx)(h.z,{value:"3",children:"3"}),Object(p.jsx)(h.z,{value:"4",children:"4"}),Object(p.jsx)(h.z,{value:"5",children:"5"}),Object(p.jsx)(h.z,{value:"6",children:"6"}),Object(p.jsx)(h.z,{value:"7",children:"7"}),Object(p.jsx)(h.z,{value:"8",children:"8"})]})]}),0===this.state.season&&this.state.month>8&&Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Objective Cards"}),Object(p.jsx)(h.j,{type:"number",value:this.state.objectiveCards,placeholder:"Enter Number",min:"0",onIonChange:function(t){return e.setState({objectiveCards:Number(t.detail.value)})}})]}),0!==this.state.season&&Object(p.jsxs)(h.k,{children:[Object(p.jsx)(h.p,{children:"Epidemics"}),Object(p.jsxs)(h.y,{value:String(this.state.epidemicCards),interface:"popover",onIonChange:function(t){e.setState({epidemicCards:Number(t.detail.value)})},children:[Object(p.jsx)(h.z,{value:"4",children:"4"}),Object(p.jsx)(h.z,{value:"5",children:"5"}),Object(p.jsx)(h.z,{value:"6",children:"6"}),Object(p.jsx)(h.z,{value:"7",children:"7"})]})]}),this.createInfectionSelection(3,"Africa",this.state.seasonZeroConfiguration.africaThreatCards,[$.infect(),ee.infect(),U.infect(),q.infect(),W.infect(),ye.infect()]),this.createInfectionSelection(5,"South America",this.state.seasonZeroConfiguration.southAmericaThreatCards,[Z.infect(),G.infect(),J.infect(),F.infect(),Re.infect()]),this.createInfectionSelection(7,"Europe",this.state.seasonZeroConfiguration.europeThreatCards,[Ne.infect(),te.infect(),Se.infect(),Ae.infect(),I.infect(),z.infect(),Y.infect(),T.infect(),Ee.infect(),Ie.infect(),Te.infect()]),this.createInfectionSelection(9,"Asia",this.state.seasonZeroConfiguration.asiaThreatCards,[V.infect(),de.infect(),ve.infect(),xe.infect(),re.infect(),ke.infect(),ne.infect(),Oe.infect(),we.infect(),Ce.infect(),Q.infect(),De.infect(),oe.infect()]),this.createInfectionSelection(10,"North America",this.state.seasonZeroConfiguration.northAmericaThreatCards,[S.infect(),ze.infect(),H.infect(),_.infect(),A.infect(),C.infect(),Me.infect(),Pe.infect()]),Object(p.jsx)(h.g,{children:Object(p.jsxs)(h.v,{children:[Object(p.jsx)(h.e,{}),Object(p.jsx)(h.e,{children:Object(p.jsx)(Ve,{config:this.state})}),Object(p.jsx)(h.e,{})]})})]})})]})}}]),n}(a.a.Component),et=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(h.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(d.a,{path:"/",component:Ye,exact:!0}),Object(p.jsx)(d.a,{path:"/setup/:id",component:Xe,exact:!0}),Object(p.jsx)(d.a,{path:"/epidemics",component:Fe,exact:!0}),Object(p.jsx)(d.a,{path:"/infections",component:Fe,exact:!0})]})})}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=function(e){e&&e instanceof Function&&n.e(59).then(n.bind(null,149)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(et,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),tt()}},[[86,3,4]]]);
//# sourceMappingURL=main.9ccf49c5.chunk.js.map