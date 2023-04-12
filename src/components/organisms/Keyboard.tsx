import React from "react";
import SmallKeycap from "../molecules/SmallKeycap";
import MiddleKeycap from "../molecules/MiddleKeycap";
import LargeKeycap from "../molecules/LargeKeycap";
import XLargeKeycap from "../molecules/XLargeKeycap";
import SpaceKeycap from "../molecules/SpaceKeycap";

const FirstKeyLine = () => {
  return (
    <div className="key-line-1 mx-auto flex h-1/6 w-full justify-center">
      {[...Array(15)].map((_, i) => {
        return <SmallKeycap key={i} />;
      })}
    </div>
  );
};

const SecondKeyLine = () => {
  return (
    <div className="key-line-2 mx-auto flex h-1/6 w-full justify-center">
      <MiddleKeycap />
      {[...Array(12)].map((_, i) => {
        return <SmallKeycap key={i} />;
      })}
      <MiddleKeycap />
    </div>
  );
};

const ThirdKeyLine = () => {
  return (
    <div className="key-line-3 mx-auto flex h-1/6 w-full justify-center">
      <LargeKeycap />
      {[...Array(11)].map((_, i) => {
        return <SmallKeycap key={i} />;
      })}
      <XLargeKeycap />
    </div>
  );
};

const FourthKeyLine = () => {
  return (
    <div className="key-line-4 mx-auto flex h-1/6 w-full justify-center">
      <XLargeKeycap />
      {[...Array(10)].map((_, i) => {
        return <SmallKeycap key={i} />;
      })}
      <LargeKeycap />
      <SmallKeycap />
    </div>
  );
};

const FifthKeyLine = () => {
  return (
    <div className="key-line-5 mx-auto flex h-1/6 w-full justify-center pr-4 md:pr-12">
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
    <>
      <div className="overflow-hidden after:absolute after:bottom-0 after:left-0 after:top-0 after:block after:translate-y-0 after:animate-slide-mask-down after:bg-[#ebedec] "></div>
      <div className="flex justify-center">
        <div className="aspect-[1/0.39] w-[95%] max-w-[760px] bg-[#3d3d3b] md:block md:w-3/4">
          <div className="h-[10%]"></div>
          <FirstKeyLine />
          <SecondKeyLine />
          <ThirdKeyLine />
          <FourthKeyLine />
          <FifthKeyLine />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
