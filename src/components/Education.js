import React from 'react'

export default function Education(props) {
  const { education } = props.resume
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((education, i) => {
        return (
          <div key={i}>
            <span>
              <h4>{education.school}</h4>
              <h5>{education.degree}</h5>
            </span>
            <ul>
              {education.descriptions.map((description, i) => {
                return <li key={i}>{description}</li>
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
          </div>
        )
      })}
    </section>
  )
}
