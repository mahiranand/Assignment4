function pairs(obj){
    
    const pairArr = [];

    for(let key in obj){
        const pair = [key, obj[key]];
        pairArr.push(pair);
    }

    return pairArr;
}
module.exports = pairs;