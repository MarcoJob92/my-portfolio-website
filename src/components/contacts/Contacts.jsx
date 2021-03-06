import React from 'react';
import text from './contacts.json'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Element } from 'react-scroll'

function Contacts (props) {
  return (
    <Element name="contacts" class="contacts bg-light">
      <Container>
        <div className="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
        </div>
        <Row>
          {text.contacts.map(({img, contact, type}) =>
            <Col xs={4} className="text-center">
              <img alt="contacts" src={img} height="75px" />
              <b>{contact}</b>
              {type === "button" &&
                <Button variant="outline-dark">Download CV</Button>}
            </Col>
          )}
        </Row>
      </Container>
    </Element>
  )
}

export default Contacts;
