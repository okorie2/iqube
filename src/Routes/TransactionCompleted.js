import React from "react";
import Completed from "../Components/Modal/Completed";
import { HomeStyle } from "../Styles/Home/HomeStyle";

export default function TransactionCompleted() {
  return (
    <div>
      <HomeStyle.MainContainer>
        <Completed />
      </HomeStyle.MainContainer>
    </div>
  );
}
