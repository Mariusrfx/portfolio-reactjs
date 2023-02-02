import React from "react";
import apilogo from "../assets/api-logo1.jpg";
import app1 from "../assets/portada-proyecto.jpg";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  inline border-b-4 border-blue-500 py-4">
            Proyectos
          </p>
          <p className="py-6">
            //Echa un vistazo a mis proyectos más recientes.
          </p>
        </div>

        {/* Efectos*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 dark:text-gray-300">
          {/* Item*/}

          <div class="max-w-flex bg-white border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <a href="#">
              <img class="rounded-t-lg object-contain" src={app1} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                  Aplicación Android en Kotlin
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-300">
                Aplicación desarrollada con Kotlin para la gestión de rutas,
                paradas y conductores.
              </p>
              <p className="dark:text-gray-400 text-sm">
                Kotlin, Firebase Firestore Firebase Autentication
              </p>
            </div>
          </div>

          {/* Item*/}

          <div class="max-w-flex bg-white border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <a href="#">
              <img class="rounded-t-lg scale-30" src={apilogo} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                  Nodejs API con Express
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-300 ">
                API desarrollada con Nodejs y Express para la gestión de libros.
              </p>
              <p className="dark:text-gray-400 text-sm h-30 w-full ">
              Nodejs, Express, React y MySQL    
              </p>
            </div>
          </div>

          {/* Item*/}

          <div class="max-w-flex bg-white border group container  border-gray-200 rounded-lg shadow dark:bg-[#0e2344] dark:border-gray-700 mx-auto items-center justify-center ">
            <a href="#">
              <img class="rounded-t-lg scale-30" src={apilogo} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                  Nodejs API con Express
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-300 ">
                API desarrollada con Nodejs y Express para la gestión de libros.
              </p>
              <p className="dark:text-gray-400 text-sm h-30 w-full ">
                Nodejs, Express, React y MySQL  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
