import Image from 'next/image'
import Link from 'next/link'

import PatternStarsImage from '../assets/2patronpp.svg'
import HeroImage from '../assets/hero1.png'
import TwitterImage from '../assets/icons-twitter.svg'
import YouTubeImage from '../assets/icons-youtube.svg'
import FacebookImage from '../assets/icons8-facebook (1) 1.svg'
import InstagramImage from '../assets/icons8-instagram 1.svg'
import TikTokImage from '../assets/icons8-tiktok 1.svg'
import LogoNigmaImage from '../assets/logonigma.svg'
import ManosDiamanteImage from '../assets/ManosDiamante.png'
import SunImage from '../assets/sun.png'
import NeonWomanImage from '../assets/neon-young-woman.svg'
import CopyRightImage from '../assets/copyright.png'
import MenuImage from '../assets/Menu.png'
import TermsAndCondImage from '../assets/termscond.svg'
import TagsImage from '../assets/tags.svg'
import Patron5Image from '../assets/patron.svg'
import PatronStarImage from '../assets/patronStar.svg'
import ComputerPlanetImage from '../assets/computerplanet.png'
import ShimmerImage from '../assets/shimmer.svg'
import ProgressImage from '../assets/progress.svg'
import CometaImage from '../assets/cometa.svg'
import SunFrontImage from '../assets/sunfront.png'
import Silueta1Image from '../assets/silueta1.png'
import Silueta2Image from '../assets/silueta2.png'
import BgYellowCurvedImage from '../assets/bgyellowcurved.svg'
import SubtractImage from '../assets/Subtract.svg'
import SolarSystemImage from '../assets/solarsystem.png'
import Silueta3Image from '../assets/silueta3.png'
import BgGradientImage from '../assets/bggradient1.svg'

const InstagramLink = 'https://www.instagram.com/nigma.co/'
const FacebookLink = 'https://www.facebook.com/nigma.co'
const TwitterLink = 'https://twitter.com/nigma_co'
const YouTubeLink = 'https://www.youtube.com/channel/UCXy5B0xqj3Jgq7Q8kKZj7WQ'
const TikTokLink = 'https://www.tiktok.com/@nigma_co?lang=es'

export default function Welcome() {
  return (
    <main
      className="relative [background:linear-gradient(180deg,_#000b0c_4.28%,_#002023_5.69%,_#002023)] w-full h-[746.5rem] overflow-hidden text-center text-[2.75rem] text-m3-sys-light-secondary-container font-montserrat">
      <div className="absolute top-[478.19rem] left-[calc(50%_-_720px)] w-[90rem] h-[53.81rem]">
        <img
          className="absolute top-[-0.02rem] left-[0rem] w-[90rem] h-[54.4rem] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute top-[10.75rem] left-[calc(50%_-_391px)] leading-[120%] font-semibold">
          ¿Cuál es nuestro polvo de estrella?
        </div>
        <div className="absolute top-[40.06rem] left-[12.5rem] flex flex-row items-start justify-start gap-[1rem]">
          <div
            className="shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] w-[3rem] h-[3rem] flex flex-col items-center justify-center p-[0.25rem] box-border">
            <div
              className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-[0.5rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] w-[3rem] h-[3rem] flex flex-col items-center justify-center p-[0.25rem] box-border">
            <div
              className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-[0.5rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[17.56rem] left-[12.5rem] flex flex-row items-start justify-start gap-6 text-left text-[1.38rem] text-m3-sys-light-tertiary-container">
          <div
            className="self-stretch rounded-2xl bg-gray-100 shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-start py-[4rem] px-[2rem] gap-[1rem]">
            <div className="relative leading-[1.75rem] flex items-center w-[19.5rem]">
              La misión de Nigma no se reduce a producir objetos sin vida, estáticos.
            </div>
            <img
              className="relative w-[12.5rem] h-[12.5rem] object-cover"
              alt=""
              src="/obje--capa@2x.png"
            />
          </div>
          <div
            className="rounded-2xl bg-gray-100 shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-start py-[4rem] px-[2rem] gap-[2rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.75rem] flex items-center w-[19.5rem]">
                Cada vez que iniciamos un nuevo viaje hacia nuestra próxima
                aventura creativa sabemos que vamos a traspasar la frontera de
                los universos habituales.
              </div>
            </div>
            <img
              className="relative w-[12.5rem] h-[12.5rem] object-cover"
              alt=""
              src="/patron-2@2x.png"
            />
          </div>
          <div
            className="self-stretch rounded-2xl bg-gray-100 shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-start py-[4rem] px-[2rem] gap-[2rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.75rem] flex items-center w-[19.5rem]">
                Y vamos a abarcar una propuesta mucho más amplia siempre en
                beneficio de la humanidad
              </div>
            </div>
            <img
              className="relative w-[12.5rem] h-[12.5rem] object-cover"
              alt=""
              src="/obje-3@2x.png"
            />
          </div>
          <div
            className="rounded-2xl bg-gray-100 shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-start py-[4rem] px-[2rem] gap-[2rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.75rem] flex items-center w-[19.5rem]">
                Nuestro sello BIC nos acredita como “Empresa con propósito”.
                Siempre hemos sido un proyecto que la da mayor prioridad al
                propósito social y ambiental.
              </div>
            </div>
            <img
              className="relative w-[12.5rem] h-[12.5rem] object-cover"
              alt=""
              src="/obje-4@2x.png"
            />
          </div>
        </div>
      </div>
      <section
        className="absolute top-[156.25rem] left-0 w-screen overflow-hidden flex flex-col items-center justify-start py-[5.25rem] px-[0rem] box-border gap-[3.5rem] text-[2.81rem]">
        <img
          className="absolute my-0 top-[0rem] left-[69.25rem] w-[38.25rem] h-[38.25rem] object-cover opacity-[0.2] z-[0]"
          alt=""
          src="/2-patronpppp@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-6 z-[1]">
          <div className="relative leading-[120%] font-semibold">
            Nuestros aliados
          </div>
          <div
            className="relative text-[1.38rem] leading-[1.75rem] text-m3-sys-light-tertiary-container flex items-center justify-center w-[42.88rem]">
            Estos son solo algunos de los importantes aliados con los que hemos
            compartido viajes profesionales fantásticos
          </div>
        </div>
        <div className="w-screen flex flex-col items-start justify-start gap-[2rem] opacity-[0.6] z-[2]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[2.5rem]">
              <img
                className="relative w-[5.15rem] h-[2.38rem] overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
              <img
                className="relative w-[7.53rem] h-[2.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame1.svg"
              />
              <img
                className="relative w-[9.6rem] h-[2.25rem] overflow-hidden shrink-0"
                alt=""
                src="/frame2.svg"
              />
              <img
                className="relative w-[8.74rem] h-[2.75rem] overflow-hidden shrink-0"
                alt=""
                src="/frame3.svg"
              />
              <img
                className="relative w-[9.69rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/bancolombia-sa-logo.svg"
              />
              <img
                className="relative w-[6.05rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/cocacolalogo40dae9byq3-brandlogosnet.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center">
            <div className="h-[2.75rem] flex flex-row items-center justify-start gap-[2.5rem]">
              <img
                className="relative w-[5.64rem] h-[2.5rem] overflow-hidden shrink-0"
                alt=""
                src="/unal.svg"
              />
              <img
                className="relative w-[10.18rem] h-[2.5rem] overflow-hidden shrink-0"
                alt=""
                src="/universidad-ecci.svg"
              />
              <img
                className="relative w-[6.89rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/celsiaseeklogocom-1.svg"
              />
              <img
                className="relative w-[5.78rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/sura.svg"
              />
              <img
                className="relative w-[4rem] h-[2.19rem] overflow-hidden shrink-0"
                alt=""
                src="/cencosud-1.svg"
              />
              <img
                className="relative w-[6.5rem] h-[2.19rem] overflow-hidden shrink-0"
                alt=""
                src="/trident.svg"
              />
              <img
                className="relative w-[7.56rem] h-[1.5rem]"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <Image
          className="absolute my-0 top-0 left-0 w-[33rem] h-[29rem] opacity-50 z-[3]"
          alt=""
          src={BgGradientImage}
        />
        <div
          className="absolute my-0 top-[-44.87rem] left-[62.04rem] rounded-[50%] [background:linear-gradient(213.81deg,_#020200,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[57.69rem] h-[57.69rem] [transform:_rotate(15deg)] [transform-origin:0_0] opacity-[0.32] z-[4]" />
        <img
          className="absolute my-0 top-[9.44rem] left-[6.19rem] w-[11.5rem] h-[11.5rem] object-cover opacity-[0.5] z-[5]"
          alt=""
          src="/2-patron-pp@2x.png"
        />
        <img
          className="absolute my-0 top-[13.63rem] left-[82rem] w-[6.25rem] h-[6.25rem] object-cover opacity-[0.5] z-[6]"
          alt=""
          src="/2-patron-pp1@2x.png"
        />
      </section>
      <img
        className="absolute top-[3.19rem] left-[61.44rem] w-[32.13rem] h-[32.13rem] object-cover opacity-[0.3]"
        alt=""
        src="/patron-7@2x.png"
      />
      <Image
        className="absolute top-[6.13rem] left-[80.94rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={SunImage}
      />
      <Image
        className="absolute top-[2.69rem] left-[0rem] w-[6.25rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[0.5rem] left-[73.5rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[8.31rem] left-[5.19rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[4.75rem] left-[63.13rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[4.06rem] left-[15.56rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[1.88rem] left-[50.88rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[7.88rem] left-[27.5rem] w-[6.63rem] h-[6.63rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[3.5rem] left-[11.06rem] w-[4.38rem] h-[4.38rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[1.75rem] left-[36.19rem] w-[8.5rem] h-[8.5rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <Image
        className="absolute top-[9rem] left-[44.75rem] w-[6.56rem] h-[6.56rem] object-cover opacity-[0.5]"
        alt=""
        src={PatternStarsImage}
      />
      <div className="absolute top-[12.75rem] left-[12.5rem]" />
      <div
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[108.88rem] overflow-hidden hidden text-[0.88rem] text-m3-white font-inter">
        <img
          className="absolute h-[4.82%] w-full top-[100%] right-[0%] bottom-[-4.82%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute h-[0.96%] w-full top-[44.36%] right-[0%] bottom-[54.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute h-[0.96%] w-full top-[45.33%] right-[0%] bottom-[53.71%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <img
          className="absolute h-[0.96%] w-full top-[46.29%] right-[0%] bottom-[52.74%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
        <img
          className="absolute h-[0.96%] w-full top-[47.26%] right-[0%] bottom-[51.78%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector5.svg"
        />
        <b className="absolute top-[46.45%] left-[46.49%]">DANGER ZONE</b>
        <img
          className="absolute h-[51.78%] w-full top-[48.22%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector6.svg"
        />
        <img
          className="absolute w-full top-[48.22%] right-[0%] left-[0%] max-w-full overflow-hidden h-[0rem]"
          alt=""
          src="/vector7.svg"
        />
        <img
          className="absolute h-[1.65%] w-[15%] top-[46.57%] right-[84.31%] bottom-[51.78%] left-[0.69%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector8.svg"
        />
        <img
          className="absolute h-[3.31%] w-[15%] top-[44.91%] right-[84.31%] bottom-[51.78%] left-[0.69%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector9.svg"
        />
        <b className="absolute top-[46.02%] left-[2.88%] text-[1.2rem]">
          1ST SCREENFUL
        </b>
        <img
          className="absolute w-full top-[98.79%] right-[0%] left-[0%] max-w-full overflow-hidden h-[0rem]"
          alt=""
          src="/vector10.svg"
        />
      </div>
      <Image
        className="absolute top-[46.5rem] -right-32 w-[39rem] h-[39.69rem] object-contain"
        alt=""
        src={PatronStarImage}
      />
      <div
        className="absolute top-[-17.19rem] left-[27.38rem] rounded-[50%] [background:linear-gradient(128.69deg,_#4dd9e6,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[58.69rem] h-[58.69rem] opacity-[0.16]" />
      <div
        className="absolute top-[-8.44rem] left-[71.63rem] rounded-[50%] [background:linear-gradient(129.4deg,_#4dd9e6,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[65.69rem] h-[58.69rem] opacity-[0.16]" />
      <div
        className="absolute top-[-9.62rem] left-[2.56rem] rounded-[50%] [background:linear-gradient(128.69deg,_#004f55,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[29.5rem] h-[29.5rem] opacity-[0.5]" />
      <div
        className="absolute top-[38.19rem] left-[-17.94rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[37.94rem] h-[37.94rem] opacity-[0.5] border-[1px] border-solid border-teal" />
      <Image
        className="absolute top-[38rem] -left-14 w-[30rem] h-[30rem] object-fill"
        alt=""
        src={Patron5Image}
      />
      <div
        className="absolute top-[96.47rem] left-[37.43rem] rounded-[50%] [background:linear-gradient(213.81deg,_#020200,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[57.69rem] h-[57.69rem] [transform:_rotate(120deg)] [transform-origin:0_0] opacity-[0.32]" />
      <img
        className="absolute top-[128.94rem] left-[0rem] w-[24.75rem] h-[24.75rem] object-cover opacity-[0.5]"
        alt=""
        src="/2-patronpppp-1@2x.png"
      />

      <div
        className="absolute top-[76.41rem] left-[116.4rem] rounded-[50%] [background:linear-gradient(213.81deg,_rgba(77,_217,_230,_0.55),_rgba(77,_217,_230,_0))] [filter:blur(94px)] w-[44.95rem] h-[44.95rem] [transform:_rotate(120deg)] [transform-origin:0_0] opacity-[0.2]" />

      <div
        className="absolute top-[252.38rem] left-[0rem] w-[90rem] hidden flex-col items-start justify-start py-[5.25rem] px-[12.5rem] box-border gap-[3.5rem] text-left text-[1.75rem]">
        <div className="relative text-[2.75rem] leading-[120%] font-semibold flex items-center w-[26.19rem]">
          Universos Nigma
        </div>
        <div className="flex flex-row items-center justify-start gap-[7.06rem] text-m3-sys-light-primary">
          <div className="relative w-[26.19rem] h-[31.25rem]">
            <div
              className="absolute top-[1.87rem] left-[10.8rem] rounded-[50%] bg-khaki [filter:blur(61px)] w-[2.77rem] h-[2.77rem] opacity-[0.7]" />
            <div className="absolute top-[2.13rem] left-[-2.94rem] w-[29.56rem] h-[25.88rem]">
              <div
                className="absolute top-[0rem] left-[17.13rem] leading-[2.25rem] font-medium text-m3-sys-light-primary-container flex items-center w-[12.44rem]">
                Nigma Planet
              </div>
              <div
                className="absolute top-[21.38rem] left-[16.75rem] leading-[2.25rem] font-medium flex items-center w-[12.38rem]">
                Nigma Constellation
              </div>
              <div
                className="absolute top-[12rem] left-[0rem] leading-[2.25rem] font-medium text-right flex items-center w-[13.5rem]">
                Nigma Force
              </div>
              <Image
                className="absolute top-[0.13rem] left-[14.13rem] w-[2rem] h-[25.25rem]"
                alt=""
                src={ProgressImage}
              />
            </div>
            <img
              className="absolute top-[-5.66rem] left-[11.19rem] w-[10.75rem] h-[14.5rem]"
              alt=""
              src="/shimmer.svg"
            />
          </div>
          <div
            className="w-[31.75rem] flex flex-col items-center justify-start gap-[1rem] text-[1rem] text-m3-sys-light-tertiary-container">
            <img
              className="relative w-[25rem] h-[25rem]"
              alt=""
              src="/neonbrandidentitydesignontablet-1.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="self-stretch flex flex-col items-start justify-start text-[2rem] text-m3-sys-light-primary-container">
                <div className="self-stretch relative leading-[2.5rem] font-semibold">
                  Nigma Planet
                </div>
              </div>
              <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                Contenido estratégico digital, impreso y editorial provisto de
                conceptos disruptivos e innovadores.
              </div>
              <div
                className="rounded-81xl box-border h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center border-[1px] border-solid border-m3-sys-light-outline">
                <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                    Ver servicio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65rem] flex flex-col items-center justify-center gap-6 text-center text-m3-white">
          <img
            className="relative w-[8.25rem] h-[8.25rem] object-cover"
            alt=""
            src="/2-patron-corregido@2x.png"
          />
          <div
            className="self-stretch relative leading-[2.25rem] font-medium">{`Conoce todos los mundos que podemos alcanzar `}</div>
          <div
            className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-[1rem] text-m3-sys-light-on-primary-container">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
              <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                Explora aquí
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute top-[47.94rem] left-[0rem] w-[90rem] h-[35.5rem] text-left text-[2.25rem] text-m3-sys-light-tertiary-container">
        <div
          className="absolute top-[0rem] left-[calc(50%_-_720px)] w-[90rem] flex flex-row items-center justify-start py-[5.25rem] px-[12.5rem] box-border gap-6">
          <Image
            className="relative w-[25rem] h-[25rem] overflow-hidden shrink-0"
            alt="neon"
            src={NeonWomanImage}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.5rem]">
            <div className="relative leading-[2.75rem] font-medium flex items-center w-[36.94rem]">
              Viaja a distintos universos navegando con nosotros.
            </div>
            <div className="flex flex-row items-start justify-start gap-[1rem]">
              <div className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center w-10 h-10 text-base">
                {'<'}
              </div>

              <div className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center w-10 h-10 text-base">
                {'>'}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute top-[0rem] left-[0rem] h-[49.56rem] text-left text-[3.56rem] text-m3-white">
        <div
          className="absolute top-[7.88rem] left-[8.63rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[23.19rem] h-[23.19rem] opacity-[0.5] border-[1px] border-solid border-teal" />
        <div
          className="absolute top-[calc(50%_-_80.5px)] left-[12.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <span className="[line-break:anywhere] tracking-[-0.25px] leading-[4rem] w-[34rem]">
            <span className="font-semibold">“</span>
            <span className="text-m3-sys-light-secondary-container">
              <b>Nigma: </b>
            </span>
            <span className="font-semibold">
              Creando mundos inesperados”
            </span>
          </span>

          <div
            className="rounded-81xl bg-m3-sys-light-secondary-container h-[3.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
              <div className="leading-[1.25rem] font-semibold">
                Acompáñanos
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[42.45rem] left-[59.61rem] rounded-[50%] bg-gray-200 [filter:blur(124px)] w-[31.6rem] h-[1.85rem]" />
        <div
          className="absolute top-[-0.77rem] left-[8.33rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_230,_10,_0.34),_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[22.42rem] h-[22.42rem] [transform:_rotate(135deg)] [transform-origin:0_0] opacity-[0.5]" />
        <div
          className="absolute top-[17.98rem] left-[66.44rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_230,_10,_0.34),_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[22.42rem] h-[22.42rem] [transform:_rotate(45deg)] [transform-origin:0_0] opacity-[0.5]" />
        <Image
          className="absolute top-[4.81rem] -right-10 w-[57.84rem] h-[39.25rem] object-cover"
          alt="hero image"
          src={HeroImage}
          priority
        />

        <div
          className="absolute top-[36.81rem] left-[75.5rem] [background:linear-gradient(180deg,_rgba(2,_26,_28,_0),_#022022_53.52%,_#022023_99.02%)] w-[14.56rem] h-[12.25rem]" />

        <Image
          className="absolute top-[10.69rem] left-[0rem] w-[16.58rem] h-[17.08rem] object-cover"
          alt=""
          src={ManosDiamanteImage}
        />

        <nav className="w-screen text-base">
          <div className="container mx-auto flex flex-row items-center justify-center text-center mt-3">
            <Image
              className="relative w-[6.69rem] h-[1.88rem] object-cover"
              alt="logo"
              src={LogoNigmaImage}
            />

            <div className="self-stretch flex-1 flex flex-row items-center justify-end gap-[1rem]">
              <Link href="/"
                    className="self-stretch flex flex-col items-center justify-center relative text-m3-sys-light-secondary-container no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem]">
                    <div className=" tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Home
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 -top-3 left-[calc(50%_-_20px)] bg-m3-sys-light-secondary-container w-9 h-1" />
              </Link>

              <Link href="#mision" className="self-stretch flex flex-col justify-center text-white no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem]">
                    <div className=" tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Misión
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#team"
                    className="self-stretch flex flex-col items-center justify-center text-white no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem]">
                    <div className="tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Team
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#servicios"
                    className="self-stretch flex flex-col items-center justify-center text-white no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem]">
                    <div className=" tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Servicios
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#productos"
                    className="self-stretch flex flex-col items-center justify-center text-white no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div className="self-stretch flex-1 py-[0.63rem] px-[0.75rem]">
                    <div className="tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Productos
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog"
                    className="self-stretch flex flex-col items-center justify-center text-white no-underline">
                <div
                  className="rounded-81xl h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[0]">
                  <div className="self-stretch flex-1 flex py-[0.63rem] px-[0.75rem] font-semibold">
                    Noticias
                  </div>
                </div>
              </Link>

              <div className="flex flex-row items-center justify-end py-[0rem] px-[0.5rem] gap-[1rem]">
                <Link href={InstagramLink} className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                  <Image
                    alt="instagram"
                    src={InstagramImage}
                  />
                </Link>
                <Image
                  className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt="twitter"
                  src={TwitterImage}
                />
                <Image
                  className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt="youtube"
                  src={YouTubeImage}
                />
                <Image
                  className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt="tiktok"
                  src={TikTokImage}
                />
                <Image
                  className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt="facebook"
                  src={FacebookImage}
                />
              </div>
              <div
                className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-m3-sys-light-on-primary-container">
                <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                  <div className="tracking-[0.1px] leading-[1.25rem] font-semibold">
                    Contáctenos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section
        className="absolute top-[83.44rem] left-0 [background:linear-gradient(180deg,_#000,_rgba(18,_31,_37,_0))] [backdrop-filter:blur(4px)] w-screen overflow-hidden flex flex-col items-start justify-start py-[5.25rem] gap-[3.5rem] text-left text-[1.75rem]">
        <div
          className="absolute my-0 top-[53.98rem] left-[12.51rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_230,_10,_0.34),_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[22.42rem] h-[22.42rem] [transform:_rotate(135deg)] [transform-origin:0_0] opacity-[0.3] z-[0]" />

        <h2 className="text-[2.75rem] leading-[120%] font-semibold container mx-auto z-[2] text-center m-0">
          Universos Nigma
        </h2>

        <div className="grid grid-cols-2 gap-16 container mx-auto text-m3-sys-light-primary">
          <div className="relative w-full h-[31.25rem]">
            <div
              className="absolute top-[1.87rem] left-[10.8rem] rounded-[50%] bg-khaki [filter:blur(61px)] w-[2.77rem] h-[2.77rem] opacity-[0.7]" />
            <div className="absolute top-[2.13rem] left-[-2.94rem] w-[29.56rem] h-[25.88rem]">
              <div
                className="absolute top-[0rem] left-[17.13rem] leading-[2.25rem] font-medium text-m3-sys-light-primary-container flex items-center w-[12.44rem]">
                Nigma Planet
              </div>
              <div
                className="absolute top-[21.38rem] left-[16.75rem] leading-[2.25rem] font-medium flex items-center w-[12.38rem]">
                Nigma Constellation
              </div>
              <div
                className="absolute top-[12rem] left-[0rem] leading-[2.25rem] font-medium text-right flex items-center w-[13.5rem]">
                Nigma Force
              </div>
              <Image
                className="absolute top-[0.13rem] left-[14.13rem] w-[2rem] h-[25.25rem]"
                alt=""
                src={ProgressImage}
              />
            </div>
            <Image
              className="absolute top-[-5.66rem] left-[3.94rem] w-[16.56rem] h-[17.93rem]"
              alt=""
              src={ShimmerImage}
            />
          </div>
          <div
            className="flex flex-col items-center justify-start gap-[1rem] text-[1rem] text-m3-sys-light-tertiary-container">
            <Image
              className="w-[25rem] h-[25rem]"
              alt=""
              src={ComputerPlanetImage}
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="self-stretch flex flex-col items-start justify-start text-[2rem] text-m3-sys-light-primary-container">
                <div className="self-stretch relative leading-[2.5rem] font-semibold">
                  Nigma Planet
                </div>
              </div>
              <div className="self-stretch relative tracking-[0.5px] leading-[1.5rem]">
                Contenido estratégico digital, impreso y editorial provisto de
                conceptos disruptivos e innovadores.
              </div>
              <div
                className="rounded-81xl box-border h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center border-[1px] border-solid border-m3-sys-light-outline">
                <a href="#" className="text-white no-underline self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                    Ver servicio
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section
          className="container mx-auto flex flex-col items-center justify-center relative gap-6 z-[4] text-center text-m3-white">
          <Image
            className="relative w-[8.25rem] h-[8.25rem] object-cover z-[0]"
            alt=""
            src={CometaImage}
          />
          <div
            className="self-stretch relative leading-[2.25rem] font-medium z-[1]">{`Conoce todos los mundos que podemos alcanzar `}</div>
          <div
            className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[2] text-[1rem] text-m3-sys-light-on-primary-container">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
              <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                Explora aquí
              </div>
            </div>
          </div>
          <Image
            className="absolute my-0 top-[-29.56rem] left-[15.56rem] w-[12.13rem] h-[12.13rem] object-cover opacity-[0.5] z-[3]"
            alt=""
            src={PatternStarsImage}
          />
          <Image
            className="absolute my-0 top-[-4.69rem] left-[61.88rem] w-[14.13rem] h-[14.13rem] object-cover opacity-[0.5] z-[4]"
            alt=""
            src={PatternStarsImage}
          />
        </section>
        <Image
          className="absolute my-0 top-[11.25rem] left-[82.94rem] w-[15rem] h-[15rem] object-cover opacity-[0.5] z-[5]"
          alt=""
          src={PatternStarsImage}
        />
        <Image
          className="absolute my-0 top-[0rem] left-[43.13rem] w-[17.38rem] h-[16.56rem] object-cover opacity-[0.5] z-[6]"
          alt=""
          src={PatternStarsImage}
        />
        <Image
          className="absolute my-0 top-[5.13rem] left-[0rem] w-[7.06rem] h-[14.13rem] object-cover opacity-[0.5] z-[7]"
          alt=""
          src={PatternStarsImage}
        />
        <div
          className="absolute my-0 top-[129.77rem] left-[89.29rem] rounded-[50%] [background:linear-gradient(213.81deg,_#020200,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[57.69rem] h-[57.69rem] [transform:_rotate(-142.44deg)] [transform-origin:0_0] opacity-[0.32] z-[8]" />
        <Image
          className="absolute my-0 top-[42.88rem] left-[0.25rem] w-[13rem] h-[13rem] object-cover opacity-[0.5] z-[9]"
          alt=""
          src={PatternStarsImage}
        />
        <img
          className="absolute my-0 top-[86.69rem] left-[26.63rem] w-[14.13rem] h-[14.13rem] object-cover opacity-[0.5] z-[10]"
          alt=""
          src="/2-patron-pp19@2x.png"
        />
        <img
          className="absolute my-0 top-[50.13rem] left-[69.25rem] w-[38.25rem] h-[38.25rem] object-cover opacity-[0.2] z-[11]"
          alt=""
          src="/2-patronpppp1@2x.png"
        />
      </section>
      <div className="absolute top-[186.13rem] left-[0rem] w-[90rem] h-[73.75rem] text-[2.81rem]">
        <Image
          className="absolute top-32 left-[0rem] w-[30rem] h-[30rem] object-cover opacity-50"
          alt=""
          src={Silueta2Image}
        />
        <img
          className="absolute top-[59.25rem] left-[0rem] w-[18.25rem] h-[26.94rem] object-cover"
          alt=""
          src="/patron-corregopt1@2x.png"
        />
        <div
          className="absolute top-[5.13rem] left-[-63.5rem] rounded-[50%] [background:linear-gradient(170.41deg,_rgba(77,_217,_230,_0.26),_rgba(77,_217,_230,_0))] [filter:blur(94px)] w-[217.13rem] h-[103.06rem] opacity-[0.7]" />
        <div
          className="absolute top-[67.2rem] left-[calc(50%_-_0px)] rounded-[50%] [background:linear-gradient(135deg,_rgba(255,_224,_131,_0),_rgba(255,_224,_131,_0.47))] [filter:blur(94px)] w-[39.51rem] h-[39.51rem] [transform:_rotate(-135deg)] [transform-origin:0_0] opacity-[0.5]" />
        <img
          className="absolute top-[56.19rem] left-[36.29rem] w-[53.71rem] h-[91.4rem] opacity-[0.5]"
          alt=""
          src="/ellipse-15.svg"
        />
        <div
          className="absolute top-[100.06rem] left-[-8.87rem] rounded-[50%] [background:linear-gradient(128.69deg,_rgba(255,_224,_131,_0),_rgba(255,_224,_131,_0.26))] [filter:blur(94px)] w-[39.51rem] h-[39.51rem] [transform:_rotate(-120deg)] [transform-origin:0_0] opacity-[0.3]" />
        <Image
          className="absolute top-[-8.19rem] left-[57.66rem] w-[32.34rem] h-[48.15rem] object-cover opacity-[0.3]"
          alt=""
          src={Silueta1Image}
        />
        <div className="absolute top-[29.31rem] left-[13.48rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[9.5rem] h-[9.5rem] opacity-[0.5] border-[1px] border-solid border-teal" />
        <section className="absolute top-[20.31rem] left-[calc(50%_-_720px)] w-screen flex flex-col items-center justify-start py-[5.25rem] box-border gap-[3.5rem]">
          <Image
            className="relative w-[12.5rem] h-[12.5rem] object-cover z-[0]"
            alt="sun"
            src={SunFrontImage}
          />
          <div className="relative leading-[120%] font-medium z-[1]">
            Testimonios
          </div>
          <div
            className="flex flex-col items-center justify-center gap-[3.5rem] z-[2] text-[2rem] text-m3-sys-light-tertiary-container font-m3-label-large">
            <div className="w-[42.88rem] flex flex-col items-start justify-start gap-[1rem]">
              <div className="self-stretch relative leading-[2.5rem]">
                Son eficientes, profesionales y expertos en lo que hacen.
                Pasamos de estar en 0 a tener un alto estándar de una plataforma
                e-learning y sus objetos de virtualización de aprendizaje.
              </div>
              <div className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] font-montserrat">
                - Camilo Rojas, Coordinador Unidad de Virtualización UniCIEO
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1rem]">
              <div className="w-[3rem] h-[3rem] flex flex-col items-center justify-center p-[0.25rem] box-border">
                <div
                  className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] flex flex-col items-center justify-center p-[0.25rem] box-border">
                <div
                  className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute my-0 top-[8.31rem] left-[68.63rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[5.13rem] h-[5.13rem] opacity-[0.5] z-[3] border-[1px] border-solid border-teal" />
          <div
            className="absolute my-0 top-[21.88rem] left-[75.31rem] rounded-[50%] bg-darkolivegreen [backdrop-filter:blur(10px)] box-border w-[2.75rem] h-[2.75rem] opacity-[0.5] z-[4] border-[1px] border-solid border-teal" />
        </section>
      </div>
      <div className="absolute top-[267rem] left-[calc(50%_-_720px)] w-[90rem] h-[67.94rem] text-left">
        <img
          className="absolute top-[-23.87rem] left-[66.31rem] w-[23.69rem] h-[48.15rem] object-cover opacity-[0.3]"
          alt=""
          src="/patron-6@2x.png"
        />
        <img
          className="absolute top-[11.66rem] left-[0rem] w-[43.5rem] h-[91.38rem] opacity-[0.5]"
          alt=""
          src="/ellipse-8.svg"
        />
        <img
          className="relative w-[90rem] h-[68rem] opacity-[0.4]"
          alt=""
          src="/subtract.svg"
        />
        <img
          className="absolute top-[17.63rem] left-[5.56rem] w-[42.5rem] h-[42.5rem] opacity-[0.7]"
          alt=""
          src="/group-26086169.svg"
        />
        <img
          className="absolute top-[-0.06rem] left-[0rem] rounded-t-563xl-5 rounded-b-none w-[90rem] h-[68rem] object-cover mix-blend-overlay"
          alt=""
          src="/rectangle@2x.png"
        />
        <div
          className="absolute top-[0rem] left-[calc(50%_-_584px)] rounded-t-37xl rounded-b-none flex flex-row items-start justify-start py-[5.25rem] px-[4rem] gap-[7.06rem]">
          <div className="h-[53rem] flex flex-col items-center justify-start relative gap-[3.5rem]">
            <div className="relative leading-[120%] font-semibold flex items-center w-[29.25rem] z-[0]">
              Navega con nosotros por esta galaxia de proyectos
            </div>
            <img
              className="absolute my-0 top-[14.38rem] left-[-4.69rem] w-[38.13rem] h-[38.13rem] object-cover z-[1]"
              alt=""
              src="/patron-41@2x.png"
            />
            <img
              className="absolute my-0 top-[13.44rem] left-[1.31rem] w-[26.19rem] h-[26.19rem] object-cover z-[2]"
              alt=""
              src="/obje-2@2x.png"
            />
          </div>
          <div
            className="w-[28.69rem] flex flex-col items-start justify-start gap-[2rem] text-[3.56rem] text-m3-sys-light-primary-container">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b
                  className="self-stretch relative tracking-[-0.25px] leading-[120%] [background:linear-gradient(180deg,_#ffe083_13.02%,_rgba(240,_201,_85,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  1.
                </b>
                <div className="self-stretch relative text-[1.75rem] leading-[120%] font-medium mt-[-0.5rem]">
                  El mejor equipo
                </div>
              </div>
              <div
                className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-tertiary-container">
                Tenemos un grupo que está a la altura para llevar al máximo el
                alcance de cualquier proyecto.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b
                  className="self-stretch relative tracking-[-0.25px] leading-[120%] [background:linear-gradient(180deg,_#ffe083,_rgba(255,_224,_131,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  2.
                </b>
                <div className="self-stretch relative text-[1.75rem] leading-[120%] font-medium mt-[-0.5rem]">
                  Conexiones estratégicas
                </div>
              </div>
              <div
                className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-tertiary-container">
                Contamos con una red de difusión alimentada por aliados fuertes
                que nos dan la infraestructura ideal para llevar nuestras ideas
                a más lugares de forma sorprendente
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b
                  className="self-stretch relative tracking-[-0.25px] leading-[120%] [background:linear-gradient(180deg,_#ffe083,_rgba(255,_224,_131,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  3.
                </b>
                <div
                  className="self-stretch relative text-[1.75rem] leading-[120%] font-medium mt-[-0.5rem]">{`Experiencia sideral `}</div>
              </div>
              <div
                className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-tertiary-container">
                Tenemos la fusión profesional de más alto nivel, gracias a
                nuestro trabajo con grandes clientes, marcas e instituciones
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b
                  className="self-stretch relative tracking-[-0.25px] leading-[120%] [background:linear-gradient(180deg,_#ffe083,_rgba(255,_224,_131,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  4.
                </b>
                <div className="self-stretch relative text-[1.75rem] leading-[120%] font-medium mt-[-0.5rem]">
                  Estrategias de vanguardia
                </div>
              </div>
              <div
                className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-tertiary-container">
                Estamos preparados para articular cada proyecto adaptándonos a
                sus necesidades gracias a la aplicación profesional de
                metodologías ágiles y de diseño centrados en el beneficio de la
                humanidad
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[334.94rem] left-0 w-screen h-[148.63rem] overflow-hidden">
        <Image
          className="relative w-full h-[148.39rem] object-cover"
          alt=""
          src={SubtractImage}
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[38.6rem] h-[84.54rem] opacity-[0.5]"
          alt=""
          src="/ellipse-12.svg"
        />
        <div
          className="absolute top-[0rem] left-0 h-[143.25rem] overflow-hidden w-screen mx-auto flex flex-col items-center justify-start py-[5.25rem] gap-[3.5rem]">
          <img
            className="absolute my-0 top-[19.5rem] left-[0rem] w-[24.56rem] h-[24.56rem] object-cover opacity-[0.5] z-[0]"
            alt=""
            src="/patron-42@2x.png"
          />
          <Image
            className="absolute top-0 right-0 w-[24rem] h-[24rem] opacity-[0.5] z-[1] object-contain"
            alt=""
            src={SolarSystemImage}
          />
          <img
            className="absolute my-0 top-[114.25rem] left-[57rem] w-[33rem] h-[29rem] object-cover opacity-[0.3] z-[2]"
            alt=""
            src="/patron-81@2x.png"
          />
          <img
            className="absolute my-0 top-[78.19rem] left-[0rem] w-[73rem] h-[73rem] object-cover opacity-[0.5] z-[3]"
            alt=""
            src="/patron-82@2x.png"
          />
          <div className="relative leading-[120%] font-semibold z-[4]">
            Últimas experiencias
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-[5] text-left text-[2rem] text-m3-white">
            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-23@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Universo en aislamiento
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Descubre las visiones de nuestros creadores acerca de la
                    pandemia.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-24@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Dicotomía en la biblio
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Vive este recuento de las experiencias de formación
                    desarrolladas en BibloRed Suba.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-25@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.75rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Desarrollo de talleres audiovisuales con AI en la CUN
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Sé parte de un mundo donde las historias se crean de la
                    mano de la tecnología.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-26@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Dicotomía transversal 2 “Cese al fuego”
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Viaja con nosotros a través de una nueva versión de la
                    historia.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-27@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Distrito gráfico Suba
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Hagamos un recuento de este proyecto único que promueve la
                    narrativa gráfica en la localidad.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl h-[37.81rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[0.63rem]">
              <img
                className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
                alt=""
                src="/astro-28@2x.png"
              />
              <div
                className="my-0 absolute bottom-[0rem] left-[calc(50%_-_254px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[2.5rem] font-semibold flex items-center w-[26.13rem]">
                      Contenido educativo e-learning para UNICIEO
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Transpórtate a los alcances de nuestras soluciones
                    virtuales de educación.
                  </div>
                </div>
                <div
                  className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-[1rem] text-m3-sys-light-on-primary-container">
                  <div
                    className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                    <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                      Explora aquí
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute top-[526.13rem] left-0 w-screen overflow-hidden flex flex-col items-center justify-center py-[5.25rem] gap-[7.19rem] text-m3-sys-light-on-primary-fixed-variant">
        <div
          className="absolute top-[11.28rem] left-[37.49rem] rounded-[50%] [background:linear-gradient(213.81deg,_#020200,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[57.69rem] h-[57.69rem] [transform:_rotate(120deg)] [transform-origin:0_0] opacity-[0.32] z-[0]" />

        <Image
          className="w-screen absolute top-[0.38rem] left-0 object-cover"
          alt=""
          src={BgYellowCurvedImage}
        />

        <section className="flex flex-col items-center justify-center gap-[3.5rem]">
          <div className="relative leading-[3.25rem] font-semibold">
            ¿Por qué somos el mejor equipo interestelar?
          </div>
          <div
            className="w-[65rem] flex flex-row flex-wrap items-start justify-center gap-6 text-left text-[1.75rem] text-m3-sys-dark-on-secondary">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row items-start justify-start p-[1.13rem]">
                <img
                  className="relative w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/icons8esoteric99-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                  Originalidad
                </div>
                <div
                  className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container">
                  Plasmamos nuestro sello único en todos los proyectos tomando
                  como base una estética propia que nos identifica.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row items-start justify-start p-[1.13rem]">
                <img
                  className="relative w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/icons8star99-1@2x.png"
                />
              </div>
              <div className="self-stretch h-[10rem] flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                  Personalización
                </div>
                <div
                  className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container">
                  Nuestro proceso de co-creación y diseño genera resultados
                  impactantes al lanzar proyectos juntos.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row items-start justify-start p-[1.13rem]">
                <img
                  className="relative w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/icons8bulb99-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                  Innovación
                </div>
                <div
                  className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-sys-light-on-tertiary-container">
                  Contar con un equipo provisto de grandes facultades creativas
                  es la garantía de llegar a propuestas innovadoras y
                  disruptivas.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
              <div
                className="rounded-81xl [background:linear-gradient(158.92deg,_#e8c349,_rgba(232,_195,_73,_0))] overflow-hidden flex flex-row items-start justify-start p-[1.13rem]">
                <img
                  className="relative w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/icons8rocket99-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                  Efectividad
                </div>
                <div className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[150%] text-m3-black">
                  Equilibramos talento y compromiso para alcanzar resultados de
                  alta calidad y puntualidad, siguiendo OKR y estándares KPI
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="self-stretch flex flex-col items-center justify-center relative gap-6 z-[3] text-[1.75rem] text-m3-white">
          <Image
            className="relative w-[8.25rem] h-[8.25rem] object-cover z-[0]"
            alt=""
            src={CometaImage}
          />
          <div className="self-stretch relative leading-[2.25rem] font-medium z-[1]">
            Haz parte de nuestra bitácora de viaje
          </div>
          <div
            className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center z-[2] text-[1rem] text-m3-sys-light-on-primary-container">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
              <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                Iniciar viaje
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 top-[-0.94rem] left-[-12.5rem] w-[24.75rem] h-[24.75rem] object-cover opacity-[0.2] z-[3]"
            alt=""
            src="/2-patronpppp-11@2x.png"
          />
          <Image
            className="absolute my-0 top-[-12.06rem] right-0 w-[28.26rem] h-[33.31rem] object-cover opacity-30"
            alt=""
            src={Silueta3Image}
          />
        </div>
      </section>
      <div className="absolute top-[585.69rem] left-0 w-screen h-[110.31rem] overflow-hidden text-[2.81rem]">
        <div className="absolute top-0 left-0 w-full [background:linear-gradient(180deg,_#000,_rgba(18,_31,_37,_0))] [backdrop-filter:blur(4px)] h-[110.13rem]" />
        <img
          className="absolute top-[56.47rem] left-[0rem] w-[36.16rem] h-[53.84rem] opacity-[0.5]"
          alt=""
          src="/ellipse-171.svg"
        />
        <div
          className="absolute top-[65.81rem] left-[61.87rem] rounded-[50%] [background:linear-gradient(213.81deg,_#020200,_rgba(2,_2,_0,_0))] [filter:blur(94px)] w-[57.69rem] h-[57.69rem] [transform:_rotate(15deg)] [transform-origin:0_0] opacity-[0.32]" />
        <img
          className="absolute top-[55.88rem] left-[41.87rem] w-[48.13rem] h-[54.44rem] object-cover opacity-[0.5]"
          alt=""
          src="/patron-62@2x.png"
        />

        <section id="team" className="absolute top-[0rem] left-0 w-screen flex flex-col items-center justify-start py-[5.25rem] gap-[3.5rem]">
          <div className="container mx-auto lg:min-w-[1024px]">
            <div className="flex flex-col items-center justify-start gap-6">
              <div className="relative leading-[120%] font-medium">
                Nuestros viajeros
              </div>
              <div
                className="relative text-[1.38rem] leading-[1.75rem] text-m3-sys-light-tertiary-container flex items-center justify-center mb-6">
                Este es el equipo que hará parte de todas tus aventuras a través
                de los universos que vas a explorar a nuestro lado.
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-[2rem] text-m3-white">
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0rem] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-1172@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />

                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp24@2x.png"
                />

                <div
                  className="absolute top-[15.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Karen Guerrero
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Co - CEO, Founder & Business Strategist
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_184px)] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-1173@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp25@2x.png"
                />
                <div
                  className="absolute top-[15.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Giovanni Padilla
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Co - CEO, Founder & Cultural Strategist`}</div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_184px)] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11731@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp26@2x.png"
                />
                <div
                  className="absolute top-[15.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Diego Pacheco
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Edition, Content & Writing Strategist`}</div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_184px)] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11732@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp27@2x.png"
                />
                <div
                  className="absolute top-[14.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Mardon Arismendi
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    RAE expert writer and proofreader.
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0rem] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11721@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp28@2x.png"
                />
                <div
                  className="absolute top-[17rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Laura Mediorreal
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Ilustrator & digital artist`}</div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_184px)] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11733@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp29@2x.png"
                />
                <div
                  className="absolute top-[15.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Ronald Espitia
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">
                    Audiovisual and transmedia editor, educator and scriptwriter.
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_184px)] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11734@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp30@2x.png"
                />
                <div
                  className="absolute top-[17rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Julián Mora
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Tech & Dev lead`}</div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0rem] left-0 w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11722@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp31@2x.png"
                />
                <div
                  className="absolute top-[15.5rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Isabella Jordán
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Product Designer & Research Strategist.`}</div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-m3-white w-full h-[23rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0rem] left-[calc(50%_-_165.5px)] w-[20.69rem] h-[23rem] object-cover"
                  alt=""
                  src="/image-11723@2x.png"
                />
                <div
                  className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[20.69rem] h-[23rem]" />
                <img
                  className="absolute top-[0rem] left-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  alt=""
                  src="/2-patron-pp32@2x.png"
                />
                <div
                  className="absolute top-[17rem] left-[1rem] w-[18.69rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[2.5rem] font-semibold">
                      Agostina Falanti
                    </div>
                  </div>
                  <div
                    className="self-stretch relative text-[1rem] tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container">{`Social media Strategist & Designer`}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-6 text-[1rem] text-m3-sys-light-on-primary-container">
            <img
              className="relative w-[8.25rem] h-[8.25rem] object-cover"
              alt=""
              src="/2-patron-corregido3@2x.png"
            />
            <div
              className="rounded-81xl bg-m3-sys-light-secondary-container h-[2.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0.63rem] px-[1.5rem]">
                <div className="relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                  Conocer equipo
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="absolute top-[40.19rem] left-[82.5rem] rounded-2xl bg-m3-sys-light-secondary-container shadow-[0px_8px_12px_6px_rgba(0,_0,_0,_0.15),_0px_4px_4px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center p-[1rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/icon6.svg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="absolute bottom-0 left-0 bg-m3-sys-light-inverse-surface w-full py-[5.25rem] px-2 sm:px-0 text-left text-[0.88rem] text-m3-sys-light-tertiary-container">
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-4 gap-6 auto-cols-min">
            <div className="w-3/12 flex flex-col items-start justify-start gap-[3rem]">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="h-[4.06rem] flex flex-col items-end justify-center gap-[0.63rem]">
                  <Image
                    className="relative w-[6.69rem] h-[1.88rem] object-cover"
                    alt=""
                    src={LogoNigmaImage}
                    quality={100}
                  />
                  <div className="relative w-[4.81rem] h-[2.5rem] hidden">
                    <Image
                      className="absolute top-[0rem] left-[0rem] w-[4.81rem] h-[2.5rem] object-cover hidden"
                      alt=""
                      src={LogoNigmaImage}
                    />
                  </div>
                </div>
                <div className="relative tracking-[0.25px] leading-[1.25rem] flex items-center">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Viaja a distintos universos navegando con nosotros.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Conoce nuestro sello único y la estética propia que nos
                    identifica.
                  </p>
                </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1rem]">
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame4.svg"
                  />
                  <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[13.13rem] shrink-0">
                    +57 316 3762605
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[inherit]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame5.svg"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[13.13rem]">
                      <a
                        className="text-[inherit]"
                        href="mailto:Kipow@nigmauniverse.com"
                        target="_blank"
                      >
                        ipow@nigmauniverse.com
                      </a>
                    </div>
                    <a
                      className="relative tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container flex items-center w-[13.13rem] [text-decoration:none]"
                      href="mailto:proyectonigma@gmail.com"
                      target="_blank"
                    >
                      proyectonigma@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame6.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[13.13rem]">
                      Bogotá, Colombia
                    </div>
                    <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[13.13rem]">
                      Xalapa, México
                    </div>
                    <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[13.13rem]">
                      Buenos Aires, Argentina
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/12 flex flex-col items-start justify-start gap-6">
              <Image
                className="object-cover"
                quality={100}
                alt=""
                src={MenuImage}
              />

              <div
                className="flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-m3-sys-light-tertiary-container">
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Home
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Misión
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Equipo
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Productos
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Noticias
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Servicios
                </div>
                <div className="relative tracking-[0.5px] leading-[1.5rem] flex items-center w-[9.56rem]">
                  Contactos
                </div>
              </div>
            </div>
            <div className="w-3/12 flex flex-col items-start justify-start gap-6">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <Image
                  className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                  alt=""
                  src={TermsAndCondImage}
                />
                <div className="relative leading-[1.75rem] flex items-center">
                  Términos legales
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-m3-sys-light-tertiary-container">
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
            <div className="w-3/12 flex flex-col items-start justify-start gap-6">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <img
                  className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icons8news-1-1.svg"
                />
                <div className="relative leading-[1.75rem] flex items-center">
                  Últimas noticias
                </div>
              </div>
              <div
                className="w-[20.69rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-m3-sys-light-tertiary-container">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                  <img
                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                    alt=""
                    src="/astro-2@2x.png"
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
                  <img
                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                    alt=""
                    src="/astro-21@2x.png"
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
                  <img
                    className="relative rounded w-[2rem] h-[2rem] object-cover"
                    alt=""
                    src="/astro-22@2x.png"
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
          </div>

          <div className="flex-1 flex flex-col items-start justify-start gap-6 mb-16 text-[1rem]">
            <Image
              className="object-cover"
              alt=""
              src={TagsImage}
            />

            <div className="leading-[1.75rem] text-center">
              Tags
            </div>

            <div
              className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0.5rem] text-[1rem] text-m3-sys-light-tertiary-container">
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[1.5rem]">
                  #nigma
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[1.5rem]">
                  #NigmaUniverse
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="tracking-[0.5px] leading-[1.5rem]">
                  #NigmaPlanet
                </div>
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #NigmaForce
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #NigmaConstellation
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #NigmaBooks
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="tracking-[0.5px] leading-[1.5rem]">
                  #NigmaLearning
                </div>
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #transmedia
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #crossmedia
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #hipermedia
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #editorial
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #NigmaPress
              </div>
              <div className="tracking-[0.5px] leading-[1.5rem]">
                #NigmaLive
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="tracking-[0.5px] leading-[1.5rem]">
                  #NigmaEventos
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[1.5rem]">
                  #NigmaEnseña
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
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
                  className="w-[1.5rem] h-[1.5rem] shrink-0"
                  alt=""
                  src={InstagramImage}
                />
              </Link>
              <Link href={TwitterLink}>
                <Image
                  className="w-[1.5rem] h-[1.5rem] shrink-0"
                  alt=""
                  src={TwitterImage}
                />
              </Link>
              <Link href={YouTubeLink}>
                <Image
                  className="w-[1.5rem] h-[1.5rem] shrink-0"
                  alt=""
                  src={YouTubeImage}
                />
              </Link>
              <Link href={TikTokLink}>
                <Image
                  className="w-[1.5rem] h-[1.5rem] shrink-0"
                  alt=""
                  src={TikTokImage}
                />
              </Link>
              <Link href={FacebookLink}>
                <Image
                  className="w-[1.5rem] h-[1.5rem] shrink-0"
                  alt=""
                  src={FacebookImage}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
