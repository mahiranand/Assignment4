const defaults = require("../default");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

defaults(testObject, {name : 'mahir' , guy : 'mahir'});
console.log(testObject); 