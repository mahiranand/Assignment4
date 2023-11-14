function values(obj){

    const valArr = [];

    for(let key in obj){
        valArr.push(obj[key]);
    }

    return valArr;
}
module.exports = values;