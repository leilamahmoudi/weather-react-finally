import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <h1>Stockholm</h1>
      <ul>
        <li>Mon May 17, 14:59, 2021</li>
        <li>broken clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="current-degree">14 </span>
          <span className="unit">°C </span>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tsrQFHHBaToPBlVTW8Wq6lnlxpwPt9txeg&usqp=CAU"
            alt="partly cloudy"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Sunset: 21:18</li>
            <li>Sunrise: 04:10</li>
            <li>Humidity: 77</li>
            <li>Feels like: 14</li>
            <li>Wind: sw 3.6 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
