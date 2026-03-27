# SmartBuilder-js-extensions

*A community-driven collection of JavaScript snippets to extend the native functionality of SmartBuilder.*

**Disclaimer:**
These scripts are provided "as is" and are not officially supported by SmartBuilder. Modifying your configuration files can potentially break your project if done incorrectly. Use at your own risk!

## How to use

You can access functions you define inside of JavaScript files using the **"invoke registered fuction"** block in the SmartBuilder action canvas *(Note: SmartBuilder actually spells it "fuction" in the software—that is not a typo on our end!).* 

### Method 1: Global Installation (Available to all projects)
You will need to navigate to wherever SmartBuilder is installed on your machine and find the `.smartbuilder` folder. 

1. Inside this folder, create a new directory with this exact path: `.smartbuilder/default.sb4config`. 
2. Place your downloaded `.js` files into this directory. 
3. These scripts will now be available to *all* of your SmartBuilder projects. 

### Alternative Method: Activity-Specific Installation (Local to one project)
If you would rather use a script for only a single activity, you can create a custom config folder right next to your project file.

1. Navigate to the folder containing your project file (e.g., `YourProjectName.sb`).
2. Create a new directory in that exact same location named `YourProjectName.sbconfig` (the names must match exactly).
3. Drop your `.js` files in there.

> **WARNING:** Creating a custom `.sbconfig` directory for a specific activity will **completely override** your global `default.sb4config` folder for that particular activity. It will not merge them.

### Available Scripts

Here is what is currently available in this repository:

| Script Name | Description | Dependencies |
| :--- | :--- | :--- |
| `utilities.js` | Core helper functions and general tools for manipulating the DOM and debugging | none | 
| `charts.js` | Functions for customizing the chart widget. | `utilities.js` | 
| `lists.js` | Advanced array and list manipulation functions for complex data handling. | none | 
| `strings.js` | Tools for text parsing and string manipulation. | none | 
| `text.js` | Additional functionality for text objects | `utilities.js` | 
| `math.js` | Stop doing block based nightmare calculations | none |

## Contributing

Got a cool JavaScript workaround or enhancement for SmartBuilder? Contributions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please write a descriptive JSDoc for functions that you add.

## License

Distributed under the MIT License. See `LICENSE` for more information. This project is not affiliated with, maintained, authorized, endorsed, or sponsored by SmartBuilder.
