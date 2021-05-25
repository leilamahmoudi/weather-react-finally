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
      <form onSubmit={handelSubmit}>
        <div className="row">
          <div className="col-7">
            <input
              type="Search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
              onChange={handelCityChange}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
