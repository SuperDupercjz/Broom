$(document).ready(function () {
  $(".search").click(function () {
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
        $("#gifHere").prepend(gifDiv);
      }
    });
  });
});
