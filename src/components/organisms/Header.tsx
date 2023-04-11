import React from "react";
import { useState } from "react";
import LinkButton from "../molecules/LinkButton";
import SpLinkButton from "../molecules/SpLinkButton";

const Header = () => {
  return (
    <>
      <header className="my-4 hidden md:flex">
        <LinkButton text="home" path="/" />
        <LinkButton text="skills" path="/skills" />
        <LinkButton text="works" path="/works" />
        <LinkButton text="experiences" path="/experiences" />
        <LinkButton text="contact" path="/contact" />
      </header>
    </>
  );
};

export default Header;
