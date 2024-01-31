import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

import Cometa from '../assets/cometa1.png'
import Man from '../assets/man.png'
import Woman from '../assets/woman.png'
import ExperienceCard from './ExperienceCard'


function Travellers() {
    return (
        <section className=''>
            <div className="w-full py-20 [background:linear-gradient(180deg,_#000,_rgba(18,_31,_37,_0))]">
                <div className='container mx-auto px-6 text-center flex flex-col items-center'>
                    <h1 className='text-center text-m3-sys-light-secondary-container text-26xl'>Nuestros Viajeros</h1>
                    <p className='font-montserrat text-white text-3xl max-w-2xl'>Este es el equipo que hará parte de todas tus aventuras a través de los universos que vas a explorar a nuestro lado.</p>
                </div>
                <div className='flex lg:justify-center items-center overflow-x-auto pb-8 snap-center mt-12'>
                    <div className='flex lg:grid grid-cols-3 px-4 gap-10 lg:max-w-5xl'>
                        <ExperienceCard
                            title='Karen Guerrero'
                            description='Co - CEO, Founder & Business Strategist'
                            image={Woman}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Giovanni Padilla'
                            description='Co - CEO, Founder & Cultural Strategist'
                            image={Man}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Diego Pacheco'
                            description='Edition, Content & Writing Strategist'
                            image={Man}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Mardon Arismendi'
                            description='RAE expert writer and proofreader'
                            image={Man}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Laura Mediorreal'
                            description='Ilustrator & digital artist'
                            image={Woman}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Ronald Espitia'
                            description='Audiovisual and transmedia editor, educator and scriptwriter.'
                            image={Man}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Julián Mora'
                            description='Tech & Dev lead'
                            image={Man}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Isabella Jordán'
                            description='Product Designer & Research Strategist.'
                            image={Woman}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                        <ExperienceCard
                            title='Agostina Falanti'
                            description='Social media Strategist & Designer'
                            image={Woman}
                            showButton={false}
                            heightLg={'400px'}
                            widthLg={'320px'}
                        />
                    </div>
                </div>
                <div className='pt-10 pb-10 flex gap-10 flex-col justify-center items-center'>
                    <Image
                        className='w-auto h-auto'
                        alt='Cometa'
                        src={Cometa} />
                    <Button className='bg-m3-sys-light-secondary-container cursor-pointer px-6 py-4 border-none font-bold' radius='full'>Conocer Equipo</Button>
                </div>
            </div>
        </section>
    )
}

export default Travellers