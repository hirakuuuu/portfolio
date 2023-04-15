import React, { useState } from "react";

type FormTextAreaProps = {
  id: string;
  name: string;
  value: string;
  label: string;

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextArea = (props: FormTextAreaProps) => {
  const { id, name, value, label, onChange } = props;
  const [active, setActive] = useState(false);
  const isInputed = () => {
    return value !== "";
  };
  return (
    <div className="relative my-12 text-center">
      <label
        htmlFor={id}
        className={`form-label absolute m-2 bg-[#ebedec] px-2 text-[#4c5870] ${
          active ? " text-md -top-6" : " top-2.5 text-lg"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(isInputed())}
        required
      />
    </div>
  );
};

export default FormTextArea;
