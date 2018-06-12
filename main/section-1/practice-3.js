'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let newArr = [];
    let coll_B = objectB.value;
    for(let strA of collectionA){
        for(let strB of coll_B){
            if(strA == strB){
                newArr.push(strA)
            }
        }
    }
    return newArr
}
