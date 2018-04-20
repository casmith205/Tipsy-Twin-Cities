// Handle the clicks of the "verify" button and "add comment" button


$(function () {
    $("#dealsDiv").hide()
    $("#contactDiv").hide()
    $("#mapDiv").hide()

    $("#detailsBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").show()
        $("#contactDiv").hide()
        $("#dealsDiv").hide()
        $("#mapDiv").hide()

    })
    $("#dealsBtn").on("click", function (event) {
        event.preventDefault()
        console.log("onclick working")
        $("#detailsDiv").hide()
        $("#contactDiv").hide()
        $("#mapDiv").hide()
        $("#dealsDiv").show()
    })

    $("#contactBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").hide()
        $("#dealsDiv").hide()
        $("#mapDiv").hide()
        $("#contactDiv").show()
    })

    $("#mapBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").hide()
        $("#dealsDiv").hide()
        $("#contactDiv").hide()
        $("#mapDiv").show()
    })
    

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




});