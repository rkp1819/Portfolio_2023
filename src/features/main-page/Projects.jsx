import React from "react";

function Projects({ projects = [1, 2, 3, 4, 5] }) {
  return (
    <div className="h-screen  relative flex flex-col sm:flex-row max-w-full  text-left items-center justify-center mx-auto z-0">
      <h3 className="uppercase absolute top-24 text-gray-300 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-orange-400/80 overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center p-20 md:p-44 h-screen flex flex-col space-y-5 items-center justify-center"
            >
              <img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="http://placehold.it/400"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-orange-400/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>
                  UPS clone
                </h4>
                <p className="text-lg text-cener md:text-left">
                  What is a project summary? A project summary is a project
                  management tool that summarizes a project&apos;s status at a
                  moment in time. They&apos;re concise, comprehensive and
                  provide an overview of all the key details of your project.
                  Internally, project summaries demonstrate project progress at
                  a moment in time.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-orange-400/10 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
