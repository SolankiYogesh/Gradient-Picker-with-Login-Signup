import "./App.css";

// <-- import styles to be used
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "./Assets/loading.json";
import preview from "./Assets/data.json";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";
import { ForgotPassword } from "./Components/ForgotPassword";
import Modal from "react-modal";
import Home from "./Components/Home/Home";
import SnackbarProvider from "react-simple-snackbar";
import { HeaderComponent } from "./Components/HeaderComponent";
function App() {
  const [isLoading, setISLoading] = useState(true);
  const [isLogin, setISLogin] = useState(1);
  const [isModal, setISModal] = useState(false);

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
        <HeaderComponent
          onClickButton={setISLogin}
          onClick={() => setISModal(true)}
        />
        <div id="preview">
          <Lottie animationData={preview} loop={true} />
        </div>
        {isLogin === 1 ? (
          <Login
            onClick={() => setISLogin(2)}
            onClickForgotPassword={() => setISLogin(3)}
          />
        ) : isLogin === 2 ? (
          <Register onClick={() => setISLogin(1)} />
        ) : isLogin === 3 ? (
          <ForgotPassword onClick={() => setISLogin(1)} />
        ) : (
          <SnackbarProvider>
            <Home />
          </SnackbarProvider>
        )}
      </div>

      <Modal
        isOpen={isModal}
        onRequestClose={() => setISModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          onClick={() => setISModal(false)}
          alt="Avatar"
          class="modalImage"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Modal>
    </div>
  );
}

export default App;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
