var url = "http://localhost:3100/post";

var listCreated = false;

function sendData() {
    //get the stored data
    var countries = document.getElementById("countries").value;

    //send request
    $.post(url + "?data=" + JSON.stringify({
        "action": "trade",
        "countries": countries}),
    information);
}

function information(data) {
    var response = JSON.parse(data);

    var country1 = response["country1"].split(",");
    var country2 = response["country2"].split(",");

    var country1Name = document.getElementById("country1Name");
    var country2Name = document.getElementById("country2Name");

    if (listCreated == false) {
        //country 1
        //message
        var msg1 = document.createElement("p");

        $(msg1).text("Export to " + country2[0]);
        $(msg1).css({"font-weight": "bold"});

        $(".country1").append(msg1);

        var newDiv1 = document.createElement("div");

        $(newDiv1).attr("class", "newDiv1");
        $(".country1").append(newDiv1);

        //country 2
        //message
        var msg2 = document.createElement("p");

        $(msg2).text("Export to " + country1[0]);
        $(msg2).css({"font-weight": "bold"});

        $(".country2").append(msg2);

        var newDiv2 = document.createElement("div");

        $(newDiv2).attr("class", "newDiv2");
        $(".country2").append(newDiv2);

        listCreated = true;
    }
    else {
        //clear previous information
        $(".newDiv1").empty();
        $(".newDiv2").empty();
    }
    
    //country 1
    country1Name.innerHTML = country1[0];

    var list1 = document.createElement("ul");

    $(list1).attr("class", "list2");
    $(".newDiv1").append(list1);

    //add list of item that is getting export to the other country
    for (var i = 1; i < country1.length; i++) {
        var bulletPoint = document.createElement("li");

        $(bulletPoint).attr("id", "bulletPoint1" + i);
        $(list1).append(bulletPoint);
    }

    for (var j = 0; j < country1.length; j++) {
        $("#bulletPoint1" + j).text(country1[j]);
    }

    //country 2
    country2Name.innerHTML = country2[0];

    var list2 = document.createElement("ul");

    $(list2).attr("class", "list2");
    $(".newDiv2").append(list2);

    for (var i = 1; i < country2.length; i++) {
        var bulletPoint = document.createElement("li");

        $(bulletPoint).attr("id", "bulletPoint2" + i);
        $(list2).append(bulletPoint);
    }

    for (var j = 0; j < country2.length; j++) {
        $("#bulletPoint2" + j).text(country2[j]);
    }
}