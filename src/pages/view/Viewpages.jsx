import { Container, Row, Col } from "react-bootstrap";

import "./viewpages.css";

import {
  viewimagebegginer,
  viewimagelargemaster,
  viewimagelargeprematur,
  viewimagelargevip,
  viewimagemaster,
  viewimageprematur,
  viewimagevip,
} from "../../data/viewdata";

function viewpages() {


  return (
    <>
      <div className="bg__view">
        <Container className="Container__view ">
        <Container fluid>
          <div className="warp__grade">
            <Row className="wrap__title__row">
              <Col className="warp__title__hero">
                <div className="title__grade__hero">
                  <h1>VIP</h1>
                </div>
              </Col>
            </Row>
            <Row className="wrap__image">
              {viewimagevip.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="wrap__image">
              {viewimagelargevip.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="warp__grade">
            <Row className="wrap__title__row">
              <Col className="warp__title__hero">
                <div className="title__grade__hero">
                  <h1>MASTER</h1>
                </div>
              </Col>
            </Row>
            <Row className="wrap__image">
              {viewimagemaster.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="wrap__image">
              {viewimagelargemaster.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="warp__grade">
            <Row className="wrap__title__row">
              <Col className="warp__title__hero">
                <div className="title__grade__hero">
                  <h1>BEGGINER</h1>
                </div>
              </Col>
            </Row>
            <Row className="wrap__image">
              {viewimagebegginer.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="wrap__image">
              {viewimagelargemaster.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="warp__grade">
            <Row className="wrap__title__row">
              <Col className="warp__title__hero">
                <div className="title__grade__hero">
                  <h1>PREMATUR</h1>
                </div>
              </Col>
            </Row>
            <Row className="wrap__image">
              {viewimageprematur.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="wrap__image">
              {viewimagelargeprematur.map((viewval) => {
                return (
                  <Col key={viewval} className="image__section p-1">
                    <img
                      src={viewval.image}
                      alt={viewval.alt}
                      className="card-img-top"
                    />
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

export default viewpages;
