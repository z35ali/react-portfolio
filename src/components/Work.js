import React from 'react'

export default function Work(props) {
  const { work } = props.resume
  return (
    <section id="work">
      <h2>Work</h2>
      {work.map((work, i) => {
        return (
          <div key={i}>
            <span>
              <h4>{work.company}</h4>
              <h5>
                {work.title} | {work.years}
              </h5>
            </span>
            <ul>
              {work.descriptions.map((description, i) => {
                return <li key={i}>{description}</li>
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
