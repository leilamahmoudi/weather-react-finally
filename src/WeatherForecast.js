import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "83ff65ea2b4285d25f963e410c715fd0";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);

    return null;
  }
}
