parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return i(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.addEventListener("load",function(t){var n=document.querySelector(".body"),r=document.querySelectorAll(".popupfaq__tab-title"),i=document.querySelector(".contact__form");function o(t){var n=document.querySelector(t),r=n.children,i=r[0],o=r[1],a=r[2],s=e(o.children),c="";s.forEach(function(e){e.addEventListener("mouseover",function(e){c=e.target.innerHTML})}),[i,a].forEach(function(e){e.addEventListener("click",function(e){var t=i.innerHTML;o.style.display="flex",n.addEventListener("click",function(e){e.target.classList.contains("select__item")?(o.style.display="none",e.target.innerHTML=t,i.innerHTML=c):(o.style.display="none",c="")},!0)})})}o(".header__lang"),o(".select-country"),o(".select-city"),o(".order-quantity"),o(".payform-quantity"),window.addEventListener("hashchange",function(){"#popup-lang"===window.location.hash||"#popup-menu"===window.location.hash||"#popup-help"===window.location.hash||"#popupvideo"===window.location.hash||"#popuporder"===window.location.hash||"#popup-faq"===window.location.hash?n.classList.add("body--with-menu"):(n.classList.remove("body--with-menu"),document.querySelectorAll(".video").forEach(function(e){var t=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("src",t)}))}),r.forEach(function(e){e.addEventListener("click",function(t){r.forEach(function(e){if(!t.target.nextElementSibling.classList.contains("show-text")){var n=e.nextElementSibling;n.classList.remove("show-text"),n.nextElementSibling.classList.remove("show-text"),e.firstElementChild.classList.remove("arrow-active")}}),e.nextElementSibling.classList.toggle("show-text"),e.nextElementSibling.nextElementSibling.classList.toggle("show-text"),e.firstElementChild.classList.toggle("arrow-active")})}),i.addEventListener("submit",function(e){e.preventDefault(),i.reset()})});var a=new Swiper(".startpage__slider",{direction:"horizontal",loop:!0,speed:400,spaceBetween:100,slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".startpage__slider-next",prevEl:".startpage__slider-prev"}}),s=new Swiper(".about__slider",{direction:"horizontal",loop:!0,speed:400,spaceBetween:100,slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".about__slider-next",prevEl:".about__slider-prev"},pagination:{el:".swiper-pagination",type:"bullets"}}),c=document.querySelector(".currentSlide"),l=document.querySelector(".allSlides");s.on("slideChange",function(){c.innerHTML=s.realIndex,l.innerHTML=s.slides.length});var d=document.querySelector(".about__button"),u=document.querySelector(".startpage__button"),v=document.querySelector(".close-video");d.addEventListener("click",function(e){v.setAttribute("href","#about")}),u.addEventListener("click",function(e){v.setAttribute("href","#")});var m=document.querySelectorAll(".tech__details");m.forEach(function(e){e.addEventListener("click",function(e){e.target.classList.toggle("tech__details"),e.target.classList.toggle("tech__details-active");var t=document.querySelector(".body");t.addEventListener("click",function n(r){r.target!==e.target&&(e.target.classList.add("tech__details"),e.target.classList.remove("tech__details-active"),t.removeEventListener(n))})})});var f=document.querySelectorAll(".card");f.forEach(function(e){e.addEventListener("click",function(t){e.classList.add("backside"),setTimeout(function(){e.classList.remove("backside")},1500)},!0)});var p=document.querySelector(".order-button"),y=document.querySelector(".pay-button"),b=document.querySelector(".completeButton"),h=document.querySelector(".mainBuyButton"),L=document.querySelector("#place-order"),_=document.querySelector("#pay"),g=document.querySelectorAll(".order__nav-link"),E=document.querySelectorAll(".ordertab"),w=document.querySelector(".order__imageblock");L.addEventListener("submit",function(e){e.preventDefault(),L.reset(),g.forEach(function(e){e.classList.remove("order__nav-link--active")}),g[1].classList.add("order__nav-link--active"),E[0].classList.add("disabled"),E[1].classList.remove("disabled")}),_.addEventListener("submit",function(e){e.preventDefault(),L.reset(),w.style.display="none",g.forEach(function(e){e.classList.remove("order__nav-link--active")}),g[2].classList.add("order__nav-link--active"),E[1].classList.add("disabled"),E[2].classList.remove("disabled")}),b.addEventListener("click",function(e){w.style.display="block"}),h.addEventListener("click",function(e){w.style.display="block",g.forEach(function(e){e.classList.remove("order__nav-link--active")}),g[0].classList.add("order__nav-link--active"),E[0].classList.remove("disabled"),E[1].classList.add("disabled"),E[2].classList.add("disabled")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a3f8b520.js.map