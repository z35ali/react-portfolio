import React from 'react'
import PropTypes from 'prop-types'
import ProjectsItem from './ProjectItem'

const Projects = ({ projects, github }) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects && (
        <div className="row">
          {projects.map((obj) => {
            return (
              <ProjectsItem
                key={obj.id}
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                caption={obj.caption}
                description={obj.description}
                github={obj.github}
                demo={obj.demo}
              />
            )
          })}
        </div>
      )}
      <ul className="actions">
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Check Out All My Projects On GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}

Projects.displayName = 'Projects'
Projects.propTypes = {
  projects: PropTypes.array,
}

export default Projects
