var a =  $('.title');
var b =  $('.title h1');
var c =  $('.title h2');
var d =  $('.arrow-container');
var e =  $('img.arrow1');
var arrows = $('.arrow-container > div');
var arrLinPosLAfter = '66%';

$(document).ready(function(){
    move();
    showArrow();    
});

$(window).on('resize', function(){
    move();
});

function move(){
    a.css('height', b.height());
    d.css('height', e.height()*2);
    b.css('position', 'absolute').animate({ left: a.width() - b.width() - 40 });
    c.css('position', 'absolute').animate({ right: c.width() - 20 });
    $('.content > .img-cover').css('top', (($(window).height() - $('.content > .img-cover').height()) / 2) + 'px');
}

function showArrow(){
	arrows.each(function(){
		
		$(this).hover(function(){
			links = $(this).find('.arrow-links');
			arrLinPosLBefore = links.css('left');
			links.show();
			links.animate({ left: arrLinPosLAfter});
	    }, function(){
	    	links.hide();
	    	links.animate({ left: arrLinPosLBefore});
	    });
	});
}