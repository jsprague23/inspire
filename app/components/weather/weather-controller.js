function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object?
		drawWeather(weather)
	})



	function drawWeather(weather) {
		var template = `
		  <h2>${weather.name}</h2>
		  <h3>Temperature: ${(weather.main.temp* 9/5 - 459.67).toFixed(0)} F</h3>
		  <h3>${weather.weather[0].description}</h3>`

			document.getElementById('weather').innerHTML = template
	}

}
