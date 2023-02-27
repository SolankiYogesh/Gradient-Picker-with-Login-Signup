import "./App.css";
import Button from "./Components/Button/Button";
import TextInput from "./Components/TextInput/TextInput";
// <-- import styles to be used
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "./Assets/loading.json";
import preview from "./Assets/data.json";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";

function App() {
  const [isLoading, setISLoading] = useState(true);
  const [isLogin, setISLogin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div id="noselect" className="App">
      <Lottie animationData={loading} loop={true} />
    </div>
  ) : (
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
        {isLogin ? (
          <Login onClick={() => setISLogin(false)} />
        ) : (
          <Register onClick={() => setISLogin(true)} />
        )}
        <div id="preview">
          <Lottie animationData={preview} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
