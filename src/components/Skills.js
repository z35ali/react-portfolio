import React from 'react'

export default function Skills(props) {
  const { skills } = props.resume
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, i) => {
          return (
            <div key={i}>
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
                      key={i}
                    >
                      {subSkills.name}
                    </a>
                  )
                })}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}