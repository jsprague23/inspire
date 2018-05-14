function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object?
	})

	this.addWeather = function addWeather(e) {
		e.preventDefault();
		var data = e.target
		var newWeather = {
			temp: e.main.temp.value,
			description: e.weather.description.value,
			name: e.name.value,

		}
		weatherService.getWeather(newWeather)

	}

	function drawWeather(weather) {
		var template = `
		  <h2>${weather.name}</h2>
		  <h3>Temperature:${weather.temp}</h3>
		  <h3>${weather.description}</h3>`

			document.getElementById('weather').innerHTML = template
	}

}
