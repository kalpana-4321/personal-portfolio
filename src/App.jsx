import React from "react";
import { Hero } from "@/Section/Hero";
import { About } from "@/Section/About";
import { Projects } from "@/Section/Projects";
import { Contact } from "@/Section/Contact"; 
import { Experience } from "@/Section/Experience";
import { Navbar } from "@/Layout/Navbar";
import { Footer } from "@/Section/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar /> 
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;