import Hero from '../components/Hero'
import NavigationLinks from '../components/NavigationLinks'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='parallax-container' data-aos='fade-up'>
      <div className='section-container' id='main-content'>
        <Hero />
        <About />

        <Projects />
        <Contact />
      </div>
      <NavigationLinks />
    </div>
  )
}

export default Home
