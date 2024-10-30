import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};
const ForecastWeather = ({ forecastWeatherData }) => {
  return (
    <div>
      <h2>Previsioni orarie</h2>
      <Container fluid>
        <div className="forecast-scroll-container">
          {" "}
          {/* Div per lo scroll orizzontale */}
          <Row className="flex-nowrap">
            {" "}
            {/* flex-nowrap per evitare che le colonne vadano a capo */}
            {forecastWeatherData.list.slice(0, 24).map(
              (
                forecast,
                i // Prende solo i primi 24 elementi
              ) => (
                <Col key={i} className="my-3">
                  <div className="forecast-item">
                    <p>{forecast.dt_txt.slice(11, 16)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    <p>{kelvinToCelsius(forecast.main.temp).toFixed(1)}°C</p>
                  </div>
                </Col>
              )
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ForecastWeather;
