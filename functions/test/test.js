const assert = require("assert"),
  testVar = require("../test/test.var"),
  chai = require("chai"),
  chaiAsPromised = require("chai-as-promised"),
  indexRoute = require("../server/routes/index.route"),
  helper = require("../server/helpers/helper");
chai.use(chaiAsPromised).should();

describe("Calculate Match Testing", function() {
  it("Should return the correct score 0.72", function() {
    assert.equal(helper.calculateMatch(testVar.person1, testVar.query1), 0.72);
  });
  it("Should return the correct score 0.83", function() {
    assert.equal(helper.calculateMatch(testVar.person2, testVar.query1), 0.83);
  });
  it("Should return the correct score 1", function() {
    assert.equal(helper.calculateMatch(testVar.person1, testVar.query3), 1);
  });
});

describe("Find Match Testing", function() {
  it("should return 0 match for age 0", function() {
    helper.findMatch(testVar.query2).then(function(res) {
      expect(res).to.equal({ peopleLikeYou: [] });
      done();
    });
  });
  it("should return 10 closest matches", function() {
    helper.findMatch(testVar.query2).then(function(res) {
      expect(res.length).to.equal(10);
      done();
    });
  });
});

describe("Parse Query Testing", function() {
  it("Should return the correct filter of only age", function() {
    assert.deepEqual(helper.parseQuery(testVar.query3), testVar.filter1);
  });
  it("Should return the correct filter of all except experienced", function() {
    assert.deepEqual(helper.parseQuery(testVar.query1), testVar.filter2);
  });
  it("Should return the correct filter of age and experienced", function() {
    assert.deepEqual(helper.parseQuery(testVar.query4), testVar.filter3);
  });
  it("Should return the correct filter of age, monthly income and experienced", function() {
    assert.deepEqual(helper.parseQuery(testVar.query5), testVar.filter4);
  });
  it("Should return the correct filter of age and latitude (without experienced)", function() {
    assert.deepEqual(helper.parseQuery(testVar.query6), testVar.filter5);
  });
});
