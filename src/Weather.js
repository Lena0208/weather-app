import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      date: "Tuesday",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="search">
          <div className="row g-3">
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control search"
                placeholder="Enter your City"
                aria-label="City"
                id="search-city"
              />
            </div>
            <div id="submit" class="col-sm">
              <input
                type="submit"
                className="form-control submit"
                value="Search"
                aria-label="search"
              />
            </div>
            <div id="currentBtn" class="col-sm">
              <input
                type="button"
                className="form-control submit"
                value="📍 Current"
                aria-label="current"
              />
            </div>
          </div>
        </form>
        <div className="row justify-content-between">
          <div className="col-6" id="temp">
            <img
              src={weatherData.icon}
              id="icon"
              alt={weatherData.description}
            />
            <span id="actualTemp">{Math.round(weatherData.temperature)}</span>
            <span id="weather-unit">
              <a href="#" id="celcius">
                °C
              </a>
            </span>
          </div>
          <div className="col-6" id="cityDate">
            <div id="actual-city">{weatherData.city}</div>
            <br />
            <span id="blockDate">
              Last updated: {""}
              <span id="current-day">
                {weatherData.date} {""}
              </span>
              {""}
              <span id="current-time">11:58</span>
              <br />
              <span id="description">{weatherData.description}</span>
              <br />
              Humidity: <span class="humidity">{weatherData.humidity}</span>
              <span id="percent">{""} %</span>, Wind:{" "}
              <span className="wind">{weatherData.wind}</span>
              <span id="wind-speed">{""} km/h</span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
