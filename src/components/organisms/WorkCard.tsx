import Link from "next/link";
import Image from "next/image";
import React from "react";

type WorkCardProps = {
  name: string;
  detail: string;
  image: string;
  tags: string[];
  url: string;
};

const WorkCard = (props: WorkCardProps) => {
  const { name, detail, image, tags, url } = props;
  return (
    <div className="my-4">
      <Link href={url}>
        <div className="text-[#4c5870] ">
          <Image
            src={image}
            alt={name}
            className="!md:w-[50%] !relative mx-auto !max-h-[200px] !w-[90%] object-contain"
            fill
          />
        </div>
      </Link>
      <div className="text-[#4c5870]">
        <div className="my-2 text-2xl font-bold">{name}</div>
        <div className="inline-block text-left text-lg">{detail}</div>
        <div className="my-2 flex justify-center space-x-2 opacity-75">
          {tags.map((tag, index) => {
            return <div key={index}>{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
