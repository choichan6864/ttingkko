(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{6279:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/write-person",function(){return i(1110)}])},7667:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var s=i(5893),n=i(357),o=i.n(n);function d(e){let{event:t,text:i,mod:n,title:d}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:n,onClick:t,title:d,className:"jsx-cafc40fce5e7812f",children:i}),(0,s.jsx)(o(),{id:"cafc40fce5e7812f",children:"button.jsx-cafc40fce5e7812f{height:40px;cursor:pointer;background-color:rgb(0,0,0,0);border:1px solid white;width:40px}"})]})}},840:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var s=i(5893),n=i(357),o=i.n(n),d=i(7294),r=i(7667);function l(e){let{index:t,remove:i,Contents:n,ListText:l,setListToTrue:x,setListToFalse:a}=e,[c,p]=(0,d.useState)({listText:l,contents:n}),[u,b]=(0,d.useState)(""===n),m=(0,d.useRef)(null),f=(0,d.useRef)(null),{listText:j,contents:h}=c,w=e=>p({contents:e.target.innerHTML,listText:j}),g=e=>p({...c,listText:e.target.innerHTML}),k=()=>{""===n&&""===l?i(t):(p({listText:l,contents:n}),b(!1))},v=()=>{""!==c.contents&&""!==c.listText&&(b(!1),x())};return(0,d.useEffect)(()=>{var e;null===(e=m.current)||void 0===e||e.focus()},[u]),(0,s.jsxs)(s.Fragment,{children:[u?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-2542344ed30d5e41 element-to-plus",children:[(0,s.jsxs)("div",{className:"jsx-2542344ed30d5e41 input-group",children:[""===j?(0,s.jsx)("div",{className:"jsx-2542344ed30d5e41 list-name-input-placeholder input-placeholder",children:"추가할 이름"}):null,(0,s.jsx)("div",{onInput:g,contentEditable:!0,onFocus:e=>{e.target.innerHTML!==j&&(e.target.innerHTML=j)},ref:f,className:"jsx-2542344ed30d5e41 input list-name-input"})]}),(0,s.jsx)("hr",{className:"jsx-2542344ed30d5e41"}),(0,s.jsxs)("div",{className:"jsx-2542344ed30d5e41 input-group",children:[""===h?(0,s.jsx)("div",{className:"jsx-2542344ed30d5e41 input-placeholder contents-input-placeholder ",children:"내용"}):null,(0,s.jsx)("div",{onInput:w,contentEditable:!0,ref:m,onFocus:e=>{if(e.target.innerHTML!==h){var t;e.target.innerHTML=h,null===(t=f.current)||void 0===t||t.focus()}},className:"jsx-2542344ed30d5e41 input content-input"})]})]}),(0,s.jsxs)("div",{className:"jsx-2542344ed30d5e41",children:[(0,s.jsx)("button",{onClick:k,type:"button",className:"jsx-2542344ed30d5e41 cancel-button",children:"취소"}),(0,s.jsx)("button",{onClick:v,type:"button",className:"jsx-2542344ed30d5e41 save-button",children:"저장"})]})]}):(0,s.jsxs)("div",{className:"jsx-2542344ed30d5e41 list",children:[(0,s.jsxs)("h1",{className:"jsx-2542344ed30d5e41",children:[(0,s.jsx)("span",{className:"jsx-2542344ed30d5e41",children:t+1}),(0,s.jsx)("span",{className:"jsx-2542344ed30d5e41",children:"."}),(0,s.jsx)("span",{className:"jsx-2542344ed30d5e41 listText",children:j}),(0,s.jsx)(r.Z,{text:"\uD83D\uDDD1",mod:"button",event:()=>i(t),title:"수정"}),(0,s.jsx)(r.Z,{text:"\uD83D\uDD8D",mod:"button",event:()=>{b(!0),a()},title:"수정"})]}),(0,s.jsx)("hr",{className:"jsx-2542344ed30d5e41"}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:h},className:"jsx-2542344ed30d5e41 contents"}),(0,s.jsx)("input",{type:"hidden",name:"listText",value:c.listText,className:"jsx-2542344ed30d5e41"}),(0,s.jsx)("input",{type:"hidden",name:"contents",value:c.contents,className:"jsx-2542344ed30d5e41"})]},t),(0,s.jsx)(o(),{id:"2542344ed30d5e41",children:".list-name-input-placeholder.jsx-2542344ed30d5e41{font-size:16px;padding-top:14px}.contents-input-placeholder.jsx-2542344ed30d5e41{font-size:12px;padding-top:7px}.input-placeholder.jsx-2542344ed30d5e41{position:absolute;padding-left:10px;color:rgb(255,255,255,.5)}.input-group.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.input.jsx-2542344ed30d5e41{position:relative;left:0;width:100%;border:1px solid white;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-bottom:20px;color:white}.list-name-input.jsx-2542344ed30d5e41{padding:10px 0 10px 10px;font-size:25px;font-weight:bold}.content-input.jsx-2542344ed30d5e41{padding:5px 0 5px 10px}.element-to-plus.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}hr.jsx-2542344ed30d5e41{border-bottom:1px solid white;margin-bottom:20px}.plus-list-input.jsx-2542344ed30d5e41{padding-left:10px;height:35px;font-size:15px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.cancel-button.jsx-2542344ed30d5e41{cursor:pointer;width:5rem;height:35px;color:black;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.save-button.jsx-2542344ed30d5e41{color:black;cursor:pointer;width:5rem;height:35px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.contents.jsx-2542344ed30d5e41{padding-left:1.4rem}.list-group.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.list.jsx-2542344ed30d5e41{margin-bottom:20px}.listText.jsx-2542344ed30d5e41{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}h1.jsx-2542344ed30d5e41{font-size:25px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:40px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"})]})}},5501:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var s=i(5893),n=i(357),o=i.n(n),d=i(7294),r=i(7667);function l(e){let{onClickPlusButton:t}=e,[i,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>150&&!i?n(!0):n(!1)})},[]),(0,s.jsxs)("div",{className:o().dynamic([["7fede376adb27f15",[i?"position: fixed;":"margin-bottom:20px;"]]])+" tool-bar",children:[(0,s.jsx)(r.Z,{mod:"button",text:"+",event:t,title:"목록 추가"}),(0,s.jsx)(r.Z,{text:"\uD83D\uDCC4",mod:"submit",event:()=>{},title:"저장"}),(0,s.jsx)(r.Z,{text:"\uD83D\uDDBC",mod:"button",event:()=>{},title:"이미지 추가"}),(0,s.jsx)(o(),{id:"7fede376adb27f15",dynamic:[i?"position: fixed;":"margin-bottom:20px;"],children:".tool-bar.__jsx-style-dynamic-selector{height:40px;".concat(i?"position: fixed;":"margin-bottom:20px;","\n            background-color:rgb(0,0, 200);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:1;max-width:1e3px;width:100%;top:90px}")})]})}},1110:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var s=i(5893),n=i(357),o=i.n(n),d=i(7294),r=i(840),l=i(5501);function x(){let[e,t]=(0,d.useState)(""),[i,n]=(0,d.useState)([]),x=e=>{n(t=>{let i=t.filter((t,i)=>i!==e);return i})},a=e=>{n(t=>{let i=t;return i[e]={active:!0,i:e},i})},c=e=>{n(t=>{let i=t;return i[e]={active:!1,i:e},i})},p=()=>{let e=i.length;n([...i,{active:!1,i:e}])},u=e=>{t(e.target.value)},b=t=>{console.log(i),i[0]&&""!==e||t.preventDefault()};return(0,s.jsxs)("form",{action:"/api/write",method:"post",onSubmit:b,className:"jsx-705877966ca32c72",children:[(0,s.jsx)("input",{name:"personName",placeholder:"이름",type:"text",onChange:u,className:"jsx-705877966ca32c72 plus-input"}),(0,s.jsx)(l.Z,{onClickPlusButton:p}),i.map((e,t)=>(0,s.jsx)(r.Z,{Contents:"",ListText:"",remove:()=>x(t),index:t,setListToTrue:()=>a(t),setListToFalse:()=>c(t)},e.i)),(0,s.jsx)(o(),{id:"705877966ca32c72",children:'h1.jsx-705877966ca32c72{font-size:40px}.cancel-button.jsx-705877966ca32c72{cursor:pointer;width:5rem;height:35px;color:black;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.save-button.jsx-705877966ca32c72{color:black;cursor:pointer;width:5rem;height:35px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.plus-input.jsx-705877966ca32c72{padding-left:20px;height:50px;font-size:20px;margin-bottom:20px;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;color:black}input[type="submit"].jsx-705877966ca32c72{height:50px}form.jsx-705877966ca32c72{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}'})]})}function a(){return(0,s.jsx)(x,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6279)}),_N_E=e.O()}]);