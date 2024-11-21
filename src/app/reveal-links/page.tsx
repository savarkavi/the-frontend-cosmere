import React from "react";
import LinkText from "./LinkText";

const RevealLinks = () => {
  return (
    <div className="bg-rose-300 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <LinkText text="AMAZON" />
        <LinkText text="APPLE" />
        <LinkText text="TESLA" />
        <LinkText text="FACEBOOK" />
      </div>
    </div>
  );
};

export default RevealLinks;
