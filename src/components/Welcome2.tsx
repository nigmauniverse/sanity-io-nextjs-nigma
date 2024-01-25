import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Universe from './Universe'
import Allied from './Allied'
import Testimonials from './Testimonials'
import Galaxy from './Galaxy'
import Experiences from './Experiences'
import StarDust from './StarDust'
import Skills from './Skills'
import Travel from './Travel'
import Travellers from './Travellers'
import Footer from './Footer'

function Welcome2() {
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

export default Welcome2