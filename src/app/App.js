import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Masthead from '../components/masthead/Masthead.jsx'
import About from '../components/about/About.jsx'
import Skillset from '../components/skill-set/Skillset.jsx'
import WorkExperience from '../components/work-experience/WorkExperience.jsx'
import Projects from '../components/projects/Projects.jsx'
import GitHub from '../components/my-git-hub/GitHub.jsx'
import Contacts from '../components/contacts/Contacts.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <main>
          <Navbar />
          <Masthead />
          <About />
          <Skillset />
          <WorkExperience />
          <Projects />
          <GitHub />
          <Contacts />
        </main>
      </Route>
      <Route exact path="/timesheetevo" render={() => (window.location = "http://timesheetevo.it:8080")} />
    </Router>
  );
}

// TODO:
// Make Timesheet evo and Portfolio running on the same Server
// Workaround: marcofurone.com = Portfolio
//             marcofurone.com/timesheetevo = redirects to www.timesheetevo.it:8080

export default App;
