import Hero from '../components/Hero'
import NavigationLinks from '../components/NavigationLinks'
import About from './About'
import Contact from './Contact'
// import Lab from './Lab'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='parallax-container'>
      <div className='section-container' id='main-content'>
        <Hero />
        <About />

        <Projects />
        <Contact />
        {/* <Lab /> */}
      </div>
      <NavigationLinks />
    </div>
  )
}

export default Home
