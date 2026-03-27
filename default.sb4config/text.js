/**
 * Dynamically change the alignment of a text object in-lesson.
 * @param {string|Object} textObject - The name or object reference of the SmartBuilder text object.
 * @param {"left"|"center"|"right"} alignment - The string to type out.
 */
function align(textObject, alignment="center") {
    if (["left", "center", "right"].includes(alignment) ){
        textObject = getSBWidgetFromObject(textObject);
        textObject.attr.textAlign = alignment;
        textObject.setText(textObject.text);
    } else {
        console.log("Unable to align text.\nMust pass in \"left\", \"center\", or \"right\"")
    }
}
SB4API.functions.align = align;

/**
 * Creates a typewriter animation effect for a text element.
 * @param {string|Object} textObject - The name or object reference of the SmartBuilder text object.
 * @param {string} text - The string to type out.
 * @param {number} [speed=20] - Delay between characters in milliseconds.
 */
function typewriter(textObject, text, speed = 20) {
    let i = 0;
    textObject = getSBWidgetFromObject(textObject)
    function type() {
        if (i < text.length) {
            textObject.setText(textObject.text + text.charAt(i));
            i++;
            setTimeout(type, speed);
        }   
    }
    type();
}
SB4API.functions.typewriter = typewriter;