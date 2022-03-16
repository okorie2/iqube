import React from "react";
import { ModalContainer } from "../../Styles/Components/Modals/CompletedStyle";
import Tick from "../../Assets/Svgs/tick.svg";
import { Link } from "react-router-dom";
export default function Completed() {
  return (
    <>
      <ModalContainer>
        <div className="spot">
          <img src={Tick} alt="tick" width={47} />
        </div>
        <div className="text">
          <h1>Purchase Completed</h1>
          <p>Please check your email for details concerning this transaction</p>
          <p>
            <Link to="/">Return Home</Link>
          </p>
        </div>
      </ModalContainer>
    </>
  );
}
