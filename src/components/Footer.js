import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
import { SiCodepen } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='contact-footer'>
      <div className='contact-icons-box'>
        <a href='https://github.com/piracode'>
          <FaGithub className='contact-icon contact-icon-github' />
        </a>

        <a href='https://www.linkedin.com/in/marthavillamartin/'>
          <FaLinkedin className='contact-icon contact-icon-linkedin' />
        </a>

        <a href='https://codepen.io/piracode'>
          <SiCodepen className='contact-icon contact-icon-codepen' />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Martha Villa Martin</p>
    </div>
  )
}

export default Footer
