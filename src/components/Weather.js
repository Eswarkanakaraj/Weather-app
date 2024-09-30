// Weather.js
// import react from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Clock from "./Clock"; // Import the Clock component
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import four from "./images/four.png";
import nine from "./images/nine.png";
import ten from "./images/ten.png";
import leven from "./images/leven.png";
import thirteen from "./images/thirteen.png";
import fifty from "./images/fifty.png";
import oneN from "./images/oneN.png";
import twoN from "./images/twoN.png";
import fourN from "./images/fourN.png";

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
  const icon = weather && weather.weather ? weather.weather[0].icon : null;
  const temp = weather && weather.main ? Math.floor(weather.main.temp) : null;
  const getImage = () => {
    switch (icon) {
      case "01d":
        return one;
      case "01n":
        return oneN;
      case "02d":
        return two;
      case "02n":
        return twoN;
      case "03d":
      case "03n":
        return three;
      case "04d":
        return four;
      case "04n":
        return fourN;
      case "09d":
      case "09n":
        return nine;
      case "10d":
      case "10n":
        return ten;
      case "11d":
      case "11n":
        return leven;
      case "13d":
      case "13n":
        return thirteen;
      case "50d":
      case "50n":
        return fifty;

      default:
        return one;
    }
  };
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
        {error && (
          <p className="error">
            {error}
            <img src="sorry.png" alt="sorry" />
          </p>
        )}
        {weather && (
          <div>
            <div id="image">
              <p className="discrip">
                <img src={getImage()} alt="discription" />
                {/* Weather: {weather.weather[0].description}
                {icon} */}
              </p>

              <p className="temp">{temp}°c</p>

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
        <div id="founder" align="end">
          Designed by <span>Eswar</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
