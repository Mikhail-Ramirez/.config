(self.webpackChunk=self.webpackChunk||[]).push([[2852],{80559:(e,t,n)=>{n.d(t,{p:()=>r});var r,i=n(49231),a=n(90023),o=n(25770),l=n(39620),c=n(10859),d=n(78488),s=n(69715),u=n(58303),m=n(52256),f=n(7399);!function(e){var t=e.Manager=function(e){var t=e.children,n=e.cardWidth,r=l.Dx(n).pipe(c.shareReplay({refCount:!0,bufferSize:1}));return f.P.useSingleton("CardWidth.Manager"),f.P.useSubscriptionTo(r),i.createElement(h.Provider,{value:r},t)},n=(e.DefaultManager=function(e){var r=e.children;return f.P.useSingleton("CardWidth.DefaultManager"),i.createElement(t,{cardWidth:n(p)},r)},e.withCardWidthEffect=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return e.pipe(d.b((function(e){return t(u.G(e))})),s.x(t.bind(null,u.YP)),c.shareReplay({refCount:!0,bufferSize:1}))}),r=e.defaultCardWidthSetter=function(e){x(document.documentElement,e)},p=e.defaultSizeObserver=o.h.create(400),h=e.Context=i.createContext(p),x=e.setRootCssVar=function(e,t){e.style.setProperty("--cardWidth",(0,a.zG)(t,u.UI(String),m.QP))}}(r||(r={}))},74959:(e,t,n)=>{n.d(t,{L:()=>c});var r,i=n(21101),a=n(49231),o=n(99627),l=n(3728),c=function(e){var t=e.double,n=e.triple,r=e.small;return a.createElement("div",(0,o.Sh)(u,!0===t&&f,!0===n&&h,!0===r&&x))},d=.875,s="spacer",u=l.ux.joinClasses([s,l.ux.style({margin:0,minHeight:l.ux.rem(d),maxHeight:l.ux.rem(1),width:l.ux.percent(100),height:l.ux.rem(1)})]),m="spacerDouble",f=l.ux.joinClasses([m,l.ux.style({minHeight:l.ux.rem(1.75),maxHeight:l.ux.rem(2),height:l.ux.rem(2)})]),p="spacerTriple",h=l.ux.joinClasses([p,l.ux.style({minHeight:l.ux.rem(2.625),maxHeight:l.ux.rem(3),height:l.ux.rem(3)})]),x=l.ux.style({$nest:(r={},(0,i._)(r,"&.".concat(s),{minHeight:l.ux.rem(.4375),maxHeight:l.ux.rem(.5),height:l.ux.rem(.5)}),(0,i._)(r,"&.".concat(m),{minHeight:l.ux.rem(d),maxHeight:l.ux.rem(1),height:l.ux.rem(1)}),(0,i._)(r,"&.".concat(p),{minHeight:l.ux.rem(1.3125),maxHeight:l.ux.rem(1.5),height:l.ux.rem(1.5)}),r)})},34796:(e,t,n)=>{n.d(t,{W:()=>j});var r=n(49231),i=n(46504),a=n(38569),o=n(15384),l=n(3728),c=l.ux.style({position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}),d=function(e){var t=e.children,n=(0,o._)(e,["children"]);return r.createElement("div",(0,a._)((0,i._)({},n),{className:c}),t)},s=n(74959),u=n(38103),m=n(99627),f=n(47293),p=n(69888);const h={position:"relative",$nest:{"&:not(:last-child)":{marginBottom:l.ux.rem(.5)}}},x={fontWeight:700,color:p.Il.CoreNeutral60},g={width:l.ux.percent(100),display:"flex",justifyContent:"space-between",alignItems:"center",$nest:{"&:hover":{cursor:"pointer"}}},v={transition:"transform .25s"},C={display:"flex",flexDirection:"column",marginLeft:l.ux.rem(1.875),maxWidth:l.ux.rem(15)},y=l.ux.prefixedStylesheet("accordion",{accordion:[{padding:0}],accordionItem:[h],title:[x],button:[g],arrow:[v],arrowRotated:[v,{transform:"rotate(180deg)"}],content:[C],hiddenContent:[{display:"none"}]}),E=e=>r.createElement("svg",{"aria-hidden":!0,className:e.className,width:"13",height:"8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2.115.295-1.41 1.41 6 6 6-6-1.41-1.41-4.59 4.58-4.59-4.58z",fill:"#6D758D"})),b=({children:e,ariaLabelledBy:t,ariaLabel:n,className:a})=>r.createElement("div",(0,i._)({"aria-labelledby":t,"aria-label":n},(0,m.Sh)(y.accordion,a)),e),w=e=>{const{title:t,id:n,children:i,isExpanded:a,onClick:o}=e,l=`accordion-item-${n}`,c=`accordion-control-${n}`;return r.createElement("div",{className:y.accordionItem},r.createElement(f.zx,{id:c,"aria-controls":l,"aria-expanded":a,className:y.button,name:`accordion-button-${n}`,onClick:o},t,r.createElement("span",null,r.createElement(E,{className:a?y.arrowRotated:y.arrow}))),r.createElement("div",{id:l,"aria-hidden":!a,className:a?y.content:y.hiddenContent,"data-name":`accordion-content-${n}`},i))},I={marginTop:l.ux.rem(1.5)},S={color:p.Il.CoreNeutral60,marginLeft:l.ux.rem(.6)},k={fontSize:l.ux.rem(.9),lineHeight:l.ux.rem(1.25),color:p.Il.CoreNeutral60,maxWidth:l.ux.rem(15),margin:0},N=l.ux.prefixedStylesheet("checklist",{listItemTitleContainer:[{display:"flex",alignItems:"center"}],list:[I],listItemTitle:[S],listItemDescription:[k]}),A={display:"flex",justifyContent:"center",alignItems:"center",height:l.ux.px(20),width:l.ux.px(20),borderRadius:l.ux.percent(100),border:"1px solid",transition:"border-color .25s ease, background-color .25s ease"},L={borderColor:p.Il.CoreGreen50,backgroundColor:p.Il.CoreGreen50},G={borderColor:p.Il.CoreGreen50,backgroundColor:p.Il.CoreGreen1,$nest:{"> svg":{display:"none"}}},H={borderColor:p.Il.CoreNeutral30,backgroundColor:p.Il.CoreNeutral30},W=l.ux.prefixedStylesheet("completion_icon",{completed:[A,L],active:[A,G],notCompleted:[A,H]}),z=()=>r.createElement("div",{className:W.completed},r.createElement("svg",{"aria-hidden":!0,width:"12",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1 4.89 4.08 8 11 1",stroke:"#fff",strokeLinecap:"round"}))),P=e=>r.createElement("div",{className:e.isExpanded?W.active:W.notCompleted},r.createElement("svg",{"aria-hidden":!0,width:"12",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1 4.89 4.08 8 11 1",stroke:"#fff",strokeLinecap:"round"}))),M=e=>e.completionState.isCompleted?r.createElement(z,null):r.createElement(P,{isExpanded:e.completionState.isExpanded}),{Button:U}=u.Z,T=({title:e,completionState:t})=>r.createElement("div",{className:N.listItemTitleContainer},r.createElement(M,{completionState:t}),r.createElement(U,{className:N.listItemTitle},e),r.createElement(d,null,t.isCompleted?"Completed":"Uncompleted")),j=e=>{const{allChecklistItems:t,completedItems:n,expandedItems:i,ariaLabelledBy:a,onExpandItem:o,getCTA:l}=e;return r.createElement(b,{className:N.list,ariaLabelledBy:a},t.map((({description:e,id:t,title:a})=>{const c={isCompleted:n.items.has(t),isExpanded:i.has(t)};return r.createElement(w,{key:t,id:t,title:r.createElement(T,{title:a,completionState:c}),isExpanded:c.isExpanded,onClick:()=>o(t)},r.createElement("p",{className:N.listItemDescription},e),r.createElement(s.L,{small:!0}),l(t))})))}},56634:(e,t,n)=>{n.d(t,{p:()=>u});var r=n(90023),i=n(58303),a=n(52256),o=n(86002),l=n(8999),c=n(69857),d=n(20715),s=n(65647);function u(e,t){return o.Z.composeKnot({content:o.Z.fromSideEffect(r.Q1,f(e,t)),root:m()})}var m=function(){return function(){return d.of({})}};function f(e,t){var n=e.view(t.getActiveAlertsCount).view((function(e){return 0===e})),o=e.view(c.v.Prism.getFeedItems());return e.pipe(s.U(l.In.getActiveItem),s.U((function(e){if(i.Wi(e))return{root:"empty",card:{kind:"empty"}};var l=a.MH(e),c=o.get(),d=(0,r.zG)(c.getAt(c.size-1),i.Gg((function(e){return e.id===l.id})));return{root:l.id,card:t.viewState(n.get(),d)(l)}})))}},90459:(e,t,n)=>{n.d(t,{c:()=>r});var r,i=n(49231),a=n(43818),o=n(58303),l=n(86002);!function(e){var t,n=function(e){return l.UI.Knot.make(c,{card:e})};!function(e){e.onMount="onMount"}(t=e.ActionsKind||(e.ActionsKind={})),e.assistant=function(e){return l.UI.Knot.make(r,{content:n(e)})};var r=e.AssistantBox=l.UI.Grid.make((function(e){var n=e.notify,r=e.slots;return i.createElement(a.F.div,{id:"assistant-feed-wrapper",mount:function(e){return n({kind:t.onMount,element:o.ij(e)})()}},r.content)}));e.card=n;var c=e.IdProvider=l.UI.Grid.make((function(e){var t=e.slots,n=e.state;return i.createElement(a.F.div,{"data-id":n},t.card)}))}(r||(r={}))},87197:(e,t,n)=>{n.d(t,{N:()=>r});var r,i=n(86399),a=n(90023),o=n(65647),l=n(80724),c=n(70989),d=n(55446),s=n(58303),u=n(8999),m=n(90201);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){l=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){!function(e){!function(e){e.fromSduiCardActions=(0,a.ls)(o.U((function(e){var t=(0,a.zG)(e.actions,i.hX(m.zx.Action.isTransitionAction));return e.actions.find((function(e){return"prevCard"===e.type}))?s.G({kind:"prevClicked",transitions:t}):e.actions.find((function(e){return"nextCard"===e.type}))?s.G({kind:"nextClicked",transitions:t}):s.YP})),l.oA)}(e.Events||(e.Events={}));e.sideEffect=function(e,t,n){return{id:"SingleCardAssistant.prevNextNavigation",when:u.nL.Effect.When.isSidebarOpen,what:u.nL.Effect.ItemsApplicator.create((0,a.zG)(e,c.M(t.pipe(d.h(u.nL.hasCards))),o.U((function(e){var t=p(e,2),n=t[0],r=t[1];return(0,a.zG)(r.currentLens.cardIndex,s.tS((function(e){return r.currentLens.items.getAt("nextClicked"===n.kind?e+1:e-1)})))})),l.oA,o.U((function(e){return function(t){return u.nL.Prism.getLensWithItems().modify(n.selectItemById(e.id),t)}}))))}}}(e.PrevNextNavigation||(e.PrevNextNavigation={}))}(r||(r={}))}}]);