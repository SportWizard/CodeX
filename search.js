var url = "http://localhost:3100/post";

function search() {
    var country = document.getElementById("country").value;

    //send request
    $.post(url + "?data=" + JSON.stringify({
            "countryName": country,
            "action": "information",
            "type": "info"}),
        store);
}

function store(data) {
    var response = JSON.parse(data);
    console.log(response);
    //store info
    var dataStore = response["name"] + "|" + response["image"] + "|" + response["capital"] + "|" + response["language"] + "|" + response["population"] + "|" + response["export"] + "|" + response["import"] + "|" + response["funFact"];
    //store the data so it can be shared across html
    sessionStorage.setItem("dataStore", dataStore);

    //switch window to info page
    window.location.href = "info.html";
}

function info() {
    //get stored data that is shared and split it into an array
    var response = sessionStorage.getItem("dataStore").split("|");
    //output the info
    var countryName = document.createElement("h3");

    $(countryName).attr("class", "countryName");
    $("#box").append(countryName);

    $(".countryName").text("Country: " + response[0]);
    $(".countryName").css({"text-align": "center"});

    //create img element for country flag
    var flag = document.createElement("img");

    $(flag).attr("class", "flag");
    $("#box").append(flag);

    $(".flag").attr("src", response[1]);
    $(".flag").css({"border": "solid black"});

    //create a box for the information
    var information = document.createElement("div");

    $(information).attr("class", "information");
    $("#box").append(information);

    //subtitle for each information
    subtitle = ["Capital: ", "Language: ", "Population: ", "Export: ", "Import: "];

    //create p block
    for (var x = 0; x < subtitle.length; x++) {
        var msg = document.createElement("p");

        $(msg).attr("id", "msg" + x);
        $(information).append(msg);
    }

    //add information
    for (var y = 0; y < subtitle.length; y++) {
        $("#msg" + y).text(subtitle[y] + response[y+2]);
    }

    $(".information").css({"float": "right", "width": "570px"});
}