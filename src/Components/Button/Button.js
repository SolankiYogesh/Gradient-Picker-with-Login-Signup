import React from "react";
import "./Button.css";

function Button({ text, style = {}, color }) {
  const styles = {
    backgroundColor: color || "#545b69",
    ...style,
  };

  return (
    <div style={styles} id="btn">
      <span id="btntext">{text}</span>
    </div>
  );
}

export default Button;
