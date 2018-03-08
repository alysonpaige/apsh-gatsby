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
          <p>I'm a highly organized and hard working professional and am extremely responsible with a demonstrated ability to commit to projects from beginning to end. I have enthusiasm and passion for my work with a strength in analyzing issues and resolving challenging problems. I strive to create trust and build lasting relationships, both personally and professionally. I have strong leadership capabilities as well as communication skills in both English &amp; Spanish, allowing for successful interaction with people of diverse backgrounds, cultures and professional levels.</p>
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
          <p>Over the years, I've had the pleasure of working on many great projects with wonderful people and companies.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
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
          <p>I'm Alyson Paige, a full stack web developer based in DC. I currently work for a nonprofit and love to learn from the community and share what I know through meetups, discussion boards and volunteering.</p>
          <p>When I'm not burried in code, I love spending time with my husband and reading, hiking, cycling, travelling and watching Netflix and soccer. Did I mention soccer? I love soccer.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
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