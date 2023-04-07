import React from "react";
import { about_constants } from "../../constants/constants";

function About({
  background = about_constants["summary"],
  AboutPicSrc = about_constants["photoUrl"] || "https://picsum.photos/400/600",
}) {
  return (
    <div className="h-screen px-10 relative flex flex-col  sm:flex-row max-w-7xl text-center md:text-left items-center justify-center mx-auto ">
      <h3 className="uppercase  absolute top-24 tracking-[20px] text-2xl">
        About
      </h3>{" "}
      <img
        src={AboutPicSrc}
        className="object-cover rounded-full h-56 w-56  md:rounded-lg lg:h-[600px] lg:w-[400px] "
      />
      <div className="space-y-10 flex-[0.6] md:flex-[1] overflow-y-auto px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here&apos;s a little background
        </h4>
        <p className="text-base  ">{background}</p>
      </div>
    </div>
  );
}

export default About;
