const { json } = require('body-parser');
const { request } = require('express');
var express = require('express');
var app = express();

var countryInfo; //store the country information

var port = 3000;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var data = JSON.parse(req.query['data']);

    //check which one the user is trying to access
    switch (data["country"]){
        case "Russia":
            countryInfo = Russia();
            break;
        case "Italy":
            countryInfo = Italy();
            break;
        case "Germany":
            countryInfo = Germany();
            break;
        case "Equatorial Guinea":
            countryInfo = EqutorialGuinea();
            break;
        case "Latvia":
            countryInfo = Latvia();
            break;
        case "South Africa":
            countryInfo = SouthAfrica();
            break;
        case "Iran":
            countryInfo = Iran();
            break;
        case "USA":
            countryInfo = USA();
            break;
        case "Canada":
            countryInfo = Canada();
            break;
        
        res.send(countryInfo);
    }
}).listen(port);
console.log("server is running! (listening on port " + port + ")");

function Russia() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function Italy() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function Germany() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function EqutorialGuinea() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function Latvia() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function SouthAfrica() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function Iran() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function USA() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}

function Canada() {
    var jsontext = JSON.stringify({
        
    })

    return jsontext;
}