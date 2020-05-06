import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

import Navigation from './Navigation'

const Header = () => (
  <>
    <Navigation />
    <header id="header" style={{ zIndex: 2 }}>
      <div className="inner">
        <a href="#about" className="image avatar">
          <img src={avatar} alt="" />
        </a>
        <h1>
          <strong>I'm Zafar Ali</strong>
        </h1>
        <h1>Full Stack Web Developer</h1>
        <h5>Developing myself and my code!</h5>
      </div>

      <Footer />
    </header>
  </>
)

export default Header
