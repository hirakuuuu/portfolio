import React from "react";

type ExperiencePannelProps = {
  isRight: boolean;
  title: string;
  date: string;
  detail: string;
};

type SubExperiencePannelProps = {
  title: string;
  date: string;
  detail: string;
};

const ExperiencePannel = (props: ExperiencePannelProps) => {
  const { isRight, title, date, detail } = props;

  return isRight ? (
    <RightExperiencePannel title={title} date={date} detail={detail} />
  ) : (
    <>
      <span className="hidden md:block">
        <LeftExperiencePannel title={title} date={date} detail={detail} />
      </span>
      <span className="block md:hidden">
        <RightExperiencePannel title={title} date={date} detail={detail} />
      </span>
    </>
  );
};

const RightExperiencePannel = (props: SubExperiencePannelProps) => {
  const { title, date, detail } = props;

  return (
    <div
      className="relative -translate-x-[1px] border-l-2  border-solid border-[#4c5870] pb-6 pl-6 pt-10
        before:absolute before:left-6 before:top-1 before:block before:pt-2 before:text-sm before:font-bold 
          before:content-[attr(date-is)]  after:absolute after:left-[-11px] after:top-[54px] after:block after:h-[20px] after:w-[20px] after:rotate-45
          after:animate-rotate-to-right after:rounded-t-xl  after:rounded-bl-xl after:border-2  after:border-solid after:border-[#4c5870]
          after:bg-white after:content-[''] after:[animation-delay:1.0s] md:ml-[50%] md:pr-6 "
      date-is={date}
    >
      <div className="mb-2 text-3xl">{title}</div>
      <p className="">{detail}</p>
    </div>
  );
};

const LeftExperiencePannel = (props: SubExperiencePannelProps) => {
  const { title, date, detail } = props;
  return (
    <div
      className="relative translate-x-[1px]  border-r-2  border-solid border-[#4c5870] pb-6 pl-6 pt-10
        before:absolute before:top-1 before:block before:pt-2 before:text-sm before:font-bold before:content-[attr(date-is)] 
          after:absolute  after:right-[-11px] after:top-[54px] after:block after:h-[20px] after:w-[20px] after:rotate-45 after:animate-rotate-to-left
          after:rounded-t-xl after:rounded-bl-xl  after:border-2 after:border-solid  after:border-[#4c5870] after:bg-white after:content-[''] after:[animation-delay:1.0s] md:mr-[50%] md:pr-6"
      date-is={date}
    >
      <div className="mb-2 text-3xl">{title}</div>
      <p className="">{detail}</p>
    </div>
  );
};

export default ExperiencePannel;
