import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Search = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      navigate("/weather", { state: { city, state, country } });
    }
    setValidated(true);
  };

  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xs={12} md={6} lg={4} xl={4} className="mx-auto my-3">
          <Form id="searchForm" className="mx-auto my-3" noValidate validated={validated} onSubmit={handleSearch}>
            <div className="d-flex justify-content-center">
              <img
                src="https://cdn0.iconfinder.com/data/icons/pug/512/pug_dog_sticker_emoji_emoticon_rain_umbrella-512.png"
                alt="Loading"
                width={"40%"}
              />
            </div>
            <Form.Group>
              <InputGroup className="input my-2">
                <FormControl
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <InputGroup className="input my-2">
                <FormControl type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <InputGroup className="input my-2">
                <FormControl
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button type="submit" className="SearchBTN">
                Search
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
