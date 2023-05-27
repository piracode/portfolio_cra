import './scss/styles.scss'
import Logo from './components/Logo'

function App() {
  return (
    <div className='site-wrapper'>
      <main className='introduction'>
        {/* <img src={reactLogo} alt='' /> */}
        <Logo />
      </main>
    </div>
  )
}

export default App
