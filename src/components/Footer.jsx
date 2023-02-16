import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";

function Footer() {
    const {t}=useTranslation();
  return (
    <div className="bg-[#0a192f] pb-12 pt-5">
      {" "}
      <div className="w-full h-full text-center text-gray-300  flex justify-center items-center p-4">
        <p>{t('footdesc')}</p>
      </div>
      <div className="flex flex-wrap justify-center">
      <li className="flex icon">
          <a href="https://es.linkedin.com/in/marius-romosan">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex icon">
          <a href="https://www.instagram.com/marius.r.f/">
            <FaInstagram size={30} />
          </a>
        </li>
        <li className="flex icon">
          <a href="https://github.com/Mariusrfx/">
            <FaGithub size={30} />
          </a>
        </li>
      </div>
  
    </div>
  );
}

export default Footer;
