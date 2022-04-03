import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Input from "./Input";
import WeatherDetail from "./WeatherDetail";

function App() {
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
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="col-md-12">
      <Input
        inputCity={inputCity}
        setInputCity={setInputCity}
        data={getWeatherData}
      />
      <div>
        {Object.keys(data).length > 0 && (
          <WeatherDetail
            name={data?.name}
            temperature={(data?.main?.temp - 273.15).toFixed(2)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
