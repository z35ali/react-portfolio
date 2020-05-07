import React from 'react'

import Footer from './Footer'
import avatar from '../../public/images/avatar.jpg'

import Navigation from './Navigation'

const Header = (props) => (
  <>
    <Navigation />

    <header
      id="header"
      style={{
        zIndex: 1,
        backgroundImage:
          "url('../images/overlay.png'), url('../images/bg.jpg')",
      }}
    >
      <div className="inner">
        <a href="#about" className="image avatar">
          <img src={avatar} alt="" />
        </a>
        <h1>
          <strong>I'm {props.mainData.name}</strong>
        </h1>
        <h1>{props.mainData.title}</h1>
        <h5>{props.mainData.subtitle}</h5>
      </div>

      <Footer mainData={props.mainData} />
    </header>
  </>
)

export default Header
