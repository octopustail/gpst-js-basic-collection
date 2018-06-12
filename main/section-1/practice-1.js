'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = [];
    for(let strA of collectionA){
        for(let strB of collectionB){
            if(strA == strB){
                newArr.push(strA)
            }
        }
    }
    return newArr
}
