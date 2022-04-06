import React from "react";
import "./App.css";

const WeatherDetail = (props) => {
  return (
    <div className="col-md-12 result-container ">
      <div className="shadow rounded weatherResult">
        <div className="weather-img">
          <img
            src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
            alt=""
          />
          <p className="weather-desc">{props.description}</p>
        </div>
        <div>
          <h3 className="weather-city">{props.name}</h3>
          <h5 className="temp">
            {props.temperature}°<span className="temp-c">C</span>
          </h5>
          <div className="min-max-container">
            <h6 className="min-max">Max Temp</h6>
            <p className="min-max-temp">
              {props.maxTemp}°<span className="min-max-celsius">C</span>
            </p>

            <h6 className="min-max">Min Temp</h6>
            <p className="min-max-temp">
              {props.minTemp}°<span className="min-max-celsius">C</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
