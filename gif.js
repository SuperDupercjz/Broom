$(document).ready(() => {
  $(".search").click(() => {
    if ($("#divA").children().length > 0) {
      $("#divA").slick("unslick");
      $("#divA").empty();
    }

    return getGif();
  });
  $("#Giphy").keypress(function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#gifButton").click();
    }
  });
});

function getGif() {
  let searchbtn = $("#Giphy").val();
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    searchbtn +
    "&api_key=dc6zaTOxFJmzC&limit=25";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    let results = response.data;
    for (let i = 0; i < results.length; i++) {
      let gifDiv = $("<div>");
      let searchedItem = $("<img>");
      searchedItem.attr("src", results[i].images.fixed_height.url);
      gifDiv.append(searchedItem);

      $("#divA").prepend(gifDiv);
    }

    $("#divA").slick({
      autoplay: true,
      dots: true,
      speed: 300,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 2040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
  });
}
