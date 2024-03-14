import Image from 'next/image'
import React from 'react'
import shimmer from '../assets/shimmer.svg';

interface Props {
    top: string,
}

const CustomImage: React.FC<Props> = ({ top }) => {
    return (
        <Image
            className={`absolute -left-[7.5rem] top-[${top}] w-[16.56rem] h-[17.3rem] custom-image-animation`}
            src={shimmer}
            width={15}
            height={15}
            alt="Imagen"
        />
    )
}
export default CustomImage