import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import NavigationLinks from '../components/NavigationLinks'
import About from './About'
import Contact from './Contact'
import Lab from './Lab'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='parallax-container'>
      <div className='section-container'>
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Lab /> */}
      </div>
      {/* <NavigationLinks /> */}
      <NavigationLinks />
    </div>
  )
}

export default Home
