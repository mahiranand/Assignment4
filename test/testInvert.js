const invert = require("../invert")

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }

const invertedObj = invert(testObject);
console.log(invertedObj);