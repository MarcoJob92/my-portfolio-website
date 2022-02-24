import React from 'react'
import './style/About.css'
import Container from 'react-bootstrap/Container'
import ReactHtmlParser from 'react-html-parser'
import text from './about.json'

function About (props) {
  return (
    <section class="about-me">
      <Container>
        <div class="text-center mb-4">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
            <img alt="about-me" src="administrator-male.png" height="120" />
        </div>
        <div>
          <h5>{text.descriptionHeading}</h5>
          {text.description.map(desc =>
            <div className="mb-3"> {ReactHtmlParser(desc)} </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default About;