import 'swiper/css'
import 'swiper/css/navigation'

import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import React from 'react'

import SunTestiominals from '../assets/sunfront.png'

function Testimonials() {
    const slides = [
        { id: 1, autor: '- Camilo Rojas, Coordinador Unidad de Virtualización UniCIEO', text: 'Son eficientes, profesionales y expertos en lo que hacen. Pasamos de estar en 0 a tener un alto estándar de una plataforma e-learning y sus objetos de virtualización de aprendizaje.' },
        { id: 2, autor: '- Pepito Pérez', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ];

    return (
        <section className='relative mt-40'>
            <div className="absolute -top-[10rem] md:top-[-60rem] left-[calc(50%_-_0px)] rounded-[50%] [background:linear-gradient(170.41deg,_rgba(77,_217,_230,_0.26),_rgba(77,_217,_230,_0))] [filter:blur(60px)] w-[28rem] h-[28rem] md:w-[200rem] md:h-[200rem] [transform:_rotate(45deg)] [transform-origin:0_0]  opacity-[.7]"></div>
            <div className="absolute top-[35rem] left-[calc(50%_-_0px)] rounded-[50%] [background:linear-gradient(135deg,_rgba(255,_224,_131,_0),_rgba(255,_224,_131,_0.47))] [filter:blur(45px)] w-[30rem] h-[30rem] [transform:_rotate(-135deg)] [transform-origin:0_0] opacity-[0.7]"></div>

            <div className='mt-56 lg:mt-96 container mx-auto  flex justify-center items-center'>
                <div className='flex flex-col max-w-sm lg:max-w-lg justify-center text-white items-center z-50'>
                    <Image
                        className=''
                        alt='Sun Testimonials'
                        src={SunTestiominals}
                    />
                    <h1 className='text-m3-sys-light-secondary-container font-normal text-[40px]'>Testimonios</h1>

                    <Swiper
                        className="w-full h-[20rem] lg:h-[15rem] mt-10 swiper-testimonial md:mt-0 xl:my-20"
                        modules={[A11y, Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} >
                                <div className='flex flex-col items-center gap-8'>
                                    <p className='text-center m-0 text-3xl'>{slide.text}</p>
                                    <p className='text-center'>{slide.autor}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </div>
        </section>
    );
}

export default Testimonials