import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import Image from 'next/image'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'
import Banner3 from '../assets/banner3.png'
import Estrella from '../assets/estrella_banner.png'
import Silueta from '../assets/silueta4.png'

function Slider() {
  const slides = [
    { id: 1, image: Banner1, text: 'Viaja a distintos universos navegando con nosotros' },
    { id: 2, image: Banner2, text: 'Nuestra piedra mágica será el portal que nos transportará por distintos mundos' },
    { id: 3, image: Banner3, text: 'En cada viaje nos transformamos en una editorial de literatura gráfica a un colectivo creativo audiovisual o a una consultora de proyectos transmedia' },
  ];

  return (
    <>
      <div className="relative">
        <div
          className="absolute top-[-2rem] md:top-[-13rem] lg:top-[0rem] 2xl:top-[0rem] left-[-40%] md:left-[-20%] lg:left-[-20%] xl:left-[-16%] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[20rem] h-[20rem] md:w-[20.19rem] md:h-[20.19rem] lg:w-[30.19rem] lg:h-[30.19rem] xl:w-[35.19rem] xl:h-[35.19rem] 2xl:w-[40.19rem] 2xl:h-[40.19rem]  opacity-[0.5] border-[1px] border-solid border-teal"
          role="presentation"
        />
      </div>
      <div className="relative">
        <Image
          className="absolute top-[3rem] left-[-22%] md:top-[-5rem] lg:top-[0rem] md:left-[-20%] lg:left-[-18%] xl:left-[-22%] 2xl:left-[-15%] w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] xl:w-[45rem] xl:h-[45rem] 2xl:w-auto 2xl:h-auto 
        object-cover"
          alt="Silueta"
          priority
          src={Silueta}
        />
        <Image
          className="absolute top-[22rem] md:top-[10rem] lg:top-[8rem] xl:top-[0rem] right-[-15%] md:right-[-10%] w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-auto 2xl:h-auto object-cover"
          alt="Estrella"
          src={Estrella}
        />
      </div>

      <div id='mision' className="flex justify-center">
        <Swiper
          className=" md:w-2/3 2xl:w-1/2 mb-20 mt-28 md:mt-0 xl:my-20"
          modules={[A11y, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} >
              <div className='flex flex-col lg:flex-row items-center gap-8'>
                <Image src={slide.image} alt={`Banner ${slide.id}`} />
                <p className='text-white max-w-[22rem] md:max-w-none text-center font-semibold text-[20px] md:text-[36px] font-montserrat'>{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

  );
}

export default Slider
