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
        "name": "Russia"
    });
}

function Italy() {
    jsontext = JSON.stringify({
        
    });
}

function Germany() {
    jsontext = JSON.stringify({
        
    });
}

function EqutorialGuinea() {
    jsontext = JSON.stringify({
        
    });
}

function Latvia() {
    jsontext = JSON.stringify({
        
    });
}

function SouthAfrica() {
    jsontext = JSON.stringify({
        
    });
}

function Iran() {
    jsontext = JSON.stringify({
        
    });
}

function USA() {
    jsontext = JSON.stringify({
        
    });
}

function Canada() {
    jsontext = JSON.stringify({
        
    });
}