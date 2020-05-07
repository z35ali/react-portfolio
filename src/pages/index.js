import React, { Component } from 'react'
import Helmet from 'react-helmet'
import $ from 'jquery'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Layout from '../components/layout'
import About from '../components/About'
import Education from '../components/Education'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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

  render() {
    const { resumeData } = this.state

    return (
      <Layout>
        {resumeData ? (
          <>
            <Helmet>
              <title>{resumeData.main.siteTitle}</title>
              <meta
                name="description"
                content={resumeData.main.siteDescription}
              />
            </Helmet>
            <Header
              mainData={resumeData.main}
              avatar={resumeData.main.avatar}
            />
            <div id="main">
              <About data={resumeData.main} />

              <Education resume={resumeData.resume} />
              <Work resume={resumeData.resume} />

              <Skills resume={resumeData.resume} />

              <Projects
                projects={resumeData.projects}
                github={resumeData.main.contact.github}
              />

              <Contact contact={resumeData.main.contact} />
            </div>
          </>
        ) : null}
      </Layout>
    )
  }
}
