import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  
  return (
    <div className="">
      <Header />
      <div className="max-w-screen-xl mx-auto flex flex-col gap-2 text-neutral-800">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App
