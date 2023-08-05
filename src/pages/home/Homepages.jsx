import { Container, Card, Row, Col } from "react-bootstrap";

import "./homepages.css";
import { datatesimoni } from "../../data/datatestimonial";
import { gradelistdata } from "../../data/gradelist";

import { useNavigate } from "react-router-dom";

import {esportlogouimage} from "../../data/esportlogo.js"

function Homepages() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Background__homepages">
        <Container>
          <div className="d-flex justify-content-center pe-3 ps-3">
            <div className="border__landingpage__hero">
              <span className="text__landingpage__tumbhnail">
                <h1 className="title__landingpage__hero mb-3">
                  WELCOME TO WARNET.ID
                </h1>
                <p className="text__landingpage__hero ">BUKA 24JAM</p>
              </span>
              <div className="d-flex justify-content-center pt-2">
                <a
                  onClick={() => navigate("/view")}
                  className="btn btn-outline-dark  btn__text__hero"
                >
                  VIEW
                </a>
                <a
                  onClick={() => navigate("/booking")}
                  className="btn btn-outline-dark  btn__text__hero"
                >
                  BOOKING
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="Container__content__hero">
        <Container>
          <Container fluid>
            <div className="main__faq__content__hero">
              <div className="pt-5 pb-5">
                <h1 className="content__title__hero">Faq</h1>
              </div>
              <Row xs={1} md={2} className="g-4">
                {datatesimoni.map((faqvalidasi) => {
                  return (
                    <Col key={faqvalidasi}>
                      <Card className="card__content__hero">
                        <Card.Body>
                          <Card.Title>{faqvalidasi.title}</Card.Title>
                          <Card.Text>{faqvalidasi.text}</Card.Text>
                          <small className="text-muted">{`${faqvalidasi.time} hari yang lalu`}</small>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div className="main__GRADE__content__hero pb-5">
              <div className="pt-5 pb-5">
                <h1 className="content__title__hero">GRADE</h1>
              </div>
              <Row>
                {gradelistdata.map((gradevalidasi) => {
                  return (
                    <Col sm key={gradevalidasi}>
                      <a onClick={() => navigate('example')} className="link__grade">
                        <Card className="card__content__hero">
                          <Card.Body>
                            <Card.Title className="text-center m-2 ">
                              <p>{gradevalidasi.title}</p>
                              <p>{`${gradevalidasi.unit} Unit`}</p>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div className="main__GRADE__content__hero pb-5">
              <div className="pt-5 pb-5">
                <h1 className="content__title__hero">Sponsored</h1>
              </div>
              <Row>
                {esportlogouimage.map((logovalidasi) => {
                  return (
                    <Col sm key={logovalidasi} className="body__sponsored">
                      <div className="wrap__logo">
                      <img src={logovalidasi.image} alt="raze" className="card-imt-top" width="100px" />
                      <a onClick={() => navigate('example')}><h3>{logovalidasi.title}</h3></a>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Homepages;
