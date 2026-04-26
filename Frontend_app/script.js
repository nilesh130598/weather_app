async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    const tempC = (data.main.temp - 273.15).toFixed(2);

    document.getElementById("cityName").innerText =
      data.name + ", " + data.sys.country;

    document.getElementById("temperature").innerText =
      tempC + " °C";

    document.getElementById("description").innerText =
      "🌥️ " + data.weather[0].description;

    document.getElementById("humidity").innerText =
      "💧 Humidity: " + data.main.humidity + "%";

    document.getElementById("wind").innerText =
      "🌬️ Wind: " + data.wind.speed + " m/s";

    document.getElementById("weatherCard").style.display = "block";

  } catch (error) {
    console.error(error);
    alert("Error fetching weather data");
  }
}