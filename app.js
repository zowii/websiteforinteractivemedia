    $(document).ready(function() {
$(window).scroll(function () {
    //console log determines when nav is fixed

    if ($(window).scrollTop() >= 30) {
        $('#nav').addClass('fixed');
    }
    
    if ($(window).scrollTop() < 30) {
        $('#nav').removeClass('fixed');
    }
});
    });