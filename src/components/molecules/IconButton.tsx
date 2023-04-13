import Link from "next/link";
import React from "react";

type IconButtonProps = {
  url: string;
  image: string;
};

const IconButton = (props: IconButtonProps) => {
  const { url, image } = props;
  return (
    <Link href={url}>
      <div className="w-12">
        <img src={image} />
      </div>
    </Link>
  );
};

export default IconButton;
