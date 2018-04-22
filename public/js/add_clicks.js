// Handle the clicks of the "Add Restaurant" button and "Add Deal" button

$(function() {
    $(".btn-signUp").on("click", function(event) {
        event.preventDefault();
        // Grab info from the search...
        var user_name = $("#userName").val();
        var first_name = $("#firstName").val();
        var last_name = $("#lastName").val();
        var email = $("#emailAddressNew").val();
        var password = $("#pwNew").val();


        // Set the information that we want to send to the API....
        var userInfo = {
            user_name: user_name,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        };
        console.log(userInfo);
        $.ajax("/api/new_user", {
            type: "POST",
            data: userInfo
        }).then(
            function() {
                console.log("Searched for the following: ", userInfo);
                alert("You have successfully signed up!");
                // Reload the page to get the updated list
                location.reload();
            });
    });
});