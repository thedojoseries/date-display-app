var expect = require('chai').expect

describe("Dummy Tests", function() {
    describe("Dummy Addition Tests", function() {
      it("1 + 1 = 2", function() {
        expect(1+1).to.equal(2)
      });

      it("1 + 2 != 2", function() {
        expect(1+2).to.not.equal(2)
      });

      it("10 + 10 = 20", function() {
        expect(10+10).to.equal(20)
      });

      it("10 + 30 != 100", function() {
        expect(10+30).to.not.equal(100)
      });
    });
  
    describe("Dummy Subtraction Tests", function() {
        it("1 - 1 = 0", function() {
            expect(1-1).to.equal(0)
        });

        it("2 - 1 != 0", function() {
            expect(2-1).to.not.equal(0)
        });

        it("100 - 1 = 99", function() {
            expect(100-1).to.equal(99)
        });

        it("1123 - 123 != 40", function() {
            expect(1123-123).to.not.equal(40)
        });
    });
});