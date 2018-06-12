'use strict';
function findObjInArr(result, str) {
    let newObj;
    for (let obj of result) {
        if (obj.key === str) {
            newObj = obj;
        }
    }
    return newObj
}

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

function countElements(collection) {
    let result = [];
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: str, count: 1})
        }
    }
    return result
}

function processionCollection(commonArr, collection) {
    let resultColl = collection;
    for (let obj of resultColl) {
        for (let i = 0; i < commonArr.length; i++) {
            if (obj.key === commonArr[i]) {
                let minus = Math.floor(obj.count / 3);
                obj.count -= minus;
            }
        }
    }
    return resultColl;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let Objcollection = countElements(collectionA);
    let commonArr = findCommonKey(Objcollection, objectB.value);
    return processionCollection(commonArr, Objcollection);
}
