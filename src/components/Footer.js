import React from 'react'

const Footer = (props) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        {props.mainData.social.map((socialItem, i) => {
          return (
            <li key={i}>
              <a
                href={socialItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className={socialItem.className}
                title={socialItem.title}
              >
                <span className="label">{socialItem.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="copyright">
        <li>
          {props.mainData.name} {new Date().getFullYear()}
        </li>
        <li>
          <a
            href={props.mainData.websiteGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.mainData.websiteDesign}
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
