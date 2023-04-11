import React from "react";
import TemplateKeycap from "./TemplateKeycap";
import { KeycapProps } from "../interface/Keycap";

const XLargeKeycap = (props: KeycapProps) => {
  const { delay } = props;
  return <TemplateKeycap ratio="aspect-[1/0.43]" delay={delay} />;
};

export default XLargeKeycap;
