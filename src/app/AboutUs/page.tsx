import React from 'react'
import Aboutussection from './components/Aboutussect'
import AboutUsStats from './components/AboutUsStatus'
import MeetOurTeam from './components/Team'
import BigCompanies from './components/BCA'
import WorkWithUs from './WorkWithUs'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
        <Aboutussection/>
        <AboutUsStats/>
        <MeetOurTeam/>
        <BigCompanies/>
        <WorkWithUs/>
        <Footer/>
    </div>
  )
}

export default AboutUs
