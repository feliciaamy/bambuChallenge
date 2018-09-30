const People = require("../model/people.model"),
  apiError = require("../../config/apiError"),
  httpStatus = require("http-status"),
  logger = require("../../config/winston"),
  Promise = require("bluebird");

function calculateMatch(person, query) {
  let total = 0;
  let count = 0;
  if (query.age !== undefined) {
    total += Math.min(person.age, query.age) / Math.max(person.age, query.age);
    count++;
  }
  if (query.experienced !== undefined) {
    total += query.experienced & person.experienced;
    count++;
  }
  if (query.latitude !== undefined) {
    total +=
      Math.min(person.latitude, query.latitude) /
      Math.max(person.latitude, query.latitude);
    count++;
  }
  if (query.longitude !== undefined) {
    total +=
      Math.min(person.longitude, query.longitude) /
      Math.max(person.longitude, query.longitude);
    count++;
  }
  if (query.monthlyIncome !== undefined) {
    total +=
      Math.min(person.monthlyIncome, query.monthlyIncome) /
      Math.max(person.monthlyIncome, query.monthlyIncome);
    count++;
  }
  return Math.round((total / count) * 100) / 100;
}

function parseQuery(query) {
  let tolerate = false;
  let slack = 5;
  let filter = { $and: [] };

  if (query.age !== undefined) {
    filter.$and.push({
      age: { $gte: query.age - slack, $lte: parseInt(query.age) + slack }
    });
  }

  if (query.latitude !== undefined) {
    filter.$and.push({
      latitude: {
        $gte: query.latitude - slack,
        $lte: parseFloat(query.latitude) + slack
      }
    });
    tolerate = true;
  }
  if (query.longitude !== undefined) {
    filter.$and.push({
      longitude: {
        $gte: query.longitude - slack,
        $lte: parseFloat(query.longitude) + slack
      }
    });
    tolerate = true;
  }
  if (query.monthlyIncome !== undefined) {
    filter.$and.push({
      monthlyIncome: {
        $gte: query.monthlyIncome - slack * 100,
        $lte: parseFloat(query.monthlyIncome) + slack * 100
      }
    });
  }
  if (query.experienced !== undefined) {
    if (!tolerate) {
      filter.$and.push({
        experienced: query.experienced
      });
    }
  }
  return filter;
}
// ******************************
// Def: Will sort people by score
// Params:
//  People: {
//      name: String,
//      age: Number,
//      latitude: Number,
//      longitude: Number,
//      monthlyIncome: Number,
//      experienced: Boolean,
//      score: Float
// }
function sortPeople(people) {
  const sorted = people.sort(function(a, b) {
    return b.score - a.score;
  });
  return sorted;
}
module.exports = {
  parseQuery,
  calculateMatch,
  sortPeople,
  findMatch: function(query) {
    return new Promise(function(resolve, reject) {
      filter = parseQuery(query);
      People.find(filter, { _id: 0 })
        .exec()
        .then(function(doc) {
          let result = [];
          doc.forEach(function(person) {
            result.push({
              name: person.name,
              age: person.age,
              latitude: person.latitude,
              longitude: person.longitude,
              monthlyIncome: person.monthlyIncome,
              experienced: person.experienced,
              score: calculateMatch(person, query)
            });
          });
          result = sortPeople(result);
          resolve({ peopleLikeYou: result.slice(0, 10) });
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }
};
