import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        {/* <p className="copyright">Built using <a href="https://github.com/ChangoMan/gatsby-starter-dimension">Dimension</a> starter with <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p> */}
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
