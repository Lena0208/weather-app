import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row justify-content-between">
        <div className="col-6" id="temp">
          <img src={props.data.icon} id="icon" alt={props.data.description} />
          <span id="actualTemp">{Math.round(props.data.temperature)}</span>
          <span id="weather-unit">
            <a href="#" id="celcius">
              °C
            </a>
          </span>
        </div>
        <div className="col-6" id="cityDate">
          <div id="actual-city">{props.data.city}</div>
          <br />
          <span id="blockDate">
            Last updated: <FormattedDate date={props.data.date} />
            <span id="description">{props.data.description}</span>
            <br />
            Humidity: <span class="humidity">{props.data.humidity}</span>
            <span id="percent">{""} %</span>, Wind:{" "}
            <span className="wind">{props.data.wind}</span>
            <span id="wind-speed">{""} km/h</span>
          </span>
        </div>
      </div>
    </div>
  );
}
