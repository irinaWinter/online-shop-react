(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return F}));var n=c(7),r=c(2),a=c(3),i=c(4),s=c(6),o=c(5),u=c(1),d=c(9),l=c.n(d),j=(c(14),[{name:"\u041e\u0433\u0443\u0440\u0446\u044b",category:"\u041e\u0432\u043e\u0449\u0438",price:239.9,discount:60,rating:[4,5,3,5],isFavorite:!0,img:c.p+"static/media/cucumber.994dd5fd.jpg",id:"p1",inCart:!1},{name:"\u041b\u0443\u043a \u0440\u0435\u043f\u0447\u0430\u0442\u044b\u0439",category:"\u041e\u0432\u043e\u0449\u0438",price:54.9,discount:0,rating:[5,1,2],isFavorite:!1,img:c.p+"static/media/onion.43361e2a.jpg",id:"p2",inCart:!1},{name:"\u0428\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b",category:"\u0413\u0440\u0438\u0431\u044b",price:239.9,discount:0,rating:[3,2,1],isFavorite:!1,img:c.p+"static/media/champignons.c4d018b0.jpg",id:"p3",inCart:!1},{name:"\u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b",category:"\u0424\u0440\u0443\u043a\u0442\u044b",price:94.9,discount:0,rating:[5,4,5],isFavorite:!1,img:c.p+"static/media/oranges.e84b11c5.jpg",id:"p4",inCart:!1},{name:"\u041d\u0435\u043a\u0442\u0430\u0440\u0438\u043d\u044b",category:"\u0424\u0440\u0443\u043a\u0442\u044b",price:249.9,discount:20,rating:[5,5,4],isFavorite:!1,img:c.p+"static/media/nectarines.244980cb.jpg",id:"p5",inCart:!1},{name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b",category:"\u041e\u0432\u043e\u0449\u0438",price:169.9,discount:0,rating:[5,5,5],isFavorite:!1,img:c.p+"static/media/tomatoes.e56b576c.jpg",id:"p6",inCart:!1}]),b=(c(15),c(16),c.p+"static/media/loupe.2c4729e6.svg"),p=c(0),h=function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={request:""},e.onSearchChange=function(t){var c=t.target.value;e.setState({request:c}),e.props.onSearchChange(c)},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(p.jsx)("input",{className:"search__field",style:{backgroundImage:"url(".concat(b,")")},type:"text",name:"search",placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u044b",onInput:this.onSearchChange,value:this.state.request})}}]),c}(u.Component),m=function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props.onSearchChange;return Object(p.jsx)("header",{className:"page-header",children:Object(p.jsx)("div",{className:"page-header__container container",children:Object(p.jsx)("div",{className:"page-header__wrapper",children:Object(p.jsx)(h,{onSearchChange:e})})})})}}]),c}(u.Component),O=(c(18),c.p+"static/media/cart.0bd41c44.svg"),g=c.p+"static/media/is-favorite.7c2bf8cd.svg",_=function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=e.img,n=e.price,r=e.rating,a=e.onToggleIsFavorite,i=e.isFavorite,s=e.addToCart,o=e.inCart,u="product__is-favorite";return i&&(u+=" product__is-favorite--true"),Object(p.jsxs)("li",{className:"product-list__product product",children:[Object(p.jsxs)("div",{className:"product__info-box",children:[Object(p.jsxs)("p",{className:"product__rating",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433:",(r.reduce((function(e,t){return e+t}))/r.length).toFixed(1)]}),Object(p.jsx)("button",{className:u,onClick:a,style:{WebkitMaskImage:"url(".concat(g,")")}})]}),Object(p.jsx)("p",{className:"product__name",children:t}),Object(p.jsx)("img",{className:"product__img",src:c,alt:t}),Object(p.jsxs)("p",{className:"product__price",children:[n," \u20bd"]}),Object(p.jsx)("button",{className:"product__button button button--cart",onClick:s,disabled:o,style:{backgroundImage:"url(".concat(O,")")},children:o?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u041a\u0443\u043f\u0438\u0442\u044c"})]})}}]),c}(u.Component),f=(c(19),function(e){var t=e.request;return Object(p.jsxs)("div",{className:"no-results",children:[Object(p.jsxs)("p",{className:"no-results__text",children:["\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443"," ",Object(p.jsxs)("span",{className:"no-results__request",children:["\xab",t,"\xbb"]})," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]}),Object(p.jsxs)("p",{className:"no-results__recommendation",children:["\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u0430\u0442\u044c \u0432"," ",Object(p.jsx)("a",{className:"no-results__link",href:"#",children:"\xab\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0435\xbb"})]}),Object(p.jsx)("a",{className:"no-results__button",href:"#",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433"})]})}),x=(c(20),function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("ul",{className:"product-filter container",children:[Object(p.jsx)("li",{className:"product-filter__item",children:Object(p.jsx)("button",{className:"product-filter__button",children:"\u041e\u0432\u043e\u0449\u0438"})}),Object(p.jsx)("li",{className:"product-filter__item",children:Object(p.jsx)("button",{className:"product-filter__button",children:"\u0424\u0440\u0443\u043a\u0442\u044b"})}),Object(p.jsx)("li",{className:"product-filter__item",children:Object(p.jsx)("button",{className:"product-filter__button",children:"\u042f\u0433\u043e\u0434\u044b"})}),Object(p.jsx)("li",{className:"product-filter__item",children:Object(p.jsx)("button",{className:"product-filter__button",children:"\u0413\u0440\u0438\u0431\u044b"})}),Object(p.jsx)("li",{className:"product-filter__item",children:Object(p.jsx)("button",{className:"product-filter__button",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})})]})}}]),c}(u.Component)),v=(c(21),function(e){var t=e.products,c=e.onToggleIsFavorite,n=e.addToCart,a=e.request,i=t.map((function(e){return Object(u.createElement)(_,Object(r.a)(Object(r.a)({},e),{},{onToggleIsFavorite:function(){return c(e.id)},addToCart:function(){return n(e.id)},key:"".concat(e.id)}))})),s=Object(p.jsx)("ul",{className:"product-list__list",children:i});return Object(p.jsx)("header",{className:"product-list",children:Object(p.jsxs)("div",{className:"product-list__container container",children:[Object(p.jsxs)("div",{className:"product-list__heading-box heading-box",children:[Object(p.jsx)("h2",{className:"heading-box__heading heading heading--2",children:"\u041e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"}),Object(p.jsx)("button",{className:"heading-box__link link",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"})]}),Object(p.jsx)(x,{}),t.length?s:Object(p.jsx)(f,{request:a})]})})}),N=(c(22),function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=e.img,n=e.price,r=e.isFavorite,a=e.rating,i=e.deleteFromCart,s=e.onToggleIsFavorite,o="product__is-favorite";return r&&(o+=" product__is-favorite--true"),Object(p.jsxs)("li",{className:"product-list__product product",children:[Object(p.jsxs)("div",{className:"product__info-box",children:[Object(p.jsxs)("p",{className:"product__rating",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433:",(a.reduce((function(e,t){return e+t}))/a.length).toFixed(1)]}),Object(p.jsx)("button",{className:o,onClick:s,children:"\u0424\u0430\u0432\u043e\u0440\u0438\u0442\u0435"})]}),Object(p.jsx)("p",{className:"product__name",children:t}),Object(p.jsx)("img",{className:"product__img",src:c,alt:t}),Object(p.jsx)("p",{className:"product__price",children:n}),Object(p.jsx)("button",{className:"product__button button button--delete",onClick:i,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}}]),c}(u.Component)),C=(c(23),function(e){var t=e.products,c=e.deleteFromCart,n=e.onToggleIsFavorite,a=(e.isFavorite,t.filter((function(e){return e.inCart})).map((function(e){return Object(u.createElement)(N,Object(r.a)(Object(r.a)({},e),{},{onToggleIsFavorite:function(){return n(e.id)},deleteFromCart:function(){return c(e.id)},key:e.id}))})));return Object(p.jsx)("header",{className:"product-list",children:Object(p.jsxs)("div",{className:"product-list__container container",children:[Object(p.jsx)("div",{className:"product-list__heading-box heading-box",children:Object(p.jsxs)("h2",{className:"heading-box__heading heading heading--2",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(p.jsxs)("span",{className:"heading-box__count",children:["(",t.filter((function(e){return e.inCart})).length,")"]})]})}),Object(p.jsx)("p",{children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e. \u0411\u0443\u0434\u0435\u0442 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435."}),Object(p.jsx)("ul",{className:"product-list__list",children:a})]})})}),F=function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).maxId=100,e.state={products:j,request:""},e.deleteFromCart=function(t){e.setState((function(e){var c=e.products,a=c.findIndex((function(e){return e.id===t})),i=c[a],s=Object(r.a)(Object(r.a)({},i),{},{inCart:!i.inCart});return{products:[].concat(Object(n.a)(c.slice(0,a)),[s],Object(n.a)(c.slice(a+1)))}}))},e.addToCart=function(t){e.setState((function(e){var c=e.products,a=c.findIndex((function(e){return e.id===t})),i=c[a],s=Object(r.a)(Object(r.a)({},i),{},{inCart:!i.inCart});return{products:[].concat(Object(n.a)(c.slice(0,a)),[s],Object(n.a)(c.slice(a+1)))}}))},e.onToggleIsFavorite=function(t){e.setState((function(e){var c=e.products,a=c.findIndex((function(e){return e.id===t})),i=c[a],s=Object(r.a)(Object(r.a)({},i),{},{isFavorite:!i.isFavorite});return{products:[].concat(Object(n.a)(c.slice(0,a)),[s],Object(n.a)(c.slice(a+1)))}}))},e.onSearchChange=function(t){e.setState({request:t})},e}return Object(i.a)(c,[{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.state,t=e.products,c=e.request,n=this.search(t,c);return Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{products:t,deleteFromCart:this.deleteFromCart,onToggleIsFavorite:this.onToggleIsFavorite}),Object(p.jsx)(m,{onSearchChange:this.onSearchChange}),Object(p.jsx)(v,{products:n,request:c,onToggleIsFavorite:this.onToggleIsFavorite,addToCart:this.addToCart})]})}}]),c}(u.Component);l.a.render(Object(p.jsx)(F,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.b6371234.chunk.js.map