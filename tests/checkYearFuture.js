assert = chai.assert;

var url = "http://localhost:3100/post";

var years = [];
var index = 0;

$.post(url + "?data=" + JSON.stringify({
    "countryName": "Russia",
    "action": "election",
    "numElection": 20}),
    years = receive);

function receive(data) {
    var response = JSON.parse(data);
    years = response["years"];
}

describe("Testing function election in server", function () {

    it ("Test 1 Return the correct year", function() {
        var year = years[4];
        assert.isTrue(year == 2048);
    });

    it ("Test 2 Return the correct year", function() {
        var year = years[10];
        assert.isTrue(year == 2084);
    });
})