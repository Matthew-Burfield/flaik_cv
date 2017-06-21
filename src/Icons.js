import React from 'react'
import './Icons.css'
import {
  reactLogo,
  cssLogo,
  htmlLogo,
  javascriptLogo,
  nodejsLogo,
  reactRouterLogo,
  reduxLogo,
  webpackLogo,
  babelLogo
} from './icons/index'

export const Icons = (props) => (
  <section className="footer">
    <div><h3>My favourite technologies I like to work with</h3></div>
    <div className="icon-container">
      <div className="tech-icon react">
        {reactLogo}
        <span>React</span>
      </div>
      <div className="tech-icon css">
        {cssLogo}
        <span>CSS3</span>
      </div>
      <div className="tech-icon html">
        {htmlLogo}
        <span>HTML5</span>
      </div>
      <div className="tech-icon javascript">
        {javascriptLogo}
        <span>JavaScript</span>
      </div>
      <div className="tech-icon nodejs">
        {nodejsLogo}
        <span>Node.js</span>
      </div>
      <div className="tech-icon react-router">
        {reactRouterLogo}
        <span>React Router</span>
      </div>
      <div className="tech-icon redux">
        {reduxLogo}
        <span>Redux</span>
      </div>
      <div className="tech-icon webpack">
        {webpackLogo}
        <span>Webpack</span>
      </div>
      <div className="tech-icon babel">
        {babelLogo}
        <span>Babel</span>
      </div>
    </div>
  </section>
)
