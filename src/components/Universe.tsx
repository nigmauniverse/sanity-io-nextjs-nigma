import { Button } from "@nextui-org/react";
import { Tab,Tabs } from "@nextui-org/react";
import Image from 'next/image'

import Cometa from '../assets/cometa1.png'
import ComputerPlanet from '../assets/computerplanet.png'
import ProgressImage from '../assets/progress.svg'
import ShimmerImage from '../assets/shimmer.svg'
import Star from '../assets/star.png'
import Universo from '../assets/Universo.png'

function Universe() {
  return (
    <>
        <section className='relative pt-16 mt-0 lg:mt-48 [background:linear-gradient(180deg,_#000,_rgba(18,_31,_37,_0))] [backdrop-filter:blur(4px)] overflow-hidden gap-[3.5rem] text-[1.75rem]'>
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
                            <div className='flex tabs flex-wrap mt-6 gap-4 lg:hidden'>

                                <Tabs className='text-white opacity-100 border-none' variant={'underlined'} aria-label="Tabs variants">
                                    <Tab className='tab' key="photos" title="Nigma Planet" />
                                    <Tab className='tab' key="music" title="Nigma Force" />
                                    <Tab className='tab' key="videos" title="Nigma Universe" />
                                </Tabs>
                            </div>
                            <div className="hidden lg:block relative mt-36">
                                <div
                                    className="absolute top-0 left-[50%] xl:left-[27.13rem] leading-[2.25rem] font-medium text-m3-sys-light-primary-container flex items-center w-[12.44rem]">
                                    Nigma Planet
                                </div>
                                <div
                                    className="absolute top-[21.38rem] left-[50%] xl:left-[26.75rem] leading-[2.25rem] font-medium flex items-center w-[12.38rem]">
                                    Nigma Constellation
                                </div>
                                <div
                                    className="absolute top-[12rem] left-[5%] xl:left-40 leading-[2.25rem] font-medium text-right flex items-center w-[13.5rem]">
                                    Nigma Force
                                </div>
                                <Image
                                    className="absolute top-[0.13rem] left-[40%] xl:left-[24.13rem] w-[2rem] h-[25.25rem]"
                                    alt=""
                                    src={ProgressImage}
                                />
                                <Image
                                    className="absolute top-[-7.8rem] left-[17%] xl:left-[42.2%] 2xl:left-[35.2%] w-[16.56rem] h-[17.93rem]"
                                    alt=""
                                    src={ShimmerImage}
                                />
                            </div>

                        </div>

                        <div className='flex flex-col items-center mt-12 lg:mt-28'>
                            <Image
                                className=''
                                alt='Computer Planet'
                                src={ComputerPlanet}
                            />
                            <div className='container mx-auto max-w-[22rem] md:max-w-md lg:max-w-sm'>
                                <h1 className='mt-0 mb-4 text-[2rem] text-m3-sys-light-primary-container'>Nigma Planet</h1>
                                <p className='mt-0 font-normal text-m3-sys-light-primary-container text-base'>Contenido estratégico digital, impreso y editorial previsto de conceptos disruptivos e innovadores</p>
                                <Button className='text-white border-white cursor-pointer' radius='full' variant="bordered">
                                    Ver Servicios
                                </Button>
                                
                            </div>

                        </div>

                    </div>
                    <div className='mt-16 pt-10 pb-32 flex flex-col justify-center items-center text-center'>
                        <Image 
                        className='w-auto h-auto'
                        alt='Cometa'
                        src={Cometa}/>
                        <h2 className='text-white font-normal'>Conoce todos los mundos que podemos alcanzar</h2>
                        <Button className='bg-m3-sys-light-secondary-container cursor-pointer px-6 py-4 border-none font-bold' radius='full'>Explora aquí</Button>
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