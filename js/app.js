// $(function(){
//     $('.header-inner').mouseover(function(){
//         $('.header-inner').css('background','#A6A6A6')
//     });
// })
$(function () {
    var stickyNavTop = $ ('.header-inner').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop > stickyNavTop) {
            $('.header-inner').addClass('sticky');
        }
        else {
            $('.header-inner').removeClass('sticky'); 
        }
    }

    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });
});