import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} id="search">
          <div className="row g-3">
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control search"
                placeholder="Enter your City"
                aria-label="City"
                id="search-city"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
