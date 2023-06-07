import Hero from '../components/Hero'
import About from './About'
import Contact from './Contact'
import Lab from './Lab'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='parallax-container'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Lab />
    </div>
  )
}

export default Home
