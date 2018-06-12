'use strict';
const R = require('ramda');
module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = [];
    let coll_B = R.flatten(collectionB);
    for(let strA of collectionA){
        for(let strB of coll_B){
            if(strA == strB){
                newArr.push(strA)
            }
        }
    }
    return newArr
}
