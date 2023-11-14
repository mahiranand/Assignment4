const keys = require("../keys");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const keyArr = keys(testObject);
console.log(keyArr);