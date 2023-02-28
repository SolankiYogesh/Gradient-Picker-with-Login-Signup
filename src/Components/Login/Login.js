import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "../Button/Button";
import "./Login.css";
import Fade from "react-reveal/Fade";

export const Login = ({ onClick, onClickForgotPassword }) => {
  const [isPassword, setISPassword] = useState(true);
  return (
    <Fade left cascade>
      <div id="textContainerView">
        <span id="startText">START FOR FREE</span>
        <span id="createText">Login</span>
        <span id="alreadyMembertext">
          Don't have account
          <a onClick={onClick} id="loginText" href="#">
            Register
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
        <TextInput
          iconName={!isPassword ? solid("eye-slash") : solid("eye")}
          isPassword={isPassword}
          placeholder={"Password"}
          style={styles.passwInput}
          onClick={() => setISPassword(!isPassword)}
        />
      </div>
      <div id="btnView">
        <Button onClick={onClickForgotPassword} text={"Change Password"} />
        <Button color={"#3090f4"} text={"Login"} />
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
