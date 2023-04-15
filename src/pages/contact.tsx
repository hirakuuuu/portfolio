import React from "react";

import ContactForm from "@/components/organisms/ContactForm";
import TitleBanner from "@/components/organisms/TitleBanner";
import IconButton from "@/components/molecules/IconButton";

const Contact = () => {
  return (
    <>
      <div className="text-center">
        <TitleBanner title="Contact" />
        <div className="mt-12 text-[#4c5870]">
          ご覧いただきありがとうございます。
          <span className="md:hidden">
            <br />
          </span>
          ご連絡の際には下記フォームをご利用ください。
        </div>
        <ContactForm />
        <div className="mt-10 flex justify-center space-x-6">
          <IconButton
            url="https://github.com/hirakuuuu"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <IconButton
            url="https://twitter.com/mohio03953327"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
