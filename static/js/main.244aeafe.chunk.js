(this["webpackJsonp13-12-2021"]=this["webpackJsonp13-12-2021"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},function(e,t,n){},function(e,t,n){e.exports={Friends:"Friends_Friends__2IY9Z",__friendsList:"Friends___friendsList__319r6"}},,,function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={post:"Post_post__3hqZB"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),i=n(12),o=(n(33),n(5)),j=n(22),u=n(2),d=n(18),l=n.n(d),b=n(0),h=function(e){var t=e.name||"App",n=e.links||[{link:"/",label:"Link"}],a=function(e){var t=Object(u.h)(e);return Object(u.f)({path:t.pathname,end:!0})?l.a.active:""};return Object(b.jsxs)("header",{className:l.a.header,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:n.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{className:a(e.link),to:e.link,children:e.label})},t)}))})})]})},O=n(24),f=n.n(O),x=function(){var e=(new Date).getFullYear();return Object(b.jsxs)("footer",{className:f.a.footer,children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["Copyright Edgemony - ",e]})]})},m=(n(28),"https://edgemony-backend.herokuapp.com"),p=function(e){return fetch(m+e).then((function(e){return e.json()}))},v=function(e,t){return fetch(m+e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},g=n(19),_=n.n(g),w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),l=d[0],h=d[1],O=Object(a.useState)({}),f=Object(o.a)(O,2),x=f[0],m=f[1];return Object(a.useEffect)((function(){m({author:n,text:l,date:(new Date).toISOString(),photo:i})}),[n,i,l]),Object(b.jsx)("div",{className:_.a.createPost,children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:_.a.__author,children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"author",id:"author",type:"text",placeholder:"Author",required:!0}),Object(b.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},name:"img",id:"img",type:"img",placeholder:"Img URL"}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),v("/posts",x),alert("Your post has been created")},type:"submit",children:"SEND"})]}),Object(b.jsx)("textarea",{value:l,onChange:function(e){return h(e.target.value)},name:"message",id:"message",type:"text",cols:"30",rows:"10",placeholder:"message",required:!0})]})})},y=n(16),C=n.n(y),F=n(25),P=n.n(F),k=n(38),N=n(39),S=function(e){return Object(b.jsx)(b.Fragment,{children:Object(k.a)(new Date(e.relative),new Date,{addSuffix:!0,locale:N.a})})},D=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"user"};return Object(b.jsxs)("div",{className:P.a.message,children:[Object(b.jsx)("h5",{children:t.sender}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:Object(b.jsx)(S,{relative:t.date})})}),Object(b.jsx)("p",{children:t.text})]})},E=n(26),L=n.n(E),B=function(e){var t=e.data||{author:"user",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1511149672083-577ee63de3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"};return Object(b.jsxs)("article",{className:L.a.post,children:[Object(b.jsx)("button",{onClick:function(){var t;(t="/posts/".concat(e.data.id),fetch(m+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))).then((function(){})),alert("Post by ".concat(e.author," was deleted")),window.location.href="/"},children:"X"}),Object(b.jsx)("h3",{children:t.author}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:t.date?Object(b.jsx)(S,{relative:t.date}):Object(b.jsx)(b.Fragment,{})})}),Object(b.jsx)("p",{children:t.text}),t.photo?Object(b.jsx)("img",{src:t.photo,alt:t.author}):Object(b.jsx)(b.Fragment,{})]})},H=n(27),I=n.n(H),M=function(e){var t=e.data||{name:"Friend",photo:"https://64.media.tumblr.com/5d61946de95c9cc2bfd6107c122230ac/540f0b61cb5a11f6-85/s400x600/091bc0e2aa27eae3304290cd1fd59b22ea262b9c.png"};return Object(b.jsxs)("div",{className:I.a.friend,children:[Object(b.jsx)("img",{src:t.photo,alt:t.name}),Object(b.jsx)("p",{children:t.name})]})},q=[],T=[],G=[],A=function(){var e=Object(a.useState)(q),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(G),s=Object(o.a)(r,2),j=s[0],u=s[1],d=Object(a.useState)(T),l=Object(o.a)(d,2),h=l[0],O=l[1];return Object(a.useEffect)((function(){p("/friends?_limit=4").then((function(e){return c(e)})),p("/posts").then((function(e){return u(e.reverse())})),p("/messages?_limit=4").then((function(e){return O(e)}))}),[]),Object(b.jsxs)("section",{className:C.a.home,children:[Object(b.jsx)("h3",{children:"Benvenuto utente!"}),Object(b.jsxs)("div",{className:C.a.grid,children:[Object(b.jsx)("aside",{children:n.map((function(e,t){return Object(b.jsx)(M,{data:e},t)}))}),Object(b.jsxs)("main",{children:[Object(b.jsx)(i.b,{to:"/new-post",children:Object(b.jsx)("button",{className:C.a.createPostBtn,children:"+ Create a new post!"})}),j.map((function(e,t){return Object(b.jsx)(B,{data:e},t)}))]}),Object(b.jsx)("aside",{children:h.map((function(e,t){return Object(b.jsx)(D,{data:e},t)}))})]})]})},J=function(){return Object(b.jsx)("h1",{children:"prova render"})},U=n(20),X=n.n(U),Y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(a.useState)({}),d=Object(o.a)(u,2),l=d[0],h=d[1];return Object(a.useEffect)((function(){h({name:n,photo:i})}),[n,i]),Object(b.jsx)("div",{className:X.a.createFriend,children:Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:X.a.__friend,children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"friend",id:"friend",type:"text",placeholder:"Friend name",required:!0}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:i,name:"photo",id:"photo",type:"text",placeholder:"Photo URL"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),v("/friends",l),alert("L'amico \xe8 stato aggiunto")},children:"ADD"})]})})})},R=n(21),W=n.n(R),Z=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){p("/friends?_page=1").then((function(e){return c(e)}))}),[]),Object(b.jsxs)("div",{className:W.a.Friends,children:[Object(b.jsx)(Y,{}),Object(b.jsx)("div",{className:W.a.__friendsList,children:n.map((function(e){return Object(b.jsx)(M,{data:e},e.id)}))})]})},Q=function(e){return Object(b.jsxs)("div",{className:"loginWrapper",children:[Object(b.jsx)("h1",{children:"Please Log In"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:e.user,onChange:function(e){return{user:e.target.value}},name:"username",id:"username",type:"text",placeholder:"UserName",required:!0}),Object(b.jsx)("input",{value:e.password,onChange:function(e){return{password:e.target.value}},name:"password",id:"password",type:"text",placeholder:"Password"})]}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault()},children:"Enter"})]})]})},V={name:"Feisbrut",nav:[{link:"/",label:"Home"},{link:"/friends",label:"Friends"},{link:"/messages",label:"Messages"},{link:"/login",label:"Login"}],friendsPreview:[]},z=function(e,t){return"change-name"===t.type?Object(j.a)(Object(j.a)({},e),{},{name:"Feisbell"}):e};var K=function(){var e=Object(a.useReducer)(z,V),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{name:n.name,links:n.nav}),Object(b.jsx)("button",{onClick:function(){return c({type:"change-name"})},children:"Cambia nome"}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(A,{})}),Object(b.jsx)(u.a,{path:"/new-post",element:Object(b.jsx)(w,{})}),Object(b.jsx)(u.a,{path:"/messages",element:Object(b.jsx)(J,{})}),Object(b.jsx)(u.a,{path:"/friends",element:Object(b.jsx)(Z,{})}),Object(b.jsx)(u.a,{path:"/login",element:Object(b.jsx)(Q,{})})]}),Object(b.jsx)(x,{})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(K,{})})}),document.getElementById("root")),$()}],[[35,1,2]]]);
//# sourceMappingURL=main.244aeafe.chunk.js.map