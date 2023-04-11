import React from "react";
import TemplateKeycap from "./TemplateKeycap";
import { KeycapProps } from "../interface/Keycap";

const LargeKeycap = (props: KeycapProps) => {
  const { delay } = props;
  return <TemplateKeycap ratio="aspect-[1/0.55]" delay={delay} />;
};

export default LargeKeycap;
