(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fd193d6"],{"0a48":function(e,t,a){},2607:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-horizontal",{scopedSlots:e._u([{key:"navbar",fn:function(e){var t=e.toggleVerticalMenuActive;return[a("app-navbar-horizontal-layout-brand"),a("navbar",{attrs:{"toggle-vertical-menu-active":t}})]}}])},[a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"horizontal-layout",class:[e.layoutClasses],staticStyle:{height:"inherit"},attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",class:{"fixed-top":"xl"!==e.$store.getters["app/currentBreakPoint"]},style:{backgroundColor:"static"===e.navbarType&&e.scrolledTo&&"light"===e.skin?"white":null,boxShadow:"static"===e.navbarType&&e.scrolledTo?"rgba(0, 0, 0, 0.05) 0px 4px 20px 0px":null},attrs:{toggleable:!1}},[e._t("navbar",(function(){return[a("app-navbar-horizontal-layout-brand"),a("app-navbar-horizontal-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive})],2),a("div",{staticClass:"horizontal-menu-wrapper"},[e.isNavMenuHidden?e._e():a("div",{staticClass:"header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",class:[e.navbarMenuTypeClass]},[a("horizontal-nav-menu")],1),a("vertical-nav-menu",{staticClass:"d-block d-xl-none",attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)})],1),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),a("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[a("app-footer")]}))],2),e._t("customizer")],2)},l=[],i=a("3033"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-xl-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),a("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[a("bookmarks")],1),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("locale"),a("dark-Toggler",{staticClass:"d-none d-lg-block"}),a("search-bar"),a("cart-dropdown"),a("notification-dropdown"),a("user-dropdown")],1)],1)},c=[],u=a("aa59"),v=a("042b"),d=a("6957"),p=a("e2f5"),b=a("9f5c"),f=a("809a"),m=a("8a2e"),h=a("5c02"),g=a("eef9"),y={components:{BLink:u["a"],BNavbarNav:v["a"],Bookmarks:d["a"],Locale:p["a"],DarkToggler:b["a"],SearchBar:f["a"],CartDropdown:m["a"],NotificationDropdown:h["a"],UserDropdown:g["a"]},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},C=y,k=a("2877"),w=Object(k["a"])(C,s,c,!1,null,null,null),M=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-header d-xl-block d-none"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("h2",{staticClass:"brand-text mb-0"},[e._v(" "+e._s(e.appName)+" ")])])],1)])])},z=[],T=a("1dff"),_={components:{BLink:u["a"]},setup:function(){var e=T["c"].app,t=e.appName,a=e.appLogoImage;return{appName:t,appLogoImage:a}}},A=_,L=Object(k["a"])(A,x,z,!1,null,null,null),N=L.exports,V=a("62cb"),j=a("b8f2"),O=a("d0b9"),$=a("a6f4"),B=function(){var e=Object($["ref"])(null),t=function(){e.value=window.scrollY};return window.addEventListener("scroll",t),Object($["onUnmounted"])((function(){window.removeEventListener("scroll",t)})),{scrolledTo:e}},H=a("1ae3"),E=a("e08f"),R=a("0d19"),S=a("4360");function D(e,t,a){var n=Object($["computed"])((function(){return S["a"].getters["app/currentBreakPoint"]})),r=Object($["computed"])((function(){var r=[];return"xl"===n.value?r.push("horizontal-menu"):(r.push("vertical-overlay-menu"),r.push(a.value?"menu-open":"menu-hide")),r.push("navbar-".concat(e.value)),"sticky"===t.value&&r.push("footer-fixed"),"static"===t.value&&r.push("footer-static"),"hidden"===t.value&&r.push("footer-hidden"),r})),o=Object($["computed"])((function(){return"sticky"===e.value?"fixed-top":"static"===e.value?"":"hidden"===e.value?"d-none":"floating-nav"})),l=Object($["computed"])((function(){return"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""}));return{layoutClasses:r,navbarMenuTypeClass:o,footerTypeClass:l}}var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container main-menu-content"},[a("horizontal-nav-menu-items",{attrs:{items:e.navMenuItems}})],1)},U=[],F=a("5008"),J=a("4481"),P={components:{HorizontalNavMenuItems:J["a"]},setup:function(){return{navMenuItems:F["a"]}}},W=P,Y=(a("e77f"),Object(k["a"])(W,I,U,!1,null,null,null)),q=Y.exports,G=a("2c28"),K=a("32b8"),Q={watch:{$route:function(){this.$store.state.app.windowWidth<T["a"].xl&&(this.isVerticalMenuActive=!1)}}},X={components:{AppBreadcrumb:i["a"],AppNavbarHorizontalLayout:M,AppNavbarHorizontalLayoutBrand:N,AppFooter:V["a"],HorizontalNavMenu:q,BNavbar:O["a"],LayoutContentRendererDefault:H["a"],LayoutContentRendererLeft:E["a"],LayoutContentRendererLeftDetached:R["a"],VerticalNavMenu:G["a"]},mixins:[Q],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(j["a"])(),t=e.skin,a=e.navbarType,n=e.footerType,r=e.routerTransition,o=e.isNavMenuHidden,l=Object(K["a"])(a,n),i=l.isVerticalMenuActive,s=l.toggleVerticalMenuActive,c=l.overlayClasses,u=l.resizeHandler;u(),window.addEventListener("resize",u),Object($["onUnmounted"])((function(){window.removeEventListener("resize",u)}));var v=D(a,n,i),d=v.navbarMenuTypeClass,p=v.layoutClasses,b=v.footerTypeClass,f=B(),m=f.scrolledTo;return{skin:t,layoutClasses:p,navbarType:a,navbarMenuTypeClass:d,isNavMenuHidden:o,routerTransition:r,footerTypeClass:b,scrolledTo:m,isVerticalMenuActive:i,toggleVerticalMenuActive:s,overlayClasses:c}}},Z=X,ee=(a("c9bd"),Object(k["a"])(Z,o,l,!1,null,null,null)),te=ee.exports,ae=a("cb50"),ne={components:{LayoutHorizontal:te,Navbar:ae["a"],AppNavbarHorizontalLayoutBrand:N},data:function(){return{showCustomizer:T["c"].layout.customizer}}},re=ne,oe=Object(k["a"])(re,n,r,!1,null,null,null);t["default"]=oe.exports},"3c2b":function(e,t,a){},c9bd:function(e,t,a){"use strict";a("0a48")},e77f:function(e,t,a){"use strict";a("3c2b")}}]);
//# sourceMappingURL=chunk-8fd193d6.8967c1e3.js.map