describe("app", function() {

    it("should return the number itself", function () {
        expect(calc("1")).toBe(1);
    });

    it("should return zero for empty string", function () {
        expect(calc("")).toBe(0);
    });

    it("should return sum of two numbers", function () {
        expect(calc("1,2")).toBe(3);
    });

    it("should return sum of three numbers", function () {
        expect(calc("1,2,3")).toBe(6);
    });

});
