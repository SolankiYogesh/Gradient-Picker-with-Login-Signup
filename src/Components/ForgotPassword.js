import React from "react";
import Fade from "react-reveal/Fade";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./ForgotPassword.css";
import TextInput from "./TextInput/TextInput";
import Button from "./Button/Button";
export const ForgotPassword = ({ onClick }) => {
  return (
    <Fade top cascade>
      <div id="textContainerView">
        <span id="startText">START FOR FREE</span>
        <span id="createText">ForgotPassword</span>
        <span id="alreadyMembertext">
          <a onClick={onClick} id="loginText" href="/#">
            Login ?
          </a>
        </span>
      </div>
      <div id="fieldContainer">
        <TextInput
          iconName={solid("lock")}
          type={"email"}
          placeholder={"Email Address"}
          style={styles.passwInput}
        />
      </div>
      <div id="btnView">
        <Button color={"#3090f4"} text={"Send Link"} />
      </div>
    </Fade>
  );
};
const styles = {
  firstnameInput: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    flex: 0.45,
  },
  lastnameInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    flex: 0.45,
  },
  passwInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    flex: 1,
  },
};
