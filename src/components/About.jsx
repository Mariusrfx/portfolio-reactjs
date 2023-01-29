import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Sobre mi</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid-cols-2 grid gap-8 px-5'>
                  <div className='text-4xl sm:text-right font-bold'>
                    <p>Hola! Mi nombre es</p>
                    <p>Marius Romosan </p>
                    <p></p>
                  </div>
                  <div>
                     <p> Soy una persona organizada y con gran motivación, soy capaz de
                    adaptarme a cualquier circunstancia y dar siempre lo mejor de mí
                      en cualquier proyecto. Me encanta crear y diseñar nuevas aplicaciones. Desde siempre he sido un apasionado de la tecnología.
                       Me gusta aprender nuevos lenguajes de programacion y otros frameworks. 
                      En mi tiempo libre suelo hacer cursos en Udemy o Coursera.  </p>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default About