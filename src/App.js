import "./App.css";
import Button from "./Components/Button/Button";
import TextInput from "./Components/TextInput/TextInput";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useState } from "react";
function App() {
  const [isPassword, setISPassword] = useState(true);
  return (
    <div id="noselect" className="App">
      <img alt="background" id="background" src="/Assets/background.png"></img>
      <div id="innerDiv">
        <div id="headerVIew">
          <img
            alt="Avatar"
            class="avatar"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <span id="titleText">Anywhere App</span>

          <a href="http://localhost:3000/" id="btnText">
            Home
          </a>
          <a href="http://localhost:3000/" id="btnText">
            Join
          </a>
        </div>
        <div id="textContainerView">
          <span id="startText">START FOR FREE</span>
          <span id="createText">Create new account</span>
          <span id="alreadyMembertext">
            Already A Member?
            <a id="loginText" href="http://localhost:3000/">
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
          <Button text={"Change Password"} />
          <Button color={"#3090f4"} text={"Create Account"} />
        </div>
      </div>
    </div>
  );
}

export default App;

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
