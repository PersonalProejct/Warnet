import { Container, Row, Col, Alert, Button} from "react-bootstrap";

import {useState, useEffect} from 'react'

import "./bookingpages.css";

import bookingvip from "../../data/bookingfitur.js";

import { useNavigate } from 'react-router-dom'

function Bookingpages() {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);


  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>

    
    
    <div className="bg__booking">
        <Container>
        <Alert show={show} variant="danger">
        <Alert.Heading>Ruangan Penuh!!</Alert.Heading>
        <p>
           Mohon maaf, ruangan sangat penuh anda bisa mencobanya lain waktu terimakasih !!!
        </p>

        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            kembali
          </Button>
        </div>
      </Alert>
      <p className="clock__section">{
        `Time : ${currentTime.toLocaleTimeString()}`
      }
        </p>
          <Container fluid>
            <div className="body_wrap">
              {bookingvip.map((val) => {
                return (
                  <Row className="body__border__box" key={val}>
                    <Col xs={4} md={2} className="wrap__text__title">
                      <div className="gradeuser__body__hero">
                        <span>
                          <h5>{`${val.title} USER`}</h5>
                        </span>
                      </div>
                    </Col>
                    <Col
                      xs={8}
                      md={10}
                      lg={10}
                      xl={10}
                      className="wrap__indicator__border"
                    >
                      <div className="indicator__body__hero ">
                        <ul className="list__indicator__hero">
                          <li className="wrap__user">
                            Online : <span className="online__user">{val.online}</span>
                          </li>
                          <li className="wrap__user">
                            Waiting : <spa className="waiting__user">{val.waiting}</spa>
                          </li>
                          <li className="wrap__user">
                            {val.online >= 50 ? 
                            <a className="btn btn-danger" onClick={() => setShow(true)}>FULL</a> 
                            : 
                            <a className="btn btn-success" onClick={() => navigate(val.path)}>pesan</a>
                            }
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Container>
        </Container>
      </div>
      
    </>
  );
}

export default Bookingpages;
