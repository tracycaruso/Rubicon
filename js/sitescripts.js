var controller;

	$(document).ready(function($) {
		// init controller
		controller = new ScrollMagic();
	});


// animations
$(document).ready(function($) {
				// build tween
				var tween = TweenMax.to("nav.hidden", 0.5, {autoAlpha: .90, backgroundColor: '#37341e'});
				var tween1 = TweenMax.to("#philosophy h1, #philosophy p", 0.5, {autoAlpha: 1});
				var text1on = TweenMax.to("li:nth-child(2) a", 0.5, {color:'#b79d36'});
				var text1off = TweenMax.to("li:nth-child(2) a", 0.5, {color:'#fff'});
				var tween2 = TweenMax.to("#eat h1, #eat h2, #eat h2 span, #eat div", 0.5, {autoAlpha: 1});
				var text2on = TweenMax.to("li:nth-child(3) a", 0.5, {color:'#b79d36'});
				var text2off = TweenMax.to("li:nth-child(3) a", 0.5, {color:'#fff'});
				var tween3 = TweenMax.to("#drink h1, #drink h2, #drink h2 span, #drink div", 0.5, {autoAlpha: 1});
				var text3on = TweenMax.to("li:nth-child(4) a", 0.5, {color:'#b79d36'});
				var text3off = TweenMax.to("li:nth-child(4) a", 0.5, {color:'#fff'});
				var tween4 = TweenMax.to("#contact h1, #contact h2, #contact h2 span, #contact div", 0.5, {autoAlpha: 1});
				var text4on = TweenMax.to("li:nth-child(7) a", 0.5, {color:'#b79d36'});
				var text4off = TweenMax.to("li:nth-child(7) a", 0.5, {color:'#fff'});

				// build scene
				var scene = new ScrollScene({triggerElement: "#trigger"})
								.setTween(tween)
								.addTo(controller);
				var scene1 = new ScrollScene({triggerElement: "#trigger1", duration: 300})
								.setTween([tween1, text1on])
								.addTo(controller);
				var scene2 = new ScrollScene({triggerElement: "#trigger2", duration: 300})
								.setTween([text1off, tween2, text2on])
								.addTo(controller);
				var scene3 = new ScrollScene({triggerElement: "#trigger3", duration: 300})
								.setTween([text2off, tween3, text3on, text4off])
								.addTo(controller);
				var scene4 = new ScrollScene({triggerElement: "#trigger4", duration: 300})
								.setTween([text3off, tween4, text4on])
								.addTo(controller);

			});



// page scroll

$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body')
	        .animate(
	        	{scrollTop: target.offset().top},
	        	{duration: 500, ease:"SlowMo.ease"}
	        	);

	        return false;
	      }
	    }
	  });
	});



// slider

jQuery(document).ready(function($) {
    $('#my-slideshow').bjqs({
        'height' : 1349,
        'width' : 2400,
        'responsive' : true,
        'nexttext' : ' ', 
		'prevtext' : ' ',
		'showmarkers' : false
    });
});


// first letter of titles resize

// window.onload = function(){
  // var elements = document.getElementsByTagName("h3");
   // for (var i=0; i<elements.length; i++){
   //  elements[i].innerHTML = elements[i].innerHTML.replace(/\b([a-z])([a-z]+)?\b/gim, "<span>$1</span>$2")
  //}
//}