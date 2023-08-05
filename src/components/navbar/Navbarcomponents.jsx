import { Navbar, Container, Offcanvas, Nav, } from "react-bootstrap";

import "./navbar.css";

import { loginregistdatas, navbardatas } from "./data";

import { useNavigate } from 'react-router-dom'



function Navbarcomponents()  {

  const navigate = useNavigate()


  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="background__navbar "
        >
          <Container fluid>
            <Navbar.Brand onClick={() => navigate('/') }>
              <span className="warnet__logo__hero ">WARNET.ID</span>
            </Navbar.Brand>
            <Navbar.Toggle className="bg-white" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="warnet__logo__hero__canvas" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  WARNET.ID
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ps-3 pe-3">
                  {navbardatas.map((navinteger) => {
                    return (
                      <div key={navinteger}>
                        <Nav.Item className="navlinks__hero" href="#action1">
                          <a onClick={() => navigate(navinteger.path)} className="btn btn-outline-success border-0 btn__navbar__hero">
                            {navinteger.text}
                          </a>
                        </Nav.Item>
                      </div>
                    );
                  })}
                </Nav>
                <Nav className="justify-content-end  ">
                  {loginregistdatas.map((navstring) => {
                    return (
                      <div className="loginregister__navlink__hero " key={navstring}>
                        <Nav.Item href="#action1">
                          <a onClick={() => navigate(navstring.path)} className="btn btn-outline-success btn__navbar__hero">
                            {navstring.text}
                          </a>
                        </Nav.Item>
                      </div>
                    )
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarcomponents;
