

$(SEARCH BUTTON).on("click", function() {

    var article = $("#search").val();
    // var numOfRecords = $("#number-records").val("data-value");
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q= " + article + "&api-key=YTXAL0t6SaZ5CeCklPyheH2Iql5nqfb0";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.snippet;
        //put this on the results page 

        for (var i = 0; i < results.length; i++) {
          var  = $("<div>");

          var info = results[i].snippet;

          var p = $("<p>").text(rating);


          PLACE TO PUT.prepend(p);
"
          $("#".prepend(PLACE TO PUT INFO);
        }
      });
  });
