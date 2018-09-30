module.exports = {
  person1: {
    name: "Vonny",
    age: 23,
    latitude: 55,
    longitude: 37,
    monthlyIncome: 10000,
    experienced: false
  },
  person2: {
    name: "Yvone",
    age: 27,
    latitude: 70,
    longitude: 45,
    monthlyIncome: 14000,
    experienced: true
  },

  query1: {
    age: 20,
    latitude: 50,
    longitude: 40,
    monthlyIncome: 11000,
    experienced: true
  },
  query2: {
    age: 0
  },
  query3: {
    age: 23
  },
  query4: {
    age: 23,
    experienced: true
  },
  query5: {
    age: 23,
    monthlyIncome: 1000,
    experienced: true
  },
  query6: {
    age: 23,
    latitude: 50,
    experienced: true
  },
  filter1: {
    $and: [{ age: { $gte: 18, $lte: 28 } }]
  },
  filter2: {
    $and: [
      { age: { $gte: 15, $lte: 25 } },
      { latitude: { $gte: 45, $lte: 55 } },
      { longitude: { $gte: 35, $lte: 45 } },
      { monthlyIncome: { $gte: 10500, $lte: 11500 } }
    ]
  },
  filter3: {
    $and: [{ age: { $gte: 18, $lte: 28 } }, { experienced: true }]
  },
  filter4: {
    $and: [
      { age: { $gte: 18, $lte: 28 } },
      { monthlyIncome: { $gte: 500, $lte: 1500 } },
      { experienced: true }
    ]
  },
  filter5: {
    $and: [
      { age: { $gte: 18, $lte: 28 } },
      { latitude: { $gte: 45, $lte: 55 } }
    ]
  },
  people: [
    { name: "person1", score: 0.5 },
    { name: "person2", score: 0.6 },
    { name: "person3", score: 1 },
    { name: "person4", score: 0.2 },
    { name: "person5", score: 0.9 }
  ],
  peopleSorted: [
    { name: "person3", score: 1 },
    { name: "person5", score: 0.9 },
    { name: "person2", score: 0.6 },
    { name: "person1", score: 0.5 },
    { name: "person4", score: 0.2 }
  ]
};
