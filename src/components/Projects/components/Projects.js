import React from 'react'
import PropTypes from 'prop-types'
import ProjectsItem from './ProjectItem'

const Projects = ({ projects }) => {
  return (
    <div>
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
    </div>
  )
}

Projects.displayName = 'Projects'
Projects.propTypes = {
  projects: PropTypes.array,
}

export default Projects
