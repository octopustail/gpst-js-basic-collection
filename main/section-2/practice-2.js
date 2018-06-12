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

function countElements(collection) {
    let result = []
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

module.exports = function countSameElements(collection) {

    let transformedCollection = transformOriginList(collection);
    return countElements(transformedCollection);
}
