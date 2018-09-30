const assert = require("assert"),
  testVar = require("../test/test.var"),
  chai = require("chai"),
  chaiAsPromised = require("chai-as-promised"),
  indexRoute = require("../server/routes/index.route"),
  helper = require("../server/helpers/helper");
chai.use(chaiAsPromised).should();

describe("Basic Mocha String Test", function() {
  it("Should return the correct score", function() {
    assert.equal(helper.calculateMatch(testVar.person1, testVar.query1), 0.72);
  });
  it("Should return the correct score", function() {
    assert.equal(helper.calculateMatch(testVar.person2, testVar.query1), 0.83);
  });
});

describe("findMatch", function() {
  it("should return 0 match for age 0", function() {
    helper.findMatch(testVar.query2).then(function(res) {
      expect(res).to.equal({ peopleLikeYou: [] });
      done();
    });
  });
});

describe("findMatch", function() {
  it("should return 10 closest matches", function() {
    helper.findMatch(testVar.query2).then(function(res) {
      expect(res.length).to.equal(10);
      done();
    });
  });
});
