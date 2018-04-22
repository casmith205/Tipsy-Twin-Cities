// Handle the clicks of the "Add Restaurant" button and "Add Deal" button

$(function() {
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
        console.log(userInfo);
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
});