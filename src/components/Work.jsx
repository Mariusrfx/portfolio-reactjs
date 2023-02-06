import React from "react";
import apilogo from "../assets/api-logo1.jpg";
import app1 from "../assets/portada-proyecto.jpg";

function Work() {
  return (
    <div
      name="work"
      className="w-full sm:h-screen md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold  inline border-b-4 border-blue-500 py-4">
            Proyectos
          </p>
          <p className="py-6">
            //Echa un vistazo a mis proyectos más recientes:
          </p>
        </div>

        {/* Efectos*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 dark:text-gray-300">
          {/* Item*/}

          <div class="max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img class="rounded-t-lg object-cover" src={app1} alt="" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-500">
                Aplicación Android en Kotlin
              </h5>
              <p class="mb-3 font-normal dark:text-gray-300">
                Aplicación desarrollada con Kotlin para la gestión de rutas,
                paradas y conductores.
              </p>
              <p className="dark:text-gray-400 text-sm">
                Kotlin, Firebase Firestore Firebase Autentication, Google Maps
                API y Google Places API
              </p>
            </div>
          </div>

          {/* Item*/}

          <div class="max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img class="rounded-t-lg object-cover" src={apilogo} alt="" />
            <div class="p-5">
              <a
                href="https://github.com/Mariusrfx/CRUD-react-nodejs-mysql"
                target="_blank"
              >
                <h5 class="mb-2  text-2xl font-bold tracking-tight hover:text-blue-500">
                  Full Stack Web
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-300 ">
                Web para la gestión de libros desarrollada con React, Nodejs y Express.
              </p>
              <p className="dark:text-gray-400 text-sm h-30 w-full ">
                Nodejs, Express, React y MySQL
              </p>
            </div>
          </div>

          {/* Item*/}
          <div class=" max-w-flex border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <img class="rounded-t-lg scale-30" src={apilogo} alt="" />
            <div class="p-5">
              <a href="https://github.com/Mariusrfx/Nodejs-Mysql-APIREST">
                <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-500">
                  Nodejs API con Express
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-300 ">
                API desarrollada con Nodejs y Express para la gestión de
                empleados.
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
