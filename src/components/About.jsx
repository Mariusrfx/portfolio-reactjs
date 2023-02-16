import React from "react";
import { useTranslation } from "react-i18next";

function About() {
    const {t}=useTranslation();
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            {t('')}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid-cols-2 grid gap-8 px-5">
          <div className="text-4xl sm:text-right font-bold">
            <p>{t('intro')}</p>
            <p>Marius Romosan </p>
            <p></p>
          </div>
          <div className="text-justify">
          {t('descript')}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
