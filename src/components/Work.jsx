import React from 'react'
import apilogo from '../assets/api-logo.jpg';

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  inline border-b-4 border-blue-500 py-4'>Proyectos</p>
                <p className='py-8'>//Echa un vistazo a mis proyectos más recientes</p>
            </div>

             {/* Efectos*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

                 {/* Item*/}
                <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>
                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <p>Tecnologías: Express</p>
                        
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Item*/}
                <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>

                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Item*/}
                <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>

                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                      {/* Item*/}
                      <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>

                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                      {/* Item*/}
                      <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>

                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                      {/* Item*/}
                      <div style={{backgroundImage: `url(${apilogo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div '>

                    {/* Efectos*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            API REST con NodeJs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                




            </div>
        </div>
    </div>
  )
}

export default Work