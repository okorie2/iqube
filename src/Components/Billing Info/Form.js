import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import {
  BtnFlex,
  SlctFlex,
  BillingContainer,
} from "../../Styles/Components/Forms/BillingFormStyle";
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
      <BillingContainer>
        <FormController
          control="input"
          defaultValue="test"
          label="Name on Card"
          register={register}
          border={errors.first_name && "1px solid red"}
          required={true}
        />
        {errors.email && <Error>This field is required</Error>}

        <FormController
          control="select"
          defaultValue="test"
          label="Card Type"
          id="select"
          register={register}
          border={errors.state && "1px solid red"}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </FormController>
        <SlctFlex>
          <FormController
            control="input"
            defaultValue="test"
            label="lg"
            register={register}
          />
          <FormController
            control="input"
            defaultValue="test"
            label="lg"
            type="date"
            register={register}
          />
          <FormController
            control="select"
            defaultValue="test"
            label="state"
            register={register}
            border={errors.state && "1px solid red"}
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </FormController>
        </SlctFlex>

        <BtnFlex>
          <MainButton type="submit">submit </MainButton>
          <LightButton>Cancel Payment</LightButton>
        </BtnFlex>
      </BillingContainer>
    </form>
  );
}
