var a =  $('.title');
var b =  $('.title .part-1');
var c =  $('.title .part-2');
var d =  $('.arrow-container');
var arrows = $('.arrow-container > div');
var arrowImgs = $('.arrow-container img');
var arrowsLinks = $('.arrow-container > div > .arrow-links');
var coorLA = [ '70%', '80%', '0%'];
var coorLB = [ '61%', '72%', '15%' ];
var zindexLB = [ '5', '3', '1' ];

arrowsLinks.find('div.arl').each(function(){
	$(this).css('margin-right', ($(this).attr('data-number') * 10) + 'px');
});

d.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function(e) {

});

$(document).ready(function(){
    move();
    d.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
        showArrow();
    });

});

$(window).on('resize', function(){
    move();
});

function move(){
    a.css('height', b.height());
    d.css('height', $(window).height() / 100 * 80);
    b.css('position', 'absolute').animate({ left: a.width() - b.width() });
    c.css('position', 'absolute').animate({ left: a.width() - c.width() });
    $('.content > .img-cover').css('top', (($(window).height() - $('.content > .img-cover').height()) / 2) + 'px');
}

function showArrow(){
	arrows.hover(function(){
		let links = $(this).find('.arrow-links');
		let n = links.attr('data-number') - 1;
		links.show().animate({ opacity: 1, left: coorLA[n] }, {duration: 500, easing: 'easeOutBounce', complete: function(){ $(this).css('z-index', 10); }});
    }, function(){
    	let links = $(this).find('.arrow-links');
		let n = links.attr('data-number') - 1;
    	links.css('z-index', zindexLB[n]).animate({ opacity: 0.25, left: coorLB[n] }, {duration: 500, easing: 'easeOutBounce', complete: function(){ $(this).hide().css('left', coorLB[n]); }});
    });
}