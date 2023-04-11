import React from "react";
import Link from "next/link";

export type SpLinkButtonProps = {
  text: string;
  path: string;
  onClick: () => void;
};

const SpLinkButton = (props: SpLinkButtonProps) => {
  const { text, path, onClick } = props;
  return (
    <div className="block text-center">
      <Link href={path} onClick={onClick}>
        <button>
          <span className="text-xl text-[#ebedec]">{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default SpLinkButton;
