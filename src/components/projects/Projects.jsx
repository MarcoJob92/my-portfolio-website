import React from 'react';
import './style/Projects.css'
import text from './projects.json'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'react-bootstrap'

function Projects (props) {
  return (
    <section class="projects bg-light">
      <Container>
        <div class="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
            <h3 class="section-subheading">{text.subtitle}</h3>
        </div>
        <div>
          <Row>
            <Col xs={6}>
              <div>
                {text.description.map(paragraph =>
                  <p>{ReactHtmlParser(paragraph)}</p>
                )}
              </div>
            </Col>
            <Col xs={6} className="img-container">
              <img alt="Timesheet evo" src="timesheet-screen-3.png" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Projects;
