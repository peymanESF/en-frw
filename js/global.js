$(document).ready(function () {
  // باز و بسته کردن منوی همبرگری
  $(".menu-btn").click(function () {
    $(".mobile-menu").slideToggle();
  });

  var tabName = $("body").attr("tab");
  $(".smoothScrollMenu ul .menu-item").each(function () {
    if (tabName.toLowerCase() == $(this).text().toLowerCase() && tabName.toLowerCase() != "home")
      $(this).addClass("currentPage");
  });
  $(window).scroll(function () {
    $(window).scrollTop() > 777 ? $("#totop-btn").addClass("active") : $("#totop-btn").removeClass("active")
  })
  $("#totop-btn").click(scrollTop);

  function scrollTop() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  }
});