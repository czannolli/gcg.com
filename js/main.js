var a =  $('.title');
var b =  $('.title .part-1');
var c =  $('.title .part-2');
var d =  $('.arrow-container');
var e =  $('img.arrow1');
var arrows = $('.arrow-container > div');
var arrowsLinks = $('.arrow-container > div > .arrow-links');
var coorLA = [ '66%', '78%', '6%'];
var coorLB = [ '61%', '72%', '15%' ];

arrowsLinks.find('div.arl').each(function(){
	$(this).css('padding-right', ($(this).attr('data-number') * 20) + 'px');
});

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
    b.css('position', 'absolute').animate({ left: a.width() - b.width() });
    c.css('position', 'absolute').animate({ left: a.width() - c.width() });
    $('.content > .img-cover').css('top', (($(window).height() - $('.content > .img-cover').height()) / 2) + 'px');
}

function showArrow(){
	console.clear();	
	arrows.hover(function(){
		let links = $(this).find('.arrow-links');
		let n = links.attr('data-number') - 1;
		links.show().animate({ opacity: 1, left: coorLA[n] }, {duration: 500, easing: 'easeOutBounce'});
    }, function(){
    	let links = $(this).find('.arrow-links');
		let n = links.attr('data-number') - 1;
    	links.animate({ opacity: 0.25, left: coorLB[n] }, {duration: 500, easing: 'easeOutBounce', complete: function(){ $(this).hide().css('left', coorLB[n]); }});
    });
}