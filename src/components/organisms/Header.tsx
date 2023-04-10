import React from "react";
import LinkButton from "../molecules/LinkButton";

const Header = () => {
  return (
    <header className="my-4 flex">
      <LinkButton text="home" path="/" />
      <LinkButton text="skills" path="/skills" />
      <LinkButton text="works" path="/works" />
      <LinkButton text="experiences" path="/experiences" />
      <LinkButton text="contact" path="/contact" />
    </header>
  );
};

export default Header;
