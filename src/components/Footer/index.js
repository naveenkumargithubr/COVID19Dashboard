import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <h1 className="footer-heading">COVID19INDIA</h1>
    <p className="footer-description">
      we stand with everyone fighting on the front lines
    </p>
    <div className="icons-bg-container">
      <VscGithubAlt className="icon" />
      <FiInstagram className="icon" />
      <FaTwitter className="icon" />
    </div>
  </div>
)

export default Footer
