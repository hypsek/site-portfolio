$(document).ready(function() {
    
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });
    
    $('#portfolio-projects').mixItUp();
    
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
            },
            message: "Пожалуйста, введите текст сообщения"
        }
    }) 

    // scroll easy

    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500)
        }
        return false
    });

    // form

    $("form").submit(function() {
        $.ajax({
            type: "POST",
            url: "./send.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val();
            alert("Спасибо за заявку! Скоро я свяжусь с Вами.");
            $("form").trigger("reset")
        });
        return false
    })

    // animation

    var svgAttributes = anime({
  		targets: '#svgAttributes polygon',
  		points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  		easing: 'easeInOutExpo',
  		delay: 1800
});
});