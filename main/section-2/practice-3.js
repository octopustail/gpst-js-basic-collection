'use strict';

function findObjInArr(result, str) {
    let newObj;
    for (let obj of result) {
        if (obj.name === str) {
            newObj = obj;
        }
    }
    return newObj
}

function countElements(collection) {
    let result = [];
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.summary++;
        } else {
            result.push({name: str, summary: 1})
        }
    }

    return result
}

function handleSpecialStr(str, transformedCollection) {
    let addNum;
    if (str.length === 3) {
        addNum = parseInt(str[2])
    } else {
        let startIndex = str.indexOf('['),
            endIndex = str.indexOf(']');
        addNum = str.substring(startIndex + 1, endIndex)
    }

    for (let i = 0; i < parseInt(addNum); i++) {
        transformedCollection.push(str[0])

    }
}

function transformOriginList(collection) {
    let transformedCollection = [];
    for (let str of collection) {
        if (str.length > 1) {
            handleSpecialStr(str, transformedCollection)
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
