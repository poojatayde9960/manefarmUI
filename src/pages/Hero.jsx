import React from 'react'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import ThreeStepStartEarning from './ThreeStepStartEarning'
import BuffaloPortfolio from './BuffaloPortfolio'
import OurFarmStandards from './OurFarmStandards'
import TrustedInvestors from './TrustedbyEarlyInvestors'
import Testimonials from './Testimonials'
import LeadingSection from './LeadingSection'

const Hero = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Home />
            <div className="mt-0 md:-mt-0"><About /></div>
            <div className='mt-28'>
                <TrustedInvestors />
            </div>
            <ThreeStepStartEarning />

            <BuffaloPortfolio />
            <Testimonials />
            <LeadingSection />
            <OurFarmStandards />

            <div className="w-full mx-0 sm:mx-10 lg:mx-2 mt-5">
                <Contact />
            </div>

            <div className="w-full mx-0 mb-9 sm:mx-8 lg:pr-[4%] mt-5">
                <Footer />
            </div>


        </div>
    )
}

export default Hero
