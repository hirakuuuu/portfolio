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
        <div className="text-center text-[#4c5870] ">
          <Image
            src={image}
            alt={name}
            className="!relative mx-auto !max-h-[200px] !w-[50%] object-contain"
            fill
          />
          <div className="text-2xl font-bold">{name}</div>
          <div className="inline-block text-left text-lg">{detail}</div>
          <div className="flex justify-center">
            {tags.map((tag, index) => {
              return <div key={index}>{tag}</div>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
