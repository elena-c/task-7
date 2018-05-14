$(document).ready(function(){
    //scroll to link id
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 400, 'linear');
    });
    //sidebar
    let menu = $("#main-nav")
    let body = $("body");
    let isActive = false
    function handleMenuClick(e){
        if(isActive){
            menu.removeClass('active')
            body.css('overflow', 'initial')
        }else {
            menu.addClass('active')
            body.css('overflow', 'hidden')
        }
        isActive = !isActive
    }
    $("header")
        .on("click", ".mobile-menu", handleMenuClick)
        .on("click", "#main-nav", handleMenuClick)
        .on('click', '.main-nav', e =>  e.stopPropagation())
    //swiper
    new Swiper ('.swiper-container', {
        slideClass: 'slide',
        autoplay: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
        },
    })
    new Swiper ('.carousel', {
            breakpoints: {
                960: {
                    slidesPerView: 2,
                    spaceBetween: '2%'
                },
                600: {
                    slidesPerView: 1,
                    spaceBetween: '4%'
                },

            },
            slideClass: 'figure',
            slidesPerView: 3,
            spaceBetween: "3%",
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    new Swiper ('.portfolio-slides', {
        slideClass: 'slide1',
        autoplay: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
        },
    })
    $('.figure-gallery').each((i, el) => {
        new Swiper (el, {
            slideClass: 'slide-img',
            nested: true,
            touchReleaseOnEdges: true,
                pagination: {
                el: '.pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        })
    })
});

