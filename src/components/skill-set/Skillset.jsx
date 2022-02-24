import React from 'react'
import './style/Skillset.css'
import Container from 'react-bootstrap/Container'
import text from './skillset.json'

function Skillset (props) {
  const SkillBar = ({skill, score}) => {
    return (
      <>
        <label>{skill}</label>
        <div class="skill-bar">
          {Array(score).fill().map(i =>
            <div class="skill-rate on"></div>
          )}
          {Array(10 - score).fill().map(i =>
            <div class="skill-rate off"></div>
          )}
        </div>
      </>
    )
  }

  return (
    <section class="skillset bg-light">
      <Container>
        <div class="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
        </div>
        <div>
          {text.skills.map(skill =>
            <SkillBar skill={skill.name} score={skill.score} />
          )}
        </div>
      </Container>
    </section>
  )
}

export default Skillset;