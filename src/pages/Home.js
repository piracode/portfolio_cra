import Hero from '../components/Hero'
import NavigationLinks from '../components/NavigationLinks'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import React, { useEffect } from 'react'

const Home = () => {
  return (
    <div className='parallax-container'>
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
