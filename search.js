var url = "http://localhost:3100/post";

function search() {
    var country = document.getElementById("country").value;

    //send request
    $.post(url + "?data=" + JSON.stringify({
            "countryName": country,
            "action": "information"}),
        store);

    //switch window to info
    window.location.href = "info.html";
}

function store(data, status) {
    var response = JSON.parse(data);
    //store info
    var dataStore = [response["name"]];
    //store the data so it can be shared across html
    sessionStorage.setItem("dataStore", dataStore);
}

function response() {
    var countryInfo = document.getElementById("countryInfo");

    //get stored data that is shared
    var response = sessionStorage.getItem("dataStore");

    //output the info
    countryInfo.innerHTML = response;
}