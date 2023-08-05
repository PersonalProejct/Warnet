import { Container, Row, Col, Card } from "react-bootstrap";

import "./newspages.css";

function Newspages() {
  return (
    <>
      <div className="bg__news">
        <Container>
          <Container>
            <Row className="row-cols-1 row-cols-md-2 g-4 d-flex ms-auto">
              <div className="col-12 col-md-6 col-lg-4 p-3 col-xl-4 d-flex flex-column ">
                <Card className="p-2 d-flex">
                  <div className="border__box__title">
                    <h3>Event Warnet.id</h3>

                  </div>
                  <div>
                    <ul className=" main__list__news ">
                      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas ratione veritatis, ipsam repudiandae quaerat porro nisi, harum debitis laboriosam officia natus magnam iusto praesentium at! Repellendus blanditiis obcaecati mollitia?</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem provident voluptate perspiciatis consectetur sint voluptatum ullam non, minus odio, rem adipisci id natus, ipsam vero iste fugit dolor vel voluptatem.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nulla fugiat? Mollitia aut itaque eveniet quam hic architecto quae reprehenderit, possimus, provident cum molestias ea, eaque voluptatum perspiciatis voluptatibus temporibus!</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto excepturi veritatis distinctio dolor inventore recusandae consequatur, nisi eligendi explicabo veniam earum assumenda aliquam voluptatum suscipit incidunt cupiditate rerum hic?</li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div className="col-12 col-md-6 col-lg-8 p-3 col-xl-8 d-flex flex-column ">
                <Card className="p-2 d-flex">
                  <div className="border__box__title">
                    <h3>Berita Terbaru</h3>
                  </div>
                  <div>
                    <ul className="main__list__news ">
                      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas ratione veritatis, ipsam repudiandae quaerat porro nisi, harum debitis laboriosam officia natus magnam iusto praesentium at! Repellendus blanditiis obcaecati mollitia?</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem provident voluptate perspiciatis consectetur sint voluptatum ullam non, minus odio, rem adipisci id natus, ipsam vero iste fugit dolor vel voluptatem.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nulla fugiat? Mollitia aut itaque eveniet quam hic architecto quae reprehenderit, possimus, provident cum molestias ea, eaque voluptatum perspiciatis voluptatibus temporibus!</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto excepturi veritatis distinctio dolor inventore recusandae consequatur, nisi eligendi explicabo veniam earum assumenda aliquam voluptatum suscipit incidunt cupiditate rerum hic?</li>
                      
                    </ul>
                  </div>
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Newspages;
