import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import SearchEngine from "./SearchEngine";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    getData();
  });

  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
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

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt={cnt}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }

  function getClassName() {
    const desc = codeMapping[weatherData.icon];
    return desc + " Weather";
  }

  if (weatherData) {
    return (
      <div className={getClassName()}>
        <SearchEngine setCity={setCity} getData={getData} />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    return "Loading...";
  }
}

const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "CLOUDY",
  "02n": "CLOUDY",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "SLEET",
  "11n": "SLEET",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};
