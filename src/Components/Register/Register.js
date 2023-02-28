import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "../Button/Button";
import "./Register.css";
import Fade from "react-reveal/Fade";
export const Register = ({ onClick }) => {
  const [isPassword, setISPassword] = useState(true);

  return (
    <Fade right cascade>
      <div id="textContainerView">
        <span id="startText">START FOR FREE</span>
        <span id="createText">Create new account</span>
        <span id="alreadyMembertext">
          Already A Member?
          <a onClick={onClick} id="loginText" href="#">
            Log In
          </a>
        </span>
      </div>
      <div id="fieldContainer">
        <div id="rowButtonView">
          <TextInput
            placeholder={"First name"}
            iconName={solid("user")}
            style={styles.firstnameInput}
          />
          <TextInput
            placeholder={"Last name"}
            iconName={solid("user")}
            style={styles.lastnameInput}
          />
        </div>
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
        <Button color={"#3090f4"} onClick={onClick} text={"Create Account"} />
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
