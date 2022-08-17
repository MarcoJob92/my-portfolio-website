import React from 'react'
import text from './contacts.json'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Contacts (props) {
  const DownloadCV = () =>
      <a href="CV_Marco_Furone_Full-stack.pdf" download="Marco_Furone_CV">
        <Button variant="outline-dark">Download CV</Button>
      </a>

  return (
    <section class="contacts bg-light">
      <Container>
        <div className="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
        </div>
        <Row>
          {text.contacts.map(({img, contact, type}) =>
            <Col xs={4} className="text-center">
              <img alt="contacts" src={img} height="75px" />
              <b>{contact}</b>
              { type === "button" && <DownloadCV/> }
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Contacts;
