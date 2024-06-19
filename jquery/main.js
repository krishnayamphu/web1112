$(function () {
  $(".icon-bars").click(function () {
    $("#sidenav").removeClass("d-none");
    $("#sidenav").addClass("d-block");

    $(".icon-bars").addClass("d-none");
    $(".icon-close").removeClass("d-none");
  });

  $(".icon-close").click(function () {
    $("#sidenav").removeClass("d-block");
    $("#sidenav").addClass("d-none");

    $(".icon-bars").addClass("d-block");
    $(".icon-close").addClass("d-none");
  });
});
