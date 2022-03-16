import React from "react";
import Inputs, { SelectInput } from "./Inputs";

export default function FormController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    case "select":
      return <SelectInput {...rest} />;

    default:
      return null;
  }
}
