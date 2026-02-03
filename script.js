async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)

    const data = await response.json()

    return data;

  } catch (error) {
    console.error(error)
  }
}

async function showWeather () {

  const selectedCity = document.getElementById("selector").value

if (!selectedCity) return 

const weatherIcon = document.getElementById("weather-icon")
  const mainTemperature = document.getElementById("main-temperature")
  const feelsLike = document.getElementById("feels-like")
  const humidity = document.getElementById("humidity")
  const wind = document.getElementById("wind")
  const windGust = document.getElementById("wind-gust")
  const weatherMain = document.getElementById("weather-main")
  const location = document.getElementById("location")

let weatherInfo = await getWeather(selectedCity)

  if (!weatherInfo) {
    alert("Something went wrong, please try again later.");
    return;
  }

if (weatherInfo.weather[0].icon !== undefined) {
  weatherIcon.src = weatherInfo.weather[0].icon
} else { weatherIcon.style.display = "none"}

mainTemperature.textContent = weatherInfo.main.temp !== undefined ? weatherInfo.main.temp : "N/A"

feelsLike.textContent = weatherInfo.main.feels_like !== undefined ?  weatherInfo.main.feels_like : "N/A"

humidity.textContent = weatherInfo.main.humidity !== undefined ? weatherInfo.main.humidity : "N/A"

wind.textContent = weatherInfo.wind.speed !== undefined ? weatherInfo.wind.speed : "N/A"

windGust.textContent = weatherInfo.wind.gust !== undefined ? weatherInfo.wind.gust : "N/A"

weatherMain.textContent = weatherInfo.weather[0].main !== undefined ? weatherInfo.weather[0].main : "N/A"

location.textContent = weatherInfo.name !== undefined ? weatherInfo.name : "N/A"

}

const weatherBtn = document.getElementById("get-weather-btn")
weatherBtn.addEventListener("click", showWeather)
