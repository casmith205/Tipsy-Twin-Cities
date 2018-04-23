$(document).ready(function () {
    var currentuserId = localStorage.getItem("user_id");

    var currentuserObj = {
        id: currentuserId
    }

    $.ajax("/api/user_update", {
        type: "PUT",
        data: currentuserObj
    }).then(
        function () {
            console.log("Changed the following: ", currentuserObj);
            localStorage.setItem("user_verified", true);
        });
});