(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1063),c=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,g=e.children,h=e.replace,v=e.shallow,m=e.scroll,b=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var j=(n=i.default.Children.only(g))&&"object"===typeof n&&n.ref,x=l.useIntersection({rootMargin:"200px"}),y=r(x,2),k=y[0],O=y[1],_=i.default.useCallback((function(e){k(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,k]);i.default.useEffect((function(){var e=O&&t&&a.isLocalURL(p),n="undefined"!==typeof b?b:o&&o.locale,r=u[p+"%"+d+(n?"%"+n:"")];e&&!r&&s(o,p,d,{locale:n})}),[d,p,O,b,t,o]);var w={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:l,scroll:c}))}(e,o,p,d,h,v,m,b)},onMouseEnter:function(e){a.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof b?b:o&&o.locale,P=o&&o.isLocaleDomain&&a.getDomainLocale(d,E,o&&o.locales,o&&o.domainLocales);w.href=P||a.addBasePath(a.addLocale(d,E,o&&o.defaultLocale))}return i.default.cloneElement(n,w)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=o.useRef(),u=o.useState(!1),s=r(u,2),f=s[0],p=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),i=t(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},6645:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{App:function(){return p},default:function(){return d}});var o=t(9008),i=t(7294),a=(t(3521),t(1664)),c=JSON.parse('[{"link":"/","text":"Home","img":"img/icons/about.png","target":"_self"},{"link":"/projects","text":"Projects","img":"img/icons/projects.png","target":"_self"},{"link":"/photography","text":"Photography","img":"img/icons/photography.png","target":"_self"},{"link":"/Ruby%20Dong%20Resume.pdf","text":"Resume","img":"img/icons/resume.png","target":"_blank"},{"link":"http://github.com/rubydong","text":"GitHub","img":"img/icons/github.png","target":"_blank"},{"link":"https://www.linkedin.com/in/rubydong1","text":"LinkedIn","img":"img/icons/linkedin.png","target":"_blank"},{"link":"http://instagram.com/iscreamforuby","text":"Instagram","img":"img/icons/instagram.png","target":"_blank"}]'),l=t(5893),u=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=[],o=[];return c.forEach((function(e){r.push((0,l.jsx)("li",{onClick:function(){return t(!1)},children:(0,l.jsx)(a.default,{href:e.link,children:(0,l.jsxs)("a",{target:e.target,rel:"noopener noreferrer",children:[(0,l.jsxs)("span",{className:"nav-text",children:[" ",e.text," "]}),(0,l.jsx)("img",{src:e.img,alt:e.text})]})})},e.text)),o.push((0,l.jsx)("li",{children:(0,l.jsx)(a.default,{href:e.link,children:(0,l.jsx)("a",{target:e.target,rel:"noopener noreferrer",children:e.text})})},e.text))})),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"menu",onClick:function(){return t(!n)},children:(0,l.jsx)("img",{src:"img/icons/menu.png",alt:"menu"})}),n&&(0,l.jsx)("div",{id:"navbar",children:(0,l.jsx)("ul",{children:r})}),(0,l.jsx)("div",{id:"full-navbar",children:(0,l.jsx)("ul",{children:o})})]})};function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.Component,t=e.pageProps;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.default,{children:[(0,l.jsx)("title",{children:"Ruby Dong"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(u,{}),(0,l.jsx)(n,f({},t))]})},d=p},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6645)}])},3521:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(4651)}));var t=e.O();_N_E=t}]);