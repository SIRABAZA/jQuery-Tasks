$(document).ready(function () {
  $(".image").hover(
    function () {
      var largeImage = $(this).attr("src");
      $("#image-hover")
        .html(
          '<img src="' + largeImage + '" style="width: 40vh; height: 40vh;">'
        )
        .show();
    },
    function () {
      $("#image-hover").hide();
    }
  );
  $(document).mousemove(function (e) {
    $("#image-hover").css({
      left: e.pageX + "px",
      top: e.pageY + "px",
    });
  });
});
