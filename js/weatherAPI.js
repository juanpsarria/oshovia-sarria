//VISUALCROSSING WEATHER API

window.weatherWidgetConfig = window.weatherWidgetConfig || [];

window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "LNF3Z49FB4T9HWXWJ8KRV6YYP",
    location: "Ushuaia",
    unitGroup: "metric",
    forecastDays: 5,
    title: "Ushuaia",
    showTitle: true,
    showConditions: true,
});

(function () {
    let d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();