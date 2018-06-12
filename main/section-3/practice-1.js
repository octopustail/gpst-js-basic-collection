'use strict';

function findCommonKey(collection, arr) {
    let commonArr = []
    for (let obj of collection) {
        for (let i = 0; i < arr.length; i++) {
            if (obj.key === arr[i])
                commonArr.push(obj.key)
        }

    }

    return commonArr;
}

function processionCollection(commonArr, collection) {
    let resultColl = collection;
    for (let obj of resultColl) {
        for (let i = 0; i < commonArr.length; i++) {
            if (obj.key === commonArr[i]) {
                obj.count -= 1
            }
        }
    }
    return resultColl;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let commonArr = findCommonKey(collectionA, objectB.value);
    return processionCollection(commonArr, collectionA);
}
