"use scrict";function hasTouch(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function getElemDistance(a){var b=0;if(a.offsetParent)do b+=a.offsetTop,a=a.offsetParent;while(a);return b>=0?b:0}if(hasTouch())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;ri>=0;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(ex){}var forEach=function(a,b,c){var d=0,e=a.length;if(e>0)for(;e>d;d++)b.call(c,d,a[d])},elementsFixed=function(){function a(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function b(a,b){a.forEach(function(a,c,d){a.setAttribute("style","padding:0 "+b.wrapperPadding+"px");var e;window.matchMedia("(min-width: 999px)").matches?e=b.width.desktop:window.matchMedia("(min-width: 400px) and (max-width: 998px)").matches?e=b.width.tablet:window.matchMedia("only screen and (max-width: 399px)").matches&&(e=b.width.mobile);var f=a.querySelector(".content"),g=a.querySelector(".sticky"),h=getElemDistance(f),i=g.querySelector(".sticky-container");f.style.marginRight=e+"px";var j=i.offsetHeight,k=f.offsetHeight,l=Math.max(document.documentElement.clientWidth,document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth);k>j&&h<window.pageYOffset?k+h>window.pageYOffset+j?i.setAttribute("style","position:fixed; width:"+e+"px; top:0px; right:"+(l+2*b.wrapperPadding-a.scrollWidth)/2+"px;"):i.setAttribute("style","position:absolute; width:"+e+"px; top:"+(k-j)+"px; right:"+b.wrapperPadding+"px;"):i.setAttribute("style","width:"+e+"px;")})}function c(a){a.forEach(function(a,b,c){setTimeout(function(){a.classList.remove("show"),setTimeout(function(){a.classList.remove("loading")},1e3)},1e3)})}function d(d){var e=document.querySelectorAll("."+d.wrapper);window.addEventListener("scroll",function(){b(e,d)},!1);var f=a();window.addEventListener("resize",function(){var c=a();c!==f&&b(e,d)},!1),b(e,d),c(e)}return{app:d}}();