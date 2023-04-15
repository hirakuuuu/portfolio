import React from "react";

type TitleBannerProps = {
  title: string;
};

const TitleBanner = (props: TitleBannerProps) => {
  const { title } = props;
  return (
    <div className="my-6 text-3xl font-semibold text-[#4c5870]">
      <span className="relative after:absolute after:bottom-[-5px] after:left-[-5%] after:inline-block after:h-0.5 after:w-0 after:animate-slide-line after:bg-[#4c5870] after:content-['']">
        {title}
      </span>
    </div>
  );
};

export default TitleBanner;
