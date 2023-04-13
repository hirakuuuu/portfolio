import IconButton from "@/components/molecules/IconButton";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center space-x-6">
      <IconButton
        url="https://github.com/hirakuuuu"
        image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      />
      <IconButton
        url="https://twitter.com/mohio03953327"
        image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
      />
    </div>
  );
};

export default Contact;
