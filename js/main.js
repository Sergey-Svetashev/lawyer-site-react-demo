!function(e){function t(t){for(var n,l,s=t[0],i=t[1],o=t[2],m=0,f=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={0:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=i;c.push([142,1]),r()}({142:function(e,t,r){r(143),e.exports=r(356)},329:function(e,t,r){},330:function(e,t,r){},331:function(e,t,r){},332:function(e,t,r){},356:function(e,t,r){"use strict";r.r(t);r(329),r(330),r(331),r(332);var n=r(0),a=r.n(n),c=r(70),l=r.n(c),s=r(71),i=r(8),o=r(140),u=r.n(o);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,e);var t,r,n,c,l=(t=s,function(){var e,r=d(t);if(E()){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return y(this,e)});function s(){return _(this,s),l.apply(this,arguments)}return r=s,(n=[{key:"render",value:function(){return a.a.createElement(u.a,f({className:"skill__slider"},{adaptiveHeight:!1,autoplay:!0,speed:700,dots:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:1}}]}),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_item_01.jpg",alt:"Почетная Грамота"}))),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_pict.png",alt:"Медаль",className:"no-shadow"}))),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_item_02.jpg",alt:"Почетная Грамота"}))),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_item_03.jpg",alt:"Почетная Грамота"}))),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_item_04.jpg",alt:"Почетная Грамота"}))),a.a.createElement("div",{className:"skill__cell"},a.a.createElement("div",{className:"skill__item"},a.a.createElement("img",{src:"../img/skill_item_05.jpg",alt:"Почетная Грамота"}))))}}])&&p(r.prototype,n),c&&p(r,c),s}(a.a.Component),h=r.p+"../img/header_photo.png";function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),e}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){return function(){var t,r=C(e);if(R()){var n=C(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return x(this,t)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){k(r,e);var t=S(r);function r(e){var n;return g(this,r),(n=t.call(this,e)).handleClick=n.handleClick.bind(P(n)),n}return w(r,[{key:"handleClick",value:function(){alert("Click on Button")}},{key:"render",value:function(){return a.a.createElement("div",{className:"button__wrap"},a.a.createElement("button",{className:"button",onClick:this.handleClick},this.props.text))}}]),r}(a.a.Component),D=function(e){k(r,e);var t=S(r);function r(){return g(this,r),t.apply(this,arguments)}return w(r,[{key:"render",value:function(){return[a.a.createElement("header",{key:"1"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header__wrap"},a.a.createElement("img",{src:h,alt:"Иванова Галина Анатольевна"}),a.a.createElement("div",{className:"header__over-title"},"Адвокат"),a.a.createElement("h1",{className:"header__title"},"Иванова Галина Анатольевна"),a.a.createElement("p",{className:"header__text"},"Предоставляет квалифицированную юридическую помощь от консультации до представительства в суде."),a.a.createElement(T,{text:"Заказать звонок"})))),a.a.createElement("section",{key:"2",className:"skill"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"skill__wrap"},a.a.createElement("h1",{className:"title"},"Опыт"),a.a.createElement("h2",{className:"skill__subtitle"},"более 20 лет"),a.a.createElement("p",{className:"honor__text"},"Являюсь членом адвокатской палаты Воронежской области. Регистрационный номер 36/455. Имею практический опыт полного юридического сопровождения деятельности предприятий различных организационно-правовых форм."),a.a.createElement("p",{className:"honor__text"},"Огромный опыт работы по представлению интересов юридических и физических лиц в арбитражных судах и судах общей юрисдикции по вопросам различной сложности."),a.a.createElement(T,{text:"Заказать звонок"})),a.a.createElement(b,null))),a.a.createElement("section",{key:"3",className:"citation"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title"},"Мое мнение"),a.a.createElement("div",{className:"citation__case"},a.a.createElement("div",{className:"citation__cell"},a.a.createElement("p",{className:"citation__text"},"Ничто не ценится так дорого и не стоит так дешево, как своевременно подсказанная консультация и оказанная юридическая помощь."),a.a.createElement("img",{src:"../img/icon_qoutes.svg",className:"citation__decore"})),a.a.createElement("div",{className:"citation__cell"},a.a.createElement("img",{src:"../img/citation_photo.jpg",alt:"Иванова Галина Анатольевна",className:"citation__photo"}))),a.a.createElement(T,{text:"Посмотреть услуги и цены"})))]}}]),r}(a.a.Component);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(s,e);var t,r,n,c,l=(t=s,function(){var e,r=z(t);if(I()){var n=z(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return H(this,e)});function s(){return B(this,s),l.apply(this,arguments)}return r=s,(n=[{key:"render",value:function(){return a.a.createElement("section",{className:"services"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title"},"Услуги и цены"),a.a.createElement("div",{className:"services__wrap"},a.a.createElement("div",{className:"services__case services__case_01"},a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Трудовые споры, восстановление на работе, взыскание невыплаченной заработной платы и компенсации за просрочку выплаты, признание незаконным удержания заработной платы с работника:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Ведение дел гражданско-правовой специализации в судах общей юрисдикции и арбитраже:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Вопросы, связанные с защитой прав потребителей:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Экономические споры;")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб")))),a.a.createElement("div",{className:"services__case services__case_02"},a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Признание права собственности на движимое и недвижимое имущество, установление факта добросовестного и открытого владения имуществом, как своим собственным:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Юридическое обслуживание предприятий:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Юридическая проверка контрагента;")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб")))),a.a.createElement("div",{className:"services__case services__case_03"},a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Юридическое сопровождение сделок с недвижимостью:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Помощь по семейным спорам и наследственным делам:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Жилищные вопросы:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Земельные споры;")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб")))),a.a.createElement("div",{className:"services__case services__case_04"},a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Оспаривание административных штрафов:")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Помощь адвоката по ДТП, обжалование постановлений должностных лиц, взыскание денежных средств со страховых компаний;")),a.a.createElement("div",{className:"services__price"},"от 10 000 руб"))),a.a.createElement("div",{className:"services__case services__case_05"},a.a.createElement("div",{className:"services__item"},a.a.createElement("div",{className:"services__cell"},a.a.createElement("p",{className:"services__text"},"Ведении уголовных дел различной категории (должностные преступления, преступления в сфере экономики, преступления против личности, против общественной безопасности и порядка, преступления в области безопасности дорожного движения и др.)")),a.a.createElement("div",{className:"services__cell"},a.a.createElement("div",{className:"services__price"},"от 10 000 руб")))))))}}])&&J(r.prototype,n),c&&J(r,c),s}(a.a.Component);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(s,e);var t,r,n,c,l=(t=s,function(){var e,r=V(t);if(U()){var n=V(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Q(this,e)});function s(){return G(this,s),l.apply(this,arguments)}return r=s,(n=[{key:"render",value:function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"footer__wrap"},a.a.createElement("div",{className:"title"},"Контакты"),a.a.createElement("p",{className:"footer__text"},"+7 (908) 133-22-03"),a.a.createElement("div",{className:"footer__info"},a.a.createElement("p",null,a.a.createElement("b",null,"Адрес:")," г. Воронеж, ул. Фридриха Энгельса, 48"),a.a.createElement("p",null,a.a.createElement("b",null,"E-mail:")," ",a.a.createElement("a",{href:"mailto:igamail@inbox.ru"},"igamail@inbox.ru")),a.a.createElement("p",null,a.a.createElement("b",null,"Я в социальных сетях:"),a.a.createElement("a",{href:"",className:"footer__icon"},a.a.createElement("img",{src:"../img/icon_vk.svg",alt:"Вконтакте"})),a.a.createElement("a",{href:"",className:"footer__icon"},a.a.createElement("img",{src:"../img/icon_ok.svg",alt:"Одноклассники"})))))))}}])&&K(r.prototype,n),c&&K(r,c),s}(a.a.Component);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t,r){return t&&Z(e.prototype,t),r&&Z(e,r),e}function ee(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e){return function(){var t,r=le(e);if(ce()){var n=le(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return ne(this,t)}}function ne(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?ae(e):t}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var se=function(e){ee(r,e);var t=re(r);function r(e){var n;return Y(this,r),(n=t.call(this,e)).openMenu=n.openMenu.bind(ae(n)),n.state={isOpen:!1},n}return $(r,[{key:"openMenu",value:function(){this.setState((function(e){return e.isOpen=!e.isOpen}))}},{key:"render",value:function(){return a.a.createElement("nav",null,a.a.createElement("div",{className:"container"},a.a.createElement("span",{className:"nav__phone"},"+7 (908) 133-22-03"),a.a.createElement("span",{className:this.state.isOpen?"nav__button active":"nav__button",onClick:this.openMenu}),a.a.createElement("div",{className:this.state.isOpen?"nav__case open":"nav__case"},a.a.createElement(s.b,{exact:!0,to:"/",className:"nav__item",onClick:this.openMenu},"Главная"),a.a.createElement(s.b,{to:"/services",className:"nav__item",onClick:this.openMenu},"Услуги"))))}}]),r}(a.a.Component),ie=function(e){ee(r,e);var t=re(r);function r(){return Y(this,r),t.apply(this,arguments)}return $(r,[{key:"render",value:function(){return a.a.createElement(s.a,null,a.a.createElement("div",{className:"app"},a.a.createElement(se,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{exact:!0,path:"/",component:D}),a.a.createElement(i.a,{path:"/services",component:A})),a.a.createElement(W,null)))}}]),r}(a.a.Component);l.a.render(a.a.createElement(ie,null),document.getElementById("root"))}});
//# sourceMappingURL=main.js.map