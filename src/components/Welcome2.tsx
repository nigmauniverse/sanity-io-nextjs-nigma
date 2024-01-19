import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Universe from './Universe'
import Allied from './Allied'

function Welcome2() {
    return (
        <>
            <Header />
            <main className='lg:pt-[5rem] 2xl:pt-[10rem]'>
                <Slider />
                <Universe />
                <Allied />
                
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Welcome2