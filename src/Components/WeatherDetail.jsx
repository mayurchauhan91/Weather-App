import React from "react";
import "./App.css";
import Image from "../image/cloudy-day.png";

const WeatherDetail = (props) => {
  return (
    <div className="col-md-12 result-container ">
      <div className="shadow rounded weatherResult">
        <img className="weather-img" src={Image} alt="" />
        <h3 className="weather-city">{props.name}</h3>
        <h5 className="temp">
          {props.temperature}°<span className="temp-c">C</span>
        </h5>
      </div>
    </div>
  );
};

export default WeatherDetail;
