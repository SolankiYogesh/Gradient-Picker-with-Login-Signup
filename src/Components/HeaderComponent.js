import React from "react";
import Fade from "react-reveal/Fade";

export const HeaderComponent = ({ onClick, onClickButton }) => {
  return (
    <Fade top>
      <div id="headerVIew">
        <img
          onClick={onClick}
          alt="Avatar"
          class="avatar"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <span id="titleText">Anywhere App</span>

        <a href="/#" id="btnText" onClick={() => onClickButton(4)}>
          Home
        </a>
        <a href="/#" id="btnText" onClick={() => onClickButton(1)}>
          Join
        </a>
      </div>
    </Fade>
  );
};
