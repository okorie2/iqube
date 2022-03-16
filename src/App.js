import { useState } from "react";
import BillingForm from "./Components/Billing Info/Form";
import ConfirmPayment from "./Components/Modal/ConfirmPayment";
import PersonalInfoForm from "./Components/Personal Info/Form";
import { Colors } from "./Styles/Colors";
import { HomeStyle } from "./Styles/Home/HomeStyle";
function App() {
  const [screen, setScreen] = useState({
    screen1: true,
    screen2: false,
    screen3: false,
  });

  const [position, setPosition] = useState("");
  const [color, setColor] = useState("");

  const displayScreens = (screen) => {
    if (screen == 1) {
      setScreen({
        screen1: true,
        screen2: false,
        screen3: false,
      });
      setPosition("-1%");
      setColor(Colors.orange);
    } else if (screen == 2) {
      setScreen({
        screen1: false,
        screen2: true,
        screen3: false,
      });
      setPosition("40%");
      setColor(Colors.orange);
    } else {
      setScreen({
        screen1: false,
        screen2: false,
        screen3: true,
      });
      setPosition("86%");
      setColor(Colors.orange);
    }
  };

  return (
    <>
      <HomeStyle.MainContainer>
        <h1>Complete Your Purchase</h1>
        <HomeStyle.SlideContainer>
          <div className="title">
            <div
              onClick={() => displayScreens(1)}
              shade={"red"}
              className="shade"
            >
              Personal Info
            </div>
            <div onClick={() => displayScreens(2)} color={color}>
              Billing Info
            </div>
            <div onClick={() => displayScreens(3)} color={color}>
              Confirm Payment
            </div>
          </div>
          <div className="slider">
            <HomeStyle.Higlight left={position} />
          </div>
        </HomeStyle.SlideContainer>
        <HomeStyle.Form>
          {screen.screen1 ? (
            <PersonalInfoForm />
          ) : screen.screen2 ? (
            <BillingForm />
          ) : (
            <ConfirmPayment />
          )}
        </HomeStyle.Form>
      </HomeStyle.MainContainer>
    </>
  );
}

export default App;
