import { ReactComponent as Logo } from '../assets/mvm-logo.svg'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  return (
    <header className='header'>
      <Logo
        alt='Martha Villa Martin Logo'
        className='logo-header logo-mobile'
      />

      <div className='navigation-language-container language-box-mobile'>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
