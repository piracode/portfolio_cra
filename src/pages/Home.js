// import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import About from './About'
import Contact from './Contact'
import Lab from './Lab'
import Projects from './Projects'

const Home = () => {
  // const sectionContainerRef = useRef(null)

  return (
    // <div className='parallax-container' ref={sectionContainerRef}>
    <div className='parallax-container header-offset'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Lab />
    </div>
  )
}

export default Home
