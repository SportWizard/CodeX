var url = "http://localhost:3100/post";

function search() {
    var country = document.getElementById("country").value;

    //send request
    $.post(url + "?data=" + JSON.stringify({
            "countryName": country,
            "action": "information"}),
        store);
}

function store(data) {
    var response = JSON.parse(data);
    console.log(response);
    //store info
    var dataStore = response["name"] + "," + response["image"];
    //store the data so it can be shared across html
    sessionStorage.setItem("dataStore", dataStore);

    //switch window to info page
    window.location.href = "info.html";
}

function info() {
    //get stored data that is shared and split it into an array
    var response = sessionStorage.getItem("dataStore").split(",");
    //output the info
    var countryName = document.createElement("h3");

    $(countryName).attr("id", "countryName");
    $("#box").append(countryName);

    $("#countryName").text("Country: " + response[0]);
    $("#countryName").css({"text-align": "center"});

    var flag = document.createElement("img");

    $(flag).attr("id", "flag");
    $("#box").append(flag);

    $("#flag").attr("src", response[1]);
}