import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '.././assets/scss/navbar.scss'
export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navExpanded: false,
    }
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded })
  }

  closeNav = () => {
    this.setState({ navExpanded: false })
  }

  render() {
    return (
      <div className="bootstrap-nav">
        <Navbar
          bg="white"
          expand="lg"
          style={{
            boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)',
          }}
          className="navbar"
          onToggle={this.setNavExpanded}
          expanded={this.state.navExpanded}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav onSelect={this.closeNav} className="ml-auto">
              <Nav.Link className="nav-link" href="#about">
                About Me
              </Nav.Link>
              <Nav.Link className="nav-link" href="#education">
                Education
              </Nav.Link>
              <Nav.Link className="nav-link" href="#work">
                Work
              </Nav.Link>

              <Nav.Link className="nav-link" href="#skills">
                Skills
              </Nav.Link>

              <Nav.Link className="nav-link" href="#projects">
                Projects
              </Nav.Link>

              <Nav.Link className="nav-link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
