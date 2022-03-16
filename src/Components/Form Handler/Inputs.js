import React from "react";
import {
  AuthInput,
  AuthInputContainer,
  Control,
  InputContainer,
  SelectContainer,
} from "../../Styles/Components/Forms/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export function SelectInput(props) {
  const { label, register, required, children, ...rest } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 120, borderRadius: "10px" }}>
      <FormHelperText>
        <b>Without label</b>
      </FormHelperText>

      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        id="select"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
