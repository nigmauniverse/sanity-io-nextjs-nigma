import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../assets/hero2.png'
import ManosDiamanteImage from '../assets/ManosDiamante.png'
import Star from '../assets/star.png'
import SunImage from '../assets/sun2.webp'
import Navbar from './Navbar'
import { Button } from '@nextui-org/react'



function Header() {
  return (
    <header id='home' className="relative md:h-[50rem] lg:h-[40rem] text-center font-montserrat">
      <Navbar />

      <div className="relative">
        <div
          className="absolute top-[10rem] left-[14rem] lg:top-[3.88rem] lg:left-[12.63rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[12rem] h-[12rem] xl:w-[30.19rem] xl:h-[30.19rem]  opacity-[0.5] border-[1px] border-solid border-teal"
          role="presentation"
        />
        <div className="absolute top-[42.45rem] left-[59.61rem] rounded-[50%] bg-gray-200 [filter:blur(124px)] w-[31.6rem] h-[1.85rem]" />
        <div className="absolute top-[-0.77rem] left-[8.33rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_230,_10,_0.34),_rgba(2,_2,_0,_0))] [filter:blur(30px)] md:[filter:blur(66px)] w-[22.42rem] h-[22.42rem] [transform:_rotate(155deg)] md:[transform:_rotate(135deg)] [transform-origin:0_0] opacity-[0.5]" />
        <div className="absolute top-[17.98rem] left-[66.44rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_230,_10,_0.34),_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[22.42rem] h-[22.42rem] [transform:_rotate(45deg)] [transform-origin:0_0] opacity-[0.5]" />
        <div className="absolute top-[-12.19rem] md:top-[-30.19rem] rotate-[20deg] left-[9.38rem] md:left-[18.38rem] xl:left-[27.38rem] rounded-[50%] [background:linear-gradient(128.69deg,_#4dd9e6,_rgba(2,_2,_0,_0))] [filter:blur(8px)] md:[filter:blur(20px)] w-[9.69rem] md:w-[37.69rem] h-[19.69rem] md:h-[58.69rem] opacity-[0.16]" />
        <div className="absolute top-[5.2rem] md:top-[0.2rem] xl:top-[4.2rem] right-[-20px] sm:right-11 md:-right-6 lg:-right-2 xl:-right-20 2xl:-right-8 w-[12.13rem] md:w-[20.13rem] xl:w-[28.13rem] rounded-[50%] h-[12.13rem] md:h-[22.13rem] xl:h-[28.13rem] object-cover opacity-30 [background:linear-gradient(129deg,_rgba(255,_230,_10,_0.34)_31.03%,_rgba(2,_2,_0,_0.00)_73.69%)] [filter:blur(5px)] md:[filter:blur(10px)]" />
      </div>

      <div className="relative z-10">
        <Image
          className="absolute top-[2rem] left-[0%] md:top-[0rem] md:left-[0%] w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="absolute top-[4rem] left-[15%] md:top-[5rem] md:left-[9%] w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />

        <Image
          className="absolute top-[2rem] left-[35%] md:top-[0] md:left-[15%] w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="absolute top-[7rem] left-[45%] md:top-[2rem] md:left-[28%] w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="absolute top-[7rem] left-[65%] md:top-[2rem] md:left-[43%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="absolute top-[0rem] left-[65%] md:top-[-3rem] md:left-[50%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="absolute top-[4rem] left-[85%] md:top-[-3rem] md:left-[65%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="hidden absolute md:flex  md:top-[0rem] md:left-[75%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="hidden absolute md:flex  md:top-[-3rem] md:left-[85%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
        <Image
          className="hidden absolute md:flex  md:top-[3rem] md:left-[92%] w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] opacity-40 object-cover"
          alt="star"
          src={Star}
        />
      </div>

      <div className="relative">
        <div className="absolute z-20 top-[0rem] md:top-[7.88rem] md:left-[8.63rem]">
          <Image
            className="absolute top-[10rem] -left-7 md:top-[-8rem] md:left-[-14.5rem] w-[10rem] h-[10rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] xl:w-[38rem] xl:h-[38rem] object-cover"
            alt="Sol"
            loading='lazy'
            src={SunImage}
          />
          <Image
            className="absolute top-[10rem] -left-7 md:top-[-2.5rem] md:left-[-9rem] lg:top-[0.5rem] lg:left-[-6rem] xl:top-[1.6rem] xl:left-[-4.5rem] w-[10rem] h-[10rem] md:w-[12rem] md:h-[13rem] lg:w-[11rem] lg:h-[12rem] xl:w-[16rem] xl:h-[17rem] object-cover"
            alt="Manos de Diamantes"
            src={ManosDiamanteImage}
          />
        </div>
      </div>
      <div className="relative z-50 grid grid-rows-2 md:grid-rows-3 xl:grid-rows-2 xl:grid-cols-2 items-start mt-20 xl:mt-16">
        <div className="flex gap-6 flex-col lg:ml-32 xl:ml-0 xl:items-center creando xl:justify-start row-start-2 xl:row-start-2 grid-cols-none items-start xl:col-start-1 xl:col-end-3 p-4 xl:p-0">
          <div className="xl:max-w-3xl xl:mr-40 text-start">
            <h1 className="text-4xl md:mt-0 md:text-[60px] lg:text-[35px] xl:text-[50px] text-m3-sys-light-secondary-container">
              “Nigma:{' '}
              <span className="text-white font-semibold">
                Creando <br /> mundos inesperados”
              </span>{' '}
            </h1>

            <Link
              className="rounded-81xl font-semibold no-underline px-6 py-4 bg-m3-sys-light-secondary-container text-m3-sys-light-on-primary-container"
              href="#"
            >
              Acompáñanos
            </Link>
          </div>
        </div>
        <div className="relative xl:col-start-2">
          <Image
            className="absolute md:-top-[4rem] right-[0%] w-full md:w-[70%] xl:w-full h-auto object-cover z-10"
            alt="Aguila"
            priority
            src={HeroImage}
          />
          <Image
            className="absolute -top-4 md:-top-[6rem] left-[53%] md:left-[64%] lg:left-[68%] xl:left-[50%] 2xl:left-[55%] w-1/2 h-auto md:w-[23rem] md:h-[23rem] 2xl:w-[25rem] 2xl:h-[25rem]"
            alt="Sol"
            src={SunImage}
          />
        </div>
      </div>

      
    </header>
  )
}

export default Header
