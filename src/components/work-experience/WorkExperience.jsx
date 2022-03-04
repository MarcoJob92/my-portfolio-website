import React from 'react';
import text from './workExperience.json'
import './style/WorkExperience.css'
import Container from 'react-bootstrap/Container'

function WorkExperience (props) {
  const Li = ({ job }) =>
    <li>
      <div class="timeline-image">
        <img class="rounded-circle img-fluid" src={job.img} alt="icon" />
      </div>
      <div class="timeline-panel">
        <h4>{job.date}</h4>
        <h6 class=""><b>{job.company}</b> | {job.location}</h6>
        <div class="description">
          {job.description.map(desc => 
            <div class="paragraph">{desc}</div>
          )}
        </div>
      </div>
    </li>

  return (
    <section class="work-experience">
      <Container>
        <div class="text-center">
            <h2 class="section-heading text-uppercase">{text.title}</h2>
        </div>
        <ul class="timeline">
          {text.timeline.map(job =>
            <Li job={job} />
          )}
        </ul>
      </Container>
    </section>
  )
}

export default WorkExperience;