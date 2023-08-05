import { Container, Card, Row, } from "react-bootstrap";

import "./shoppages.css";

import { foodlist, drinklist } from "../../data/datashop.js";

function Shoppages() {
  return (
    <>
      <div className="bg__shop">
        <Container>
          <Container fluid>
            <div className="container__body__shop">
              <div className="border__title">
                <h1 className="title__shop__hero">
                  LAPER? JAJAN DI SHOP WARNET.ID{" "}
                </h1>
                <p>
                  NOTED : Anda dapat memesankan dan melakukan pembayaran di
                  tempat, ini hanya untuk memesan dan menukar qr code
                </p>
              </div>
              <div className="makanan__body">
                <h3>MAKANAN :</h3>
                <Row>
                  {foodlist.map((shopval) => {
                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4 p-3 col-xl-3 d-flex flex-column "
                        key={shopval}
                      >
                        <a href="" className="link__text">
                          <Card className="card__body__content">
                            <Card.Body className="">
                              <div className="card__body__text">
                                <Card.Title className="text__card__shop">
                                  {shopval.title}
                                </Card.Title>
                                <Card.Text className="text__card__shop">
                                  {shopval.text}
                                </Card.Text>
                              </div>
                              <div className="card__body__button ">
                                <a href="" className="btn btn-success">
                                  Pesan
                                </a>
                                <p>{shopval.price}</p>
                              </div>
                            </Card.Body>
                          </Card>
                        </a>
                      </div>
                    );
                  })}
                </Row>
              </div>
              <div className="minuman__body">
                <h3>MINUMAN :</h3>
                <Row>
                  {drinklist.map((shopval) => {
                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4 p-3 col-xl-3 "
                        key={shopval}
                      >
                        <a href="" className="link__text">
                          <Card className="card__body__content">
                            <Card.Body>
                              <div className="card__body__text">
                                <Card.Title className="text__card__shop">
                                  {shopval.title}
                                </Card.Title>
                                <Card.Text className="text__card__shop">
                                  {shopval.text}
                                </Card.Text>
                              </div>
                              <div className="card__body__button">
                                <a href="" className="btn btn-success">
                                  Pesan
                                </a>
                                <p>{shopval.price}</p>
                              </div>
                            </Card.Body>
                          </Card>
                        </a>
                      </div>
                    );
                  })}
                </Row>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Shoppages;
