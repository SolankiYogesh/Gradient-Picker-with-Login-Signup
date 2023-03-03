import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "../Button/Button";
import "./Register.css";
import Fade from "react-reveal/Fade";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import _ from "lodash";

export const Register = ({ onClick }) => {
  const [isPassword, setISPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [isFirstNameError, setISFirstNameError] = useState(false);
  const [isLastnameError, setISLastnameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const onClickRegister = () => {
    if (!_.trim(firstname)) {
      setISFirstNameError(true);
      return;
    }
    if (!_.trim(lastname)) {
      setISLastnameError(true);
      return;
    }
    if (!_.trim(email)) {
      setIsEmailError(true);
      return;
    }
    if (!_.trim(password)) {
      setIsPasswordError(true);
      return;
    }
  };

  return (
    <Fade right cascade>
      <div id="textContainerView">
        <span id="startText">START FOR FREE</span>
        <span id="createText">Create new account</span>
        <span id="alreadyMembertext">
          Already A Member?
          <span onClick={onClick} id="loginText" href="#">
            Log In
          </span>
        </span>
      </div>
      <div id="fieldContainer">
        <div id="rowButtonView">
          <div>
            <TextInput
              placeholder={"First name"}
              iconName={solid("user")}
              style={styles.firstnameInput}
              onChange={(text) => {
                if (isFirstNameError) {
                  setISFirstNameError(false);
                }
                setFirstname(text);
              }}
            />
            <ErrorComponent
              isVisible={isFirstNameError}
              text={"First name Required!"}
            />
          </div>
          <div>
            <TextInput
              placeholder={"Last name"}
              iconName={solid("user")}
              style={styles.lastnameInput}
              onChange={(text) => {
                if (isLastnameError) {
                  setISLastnameError(false);
                }
                setLastName(text);
              }}
            />
            <ErrorComponent
              isVisible={isLastnameError}
              text={"Last name Required!"}
            />
          </div>
        </div>
        <TextInput
          iconName={solid("lock")}
          type={"email"}
          placeholder={"Email Address"}
          style={styles.passwInput}
          onChange={(text) => {
            if (isEmailError) {
              setIsEmailError(false);
            }
            setEmail(text);
          }}
        />
        <ErrorComponent
          isVisible={isEmailError}
          text={"Email Address Required!"}
        />
        <TextInput
          iconName={!isPassword ? solid("eye-slash") : solid("eye")}
          isPassword={isPassword}
          placeholder={"Password"}
          style={styles.passwInput}
          onChange={(text) => {
            if (isPasswordError) {
              setIsPasswordError(false);
            }
            setPassword(text);
          }}
          onClick={() => setISPassword(!isPassword)}
        />
        <ErrorComponent
          isVisible={isPasswordError}
          text={"Password Required!"}
        />
      </div>
      <div id="btnView">
        <Button
          color={"#3090f4"}
          onClick={onClickRegister}
          text={"Create Account"}
        />
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
