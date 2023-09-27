import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import About from "./Components/About.js"
import WhyApply from './Components/WhyApply';
import Roles from './Components/Roles.js'
import Contact from './Components/Contact.js'
import Thousand from './Components/Thousand.js'
import WhoApply from './Components/WhoApply.js';
import WithLove from './Components/WithLove.js';
import React from "react";
import './App.css';
import Th from "./Components/Thousand.js";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
     <Thousand />
      <WhyApply />
      <Roles />
      <WhoApply />
      <Contact />
      <WithLove />
    </div>
  );
}