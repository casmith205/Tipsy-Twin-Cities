// Handle the clicks of the "Add Restaurant" button and "Add Deal" button

$(function() {
    // ADD NEW DEAL
    $("#submitBtnDeal").on("click", function(event) {
        event.preventDefault();
        // Grab info from the search...
        var restaurant_id = $("#restaurant").restId();
        var dealDesc = $("#newDealDesc").val();
        var dealDays= [];
            // have to do a prop.("checked"), get a true/false, and push to an arr
            // if in the checked arr, create a new deal
        var currDealDay = "Monday";
        var dealStart = $("#newDealStart").val();
        var dealEnd = $("#newDealEnd").val();
        var dealType = $("#newDealType").val();
        var dealRestrictions = $("#newDealRestrictions").val();

        // Set the information that we want to send to the API....
        var dealInfo = {
            RestaurantId: restaurant_id,
            deal_description: dealDesc,
            day: currDealDay,
            start_time: dealStart,
            end_time: dealEnd,
            restrictions: dealRestrictions,
            deal_type: dealType
        };
        console.log(dealInfo);
        $.ajax("/api/deals", {
            type: "POST",
            data: dealInfo
        }).then(
            function() {
                console.log("Added the following deal: ", dealInfo);
                // Reload the page to get the updated list
                location.reload();
            });
    });

    // ADD NEW RESTAURANT
    $("#addRest").on("click", function(event) {
        event.preventDefault();
        // Grab info from the search...
        var restName = $("#newRestName").val().trim();
        var restDesc = $("#newRestDescr").val().trim();
        var restPhone = $("#newRestPhone").val();
        var restWebsite = $("#newRestWeb").val().trim();
        var restAddress = $("#newRestAddress").val().trim();

        // Set the informtion that we want to send to the API....
        var restInfo = {
            restaurant_name: restName,
            description: restDesc,
            website: restWebsite,
            phone_number: restPhone,
            address: restAddress
        };
        console.log(restInfo);
        $.ajax("/api/restaurants", {
            type: "POST",
            data: restInfo
        }).then(
            function() {
                console.log("Added the following restaurant: ", restInfo);
                // Reload the page to get the updated list
                // location.reload();
            });
    });
});