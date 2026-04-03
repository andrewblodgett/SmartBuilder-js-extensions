/**
 * Dynamically change the alignment of a text object in-lesson.
 * @param {string|Object} textObject - The name or object reference of the SmartBuilder text object.
 * @param {"left"|"center"|"right"} alignment - the alignment option.
 */
 function textAlign(textObject, alignment = "center") {
    if (["left", "center", "right"].includes(alignment)) {
        textObject = getSBWidgetFromObject(textObject);
        textObject.attr.textAlign = alignment;
        textObject.setText(textObject.text);
    } else {
        console.log("Unable to align text.\nMust pass in \"left\", \"center\", or \"right\"")
    }
}
SB4API.functions.textAlign = textAlign;

/**
 * Dynamically change the alignment of a text object in-lesson.
 * @param {string|Object} object - The name or object reference of the SmartBuilder text object.
 * @param {"left"|"center"|"right"} alignment - the alignment option.
 */
function objectAlign(object, alignment = "center") {
    object = getSBWidgetFromObject(object)
    alignment == "left" ? object.options.align = 0 :
        alignment == "center" ? object.options.align = 1 :
            alignment == "right" ? object.options.align = 2 :
                console.log("Unable to align text.\nMust pass in \"left\", \"center\", or \"right\"")
    object.setText(object.textValue)
}
SB4API.functions.objectAlign = objectAlign;



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