assert = chai.assert;

var url = "http://localhost:3100/post";

var send = false;
var years = [];

function sendRequest() {
$.post(url + "?data=" + JSON.stringify({
    "countryName": "Russia",
    "action": "election",
    "numElection": 11}),
    receive);
}

function receive(data) {
    var response = JSON.parse(data);
    years = response["years"];
}

describe("Testing function election in server", function () {
    if (send == false) {
        sendRequest();
        send = true;
    }

    it ("Test 1 Return the correct year", function() {
        var year = years[4];
        assert.equal(year, 2048);
    });

    it ("Test 2 Return the correct year", function() {
        var year = years[10];
        assert.equal(year, 2084);
    });
})