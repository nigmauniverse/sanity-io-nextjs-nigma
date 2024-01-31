import React from 'react'

import ExpBookAstroImage from '../assets/book_astro.png'
import ExpBookImage from '../assets/exp_book.png'
import ExpCunImage from '../assets/exp_cun.png'
import ExpDicotomiaImage from '../assets/exp_dicotomia.png'
import ExpSubaImage from '../assets/exp_suba.png'
import ExpUnicieoImage from '../assets/exp_uniceo.png'
import ExperienceCard from './ExperienceCard'


function Experiences() {
  return (
    <section
      className="experiences h-[50rem] lg:h-[140rem]"
    >
      <div className='container mx-auto'>
        <h1 className='text-center py-16 m-0 text-m3-sys-light-secondary-container text-26xl'>Últimas Experiencias</h1>
        <div className='flex lg:justify-center items-center overflow-x-auto pb-8 snap-center'>
          <div className='flex lg:grid grid-cols-2 px-4 gap-10 lg:max-w-5xl'>

            <ExperienceCard
              title='Universo en Aislamiento'
              description='Descubre las visiones de nuestros creadores acerca de la pandemia.'
              image={ExpBookImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />
            <ExperienceCard
              title='Dicotomía transversal 2 “Cese al fuego”'
              description='Viaja con nosotros a través de una nueva versión de la historia.'
              image={ExpBookAstroImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />
            <ExperienceCard
              title='Dicotomía en la biblio'
              description='Vive este recuento de las experiencias de formación desarrolladas en BibloRed Suba.'
              image={ExpDicotomiaImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />
            <ExperienceCard
              title='Distrito gráfico Suba'
              description='Hagamos un recuento de este proyecto único que promueve la narrativa gráfica en la localidad.'
              image={ExpSubaImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />
            <ExperienceCard
              title='Desarrollo de talleres audiovisuales con AI en la CUN'
              description='Sé parte de un mundo donde las historias se crean de la mano de la tecnología.'
              image={ExpCunImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />
            <ExperienceCard
              title='Contenido educativo e-learning para UNICIEO'
              description='Transpórtate a los alcances de nuestras soluciones virtuales de educación.'
              image={ExpUnicieoImage}
              showButton={true}
              heightLg="40rem"
              widthLg="30rem"
            />

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experiences