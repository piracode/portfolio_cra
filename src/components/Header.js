import Navigation from './Navigation'
import { ReactComponent as Logo } from '../assets/mvm-logo.svg'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  return (
    <header className='header'>
      {/* <div className='logo-container'> */}
      <Logo
        alt='Martha Villa Martin Logo'
        className='logo-header logo-mobile'
      />
      {/* </div> */}
      <div className='navigation-language-container language-box-mobile'>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
