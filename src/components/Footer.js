import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://github.com/z35ali"
            target="_blank"
            rel="noopener noreferrer"
            className="icon fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/zafar-ali-a7a512128/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:zafar.a.ali2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon fa-envelope-o"
          >
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://developingmindset.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon fa-newspaper-o"
          >
            <span className="label">Blog</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Zafar Ali 2020</li>
        <li>Designed with Gatsby and React</li>
      </ul>
    </div>
  </div>
)

export default Footer
