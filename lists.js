function idxOfMaxElement(list) {
    console.log(list);
    let max = list[0];
    let maxIdx = 0;
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
            maxIdx = i;
        }
    }
    return maxIdx+1; // we add 1 here because the people who made smartbuilder made it 1-indexed
}

SB4API.functions.idxOfMaxElement = idxOfMaxElement;

function idxOfMinElement(list) {
    console.log(list);
    let min = list[0];
    let minIdx = 0;
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
            minIdx = i;
        }
    }
    return minIdx+1;
}

SB4API.functions.idxOfMinElement = idxOfMinElement;

function removeDuplicates(list) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if (!newList.includes(list[i])) {
            newList.push(list[i]);
        }
    }
    return newList;
}

SB4API.functions.removeDuplicates = removeDuplicates;

function intersection(list1, list2) {
    let newList = [];
    for (const item of list1) {
        if (!newList.includes(item) && list2.includes(item)) {
            newList.push(item);
        }
    }
    return newList;
}

SB4API.functions.intersection = intersection;

function union(list1, list2) {
    let newList = [];
    for (const item of list1.concat(list2)) {
        if (!newList.includes(item)) {
            newList.push(item);
        }
    }
    return newList;
}

SB4API.functions.union = union;

function difference(list1, list2) {
    let newList = [];
    for (const item of list1) {
        if (!list2.includes(item) && !newList.includes(item)) {
            newList.push(item);
        }
    }
    return newList;
}

SB4API.functions.difference = difference;

function isASubset(list1, list2) {
    for (const item of list1) {
        if (!list2.includes(item)) {
            return false;
        }
    }
    return true;
}

SB4API.functions.isASubset = isASubset;

function areEqual(list1, list2) {
    if (list1.length != list2.length) {
        return false;
    }
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            return false
        }
    }
    return true;
}

SB4API.functions.areEqual = areEqual;

function areDisjoint(list1, list2) {
    for (const item of list1) {
        if (list2.includes(item)) {
            return false;
        }
    }
    return true;
}

SB4API.functions.areDisjoint = areDisjoint;

function range(start, end) {
    let newList = [];
    for (let i = start; i <= end; i++) {
        newList.push(i);
    }
    return newList;
}

SB4API.functions.range = range;

function sum(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

SB4API.functions.sum = sum;

function mean(list) {
    if (list.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total / list.length;
}

SB4API.functions.mean = mean;