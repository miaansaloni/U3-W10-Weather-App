import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ThermometerHalf } from "react-bootstrap-icons";

const CurrentWeather = ({ currentWeatherData }) => {
  const kelvinToCelsius = (tempKelvin) => {
    return tempKelvin - 273.15;
  };
  const temperatureCelsius = kelvinToCelsius(currentWeatherData.main.temp);
  const feelsLikeCelsius = kelvinToCelsius(currentWeatherData.main.feels_like);
  return (
    <Container>
      <Row>
        <Col lg={12} className="mx-auto my-3 text-center">
          <div>
            {currentWeatherData.name}, {currentWeatherData.sys.country}
          </div>
          <div>{currentWeatherData.weather[0].description}</div>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`} alt="" />
            </div>
            {temperatureCelsius.toFixed(1)}°C
            <ThermometerHalf />
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <div>
              {currentWeatherData.main.humidity}%<p>Humidity</p>
            </div>
            <div>
              {currentWeatherData.wind.speed} m/s
              <p>Wind Speed</p>
            </div>
            <div>
              {feelsLikeCelsius.toFixed(1)}°C
              <p>Perceived</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
