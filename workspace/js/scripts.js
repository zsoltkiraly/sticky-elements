/*
Elements fixed - Code by Zsolt Király
v1.0.5 - 2018-07-03
*/

function signatura() {
    if (window['console']) {
        const text = {
            black: '%c     ',
            blue: '%c   ',
            author: '%c  Zsolt Király  ',
            github: '%c  https://zsoltkiraly.com/'
        }

        const style = {
            black: 'background: #282c34',
            blue: 'background: #61dafb',
            author: 'background: black; color: white',
            github: ''
        }

        console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
    }
}

signatura();

'use strict';
var stickyElements = function() {

    function hasTouch() {
        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
    
    if (hasTouch()) {
        try {
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
    
                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;
    
                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
    

    function getElemDistance(element) {
        var location = 0;
        if (element.offsetParent) {
            do {
                location += element.offsetTop;
                element = element.offsetParent;
            } while (element);
        }
        return location >= 0 ? location : 0;
    }


    function getWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }


    function sticky(stickys, c) {
        stickys.forEach(function(sE, indexSpace, arr) {

            sE.setAttribute('style', 'padding:0 ' + c.wrapperPadding + 'px')

            var stickyWidth;

            if (window.matchMedia('(min-width:' + (c.breakpoints.desktop + 1) +'px)').matches) {
                stickyWidth = c.width.desktop;

            } else if(window.matchMedia('(min-width: ' + (c.breakpoints.tablet + 1) +'px) and (max-width: ' + c.breakpoints.desktop +'px)').matches) {
                stickyWidth = c.width.tablet;

            } else if(window.matchMedia('(min-width: ' + (c.breakpoints.landscapeMobile + 1) +'px) and (max-width: ' + c.breakpoints.tablet +'px)').matches) {
                stickyWidth = c.width.landscapeMobile;

            } else if(window.matchMedia('only screen and (max-width: ' + (c.breakpoints.landscapeMobile) +'px)').matches) {
                stickyWidth = c.width.portraitMobile;
            }

            var content = sE.querySelector('.content'),
                sticky = sE.querySelector('.sticky');

            var contenTop = getElemDistance(content),
                stickyContainer = sticky.querySelector('.sticky-container');

            content.style.marginRight = stickyWidth + 'px';

            var stickyContainerHeight = stickyContainer.offsetHeight,
                contentHeight = content.offsetHeight;

            var documentWidth = Math.max( document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);

            if(contentHeight > stickyContainerHeight) {
                if (contenTop < window.pageYOffset) {
                    if((contentHeight + contenTop) > window.pageYOffset + stickyContainerHeight) {
                        stickyContainer.setAttribute('style', 'position:fixed; width:' + stickyWidth +'px; top:0px; right:' + ((documentWidth + (c.wrapperPadding * 2) - sE.scrollWidth) / 2) + 'px;');
                    
                    } else {
                        stickyContainer.setAttribute('style', 'position:absolute; width:' + stickyWidth +'px; top:' + (contentHeight - stickyContainerHeight) +'px; right:' + c.wrapperPadding + 'px;');
                    }
                } else {
                    stickyContainer.setAttribute('style', 'width:' + stickyWidth +'px;');
                }
            } else {
                stickyContainer.setAttribute('style', 'width:' + stickyWidth +'px;');
            }
        })
    }

    function loading(container) {
        container.forEach(function(conT, indexSpace, arr) {
            setTimeout(function() {
                conT.classList.remove('show');

                setTimeout(function() {
                    conT.classList.remove('loading');
                }, 1000);

            }, 1000);
        })
    }

    function app(config) {
        var stickys = document.querySelectorAll('.' + config.wrapper);

        window.addEventListener('scroll', function() {
            sticky(stickys, config);
        }, false);

        var cachedWidth = getWidth();

        window.addEventListener('resize', function() {
            var newWidth = getWidth();

            if(newWidth !== cachedWidth) {
                sticky(stickys, config);
            }
        }, false);

        sticky(stickys, config);
        loading(stickys);
    }

    return {
        app: app
    }
}();