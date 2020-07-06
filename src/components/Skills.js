import React from 'react'

export default function Skills(props) {
  const { skills } = props.resume
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, i) => {
          return (
            <div className="skill" key={i}>
              <h4>{skill.type}</h4>
              {skill.subSkills.map((subSkills, i) => {
                return !(skill.type === 'Knowledge') ? (
                  <p>
                    <a
                      href={`https://github.com/zafaraali?tab=repositories&q=${subSkills.name
                        .split('and')
                        .join('OR')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                    >
                      {subSkills.name}
                    </a>
                  </p>
                ) : (
                  <p>{subSkills.name}</p>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
