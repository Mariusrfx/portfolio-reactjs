import React from "react";
import angular from "../assets/angular-logo.png";
import csharp from "../assets/csharp-logo.png";
import java from "../assets/java-logo.png";
import kotlin from "../assets/kotlin-logo.png";
import node from "../assets/node-logo.png";
import symfony from "../assets/symfony-logo.png";
import react from "../assets/react-logo1.png";
import docker from "../assets/docker-logo.png";
import github from "../assets/github-logo.png";
import firebase from "../assets/firebase-logo.png";
import jenkins from "../assets/jenkins.png";
import tailwind from "../assets/tailwind-css.svg";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t}=useTranslation();
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-full pb-20">
      <div className="max-w-[1000px] mx-auto p-4 pb-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold  inline border-b-4 border-blue-500 py-4">
          {t('titletech')}
          </p>
          <p className="py-8">
          {t('introskill')}
          </p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 text-center py-8 items-center justify-center ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={java} alt="Java Icon" />
            <p>Java</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={kotlin} alt="kotlin Icon" />
            <p className="my-3">Kotlin</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={csharp} alt="Csharp Icon" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={node} alt="node Icon" />
            <p className="my-7">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img
              className="w-20 mx-auto my-5"
              src={symfony}
              alt="symfony Icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={react} alt="react Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 h-20 mx-auto" src={tailwind} alt="react Icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={angular} alt="Angular Icon" />
            <p className="my-3">Angular</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={docker} alt="docker Icon" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={jenkins} alt="Jenkins Icon" />
            <p className="my-4">Jenkins</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-20 mx-auto" src={github} alt="github Icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 transition">
            <img className="w-14 mx-auto" src={firebase} alt="Firebase Icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
