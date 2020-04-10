$(document).ready(function () {
  $(".search").click(function () {
    let search = $("#Giphy").val();
    const queryURL =
      "https://api.giphy.com/v1/gifs/translate?api_key=HECDm9XInzsgYrbK6VZxfulkZiBvp39b&s=" +
      search;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
