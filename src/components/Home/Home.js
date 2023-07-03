import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import About from '../About/About'
// import Lesson from '../Lesson/Lesson'
import Feature from '../Feature/Feature'
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'



const Home = () => {
  return (
    <div>
        <Hero/>
        <Feature/>
        <About/>
        {/* <Lesson/> */}
        <Services/>
        <Gallery/>
        <Team/>
        <Contact/>
      
    </div>
  )
}

export default Home