import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>{"I'm highly organized, hard working, and an extremely responsible professional with a demonstrated ability to commit to projects. I have enthusiasm and passion for my work with a strength in analyzing issues and resolving challenging problems. I strive to create trust and build lasting relationships, both personally and professionally. I also have strong leadership capabilities as well as communication skills in both English & Spanish, allowing for successful interaction with people of diverse backgrounds, cultures and professional levels."}</p>
          <p>
          <strong>Core Languages &amp; Skills:</strong>
          <br />
          HTML5, CSS3, Javascript, Ruby
          <br />
          Git, Github, Algorithms, APIs, Mobile &amp; Responsive Design
          </p>
          <p>
          <strong>Libraries, Tools &amp; Software:</strong>
          <br />
          jQuery, Bootstrap, Foundation, Ruby on Rails, WordPress, React.js 
          <br />
          Heroku, Netlify, Slack, Trello
          <br />
          Microsoft Office, Photoshop, Illustrator
          </p>
          <p>
          <strong>Marketing:</strong>
          <br />
          SEO, Google Analytics, Social Media
          </p>
          <hr />
          <ul className="icons">
              <li><a href="https://www.linkedin.com/in/alysonstiffel/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://github.com/alysonpaige" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>{"Over the years, I've had the pleasure of working on many great projects with wonderful people and companies."}</p>
          <h3>{"Projects:"}</h3>
          <p><strong>{"To Do List: "}</strong> {"A dynamic, database-driven web app that fetches data using RESTful JSON APIs from Rails and uses JavaScript to dynamically update the page."}</p>
          <p><strong>{"Grammable: "}</strong> {"An Instagram clone built using automated software tests (TDD) in Ruby with RSpec."}</p>
          <p><strong>{"Flixter: "}</strong> {"A two sided video streaming marketplace platform, featuring credit card payment capabilities, user role management, complex user interfaces and advanced database relationships."}</p>
          <p><strong>{"Nomster: "}</strong> {"A Yelp clone that integrates with Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication."}</p>
          <p><strong>{"Splurty: "}</strong> {"A database-powered quote generator with mobile-first design, using the Ruby on Rails framework, HTML and CSS."}</p>
          <h3>{"Open Source Contributions:"}</h3>
          <p><em>{"Coming Soon"}</em></p>
          {/* <p>{"Gatsby Documentation"}</p>
          <p>{"CodeBuddies"}</p>
          <p>{"Gitcoin"}</p> */}
          <hr />
          <ul className="icons">
              <li><a href="https://www.linkedin.com/in/alysonstiffel/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://github.com/alysonpaige" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>{"I'm Alyson Paige, a full stack web developer based in DC. I've always had a soft spot for technology. A few years ago, I saw an opportunity for personal growth and to enhance my knowledge in an industry that I love but which is rapidly changing and growing. I enjoy learning from the community and sharing what I know through meetups, discussion boards and volunteering."}</p>
          <p>{"When I'm not burried in code, I love spending time with my husband and doing the following:"}</p>
          <ul>
            <li>
              Reading
            </li>
            <li>
              Travelling
            </li>
            <li>
              Soccer
            </li>
            <li>
              Listening to podcasts and audiobooks
            </li>
            <li>
              Cycling &amp; hiking
            </li>
            <li>
              {"Sleeping (highly recommend this activity)"}
            </li>
            <li>
              Watching Netflix and soccer
            </li>
          </ul>
          <p>Did I mention soccer? I love soccer.</p>

          {/* <p>{"PS. You might be wondering what the 'sh' stands for. It's the initials of my maiden and married name. They're both a little long and difficult to pronounce and I've always gone by my first and middle anyway."}</p> */}

          <hr />
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/alysonstiffel/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/alysonpaige" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="Share a joke or just get in touch and say hello..." required></textarea>
            </div>
            <div data-netlify-recaptcha></div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <hr />
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/alysonstiffel/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/alysonpaige" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main