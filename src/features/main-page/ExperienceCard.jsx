import React from "react";

function ExperienceCard({ organisation }) {
  return (
    <article className="flex flex-col snap-center  rounded-lg items-center p-10 bg-zinc-800  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]">
      <img
        src="https://picsum.photos/400/600"
        className="object-cover rounded-full  h-32 w-32  lg:h-[200px] lg:w-[200px] object-center "
      />
      <div className="px-0 md:px-10 text-start">
        <h4 className="text-4xl font-light">{organisation["role"]}</h4>
        <p className="text-2xl font-bold mt-1">{organisation["name"]}</p>
        <div className="flex space-x-2 my-2 ml-5">
          {organisation["skills"].map((item, index) => {
            return (
              <img
                alt=""
                src="https://picsum.photos/200/201"
                className="rounded-full h-10 w-10"
              />
            );
          })}
        </div>
        <p className="uppercase text-gray-300 my-6 ml-2 m">
          from {organisation["from_date"].toLocaleDateString()}{" "}
          {organisation["to_date"]
            ? " to " + organisation["to_date"].toLocaleDateString()
            : " and still working"}
        </p>
        <ul className="text-lg list-disc space-y-4 ml-5">
          {organisation["summary_points"].map((summary) => {
            return <li>{summary}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
