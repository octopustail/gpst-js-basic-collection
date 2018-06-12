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

function handleSpecialStr(str, transformedCollection) {
    let arr = str.split('-');
    for (let i = 0; i <parseInt(arr[1]); i++) {
        let a = arr[0];

        transformedCollection.push(a)
    }
}
function transformOriginList(collection) {
    let transformedCollection = [];
    for (let str of collection) {
        if (str.length > 1) {
            handleSpecialStr(str,transformedCollection)
        } else {
            transformedCollection.push(str)
        }
    }
    return transformedCollection;
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
    let transformedList = transformOriginList(collectionA);
    let Objcollection = countElements(transformedList);
    let commonArr = findCommonKey(Objcollection, objectB.value);
    return processionCollection(commonArr, Objcollection);
}
