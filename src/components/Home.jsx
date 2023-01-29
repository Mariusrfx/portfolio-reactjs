import React from 'react'
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className=' text-[#ccd6f6] px-1'>Hola, mi nombre es</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-blue-500 '>Marius</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>soy desarrollador</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Web Developer / QA Automation Engineer </p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-[#0a192f] transition duration-150 ease-in-out hover:bg-[#0e2341] '>Ver Proyectos <HiOutlineArrowNarrowDown/></button>
          </div>
        </div>
    </div>
  )
}

export default Home