const { request } = require('express');
var express = require('express');
var app = express();

var jsontext //store the country information

var port = 3100;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var data = JSON.parse(req.query['data']);

    //check which one the user is trying to access
    if (data["action"] == "information") {
        switch (data["countryName"]) {
            case "Russia":
                Russia();
                break;
            case "Italy":
                Italy();
                break;
            case "Germany":
                Germany();
                break;
            case "Equatorial Guinea":
                EqutorialGuinea();
                break;
            case "Latvia":
                Latvia();
                break;
            case "South Africa":
                SouthAfrica();
                break;
            case "Iran":
                Iran();
                break;
            case "USA":
                USA();
                break;
            case "Canada":
                Canada();
                break;
        }
    }
    console.log(jsontext);
    res.send(jsontext); //send respond
}).listen(port);
console.log("server is running! (listening on port " + port + ")");

function Russia() {
    jsontext = JSON.stringify({
        "name": "Russia",
        "image": "images/info/Russia.jpg"
    });
}

function Italy() {
    jsontext = JSON.stringify({
        "name": "Italy",
        "image": "images/info/Italy.jpg"
    });
}

function Germany() {
    jsontext = JSON.stringify({
        "name": "Germany",
        "image": "images/info/Germany.jpg"
    });
}

function EqutorialGuinea() {
    jsontext = JSON.stringify({
        "name": "Equtorial Guinea",
        "image": "images/info/EqutorialGuinea.jpg"
    });
}

function Latvia() {
    jsontext = JSON.stringify({
        "name": "Latvia",
        "image": "images/info/Latvia.jpg"
    });
}

function SouthAfrica() {
    jsontext = JSON.stringify({
        "name": "South Africa",
        "image": "images/info/SouthAfrica.jpg"
    });
}

function Iran() {
    jsontext = JSON.stringify({
        "name": "Iran",
        "image": "images/info/Iran.jpg"
    });
}

function USA() {
    jsontext = JSON.stringify({
        "name": "USA",
        "image": "images/info/USA.jpg"
    });
}

function Canada() {
    jsontext = JSON.stringify({
        "name": "Canada",
        "image": "images/info/Canada.jpg"
    });
}