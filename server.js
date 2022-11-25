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
                Russia(data["type"]);
                break;
            case "Germany":
                Germany(data["type"]);
                break;
            case "Argentina":
                Argentina(data["type"]);
                break;
            case "Australia":
                Australia(data["type"]);
                break;
            case "South Africa":
                SouthAfrica(data["type"]);
                break;
            case "Iran":
                Iran(data["type"]);
                break;
        }
    }
    else if (data["action"] == "election") {
        election(data["countryName"], data["numElection"]);
    }
    console.log(jsontext);
    res.send(jsontext); //send respond
}).listen(port);
console.log("server is running! (listening on port " + port + ")");

function election(country, numElection) {
    yearLastElection = 0 //hard coded
    yearOfEachElection = 0;
    years = [];

    //check which country the user selected
    switch (country) {
        case "Russia":
            yearLastElection = 2018;
            yearOfEachElection = 6;
            break;
        case "Germany":
            yearLastElection = 2022;
            yearOfEachElection = 5;
            break;
        case "Argentina":
            yearLastElection = 2019;
            yearOfEachElection = 4;
            break;
        case "Australia":
            yearLastElection = 2022;
            yearOfEachElection = 3;
            break;
        case "South Africa":
            yearLastElection = 2019;
            yearOfEachElection = 5;
            break;
        case "Iran":
            yearLastElection = 2021;
            yearOfEachElection = 4;
            break;
    }
    
    //calculate the year of future election
    for (var i = 0; i < numElection; i++) {
        yearLastElection += yearOfEachElection;
        years[i] = yearLastElection;
    }

    jsontext = JSON.stringify({
        "years": years
    });
}

function Russia(type) {
    //check which type of information is need to responds/output
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Russia",
            "image": "images/info/Russia.jpg",
            "capital": "Moscow",
            "language": "Russian",
            "population": "About 143 million people",
            "export": "Goods of energy such as oil, gas, petroleum and coal",
            "import": "Machinery, equipment, vehicles, consumer goods, food and chemical products",
            "funFact": "Russia has the longest railway,Largest country in the world,Has one of the busiest metros,Tetris was made in Russia,Have the coldest village in the world,20% of Earth's trees are in Russia,Russia has 11 time zones,Russia is one of the first countries to produce vodka"
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({

        });
    }
}

function Germany(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Germany",
            "image": "images/info/Germany.jpg",
            "captial": "Berlin",
            "language": "German",
            "population": "83 million people",
            "export": "Pharmaceutical products, motor cars, motor caravans, engines and other vehicle parts",
            "import": "Motor vehicles, industrial, electrical machinery, oil, mineral fuels, Pharmaceuticals, computer equipment and chemical products",
            "funFact": "Most popular surname is \"Muller\",Beer is a food in Bavaria,Have 1000 varieties of sausages,Gummy bears was inbented in Germany,Germany has the world largest cathedral,Attempting to escape jail is legal in Germany,University is free,Largest train station in Europe,Drinking age is 16,Has over 400 zoo's"
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({
            
        });
    }
}

function Argentina(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Argentina",
            "image": "images/info/Argentina.jpg",
            "capital": "",
            "language": "",
            "population": "",
            "export": "",
            "import": "",
            "funcFact": ""
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({

        });
    }
}

function Australia(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Australia",
            "image": "images/info/Australia.jpg",
            "capital": "",
            "language": "",
            "population": "",
            "export": "",
            "import": "",
            "funcFact": ""
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({

        });
    }
}

function SouthAfrica(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "South Africa",
            "image": "images/info/SouthAfrica.jpg",
            "capital": "",
            "language": "11 Official languages",
            "population": "",
            "export": "Corn, precious metals, stones including diamonds, gold, platinum, machinery, chemical, vegetables and cars",
            "import": "Petroleum, motor vehicles part and accessories, cars and broadcasting equipment",
            "funfact": "Has the longest continuous wine route on Earth,Largest meat producer in Africa,Only country with three capital cities,World's first heart transplant was completed in Cape Town, Only country in the world where two Nobel prize winners lived on the same street"
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({
            
        });
    }
}

function Iran(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Iran",
            "image": "images/info/Iran.jpg",
            "capital": "",
            "language": "",
            "population": "",
            "export": "oil, natural gas, chemicals, plastics, fruits, ceramic products and metals",
            "import": "non-electrical machinery, steel, iron, chemicals, transport vehicles, plastics, animal, vegetable fats, oils, cleavage products",
            "funfact": "The weekend in Iran is Friday,Thumbs-up in Iram is bad,Blowing your nose in public is rude,Majority of students in university are females,Iranians love tea"
        });
    }
    else if (type == "trade") {
        jsontext = JSON.stringify({
            
        });
    }
}