(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("Kw5r");var r=e("DOVJ"),n=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),s=e("fVfk"),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,i=a.data,o=a.parent,u=e.info,p=e.showLinks,g=e.showNavigation,c=e.ariaLabel,f=function(t,a){var e=t.currentPage,r=void 0===e?1:e,n=t.totalPages,s=void 0===n?1:n,i=Math.ceil(a/2),l=Math.floor(r-i),o=Math.floor(r+i);s<=a?(l=0,o=s):r<=i?(l=0,o=a):r+i>=s&&(l=s-a,o=s);for(var u=[],p=l+1;p<=o;p++)u.push(p);return{current:r,total:s,start:l,end:o,pages:u}}(u,e.range),d=f.current,v=f.total,b=f.pages,L=f.start,h=f.end,y=Object(s.d)(o.$route),C=function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===d&&(i=e.ariaCurrentLabel);var u={to:l(y,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(r.a,{class:[e.linkClass,o],attrs:Object(n.a)(Object(n.a)({},u),{},{"aria-label":i.replace("%n",a),"aria-current":d===a})},[s])},P=p?b.map((function(t){return C(t,t,e.ariaLinkLabel)})):[];if(g){var S=e.firstLabel,k=e.prevLabel,m=e.nextLabel,w=e.lastLabel,x=e.ariaFirstLabel,j=e.ariaPrevLabel,N=e.ariaNextLabel,O=e.ariaLastLabel,T=e.firstClass,_=e.prevClass,$=e.nextClass,G=e.lastClass,J=e.navClass;d>1&&P.unshift(C(d-1,k,j,[_,J])),L>0&&P.unshift(C(1,S,x,[T,J])),d<v&&P.push(C(d+1,m,N,[$,J])),h<v&&P.push(C(v,w,O,[G,J]))}return P.length<2?null:t("nav",Object(n.a)(Object(n.a)({},i),{},{attrs:{role:"navigation","aria-label":c}}),P)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(s.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},aIsG:function(t,a,e){"use strict";e.r(a);var r=e("Wsvf"),n=e("nJNL"),s={components:{Pager:r.a,Post:n.a},metaInfo:function(){return{title:this.$page.wordPressPostTag.title}}},i=e("KHd+"),l=null,o=Object(i.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Tag: "+this._s(this.$page.wordPressPostTag.title)+" ")]),a("ul",{staticClass:"post-list"},this._l(this.$page.wordPressPostTag.belongsTo.edges,(function(t){var e=t.node;return a("li",{key:e.id},[a("Post",{attrs:{post:e}})],1)})),0),a("Pager",{attrs:{info:this.$page.wordPressPostTag.belongsTo.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);a.default=o.exports},nJNL:function(t,a,e){"use strict";var r={props:{post:{type:Object,required:!0}}},n=e("KHd+"),s=Object(n.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),a("g-link",{attrs:{to:this.post.path}},[this._v("\n    Read More\n  ")])],1)}),[],!1,null,null,null);a.a=s.exports}}]);