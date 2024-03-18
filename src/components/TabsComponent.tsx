import Image from "next/image"
import { Button } from "@nextui-org/react";
import { useState } from 'react';


interface Props {
    ruta: any,
    titulo: string,
    contenido: string,
    rutaHover: any // Nueva prop para la ruta de la imagen en hover
}

function TabsComponents({ ruta, titulo, contenido, rutaHover }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='flex flex-col items-center mt-20 lg:mt-0'>
            <div
                className={`relative ${hovered ? 'image-container' : ''}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Image
                    className='transition-all'
                    alt='Computer Planet'
                    src={hovered ? rutaHover : ruta}
                    width={350}
                    height={330}
                />
            </div>
            <div className='container mx-auto max-w-[22rem] md:max-w-md lg:max-w-sm'>
                <h1 className='mt-0 mb-4 text-[2rem] text-m3-sys-light-primary-container'>{titulo}</h1>
                <p className='mt-0 font-normal text-m3-sys-light-primary-container text-base'>{contenido}</p>
                <Button className='text-white border-white cursor-pointer' radius='full' variant="bordered">
                    Ver Servicios
                </Button>
            </div>
        </div>
    )
}

export default TabsComponents