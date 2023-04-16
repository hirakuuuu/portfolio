import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import FormInputArea from "../molecules/FormInputArea";
import FormTextArea from "../molecules/FormTextArea";

type StatusType = {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: string | null };
};

type InputsType = {
  email: string;
  name: string;
  affiliation: string;
  message: string;
};

export default () => {
  const [status, setStatus] = useState<StatusType>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState<InputsType>({
    email: "",
    name: "",
    affiliation: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: string | null) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus((prevState) => {
        return {
          ...prevState,
          info: { error: true, msg: msg },
        };
      });
    }
  };
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mjvdpjza",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <div className="mx-auto w-[90%] md:w-[640px]">
        <form onSubmit={handleOnSubmit} className="">
          <div className="m-0">
            <FormInputArea
              onChange={handleOnChange}
              value={inputs.email}
              id="email"
              type="email"
              name="_replayto"
              label="メールアドレス"
            />
            <FormInputArea
              onChange={handleOnChange}
              value={inputs.name}
              id="name"
              type="text"
              name="name"
              label="お名前"
            />
            <FormInputArea
              onChange={handleOnChange}
              value={inputs.affiliation}
              id="affiliation"
              type="text"
              name="affiliation"
              label="所属（会社、大学名など）"
            />
            <FormTextArea
              onChange={handleOnChange}
              value={inputs.message}
              id="message"
              name="message"
              label="本文"
            />
            <button
              type="submit"
              disabled={status.submitting}
              className="delay-50 text-xl text-[#4c5870] transition duration-300 ease-in-out hover:scale-125"
            >
              {!status.submitting
                ? !status.submitted
                  ? "送信"
                  : "送信完了"
                : "送信中..."}
            </button>
          </div>
        </form>
        <div className="text-[#4c5870]">
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
      </div>
    </>
  );
};
