import React from 'react';
import './style/Navbar.css'
import navItems from './navbar.json'
import Container from 'react-bootstrap/Container'
import { animateScroll as scroll, scroller } from 'react-scroll'

function Navbar (props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollToSection = id => {
    scroller.scrollTo(id, {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -74
    });
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <Container>
        <a href class="navbar-brand js-scroll-trigger" onClick={scrollToTop}>MARCO FURONE</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav text-uppercase ml-auto">
            {navItems.map(item =>
              <li class="nav-item">
                <a href class="nav-link js-scroll-trigger" onClick={() => scrollToSection(item.className)}>
                  {item.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar;
