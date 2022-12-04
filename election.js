var url = "http://localhost:3100/post";

function currentYearDisplay() {
    var d = new Date();
    var year = d.getFullYear();

    document.getElementById("currentYear").innerHTML += year;

    yearBound();
}

function yearBound() {
    var response = sessionStorage.getItem("dataStore").split("|");
    var country = response[0];

    var yearBound = document.getElementById("yearBound");

    if (country == "Russia") {
        yearBound.innerHTML = "(1991 - now)";
    }
    else if (country == "Germany") {
        yearBound.innerHTML = "(1999 - now)";
    }
    else if (country == "South Africa") {
        yearBound.innerHTML = "(1994 - now)";
    }
    else if (country == "Iran") {
        yearBound.innerHTML = "(1979 - now)";
    }
}

function sendData() {
    var response = sessionStorage.getItem("dataStore").split("|");
    var country = response[0];

    var leader = document.getElementById("leader").value;
    var leader2 = document.getElementById("leader2").value;
    var year = document.getElementById("year").value;
    var numYear = document.getElementById("numYear").value;

    if (leader == "" && leader2 == "" && year == "") {
        //send request
        $.post(url + "?data=" + JSON.stringify({
            "countryName": country,
            "action": "election",
            "numElection": numYear}),
        yearFuture);
    }
    else if (leader == "" && leader2 == "" && numYear == "") {
        $.post(url + "?data=" + JSON.stringify({
            "countryName": country,
            "action": "headOfState",
            "year": year}),
        headOfState);
    }
}

function yearFuture(data) {
    var response = JSON.parse(data);
    years = response["years"];

    //clear info
    $(".newDiv").empty();

    //create div to clear the years for new years
    var newDiv = document.createElement("div");

    $(newDiv).attr("class", "newDiv");
    $("#box").append(newDiv);
    
    //put information to p block
    for (var n = 0; n < years.length; n++) {
        //display the years
        var numYearFuture = document.createElement("p");

        $(numYearFuture).attr("id", "numYearFuture" + n);
        $(".newDiv").append(numYearFuture);

        election = n + 1;
        $("#numYearFuture" + n).text("Election " + election + " from current year: " + years[n]);
    }
}

function headOfState(data) {
    var response = JSON.parse(data);

    elective = response["elective"].split("|");
    
    $(".newDiv").empty();

    var newDiv = document.createElement("div");

    $(newDiv).attr("class", "newDiv");
    $("#box").append(newDiv);
    
    //put information to p block
    for (var n = 0; n < elective.length; n++) {
        var electiveblock = document.createElement("p");

        $(electiveblock).attr("id", "electiveblock" + n);
        $(".newDiv").append(electiveblock);

        electiveblock = n + 1;
        $("#electiveblock" + n).text(elective[n]);
    }
}