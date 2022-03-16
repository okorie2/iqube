import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { BtnFlex } from "../../Styles/Components/Forms/PersonalFormStyle";
import {
  LightButton,
  MainButton,
} from "../../Styles/Components/Buttons/MainButton";
import { Error } from "../../Styles/Components/Forms/Input";
import FormController from "../Form Handler/FormController";

export default function PersonalInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormController
        control="input"
        defaultValue="test"
        label="name"
        border={errors.first_name && "1px solid red"}
        register={register}
        required={true}
        minLength={3}
      />
      {errors.username && <Error>This field is required</Error>}

      <FormController
        control="input"
        defaultValue="test"
        label="email address"
        register={register}
        border={errors.first_name && "1px solid red"}
        required={true}
      />
      {errors.email && <Error>This field is required</Error>}

      <FormController
        control="input"
        defaultValue="test"
        label="address1"
        border={errors.address1 && "1px solid red"}
        register={register}
        required
      />
      {errors.address1 && <Error>This field is required</Error>}

      <FormController
        control="input"
        defaultValue="test"
        label="address2"
        register={register}
        border={errors.address2 && "1px solid red"}
        required
      />
      {errors.address2 && <Error>This field is required</Error>}

      <BtnFlex>
        <MainButton type="submit">submit </MainButton>
        <LightButton>Cancel Payment</LightButton>
      </BtnFlex>
    </form>
  );
}
