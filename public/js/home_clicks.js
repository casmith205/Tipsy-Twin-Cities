// Handle the clicks of the "Sign in" button 
var moment = require("moment");

$(function() {
    $("#userInput").on("click", function(event) {
        // Grab info from the search...
        var user_name = $("#userName").val();
        var first_name = $("#firstName").val();
        var last_name = $("#lastName").val();
        var email = $("#emails").val();
        var password = $("#passWord").val();


        // Set the information that we want to send to the API....
        var userInfo = {
            user_name: user_name,
            first_name: first_name,
            last_name: last_name,
            eamil: eamil,
            password: password
        };
        $.ajax("/api/user/search", {
            type: "POST",
            data: userInfo
        }).then(
            function() {
                console.log("Searched for the following: ", userInfo);
                // Reload the page to get the updated list
                location.reload();
            });
    });
});