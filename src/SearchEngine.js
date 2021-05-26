import React from "react";

export default function SearchEngine({ setCity, getData }) {
  function handelCityChange(event) {
    setCity(event.target.value);
  }
  function handelSubmit(event) {
    event.preventDefault();
    getData();
  }
  return (
    <div className="SearchEngine">
      <div className="input-group">
        <form onSubmit={handelSubmit}>
          <input
            type="Search"
            placeholder="Type a city"
            className="form-control"
            autoFocus="on"
            onChange={handelCityChange}
          />
          <div className="input-group-btn">
            <button type="submit" value="Search" className="btn btn-default">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
