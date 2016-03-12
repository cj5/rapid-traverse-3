$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    $('a.a-mobile').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
    });
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    function updateContainer() {
        var theHeight = $(window).height();
        var titleWrapperHeight = $('.title-wrapper').height();
        var scroll = $(window).scrollTop();
        $('.title-wrapper').css('padding-top', theHeight/2-titleWrapperHeight/2);
        $('.title-wrapper').css('padding-bottom', theHeight/2-titleWrapperHeight/2);
        if ($(window).innerWidth() >= 753) {
            if (scroll <= theHeight) {
                $('#navicon').css('opacity', 0);
            }
            $(function() {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll >= theHeight) {   
                        $('#navicon').css('opacity', 1);//fades in navicon
                    } else {
                        $('#navicon').css('opacity', 0);//fades out navicon
                    } 
                });
            });
        } else {
            $('#navicon').css('opacity', 1);
            $(function() {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll) {   
                        $('#navicon').css('opacity', 1);//fades in navicon
                    } else {
                        $('#navicon').css('opacity', 1);
                    } 
                });
            });
        }     
    }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});