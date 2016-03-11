$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    $('a').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    function updateContainer() {
        var theHeight = $(window).height();
        $('.title-wrapper').css('padding-top', theHeight/2-55);
        $('.title-wrapper').css('padding-bottom', theHeight/2-56);
    }
    // function updateContainer() {
    //     var theHeight = $(window).height();
    //     $('.bg-filter').css('height', theHeight);
    // }
    // function updateContainer() {
    //     var theHeight = $(window).height();
    //     $('.teal-filter').css('height', theHeight);
    // }
    // function updateContainer() {
    //     var theHeight = $(window).height();
    //     $('.music').css('margin-top', theHeight);
    // }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});