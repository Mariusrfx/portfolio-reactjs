import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import portada from "../assets/portadafull.png";
import { useTranslation } from "react-i18next";


const Home = () => {

  const {t}=useTranslation();

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full sm:grid-cols-2 sm:mt-65 md:mt-65 lg:mt-65 xl:mt-65 2xl:mt-65 grid gap-8 px-5">
          <div className="">
            <p className=" text-[#ccd6f6] px-1">{t('name')}</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-blue-500">
              Marius 
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            {t('developer')}
  
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              Web Developer / QA Automation Engineer{" "}
            </p>
            <div>
              <button>
                <Link
                  className="text-white border-2 px-6 py-3 my-2 flex items-center bg-[#0a192f] transition duration-150 ease-in-out hover:bg-[#0e2341] cursor:p"
                  to="work"
                  smooth={true}
                  duration={500}
                >
                  {t('btn_projects')}<HiOutlineArrowNarrowDown />
                </Link>
              </button>
            </div>
          </div>
          <div>
            {" "}
            <img className="ml-10" src={portada} alt="Portada Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
