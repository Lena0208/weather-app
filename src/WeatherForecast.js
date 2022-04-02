import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "7837f66493d567007e68c9221e2ef6ed";
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
  lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div class="row" id="next4days">
      <div class="col-3">
        <div className="forecastDay">Monday</div>
        <WeatherIcon code="13d" size={50} />
        <div className="forecastTemp">
          <span className="max-temp">10°C </span>
          <span className="min-temp">20°C</span>
        </div>
      </div>
    </div>
  );
}
