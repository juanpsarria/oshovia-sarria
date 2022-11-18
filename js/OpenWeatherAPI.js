function drawWeather(d) {
    let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
};

function weatherInUshuaia(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=Ushuaia&appid=e83d6832b03ba52e1ff4a962f62ab233&lang=es')  
.then(function(resp) { return resp.json() }) // Convert data to json
.then(function(data) {
	drawWeather(data); // Call drawWeather
})
.catch(function() {
	// catch any errors
});
};

weatherInUshuaia();