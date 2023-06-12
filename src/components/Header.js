import { ReactComponent as Logo } from '../assets/mvm-logo.svg'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/'
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
