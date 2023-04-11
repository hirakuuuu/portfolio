import React from "react";
import TemplateKeycap from "./TemplateKeycap";
import { KeycapProps } from "../interface/Keycap";

const SmallKeycap = (props: KeycapProps) => {
  const { delay } = props;
  return <TemplateKeycap ratio="aspect-square" delay={delay} />;
};

export default SmallKeycap;
