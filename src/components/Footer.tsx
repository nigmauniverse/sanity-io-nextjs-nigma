import Image from 'next/image'
import Link from 'next/link'

import Astro from '../assets/astro.png'
import CopyRightImage from '../assets/copyright.png'
import IconArrobaImage from '../assets/icon_arroba.svg'
import IconLocationImage from '../assets/icon_location.svg'
import IconPhoneImage from '../assets/icon_phone.svg'
import TwitterImage from '../assets/icons-twitter.svg'
import YouTubeImage from '../assets/icons-youtube.svg'
import FacebookImage from '../assets/icons8-facebook (1) 1.svg'
import InstagramImage from '../assets/icons8-instagram 1.svg'
import TikTokImage from '../assets/icons8-tiktok 1.svg'
import LogoNigmaImage from '../assets/logonigma.svg'
import MenuImage from '../assets/Menu.png'
import News from '../assets/news.svg'
import TagsImage from '../assets/tags.svg'
import TermsAndCondImage from '../assets/termscond.svg'


const InstagramLink = 'https://www.instagram.com/nigma.emerge'
const FacebookLink = 'https://www.facebook.com/nigma.emerge'
const TwitterLink = 'https://twitter.com/nigma_emerge'
const YouTubeLink = 'https://www.youtube.com/@nigmaemerge3906'
const TikTokLink = 'https://www.tiktok.com/@nigmaemerge?lang=es'

function Footer() {
    return (
        <footer
            className="bottom-0 left-0 bg-m3-sys-light-inverse-surface w-full py-[5.25rem] px-2 sm:px-0 text-left text-[0.88rem] text-m3-sys-light-tertiary-container">
            <div className="container max-w-5xl px-8 xl:px-0 w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-cols-min">
                    <div className="lg:row-span-2 w-full flex flex-col items-start justify-start gap-[3rem]">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <div className="h-[4.06rem] flex flex-col items-end justify-center gap-[0.63rem]">
                                <Image
                                    className="relative w-[6.69rem] h-[1.88rem] object-cover"
                                    alt=""
                                    src={LogoNigmaImage}
                                    quality={100}
                                />
                            </div>
                            <div className="relative tracking-[0.25px] leading-[1.25rem] flex items-center">
                                <span className="[line-break:anywhere] w-full">
                                    <p className="mt-0">
                                        Viaja a distintos universos navegando con nosotros.
                                    </p>
                                    <p className="m-0">
                                        Conoce nuestro sello único y la estética propia que nos
                                        identifica.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1rem]">
                            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                                <Image
                                    className="w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                    alt="phone"
                                    src={IconPhoneImage}
                                />
                                <a className="tracking-[0.5px] leading-[1.5rem] shrink-0 text-white no-underline" href="tel:+573163762605">
                                    +57 316 3762605
                                </a>
                            </div>

                            <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[inherit]">
                                <Image
                                    className="w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                    alt=""
                                    src={IconArrobaImage}
                                />
                                <div className="flex flex-col items-start justify-start">
                                    <Link
                                        className="text-[inherit] [text-decoration:none] tracking-[0.5px] leading-[1.5rem]"
                                        href="mailto:Kipow@nigmauniverse.com"
                                        target="_blank"
                                    >
                                        ipow@nigmauniverse.com
                                    </Link>
                                    <Link
                                        className="tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container [text-decoration:none]"
                                        href="mailto:proyectonigma@gmail.com"
                                        target="_blank"
                                    >
                                        proyectonigma@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[0.5rem] leading-[1.5rem]">
                                <Image
                                    className="w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                    alt="location"
                                    src={IconLocationImage}
                                />

                                <div>
                                    <p className='m-0'>Bogotá, Colombia</p>
                                    <p>Xalapa, México</p>
                                    <p>Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-6">
                        <div className='flex items-center justify-between'>
                            <div className='hidden lg:flex lg:flex-col items-center lg:items-start gap-2'>
                                <Image
                                    className="object-cover"
                                    quality={100}
                                    alt=""
                                    src={MenuImage}
                                />
                                <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Menú</h2>
                            </div>
                            <div className="flex lg:hidden flex-col">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <div className='flex lg:flex-col items-center lg:items-start gap-2'>
                                            <Image
                                                className="object-cover"
                                                quality={100}
                                                alt=""
                                                src={MenuImage}
                                            />
                                            <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Menú</h2>
                                        </div>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Home
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Misión
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Equipo
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Productos
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Noticias
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Servicios
                                    </Link>
                                    <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] ml-10 tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem] mt-3 group-open:animate-fadeIn">
                                        Contacto
                                    </Link>
                                </details>
                            </div>
                        </div>

                        <div
                            className="hidden lg:flex flex-col items-start justify-start gap-[1rem] text-base text-m3-sys-light-tertiary-container">
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Home
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Misión
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Equipo
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Productos
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Noticias
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Servicios
                            </Link>
                            <Link href="#" className="text-m3-sys-light-tertiary-container [text-decoration:none] tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                                Contacto
                            </Link>
                        </div>
                    </div>
                    <div className="w-full hidden lg:flex flex-col items-start justify-start gap-6">
                        <div className='hidden lg:flex lg:flex-col items-center lg:items-start gap-2'>
                            <Image
                                className="object-cover"
                                quality={100}
                                alt=""
                                src={TermsAndCondImage}
                            />
                            <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Términos legales</h2>
                        </div>
                        <div
                            className="flex flex-col items-start justify-start gap-[1rem] text-base text-m3-sys-light-tertiary-container">
                            <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center">
                                Política de privacidad
                            </div>
                            <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center">
                                Aviso legal Términos y condiciones
                            </div>
                            <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center">
                                Configuración de las cookies
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-6">
                        <div className='flex items-center justify-between'>
                            <div className='hidden lg:flex lg:flex-col items-center lg:items-start gap-2'>
                                <Image
                                    className="object-cover"
                                    quality={100}
                                    alt=""
                                    src={News}
                                />
                                <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Últimas noticias</h2>
                            </div>
                            <div className="flex lg:hidden flex-col">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <div className='flex lg:flex-col items-center lg:items-start gap-2'>
                                            <Image
                                                className="object-cover"
                                                quality={100}
                                                alt=""
                                                src={News}
                                            />
                                            <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Últimas noticias</h2>
                                        </div>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="w-[20.69rem] mt-4 flex flex-col items-start justify-start gap-[1rem] text-base text-m3-sys-light-tertiary-container">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                            <Image
                                                className="relative rounded w-[2rem] h-[2rem] object-cover"
                                                alt=""
                                                src={Astro}
                                            />
                                            <div className="flex-1 flex flex-col items-start justify-start">
                                                <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                                    Last news Corporate environment
                                                </div>
                                                <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                                    September 23, 2019
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                            <Image
                                                className="relative rounded w-[2rem] h-[2rem] object-cover"
                                                alt=""
                                                src={Astro}
                                            />
                                            <div className="flex-1 flex flex-col items-start justify-start">
                                                <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                                    Last news Corporate environment
                                                </div>
                                                <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                                    September 23, 2019
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                            <Image
                                                className="relative rounded w-[2rem] h-[2rem] object-cover"
                                                alt=""
                                                src={Astro}
                                            />
                                            <div className="flex-1 flex flex-col items-start justify-start">
                                                <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                                    Last news Corporate environment
                                                </div>
                                                <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                                    September 23, 2019
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div
                            className="w-[20.69rem] hidden lg:flex flex-col items-start justify-start gap-[1rem] text-base text-m3-sys-light-tertiary-container">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                <Image
                                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                                    alt=""
                                    src={Astro}
                                />
                                <div className="flex-1 flex flex-col items-start justify-start">
                                    <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                        Last news Corporate environment
                                    </div>
                                    <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                        September 23, 2019
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                <Image
                                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                                    alt=""
                                    src={Astro}
                                />
                                <div className="flex-1 flex flex-col items-start justify-start">
                                    <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                        Last news Corporate environment
                                    </div>
                                    <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                        September 23, 2019
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                                <Image
                                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                                    alt=""
                                    src={Astro}
                                />
                                <div className="flex-1 flex flex-col items-start justify-start">
                                    <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                                        Last news Corporate environment
                                    </div>
                                    <div className="self-stretch relative text-[0.69rem] tracking-[0.5px] leading-[1rem] font-medium">
                                        September 23, 2019
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 flex flex-col items-start justify-start gap-6 mb-16 text-base">
                        <div className='hidden lg:flex lg:flex-col items-center lg:items-start gap-2'>
                            <Image
                                className="object-cover"
                                quality={100}
                                alt=""
                                src={TagsImage}
                            />
                            <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Tags</h2>
                        </div>

                        <div className="flex lg:hidden flex-col">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <div className='flex lg:flex-col items-center lg:items-start gap-2'>
                                            <Image
                                                className="object-cover"
                                                quality={100}
                                                alt=""
                                                src={TagsImage}
                                            />
                                            <h2 className='text-3xl m-0 leading-7 font-montserrat text-m3-sys-light-secondary-container font-normal'>Tags</h2>
                                        </div>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className='tracking-[1.2px] leading-[2rem]'>#nigma
                                    #NigmaUniverse
                                    #NigmaPlanet
                                    #NigmaForce
                                    #NigmaConstellation
                                    #NigmaBooks
                                    #NigmaLearning
                                    #transmedia
                                    #crossmedia
                                    #hipermedia
                                    #editorial
                                    #NigmaPress
                                    #NigmaLive
                                    #NigmaEventos
                                    #NigmaEnseña</p>
                                </details>
                            </div>


                        <div
                            className="self-stretch hidden lg:flex flex-row flex-wrap items-center justify-start gap-[0.5rem] text-base text-m3-sys-light-tertiary-container">
                            <div className="flex flex-row items-center justify-center">
                                <p className='m-0 tracking-[1.2px] leading-[2rem]'>#nigma
                                    #NigmaUniverse
                                    #NigmaPlanet
                                    #NigmaForce
                                    #NigmaConstellation
                                    #NigmaBooks
                                    #NigmaLearning
                                    #transmedia
                                    #crossmedia
                                    #hipermedia
                                    #editorial
                                    #NigmaPress
                                    #NigmaLive
                                    #NigmaEventos
                                    #NigmaEnseña</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse gap-3 md:flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-[0.5rem]">
                        <Image
                            className="relative w-[1.5rem] h-[1.5rem] object-cover"
                            alt="cpyright"
                            src={CopyRightImage}
                        />
                        <div className="relative tracking-[0.5px] leading-[1.5rem]">
                            Nigma 2023
                        </div>
                        <div className="relative tracking-[0.5px] leading-[1.5rem]">
                            All rights reserved.
                        </div>
                    </div>

                    <div className="flex items-center gap-[1rem]">
                        <Link href={InstagramLink}>
                            <Image
                                className="w-[1.5rem] h-[1.5rem]"
                                alt="instagram"
                                src={InstagramImage}
                            />
                        </Link>
                        <Link href={TwitterLink}>
                            <Image
                                className="w-[1.5rem] h-[1.5rem]"
                                alt="twitter"
                                src={TwitterImage}
                            />
                        </Link>
                        <Link href={YouTubeLink}>
                            <Image
                                className="w-[1.5rem] h-[1.5rem]"
                                alt="youtube"
                                src={YouTubeImage}
                            />
                        </Link>
                        <Link href={TikTokLink}>
                            <Image
                                className="w-[1.5rem] h-[1.5rem]"
                                alt="tiktok"
                                src={TikTokImage}
                            />
                        </Link>
                        <Link href={FacebookLink}>
                            <Image
                                className="w-[1.5rem] h-[1.5rem]"
                                alt="facebook"
                                src={FacebookImage}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer