import React from "react";
import SmallKeycap from "../molecules/SmallKeycap";
import MiddleKeycap from "../molecules/MiddleKeycap";
import LargeKeycap from "../molecules/LargeKeycap";
import XLargeKeycap from "../molecules/XLargeKeycap";
import SpaceKeycap from "../molecules/SpaceKeycap";

const FirstKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <SmallKeycap delay="[animation-delay:0ms]" />
      <SmallKeycap delay="[animation-delay:100ms]" />
      <SmallKeycap delay="[animation-delay:200ms]" />
      <SmallKeycap delay="[animation-delay:300ms]" />
      <SmallKeycap delay="[animation-delay:400ms]" />
      <SmallKeycap delay="[animation-delay:500ms]" />
      <SmallKeycap delay="[animation-delay:600ms]" />
      <SmallKeycap delay="[animation-delay:700ms]" />
      <SmallKeycap delay="[animation-delay:800ms]" />
      <SmallKeycap delay="[animation-delay:900ms]" />
      <SmallKeycap delay="[animation-delay:1000ms]" />
      <SmallKeycap delay="[animation-delay:1100ms]" />
      <SmallKeycap delay="[animation-delay:1200ms]" />
      <SmallKeycap delay="[animation-delay:1300ms]" />
      <SmallKeycap delay="[animation-delay:1400ms]" />
    </div>
  );
};

const SecondKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <MiddleKeycap delay="[animation-delay:1500ms]" />
      <SmallKeycap delay="[animation-delay:1600ms]" />
      <SmallKeycap delay="[animation-delay:1700ms]" />
      <SmallKeycap delay="[animation-delay:1800ms]" />
      <SmallKeycap delay="[animation-delay:1900ms]" />
      <SmallKeycap delay="[animation-delay:2000ms]" />
      <SmallKeycap delay="[animation-delay:2100ms]" />
      <SmallKeycap delay="[animation-delay:2200ms]" />
      <SmallKeycap delay="[animation-delay:2300ms]" />
      <SmallKeycap delay="[animation-delay:2400ms]" />
      <SmallKeycap delay="[animation-delay:2500ms]" />
      <SmallKeycap delay="[animation-delay:2600ms]" />
      <SmallKeycap delay="[animation-delay:2700ms]" />
      <MiddleKeycap delay="[animation-delay:2800ms]" />
    </div>
  );
};

const ThirdKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <LargeKeycap delay="[animation-delay:2900ms]" />
      <SmallKeycap delay="[animation-delay:3000ms]" />
      <SmallKeycap delay="[animation-delay:3100ms]" />
      <SmallKeycap delay="[animation-delay:3200ms]" />
      <SmallKeycap delay="[animation-delay:3300ms]" />
      <SmallKeycap delay="[animation-delay:3400ms]" />
      <SmallKeycap delay="[animation-delay:3500ms]" />
      <SmallKeycap delay="[animation-delay:3600ms]" />
      <SmallKeycap delay="[animation-delay:3700ms]" />
      <SmallKeycap delay="[animation-delay:3800ms]" />
      <SmallKeycap delay="[animation-delay:3900ms]" />
      <SmallKeycap delay="[animation-delay:4000ms]" />
      <XLargeKeycap delay="[animation-delay:4100ms]" />
    </div>
  );
};

const FourthKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center">
      <XLargeKeycap delay="[animation-delay:4200ms]" />
      <SmallKeycap delay="[animation-delay:4300ms]" />
      <SmallKeycap delay="[animation-delay:4400ms]" />
      <SmallKeycap delay="[animation-delay:4500ms]" />
      <SmallKeycap delay="[animation-delay:4600ms]" />
      <SmallKeycap delay="[animation-delay:4700ms]" />
      <SmallKeycap delay="[animation-delay:4800ms]" />
      <SmallKeycap delay="[animation-delay:4900ms]" />
      <SmallKeycap delay="[animation-delay:5000ms]" />
      <SmallKeycap delay="[animation-delay:5100ms]" />
      <SmallKeycap delay="[animation-delay:5200ms]" />
      <LargeKeycap delay="[animation-delay:5300ms]" />
      <SmallKeycap delay="[animation-delay:5400ms]" />
    </div>
  );
};

const FifthKeyLine = () => {
  return (
    <div className="mx-auto flex h-1/6 w-full justify-center pr-12">
      <SmallKeycap delay="[animation-delay:5500ms]" />
      <MiddleKeycap delay="[animation-delay:5600ms]" />
      <SpaceKeycap delay="[animation-delay:5700ms]" />
      <MiddleKeycap delay="[animation-delay:5800ms]" />
      <SmallKeycap delay="[animation-delay:5900ms]" />
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="flex justify-center">
      <div className=" hidden aspect-[1/0.39] w-5/6 max-w-[760px] bg-[#3d3d3b] md:block">
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
