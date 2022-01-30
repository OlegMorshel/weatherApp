import React from "react";
import './../css/weather.css';


const Weather = (props) => {

  return (
    <div className="weather">
      {props.city && (
        <>
          <p className="weather__item">
            City: {props.city}, {props.country}
          </p>
          <p className="weather__item">
            Temperature: {`${Math.round(props.temp - 273)} C`}
          </p>
          <p className="weather__item">Wind: {props.wind} m/s</p>
          <p className="weather__item">Cloudy: {props.cloudy} %</p>
          <p className="weather__item">Pressure: {props.pressure} mm Hg Art</p>
          <p className="weather__item">Sunset: {props.sunset} </p>
        </>
      )}
    </div>
  );
};

export default Weather;
