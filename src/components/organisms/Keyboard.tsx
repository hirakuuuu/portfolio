import React from "react";
import SmallKeycap from "../molecules/SmallKeycap";
import MiddleKeycap from "../molecules/MiddleKeycap";
import LargeKeycap from "../molecules/LargeKeycap";
import XLargeKeycap from "../molecules/XLargeKeycap";
import SpaceKeycap from "../molecules/SpaceKeycap";

const FirstKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
    </div>
  );
};

const SecondKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <MiddleKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <MiddleKeycap />
    </div>
  );
};

const ThirdKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <LargeKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <XLargeKeycap />
    </div>
  );
};

const FourthKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <XLargeKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <SmallKeycap />
      <LargeKeycap />
      <SmallKeycap />
    </div>
  );
};

const FifthKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center pr-12">
      <SmallKeycap />
      <MiddleKeycap />
      <SpaceKeycap />
      <MiddleKeycap />
      <SmallKeycap />
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="flex justify-center">
      <div className="hidden aspect-[1/0.39] w-3/4 max-w-[1080px] bg-[#3d3d3b] md:block">
        <div className="h-[10%]"></div>
        <FirstKeyLine />
        <SecondKeyLine />
        <ThirdKeyLine />
        <FourthKeyLine />
        <FifthKeyLine />
      </div>
    </div>
  );
};

export default Keyboard;
