$(document).ready(function () {
  var images = [];
  var currentIndex = 0;
  $(".gallery-item img").each(function () {
    var img = $(this);
    var imageData = {
      src: img.attr("src"),
      id: img.data("id"),
    };
    images.push(imageData);
  });

  $(".gallery-item").on("click", function () {
    console.log("clicked");
    var imgId = $(this).find("img").data("id");
    currentIndex = findImageIndex(imgId);
    updatePopupImage(false);
    $("#imagePopup").fadeIn(300);
  });
  $("#prevBtn").on("click", function () {
    navigateImage("prev");
  });
  $("#nextBtn").on("click", function () {
    navigateImage("next");
  });
  $(".close-btn").click(function () {
    closePopUp();
  });
  var updatePopupImage = function (imageVisible) {
    var image = images[currentIndex];
    var popupImage = $("#popupImage");
    popupImage.attr("src", image.src);
    if (!imageVisible) {
      popupImage.show();
    }
  };
  var findImageIndex = function (id) {
    for (var i = 0; i < images.length; i++) {
      if (images[i].id == id) {
        return i;
      }
    }
    return 0;
  };
  var navigateImage = function (direction) {
    var popupImage = $("#popupImage");
    popupImage.fadeOut(300, function () {
      if (direction === "prev") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      } else {
        currentIndex = (currentIndex + 1) % images.length;
      }
      updatePopupImage(true);
      popupImage.fadeIn(300);
    });
  };

  var closePopUp = function () {
    $("#imagePopup").fadeOut(300);
  };
});
