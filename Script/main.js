

$(document).ready(function () {

    $(".href").hover(function () {
        $(this).css('border-bottom','3px solid yellow')
    });
    $(".href").mouseleave(function () {
        $(this).css('border-bottom','2px solid white')
    });


    $("#photo img").hover(function(){
        $('#photo img').not($(this)).css('filter','blur(2px)');
    });
    $("#photo img").mouseleave(function(){
        $('#photo img').css('filter','blur(0px)');
    });
    

    $('#inf p').hide();
    $('.forii img').hover(function(){
        $('.forii p').show(500)
    });
    $('.forii img').mouseleave(function(){
        $('.forii p').hide(500)
    });
    $('.foril img').hover(function(){
        $('.foril p').show(500)
    });
    $('.foril img').mouseleave(function(){
        $('.foril p').hide(500)
    });
    $('.foric img').hover(function(){
        $('.foric p').show(500)
    });
    $('.foric img').mouseleave(function(){
        $('.foric p').hide(500)
    });
    $('.forib img').hover(function(){
        $('.forib p').show(500)
    });
    $('.forib img').mouseleave(function(){
        $('.forib p').hide(500)
    });

    $(".comeback").hide();

    var hasBeenTrigged1 = false;
    var hasBeenTrigged2 = false;
    var hasBeenTrigged3 = false;
    $(window).scroll(function(){
        $("#photo").animate({ marginTop:'20px'}, 1000);
        if ($(window).scrollTop() >= 1800 && !hasBeenTrigged1) {
            $("#inf").animate({ marginTop:'50px'}, 1000);
            hasBeenTrigged1 = true;
        };
        if ($(window).scrollTop() >= 2550 && !hasBeenTrigged2) {
            $("#about").animate({ marginTop:'0px'}, 1000);
            hasBeenTrigged2 = true;
        };
        if ($(window).scrollTop() >= 3400 && !hasBeenTrigged3) {
            $("#callback").animate({ marginTop:'70px'}, 1000);
            hasBeenTrigged3 = true;
        };
        if ($(window).scrollTop() <= $(window).height()) {
            $(".comeback").hide(200);
        }
        else if ($(window).scrollTop() > $(window).height()) {
            $(".comeback").show(200);
        };
        if(window.innerWidth < 1333) {
            $("div").removeClass("comeback");
        };
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

});

