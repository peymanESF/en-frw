$(document).ready(function () {
    firstLoadContent();

    $(".tab").click(function () {
        // تغییر تب فعال
        $(".tab").removeClass("active");
        $(this).addClass("active");

        // دریافت داده‌های مربوطه از تب انتخاب‌شده
        var newTitle = $(this).attr("data-title");
        var newText = $('.contentTab.d-none', this).html();

        // تغییر متن‌ها در صفحه
        $("#main-title").fadeOut(200, function () {
            $(this).text(newTitle).fadeIn(200);
        });

        $("#main-text .lineContainer").fadeOut(200, function () {
            if (newText != null)
                $(this).html(newText).fadeIn(200);
            else
                $(this).html("").fadeIn(200);
        });
    });

    function firstLoadContent() {
        var newTitle = $(".tab.active").attr("data-title");
        var newText = $('.tab.active .contentTab.d-none').html();
        $("#main-title").text(newTitle);
        if (newText != null)
            $("#main-text .lineContainer").html(newText).fadeIn(200);
        else
            $("#main-text .lineContainer").html("").fadeIn(200);
    }
});