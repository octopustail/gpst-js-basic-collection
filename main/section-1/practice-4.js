'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let newArr = [];
    for(let strA of collectionA){
        for(let strB of objectB.value){
            if(strA.key == strB){
                newArr.push(strA.key)
            }
        }
    }
    return newArr
}
