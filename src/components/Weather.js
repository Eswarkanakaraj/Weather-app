// Weather.js
import React, { useState } from "react";
import axios from "axios";
import Clock from "./Clock"; // Import the Clock component

const Weather = () => {
  const [city, setCity] = useState("Coimbatore");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "f32ff63b585d07ca87ef1863d680d1c1";

  // Fetch weather function
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data); // Directly set response.data
      setError("");
     
    } catch (err) {
      setWeather(null);
      setError("Error fetching weather data");
    }
  };
fetchWeather();
  const handleClick = (e) => {
    e.preventDefault();
    fetchWeather();
    setCity("");
  };
  console.log(weather);
  return (
    <>
      <h2>Weather In</h2>
      <form>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleClick}>Get weather</button>
      </form>

      <Clock />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
};

export default Weather;
