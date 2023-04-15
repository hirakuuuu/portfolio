import React from "react";

type TemplateKeycapProps = {
  ratio: string;
};

const TemplateKeycap = (props: TemplateKeycapProps) => {
  const { ratio } = props;
  const normalStyle =
    "m-px md:m-0.5 animate-slide-in-bottom rounded md:rounded-md border-2 border-solid border-white";
  const activeStyle = `${normalStyle} ${ratio}`;
  return <div className={activeStyle}></div>;
};

export default TemplateKeycap;
