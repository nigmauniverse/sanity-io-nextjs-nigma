// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '@nextui-org/react'
import Capa from '../assets/obj_capa.png';
import Luna from '../assets/moon.png';
import Reloj from '../assets/obje 3.png';
import Aguila from '../assets/obje 4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function StarDust() {
    return (
        <section className='pt-28 pb-36 dust'>
            <div className='container mx-auto px-4'>

                <h1 className='text-m3-sys-light-secondary-container m-0 text-13xl text-center'>¿Cuál es nuestro polvo de estrella?</h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-24 !pb-14 flex max-w-5xl gap-9"
                    breakpoints={{
                        390: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 1.1,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                     
                      }}
                >
                    <SwiperSlide className='max-w-lg'>
                        <Card className="bg-gray-100 w-full h-[385px] md:w-auto md:h-[248px] p-6 flex flex-col-reverse items-center justify-center md:flex-row">
                            <h4 className="font-medium pb-12 md:pb-0 text-[18px] text-white">La misión de Nigma no se reduce a producir objetos sin vida, estáticos.</h4>
                            <Image
                                alt="Card background"
                                className="z-0 p-0 object-cover"
                                src={Capa}
                            />

                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-lg'>
                        <Card className="bg-gray-100 w-full h-[385px] md:w-auto md:h-[248px] p-6 flex flex-col-reverse items-center justify-center md:flex-row">
                            <h4 className="font-medium pb-12 md:pb-0 text-[18px] text-white">Cada vez que iniciamos un nuevo viaje hacia nuestra próxima aventura creativa sabemos que vamos a traspasar la frontera de los universos habituales.</h4>
                            <Image
                                alt="Card background"
                                className="z-0 p-0 object-cover"
                                src={Luna}
                            />

                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-lg'>
                        <Card className="bg-gray-100 w-full h-[385px] md:w-auto md:h-[248px] p-6 flex flex-col-reverse items-center justify-center md:flex-row">
                            <h4 className="font-medium pb-12 md:pb-0 text-[18px] text-white">Y vamos a abarcar una propuesta mucho más amplia siempre en beneficio de la humanidad</h4>
                            <Image
                                alt="Card background"
                                className="z-0 p-0 object-cover"
                                src={Reloj}
                            />

                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-lg'>
                        <Card className="bg-gray-100 w-full h-[385px] md:w-auto md:h-[248px] p-6 flex flex-col-reverse items-center justify-center md:flex-row">
                            <h4 className="font-medium pb-12 md:pb-0 text-[18px] text-white">Nuestro sello BIC nos acredita como “Empresa con propósito”. Siempre hemos sido un proyecto que la da mayor prioridad al propósito social y ambiental.</h4>
                            <Image
                                alt="Card background"
                                className="z-0 p-0 object-cover"
                                src={Aguila}
                            />

                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default StarDust