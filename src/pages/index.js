import React, { Component } from 'react'
import Helmet from 'react-helmet'
import $ from 'jquery'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Layout from '../components/layout'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
    }
  }
  componentDidMount() {
    this.getResumeData()
  }
  getResumeData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
        alert(err)
      },
    })
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
    const { status, resumeData } = this.state
    console.log(resumeData)
    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        {resumeData ? (
          <>
            <Header
              mainData={resumeData.main}
              avatar={resumeData.main.avatar}
            />
            <div id="main">
              <section id="about">
                <h2>About Me</h2>

                <p>{resumeData.main.about}</p>
                <p>{resumeData.main.hobbies}</p>
                <ul className="actions">
                  <li>
                    <a
                      href={resumeData.main.resumeView}
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
                {resumeData.resume.education.map((education, i) => {
                  return (
                    <>
                      <span>
                        <h4>{education.school}</h4>
                        <h5>{education.degree}</h5>
                      </span>
                      <ul>
                        {education.descriptions.map((description, i) => {
                          return <li>{description}</li>
                        })}
                      </ul>
                      {education.diploma ? (
                        <ul className="actions">
                          <li>
                            <a
                              href={education.diploma}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button"
                            >
                              See Diploma
                            </a>
                          </li>
                        </ul>
                      ) : null}
                    </>
                  )
                })}
              </section>
              <section id="work">
                <h2>Work</h2>

                {resumeData.resume.work.map((work, i) => {
                  return (
                    <>
                      <span>
                        <h4>{work.company}</h4>
                        <h5>
                          {work.title} | {work.years}
                        </h5>
                      </span>
                      <ul>
                        {work.descriptions.map((description, i) => {
                          return <li>{description}</li>
                        })}
                      </ul>
                    </>
                  )
                })}
              </section>

              <section id="skills">
                <h2>Skills</h2>

                <div className="skills">
                  {resumeData.resume.skills.map((skill, i) => {
                    return (
                      <>
                        <h4>{skill.type}</h4>
                        <p>
                          {skill.subSkills.map((subSkills, i) => {
                            return (
                              <a
                                href={`https://github.com/z35ali?tab=repositories&q=${subSkills.name
                                  .split('and')
                                  .join('OR')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {subSkills.name}
                              </a>
                            )
                          })}
                        </p>
                      </>
                    )
                  })}
                </div>
              </section>

              <section id="projects">
                <h2>Projects</h2>

                <Projects projects={resumeData.projects} />

                <ul className="actions">
                  <li>
                    <a
                      href={resumeData.main.contact.github}
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
                <h2>{resumeData.main.contact.contactTitle}</h2>
                <p>{resumeData.main.contact.contactMessage}</p>
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
                        {resumeData.main.contact.address.city},{' '}
                        {resumeData.main.contact.address.province}
                        <br />
                        {resumeData.main.contact.address.country}
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
                        {resumeData.main.contact.email}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : null}
      </Layout>
    )
  }
}
