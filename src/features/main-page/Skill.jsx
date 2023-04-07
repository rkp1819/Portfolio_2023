import React from "react";

function Skill() {
  return (
    <div className="flex  items-center justify-center cursor-pointer relative">
      <img
        className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
        src="https://placehold.it/400x400"
      />
      <div
        className="rounded-full absolute opacity-0 hover:opacity-100 bg-[rgba(50,50,50,0.6)] flex  
  items-center justify-center h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 font-semibold"
      >
        <p>100%</p>
      </div>
    </div>
  );
}

export default Skill;
