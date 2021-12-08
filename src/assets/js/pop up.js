$(".button").clickEvent() {
    $(this)
      .closest(".expandCard")
      .toggleClass("expand")
      .promise()
      .done(function() {
        if ($(".expandCard").hasClass("expand")) {
          $(".expandCard")
            .not(".expandCard.expand")
            .addClass("flexhide");
        } else {
          console.log("it ran");
          $(".expandCard.flexhide").removeClass("flexhide");
        }
      });
  });