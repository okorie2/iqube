import React from "react";
import Inputs, { Select } from "./Inputs";

export default function FormController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    case "select":
      return <Select {...rest} />;

    default:
      return null;
  }
}
