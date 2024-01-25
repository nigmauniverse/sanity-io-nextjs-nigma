import Image from 'next/image'
import React from 'react'
import SunTestiominals from '../assets/sunfront.png'

function Testimonials() {
    return (
        <section className='relative mt-40'>
            <div className="absolute -top-[10rem] md:top-[-60rem] left-[calc(50%_-_0px)] rounded-[50%] [background:linear-gradient(170.41deg,_rgba(77,_217,_230,_0.26),_rgba(77,_217,_230,_0))] [filter:blur(60px)] w-[28rem] h-[28rem] md:w-[200rem] md:h-[200rem] [transform:_rotate(45deg)] [transform-origin:0_0]  opacity-[.7]"></div>
            {/* <div className="absolute -top-[10rem] md:top-[-10rem] left-[-10%] rounded-[50%] [background:linear-gradient(170.41deg,_rgba(77,_217,_230,_0.26),_rgba(77,_217,_230,_0))] [filter:blur(60px)] w-[28rem] h-[28rem] md:w-[140rem] md:h-[125rem] [transform:_rotate(0deg)] [transform-origin:0_0]  opacity-[.7]"></div> */}
            <div className="absolute top-[35rem] left-[calc(50%_-_0px)] rounded-[50%] [background:linear-gradient(135deg,_rgba(255,_224,_131,_0),_rgba(255,_224,_131,_0.47))] [filter:blur(45px)] w-[30rem] h-[30rem] [transform:_rotate(-135deg)] [transform-origin:0_0] opacity-[0.7]"></div>
            
            <div className='mt-56 lg:mt-96 container mx-auto  flex justify-center items-center'>
                <div className='flex flex-col max-w-sm lg:max-w-lg justify-center text-white items-center z-50'>
                    <Image 
                    className=''
                    alt='Sun Testimonials'
                    src={SunTestiominals}
                    />
                    <h1 className='text-m3-sys-light-secondary-container font-normal'>Testimonios</h1>
                    <p className=' text-center text-3xl'>Son eficientes, profesionales y expertos en lo que hacen. Pasamos de estar en 0 a tener un alto estándar de una plataforma e-learning y sus objetos de virtualización de aprendizaje</p>
                    <p>- Camilo Rojas, Coordinador Unidad de Virtualización UniCIEO</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials