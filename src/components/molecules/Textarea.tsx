import React, { FC } from "react";

interface IFormInput {
  label: string;
  placeholder: string;
  register: any;
  required: boolean | string;
  name: string;
  errors: any;
}

const Textarea: FC<IFormInput> = (props) => {
  const { label, register, required, placeholder, name, errors } = props;

  return (
    <label className="fo-input">
      <div>{label}</div>
      <textarea
        rows={5}
        {...register(name, { required: required })}
        placeholder={placeholder}
      />
      {errors[name] && (
        <small role="alert" className="text-red-400">
          {errors[name]?.message}
        </small>
      )}
    </label>
  );
};

export default Textarea;
