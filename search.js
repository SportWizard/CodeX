var url = "http://localhost:3000/post";

function search() {
    var country = document.getElementById("country").value;

    // $.post(url+'?data='+JSON.stringify({
    //         'countryName': country,
    //         'action': 'information'}),
    //     );

    window.location.href = "info.html";
}

function response() {
    var countryInfo = document.getElementById("countryInfo");

    var response = JSON.parse(data);

    countryInfo.innerHTML = response;
}