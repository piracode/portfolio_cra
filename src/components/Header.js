import { ReactComponent as Logo } from '../assets/mvm-logo.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    // window.location.href = '/'
    // Redirect to the top of home page
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <header className='header'>
      <Logo
        alt='Martha Villa Martin Logo'
        className='logo-header logo-mobile'
        onClick={handleLogoClick}
      />

      <div className='navigation-language-container language-box-mobile'>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
