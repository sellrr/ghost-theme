(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return s})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return r})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},s=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){var n=t(".js-zoomable");n.on("open",(function(t){o()&&e(t.target).parent().hasClass("kg-gallery-image")&&setTimeout((function(){var t=e(".medium-zoom-image--opened"),n=t[0].style.transform,a=n.substr(0,n.indexOf(" ")),o=parseFloat(a.substr(a.indexOf("(")+1).split(")")[0]),s=n.substr(n.indexOf(" ")+1),i=parseFloat(s.split(",")[1]),r="scale(1) translate3d(0, ".concat(i<0?o*i+i:o*i-i,"px, 0)");t.addClass("medium-zoom-image-mobile"),t[0].style.transform=r}),10)})),n.on("close",(function(){o()&&e(event.target).parent().hasClass("kg-gallery-image")&&e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")}))}},13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),i=n.n(s),r=n(2),c=n(6),l=n(3),d=n(10),u=n.n(d),m=n(11),h=n(1);o()(document).ready((function(){Object(h.isRTL)()&&o()("html").attr("dir","rtl").addClass("rtl");var e=o()("body"),t=o()(".js-header"),n=o()(".js-open-menu"),a=o()(".js-close-menu"),s=o()(".js-menu"),d=o()(".js-toggle-submenu"),f=o()(".js-submenu-option")[0],g=o()(".js-submenu"),p=o()(".js-recent-slider"),b=o()(".js-open-secondary-menu"),v=o()(".js-open-search"),w=o()(".js-close-search"),k=o()(".js-search"),j=o()(".js-input-search"),y=o()(".js-search-results"),C=o()(".js-no-results"),O=o()(".js-toggle-darkmode"),x=o()(".js-notification-close"),T=localStorage.getItem("theme"),S=null,M=!1,_=null;function I(){t.removeClass("submenu-is-active"),d.removeClass("active"),g.removeClass("opened").addClass("closed")}function A(){e.toggleClass("no-scroll-y")}var L,D,z,B,E,P,R,V=function(e){var t=o()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){F(t)}),5e3)},F=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}};(n.click((function(){t.addClass("mobile-menu-opened"),s.addClass("opened"),A()})),a.click((function(){t.removeClass("mobile-menu-opened"),s.removeClass("opened"),A()})),d.click((function(){(M=!M)?(t.addClass("submenu-is-active"),d.addClass("active"),g.removeClass("closed").addClass("opened")):I()})),v.click((function(){k.addClass("opened"),setTimeout((function(){j.focus()}),400),A()})),w.click((function(){j.blur(),k.removeClass("opened"),A()})),j.keyup((function(){if(j.val().length>0&&S){var e=S.search(j.val()).filter((function(e){if(e.score<=.5)return e})),t="";if(e.length>0){for(var n=0,a=e.length;n<a;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].item.url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].item.title,'</h3>              <span class="m-result__date">').concat(Object(h.formatDate)(e[n].item.published_at),"</span>            </a>          </article>");C.hide(),y.html(t),y.show()}else y.html(""),y.hide(),C.show()}else y.html(""),y.hide(),C.hide()})),O.change((function(){O.is(":checked")?(o()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(o()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),x.click((function(){F(o()(this).parent())})),o()(window).click((function(e){M&&f&&!f.contains(e.target)&&(M=!1,I())})),o()(document).keyup((function(e){"Escape"===e.key&&k.hasClass("opened")&&w.click()})),T?(o()("html").attr("data-theme",T),"dark"===T&&O.attr("checked",!0)):Object(h.isDarkMode)()&&O.attr("checked",!0),t.length>0)&&new i.a(t[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(h.isMobile)()&&_){var e=_[0];e&&e.state.isVisible&&e.hide()}}}).init();if(p.length>0){var H=new r.d(".js-recent-slider",{type:"slider",rewind:!1,perView:4,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(h.isRTL)()?"rtl":"ltr",breakpoints:{1024:{perView:3,swipeThreshold:80,dragThreshold:120},768:{perView:2,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}},568:{perView:1,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}}}});H.on("mount.after",(function(){Object(l.a)(".js-recent-article-title",50)})),H.mount({Swipe:r.c,Breakpoints:r.a})}if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?o()("[data-aos]").addClass("no-aos-animation"):u.a.init({once:!0,startEvent:"DOMContentLoaded"}),b.length>0){var N=document.getElementById("secondary-navigation-template");_=Object(c.a)(".js-open-secondary-menu",{content:N.innerHTML,arrow:!0,trigger:"click",interactive:!0})}Object(c.a)(".js-tooltip"),Object(l.a)(".js-article-card-title",100),Object(l.a)(".js-article-card-title-no-image",250),L=Object(h.getParameterByName)("action"),D=Object(h.getParameterByName)("stripe"),"subscribe"===L&&V("subscribe"),"signup"===L&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===L&&V("signup"),"signin"===L&&V("signin"),"success"===D&&V("checkout"),"undefined"!=typeof ghostSearchApiKey?(z=ghostHost,B=ghostSearchApiKey,E=new GhostContentAPI({url:z,key:B,version:"v2"}),P=[],R={shouldSort:!0,ignoreLocation:!0,findAllMatches:!0,includeScore:!0,minMatchCharLength:2,keys:["title","custom_excerpt"]},E.posts.browse({limit:"all",fields:"id, title, url, published_at, custom_excerpt"}).then((function(e){for(var t=0,n=e.length;t<n;t++)P.push(e[t]);S=new m.a(P,R)})).catch((function(e){console.log(e)}))):(v.css("visibility","hidden"),w.remove(),k.remove())}))}},[[13,0,1]]]);