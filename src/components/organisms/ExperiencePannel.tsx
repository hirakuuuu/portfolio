import React from "react";

type ExperiencePannelProps = {
  title: string;
  date: string;
  detail: string;
};

const ExperiencePannel = (props: ExperiencePannelProps) => {
  const { title, date, detail } = props;
  return (
    <div
      className="relative border-l-2 border-solid border-[#4c5870] pb-10 pl-6 pt-12
      before:absolute before:left-6 before:top-1 before:block before:text-sm before:font-bold before:content-[attr(date-is)]
      after:absolute after:left-[-6px] after:top-2 after:block after:h-[10px] after:w-[10px] after:rounded-lg after:border-2 after:border-solid after:border-[#4c5870] after:bg-white after:content-['']"
      date-is={date}
    >
      <div className="mb-2 text-3xl">{title}</div>
      <p className="">{detail}</p>
    </div>
  );
};

export default ExperiencePannel;
