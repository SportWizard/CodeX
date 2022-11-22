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
    //store info
    var dataStore = [response["name"]];
    //store the data so it can be shared across html
    sessionStorage.setItem("dataStore", dataStore);

    //switch window to info page
    window.location.href = "info.html";
}

function response() {
    var countryInfo = document.getElementById("countryInfo");

    //get stored data that is shared
    var response = sessionStorage.getItem("dataStore");

    //output the info
    countryInfo.innerHTML = response;
}