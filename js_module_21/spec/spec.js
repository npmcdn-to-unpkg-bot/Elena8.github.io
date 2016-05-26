var app = require('../js/app.js');
describe("pow", function () {
    it("1) test ", function () {
        var result = app.pow(5, 2);
        expect(result).toBe(25);
    });
    

    it("2) test ", function () {
        var result = app.pow(5, 0);
        expect(result).toBe(1);
    });
    
    it("3) test ", function () {
        var result = app.pow(5, -1);
        expect(result).toBe(0.05);
    });
});