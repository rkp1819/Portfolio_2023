import React from "react";

function Sidebar() {
  return (
    <div className="text-xl text-white h-screen flex items-end flex-col justify-center p-2 mx-2 ">
      <p className="cursor-pointer hover:text-2xl hover:font-semibold p-2 ">
        About
      </p>
      <p className="cursor-pointer hover:text-2xl hover:font-semibold p-2  ">
        Experience
      </p>
      <p className="cursor-pointer hover:text-2xl hover:font-semibold p-2  ">
        Skills
      </p>
      <p className="cursor-pointer hover:text-2xl hover:font-semibold p-2  ">
        Projects
      </p>
      <p className="cursor-pointer hover:text-2xl hover:font-semibold p-2  ">
        Contact
      </p>
    </div>
  );
}

export default Sidebar;
