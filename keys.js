function keys(obj){

    const keyArr = [];
    for(let key in obj){
        keyArr.push(key);
    }
    return keyArr;
}

module.exports = keys;