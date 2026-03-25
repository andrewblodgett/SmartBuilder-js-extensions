/**
 * Parses and calculates a mathematical formula from a string.
 * This eliminates the need to chain multiple math blocks together in the Action Canvas.
 * * WARNING: Do not pass raw, unvalidated learner input (like a text entry box) 
 * directly into this function, as it evaluates the string as JavaScript code.
 *
 * @param {string} formula - The mathematical expression to evaluate (e.g., "100 * (5 / 2)").
 * @returns {number} The calculated result, or NaN if the formula is invalid.
 */
function evaluateMath(formula) {
    try {
        // We use the Function constructor here instead of eval() as it limits 
        // scope access slightly, but it still executes the string as code.
        const calculate = new Function('return ' + formula);
        return calculate();
    } catch (error) {
        console.error("SmartBuilder JS Error: Could not evaluate formula ->", formula, error);
        return NaN; // Returns Not-a-Number so it doesn't fatally crash the course
    }
}

SB4API.functions.evaluateMath = evaluateMath;