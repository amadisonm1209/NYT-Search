var searchTerm = president
// var numOfRecords = 
// var startYear =
// var endYear =
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=cWmOA9TgsBL2DAXC9A4eF3mOFqePvAfM";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})