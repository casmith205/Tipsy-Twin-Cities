// Handle the clicks of the "verify" button and "add comment" button

$(function () {


    //hide all except initial details div
    $("#dealsDiv").hide()
    $("#contactDiv").hide()
    $("#mapDiv").hide()
    $("#commentDiv").hide()
    //on click details hide other divs
    $("#detailsBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").show()
        $("#contactDiv").hide()
        $("#dealsDiv").hide()
        $("#mapDiv").hide()

    })
    //on click deals hide other divs
    $("#dealsBtn").on("click", function (event) {
        event.preventDefault()
        console.log("onclick working")
        $("#detailsDiv").hide()
        $("#contactDiv").hide()
        $("#mapDiv").hide()
        $("#commentDiv").hide()
        $("#dealsDiv").show()
    })
    //on click contact hide other divs
    $("#contactBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").hide()
        $("#dealsDiv").hide()
        $("#mapDiv").hide()
        $("#commentDiv").hide()
        $("#contactDiv").show()
    })
    //on click map button hide other divs AND google api call
    // $("#mapBtn").on("click", function (event) {
    //     event.preventDefault()
    //     $("#detailsDiv").hide()
    //     $("#dealsDiv").hide()
    //     $("#contactDiv").hide()
    //     $("#commentDiv").hide()
    //     $("#mapDiv").show()
    //     //google GET ajax call using data-address attribute stored in mapBtn
    
  
    // });

    //on click comment hide other divs
    $("#commentBtn").on("click", function (event) {
        event.preventDefault()
        $("#detailsDiv").hide()
        $("#dealsDiv").hide()
        $("#contactDiv").hide()
        $("#mapDiv").hide()
        $("#commentDiv").show()


    })


    // On the click of the add comment button.....
    $("#addComment").on("click", function (event) {
        // Grab info from the search...
        var commentText = $("#commentText").val();
        var ratingVal = $("#rating").val();
        var restID = $(this).attr("restaurant-id")
        // ***Need to get USER ID and RESTAURANT ID
        var userID = localStorage.getItem("user_id");
        console.log(userID)


        // Set the information that we want to send to the API....
        var commentInfo = {
            comment_text: commentText,
            rating: ratingVal,
            UserId: userID,
            RestaurantId: restID
        };

        console.log(commentInfo)
        // Send the POST store new comment to to COMMENTS
        $.ajax("/api/comments", {
            type: "POST",
            data: commentInfo
        }).done(
            function (data) {
                console.log("Added a new comment: ", commentInfo);
                // Reload the page to get the updated list
                location.reload();
            }
        ).fail(function (err) {
            console.log("err", err)
            var errArray = err.responseJSON.errors
            for (var i = 0; i < errArray.length; i++) {
                console.log(errArray[i])
                alert(errArray[i].message)
                //sweet alert not working
                // swal({
                //     title: "Error",
                //     text: errArray[i].message,
                //     icon: "warning",
                //     buttons: true,
                //     dangerMode: true,
                //   })

            }


        });
    })
});