const pairs = require("../pairs")

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }

const pairArr = pairs(testObject);
console.log(pairArr);