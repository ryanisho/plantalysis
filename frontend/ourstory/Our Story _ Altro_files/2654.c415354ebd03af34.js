(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2654],{2654:function(e,t,i){"use strict";i.r(t),i.d(t,{MediaGridItem:function(){return l},default:function(){return m}});var r=i(2322),n=i(2784),a=i(3618),o=i(9697),d=i.n(o),l=function(e){var t=e.width,i=void 0===t?50:t,n=e.x,o=void 0===n?0:n,l=e.y,c=void 0===l?0:l,u=e.alignFromRight,s=void 0!==u&&u,f=e.body,m=void 0===f?[]:f,g={width:"".concat(i,"%"),top:"".concat(c,"%")};return s?g.right="".concat(o,"%"):g.left="".concat(o,"%"),(0,r.jsx)("div",{style:g,"data-original-x":o,"data-original-y":c,"data-original-width":i,"data-original-align-from-right":s,className:"".concat(d().mediaGridItem," media-grid-item"),children:(0,r.jsx)(a.LU,{bloks:m})})},c=i(1333),u=i(2001),s=i(4770),f=i(3467),m=function(e){var t=e.body,i=void 0===t?[]:t,o=e.height,l=void 0===o?70:o,m=e.noScrollAnimation,g=void 0!==m&&m,v={paddingTop:"".concat(l,"%")},h=(0,n.useRef)(u.p8.timeline({defaults:{ease:s.bJ.easeOut}})),b=(0,n.useRef)(u.p8.timeline({defaults:{ease:s.bJ.easeOut}})),_=(0,n.useRef)(null),p=(0,n.useRef)(null),G=(0,n.useRef)(null),w=((0,n.useRef)(null),function(){var e=h.current;y();var t=_.current.querySelectorAll(":scope > *");t.forEach((function(t){var i=getComputedStyle(t);t.setAttribute("data-left",i.left),t.setAttribute("data-top",i.top),t.setAttribute("data-right",i.right),e.set(t,{left:"50%",top:"50%",right:"auto",x:"-50%",y:"-50%"})})),t.forEach((function(t){e.to(t,{x:0,y:0,left:t.getAttribute("data-left"),top:t.getAttribute("data-top"),duration:1,delay:.2},"0")})),e.pause(),e.seek(0)}),y=function(){if(_.current){var e=h.current;_.current.querySelectorAll(":scope > *").forEach((function(e){e.removeAttribute("data-left"),e.removeAttribute("data-top"),e.removeAttribute("data-right"),e.removeAttribute("style"),"true"===e.getAttribute("data-original-align-from-right")?e.style.right="".concat(e.getAttribute("data-original-x"),"%"):e.style.left="".concat(e.getAttribute("data-original-x"),"%"),e.style.top="".concat(e.getAttribute("data-original-y"),"%"),e.style.width="".concat(e.getAttribute("data-original-width"),"%")})),e.kill(),e.clear()}};(0,n.useEffect)((function(){if(!g)return w(),window.addEventListener("resize",w),function(){window.removeEventListener("resize",w),y()}}),[]),(0,c.Z)(p,!1,(function(e){h.current.tweenTo(e/100*h.current.duration()),b.current.seek(e/100*b.current.duration())}));i.length;return(0,r.jsxs)("div",{ref:p,className:"".concat(d().mediaGridWrap," ").concat(g?d().noScroll:""),children:[(0,r.jsx)("div",{className:d().fullContainer,children:(0,r.jsx)("div",{ref:_,className:d().mediaGrid,style:v,children:(0,r.jsx)(a.LU,{bloks:i})})}),(0,r.jsx)("div",{ref:G,className:"".concat(d().mediaGridMobile),children:(0,r.jsx)(f.Z,{pauseOnHover:!1,arrows:!1,dots:!0,slidesToShow:1.1,slidesToScroll:1,speed:300,infinite:!1,pagination:!0,children:i.map((function(e,t){return(0,r.jsx)(a.B5,{blok:e},t)}))})})]})}},1333:function(e,t,i){"use strict";var r=i(2784);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0,n=function(){if(e.current){var r=e.current.getBoundingClientRect();requestAnimationFrame((function(){var e=-(r.top-window.innerHeight)/(r.height+(t?window.innerHeight:0))*100;e=(e=e<=0?0:e)>100?100:e,i&&i(e)}))}};(0,r.useEffect)((function(){return window.addEventListener("scroll",n),n(),function(){window.removeEventListener("scroll",n)}}),[])}},9697:function(e){e.exports={mediaGridWrap:"MediaGrid_mediaGridWrap__a5GpF",noScroll:"MediaGrid_noScroll__w726O",mediaGrid:"MediaGrid_mediaGrid__fFHBa",fullContainer:"MediaGrid_fullContainer__xriqI",mediaGridItem:"MediaGrid_mediaGridItem__e45DV",mediaGridMobile:"MediaGrid_mediaGridMobile__7V89a",mobileSticky:"MediaGrid_mobileSticky__GjEmM",mobileStickyCenter:"MediaGrid_mobileStickyCenter__pgRTU",mediaGridItemMobile:"MediaGrid_mediaGridItemMobile__SZNEF"}}}]);