import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./App.css";

const WeatherDetail = ({
  name,
  temperature,
  minTemp,
  maxTemp,
  description,
  weatherIcon,
}) => {
  return (
    <div className="weatherResult">
      <div>
        <div className="weather-img">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt=""
          />
          <p className="weather-desc">{description}</p>
        </div>
        <div>
          <h3 className="weather-city">{name}</h3>
          <h5 className="temp">
            {temperature}°<span className="temp-c">C</span>
          </h5>
          <div className="min-max-container">
            <h6 className="min-max">Max</h6>
            <p className="min-max-temp">
              {maxTemp}°<span className="min-max-celsius">C</span>
            </p>

            <h6 className="min-max">Min</h6>
            <p className="min-max-temp">
              {minTemp}°<span className="min-max-celsius">C</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="weather-data-container">
          <h6 className="news-tag">News</h6>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
