import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExpBookImage from '../assets/exp_book.png'
import ExpBookAstroImage from '../assets/book_astro.png'
import ExpDicotomiaImage from '../assets/exp_dicotomia.png'
import ExpSubaImage from '../assets/exp_suba.png'
import ExpCunImage from '../assets/exp_cun.png'
import ExpUnicieoImage from '../assets/exp_uniceo.png'

function Allied() {
  return (
    <div>
      <section className="h-[80rem] bg-gradient-to-b from-[#004f5538] via-[#020200 10.28%] to-[#020200 20.69%]">
        <div className="container mx-auto text-center">
          <h1 className='text-m3-sys-light-secondary-container text-25xl p-10'>Nuestros Aliados</h1>
          <p className='text-white text-3xl font-montserrat max-w-2xl flex justify-center'>Estos son algunos de los importantes aliados con los que hemos compartido viajes profesionales fantásticos</p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-[5] text-left text-[2rem] text-m3-white">
            <ExperienceCard
              title="Universo en aislamiento"
              description="Descubre las visiones de nuestros creadores acerca de la pandemia."
              image={ExpBookImage}
              link="#"
              ctaLabel="Explora aquí"
            />

            <ExperienceCard
              title="Dicotomía transversal 2 “Cese al fuego”"
              description="Viaja con nosotros a través de una nueva versión de la historia."
              link="#"
              ctaLabel="Explora aquí"
              image={ExpBookAstroImage}
            />

            <ExperienceCard
              title="Dicotomía en la biblio"
              description="Vive este recuento de las experiencias de formación desarrolladas en BibloRed Suba."
              link="/"
              ctaLabel="Explora aquí"
              image={ExpDicotomiaImage}
            />

            <ExperienceCard
              title="Distrito gráfico Suba"
              description="Hagamos un recuento de este proyecto único que promueve la narrativa gráfica en la localidad."
              link="/"
              ctaLabel="Explora aquí"
              image={ExpSubaImage}
            />

            <ExperienceCard
              title="Desarrollo de talleres audiovisuales con AI en la CUN"
              description="Sé parte de un mundo donde las historias se crean de la mano de la tecnología."
              link="/"
              ctaLabel="Explora aquí"
              image={ExpCunImage}
            />

            <ExperienceCard
              title="Contenido educativo e-learning para UNICIEO"
              description="Transpórtate a los alcances de nuestras soluciones virtuales de educación."
              link="/"
              ctaLabel="Explora aquí"
              image={ExpUnicieoImage}
            />
          </div>
    </div>
  )
}

export default Allied
