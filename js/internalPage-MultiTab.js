$(document).ready(function () {
    $(".tab").click(function () {
        // تغییر تب فعال
        $(".tab").removeClass("active");
        $(this).addClass("active");

        // دریافت داده‌های مربوطه از تب انتخاب‌شده
        var newTitle = $(this).attr("data-title");
        var newText = $(this).attr("data-text");

        // تغییر متن‌ها در صفحه
        $("#main-title").fadeOut(200, function () {
            $(this).text(newTitle).fadeIn(200);
        });

        $("#main-text").fadeOut(200, function () {
            $(this).text(newText).fadeIn(200);
        });
    });
});