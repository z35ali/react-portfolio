import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { status: false }
  }
  submitForm = (ev) => {
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
    const { contactTitle, contactMessage, address, email } = this.props.contact
    const { status } = this.state
    return (
      <section id="contact">
        <h2>{contactTitle}</h2>
        <p>{contactMessage}</p>
        <div className="row">
          <div className="8u 12u$(small)">
            <form
              method="post"
              action={process.env.GATSBY_FORM_URL}
              onSubmit={(e) => this.submitForm(e)}
            >
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
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
                  Ooops! There was an error. Make sure all fields are filled.
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
                {address.city}, {address.province}
                <br />
                {address.country}
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
                {email}
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
