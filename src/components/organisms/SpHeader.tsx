import React from "react";
import { useState } from "react";
import SpLinkButton from "../molecules/SpLinkButton";

const SpHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(-1);
  return (
    <div className="block md:hidden">
      {isMenuVisible >= 0 && (
        <div
          className={
            "fixed left-0 top-0 z-10 block h-screen w-full animate-slide-in-up bg-[#3d3d3b]/50 " +
            (isMenuVisible === 1
              ? "animate-slide-in-up"
              : isMenuVisible === 0
              ? "animate-slide-out-up"
              : "")
          }
        >
          <ul className="flex h-full flex-col items-center justify-center p-0">
            <li className="my-4 p-0">
              <SpLinkButton
                text="home"
                path="/"
                onClick={() => setIsMenuVisible(-1)}
              />
              <SpLinkButton
                text="skills"
                path="/skills"
                onClick={() => setIsMenuVisible(-1)}
              />
              <SpLinkButton
                text="works"
                path="/works"
                onClick={() => setIsMenuVisible(-1)}
              />
              <SpLinkButton
                text="experiences"
                path="/experiences"
                onClick={() => setIsMenuVisible(-1)}
              />
              <SpLinkButton
                text="contact"
                path="/contact"
                onClick={() => setIsMenuVisible(-1)}
              />
            </li>

            <li
              className="text-md relative pl-5 text-[#ebedec]
            before:absolute before:left-0 before:top-1/2 before:block before:h-[1px] before:w-[16px] before:rotate-45 before:bg-[#ebedec] before:content-[''] 
            after:absolute after:left-0 after:top-1/2 after:block after:h-[1px] after:w-[16px] after:-rotate-45 after:bg-[#ebedec] after:content-['']"
              onClick={() => setIsMenuVisible(0)}
            >
              <span>閉じる</span>
            </li>
          </ul>
        </div>
      )}

      <div
        className="relative ml-2 mr-auto mt-4 block h-[20px] w-[25px] before:absolute 
      before:right-0 before:top-0 before:block before:h-[2px] before:w-full before:bg-[#4c5870] before:content-[''] after:absolute
      after:bottom-0 after:right-0 after:block after:h-[2px] after:w-full after:bg-[#4c5870] after:content-[''] md:hidden"
        onClick={() => setIsMenuVisible(1)}
      >
        <span className="absolute right-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-[#4c5870]"></span>
      </div>
    </div>
  );
};

export default SpHeader;
