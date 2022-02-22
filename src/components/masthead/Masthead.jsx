import React from 'react';
import './style/Masthead.css'
import Container from 'react-bootstrap/Container';
import text from './masthead.json'
import { scroller } from 'react-scroll'

function Masthead (props) {
  return (
    <header class="masthead">
        <Container>
            <div class="masthead-heading text-uppercase">{text.name}</div>
            <div class="masthead-subheading">{text.subheading}</div>
            <a href class="btn text-uppercase"
               onClick={() => scroller.scrollTo("about-me", {smooth: 'easeInOutQuart'})}>
                {text.button}
            </a>
        </Container>
    </header>
  )
}

export default Masthead;
