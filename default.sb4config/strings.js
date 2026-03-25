function checkPattern(inputString, patternString, flags) {
    const regex = new RegExp(patternString, flags || '')
    return regex.test(inputString)
}

SB4API.functions.checkPattern = checkPattern;

function extractMatches(inputString, patternString, flags) {
    const regex = new RegExp(patternString, flags || '')
    const matches = inputString.match(regex)
    return matches ? matches : []
}

SB4API.functions.extractMatches = extractMatches;


// Levenshtein distance is used to determine how different two strings are from each other. Useful when students spell something wrong but are still close
function levenshteinDistance(str1, str2) {
    function sanitize(s) {
        return s.toLowerCase().replace(/[\W_]+/g, "");
    }

    const s = sanitize(str1);
    const t = sanitize(str2);
    if (s === t) return 0;

    if (s.length === 0) return t.length;
    if (t.length === 0) return s.length;

    let v0 = new Array(t.length + 1);
    let v1 = new Array(t.length + 1);

    for (let i = 0; i < v0.length; i++) {
        v0[i] = i;
    }

    for (let i = 0; i < s.length; i++) {

        v1[0] = i + 1;

        for (let j = 0; j < t.length; j++) {
            let cost = (s[i] === t[j]) ? 0 : 1;
            v1[j + 1] = Math.min(
                v1[j] + 1,       // Cost of insertion
                v0[j + 1] + 1,   // Cost of deletion
                v0[j] + cost     // Cost of substitution
            );
        }

        for (let j = 0; j < v0.length; j++) {
            v0[j] = v1[j];
        }
    }

    return v1[t.length];
}

function getSimilarityPercentage(s, t) {
    if (s.length === 0 && t.length === 0) {
        return 100;
    }

    const distance = levenshteinDistance(s, t);
    const maxLength = Math.max(s.length, t.length);

    const similarity = 1 - (distance / maxLength);

    return similarity * 100;
}

SB4API.functions.getSimilarityPercentage = getSimilarityPercentage;

// The Sørensen-Dice Coefficient is superior to Levenshtein distance when order is less important than content. 
// It works by breaking strings into bigrams (pairs of adjacent characters) and calculating the ratio of shared bigrams to the total number of bigrams. 
// This approach is resilient to transposed words (like "Acid Sulfuric" vs "Sulfuric Acid") because the internal character pairs of "Acid" and "Sulfuric" remain intact regardless of their position in the string.
function getSorensenDiceCoefficient(str1, str2) {
    function sanitize(s) {
        return s.toLowerCase().replace(/[\W_]+/g, "");
    }

    const s1 = sanitize(str1);
    const s2 = sanitize(str2);

    if (s1.length < 2 && s2.length < 2) return s1 === s2 ? 1 : 0;

    function getBigrams(s) {
        const bigrams = new Map();
        for (let i = 0; i < s.length - 1; i++) {
            const bigram = s.substring(i, i + 2);
            bigrams.set(bigram, (bigrams.get(bigram) || 0) + 1);
        }
        return bigrams;
    }

    const map1 = getBigrams(s1);
    const map2 = getBigrams(s2);

    let intersection = 0;

    for (const [key, count1] of map1) {
        if (map2.has(key)) {
            const count2 = map2.get(key);
            intersection += Math.min(count1, count2);
        }
    }

    const totalBigrams = (s1.length - 1) + (s2.length - 1);

    return (2 * intersection) / totalBigrams;
}

SB4API.functions.getSorensenDiceCoefficient = getSorensenDiceCoefficient;
