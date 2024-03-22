import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const ForecastWeather = ({ forecastWeatherData }) => {
  return (
    <div>
      <h2>Forecast Weather</h2>
      <Row>
        {forecastWeatherData.list.map((forecast, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="Weather Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <Card.Body>
                <Card.Title>Date: {forecast.dt_txt}</Card.Title>
                <Card.Text>
                  <p>Temperature: {forecast.main.temp}°C</p>
                  <p>Weather: {forecast.weather[0].description}</p>
                  <p>Humidity: {forecast.main.humidity}%</p>
                  <p>Wind Speed: {forecast.wind.speed} m/s</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForecastWeather;
