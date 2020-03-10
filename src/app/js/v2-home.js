$(document).ready(function () {

/****************************************************/
/********************** HEADER **********************/
/****************************************************/

    //OPEN MODAL
    /*$(".para-modal .open-modal").click(function(){
        $(this).parent(this).find('.modal').addClass('is-active');
    });
    $(".para-modal .modal-background").click(function(){
        $(".modal").removeClass('is-active');
    });
    $(".para-modal .modal-close").click(function(){
        $(".modal").removeClass('is-active');
    });*/
    //END OPEN MODAL
    
    // BLOCK SCROLL
    $(document).scroll(function (event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop <= 10) {
            $('.header-abad').removeClass('scroll-active');
        } else {
            $('.header-abad').addClass('scroll-active');
        }
    });

    // BLOCK HEADER
    $('.content-navicon i').click(function() {
        openMenu();
    });
    $('.cajita-close > i').click(function() {
        closeMenu();
    });
    $(".fm-fondo-general").click(function() {
        closeMenu();
    });
});

function openMenu() {
    $('.content-nav').addClass("active-mobile");
    $('.fm-fondo-general').addClass("active-mobile");
    $('body').addClass("oveflow-hidden");
}
function closeMenu() {
    $('.content-nav').removeClass("active-mobile");
    $('.fm-fondo-general').removeClass("active-mobile");
    $('body').removeClass("oveflow-hidden");
}
