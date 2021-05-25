import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeathrInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="current-degree">
            {Math.round(props.data.temperture)}
          </span>
          <span className="unit">°C </span>

          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity} </li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
