$(document).ready(function () {
  $(".card").click(function () {
    var newsLink = $(this).find(".newsBtnMore a").prop("href");
    window.location.href = newsLink;
  });

  $(".video-card").click(function () {
    const videoUrl = $(this).data("video");
    const videoTitle = $(this, ".video-title").text();
    $("#popUpTite").html(videoTitle);
    $(".popup-overlay video").attr("src", videoUrl);
    $(".popup-overlay").fadeIn();
  });

  $(".close-btn").click(function () {
    $(".popup-overlay").fadeOut();
    $(".popup-overlay video").trigger("pause");
  });
  $(".play-video").on("click", function () {
    const videoSrc = $(this).data("video");
    $("#popupVideo").attr("src", videoSrc); // تنظیم URL ویدئو
    $("#videoPopup").addClass("active"); // نمایش پاپ‌آپ
    $("#popupVideo")[0].play(); // شروع پخش ویدئو
  });

  $(".video-popup-close").on("click", function () {
    $("#videoPopup").removeClass("active"); // بستن پاپ‌آپ
    $("#popupVideo")[0].pause(); // توقف پخش ویدئو
    $("#popupVideo").attr("src", ""); // پاک کردن URL برای ریست
  });

  // بستن با کلیک روی بک‌گراند
  $("#videoPopup").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("active");
      $("#popupVideo")[0].pause();
      $("#popupVideo").attr("src", "");
    }
  });
  /*
  $(window).on("scroll", function () {
    let scrollPos = $(document).scrollTop() + 130; // کمی آفست برای بهتر کار کردن
    $(".menu-item").each(function () {
      let sectionID = $(this).attr("ItemID");
      let section = $(sectionID);
      if (section.length) {
        let sectionTop = section.offset().top;
        let sectionBottom = sectionTop + section.outerHeight();

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          $(".menu-item").removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });
  */

  /*
    // Smooth Scroll برای کلیک روی آیتم‌های منو
    $(".menu-item").on("click", function (e) {
        e.preventDefault();
        let target = $(this).attr("ItemID");
        $("html, body").animate({
                scrollTop: $(target).offset().top - 122
            },
            800
        );
    });
    */
  /*
    // اسکرول نرم به بخش‌های مختلف
    $(".mobile-menu ul li a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("ItemID");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 122
        }, 800);
        $(".mobile-menu").slideUp(); // بستن منو بعد از کلیک
    });
    */
  // اسلایدر با شماره‌بندی
  var owl = $("#home .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    onInitialized: function (event) {
      addCustomDots(event);
    },
    onChanged: function (event) {
      updateActiveDot(event);
    },
  });

  function addCustomDots(event) {
    var realItems = $(event.target).find(
      ".owl-stage > .owl-item:not(.cloned)"
    ).length; // تعداد واقعی اسلایدها
    var dotsContainer = $(".custom-dots");
    dotsContainer.html("");
    for (var i = 0; i < realItems; i++) {
      dotsContainer.append(
        "<button data-index='" + i + "'>0" + (i + 1) + "</button>"
      );
    }
    $(".custom-dots button").first().addClass("active");

    $(".custom-dots button").click(function () {
      var index = $(this).data("index");
      owl.trigger("to.owl.carousel", [index, 300]);
    });
  }

  function updateActiveDot(event) {
    var realItems = $(
      ".owl-carousel .owl-stage > .owl-item:not(.cloned)"
    ).length;
    var currentIndex =
      event.item.index - event.relatedTarget._clones.length / 2; // اصلاح ایندکس

    if (currentIndex >= realItems) {
      currentIndex = 0; // اگر لوپ فعال است، ریست به اول لیست
    } else if (currentIndex < 0) {
      currentIndex = realItems - 1; // برای جلوگیری از مقادیر منفی
    }

    $(".custom-dots button").removeClass("active");
    $(".custom-dots button").eq(currentIndex).addClass("active");
  }
});
$(window).on("load", function () {
  $(".gallery-owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
  });
});