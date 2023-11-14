function defaults(obj , defautProps){

    for(let key in defautProps){
        if(!obj[key]){
            obj[key] = defautProps[key];
        }
    }
    return obj;
}
module.exports = defaults;