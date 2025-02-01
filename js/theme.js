$(document).ready(function () {
	// باز و بسته کردن منوی همبرگری
    $(".menu-btn").click(function () {
        $(".mobile-menu").slideToggle();
    });

    // اسکرول نرم به بخش‌های مختلف
    $(".mobile-menu ul li a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(target).offset().top - 70 }, 800);
        $(".mobile-menu").slideUp(); // بستن منو بعد از کلیک
    });

     // اسلایدر با شماره‌بندی
	 var owl = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        items: 1,
        onInitialized: function (event) {
            addCustomDots(event);
        },
        onChanged: function (event) {
            updateActiveDot(event);
        }
    });

    function addCustomDots(event) {
        var realItems = $(event.target).find(".owl-stage > .owl-item:not(.cloned)").length; // تعداد واقعی اسلایدها
        var dotsContainer = $(".custom-dots");
        dotsContainer.html("");
        for (var i = 0; i < realItems; i++) {
            dotsContainer.append("<button data-index='" + i + "'>" + (i + 1) + "</button>");
        }
        $(".custom-dots button").first().addClass("active");

        $(".custom-dots button").click(function () {
            var index = $(this).data("index");
            owl.trigger("to.owl.carousel", [index, 300]);
        });
    }

    function updateActiveDot(event) {
        var realIndex = event.item.index % $(".owl-carousel .owl-stage > .owl-item:not(.cloned)").length; // اصلاح ایندکس
        $(".custom-dots button").removeClass("active");
        $(".custom-dots button").eq(realIndex).addClass("active");
    }
});