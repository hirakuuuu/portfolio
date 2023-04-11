import React from "react";
import TemplateKeycap from "./TemplateKeycap";
import { KeycapProps } from "../interface/Keycap";

const MiddleKeycap = (props: KeycapProps) => {
  const { delay } = props;
  return <TemplateKeycap ratio="aspect-[1/0.65]" delay={delay} />;
};

export default MiddleKeycap;
