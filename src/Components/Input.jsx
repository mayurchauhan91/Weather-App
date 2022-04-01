import React from "react";
import "./App.css";

const Input = (props) => {
  const handleSearch = () => {
    props.data(props.inputCity);
  };
  const handleChange = (e) => {
    props.setInputCity(e.target.value);
  };
  return (
    <div className="weather-bg">
      <h1 className="header">Weather App</h1>
      <div className="d-grid gap-3 col-4 mt-4 input-section">
        <input
          required
          type="text"
          varient="outlined"
          className="form-control"
          value={props.inputCity}
          onChange={handleChange}
          placeholder="Add City"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Input;
