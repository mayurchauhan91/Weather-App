import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WeatherDetail from "./WeatherDetail";
import News from "./News";
import Input from "./Input";

function Home(props) {
  const apiKey = "1a604af300908f1461129e7501e28c58";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const getWeatherData = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert("Please input valid city or country", err);
      });
  };
  return (
    <div className="home-container">
      <div className="navigation-container">
        <Input
          inputCity={inputCity}
          setInputCity={setInputCity}
          data={getWeatherData}
        />
      </div>
      <div className="result-container bg-pan-left">
        {Object.keys(data).length <= 0 ? (
          <div>
            <span className="city-name">
              Add your city to get current weather.
              <br />
              Still you can scroll and read top news.
            </span>
            <h6 className="news-tag">News</h6>
            <ArrowDropDownIcon />
          </div>
        ) : (
          <WeatherDetail
            name={data?.name}
            temperature={(data?.main?.temp - 273.15).toFixed(2)}
            minTemp={(data?.main?.temp_min - 273.15).toFixed(2)}
            maxTemp={(data?.main?.temp_max - 273.15).toFixed(2)}
            description={data?.weather[0]?.description}
            weatherIcon={data?.weather[0]?.icon}
          />
        )}
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}

export default Home;
