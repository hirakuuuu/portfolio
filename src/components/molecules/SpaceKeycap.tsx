import React from "react";
import TemplateKeycap from "./TemplateKeycap";
import { KeycapProps } from "../interface/Keycap";

export const SpaceKeycap = (props: KeycapProps) => {
  const { delay } = props;
  return <TemplateKeycap ratio="aspect-[1/0.15]" delay={delay} />;
};

export default SpaceKeycap;
