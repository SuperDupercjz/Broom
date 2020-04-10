$(document).ready(function () {
  $(".search").click(function () {
    let searchbtn = $("#Giphy").val();
    var queryURL =
      " https://api.giphy.com/v1/gifs/translate?api_key=HECDm9XInzsgYrbK6VZxfulkZiBvp39b&s=" +
      searchbtn;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response.data);
    });
  });
});
