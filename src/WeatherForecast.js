import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
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
      <div class="col-3">
        <div className="forecastDay">Tuesday</div>
        <WeatherIcon code="09d" size={50} />
        <br />
        <span className="max-temp">10°C </span>
        <span className="min-temp">20°C</span>
      </div>
      <div class="col-3">
        <div className="forecastDay">Wednesday</div>
        <WeatherIcon code="04d" size={50} />
        <br />
        <span className="max-temp">10°C </span>
        <span className="min-temp">20°C</span>
      </div>
      <div class="col-3">
        <div className="forecastDay">Thursday</div>
        <WeatherIcon code="01d" size={50} />
        <br />
        <span className="max-temp">10°C </span>
        <span className="min-temp">20°C</span>
      </div>
    </div>
  );
}
