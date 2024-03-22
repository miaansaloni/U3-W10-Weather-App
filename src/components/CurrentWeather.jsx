import React from "react";
import { Card } from "react-bootstrap";

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
        alt="Weather Icon"
        style={{ height: "50px", width: "50px" }}
      />
      <Card.Body>
        <Card.Title>
          Current Weather in {currentWeatherData.name}, {currentWeatherData.sys.country}
        </Card.Title>
        <Card.Text>
          <p>Temperature: {currentWeatherData.main.temp}°C</p>
          <p>Weather: {currentWeatherData.weather[0].description}</p>
          <p>Humidity: {currentWeatherData.main.humidity}%</p>
          <p>Wind Speed: {currentWeatherData.wind.speed} m/s</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeather;
