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

$(document).ready(function(){
    setTimeout(function() { document.getElementById('audio').play(); }, 2000)
    if ($(window).width() >= 992) {
    	move(true);
        linksPosition();
        d.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        	function(e) {
            	showArrow();
        	}
        );
    }

    $('.arrow-links-title').click(function(){
    	$(this).next('.arrow-links').slideToggle();
    	if ($(this).find('.glyphicon').hasClass('glyphicon-triangle-top'))
    		$(this).find('.glyphicon').removeClass('glyphicon-triangle-top');
    	else
    		$(this).find('.glyphicon').addClass('glyphicon-triangle-top');
    });
});

$(window).on('resize', function(){
    clearForResize();
    if ($(window).width() >= 992) {
        linksPosition();
        move(false);
        showArrow();
    }
});

function move(start){
    a.css('height', b.height());
    d.css('height', $(window).height() / 100 * 80);
    if (start) {
	    b.css('position', 'absolute').animate({ left: a.width() - b.width() });
	    c.css('position', 'absolute').animate({ right: 0 });
    } else {
    	b.css('position', 'absolute').css('left', 'auto').css('right', 0);
	    c.css('position', 'absolute').css('right', 0);
    }
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

function linksPosition(){
        arrowsLinks.find('div.arl').each(function(){
            $(this).css('margin-right', ($(this).attr('data-number') * 10) + 'px');
        });
}

function clearForResize(){
    arrows.unbind("mouseenter mouseleave");
    arrowsLinks.css('left',0).css('opacity', 1);
    arrowsLinks.find('div.arl').css('margin-right', 0);
    a.css('height', 'auto');
    d.css('height', 'auto');
    b.css( {'position' : 'relative', 'left' : '0px' } );
    c.css( { 'position' : 'relative', 'right' : '0px' } );
    b.css('left','0px');
}

