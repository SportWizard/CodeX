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
    else if (data["action"] == "trade") {
        trade(data["countries"]);
    }
    else if (data["action"] == "headOfState") {
        headOfstate(data["countryName"], data["year"]);
    }
    console.log(jsontext);
    res.send(jsontext); //send respond
}).listen(port);
console.log("server is running! (listening on port " + port + ")");

function election(country, numElection) {
    yearLastElection = 0
    yearOfEachElection = 0;
    years = [];

    //check which country the user selected
    switch (country) {
        case "Russia":
            yearLastElection = 2018; //hard coded
            yearOfEachElection = 6;
            break;
        case "Germany":
            yearLastElection = 2022; //hard coded
            yearOfEachElection = 5;
            break;
        case "Argentina":
            yearLastElection = 2019; //hard coded
            yearOfEachElection = 4;
            break;
        case "Australia":
            yearLastElection = 2022; //hard coded
            yearOfEachElection = 3;
            break;
        case "South Africa":
            yearLastElection = 2019; //hard coded
            yearOfEachElection = 5;
            break;
        case "Iran":
            yearLastElection = 2021; //hard coded
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
            "yearFound": "December 25, 1991",
            "image": "images/info/Russia.jpg",
            "capital": "Moscow",
            "language": "Russian",
            "population": "About 143 million people",
            "export": "Goods of energy such as oil, gas, petroleum and coal",
            "import": "Machinery, equipment, vehicles, consumer goods, food and chemical products",
            "funFact": "Russia has the longest railway,Largest country in the world,Has one of the busiest metros,Tetris was made in Russia,Have the coldest village in the world,20% of Earth's trees are in Russia,Russia has 11 time zones,Russia is one of the first countries to produce vodka"
        });
    }
}

function Germany(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Germany",
            "yearFound": "May 23, 1949",
            "image": "images/info/Germany.jpg",
            "captial": "Berlin",
            "language": "German",
            "population": "83 million people",
            "export": "Pharmaceutical products, motor cars, motor caravans, engines and other vehicle parts",
            "import": "Motor vehicles, industrial, electrical machinery, oil, mineral fuels, Pharmaceuticals, computer equipment and chemical products",
            "funFact": "Most popular surname is \"Muller\",Beer is a food in Bavaria,Have 1000 varieties of sausages,Gummy bears was inbented in Germany,Germany has the world largest cathedral,Attempting to escape jail is legal in Germany,University is free,Largest train station in Europe,Drinking age is 16,Has over 400 zoo's"
        });
    }
}

function Argentina(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Argentina",
            "yearFound": "July 9, 1816",
            "image": "images/info/Argentina.jpg",
            "capital": "Buenos Aires",
            "language": "Spanish",
            "population": "45.81 million people",
            "export": " Cereals, food industry waste, Animal/vegetable fats, oil, waxes, vehicles, oil seeds, soybean meal, soybean oil, soybeans and corn",
            "import": "cars, motor vehicles parts and accessories, Machinery, Electrical equipment, minerals and fuels",
            "funFact": "Is home to both the highest and lowest points of the Southern Hemisphere, Capital of Argentina Buenos Aires translates to the \"good airs\" or \"fair winds\",King of beef,Government officials banned parents from naming children Messi in his hometown,The tango dance originated in Argentina, Argentina went through five presidents in just 10 days,Argentina has had two female presidents"
        });
    }
}

function Australia(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Australia",
            "yearFound": "January 1, 1901",
            "image": "images/info/Australia.jpg",
            "capital": "Canberra",
            "language": "No offical language, but English is the most common language spoken",
            "population": "25.74 million",
            "export": "Iron ore, coal, gold, petroleum, and frozen bovine meat",
            "import": "Cars, petroleum, broadcasting equipment, crude oil, phone system devices and computers",
            "funFact": "90% of Australians live on the coast,Australia is the only continent in the world without an active volcano,Australia has three times more sheep than people,An Australian man once tried to sell New Zealand on eBay,Australia was the second country in the world to give women the right to vote in 1902,Australia is home to the longest fence in the world,Tasmania has the cleanest air in the world,The Great Barrier Reef is the largest ecosystem in the world"
        });
    }
}

function SouthAfrica(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "South Africa",
            "yearFound": "May 31, 1961",
            "image": "images/info/SouthAfrica.jpg",
            "capital": "Cape town",
            "language": "11 Official languages",
            "population": "60.04 million",
            "export": "Corn, precious metals, stones including diamonds, gold, platinum, machinery, chemical, vegetables and cars",
            "import": "Petroleum, motor vehicles part and accessories, cars and broadcasting equipment",
            "funFact": "Has the longest continuous wine route on Earth,Largest meat producer in Africa,Only country with three capital cities,World's first heart transplant was completed in Cape Town, Only country in the world where two Nobel prize winners lived on the same street"
        });
    }
}

function Iran(type) {
    if (type == "info") {
        jsontext = JSON.stringify({
            "name": "Iran",
            "yearFound": "April 1, 1979",
            "image": "images/info/Iran.jpg",
            "capital": "Tehran",
            "language": "Persian",
            "population": "85.03 million",
            "export": "oil, natural gas, chemicals, plastics, fruits, ceramic products and metals",
            "import": "non-electrical machinery, steel, iron, chemicals, transport vehicles, plastics, animal, vegetable fats, oils, cleavage products",
            "funFact": "The weekend in Iran is Friday,Thumbs-up in Iran is bad,Blowing your nose in public is rude,Majority of students in university are females,Iranians love tea"
        });
    }
}

//trades between two countries
function trade(countries) {
    if (countries == "Argentina-Australia") {
        jsontext = JSON.stringify({
            "country1": "Argentina,Animal feed,Vehicles,Oil seeds,Fruits and vegetables,Vegetable oil and fats",
            "country2": "Australia,Coal,Crude Vegetable matter,Railwiclay vehes,Leather"
        });
    }
    else if (countries == "South Africa-Iran") {
        jsontext = JSON.stringify({
            "country1": "South Africa,Aluminum,Machinery,Nuclear reactors,Boilers,Ores slag and ash,Oil seed,Oleagic fruit,Grain,Fruits,Aircraft,Spacecraft",
            "country2": "Iran,Inorganic chemicals,Precious metal compound,Isotope,Fertilizers,Carpets and other distillation,Products,Salt,Sulphur,Stone,Plaster,Lime,Cement,Ceramic products"
        });
    }
    else if (countries == "Germany-Russia") {
        jsontext = JSON.stringify({
            "country1": "Germany,Cars,Car parts & accessories,Medicines",
            "country2": "Russia,Crude Petroleum,Refined Petroleum,Coal Briquettes/Blocks"
        });
    }
}

function headOfstate(country, year) {
    //conver to integer to compare
    year = parseInt(year);

    //find the correct country
    if (country == "Russia") {
        //find the correct year
        switch (true) {
            case 1991 <= year && year <= 1993:
                jsontext = JSON.stringify({
                    "elective": "Boris Yeltsin: July 10, 1991 - September 22, 1993|Alexander Rustskoy: September 22, 1993 - October 4, 1993|Boris Yeltsin: October 4, 1993 - November 5, 1996"
                });
                break;
            case 1993 < year && year <= 1996:
                jsontext = JSON.stringify({
                    "elective": "Boris Yeltsin: October 4, 1993 - November 5, 1996|Viktor Chernomyrdin: November 5, 1996 - November 6, 1996|Boris Yeltsin: November 6, 1996 - December 31, 1999"
                });
                break;
            case 1996 < year && year <= 2000:
                jsontext = JSON.stringify({
                    "elective": "Vladimir Putin: December 31, 1999 - May 7, 2000"
                });
                break;
            case 2000 < year && year <= 2008:
                jsontext = JSON.stringify({
                    "elective": "Vladimir Putin: May 7, 2000 - May 7, 2008"
                });
                break;
            case 2008 < year && year <= 2012:
                jsontext = JSON.stringify({
                    "elective": "Dmitry Medvedev: May 7, 2008 - May 7, 2012"
                });
                break;
            case 2012 < year:
                jsontext = JSON.stringify({
                    "elective": "Vladimir Putin: May 7, 2012 - now"
                });
                break;
            default:
                jsontext = JSON.stringify({
                    "elective": "Outside the range"
                })
        }
    }
    else if (country == "Germany") {
        switch (true) {
            case 1999 <= year && year <= 2004:
                jsontext = JSON.stringify({
                    "elective": "Johannes Rau: July 1, 1999 - June 30, 2004|Horst Köhler: July 1, 2004 - May 31, 2010"
                });
                break;
            case 2004 < year && year <= 2010:
                jsontext = JSON.stringify({
                    "elective": "Horst Köhler: July 1, 2004 - May 31, 2010|Jens Böhrnsen: May 31, 2010 - June 30 2010|Christian Wulff: June 30, 2010 - February 17, 2012"
                });
                break;
            case 2010 < year && year <= 2012:
                jsontext = JSON.stringify({
                    "elective": "Horst Köhler: July 1, 2004 - May 31, 2010|Jens Böhrnsen: May 31, 2010 - June 30 2010|Christian Wulff: June 30, 2010 - February 17, 2012|Horst Seehofer: February 17 2012 - March 18, 2012|Joachim Gauck: March 18, 2012 - March 18, 2017"
                });
                break;
            case 2012 < year:
                jsontext = JSON.stringify({
                    "elective": "Christian Wulff: June 30, 2010 - February 17, 2012|Horst Seehofer: February 17 2012 - March 18, 2012|Joachim Gauck: March 18, 2012 - March 18, 2017Joachim Gauck: March 18, 2012 - March 18, 2017|Frank-Walter Steinmeier: March 18, 2017 - now"
                });
                break;
            default:
                jsontext = JSON.stringify({
                    "elective": "Outside the range"
                })
        }
    }
    else if (country == "Argentina") {
        switch (true) {
            case 1999 <= year && year <= 2001:
                jsontext = JSON.stringify({
                    "elective": "Fernando de la Rúa: December 10, 1999 - December 21, 2001|Ramón Puerta: December 21, 2001 - December 23, 2001|Adolfo Rodriguez Saá: December 23, 2001 - December 30, 2001|Eduardo Camaño: December 30, 2001 - January 2, 2002"
                });
                break;
            case 2001 < year && year <= 2002:
                jsontext = JSON.stringify({
                    "elective": "Eduardo Camaño: December 30, 2001 - January 2, 2002|Eduardo Duhalde: January 2, 2002 - May 25, 2003"
                });
                break;
            case 2002 < year && year <= 2003:
                jsontext = JSON.stringify({
                    "elective": "Eduardo Duhalde: January 2, 2002 - May 25, 2003|Néstor KirchnerL May 25, 2003 - December 10, 2007"
                });
                break;
            case 2003 < year && year <= 2007:
                jsontext = JSON.stringify({
                    "elective": "Néstor KirchnerL May 25, 2003 - December 10, 2007"
                })
                break;
            case 2007 < year && year <= 2011:
                jsontext = JSON.stringify({
                    "elective": "Néstor KirchnerL May 25, 2003 - December 10, 2007|Cristina Fernández de Kirchner: December 10, 2007 - December 10, 2011|Cristina Fernández de Kirchner: December 10, 2011 - December 10, 2015"
                });
                break;
            case 2011 < year && year <= 2015:
                jsontext = JSON.stringify({
                    "elective": "Cristina Fernández de Kirchner: December 10, 2007 - December 10, 2011|Cristina Fernández de Kirchner: December 10, 2011 - December 10, 2015"
                });
                break;
            case 2015 < year:
                jsontext = JSON.stringify({
                    "elective": "Cristina Fernández de Kirchner: December 10, 2011 - December 10, 2015|Federico Pinedo: December 10, 2015 - December 10, 2015|Mauricio Macri: December 10, 2015 - December 10, 2019|Alberto Fernández: December 10, 2019 - now"
                });
                break;
            default:
                jsontext = JSON.stringify({
                    "elective": "Outside the range"
                })
        }
    }
    else if (country == "South Africa") {
        switch (true) {
            case 1994 <= year && year <= 1999:
                jsontext = JSON.stringify({
                    "elective": "Nelson Mandela: May 10, 1994 - June 14, 1999|Thabo Mbeki: June 14, 1999 - September 24, 2008"
                });
                break;
            case 1999 <= year && year <= 2008:
                jsontext = JSON.stringify({
                    "elective": "Thabo Mbeki: June 14, 1999 - September 24, 2008|Ivy Matsepe-Casaburri: September 25, 2008 - September 25, 2008|Kgalema Motlanthe: September 25, 2008 - May 9, 2009"
                });
                break;
            case 2008 < year && year <= 2009:
                jsontext = JSON.stringify({
                    "elective": "Kgalema Motlanthe: September 25, 2008 - May 9, 2009|Jacob Zuma: May 9, 2009 - February 2018"
                });
                break;
            case 2009 < year:
                jsontext = JSON.stringify({
                    "elective": "Jacob Zuma: May 9, 2009 - February 2018|Cyril Ramaphosa: February 14, 2018 - February 15, 2018|Cyril Ramaphosa: February 15, 2018 - now"
                });
                break;
            default:
                jsontext = JSON.stringify({
                    "elective": "Outside the range"
                })
        }
    }
    else if (country == "Iran") {
        switch (true) {
            case 1979 <= year && year <= 1979:
                jsontext = JSON.stringify({
                    "elective": "Ruhollah Khomeini: February 5, 1979 - December 3, 1979|Ruhollah Khomeini: December 3, 1979 - June 3, 1989"
                });
                break;
            case 1979 < year:
                jsontext = JSON.stringify({
                    "elective": "Ruhollah Khomeini: December 3, 1979 - June 3, 1989|Ali Khamenei: June 4, 1989 - now"
                });
                break;
            default:
                jsontext = JSON.stringify({
                    "elective": "Outside the range"
                })
        }
    }
}