import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience_constants } from "../../constants/constants";

function Experience({ organisations = experience_constants["organisations"] }) {
  return (
    <div className="h-screen px-10 relative flex flex-col sm:flex-row max-w-7xl text-center md:text-left items-center justify-center mx-auto">
      <h3 className="uppercase absolute  top-24 text-gray-300 tracking-[20px] text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-mandatory snap-x p-10 items-center justify-start   scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80 scrollbar-thin">
        {organisations.map((item, index) => {
          return <ExperienceCard key={index} organisation={item} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
