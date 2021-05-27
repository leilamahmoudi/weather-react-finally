import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import SearchEngine from "./SearchEngine";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
    });
  }
  function getData() {
    const apiKey = "83ff65ea2b4285d25f963e410c715fd0";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&cnt={cnt}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine setCity={setCity} getData={getData} />
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    getData();
    return "Loading...";
  }
}
