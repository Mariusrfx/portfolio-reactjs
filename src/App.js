import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />

      <div className="w-full h-full text-gray-300 pb-12 bg-[#0a192f] flex justify-center items-center p-4">
        <p>Web diseñada y desarrollada por Marius Romosan</p>
      </div>
    </div>
  );
}

export default App;
