import Image from 'next/image'
import React from 'react'

import IconBulbImage from '../assets/icons-bulb.png'
import IconEsotericImage from '../assets/icons-esoteric.png'
import IconRocketImage from '../assets/icons-rocket.png'
import IconStarImage from '../assets/icons-star.png'
function Skills() {
    return (
        <section className='-mt-20 lg:-mt-36 skills'>
            <div className='text-center'>
                <h1 className='text-m3-sys-light-on-primary-fixed-variant text-[2.75rem]'>¿Por qué somos el mejor equipo interestelar?</h1>
                <div className='mt-28 grid gap-10 max-w-5xl md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex items-start flex-col'>
                        <div className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row p-[1.13rem] z-10">
                            <Image
                                className="w-[4rem] h-[4rem] object-cover"
                                alt=""
                                src={IconEsotericImage}
                            />
                        </div>
                        <h2 className='text-m3-sys-dark-on-secondary text-13xl font-normal font-montserrat'>Originalidad</h2>
                        <p className="text-left text-base tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container m-0">Plasmamos nuestro sello único en todos los proyectos tomando como base una estética propia que nos identifica.</p>
                    </div>
                    <div className='flex items-start flex-col'>
                        <div className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row p-[1.13rem] z-10">
                            <Image
                                className="w-[4rem] h-[4rem] object-cover"
                                alt=""
                                src={IconStarImage}
                            />
                        </div>
                        <h2 className='text-m3-sys-dark-on-secondary text-13xl font-normal font-montserrat'>Personalización</h2>
                        <p className="text-left text-base tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container m-0">Nuestro proceso de co-creación y diseño genera resultados impactantes al lanzar proyectos juntos.</p>
                    </div>
                    <div className='flex items-start flex-col'>
                        <div className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row p-[1.13rem] z-10">
                            <Image
                                className="w-[4rem] h-[4rem] object-cover"
                                alt=""
                                src={IconBulbImage}
                            />
                        </div>
                        <h2 className='text-m3-sys-dark-on-secondary text-13xl font-normal font-montserrat'>Innovación</h2>
                        <p className="text-left text-base tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container m-0">Contar con un equipo provisto de grandes facultades creativas es la garantía de llegar a propuestas innovadoras y disruptivas.</p>
                    </div>
                    <div className='flex items-start flex-col'>
                        <div className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row p-[1.13rem] z-10">
                            <Image
                                className="w-[4rem] h-[4rem] object-cover"
                                alt=""
                                src={IconRocketImage}
                            />
                        </div>
                        <h2 className='text-m3-sys-dark-on-secondary text-13xl font-normal font-montserrat'>Efectividad</h2>
                        <p className="text-left text-base tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container m-0">Equilibramos talento y compromiso para alcanzar resultados de alta calidad y puntualidad, siguiendo OKR y estándares KP</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills