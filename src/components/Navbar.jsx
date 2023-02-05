import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Img logo" style={{ width: "50px" }} />
      </div>
      {/*Navbar menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Tecnologías
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/*Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mí
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologías
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/*Social icons  */}
      <div className="flex md:flex mb-auto fixed flex-col top-[86%]  left-[0%]">
        <li className="flex justify-between items-cb ">
          <a href="https://es.linkedin.com/in/marius-romosan-627460b0">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex justify-between items-cb py-3">
          <a href="https://www.instagram.com/marius.r.f/">
            <FaInstagram size={30} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
