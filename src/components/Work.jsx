import React from "react";
import apilogo from "../assets/api-logo1.jpg";
import app1 from "../assets/portada-proyecto.jpg";
import { useTranslation } from "react-i18next";

function Work() {
  const {t}=useTranslation();
  return (
    <div
      name="work"
      className="w-full h-full pb-24 text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold  inline border-b-4 border-blue-500 py-4">
          {t('titproj')}
          </p>
          <p className="py-8">
          {t('introproj')}
          </p>
        </div>

        {/* Efectos*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 dark:text-gray-300">
          {/* Item*/}

          <div className="max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img className="rounded-t-lg object-cover" src={app1} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-blue-500">
                 {t('protit1')}
              </h5>
              <p className="mb-3 font-normal dark:text-gray-300">
                 {t('prodesc1')}
              </p>
              <p className="dark:text-gray-400 text-sm">
                Kotlin, Firebase Firestore Firebase Autentication, Google Maps
                API y Google Places API 
              </p>
            </div>
          </div>

          {/* Item*/}

          <div className="max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img className="rounded-t-lg object-cover" src={apilogo} alt="" />
            <div className="p-5">
              <a
                href="https://github.com/Mariusrfx/CRUD-react-nodejs-mysql"
                target="_blank"
              >
                <h5 className="mb-2  text-2xl font-bold tracking-tight hover:text-blue-500">
                  Full Stack Web
                </h5>
              </a>
              <p className="mb-3 font-normal dark:text-gray-300 ">
              {t('prodesc2')}
              </p>
              <p className="dark:text-gray-400 text-sm h-30 w-full ">
                Nodejs, Express, React y MySQL
              </p>
            </div>
          </div>

          {/* Item*/}
          <div className=" max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img className="rounded-t-lg scale-30" src={apilogo} alt="" />
            <div className="p-5">
              <a href="https://github.com/Mariusrfx/Nodejs-Mysql-APIREST">
                <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-blue-500">
                {t('protit3')}
                </h5>
              </a>
              <p className="mb-3 font-normal dark:text-gray-300 ">
              {t('prodesc3')}
              </p>
              <p className="dark:text-gray-400 text-sm h-30 w-full ">
                Nodejs, Express, MySQL, Jest y Supertest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
