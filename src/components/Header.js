import Navigation from './Navigation'
import { ReactComponent as Logo } from '../assets/mvm-logo.svg'

const Header = () => {
  return (
    <header className='header'>
      {/* <div className='logo-container'> */}
      <Logo alt='Martha Villa Martin Logo' className='logo-header' />
      {/* </div> */}
      <Navigation />
    </header>
  )
}

export default Header
