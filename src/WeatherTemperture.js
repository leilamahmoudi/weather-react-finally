import React, { useState } from "react";

export default function WeatherTemperture(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  const fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperture">
        <span className="current-degree">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperture">
        <span className="current-degree">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
