import React from "react";

type TitleBannerProps = {
  title: string;
};

const TitleBanner = (props: TitleBannerProps) => {
  const { title } = props;
  return (
    <div className="my-6 text-4xl font-extrabold text-[#4c5870]">
      <span className="relative after:absolute after:bottom-[-10px] after:left-[-5%] after:inline-block after:h-1 after:w-0 after:animate-slide-line after:bg-[#4c5870] after:content-['']">
        {title}
      </span>
    </div>
  );
};

export default TitleBanner;
