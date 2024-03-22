import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ThermometerHalf } from "react-bootstrap-icons";
import { CloudSun } from "react-bootstrap-icons";
import { CloudFog2 } from "react-bootstrap-icons";
import { Wind } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";

const CurrentWeather = ({ currentWeatherData }) => {
  const kelvinToCelsius = (tempKelvin) => {
    return tempKelvin - 273.15;
  };
  const temperatureCelsius = kelvinToCelsius(currentWeatherData.main.temp);
  return (
    <Container>
      <Row>
        <Col lg={12} className="mx-auto my-3 d-flex justify-content-center">
          <Card className="custom-card text-center">
            <Card.Body>
              <Card.Img
                variant="top"
                src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
                alt="Weather Icon"
                style={{ height: "70px", width: "70px" }}
              />
              <Card.Title className="fw-bold">
                Current Weather in {currentWeatherData.name}, {currentWeatherData.sys.country}
              </Card.Title>
              <Card.Text>
                <p className="fw-bold">
                  Temperature:
                  <ThermometerHalf />
                  {temperatureCelsius.toFixed(1)}°C
                </p>
                <p className="fw-bold">
                  Weather: <CloudSun /> {currentWeatherData.weather[0].description}
                </p>
                <p className="fw-bold">
                  Humidity: <CloudFog2 /> {currentWeatherData.main.humidity}%
                </p>
                <p className="fw-bold">
                  Wind Speed: <Wind /> {currentWeatherData.wind.speed} m/s
                </p>
              </Card.Text>
              <Button id="addToFavBTN" variant="bg-none">
                <Heart />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
