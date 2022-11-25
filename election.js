var url = "http://localhost:3100/post";

var pCreated = false;

function currentYearDisplay() {
    var d = new Date();
    var year = d.getFullYear();

    document.getElementById("currentYear").innerHTML += year;
}

function sendData() {
    //get the stored data
    var response = sessionStorage.getItem("dataStore").split("|");
    var country = response[0];

    var numYear = document.getElementById("numYear").value;

    //send request
    $.post(url + "?data=" + JSON.stringify({
        "countryName": country,
        "action": "election",
        "numElection": numYear}),
    yearFuture);
}

function yearFuture(data) {
    var response = JSON.parse(data);
    years = response["years"];

    //check if p block and message has already been created
    if (pCreated == false) {
        //message
        var msg = document.createElement("p");

        $(msg).text("Approximate year: ");
        $(msg).css({"font-weight": "bold"});

        $("#box").append(msg);

        //create div to clear the years for new years
        var newDiv = document.createElement("div");

        $(newDiv).attr("class", "newDiv");
        $("#box").append(newDiv);
    }
    else {
        //clear years
        $(".newDiv").empty();
    }
    
    //put information to p block
    for (var n = 0; n < years.length; n++) {
        //display the years
        var numYearFuture = document.createElement("p");

        $(numYearFuture).attr("id", "numYearFuture" + n);
        $(".newDiv").append(numYearFuture);

        pCreated = true;

        election = n + 1;
        $("#numYearFuture" + n).text("Election " + election + " from current year: " + years[n]);
    }
}