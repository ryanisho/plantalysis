(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4973],{2779:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},162:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){u=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(2784))&&o.__esModule?o:{default:o},u=r(9918),l=r(3642),s=r(2030);var c={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),o=i.default.useMemo((function(){var t=a(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,y=e.children,v=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var g=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,_=a(s.useIntersection({rootMargin:"200px"}),2),w=_[0],O=_[1],k=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=O&&r&&u.isLocalURL(d),t="undefined"!==typeof m?m:n&&n.locale,a=c[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,O,m,r,n]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:i}))}(e,n,d,p,v,b,h,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof m?m:n&&n.locale,C=n&&n.isLocaleDomain&&u.getDomainLocale(p,P,n&&n.locales,n&&n.domainLocales);E.href=C||u.addBasePath(u.addLocale(p,P,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},2030:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){u=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=o.useRef(),c=a(o.useState(!1),2),f=c[0],d=c[1],p=a(o.useState(t?t.current:null),2),y=p[0],v=p[1],b=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,f]);return o.useEffect((function(){if(!u&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&v(t.current)}),[t]),[b,f]};var o=r(2784),i=r(9071),u="undefined"!==typeof IntersectionObserver;var l=new Map},5805:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a({},n,e));var i,l;var s=n=a({},n,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return r(s);n.loadableGenerated&&delete(n=a({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};i(r(2784));var o=i(r(2060));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6941:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(2784))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},2060:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=r(2784))&&i.__esModule?i:{default:i},l=r(6718),s=r(6941);var c=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,a;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),a&&n(t,a),e}();function v(e){return function(e,t){var r=function(){if(!a){var t=new y(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var a=null;if(!d&&!n.suspense){var i=n.webpack?n.webpack():n.modules;i&&f.push((function(e){var t=!0,n=!1,a=void 0;try{for(var o,u=i[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return r()}}catch(s){n=!0,a=s}finally{try{t||null==u.return||u.return()}finally{if(n)throw a}}}))}var c=n.suspense?function(e,t){return u.default.createElement(n.lazy,o({},e,{ref:t}))}:function(e,t){r();var o=u.default.useContext(s.LoadableContext),i=l.useSubscription(a);return u.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!n.suspense&&r()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function b(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return b(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};b(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var h=v;t.default=h},5237:function(e,t,r){e.exports=r(5805)},9097:function(e,t,r){e.exports=r(162)},9706:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7896),a=r(1461),o=r(2779),i=r.n(o),u=r(2784),l=r(9658);var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)},c=["as","disabled","onKeyDown"];function f(e){return!e||"#"===e.trim()}var d=u.forwardRef((function(e,t){var r=e.as,o=void 0===r?"a":r,i=e.disabled,l=e.onKeyDown,d=(0,a.Z)(e,c),p=function(e){var t=d.href,r=d.onClick;(i||f(t))&&e.preventDefault(),i?e.stopPropagation():r&&r(e)};return f(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),i&&(d.tabIndex=-1,d["aria-disabled"]=!0),u.createElement(o,(0,n.Z)({ref:t},d,{onClick:p,onKeyDown:s((function(e){" "===e.key&&(e.preventDefault(),p(e))}),l)}))}));d.displayName="SafeAnchor";var p=d,y=["bsPrefix","variant","size","active","className","block","type","as"],v=u.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,s=e.size,c=e.active,f=e.className,d=e.block,v=e.type,b=e.as,h=(0,a.Z)(e,y),m=(0,l.vE)(r,"btn"),g=i()(f,m,c&&"active",o&&m+"-"+o,d&&m+"-block",s&&m+"-"+s);if(h.href)return u.createElement(p,(0,n.Z)({},h,{as:b,ref:t,className:i()(g,h.disabled&&"disabled")}));t&&(h.ref=t),v?h.type=v:b||(h.type="button");var _=b||"button";return u.createElement(_,(0,n.Z)({},h,{className:g}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var b=v},3237:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(7896),a=r(1461),o=r(2779),i=r.n(o),u=r(2784),l=r(9658),s=/-(.)/g;var c=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var r=void 0===t?{}:t,o=r.displayName,s=void 0===o?f(e):o,d=r.Component,p=r.defaultProps,y=u.forwardRef((function(t,r){var o=t.className,s=t.bsPrefix,f=t.as,p=void 0===f?d||"div":f,y=(0,a.Z)(t,c),v=(0,l.vE)(s,e);return u.createElement(p,(0,n.Z)({ref:r,className:i()(o,v)},y))}));return y.defaultProps=p,y.displayName=s,y}var p=function(e){return u.forwardRef((function(t,r){return u.createElement("div",(0,n.Z)({},t,{ref:r,className:i()(t.className,e)}))}))},y=u.createContext(null);y.displayName="CardContext";var v=y,b=["bsPrefix","className","variant","as"],h=u.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.variant,c=e.as,f=void 0===c?"img":c,d=(0,a.Z)(e,b),p=(0,l.vE)(r,"card-img");return u.createElement(f,(0,n.Z)({ref:t,className:i()(s?p+"-"+s:p,o)},d))}));h.displayName="CardImg",h.defaultProps={variant:null};var m=h,g=["bsPrefix","className","bg","text","border","body","children","as"],_=p("h5"),w=p("h6"),O=d("card-body"),k=d("card-title",{Component:_}),E=d("card-subtitle",{Component:w}),P=d("card-link",{Component:"a"}),C=d("card-text",{Component:"p"}),x=d("card-header"),j=d("card-footer"),N=d("card-img-overlay"),S=u.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.bg,c=e.text,f=e.border,d=e.body,p=e.children,y=e.as,b=void 0===y?"div":y,h=(0,a.Z)(e,g),m=(0,l.vE)(r,"card"),_=(0,u.useMemo)((function(){return{cardHeaderBsPrefix:m+"-header"}}),[m]);return u.createElement(v.Provider,{value:_},u.createElement(b,(0,n.Z)({ref:t},h,{className:i()(o,m,s&&"bg-"+s,c&&"text-"+c,f&&"border-"+f)}),d?u.createElement(O,null,p):p))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=m,S.Title=k,S.Subtitle=E,S.Body=O,S.Link=P,S.Text=C,S.Header=x,S.Footer=j,S.ImgOverlay=N;var M=S},9658:function(e,t,r){"use strict";r.d(t,{vE:function(){return o}});var n=r(2784),a=n.createContext({});a.Consumer,a.Provider;function o(e,t){var r=(0,n.useContext)(a);return e||r[t]||t}},7486:function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(2784)),o=i(r(8316));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.addPropsOnChildren()}},{key:"componentDidUpdate",value:function(){this.addPropsOnChildren()}},{key:"addPropsOnChildren",value:function(){if("undefined"!==typeof this.props.content._editable&&window.location!==window.parent.location){var e=o.default.findDOMNode(this),t=JSON.parse(this.props.content._editable.replace(/^<!--#storyblok#/,"").replace(/-->$/,""));e instanceof Object&&"function"===typeof e.setAttribute?(e.setAttribute("data-blok-c",JSON.stringify(t)),e.setAttribute("data-blok-uid",t.id+"-"+t.uid),this.addClass(e,"storyblok__outline")):console.warn("It seems that you are using a DOM text-node inside the SbEditable wrapper. Please wrap it with an HTML DOM element.",this.props.children)}}},{key:"addClass",value:function(e,t){e.classList?e.classList.add(t):new RegExp("\\b"+t+"\\b").test(e.className)||(e.className+=" "+t)}},{key:"render",value:function(){return this.props.children}}]),t}(a.default.PureComponent);t.Z=u},7896:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},1461:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);