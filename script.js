$(".svg-menu-btn").click(function () {
  console.log("clicked");
  if ($(".cat-list").css("display") == "none") {
    $(".cat-list").css({
      display: "flex",
      transition: "all 0.2s linear",
    });
  } else {
    $("header .cat-list").css("display", "none");
  }
});
// Menu End
