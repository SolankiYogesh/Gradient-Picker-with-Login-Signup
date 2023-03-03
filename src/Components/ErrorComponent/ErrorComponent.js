import React from "react";

export const ErrorComponent = ({ text, isVisible }) => {
  return (
    isVisible && (
      <div
        style={{
          color: "red",
          fontSize: 10,
          marginLeft: 10,
          marginTop: -5,
        }}
      >
        {text}
      </div>
    )
  );
};
