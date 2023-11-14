const mapObjects = require("../mapObject");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mappedObj = mapObjects(testObject, (val) => val + 10);

console.log(mappedObj);