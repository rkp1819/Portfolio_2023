import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="h-screen px-10 relative flex flex-col sm:flex-row max-w-7xl text-center md:text-left items-center justify-center mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-300 tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="uppercase absolute top-36 text-gray-400 tracking-[3px] text-sm">
        Hover over a Skill for currency profieciency.
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill></Skill>
        <Skill></Skill> <Skill></Skill> <Skill></Skill> <Skill></Skill>{" "}
        <Skill></Skill> <Skill></Skill> <Skill></Skill> <Skill></Skill>{" "}
        <Skill></Skill> <Skill></Skill> <Skill></Skill> <Skill></Skill>{" "}
        <Skill></Skill> <Skill></Skill> <Skill></Skill> <Skill></Skill>
      </div>
    </div>
  );
}

export default Skills;
