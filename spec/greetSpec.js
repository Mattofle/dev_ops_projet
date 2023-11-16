const greet = require('../greet');

describe("A suite of test for greet", function() {

    it("greeting returns given hello, + Bob", function() {
        let result = greet.greet("Bob");

        expect(result).toBe("Hello, Bob");
    });
})