import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  text: string;
  path: string;
};

const LinkButton = (props: LinkButtonProps) => {
  const { text, path } = props;
  return (
    <div className="mx-5">
      <Link href={path}>
        <button className="delay-50 transition duration-300 ease-in-out hover:scale-125">
          <span className="text-[#4c5870]">{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
