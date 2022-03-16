import React from "react";
import {
  AuthInput,
  AuthInputContainer,
  InputContainer,
  SelectInput,
} from "../../Styles/Components/Forms/Input";

export default function Inputs(props) {
  const { label, helper, register, required, border, children, ...rest } =
    props;

  return (
    <AuthInputContainer>
      <label htmlFor={label}> {label}</label>
      <p>{helper}</p>
      <InputContainer border={border}>
        <AuthInput {...register(label, { required })} {...rest} />
        {children}
      </InputContainer>
    </AuthInputContainer>
  );
}

export function Select(props) {
  const { label, register, required, children, ...rest } = props;
  return (
    <div>
      <label htmlFor={label}> {label}</label>
      <SelectInput {...register(label, { required })} {...rest}>
        {children}
      </SelectInput>
    </div>
  );
}
