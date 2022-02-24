import React from 'react';
import text from './workExperience.json'
import './style/WorkExperience.css'
import Container from 'react-bootstrap/Container'

function WorkExperience (props) {
  const Li = ({ job }) => {
    return (
      <li>
        <div class="timeline-image">
          <img class="rounded-circle img-fluid" src={job.img} alt="" />
        </div>
        <div class="timeline-panel">
          <h4>{job.date}</h4>
          <h6 class=""><b>{job.company}</b> | {job.location}</h6>
          <p class="">{job.description}</p>
        </div>
      </li>
    )
  }

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
          <li>
            <div class="timeline-image">
              <img class="rounded-circle img-fluid" src="graduate-icon.png" alt="graduate" />
            </div>
            <div class="timeline-panel">
              <h4>March 2016</h4>
              <h6 class=""><b>Gratuated</b></h6>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default WorkExperience;