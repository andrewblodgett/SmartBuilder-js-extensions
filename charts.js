function setChartColor(chartName, colors) {
    let chart = getSBWidgetFromObject(chartName);
    chart.option.color = colors;
    chart.chart.setOption(chart.option);

}
SB4API.functions.setChartColor = setChartColor

function setXAxisLabels(chartName, labels) {
    let chart = getSBWidgetFromObject(chartName);
    chart.option.xAxis.data = labels;
    chart.chart.setOption(chart.option);

}
SB4API.functions.setXAxisLabels = setXAxisLabels
