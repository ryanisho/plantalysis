(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9650],{9650:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var l=r(2322),s=(r(2784),r(3467)),n=r(3618),a=r(5003),o=r.n(a),i=r(6297),d=r(2868),c=r(3893),u=r(8758),f=r(6084),m=function(e){var t=e.intro,r=void 0===t?[]:t,a=e.body,m=void 0===a?[]:a,v=r.length>0;return(0,l.jsx)(u.F.AnimationContext.Provider,{value:{disable:!0},children:(0,l.jsx)(i.W,{className:o().carousel,children:(0,l.jsxs)(c.X,{largeGutters:!0,className:o().row,alignItems:"center",children:[v?(0,l.jsx)(d.J,{className:o().introCol,md:12,lg:4,xl:3,children:(0,l.jsx)(f.Z,{delay:.3,type:"fade",children:(0,l.jsx)(n.LU,{bloks:r})})}):null,(0,l.jsx)(d.J,{className:o().sliderCol,md:12,lg:v?8:12,xl:v?9:12,children:(0,l.jsx)(f.Z,{delay:.3,distance:200,type:"horizontal",children:(0,l.jsx)(s.Z,{slidesToShow:3,slidesToScroll:1,arrows:!1,infinite:!1,responsive:[{breakpoint:1025,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],children:m.map((function(e,t){return(0,l.jsx)(n.B5,{blok:e},t)}))})})})]})})})}},5003:function(e){e.exports={carousel:"Carousel_carousel__rvbpB",sliderCol:"Carousel_sliderCol___GCMn",introCol:"Carousel_introCol__FgekV",row:"Carousel_row__SBz49"}},2868:function(e,t,r){"use strict";r.d(t,{J:function(){return h}});var l=r(7284),s=r(2784),n=r(68),a=r(7896),o=r(1461),i=r(2779),d=r.n(i),c=r(9658),u=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],m=s.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,n=e.as,i=void 0===n?"div":n,m=(0,o.Z)(e,u),v=(0,c.vE)(r,"col"),_=[],g=[];return f.forEach((function(e){var t,r,l,s=m[e];if(delete m[e],"object"===typeof s&&null!=s){var n=s.span;t=void 0===n||n,r=s.offset,l=s.order}else t=s;var a="xs"!==e?"-"+e:"";t&&_.push(!0===t?""+v+a:""+v+a+"-"+t),null!=l&&g.push("order"+a+"-"+l),null!=r&&g.push("offset"+a+"-"+r)})),_.length||_.push(v),s.createElement(i,(0,a.Z)({},m,{ref:t,className:d().apply(void 0,[l].concat(_,g))}))}));m.displayName="Col";var v=m,_=r(3020),g=r(9020),h=s.forwardRef((function(e,t){var r=e.alignSelf,a=e.alignItems,o=e.justifyContent,i=e.flex,d=e.gutterY,c=e.className,u=void 0===c?"":c,f=e.borderLeft,m=e.borderRight,h=e.bordersMobile;e.noAnimate;var b=(0,l._)(e,["alignSelf","alignItems","justifyContent","flex","gutterY","className","borderLeft","borderRight","bordersMobile","noAnimate"]),p=(0,s.useRef)(null),x=(0,_.w)(p).animClasses;return s.createElement(v,(0,l.p)({ref:(0,g.Y)(t,p),className:(0,n.W)("column",x,u,i&&"col__flex",a&&"align-items-"+a,o&&"justify-content-"+o,r&&"align-self-"+r,f&&"col__bl",m&&"col__br",h&&h.top&&"col__md__bt",h&&h.bottom&&"col__md__bb",d&&"col__gutterY"),"data-testid":"Col"},b))}));h.displayName="Col"},6297:function(e,t,r){"use strict";r.d(t,{W:function(){return v}});var l=r(7284),s=r(2784),n=r(7896),a=r(1461),o=r(2779),i=r.n(o),d=r(9658),c=["bsPrefix","fluid","as","className"],u=s.forwardRef((function(e,t){var r=e.bsPrefix,l=e.fluid,o=e.as,u=void 0===o?"div":o,f=e.className,m=(0,a.Z)(e,c),v=(0,d.vE)(r,"container"),_="string"===typeof l?"-"+l:"-fluid";return s.createElement(u,(0,n.Z)({ref:t},m,{className:i()(f,l?""+v+_:v)}))}));u.displayName="Container",u.defaultProps={fluid:!1};var f=u,m=r(68),v=function(e){var t=e.children,r=e.width,n=e.leftSided,a=e.rightSided,o=e.className,i=(0,l._)(e,["children","width","leftSided","rightSided","className"]);return s.createElement(f,(0,l.p)({className:(0,m.W)(o,n&&"container--left-sided",a&&"container--right-sided",r&&"container--width-"+r),"data-testid":"Container"},i),t)}},3893:function(e,t,r){"use strict";r.d(t,{X:function(){return g}});var l=r(7284),s=r(2784),n=r(68),a=r(7896),o=r(1461),i=r(2779),d=r.n(i),c=r(9658),u=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],m=s.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,n=e.noGutters,i=e.as,m=void 0===i?"div":i,v=(0,o.Z)(e,u),_=(0,c.vE)(r,"row"),g=_+"-cols",h=[];return f.forEach((function(e){var t,r=v[e];delete v[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&h.push(""+g+l+"-"+t)})),s.createElement(m,(0,a.Z)({ref:t},v,{className:d().apply(void 0,[l,_,n&&"no-gutters"].concat(h))}))}));m.displayName="Row",m.defaultProps={noGutters:!1};var v=m,_=r(9020),g=s.forwardRef((function(e,t){var r=e.alignItems,a=e.justifyContent,o=e.minHeight,i=e.borderTop,d=e.borderBottom,c=e.textAlign,u=e.className,f=void 0===u?"":u,m=e.children,g=e.largeGutters,h=(0,l._)(e,["alignItems","justifyContent","minHeight","borderTop","borderBottom","textAlign","className","children","largeGutters"]),b=(0,s.useRef)(null);return s.createElement(s.Fragment,null,i?s.createElement("div",{className:(0,n.W)(i&&"row__bt")}):null,s.createElement(v,(0,l.p)({ref:(0,_.Y)(t,b),className:(0,n.W)(f,r&&"align-items-"+r,a&&"justify-content-"+a,o&&"row__mh-"+o,c&&"text-"+c,g&&"row-gutters-lg")},h),m),d?s.createElement("div",{className:(0,n.W)(d&&"row__bb")}):null)}));g.displayName="Row"}}]);