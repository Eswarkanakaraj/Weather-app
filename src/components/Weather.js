// Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Clock from "./Clock"; // Import the Clock component

import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("coimbatore");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "f32ff63b585d07ca87ef1863d680d1c1";

  // Fetch weather function
  useEffect(() => {
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
  }, [city]);

  console.log(weather);
  return (
    <div className="container">
      <div className="flex1">
        <h2 className="header">Weather In</h2>
        <form>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
        </form>
      </div>
      {/* this is clear  */}

      <div className="main">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && (
          <div>
            <div id="image">
            
                
                <p className="discrip"><img src="untitled-2.png" alt="sun" />
                  {/* Weather: {weather.weather[0].description} */}
                </p>

                <p className="temp">{weather.main.temp}°c</p>

                <h3 className="city"> {weather.name}</h3>
                <Clock />
             
            </div>

            {/* this is clear */}
            <div id="bottom">
            <h3 className="hws">Today's weather</h3>
            <div className="flex2">
              <img src="humidity.png" alt="humidity" />
              <p> {weather.main.humidity}%</p>
              <img src="wind.png" alt="wind" />
              <p>{weather.wind.speed} m/s</p>
              <img src="sea-level.png" alt="sealvl" />
              <p> {weather.main.sea_level} m a.s. l</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
