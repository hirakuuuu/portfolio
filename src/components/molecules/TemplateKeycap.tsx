import React from "react";

type TemplateKeycapProps = {
  ratio: string;
};

const TemplateKeycap = (props: TemplateKeycapProps) => {
  const { ratio } = props;
  return (
    <div
      className={`m-0.5 aspect-${ratio} rounded-md border-2 border-solid border-white`}
    ></div>
  );
};

export default TemplateKeycap;
