import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import { Icons } from './Icons'
import { IconsPage } from './IconsPage'
import { Header } from './Header'
import Item from './Item';
// import { CoderDojo } from './images/CoderDojo'
import './MainPage.css'

export class MainPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      sidebarContent: <div></div>
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    // this.paneDidMount = this.paneDidMount.bind(this)
  }

  // paneDidMount (node) {
  //   if (node) {
  //     node.addEventListener('scroll', () => console.log('scroll!'))
  //   }
  // }

  onSetSidebarOpen (sidebarOpen, sidebarContent) {
    this.setState({
      sidebarOpen,
      sidebarContent
    })
  }

  render () {
    return (
      <Sidebar
        sidebar={this.state.sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight
      >
        <div className="App">
          <div className="page1">
            <div className="container">
              <Header
                fontColor='#fff'
                borderColor='rgba(255, 255, 255, .3)'
                onSetSidebarOpen={this.onSetSidebarOpen}
              />
              <section className="content">
                <h1>Enthusiastic Frontend Developer.</h1>
                <h2>I build cool shit.</h2>
              </section>
              <Icons />
            </div>
          </div>
          <IconsPage />
          <div className="page2">
            <div className="container">
              <div className="content">
                <section className="category experience">
                  <h2 className="category-title">Experience</h2>
                  <Item
                    companyTitle='flaik'
                    jobTitle='React Frontend Developer'
                    date='Jul 2017 - current'
                    techStack='JavaScript (ES6), React, Redux, Flow, ImmutableJS, '
                    jobDetails={[
                      'Small dynamic cross functional teams meant I was highly involved in decision making processes, dev checkins and working closely with designers.',
                      'Championed for implementing an automated testing suite using Jest and Cypress.io.',
                    ]}
                  />
                  <Item
                    companyTitle='Tanda Hackathon Winner'
                    jobTitle='Full Stack Developer'
                    date='Apr 19-22 2018'
                    techStack='NodeJS, Javascript, Zapier, Chat bot, Tanda API'
                    jobDetails={[
                      'Built a Facebook chat bot that integrated with the Tanda API to provide useful data to their customers employees (shift workers).',
                      'Presented the app infront of the crowd and judges receiving really positive feedback.',
                    ]}
                  />
                  <Item
                    companyTitle='Digital8'
                    jobTitle='React Frontend Developer'
                    date='Jun 2017 - Jul 2017'
                    techStack='JavaScript (ES6), SASS, React, Redux'
                    jobDetails={[
                      'Was brought in to finish off a project that was under a tight deadline.',
                      'Started with a single trial day to see if I could be productive from day one.',
                      'Now working with the front end team to get this project over the line ASAP.',
                    ]}
                  />
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Givebackathon</h3>
                      <span className="item-personal-title">Developer</span>
                    </div>
                    <div className="item-date">May 20-21 2017</div>
                    <p className="item-key-tech">HTML, CSS, React, Powerpoint</p>
                    <div className="coder-dojo-container">
                      <ul className="item-personal-details">
                        <li>I built an app to help one of the charities (First Nation) fix the financial literacy problem within the aboriginal community in Australia.</li>
                        <li>Our app even got featured on <a href="https://www.youtube.com/watch?v=2lnZB_1KfWE">NITV news</a>.</li>
                        <li>We won an XBox for winning the best hustlers award.</li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Career Break/Travel</h3>
                      <span className="item-personal-title">Nomad</span>
                    </div>
                    <div className="item-date">Nov 2015 - Nov 2016</div>
                  </div> */}
                  <Item
                    companyTitle='uniDap Solutions'
                    jobTitle='Solutions Configurer'
                    date='Sep 2009 - Nov 2015'
                    techStack='MSSQL, VBScript, XML, XSLT, IIS6/7'
                    jobDetails={[
                      'uniDap solutions is an information solutions company, that delivers enterprise level, workflow driven database applications to government, not-for-profit and enterprise sectors.',
                      'My primary focus was configuring the web application for the Duke of Edinburgh’s award. An online web application that served over 300,000 users globally, allowing participants to manage their award data, as well as giving administrators reporting functionality.',
                      'I was the first point of contact to develop new features, fix issues, and ensure the system kept operating smoothly.',
                    ]}
                  />
                  <div className="page-break"></div>
                </section>

                <section className="category education">
                  <h2 className="category-title">Education</h2>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Masters in Information Technology</h3>
                      <span className="item-personal-title">Queensland University of Technology (QUT)</span>
                    </div>
                    <div className="item-date">2009 - 2010</div>
                  </div>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Bachelor in Applied Science (Physics)</h3>
                      <span className="item-personal-title">Queensland University of Technology (QUT)</span>
                    </div>
                    <div className="item-date">2006 - 2008</div>
                  </div>
                  <div className="page-break"></div>
                </section>

                <section className="category community">
                  <h2 className="category-title">Volunteer</h2>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Coder Dojo</h3>
                      <span className="item-personal-title">Mentor</span>
                    </div>
                    <div className="item-date">May 2017 - Current</div>
                    <div className="coder-dojo-container">
                      <ul className="item-personal-details">
                        <li>Coder Dojo is a friendly environment for kids to learn how to code, lead by volunteers</li>
                        <li>I started attending Coder Dojo as a mentor last month, and really enjoy teaching kids how to code</li>
                        <li>I'll teach whatever the individual child wants to learn, which so far has been scratch, python and JavaScript</li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Free Code Camp Brisbane</h3>
                      <span className="item-personal-title">Administrator</span>
                    </div>
                    <div className="item-date">Mar 2017 - Current</div>
                    <ul className="item-personal-details">
                      <li>As an administrator of the group, I help to schedule and facilitate Saturday morning meetings where students of Free Code Camp in South Brisbane get together in a friendly environment to discuss their programming challenges and collaborate together on new and exciting projects.</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Chungu Cohort - Developer Community</h3>
                      <span className="item-personal-title">Queensland University of Technology (QUT)</span>
                    </div>
                    <div className="item-date">Apr 2017 - Current</div>
                    <ul className="item-personal-details">
                      <li>Chingu is a community of emerging motivated developers</li>
                      <li>We spawn small teams in order to build awesome stuff and learn, and help each other out with problems/motivation etc</li>
                      <li>It’s been really good for me as I’ve teamed up with other developers from all over the world to build some cool stuff like a slack bot that shows random funny gifs to the team, a slack bot that allows you to easily invite heaps of people into a private channel, and a mario super bros clone</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="target-border">
                      <div className="target-dot"></div>
                    </div>
                    <div className="titles">
                      <h3 className="item-company-title">Duke of Edinburgh's Award</h3>
                      <span className="item-personal-title">International Council Member</span>
                    </div>
                    <div className="item-date">Nov 2014 - Current</div>
                    <ul className="item-personal-details">
                      <li>Elected by my peers as one of only two participants to represent the Asia Pacific region on the council</li>
                      <li>Presented Leadership talk in front of an audience of 100, including HRH Prince Edward, Earl of Wessex and received amazingly positive feedback.</li>
                      <li>Was MC for Asia Pacific regional dinner in Hong Kong.</li>
                    </ul>
                  </div>
                  <div className="page-break"></div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    )
  }
}
