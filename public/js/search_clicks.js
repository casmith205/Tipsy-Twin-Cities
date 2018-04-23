// Handle the clicks of the "submit" button on the form 
// and the click of the restaurants that show up on submit

$(function () {
    // On the click of the submit button of the form... 
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        // Grab info from the search...
        var dealType = $("#deal_type").val();
        var currentDay = moment().format('dddd');
        var startTime = $("#start_time").val();

        // Set the information that we want to send to the API....
        var searchInfo = {
            deal_type: dealType,
            day: currentDay,
            start_time: startTime
        };
        console.log(searchInfo);
        // Send the GET request to DEALS
        $.ajax("/api/deals/search", {
            type: "GET",
            data: searchInfo
        }).then(
            function (results) {
                console.log("Searched for the following: ", searchInfo);
                // Reload the page to get the updated list
                //location.reload();
                console.log("results arry of objs: ", results)
                for (var i = 0; i < results.length; i++) {
                    console.log("restaurant name: " + results[i].Restaurant.restaurant_name)
                    console.log("restaurant id: " + results[i].Restaurant.id)
                    console.log("day: " + results[i].day)
                    console.log("start time: " + results[i].start_time)
                    console.log("end time: " + results[i].end_time)
                    console.log("type: " + results[i].deal_type)
                    console.log("description: " + results[i].deal_description)
                    console.log("restrictions: " + results[i].restrictions)

                }

            }
        );

    });

    //what is this doing?  for search param on /restaurant html route?
    $("#resInput").on("click", function (event) {
        // Grab info from the search...
        var restaurants_Id = $("#restaurantId").val();

        // Set the information that we want to send to the API....
        var restInfo = {
            restLocation: restLocation,
            restWeb: restWeb
        };
        $.ajax("/api/restaurants/search", {
            type: "GET",
            data: restaurantInfo
        }).then(
            function () {

                console.log("Searched for the following: ", restaurantInfo);
                // Reload the page to get the updated list
                location.reload();
            });
    });

});