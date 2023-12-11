import Image from 'next/image'

import HeroImage from '../assets/hero1.png'
import ButtonLink from '~/components/ButtonLink'
import NeonWomanImage from '../assets/neon-young-woman.svg'
import Decoration1Image from '../assets/v1864_6849.png'
import Decoration2Image from '../assets/decoration2.png'
import DecorationStarsImage from '../assets/decorationStars.png'
import NigmaPlanetImage from '../assets/NigmaPlanet.svg'
import NeonBrandImage from '../assets/neon-brand-identity-design-on-tablet.png'
import CometaImage from '../assets/cometa.svg'
import MarcasImage from '../assets/Marcas.png'
import TestimonialsImage from '../assets/Testimonials.svg'

export default function Welcome() {
  return (
    <div className="relative mx-auto pt-32">
      <div
        className="w-full opacity-30 absolute top-0 left-0 z-0"
        style={{
          height: 360,
          backgroundImage: `url("${DecorationStarsImage.src}")`,
          backgroundSize: '150px 200px',
          backgroundPosition: 'center',
          backgroundRepeat: 'space'
        }}
      />

      <div className="w-full text-xl leading-normal">
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto relative">
            <div
              className="fixed -top-40 -left-36 z-10 opacity-80 rounded-full blur-sm"
              style={{
                width: 358,
                height: 358,
                background: 'linear-gradient(129deg, rgba(255, 230, 10, 0.34) 31.03%, rgba(2, 2, 0, 0.00) 73.69%)'
              }}>

            </div>
            <Image src={Decoration1Image} alt="decoration" className="absolute -top-52 -left-52 z-0 w-96 opacity-80" />
            <Image src={Decoration2Image} alt="decoration 2"
                   className="absolute -top-24 -left-24 z-0 w-36 rotate-45 transform" />

            <h1 className="max-w-xl text-5xl font-[600] mb-8 z-[1] font-montserrat">
              “<span className="text-secondary-container">Nigma:</span> Creando mundos inesperados”
            </h1>

            <ButtonLink href="" label="Acompáñanos" />
          </div>

          <Image src={HeroImage} alt="hero" className="absolute -right-20 top-0" />
        </section>

        <section className="min-h-[560px]">
          <div className="container mx-auto flex justify-center gap-6 items-center">
            <Image src={NeonWomanImage} alt="" className="w-96" />

            <div className="min-w-[460px]">
              <h2 className="text-4xl font-medium mb-14">
                Viaja a distintos universos navegando con nosotros.
              </h2>

              <div className="flex gap-4">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
                      fill="white" />
                  </svg>
                </button>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z"
                      fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-24"
          style={{
            background: 'linear-gradient(180deg, #000 -15.57%, rgba(18, 31, 37, 0.00) 162.88%)'
          }}
        >
          <div className="container mx-auto">
            <h2 className="text-5xl mb-14 text-secondary-container">
              Universos Nigma
            </h2>

            <div className="flex items-start gap-28 justify-center mb-14 text-[#D4E3FF]">
              <Image src={NigmaPlanetImage} alt="" />

              <div className="font-montserrat text-base min-w-max">
                <Image src={NeonBrandImage} alt="" width={400} height={400} className="w-[400px]" />
                <h3 className="text-2xl mb-3">
                  Nigma Planet
                </h3>
                <p className="w-[420px]">
                  Contenido estratégico digital, impreso y editorial provisto de conceptos disruptivos e innovadores.
                </p>
                <button>
                  Ver servicio
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image src={CometaImage} alt="" className="max-w-min max-h-min" />
              <h3 className="my-6 text-2xl">
                Conoce todos los mundos que podemos alcanzar
              </h3>
              <ButtonLink href="" label="Explora aquí" />
            </div>
          </div>
        </section>

        <section className="pt-24 text-center">
          <div className="container mx-auto mb-16">
            <h3 className="text-secondary-container mb-4">
              Nuestros aliados
            </h3>
            <p>
              Estos son solo algunos de los importantes aliados con los que hemos compartido viajes profesionales
              fantásticos
            </p>
          </div>

          <Image src={MarcasImage} alt="marcas" className="w-full" />
        </section>

        <section className="relative">
          <Image src={TestimonialsImage} alt="testimonials" className="w-full absolute top-0 left-0" />

          <div className="text-center pt-[800px]">
            <h3 className="mb-16">
              Testimonios
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto">
            <h2 className="text-center text-5xl font-semibold mb-14">
              ¿Por qué somos el mejor equipo interestelar?
            </h2>

            <div className="grid grid-cols-4 gap-6">
              <div className="text-left">
                <img src="https://placeholder.com/100/100" alt="" srcSet="" className="mb-4" />
                <h3 className="text-3xl font-semibold mb-3">Originalidad</h3>
                <p className="text-base">
                  Plasmamos nuestro sello único en todos los proyectos tomando como base una estética
                  propia que nos identifica.
                </p>
              </div>
              <div>
                <img src="https://placeholder.com/100/100" alt="" srcSet="" className="mb-4" />
                <h3 className="text-3xl font-semibold mb-3">Personalización</h3>
                <p className="text-base">
                  Nuestro proceso de co-creación y diseño genera resultados impactantes al lanzar
                  proyectos juntos.
                </p>
              </div>
              <div>
                <img src="https://placeholder.com/100/100" alt="" srcSet="" className="mb-4" />
                <h3 className="text-3xl font-semibold mb-3">Innovación</h3>
                <p className="text-base">
                  Contar con un equipo provisto de grandes facultades creativas es la garantía de llegar a
                  propuestas innovadoras y
                  disruptivas.
                </p>
              </div>
              <div>
                <img src="https://placeholder.com/100/100" alt="" srcSet="" className="mb-4" />
                <h3 className="text-3xl font-semibold mb-3">Efectividad</h3>
                <p className="text-base">
                  Equilibramos talento y compromiso para alcanzar resultados de alta calidad y
                  puntualidad, siguiendo OKR y estándares KPI
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container flex flex-col items-center justify-center h-96">
            <img src="https://placeholder.com/132/132" alt="" srcSet="" className="max-w-xs" />
            <h2 className="text-3xl my-6">
              Haz parte de nuestra bitácora de viaje
            </h2>
            <a href="" className="bg-yellow-400 py-2 px-6 rounded-full text-base text-gray-900">
              Iniciar viaje
            </a>
          </div>
        </section>

        <section className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1088" fill="none"
               className="absolute top-0 left-0 w-full -z-[1]">
            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd"
                  d="M582.5 0C260.794 0 0 260.794 0 582.5V1050.35C23.702 1046.92 48.6803 1042.89 74.908 1038.66C251.734 1010.11 485.35 972.406 767.5 1050.35C857.964 1075.33 967.18 1086.53 1073.78 1088H1122.84C1249.55 1086.27 1367.69 1071.36 1440 1050.35V582.5C1440 260.794 1179.21 0 857.5 0H582.5Z"
                  fill="url(#paint0_linear_1864_6812)" />
            <defs>
              <linearGradient id="paint0_linear_1864_6812" x1="720" y1="0" x2="720" y2="1088"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#006971" />
                <stop offset="1" stop-color="#006971" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container">
            <div className="flex justify-between mt-32 py-20 px-16">
              <div className="max-w-2xl">
                <h2 className="text-5xl mb-10 font-semibold">Navega con nosotros por esta galaxia de proyectos
                </h2>
                <img src="https://placeholder.com/600/600" alt="" srcSet="" />
              </div>
              <div className="max-w-md">
                <ul>
                  <li className="mb-8">
                    <h3 className="text-[#84F3FF] text-2xl">
                      El mejor equipo
                    </h3>
                    <p className="text-base">
                      Tenemos un grupo que está a la altura para llevar al máximo el
                      alcance de cualquier
                      proyecto.
                    </p>
                  </li>
                  <li className="mb-8">
                    <h3 className="text-[#84F3FF] text-2xl">
                      Conexiones estratégicas
                    </h3>
                    <p className="text-base">
                      Contamos con una red de difusión alimentada por aliados fuertes que nos dan la
                      infraestructura ideal para llevar
                      nuestras ideas a más lugares de forma sorprendente
                    </p>
                  </li>
                  <li className="mb-8">
                    <h3 className="text-[#84F3FF] text-2xl">
                      Experiencia sideral
                    </h3>
                    <p className="text-base">
                      Tenemos la fusión profesional de más alto nivel, gracias a nuestro trabajo con
                      grandes clientes, marcas e instituciones
                    </p>
                  </li>
                  <li className="mb-8">
                    <h3 className="text-[#84F3FF] text-2xl">
                      Estrategias de vanguardia
                    </h3>
                    <p className="text-base">
                      Estamos preparados para articular cada proyecto adaptándonos a sus necesidades
                      gracias a la aplicación profesional de
                      metodologías ágiles y de diseño centrados en el beneficio de la humanidad
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container my-20">
            <h2 className="text-center mb-14 text-5xl text-yellow-400">
              ¿Cuál es nuestro polvo de estrella?
            </h2>

            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-4 px-8 py-8 w-full max-w-xl bg-[#121F25]"
                   style={{
                     boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)'
                   }}>
                <h3 className="text-xl font-normal">
                  La misión de Nigma no se reduce a producir objetos sin vida, estáticos.
                </h3>
                <img src="https://placeholder.com/200/200" alt="" srcSet="" />
              </div>

              <div className="flex items-center gap-4 px-8 py-8 w-full max-w-xl bg-[#121F25]"
                   style={{
                     boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)'
                   }}
              >
                <h3 className="text-xl font-normal">
                  Cada vez que iniciamos un nuevo viaje hacia nuestra próxima aventura creativa sabemos
                  que vamos a traspasar la frontera
                  de los universos habituales.
                </h3>
                <img src="https://placeholder.com/200/200" alt="" srcSet="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h3 className="text-center text-5xl mb-14">
              Últimas experiencias
            </h3>
            <div className="grid grid-cols-2">
              <div className="">
                <img src="https://placeholder.com/600/600" alt="" srcSet="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
