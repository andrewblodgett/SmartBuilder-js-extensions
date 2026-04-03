/**
 * Global registry object for storing references to parsed SmartBuilder widgets.
 * @type {Object}
 */
window.SB_Widgets = {};

/**
 * Scans the DOM for SmartBuilder objects, extracts their underlying widget data, 
 * and maps them by name into the global window.SB_Widgets registry.
 */
function updateRegistry() {
    $('.axon_sbobj').each(function () {
        var allData = $(this).data();

        // Look for keys starting with 'sb4Com' or containing 'widget'
        Object.keys(allData).forEach(key => {
            if (key.toLowerCase().includes('widget') || key.startsWith('sb4')) {

                var widget = allData[key];
                var widgetName = widget.options ? widget.options._n : "Unnamed Widget";

                // Store by name for easy access
                window.SB_Widgets[widgetName] = widget;
            }
        });
    });
}

/**
 * Retrieves the actual SmartBuilder widget object. 
 * If a string is provided, it updates the registry and searches for a widget with that name.
 * * @param {string|Object} sbObject - The name of the widget (string) or the widget object itself.
 * @returns {Object} The parsed SmartBuilder widget object.
 */
function getSBWidgetFromObject(sbObject) {
    if (typeof (sbObject) === "string") {
        updateRegistry();
        sbObject = window.SB_Widgets[sbObject]
    }
    return sbObject;
}

/**
 * Updates the global widget registry and logs the full list of available widgets to the console.
 * Highly useful for debugging and finding exact internal widget names.
 */
function logRegistry() {
    updateRegistry();
    console.log("Full List of Widgets:", window.SB_Widgets);
}
SB4API.functions.logRegistry = logRegistry;

/**
 * Gets the current height of a specified SmartBuilder widget.
 * * @param {string|Object} objectName - The name of the widget or the widget object itself.
 * @returns {number|string} The height of the widget.
 */
function getHeight(objectName) {
    object = getSBWidgetFromObject(objectName);
    updateRegistry();
    return object.options._h
}
SB4API.functions.getHeight = getHeight;

/**
 * Gets the current width of a specified SmartBuilder widget.
 * * @param {string|Object} objectName - The name of the widget or the widget object itself.
 * @returns {number|string} The width of the widget.
 */
function getWidth(objectName) {
    object = getSBWidgetFromObject(objectName);
    updateRegistry();
    return object.options._w
}
SB4API.functions.getWidth = getWidth;

/**
 * Narrates the provided text string using the browser's Speech Synthesis engine.
 * A core accessibility feature for e-learning to support auditory learning 
 * and visual impairments.
 * * @function speak
 * @param {string} [message="You forgot to put in a message"] - The text content to be spoken.
 */
function speak(message = "You forgot to put in a message") {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
}
SB4API.functions.speak = speak;


/**
 * This changes the "lang" html tag to whatever language you give it. Screen readers will change their pronunciation setting when reading this object.
 * A core accessibility feature for e-learning to support auditory learning 
 * and visual impairments.
 * * @function setLanguage
 * @param {string|Object} - The name or the object itself.
 */

 function setLanguage(objectName, language) {
    object = getSBWidgetFromObject(objectName);
    object.wcagDiv.attr("lang", language);
    object.wacgRootChild.attr("lang", language);
}
SB4API.functions.setLanguage = setLanguage;