// Handle the clicks of the "Sign in" button & "Sign Up" button

$(function () {
    // Sign In to the website
    $(".btn-signIn").on("click", function (event) {
        event.preventDefault();
        // Grab info from the sign in form...
        var email = $("#emailAddress").val();
        var password = $("#pw").val();

        // Set the information that we want to send to the API....
        var userInfo = {
            email: email,
            password: password
        };
        $.ajax("/api/user", {
            type: "GET",
            data: userInfo
        })
            .done(
                function (data) {
                    console.log("Searched for the following: ", userInfo);
                    localStorage.setItem("user_id", data[0].id);
                    localStorage.setItem("user_name", data[0].user_name);
                    localStorage.setItem("user_verified", data[0].verified);
                    location.reload();
                })
            .fail(
                function (err) {
                    console.log(err);
                    alert(err.responseJSON);
                }
            )
    });

    // Sign Up for the website 
    $(".btn-signUp").on("click", function (event) {
        event.preventDefault();
        // Grab info from the sign up form...
        var user_name = $("#userName").val().trim();
        var first_name = $("#firstName").val().trim();
        var last_name = $("#lastName").val().trim();
        var email = $("#emailAddressNew").val();
        var password = $("#pwNew").val().trim();


        // Set the information that we want to send to the API....
        var userInfo = {
            user_name: user_name,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        };
        $.ajax("/api/new_user", {
            type: "POST",
            data: userInfo
        })
            .done(
                function (data) {
                    console.log("Added the following: ", userInfo);
                    localStorage.setItem("user_id", data[0].id);
                    localStorage.setItem("user_name", data[0].user_name);
                    localStorage.setItem("user_verified", data[0].verified);
                    // Reload the page to get the updated list
                    location.reload();
                })
            .fail(
                function (err) {
                    console.log("hi");
                    alert(err.message);
                }
            )
    });

});



