var a =  $('.title');
var b =  $('.title .part-1');
var c =  $('.title .part-2');
var d =  $('.arrow-container');
var e =  $('.container');
var arrows = $('.arrow-container > div');
var arrowImgs = $('.arrow-container img');
var arrowsLinks = $('.arrow-container > div > .arrow-links');
var coorLA = [ '70%', '80%', '0%'];
var coorLB = [ '61%', '72%', '15%' ];
var zindexLB = [ '5', '3', '1' ];

$(document).ready(function(){
    setTimeout(function() { document.getElementById('audio').play(); }, 2000);

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
    loadedImg(false);
});

var imgs = document.images,
len = imgs.length,
counter = 0,
images = [];

/*[].forEach.call( imgs, function( img ) {
   img.addEventListener( 'load', incrementCounter, false );
} );*/

[].forEach.call( imgs, function( img ) {
    preloadImage(img.src, function() {
        incrementCounter();
    });
});

function preloadImage(url, callback) {
    var image = new Image;
    image.onload = callback;
    image.src    = url;

    // This prevents the image from destroying after the function is executed.
    images.push(image);
};

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        loadedImg();
    }
}

function move(start){
    let a =  $('.title');
    let b =  $('.title .part-1');
    $('.title').css('height', $('.title .part-1').height());
    h = $(window).height() / 100 * 75;
    h2 = $('img.arrow2').height() + $('img.arrow1').height() + $('.title').height() + 20;

    d.css('height', h2);
    c.css('top', b.offset().top + b.height() - 5);
    if (start) {
        e.css('background-image', 'url(/new/img/sfondo.jpg)').css('border','2px solid grey');
        b.css('position', 'absolute').animate({ left: a.width() - b.width() });
        c.css('position', 'absolute').animate({ right: 0 });
    } else {
        b.css('position', 'absolute').css('left', 'auto').css('right', 0);
        c.css('position', 'absolute').css('right', 0);
    }
    arrowPosition();
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

function arrowPosition(){
    $('.arrow2').css('top', $('.arrow1').height() - ($('.arrow1').height() / 100 * 5));
    $('.arrow3').css('top', $('.arrow1').height() - ($('.arrow1').height() / 100 * 45));
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
    c.css( { 'position' : 'relative', 'right' : '0px', 'top' : '0px' } );
    b.css('left','0px');
}

function loadedImg(moveValue){
    if (moveValue === undefined) moveValue = true;
    if ($(window).width() >= 992) {
        move(moveValue);
        linksPosition();
        d.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                showArrow();
            }
        );
    }
}