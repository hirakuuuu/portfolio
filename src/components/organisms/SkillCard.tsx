import React from "react";

type SkillCardProps = {
  name: string;
  image: string;
  detail: string;
};

const SkillCard = (props: SkillCardProps) => {
  const { name, image, detail } = props;
  return (
    <div className="my-4 text-center text-[#4c5870]">
      <img src={image} className="mx-auto w-32 md:w-24" />
      <div className="text-2xl font-bold">{name}</div>
      <div className="inline-block text-left text-lg">{detail}</div>
    </div>
  );
};

export default SkillCard;
