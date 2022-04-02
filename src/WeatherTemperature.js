import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span id="actualTemp">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
