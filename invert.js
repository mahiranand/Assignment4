function invert(obj){

    const invertedObj = {};

    for(let key in obj){
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
}

module.exports = invert;