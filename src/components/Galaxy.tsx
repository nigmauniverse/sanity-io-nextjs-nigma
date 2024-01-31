import Image from 'next/image'
import React from 'react'

import NumberOne from '../assets/1.png'
import NumberTwo from '../assets/2.png'
import NumberThree from '../assets/3.png'
import NumberFour from '../assets/4.png'
import Navega from '../assets/bg_navega.png'
import Mask from '../assets/obj_mask.png'
import SunImage from '../assets/sun2.webp'

function Galaxy() {
    return (
        <section className='relative h-[90rem] md:h-[85rem] lg:h-[80rem] mt-48 galaxia z-50'>
            <div className='relative'>
                <Image
                    className='absolute z-50 left-[0%] lg:left-[-20%] xl:left-[0%] w-full lg:w-[90rem] xl:w-full h-[30rem] md:h-[85rem] lg:h-[80rem] object-fill opacity-100'
                    alt='Imagen Navega'
                    width={1298}
                    height={1280}
                    src={Navega}
                />

            </div>
            <div className='px-4 xl:px-0 flex justify-center items-center'>
                <div className='w-[65rem] h-[65rem] mt-16 items-center lg:grid gap-6 grid-cols-2'>
                    <div className='-mt-6 pb-24 lg:mt-0 relative flex flex-col items-center justify-around'>
                        <h1 className='text-m3-sys-light-secondary-container m-0 md:px-8 lg:px-0 text-center lg:text-left text-[32px] md:text-[40px] lg:text-26xl'>Navega con nosotros por esta galaxia de proyectos</h1>
                        <Image
                            className=' w-1/2 h-1/2 md:w-2/6 md:h-2/6 lg:w-auto lg:h-auto'
                            alt='Mascara'
                            src={Mask}
                        />
                        <Image
                            className="absolute -z-10 top-[7rem] md:top-[9rem]  lg:top-[15rem] left-[9%] md:left-[28%] lg:left-[0%] 2xl:left-[-6%] w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] xl:w-[33rem] xl:h-[33rem] object-cover"
                            alt="Sol"
                            src={SunImage}
                        />
                    </div>
                    <div className='px-4 lg:px-0 flex flex-col gap-7'>
                        <div className='text-m3-sys-light-primary-container'>
                            <Image
                                className='max-w-full'
                                alt=''
                                src={NumberOne} />
                            <h2 className='font-normal'>El mejor equipo del mundo</h2>
                            <p className='text-base'>Tenemos un grupo que está a la altura para llevar al máximo el alcance de cualquier proyecto.</p>
                        </div>
                        <div className='text-m3-sys-light-primary-container'>
                            <Image
                                alt=''
                                src={NumberTwo} />
                            <h2 className='font-normal'>Conexiones estratégicas</h2>
                            <p className='text-base'>Contamos con una red de difusión alimentada por aliados fuertes que nos dan la infraestructura ideal para llevar nuestras ideas a más lugares de forma sorprendente</p>
                        </div>
                        <div className='text-m3-sys-light-primary-container'>
                            <Image
                                alt=''
                                src={NumberThree} />
                            <h2 className='font-normal'>Experiencia sideral</h2>
                            <p className='text-base'>Tenemos la fusión profesional de más alto nivel, gracias a nuestro trabajo con grandes clientes, marcas e instituciones</p>
                        </div>
                        <div className='text-m3-sys-light-primary-container'>
                            <Image
                                alt=''
                                src={NumberFour} />
                            <h2 className='font-normal'>Estrategias de vanguardia</h2>
                            <p className='text-base'>Estamos preparados para articular cada proyecto adaptándonos a sus necesidades gracias a la aplicación profesional de metodologías ágiles y de diseño centrados en el beneficio de la humanidad</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Galaxy