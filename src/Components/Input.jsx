import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./Input.css";

const Input = (props) => {
  const handleChange = (e) => {
    props.setInputCity(e.target.value.replace(/[^a-z A-Z]/gi, ""));
  };

  const handleSeacrh = (e) => {
    e.preventDefault();
    props.data(props.inputCity);
  };

  return (
    <div className="input-container">
      <span className="card-title">Add your city</span>
      <div className="card-container">
        <form className="form-container" onSubmit={handleSeacrh}>
          <TextField
            required
            id="city"
            label="City"
            variant="outlined"
            placeholder="Leicester"
            fullWidth
            className="textfield"
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-primary search-button"
            onClick={handleSeacrh}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
