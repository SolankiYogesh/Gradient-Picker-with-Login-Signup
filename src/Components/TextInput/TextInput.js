import React, { useState } from "react";
import "./TextInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TextInputProps {
  style?: AnalyserNode;
  placeholder?: String;
  isPassword?: Boolean;
  type?: string;
  iconName?: string;
  onChange?: (text: string) => void;
  onClick?: () => void;
}

const TextInput = (props: TextInputProps) => {
  const { style, placeholder, isPassword, type, iconName, onChange, onClick } =
    props;
  const [focus, setFocus] = useState(false);
  console.log("iconName", iconName);

  const styles = {
    borderColor: !focus ? "transparent" : "#3090f4",
    ...style,
  };
  return (
    <div style={styles} id="material-textfield">
      <input
        onChange={onChange}
        type={type || (!isPassword ? "text" : "password")}
        placeholder=" "
        required="required"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div id="label">{placeholder}</div>
      {!!iconName && (
        <FontAwesomeIcon onClick={onClick} id="icon" icon={iconName} />
      )}
    </div>
  );
};

export default TextInput;
