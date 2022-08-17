import React from 'react';
import text from './gitHub.json'
import ReactHtmlParser from 'react-html-parser'
import { Element } from 'react-scroll'

function GitHub (props) {
  return (
    <section class="git-hub">
      <Element name="git-hub" className="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
        </div>
        <div>
          {text.description.map(paragraph =>
            <p>{ReactHtmlParser(paragraph)}</p>
          )}
        </div>
      </Element>
    </section>
  )
}

export default GitHub;
