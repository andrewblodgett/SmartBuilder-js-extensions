/**
 * Updates the color palette of a specified SmartBuilder chart widget.
 * * @requires utilities.js
 * @param {string|Object} chartName - The name of the chart widget or the widget object itself.
 * @param {Array<string>} colors - An array of CSS color strings (e.g., ['#FF0000', 'blue', 'rgb(0, 255, 0)']) to apply to the chart data.
 */
function setChartColor(chartName, colors) {
    let chart = getSBWidgetFromObject(chartName);
    chart.option.color = colors;
    chart.chart.setOption(chart.option);
}
SB4API.functions.setChartColor = setChartColor

/**
 * Replaces the existing X-axis labels on a specified SmartBuilder chart widget.
 * * @requires utilities.js
 * @param {string|Object} chartName - The name of the chart widget or the widget object itself.
 * @param {Array<string>} labels - An array of strings representing the new X-axis categories (e.g., ['Jan', 'Feb', 'Mar']).
 */
function setXAxisLabels(chartName, labels) {
    let chart = getSBWidgetFromObject(chartName);
    chart.option.xAxis.data = labels;
    chart.chart.setOption(chart.option);
}
SB4API.functions.setXAxisLabels = setXAxisLabels
