$(document).ready(function () {

var search = "drake"
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "28fa3a645fmsh6347d64020ec954p186251jsn525605cce2a6"
	}
}

$.ajax(settings).then(function (response) {
	console.log(response);
	var musicData = response.data;
for (let i =0; i< musicData.length; i++){

	var newImg = ("<img>");
	newImg.attr("src", "" + musicData[i].album.cover_medium);
}


});
    
    
    
    
    
    
    
})