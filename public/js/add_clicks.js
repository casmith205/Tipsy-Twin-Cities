// Handle the clicks of the "Add Restaurant" button and "Add Deal" button

$(function () {
    // ADD NEW DEAL
    $("#submitBtnDeal").on("click", function (event) {
        event.preventDefault();
        // Grab info from the search...
        var restaurant_id = $("#existingRestaurants").val();
        var dealDesc = $("#newDealDesc").val();
        var dealStart = $("#newDealStart").val();
        var dealEnd = $("#newDealEnd").val();
        var dealType = $("#newDealType").val();
        var dealRestrictions = $("#newDealRestrictions").val();
        var dealDays = [];
        // Loop through each box, check if it was checked, and psuh it to the dealDays arr if true
        for (i = 1; i < 8; i++) {
            var checkBox = "#day" + [i];
            if ($(checkBox).prop("checked") == true) {
                dealDays.push($(checkBox).val());
            }
        };
        var currDealDay;

        // Loop through every day that was checked, and post each deal to the db
        for (i = 0; i < dealDays.length; i++) {
            // Set the current day to the day at position i in the array of all checked days
            currDealDay = dealDays[i];

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

            $.ajax("/api/deals", {
                type: "POST",
                data: dealInfo
            })
                .then(
                    function () {
                        console.log("Added the following deal: ", dealInfo);
                    }
                )
                .fail(
                    function (err) {
                        alert(err);
                    }
                )
        };
    });

    // ADD NEW RESTAURANT
    $("#addRest").on("click", function (event) {
        event.preventDefault();
        // Grab info from the search...
        var restName = $("#newRestName").val().trim();
        var restDesc = $("#newRestDescr").val().trim();
        var restPhone = $("#newRestPhone").val().trim();
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
        console.log("******************")
        console.log(typeof restInfo.phone_number);
        $.ajax("/api/restaurants", {
            type: "POST",
            data: restInfo
        })
            .then(
                function (data) {
                    console.log("Response form database: ", data);
                    // Reload the page to get the updated list
                    // location.reload();
                })
            .fail(
                function (err) {
                    alert(err);
                }
            )
    });
});