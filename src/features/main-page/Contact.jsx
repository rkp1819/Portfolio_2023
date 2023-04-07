import React from "react";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
function Contact({ email, phone, address }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.href = `mailto:${email}?subject=${data.subject}&body=${data.message} 
    (Name: ${data.name}, Email: ${data.email})`;
  };

  return (
    <div className="h-screen px-10 relative flex flex-col sm:flex-row max-w-7xl text-center md:text-left items-center justify-center mx-auto">
      <h3 className="uppercase absolute  top-24 text-gray-300 tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col items-center space-y-10">
        <h4 className="text-4xl font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-orange-400/50">
            Let&apos;s talk.
          </span>
        </h4>
        <div className="space-y-10">
          <div className="text-xl flex align-center space-x-5">
            <BsFillTelephoneFill className="text-blue-500 animate-pulse h-7 w-7" />
            <p>+91 {phone}</p>
          </div>
          <div className="text-xl flex align-center space-x-5">
            <BsEnvelopeFill className="text-amber-700 animate-pulse h-7 w-7" />
            <p>{email}</p>
          </div>
          <div className="text-xl flex align-center space-x-5">
            <MdLocationOn className="text-green-600 animate-pulse h-7 w-7" />
            <p>{address}</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                {...register("name")}
                className="p-2 rounded-sm"
                placeholder="Name"
              />
              <input
                {...register("email")}
                type="email"
                className="p-2 rounded-sm"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              type="text"
              className="p-2 rounded-sm"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="p-2 rounded-sm"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-white py-5 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
