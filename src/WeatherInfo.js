import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperture from "./WeatherTemperture";

export default function WeatherInfo(props) {
  return (
    <div className="WeathrInfo">
      <h1 className="border-bottom">{props.data.city}</h1>
      <div className="row">
        <ul className=" col-6 description">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity} </li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherTemperture celsius={props.data.temperture} />
        </div>
        <div className={WeatherIcon}>
          {/* <WeatherIcon code={props.data.icon} size={50} /> */}
        </div>
      </div>
    </div>
  );
}
