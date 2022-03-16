import React from "react";
import { Link } from "react-router-dom";
import {
  LightButton,
  MainButton,
} from "../../Styles/Components/Buttons/MainButton";
import { BtnFlex } from "../../Styles/Components/Forms/BillingFormStyle";
import { ModalContainer } from "../../Styles/Components/Modals/ConfirmPaymentStyle";

export default function ConfirmPayment() {
  return (
    <>
      <ModalContainer>
        <div className="title">
          <div>Item Name</div>
          <div>Price</div>
        </div>
        <br />
        <div className="flex">
          <div>Data science and usability</div>

          <div>50,000.00</div>
        </div>
        <div className="flex">
          <div>Shipping</div>

          <div>0.00</div>
        </div>
        <hr />
        <div className="bar flex">
          <div>Total</div>
          <div>50,000.00</div>
        </div>
      </ModalContainer>

      <BtnFlex>
        <MainButton type="submit">
          <Link to="/completed">submit</Link>
        </MainButton>
        <LightButton>Cancel Payment</LightButton>
      </BtnFlex>
    </>
  );
}
