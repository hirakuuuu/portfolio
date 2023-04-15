import React, { useState } from "react";

type FormInputAreaProps = {
  id: string;
  name: string;
  type: string;
  value: string;
  label: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInputArea = (props: FormInputAreaProps) => {
  const { id, name, type, value, label, onChange } = props;
  const [active, setActive] = useState(false);
  const isInputed = () => {
    return value !== "";
  };
  return (
    <div className="relative my-12  text-center">
      <label
        htmlFor={id}
        className={`form-label absolute m-2 bg-[#ebedec] px-2 text-[#4c5870] ${
          active ? " text-md -top-6" : " top-0 text-lg"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(isInputed())}
        required
      />
    </div>
  );
};

export default FormInputArea;
