import React from "react";
import { profile_constants } from "../../constants/constants";

function Profile({
  profilePicSrc = profile_constants["photoUlr"]
    ? profile_constants["photoUlr"]
    : "https://picsum.photos/800/800",
  name = profile_constants["firstname"] + " " + profile_constants["lastname"],
  position = profile_constants["designation"],
}) {
  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        <img
          src={profilePicSrc}
          className="h-48 w-48 rounded-full shadow-xl shadow-white/20 "
        />
        <p className="text-3xl text-center tracking-wider">
          {name},
          <strong className="text-2xl uppercase">{" " + position}</strong>
        </p>
      </div>
    </div>
  );
}

export default Profile;
