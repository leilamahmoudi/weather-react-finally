import React, { useState } from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      ready: true,
      temperture: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tsrQFHHBaToPBlVTW8Wq6lnlxpwPt9txeg&usqp=CAU",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine />
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span className="current-degree">
              {Math.round(weatherData.temperture)}
            </span>
            <span className="unit">°C </span>

            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity} </li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5818bec111a0fe8b9841f56c8bff44c7";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&cnt={cnt}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
    return "Loading...";
  }
}
