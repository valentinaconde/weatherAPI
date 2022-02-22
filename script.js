let key = config.MY_KEY

let submit = document.getElementById('submit')
let temp = document.getElementById('temp')
let feelsLike = document.getElementById('feelsLike')
let tempMin = document.getElementById('tempMin')
let tempMax = document.getElementById('tempMax')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let ciudad = document.getElementById('ciudad')
let cloudy = document.getElementById('cloudy')
let tiempo = document.getElementById('tiempo')
let description = document.getElementById('description')
let icon = document.getElementById('icon')
let app = document.getElementById('app')


var hoy = new Date();
	var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
	var hora = hoy.getHours() + ':' + hoy.getMinutes()

cambiarFondo = () => {
	console.log(hoy.getHours())
	if (hoy.getHours() >= 19) {
		app.classList.add('noche')
		app.classList.remove('dia')
	}
	else {
		app.classList.add('dia')
		app.classList.remove('noche')

	}
}


mostrarData = (obj) => {

	cambiarFondo()

	ciudad.textContent = obj.list[0].name + ', ' + fecha + ' ' + hora

	temp.textContent = Math.floor(obj.list[0].main.temp) + '°'
	icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${obj.list[0].weather[0].icon}@2x.png" class="img-fluid" alt="...">`

	tempMin.textContent = Math.floor(obj.list[0].main.temp_min) + '°'
	tempMax.textContent = + Math.floor(obj.list[0].main.temp_max) + '°'

	feelsLike.textContent = 'Feels like: ' + Math.floor(obj.list[0].main.feels_like) + '°'
	tiempo.textContent = 'Weather: ' + obj.list[0].weather[0].main
	cloudy.textContent = 'Clouds: ' + obj.list[0].clouds.all + ' %'
	humidity.textContent = 'Humidity: ' + Math.floor(obj.list[0].main.humidity) + ' %'
	pressure.textContent = 'Pressure: ' + Math.floor(obj.list[0].main.pressure) + ' hPa'
}

obtenerClima = async (city) => {
	const url = `https://community-open-weather-map.p.rapidapi.com/find?q=${encodeURI(city)}&units=metric`
	const resp = await fetch(url, {
		"headers": {
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
			"x-rapidapi-key": key
		}
	})
	const data = await resp.json()

	mostrarData(data)

	//arreglar lo de las ubicaciones


}


obtenerClima('paris')

submit.onsubmit = (e) => {
	e.preventDefault()
	obtenerClima(search.value)
	search.value = ''
}

