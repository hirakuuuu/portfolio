import React from "react";

type TemplateKeycapProps = {
  ratio: string;
  delay: string;
};

const TemplateKeycap = (props: TemplateKeycapProps) => {
  const { ratio, delay } = props;
  const classes: string[] = [ratio, delay];
  const normalStyle =
    "m-0.5 animate-slide-in-bottom rounded-md border-2 border-solid border-white hover:bg-[#6E6E6C]"; // デフォルトのclass
  const activeStyle = `${normalStyle} ${classes.join(" ")}`; // デフォルトのclassと追加したいclass
  const style = props ? activeStyle : normalStyle; // どちらのスタイルを当てるかを判別
  return <div className={style}></div>;
};

export default TemplateKeycap;
