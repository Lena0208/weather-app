import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div class="row">
          <div class="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div class="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div class="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div class="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div class="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
    lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
