import React from 'react'

import Allied from './Allied'
import Experiences from './Experiences'
import Footer from './Footer'
import Galaxy from './Galaxy'
import Header from './Header'
import Skills from './Skills'
import Slider from './Slider'
import StarDust from './StarDust'
import Testimonials from './Testimonials'
import Travel from './Travel'
import Travellers from './Travellers'
import Universe from './Universe'

function Welcome() {
    return (
        <>
            <Header />
            <main className='lg:pt-[5rem] 2xl:pt-[10rem]'>
                <Slider />
                <Universe />
                <Allied />
                <Testimonials />
                <Galaxy />
                <Experiences />
                <StarDust />
                <Skills />
                <Travel />
                <Travellers />
            </main>
            <Footer />
        </>
    )
}

export default Welcome