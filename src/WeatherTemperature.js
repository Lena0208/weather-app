import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="actualTemp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="temp">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span id="actualTemp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} className="temp">
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
