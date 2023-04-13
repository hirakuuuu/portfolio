import React from "react";

type ExperiencePannelProps = {
  isRight: boolean;
  title: string;
  date: string;
  detail: string;
};

const ExperiencePannel = (props: ExperiencePannelProps) => {
  const { isRight, title, date, detail } = props;
  return isRight ? (
    <div className="ml-[50%] ">
      <div
        className="relative -translate-x-[1px] border-l-2 border-solid  border-[#4c5870] pb-6 pl-6 pr-6 pt-10 
        before:absolute before:left-6 before:top-1 before:block before:pt-2 before:text-sm before:font-bold before:content-[attr(date-is)] 
        after:absolute after:left-[-11px] after:top-14 after:block after:h-[20px] after:w-[20px] after:-rotate-45 after:rounded-t-xl 
        after:rounded-bl-xl after:border-2 after:border-solid  after:border-[#4c5870] after:bg-white  after:content-['']"
        date-is={date}
      >
        <div>
          <div className="mb-2 text-3xl">{title}</div>
          <p className="">{detail}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mr-[50%]">
      <div
        className="relative  translate-x-[1px] border-r-2 border-solid border-[#4c5870] pb-6 pl-6 pr-6 pt-10
      before:absolute  before:top-1 before:block before:pt-2 before:text-sm before:font-bold before:content-[attr(date-is)]
      after:absolute after:right-[-11px] after:top-14 after:block after:h-[20px] after:w-[20px] after:rotate-45 after:rounded-t-xl after:rounded-br-xl  after:border-2 after:border-solid after:border-[#4c5870] after:bg-white after:content-['']"
        date-is={date}
      >
        <div>
          <div className="mb-2 text-3xl">{title}</div>
          <p className="">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePannel;
