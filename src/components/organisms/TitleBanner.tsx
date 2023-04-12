import React from "react";

type TitleBannerProps = {
  title: string;
};

const TitleBanner = (props: TitleBannerProps) => {
  const { title } = props;
  return (
    <div className="my-6 text-4xl font-extrabold ">
      <div className="decolation-[#4c5870] underline">{title}</div>
    </div>
  );
};

export default TitleBanner;
