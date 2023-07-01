import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
import { SiCodepen } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='contact-footer'>
      <div className='contact-icons-box'>
        <a href='https://github.com/piracode' aria-label='GitHub Profile'>
          <FaGithub
            className='contact-icon contact-icon-github'
            title='Open GitHub'
          />
        </a>

        <a
          href='https://www.linkedin.com/in/marthavillamartin/'
          aria-label='LinkedIn Profile'
        >
          <FaLinkedin
            className='contact-icon contact-icon-linkedin'
            title='Open Linkedin'
          />
        </a>

        <a href='https://codepen.io/piracode' aria-label='CodePen Profile'>
          <SiCodepen
            className='contact-icon contact-icon-codepen'
            title='Open codepen'
          />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Martha Villa Martin</p>
    </div>
  )
}

export default Footer
