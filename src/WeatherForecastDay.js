import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperture = Math.round(props.data.temp.max);
    return `${temperture}°`;
  }
  function minTemp() {
    let temperture = Math.round(props.data.temp.min);
    return `${temperture}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={25} />
      <div className="forecast-temperture">
        <span className="forecast-max-temperture">{maxTemp()}</span>
        <span>{"             "}</span>

        <span className="forecast-min-temperture">{minTemp()}</span>
      </div>
    </div>
  );
}
