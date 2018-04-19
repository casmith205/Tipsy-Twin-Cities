// Handle the clicks of the "submit" button on the form 
// and the click of the restaurants that show up on submit
var moment = require("moment");

$(function () {
    // On the click of the submit button of the form... 
    $("#submitBtn").on("click", function (event) {
        // Grab info from the search...
        var dealType = $("#deal_type").val();
        var currentDay = moment().format('dddd');
        var startTime = $("#start_time").val();
        var endTime = $("#end_time").val();
     
        // Set the information that we want to send to the API....
        var searchInfo = {
            deal_type: dealType,
            day: currentDay,
            start_time: startTime,
            end_time: endTime 
        };
        // Send the GET request to DEALS
        $.ajax("/api/deals/search", {
            type: "GET",
            data: searchInfo
        }).then(
            function () {
                console.log("Searched for the following: ", searchInfo);
                // Reload the page to get the updated list
                location.reload();
            }
        );


        // DO A SIMILAR THING ON THE CLICK OF THE RESTAURANT

    });
});
