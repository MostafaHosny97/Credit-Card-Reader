$('#backToTop').click(() => {
    $('html,body').animate({ scrollTop: 0 }, 1000)
    new WOW().init();
})

$('#getstarted .nav-item a[href^="#"]').click(function() {
    let aHref = $(this).attr('href')
    let offSet = $(aHref).offset().top
    $('html,body').animate({ scrollTop: offSet }, 1000)
})

$(document).ready(function() {
    $("#flexSwitchCheckChecked").click(function() {
        $("#cardCustomize").toggleClass("card-customize");
        $("#btnCustomize").toggleClass("btn-customize");
        $("#wordCustomize").toggleClass("word-customize");
    });
});

$(document).ready(function() {
    $('#spinnerLoading').fadeOut(1000, function() {
        $('body').css('overflow', 'auto')
    })
})

new WOW().init();