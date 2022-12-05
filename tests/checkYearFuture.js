assert = chai.assert;

describe("Testing function election in server", function () {

    it ("Test 1 Return the correct year for Russia", function() {
        var years = election("Russia", 11);
        var year = years[4];
        assert.equal(year, 2048);
    });

    it ("Test 2 Return the correct year for Germany", function() {
        var years = election("Germany", 11);
        var year = years[7];
        assert.equal(year, 2062);
    });

    it ("Test 3 Return the correct year for Argentina", function() {
        var years = election("Argentina", 11);
        var year = years[2];
        assert.equal(year, 2031);
    });

    it ("Test 4 Return the correct year for Australia", function() {
        var years = election("Australia", 11);
        var year = years[5];
        assert.equal(year, 2040);
    });

    it ("Test 5 Return the correct year for South Africa", function() {
        var years = election("South Africa", 11);
        var year = years[8];
        assert.equal(year, 2064);
    });

    it ("Test 6 Return the correct year for Iran", function() {
        var years = election("Iran", 11);
        var year = years[10];
        assert.equal(year, 2065);
    });
})