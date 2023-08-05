
import "./loading.css"

import {Container, Spinner} from 'react-bootstrap'



function Loading() {

  return (
    <>
            <div className="bg__view">
          <Container>
            <Container fluid>
              <div className="height__border">
                <div className="loading__moment">
                  <Spinner animation="border" variant="success" />
                </div>
              </div>
            </Container>
          </Container>
        </div>
    </>
  )
}

export default Loading