(this.webpackJsonpreactsheakers=this.webpackJsonpreactsheakers||[]).push([[0],{18:function(e,t,c){e.exports={overlay:"Drawer_overlay__3snxP",overlayVisible:"Drawer_overlayVisible__wAdeW",drawer:"Drawer_drawer__CXr3m",items:"Drawer_items__27Pd4"}},19:function(e,t,c){e.exports={card:"Card_card__3zHme",btnPlus:"Card_btnPlus__zJxNz",favorite:"Card_favorite__2fJ-d"}},40:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(32),s=c.n(n),i=(c(40),c(41),c(9)),o=c(7),l=c.n(o),d=c(10),j=c(3),u=c(4),b=c.n(u),x=a.a.createContext({}),h=c(1);var m=function(e){var t=e.image,c=e.title,r=e.description,n=a.a.useContext(x).setCloseDrawer;return Object(h.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(h.jsx)("img",{className:"mb-20",width:"120px",src:t,alt:"Empty"}),Object(h.jsx)("h2",{children:c}),Object(h.jsx)("p",{className:"opacity-6",children:r}),Object(h.jsxs)("button",{className:"greenButton",onClick:function(){return n(!1)},children:[Object(h.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},f=c(18),p=c.n(f),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var O=function(e){var t=e.onClickClose,c=e.sneakers,r=e.itogo,n=e.removeCart,s=e.opened,i=a.a.useContext(x),o=i.cardSneakers,u=i.setCardSneakers,f=a.a.useState(!1),O=Object(j.a)(f,2),g=O[0],k=O[1],w=a.a.useState(null),N=Object(j.a)(w,2),C=N[0],y=N[1],I=a.a.useState(!1),S=Object(j.a)(I,2),_=S[0],P=S[1],L=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,b.a.post("https://6161517ee46acd001777c003.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,y(c.id),k(!0),u([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,b.a.delete("https://6161517ee46acd001777c003.mockapi.io/cart/"+a.id);case 14:return e.next=16,v(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 :(");case 24:P(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"".concat(p.a.overlay," ").concat(s&&p.a.overlayVisible),children:Object(h.jsxs)("div",{className:p.a.drawer,children:[Object(h.jsxs)("h2",{className:"d-flex justify-between mb-30  ",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(h.jsx)("img",{className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"remove",onClick:t})]}),c.length>0?Object(h.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(h.jsx)("div",{className:"items flex",children:c.map((function(e,t){return Object(h.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgURL,")")},className:"cartItemImg"}),Object(h.jsxs)("div",{className:"mr-20 flex",children:[Object(h.jsx)("p",{className:"mb-5",children:e.title}),Object(h.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(h.jsx)("img",{onClick:function(){return n(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"remove"})]},t)}))}),Object(h.jsxs)("div",{className:"cartTotalBlock",children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[r," \u0440\u0443\u0431."]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[r/100*5," \u0440\u0443\u0431."]})]})]}),Object(h.jsxs)("button",{disabled:_,onClick:L,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(h.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(h.jsx)(m,{image:g?"img/complete-order.jpg":"img/empty-cart.jpg",title:g?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:g?"\u0417\u0430\u043a\u0430\u0437 #".concat(C,"  \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0441\u043b\u0443\u0436\u0431\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 "):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})]})})},g=c(11);var k=function(e){var t=e.onClickClose,c=e.itogo;return Object(h.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(h.jsx)(g.b,{to:"/",children:Object(h.jsxs)("div",{className:"d-flex align-center",children:[Object(h.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(h.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(h.jsxs)("ul",{className:"d-flex",children:[Object(h.jsxs)("li",{className:"mr-30 cu-p",onClick:t,children:[Object(h.jsx)("img",{width:18,hight:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(h.jsxs)("span",{children:[c," \u0440."]})]}),Object(h.jsx)(g.b,{to:"/favorite",children:Object(h.jsx)("li",{className:"mr-20 cu-p",children:Object(h.jsx)("img",{width:18,hight:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(h.jsx)(g.b,{to:"/orders",children:Object(h.jsx)("li",{className:"cu-p",children:Object(h.jsx)("img",{width:18,hight:18,src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},w=c(2),N=c(12),C=c(35),y=c(19),I=c.n(y);var S=function(e){var t=e.id,c=(e.parentId,e.title),r=e.price,n=e.imgURL,s=e.onPlus,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,d=e.loading,u=void 0!==d&&d,b=a.a.useContext(x).isItemAdded,m=a.a.useState(l),f=Object(j.a)(m,2),p=f[0],v=f[1];return Object(h.jsx)("div",{className:I.a.card,children:u?Object(h.jsxs)(C.a,{speed:2,width:175,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(h.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsx)("div",{className:I.a.favorite,children:Object(h.jsx)("img",{onClick:function(){i({id:t,parentId:t,title:c,price:r,imgURL:n}),v(!p)},src:p?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(h.jsx)("img",{width:"100%",heigth:135,src:n,alt:"Sneakers"}),Object(h.jsx)("h5",{children:c}),Object(h.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{children:" \u0426\u0435\u043d\u0430:"}),Object(h.jsxs)("b",{children:[" ","".concat(r," \u0440\u0443\u0431.")]})]}),s&&Object(h.jsx)("img",{className:I.a.btnPlus,src:b(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"plus",onClick:function(){s({id:t,parentId:t,title:c,price:r,imgURL:n})}})]})]})})};var _=function(e){var t=e.itemInput,c=e.valueInput,r=e.setItemInput,a=e.sneakers,n=e.favoriteCart,s=e.setToCard,o=(e.cardSneakers,e.isLoading);return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(h.jsx)("h1",{children:t?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(t,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(h.jsxs)("div",{className:"search-block d-flex",children:[Object(h.jsx)("img",{src:"img/search.svg",alt:"search"}),Object(h.jsx)("input",{onChange:c,value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),t&&Object(h.jsx)("img",{onClick:function(){return r("")},className:"cu-p",src:"img/btn-remove.svg",alt:"clear"})]})]}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return(o?Object(i.a)(Array(10)):e).map((function(e,t){return Object(h.jsx)(S,Object(N.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:o},e),"".concat(t," "))}))}()})]})})};var P=function(){var e=a.a.useContext(x),t=e.cardFavorite,c=e.favoriteCart;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(h.jsx)(S,Object(N.a)(Object(N.a)({},e),{},{favorited:!0,onFavorite:function(e){return c(e)}}),"".concat(t," ").concat(e.price))}))})]})})};var L=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(j.a)(n,2),o=s[0],u=s[1];return a.a.useEffect((function(){try{var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://6161517ee46acd001777c003.mockapi.io/orders");case 2:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(i.a)(e),Object(i.a)(t.items))}),[])),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(t)}}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:(o?Object(i.a)(Array(8)):c).map((function(e,t){return Object(h.jsx)(S,Object(N.a)({loading:o},e),"".concat(t," "))}))})]})})};var A=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(j.a)(n,2),o=s[0],u=s[1],m=a.a.useState([]),f=Object(j.a)(m,2),p=f[0],v=f[1],g=a.a.useState(!1),N=Object(j.a)(g,2),C=N[0],y=N[1],I=a.a.useState(""),S=Object(j.a)(I,2),A=S[0],B=S[1],D=a.a.useState(!0),F=Object(j.a)(D,2),E=F[0],R=F[1];a.a.useEffect((function(){try{var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://6161517ee46acd001777c003.mockapi.io/cart");case 2:return t=e.sent,e.next=5,b.a.get("https://6161517ee46acd001777c003.mockapi.io/favorites");case 5:return c=e.sent,e.next=8,b.a.get("https://6161517ee46acd001777c003.mockapi.io/items");case 8:a=e.sent,R(!1),u(t.data),v(c.data),r(a.data);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){alert("\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043e\u0442\u0432\u0435\u0442\u044b ")}}),[]);var T=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=o.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return u((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,b.a.delete("https://6161517ee46acd001777c003.mockapi.io/cart/".concat(c.id));case 6:e.next=13;break;case 8:return e.next=10,b.a.post("https://6161517ee46acd001777c003.mockapi.io/cart",t);case 10:r=e.sent,a=r.data,u((function(e){return[].concat(Object(i.a)(e),[a])}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){return e.reduce((function(e,t){return e+t.price}),0)},J=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.find((function(e){return e.id===t.id}))){e.next=6;break}b.a.delete("https://6161517ee46acd001777c003.mockapi.io/favorites/".concat(t.id)),v((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.next=11;break;case 6:return e.next=8,b.a.post("https://6161517ee46acd001777c003.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,v((function(e){return[].concat(Object(i.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(x.Provider,{value:{sneakers:c,cardSneakers:o,cardFavorite:p,isItemAdded:function(e){return o.some((function(t){return t.parentId===e}))},favoriteCart:J,setCloseDrawer:y,setCardSneakers:u,setToCard:T},children:Object(h.jsxs)("div",{className:"wrapper clear",children:[Object(h.jsx)(O,{onClickClose:function(){return y(!1)},sneakers:o,itogo:U(o),removeCart:function(e){b.a.delete("https://6161517ee46acd001777c003.mockapi.io/cart/".concat(e)),u((function(t){return t.filter((function(t){return t.id!==e}))}))},opened:C}),Object(h.jsx)(k,{onClickClose:function(){return y(!0)},itogo:U(o)}),Object(h.jsx)(w.a,{path:"/favorite",exact:!0,children:Object(h.jsx)(P,{})}),Object(h.jsx)(w.a,{path:"/orders",exact:!0,children:Object(h.jsx)(L,{})}),Object(h.jsx)(w.a,{path:"/",exact:!0,children:Object(h.jsx)(_,{itemInput:A,valueInput:function(e){return B(e.target.value)},setItemInput:B,sneakers:c,favoriteCart:J,setToCard:T,cardSneakers:o,isLoading:E})})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(A,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.cb10a49b.chunk.js.map