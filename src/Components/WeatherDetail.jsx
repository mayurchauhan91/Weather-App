import React from "react";
import "./App.css";

const WeatherDetail = (props) => {
  return (
    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResult">
        <img
          className="weather-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ln7k5jWjPr2McUJX6buroRInBucvGN8Srg&usqp=CAU"
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
