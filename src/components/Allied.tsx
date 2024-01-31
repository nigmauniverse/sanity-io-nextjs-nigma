import Image from 'next/image'
import React from 'react'

import BrandCocaColaImage from '../assets/branc_coca-cola.svg'
import BrandAviancaImage from '../assets/brand_avianca.svg'
import BrandBancolombiaImage from '../assets/brand_bancolombia.svg'
import BrandCelsiaImage from '../assets/brand_celsia.svg'
import BrandCencosudImage from '../assets/brand_cencosud.svg'
import BrandEcciImage from '../assets/brand_ecci.svg'
import BrandLeoImage from '../assets/brand_leo.svg'
import BrandOxxoImage from '../assets/brand_oxxo.svg'
import BrandSamsungImage from '../assets/brand_samsung.svg'
import BrandSemanaImage from '../assets/brand_semana.svg'
import BrandSuraImage from '../assets/brand_sura.svg'
import BrandTridentImage from '../assets/brand_trident.svg'
import BrandUnalImage from '../assets/brand_unal.svg'

function Allied() {
  return (
      <section className="bg-gradient-to-b from-[#004f5538] via-[#020200 10.28%] to-[#020200 20.69%]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-m3-sys-light-secondary-container text-25xl pt-10">
            Nuestros Aliados
          </h1>
          <p className="text-white text-3xl font-montserrat max-w-2xl">
            Estos son algunos de los importantes aliados con los que hemos
            compartido viajes profesionales fantásticos
          </p>

          <div className="mt-8 flex w-full flex-col gap-8 opacity-60 z-[2] overflow-hidden">
            <div className="self-stretch flex flex-col flex-wrap items-start justify-center">
              <div className="flex flex-row flex-wrap item-center justify-center lg:justify-start gap-8">
                <Image
                  className="w-auto h-auto shrink-0"
                  alt=""
                  src={BrandOxxoImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt=""
                  src={BrandSamsungImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="avianca"
                  src={BrandAviancaImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="leo"
                  src={BrandLeoImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="bancolombia"
                  src={BrandBancolombiaImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="coca-cola"
                  src={BrandCocaColaImage}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col flex-wrap items-end justify-center">
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-[2.5rem]">
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="universidad nacional"
                  src={BrandUnalImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="universidad ecci"
                  src={BrandEcciImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="celsia"
                  src={BrandCelsiaImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="sura"
                  src={BrandSuraImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="cencosud"
                  src={BrandCencosudImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="trident"
                  src={BrandTridentImage}
                />
                <Image
                  className="w-auto h-auto shrink-0"
                  alt="semana"
                  src={BrandSemanaImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Allied
