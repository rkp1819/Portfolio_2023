import React from "react";
import Header from "./Sidebar";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function MainPage() {
  return (
    <div className="">
      <div className="h-screen   bg-black  text-white smooth-scroll snap-y snap-mandatory overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div id="profile" className=" snap-center">
          <Profile />
        </div>
        <div id="about" className=" snap-center">
          <About />
        </div>
        <div id="experience" className=" snap-center">
          <Experience />
        </div>
        <div id="skills" className=" snap-center">
          <Skills />
        </div>
        <div id="projects" className=" snap-center">
          <Projects />
        </div>
        <div id="contact" className=" snap-center">
          <Contact />
        </div>
      </div>
      <div className="fixed top-0 right-0 hidden sm:block ">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainPage;
