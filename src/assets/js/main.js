$(document).ready(function(){
    //scroll to link id
    $(".page").on("click", "a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let item = id.length > 1 && $(id);
        if(item){
            $('body,html').animate({scrollTop: item.offset().top}, 400);
        }
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
                767: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            },
            slideClass: 'figure',
            slidesPerView: 3,
            spaceBetween: "3%",
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    new Swiper ('#figure-1', {
        slideClass: 'slide-img-1',
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
    new Swiper ('#figure-2', {
        slideClass: 'slide-img-2',
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
});

