import React from 'react'
import angular from '../assets/angular-logo.png';
import csharp from '../assets/csharp-logo.png';
import java  from '../assets/java-logo.png';
import maven from '../assets/maven-logo.png';
import kotlin  from '../assets/kotlin-logo.png';
import node from '../assets/node-logo.png';
import symfony from '../assets/symfony-logo.png';
import react from '../assets/react-logo.png';
import docker from '../assets/docker-logo.png';
import github from '../assets/github-logo.png';




const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold  inline border-b-4 border-blue-500 py-4'>Habilidades</p>
                <p className='py-8'>//Estas son las tecnologías con las que he trabajado</p>
            </div>
            <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8 justify-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={java} alt='Java Icon'/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400 py-11'>
                    <img className='w-20 mx-auto' src={maven} alt='maven Icon'/>
                    <p className='my-4'>Maven</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={kotlin} alt='kotlin Icon'/>
                    <p className='my-4'>Kotlin</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={csharp} alt='Csharp Icon'/>
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={node} alt='node Icon'/>
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={symfony} alt='symfony Icon'/>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={react} alt='react Icon'/>
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={angular} alt='Angular Icon'/>
                    <p className='my-4'>Angular</p>
                </div>
                    
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={docker} alt='docker Icon'/>
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-400'>
                    <img className='w-20 mx-auto' src={github} alt='github Icon'/>
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills