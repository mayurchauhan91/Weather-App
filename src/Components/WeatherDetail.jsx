import React from "react";
import "./App.css";

const WeatherDetail = (props) => {
  return (
    <div className="col-md-12 result-container ">
      <div className="shadow rounded weatherResult">
        <img
          className="weather-img"
          src="https://cdn-icons.flaticon.com/png/512/3751/premium/3751173.png?token=exp=1648999706~hmac=d86d0f8e0780e4bac6af504411af959d"
          alt=""
        />
        <h3 className="weather-city">{props.name}</h3>
        <h5 className="temp">
          {props.temperature}°<span className="temp-c">C</span>
        </h5>
      </div>
    </div>
  );
};

export default WeatherDetail;
