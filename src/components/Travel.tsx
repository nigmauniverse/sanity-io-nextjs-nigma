import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import Cometa from '../assets/cometa1.png'

function Travel() {
    return (
        <section className='container mx-auto'>
            <div className='mt-16 pt-10 pb-32 flex flex-col justify-center items-center text-center'>
                <Image
                    className='w-auto h-auto'
                    alt='Cometa'
                    src={Cometa} />
                <h2 className='text-white font-normal'>Haz parte de nuestra bitácora de viaje</h2>
                <Button className='bg-m3-sys-light-secondary-container cursor-pointer px-6 py-4 border-none font-bold' radius='full'>Iniciar Viaje</Button>
            </div>
        </section>
    )
}

export default Travel