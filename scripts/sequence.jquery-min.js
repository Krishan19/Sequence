/*
Sequence.js (www.sequencejs.com)
Version: 0.1 Beta
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 unless otherwise stated.
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*//* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-prefixed-testprop-testallprops-domprefixes
 */window.Modernizr=function(a,b,c){function d(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+s.join(c+" ")+c).split(" ");return e(d,b)}function e(a,b){for(var d in a)if(p[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){return typeof a===b}function h(a,b){return i(prefixes.join(a+";")+(b||""))}function i(a){p.cssText=a}var j="2.0.6",k={},l=b.documentElement,m=b.head||b.getElementsByTagName("head")[0],n="modernizr",o=b.createElement(n),p=o.style,q,r=Object.prototype.toString,s="Webkit Moz O ms Khtml".split(" "),t={},u={},v={},w=[],x,y={}.hasOwnProperty,z;!g(y,c)&&!g(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&g(a.constructor.prototype[b],c)};for(var A in t)z(t,A)&&(x=A.toLowerCase(),k[x]=t[A](),w.push((k[x]?"":"no-")+x));i(""),o=q=null,k._version=j,k._domPrefixes=s,k.testProp=function(a){return e([a])},k.testAllProps=d,k.prefixed=function(a){return d(a,"pfx")};return k}(this,this.document);(function(a){function b(b,c){this.container=a(b);this.sequence=this.container.children("ul");var d=this,e={WebkitTransition:"-webkit-",MozTransition:"-moz-",OTransition:"-o-",msTransition:"-ms-",transition:""},f={WebkitTransition:"webkitTransitionEnd webkitAnimationEnd",MozTransition:"transitionend animationend",OTransition:"oTransitionEnd oAnimationEnd",msTransition:"MSTransitionEnd MSAnimationEnd",transition:"transitionend animationend"};this.prefix=e[Modernizr.prefixed("transition")],this.transitionEnd=f[Modernizr.prefixed("transition")],this.transitionProperties={},this.numberOfFrames=this.sequence.children("li").length,this.transitionsSupported=this.prefix!=undefined?!0:!1,this.hasTouch="ontouchstart"in window?!0:!1,this.sequenceTimer,this.hoverEvent,this.sequence.children("li").children().removeClass("animate-in");this.init={navButtons:function(b,c){prependNextButtonTo=d.settings.prependNextButton==1?d.container:d.settings.prependNextButton;prependPrevButtonTo=d.settings.prependPrevButton==1?d.container:d.settings.prependPrevButton;switch(b){case!0:case undefined:c==".next"?this.CSSSelectorToHTML(a(prependNextButtonTo),a.fn.sequence.defaults.nextButton):this.CSSSelectorToHTML(a(prependPrevButtonTo),a.fn.sequence.defaults.prevButton);break;case!1:break;default:if(c==".next"){this.CSSSelectorToHTML(a(prependNextButtonTo),b);a(b).show();return a(b)}this.CSSSelectorToHTML(a(prependPrevButtonTo),b);a(b).show();return a(b)}},pauseIcon:function(b,c){prependPauseIconTo=d.settings.prependPauseIcon==1?d.container:d.settings.prependPauseIcon;switch(b){case!0:case undefined:this.CSSSelectorToHTML(a(prependPauseIconTo),a.fn.sequence.defaults.pauseIcon,c);a(a.fn.sequence.defaults.pauseIcon).hide();return a(a.fn.sequence.defaults.pauseIcon);case!1:break;default:this.CSSSelectorToHTML(a(prependPauseIconTo),d.settings.pauseIcon,c);a(d.settings.pauseIcon).hide();return a(d.settings.pauseIcon)}},CSSSelectorToHTML:function(b,c,e){switch(c.charAt(0)){case".":buttonSelector='class="'+c.split(".")[1]+'"';break;case"#":buttonSelector='id="'+c.split("#")[1]+'"';break;default:buttonSelector=c}e==undefined||d.settings.pauseIcon==1&&d.settings.pauseIcon==undefined?a(b).prepend("<div "+buttonSelector+"></div>"):a(b).prepend("<div "+buttonSelector+'><img src="'+e+'" alt="Pause" /></div>')}},this.settings=a.extend({},a.fn.sequence.defaults,c);this.sequence.children("li").children().removeClass("animate-in");this.settings.nextButton=this.init.navButtons(c.nextButton,a.fn.sequence.defaults.nextButton);this.settings.prevButton=this.init.navButtons(c.prevButton,a.fn.sequence.defaults.prevButton);this.settings.prependPauseIcon=this.settings.prependPauseIcon!=undefined?this.settings.prependPauseIcon:this.container;this.hasTouch&&(this.settings.calculatedSwipeThreshold=d.container.width()*(this.settings.swipeThreshold/100));this.settings.pauseIcon=this.init.pauseIcon(this.settings.pauseIcon,this.settings.pauseIconSrc);this.currentFrame=this.sequence.children("li:nth-child("+this.settings.startingFrameID+")").addClass("current");this.currentFrameChildren=this.currentFrame.children();this.currentFrameID=this.settings.startingFrameID;this.nextFrameID;this.sequence.css({width:"100%",height:"100%"});if(this.transitionsSupported){whenFirstAnimateInEnds=function(){animationComplete=function(){d.settings.afterNextFrameAnimatesIn();d.active=!1;if(d.settings.autoPlay){autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d)}};d.waitForAnimationsToComplete(d.currentFrameChildren,animationComplete)};if(!this.settings.animateStartingFrameIn){d.modifyElements(d.currentFrameChildren,"0s");d.currentFrameChildren.addClass("animate-in");setTimeout(function(){d.modifyElements(d.currentFrameChildren,"")},100);if(d.settings.autoPlay){autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d)}}else if(this.settings.autoPlayDirection-1&&this.settings.animateStartingFrameIn){this.active=!0;d.modifyElements(d.currentFrameChildren,"0s");d.currentFrameChildren.addClass("animate-out");this.settings.beforeNextFrameAnimatesIn();setTimeout(function(){d.modifyElements(d.currentFrameChildren,"");d.currentFrameChildren.removeClass("animate-out");d.currentFrameChildren.addClass("animate-in")},100);whenFirstAnimateInEnds()}else{this.active=!0;d.modifyElements(d.currentFrameChildren,"");d.currentFrameChildren.addClass("animate-in");whenFirstAnimateInEnds()}}else{this.sequence.children("li").children().addClass("animate-in");this.currentFrame.css("z-index",this.numberOfFrames);this.sequence.children(":not(li:nth-child("+this.settings.startingFrameID+"))").css({display:"none",opacity:0});if(d.settings.autoPlay){autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d)}}this.settings.nextButton!=undefined&&this.settings.nextButton.click(function(){d.next()});this.settings.prevButton!=undefined&&this.settings.prevButton.click(function(){d.prev()});this.settings.keysNavigate&&a(window).keydown(function(a){a.keyCode==39&&d.next();a.keyCode==37&&d.prev()});this.settings.pauseOnHover&&this.settings.autoPlay&&(this.hoverEvent=this.sequence.hover(function(){d.settings.autoPlay=!1;clearTimeout(d.sequenceTimer);a(d.settings.pauseIcon).show()},function(){d.settings.autoPlay=!0;autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d);a(d.settings.pauseIcon).hide()}));if(this.settings.touchEnabled&&this.hasTouch){var g,h={touchstart:-1,touchmove:-1,swipeDirection:""};this.sequence.bind("touchstart touchmove touchend",function(a){a.preventDefault();switch(a.originalEvent.type){case"touchstart":case"touchmove":h[a.originalEvent.type]=a.originalEvent.touches[0].pageX;break;case"touchend":h.touchstart>-1&&h.touchmove>d.settings.calculatedSwipeThreshold&&(h.touchstart<h.touchmove?d.next():d.prev());default:}})}a(window).resize(function(){d.settings.calculatedSwipeThreshold=d.container.width()*(d.settings.swipeThreshold/100)})}b.prototype={autoPlaySequence:function(a){var b=this;b.settings.autoPlayDirection==1?b.next():b.prev()},modifyElements:function(a,b){var c=this;a.css(c.prefixCSS(c.prefix,{"transition-duration":b,"transition-delay":b}))},prefixCSS:function(a,b){css={};for(property in b)css[a+property]=b[property];return css},getStyleBySelector:function(a){css={};var b=document.styleSheets,c,d,e;for(d=b.length-1;d>=0;d--){error=!1;try{c=b[d].cssRules}catch(f){error=!0}if(!error)for(e=0;e<c.length;e++)if(c[e].type==CSSRule.STYLE_RULE&&c[e].selectorText==a){css["-o-transition-duration"]=c[e].style.OTransitionDuration;css["-o-transition-delay"]=c[e].style.OTransitionDelay;return css}}return null},startAutoPlay:function(b,c){var d=this;b=b==undefined?0:b;d.settings.autoPlayDelay=c==undefined?d.settings.autoPlayDelay:c;d.settings.autoPlay=!0;autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d);d.settings.pauseOnHover&&(d.hoverEvent=d.sequence.hover(function(){d.settings.autoPlay=!1;clearTimeout(d.sequenceTimer);a(d.settings.pauseIcon).show()},function(){d.settings.autoPlay=!0;autoPlaySequence=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(autoPlaySequence,d.settings.autoPlayDelay,d);a(d.settings.pauseIcon).hide()}))},stopAutoPlay:function(){var a=this;a.settings.autoPlay=!1;clearTimeout(a.sequenceTimer);a.hoverEvent!=undefined&&a.hoverEvent.unbind()},next:function(){var a=this;if(!a.active){a.nextFrameID=a.currentFrame.index()+1!=a.numberOfFrames?a.currentFrameID+1:1;a.goTo(a.nextFrameID,1)}},prev:function(){var a=this;if(!a.active){a.nextFrameID=a.currentFrame.index()+1==1?a.numberOfFrames:a.currentFrameID-1;a.goTo(a.nextFrameID,-1)}},goTo:function(a,b){var c=this;if(a==c.currentFrame.index()+1)return!1;if(!c.active){c.active=!0;c.currentFrame=c.sequence.children(".current");nextFrame=c.sequence.children("li:nth-child("+a+")");b==undefined&&(b=a>c.currentFrameID?1:-1);frameChildren=c.currentFrame.children();nextFrameChildren=nextFrame.children();if(c.transitionsSupported){c.settings.beforeCurrentFrameAnimatesOut();c.animateOut(b);animateIn=function(){c.animateIn(b);c.currentFrameID=a};switch(c.settings.delayDuringOutInTransitions){case!0:c.waitForAnimationsToComplete(frameChildren,animateIn);break;case!1:animateIn();break;default:setTimeout(animateIn,c.settings.delayDuringOutInTransitions)}}else c.currentFrame.animate({opacity:0},c.settings.fallbackTheme.speed,function(){c.currentFrame.css({display:"none","z-index":"1"});c.currentFrame.removeClass("current");nextFrame.addClass("current").css({display:"block","z-index":c.numberOfFrames}).animate({opacity:1},500);c.currentFrame=nextFrame;c.currentFrameID=c.currentFrame.index()+1;c.active=!1;if(c.settings.autoPlay){autoPlaySequence=function(){c.autoPlaySequence()};clearTimeout(c.sequenceTimer);c.sequenceTimer=setTimeout(autoPlaySequence,c.settings.autoPlayDelay,c)}})}},animateOut:function(b){var c=this;c.settings.beforeCurrentFrameAnimatesIn();if(b==1){c.modifyElements(nextFrameChildren,"0s");nextFrameChildren.removeClass("animate-out");c.modifyElements(frameChildren,"");frameChildren.addClass("animate-out").removeClass("animate-in")}if(b==-1){c.modifyElements(nextFrameChildren,"0s");nextFrameChildren.addClass("animate-out");c.modifyElements(frameChildren,"");frameChildren.each(function(){if(c.prefix=="-o-"){selector="."+a(this).attr("class").replace(" ",".");previousFrameTransitionProperties=c.getStyleBySelector(selector);c.transitionProperties["transition-duration"]=previousFrameTransitionProperties["-o-transition-duration"];c.transitionProperties["transition-delay"]=previousFrameTransitionProperties["-o-transition-delay"];c.transitionProperties["transition-delay"]=c.transitionProperties["transition-delay"]==""?"0s":c.transitionProperties["transition-delay"]}else{c.transitionProperties["transition-duration"]=a(this).css(c.prefix+"transition-duration");c.transitionProperties["transition-delay"]=a(this).css(c.prefix+"transition-delay")}a(this).css(c.prefixCSS(c.prefix,c.transitionProperties)).removeClass("animate-in")})}},waitForAnimationsToComplete:function(b,c){var d=this;elementsAnimated={};b.each(function(){elementsAnimated[a(this).attr("class")]=!1});d.currentFrame.bind(d.transitionEnd,function(a){elementsAnimated[a.target.className]=!0;total=0;for(element in elementsAnimated)elementsAnimated[element]==1&&total++;total==b.length&&c()})},animateIn:function(a){var b=this;b.currentFrame.removeClass("current");b.currentFrame.unbind(b.transitionEnd);nextFrame.addClass("current");b.currentFrame=nextFrame;a==1?b.currentFrameID=b.currentFrameID!=b.numberOfFrames?b.currentFrameID+1:1:b.currentFrameID=b.currentFrameID!=1?b.currentFrameID-1:b.numberOfFrames;nextFrameChildren=nextFrame.children();frameChildren=b.currentFrame.children();b.settings.beforeNextFrameAnimatesIn();if(a==1){b.modifyElements(nextFrameChildren,"0s");nextFrameChildren.removeClass("animate-out");setTimeout(function(){frameChildren.removeClass("animate-out");b.modifyElements(frameChildren,"");frameChildren.addClass("animate-in");whenAnimationEnds()},50)}a==-1&&setTimeout(function(){b.modifyElements(frameChildren,"");frameChildren.addClass("animate-in").removeClass("animate-out");whenAnimationEnds()},50);whenAnimationEnds=function(){unbind=function(){b.settings.afterNextFrameAnimatesIn();b.currentFrame.unbind(b.transitionEnd);b.active=!1;if(b.settings.autoPlay){autoPlaySequence=function(){b.autoPlaySequence()};clearTimeout(b.sequenceTimer);b.sequenceTimer=setTimeout(autoPlaySequence,b.settings.autoPlayDelay,b)}};b.waitForAnimationsToComplete(nextFrameChildren,unbind)}}};a.fn.sequence=function(c){return this.each(function(){var d=new b(a(this),c);a(this).data("sequence",d)})};a.fn.sequence.defaults={nextButton:".next",prependNextButton:!0,prevButton:".prev",prependPrevButton:!0,startingFrameID:1,autoPlay:!0,autoPlayDirection:1,animatestartingFrameIn:!1,autoPlayDelay:5e3,pauseOnHover:!0,pauseIcon:".pause-icon",prependPauseIcon:!0,pauseIconSrc:"images/pause-icon.png",keysNavigate:!0,delayDuringOutInTransitions:1e3,touchEnabled:!0,swipeThreshold:15,fallbackTheme:{speed:500},beforeCurrentFrameAnimatesOut:function(){},beforeNextFrameAnimatesIn:function(){},afterNextFrameAnimatesIn:function(){},beforeCurrentFrameAnimatesIn:function(){}};a.fn.sequence.settings={}})(jQuery);