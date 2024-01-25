import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, Button } from '@nextui-org/react'

type TExperienceCardProps = {
    title: string
    description: string
    image: any
    showButton?: boolean
    heightLg: string
    widthLg: string
}

const ExperienceCard: React.FC<TExperienceCardProps> = ({ title, description, image, showButton, heightLg, widthLg }) => {

    return (
        <Card className={`h-[25rem] justify-end w-[20rem] lg:h-[${heightLg}] lg:w-[${widthLg}] snap-center border-0`} >
            <CardHeader className="absolute items-start font-montserrat text-white flex-col z-10 px-4">
                <h1 className="text-9xl m-0">{title}</h1>
                <h4 className="font-medium text-base">{description}</h4>
                {showButton && (
                    <Button className='bg-m3-sys-light-secondary-container cursor-pointer px-6 py-4 border-none font-semibold' radius='full'>Explora aquí</Button>
                )}
            </CardHeader>
            <Image
                alt="Card background"
                className="z-0 max-h-full w-full p-0 h-full object-cover"
                src={image}
            />
            <div className="my-0 absolute bottom-0 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]"></div>
        </Card>
    )
}


export default ExperienceCard