var a =  $('.title');
var b =  $('.title h1');
var c =  $('.title h2');
var d =  $('.arrow-container');
var e =  $('img.arrow1');
var arrows = $('.arrow-container > div');

$(document).ready(function(){
    move();

    arrows.hover(function(){
        $(this).find('.arrow-links').show();
    }, function(){
        $(this).find('.arrow-links').hide();
    });
});

$(window).on('resize', function(){
    move();
});

function move(){
    a.css('height', b.height());
    d.css('height', e.height()*2);
    b.css('position', 'absolute').animate({ left: a.width() - b.width() - 40 });
    c.css('position', 'absolute').animate({ left: a.width() - c.width() - 40 });
}