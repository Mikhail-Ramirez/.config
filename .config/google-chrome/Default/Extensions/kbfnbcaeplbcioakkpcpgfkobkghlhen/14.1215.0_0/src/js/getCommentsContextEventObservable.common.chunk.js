(self.webpackChunk=self.webpackChunk||[]).push([[4266],{7849:(e,t,n)=>{n.d(t,{CZ:()=>u,Hq:()=>i,QY:()=>r,Ue:()=>c,Xw:()=>d,aS:()=>l,fo:()=>f,k4:()=>h,tg:()=>p});var r,s,i,o=n(88359),a=n(21768);function l(e,t){if(e.length<=t)return e;if(t<=3)return"...";const n=Math.ceil((t-3)/2),r=Math.floor((t-3)/2);return`${e.substring(0,n)}...${e.substring(e.length-r,e.length)}`}function u(e){const t=e.match(/`{3,}[^`]*`{3,}/g);return null==t?e:t.reduce(((e,t)=>e.replace(t,"")),e)}function c(e){return e.replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"").toLowerCase()}function d(e){var t;return(null===(t=/^(hwr:\/\/.+$|https?:\/\/[^/]+)/.exec(e))||void 0===t?void 0:t[1])||"Undetermined"}!function(e){e.getNumInsertedLetters=function(e){return e.ops.reduce(((e,t)=>o.s.isInsertString(t)?e+o.s.getInsertLength(t):e),0)},e.getNumDeletedLetters=function(e){const t=e.ops.filter((e=>o.s.isDelete(e)));let n=0;return t.forEach((e=>{o.s.isDelete(e)&&(n+=e.delete)})),n},e.getSummary=function(e,t){return t.ops.reduce(((t,n)=>{let{retained:r,retainedPrefix:s,deleted:i,inserted:a,maximalReplacement:l}=t.summary,u=t.pointer;return o.s.isRetain(n)&&(r=`${r}${e.substring(u,u+n.retain)}`,s=0===i.length&&0===a.length?`${s}${e.substring(u,u+n.retain)}`:s,l=l.length?`${l}${e.substring(t.pointer,t.pointer+n.retain)}`:l,u+=n.retain),o.s.isDelete(n)&&(i=`${i}${e.substring(u,u+n.delete)}`,u+=n.delete),o.s.isInsertString(n)&&(a=`${a}${n.insert}`,l=`${l}${n.insert}`),{pointer:u,summary:{retained:r,retainedPrefix:s,deleted:i,inserted:a,maximalReplacement:l}}}),{pointer:0,summary:{retained:"",retainedPrefix:"",deleted:"",inserted:"",maximalReplacement:""}}).summary},e.extractMaximalReplacementString=function(e,t){return t.ops.reduce(((t,n)=>(o.s.isInsertString(n)?t.text=`${t.text}${n.insert}`:o.s.isDelete(n)?t.originalTextPointer+=n.delete:o.s.isRetain(n)&&(t.text.length&&(t.text=`${t.text}${e.substring(t.originalTextPointer,t.originalTextPointer+n.retain)}`),t.originalTextPointer+=n.retain),t)),{text:"",originalTextPointer:0}).text||null},e.singleDelta=function(e,t){if(e===t)return new a.i([]);let n=0;const r=Math.min(e.length,t.length);for(;n<r&&e[n]===t[n];)n++;let s=0;for(;n+s<r&&t[t.length-s-1]===e[e.length-s-1];)s++;const i=e.length-(n+s),o=t.length-(n+s),l=[...n>0?[{retain:n}]:[],...i>0?[{delete:i}]:[],...o>0?[{insert:t.substring(n,n+o)}]:[]];return new a.i(l)},e.isNoTextChangesDelta=function(e){return e.ops.every((e=>o.s.isInsertString(e)?!e.insert.length:!o.s.isDelete(e)||!e.delete))}}(r||(r={})),function(e){e.isTextEqual=function(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;++n)if(e[n].char!=t[n].char)return!1;return!0},e.isContentEqual=function(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;++n)if(e[n].char!=t[n].char||e[n].sourceContentId!=t[n].sourceContentId||e[n].isSelfAuthored!=t[n].isSelfAuthored)return!1;return!0}}(s||(s={})),function(e){e.hasPerLetterTags=function(e){return e.isSelfAuthoredTags.length==e.text.length},e.toLoggableString=function(e){const t=l(e.text,40);return`CopiedContent [text length=${e.text.length}, has per letter tags=$hasPerLetterTags({sourcedContent)}, text=${t}]`},e.eq=function(e,t){if(e.length!==t.length)return!1;const n=e.slice().sort(((e,t)=>e.text.localeCompare(t.text)||e.sourceName.localeCompare(t.sourceName))),r=t.slice().sort(((e,t)=>e.text.localeCompare(t.text)||e.sourceName.localeCompare(t.sourceName)));return n.every(((e,t)=>e.text===r[t].text&&e.sourceName===r[t].sourceName))}}(i||(i={}));const g=new Set(["'","‘","’","＇","ߴ","ߵ"]),m=new Set(['"',"«","»","","“","”","„","‟","‹","›","❮","❯","❝","❞","❛","❜","〝","〞","⹂"]);function h(e,t,n){var s,i,o,a;const l=r.getSummary(e,t);return".."===l.deleted&&"…"===l.inserted&&"."===(null===(s=n[0])||void 0===s?void 0:s.key)||"…"===l.deleted&&"..."===l.inserted&&""===(null===(i=n[0])||void 0===i?void 0:i.key)||"-"===l.deleted&&"–"===l.inserted&&"-"===(null===(o=n[0])||void 0===o?void 0:o.key)||"–"===l.deleted&&"--"===l.inserted&&""===(null===(a=n[0])||void 0===a?void 0:a.key)?1:0}function f(e,t){return!!e.length&&e.split("").every(((e,n)=>{var r,s,i;return void 0!==(null===(r=t[n])||void 0===r?void 0:r.key)&&(s=t[n].key,i=e,1===s.length&&1===i.length&&(s===i||"'"===s&&g.has(i)||'"'===s&&m.has(i)))}))}function p(e){return e.map((e=>({...e,key:/\p{Letter}/u.test(e.key)?"#":e.key})))}},35778:(e,t,n)=>{n.r(t),n.d(t,{extractGDocsCommentContent:()=>$,getCommentsContextEventObservable:()=>w,getDiff:()=>S,recordChanged:()=>b,transformThreadsToSiblings:()=>y});var r,s=n(72314),i=n(8748),o=n(20715),a=n(25989),l=n(65882),u=n(55446),c=n(14765),d=n(74857),g=n(60841),m=n(65647),h=n(43456),f=n(7849),p=n(91795);!function(e){e.Added="ADDED",e.Removed="REMOVED",e.Updated="UPDATED"}(r||(r={}));var x=n(34770),v=n(55231);function y(e,t,n){return e.map((e=>({docId:n,audience:{channelId:e.id},children:e.messages.map((e=>({audience:{channelId:e.id},authors:[{name:e.author.name,email:e.author.isCurrentSessionUser?t.email:e.author.email,currentSessionUser:e.author.isCurrentSessionUser}],delta:e.delta})))})))}function C(e){return Array.from(e).filter((e=>"classList"in e||!!e.parentElement)).some((e=>{var t;return"classList"in e?e.classList.contains("docos-anchoreddocoview")&&!e.classList.contains("docos-comments-pe")||e.classList.contains("docos-replyview"):null===(t=e.parentElement)||void 0===t?void 0:t.classList.contains("docos-replyview-body")}))}const $=e=>{const t=document.createElement("span");return t.innerHTML=(0,s.sanitize)(e),t.textContent||""};function D(e){return e.messages.some((e=>e.author.isCurrentSessionUser))}function S(e,t){const n=[],s=new Map(e.map((e=>[e.id,e]))),i=new Map(t.map((e=>[e.id,e])));for(const e of t){const t=[],i=s.get(e.id);if(!i){n.push({...e,messages:e.messages.map((e=>({...e,delta:f.QY.singleDelta("",e.content)}))),diffType:r.Added});continue}const o=new Map(i.messages.map((e=>[e.id,e]))),a=new Set(e.messages.map((e=>e.id)));e.messages.forEach((e=>{const n=e.content,r=o.get(e.id),s=r?r.content:"";s!==n&&t.push({...e,delta:f.QY.singleDelta(s,n)})})),i.messages.forEach((e=>{const n=e.content;a.has(e.id)||t.push({...e,delta:f.QY.singleDelta(n,"")})})),t.length&&n.push({...e,messages:t,diffType:r.Updated})}return e.forEach((e=>{i.has(e.id)||n.push({...e,messages:e.messages.map((e=>({...e,delta:f.QY.singleDelta(e.content,"")}))),diffType:r.Removed})})),n}function b(e){return C(e.addedNodes)||C(e.removedNodes)}function w(e,t,n){const r=e.querySelector(".kix-discussion-plugin"),s=(0,v.j)(e.URL)||"";if(!r)return i.E;let f=[];return p.x.createUnsafe(r,{childList:!0,subtree:!0}).pipe((0,u.h)((e=>Array.from(e).some((e=>b(e))))),(0,c.O)(void 0),(0,d.b)(2e3),(0,g.w)((e=>n?(0,a.D)(n().then((e=>{const t=e.filter(D).map((e=>function(e){return{...e,messages:e.messages.map((e=>({...e,content:$(e.content)}))).filter((e=>e.content.length))}}(e))),n=S(f,t);return f=t,n}))):(0,o.of)([]))),(0,u.h)((e=>!!e.length)),(0,g.w)((e=>(0,l.aj)([(0,o.of)(e),t]))),(0,m.U)((([e,t])=>x.t.createDocContextUpdatedEvent({siblings:y(e,t,s)}))),(0,h.d)({bufferSize:1,refCount:!0}))}}}]);