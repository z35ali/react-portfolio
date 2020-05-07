import React from 'react'

export default function About(props) {
  const { about, hobbies, resumeView } = props.data
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{about}</p>
      <p>{hobbies}</p>
      <ul className="actions">
        <li>
          <a
            href={resumeView}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </section>
  )
}
