import React ,{useState} from 'react'
import {FaBars,FaTimes,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import Logo from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Img logo" style={{width:'50px'}}/>
        </div>
        {/*Navbar menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Sobre mi </li>
            <li>Habilidades</li>
            <li>Proyectos</li>
            <li>Contacto</li>
        </ul>

        {/*Hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10'> 
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
           
        {/*Mobile menu */}
        <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Sobre mi </li>
            <li className='py-6 text-4xl'>Habilidades</li>
            <li className='py-6 text-4xl'>Proyectos</li>
            <li className='py-6 text-4xl'>Contacto</li>
        </ul>

        {/*Social icons
        <div className='flex fixed flex-col top-[35%] left-0'>
            <li className='flex justify-between items-center ml-[-80px] '>
                <a href="https://es.linkedin.com/">
                    <FaLinkedin size={30}/>
                </a>
            </li>
        </div>
    */}
    </div>

  )
}

export default Navbar