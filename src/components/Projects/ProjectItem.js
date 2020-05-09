import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const ProjectsItem = ({
  id,
  thumbnail,
  caption,
  description,
  github,
  demo,
}) => {
  useCallback()

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a
        className="image fit thumb"
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={thumbnail} alt={caption} />
      </a>

      <h4 className="project-caption">{caption}</h4>

      <h5>
        <a
          className="github"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </h5>
    </article>
  )
}

ProjectsItem.displayName = 'ProjectsItem'
ProjectsItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
}

export default ProjectsItem
