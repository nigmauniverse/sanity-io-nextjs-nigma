import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Tab, Tabs } from "@nextui-org/react";
import Image from 'next/image'

import Cometa from '../assets/cometa1.png'

import NigmaPlanet from '../assets/NingmaPlanet.png'
import NigmaForce from '../assets/NigmaForce.png'
import NigmaConstellation from '../assets/NigmaConstellation.png'

import NigmaPlanetHover from '../assets/NigmaPlanetHover.png'
import NigmaForceHover from '../assets/NigmaForceHover.png'
import NigmaConstellationHover from '../assets/NigmaConstellationHover.png'

import ProgressImage from '../assets/progress.svg'
import ShimmerImage from '../assets/shimmer.svg'
import Star from '../assets/star.png'
import Universo from '../assets/Universo.png'

import TabsComponents from "./TabsComponent";
import Link from "next/link";

function Universe() {

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Nigma Planet', 'Nigma Force', 'Nigma Constellation'];


    return (
        <>
            <section id="servicios" className='relative pt-16 mt-0 lg:mt-48 [background:linear-gradient(180deg,_#000,_rgba(18,_31,_37,_0))] [backdrop-filter:blur(4px)] overflow-hidden gap-[3.5rem] text-[1.75rem]'>
                <div className="relative z-20 hidden md:flex">
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[-5rem] md:left-[-2%] w-[5rem] h-[5rem] lg:w-[14rem] lg:h-[14rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[-5rem] md:left-[50%] w-[5rem] h-[5rem] lg:w-[14rem] lg:h-[14rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[18rem] md:left-[38%] w-[5rem] h-[5rem] lg:w-[12rem] lg:h-[12rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[5rem] md:left-[94%] w-[5rem] h-[5rem] lg:w-[14rem] lg:h-[14rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[40rem] md:left-[5%] w-[5rem] h-[5rem] lg:w-[14rem] lg:h-[14rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[45rem] md:left-[85%] w-[5rem] h-[5rem] lg:w-[14rem] lg:h-[14rem] opacity-40 object-cover"
                        alt="star"
                        src={Star}
                    />
                    <Image
                        className="absolute top-[2rem] left-[0%] md:top-[40rem] md:left-[-9%] w-[5rem] h-[5rem] lg:w-[30rem] lg:h-[30rem] opacity-40 object-cover"
                        alt="Universe"
                        src={Universo}
                    />

                </div>
                <div className="container mx-auto lg:grid grid-cols-2">
                    <div className='relative'>
                        <h1 className='m-0 text-center font-semibold text-m3-sys-light-secondary-container text-25xl'>Universo Nigma</h1>
                        <div className='block flex-wrap mt-6 gap-4 lg:hidden'>

                            <Tabs className='tabs block text-white opacity-100 border-none' variant={'underlined'} aria-label="Tabs variants">
                                <Tab className='tab  container mx-auto' key="photos" title="Nigma Planet">
                                    <TabsComponents ruta={NigmaPlanet} titulo="Nigma Planet" contenido="Contenido estratégico digital, impreso y editorial previsto de conceptos disruptivos e innovadores" rutaHover={NigmaPlanetHover} />
                                </Tab>
                                <Tab className='tab container mx-auto' key="music" title="Nigma Force">
                                    <TabsComponents ruta={NigmaForce} titulo="Nigma Force" contenido="Soluciones creativas y coordinación de presentaciones, gestión cultural, creación de talleres, formación editorial y transmedia certificadas." rutaHover={NigmaForceHover} />
                                </Tab>
                                <Tab className='tab container mx-auto' key="videos" title="Nigma Universe">
                                    <TabsComponents ruta={NigmaConstellation} titulo="Nigma Constellation" contenido="Consultoría hipermedia y acompañamiento crossmedia. Implementación de narrativas transmedia y estrategias de comunicación ideales. Asesoría e-learning de alto alcance tecnológico y planeación pedagógica actualizada" rutaHover={NigmaConstellationHover} />
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="hidden lg:block relative mt-36">
                            <div className='z-50 absolute top-[0.13rem] left-[40%] xl:left-[15rem] 2xl:left-[24.13rem] lg:w-[46rem] xl:w-[55rem] h-[25.25rem]'>
                                <ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='lg:mt-[35rem] pt-10 pb-32 flex flex-col justify-center items-center text-center'>
                    <Image
                        className='w-auto h-auto'
                        alt='Cometa'
                        src={Cometa} />
                    <h2 className='text-white text-3xl lg:text-26xl font-normal'>Conoce todos los mundos que podemos alcanzar</h2>
                    <Link
                        href="tel:+573172940035"
                        className="bg-m3-sys-light-secondary-container cursor-pointer mt-10 lg:mt-5 px-6 py-3 border-none font-bold rounded-full text-sm no-underline text-black"
                    >
                        Hablemos
                    </Link>
                </div>

            </section>
            <div className='hidden lg:block relative'>
                <Image
                    className="absolute z-20 top-[2rem] left-[0%] md:top-[-30rem] md:left-[80%] w-[5rem] h-[5rem] lg:w-[40rem] lg:h-[40rem] opacity-40 object-cover"
                    alt="Universe"
                    src={Universo}
                />
            </div>
        </>
    )
}

export default Universe