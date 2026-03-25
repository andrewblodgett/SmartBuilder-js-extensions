/**
 * Finds the index of the maximum value in a list.
 * Note: Returns a 1-based index to align with SmartBuilder's native list indexing.
 * @param {Array<number>} list - The array of numbers to evaluate.
 * @returns {number} The 1-based index of the maximum element.
 */
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

/**
 * Finds the index of the minimum value in a list.
 * Note: Returns a 1-based index to align with SmartBuilder's native list indexing.
 * @param {Array<number>} list - The array of numbers to evaluate.
 * @returns {number} The 1-based index of the minimum element.
 */
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

/**
 * Creates a new array with all duplicate elements removed.
 * @param {Array<any>} list - The array to filter.
 * @returns {Array<any>} A new array containing only unique elements.
 */
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

/**
 * Finds the intersection of two lists (elements that exist in both lists).
 * @param {Array<any>} list1 - The first array.
 * @param {Array<any>} list2 - The second array.
 * @returns {Array<any>} A new array containing only the shared unique elements.
 */
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

/**
 * Creates a union of two lists, combining their unique elements into a single array.
 * @param {Array<any>} list1 - The first array.
 * @param {Array<any>} list2 - The second array.
 * @returns {Array<any>} A new array containing all unique elements from both lists.
 */
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

/**
 * Finds the difference between two lists (elements in list1 that are NOT in list2).
 * @param {Array<any>} list1 - The primary array.
 * @param {Array<any>} list2 - The array of elements to subtract/exclude.
 * @returns {Array<any>} A new array of unique elements found only in list1.
 */
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

/**
 * Checks if every element in the first list is also present in the second list.
 * @param {Array<any>} list1 - The subset array to check.
 * @param {Array<any>} list2 - The superset array to check against.
 * @returns {boolean} True if list1 is a subset of list2, false otherwise.
 */
function isASubset(list1, list2) {
    for (const item of list1) {
        if (!list2.includes(item)) {
            return false;
        }
    }
    return true;
}

SB4API.functions.isASubset = isASubset;

/**
 * Checks if two lists are strictly equal in both length, order, and content.
 * @param {Array<any>} list1 - The first array.
 * @param {Array<any>} list2 - The second array.
 * @returns {boolean} True if the lists are identical, false otherwise.
 */
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

/**
 * Checks if two lists are disjoint (meaning they share absolutely zero common elements).
 * @param {Array<any>} list1 - The first array.
 * @param {Array<any>} list2 - The second array.
 * @returns {boolean} True if they share no elements, false if they have at least one element in common.
 */
function areDisjoint(list1, list2) {
    for (const item of list1) {
        if (list2.includes(item)) {
            return false;
        }
    }
    return true;
}

SB4API.functions.areDisjoint = areDisjoint;

/**
 * Generates an array of sequential numbers from a starting value to an ending value.
 * @param {number} start - The starting integer.
 * @param {number} end - The ending integer (inclusive).
 * @returns {Array<number>} An array of sequential integers.
 */
function range(start, end) {
    let newList = [];
    for (let i = start; i <= end; i++) {
        newList.push(i);
    }
    return newList;
}

SB4API.functions.range = range;

/**
 * Calculates the total sum of all numbers in a list.
 * @param {Array<number>} list - The array of numbers to add together.
 * @returns {number} The total sum.
 */
function sum(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

SB4API.functions.sum = sum;

/**
 * Calculates the arithmetic mean (average) of all numbers in a list.
 * @param {Array<number>} list - The array of numbers to average.
 * @returns {number} The mean of the list, or 0 if the list is empty.
 */
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
