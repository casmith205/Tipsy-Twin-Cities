// Handle the clicks of the "verify" button and "add comment" button

$(function() {
    // On the click of the add comment button.....
    $("#commentBtn").on("click", function(event) {
        // Grab info from the search...
        var commentText = $("#commentText").val();
        var ratingVal = $("#ratingVal").val();
        // ***Need to get USER ID and RESTAURANT ID
        // var userID = 
        // var restID = 

        // Set the information that we want to send to the API....
        var commentInfo = {
            comment_text: commentText,
            rating: ratingVal,
            // UserId: userID,
            // RestaurantId: restID
        };
        // Send the POST request to COMMENTS
        $.ajax("/api/comments", {
            type: "GET",
            data: commentInfo
        }).then(
            function() {
                console.log("Added a new comment: ", commentInfo);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    ("#resInput").on("click", function(event) {
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
            function() {
                console.log("Searched for the following: ", restaurantInfo);
                // Reload the page to get the updated list
                location.reload();
            });
    });


});