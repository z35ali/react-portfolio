import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
    }
  }

  submitForm = (ev) => {
    debugger
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
  render() {
    const siteTitle = "Zafar Ali's Portfolio"
    const siteDescription = "Zafar Ali's Portfolio"
    const { status } = this.state
    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="about">
            <h2>About Me</h2>

            <p>
              I'm a Toronto based Full Stack Developer who curiously strives to
              develop clean and readable code to solve problems. I love to turn
              ideas into reality through code. I have experience in Agile
              environments and a variety of languages and tools.
            </p>
            <p>
              My hobbies include going to the gym, coding, reading, and doing
              problem solving puzzles. My personality type is someone who is
              never satisfied and always feels a need to push myself!
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://drive.google.com/file/d/1MWtvwys9udVtRg8c7RHDXoruXBSUJX8V/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </section>

          <section id="education">
            <h2>Education</h2>

            <span>
              <h4>Ryerson University</h4>
              <h5>Bachelor's of Computer Science October 2019</h5>
            </span>
            <ul>
              <li>
                During my time at Ryerson, I worked on many group projects
                utilizing the agile manifesto and GIT in order to meet deadlines
                accordingly without sacrificing application functionality.
              </li>
            </ul>
            <ul className="actions">
              <li>
                <a
                  href="https://drive.google.com/open?id=1UTQrJQW6JnWItHGiaHlwraMG5cQoYqNZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  See Diploma
                </a>
              </li>
            </ul>
          </section>
          <section id="work">
            <h2>Work</h2>

            <span>
              <h4>meshMD</h4>
              <h5>Full Stack Developer February 2020 - Present</h5>
            </span>
            <ul>
              <li>
                Develop patient support program portals for pharmaceutical
                companies in Canada within the scopes of development and test
                environments using a C# backend and React front end.
              </li>
              <li>
                Collaborate with Project Managers, Design, and QA teams to
                ensure software validation and verification, creating issues on
                GitHub if fixes are necessary.
              </li>
              <li>
                Encapsulate all patient, clinic, and portal data within the
                circle of care in database and ensure authorized access.
              </li>
            </ul>
            <span>
              <h4>Hatch Coding</h4>
              <h5>
                Administrative Programming Coach September 2016 - February 2019
              </h5>
            </span>
            <ul>
              <li>
                Tutored students in JavaScript by developing projects, testing,
                and marking code.
              </li>
              <li>
                Guided assistant coaches in the right direction when teaching
                students.
              </li>
            </ul>
          </section>

          <section id="skills">
            <h2>Skills</h2>

            <h4>Frontend</h4>
            <div className="skills">
              <p>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=html+css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HTML and CSS
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=jquery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jquery
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=scss+OR+sass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCSS and SASS
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=bootstrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootstrap
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=material-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Material-UI
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </p>

              <h4>Servers and Databases</h4>
              <p>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=nodejs+OR+express"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NodeJS and Express
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=sqllite+OR+sql+OR+mysql"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SQL
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=mongodb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=firebase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=graphql"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GraphQL
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=strapi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strapi
                </a>
              </p>
              <h4>Backend</h4>
              <p>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=c%23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C#
                </a>
                <a
                  href="https://github.com/z35ali?tab=repositories&q=python"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python
                </a>
              </p>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>

            <Gallery />

            <ul className="actions">
              <li>
                <a
                  href="http://github.com/z35ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Check Out All My Projects On GitHub
                </a>
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2>Get In Touch</h2>
            <p>
              I would love to get in touch with you, feel free to send me an
              email!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  method="post"
                  action={process.env.GATSBY_FORM_URL}
                  onSubmit={(e) => this.submitForm(e)}
                >
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  {status === 'SUCCESS' ? (
                    <p className="form-submitted">Thanks!</p>
                  ) : (
                    <ul className="actions" style={{ marginTop: 30 }}>
                      <li>
                        <input type="submit" value="Send Message" />
                      </li>
                    </ul>
                  )}
                  {status === 'ERROR' && (
                    <p>
                      Ooops! There was an error. Make sure all fields are
                      filled.
                    </p>
                  )}
                </form>
              </div>
              <div className="4u 5u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Toronto, Ontario
                    <br />
                    Canada
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    Available upon request
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    zafar.a.ali2@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
