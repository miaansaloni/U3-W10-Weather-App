import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { ThermometerHalf } from "react-bootstrap-icons";
import { CloudSun } from "react-bootstrap-icons";
import { CloudFog2 } from "react-bootstrap-icons";
import { Wind } from "react-bootstrap-icons";
const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};
const ForecastWeather = ({ forecastWeatherData }) => {
  return (
    <div>
      <h2>Forecast Weather</h2>
      <Container fluid>
        <Row>
          {forecastWeatherData.list.map((forecast, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className="my-3 ">
              <Card className="custom-card ">
                <Card.Body className="text-center">
                  {" "}
                  <Card.Img
                    variant="top"
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt="Weather Icon"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <Card.Title>Date: {forecast.dt_txt}</Card.Title>
                  <Card.Text>
                    <p>
                      Temperature: <ThermometerHalf />
                      {kelvinToCelsius(forecast.main.temp).toFixed(1)}°C
                    </p>
                    <p>
                      Weather: <CloudSun /> {forecast.weather[0].description}
                    </p>
                    <p>
                      Humidity: <CloudFog2 /> {forecast.main.humidity}%
                    </p>
                    <p>
                      Wind Speed: <Wind /> {forecast.wind.speed} m/s
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ForecastWeather;
