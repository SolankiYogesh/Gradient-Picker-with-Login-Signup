import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import Button from "../Button/Button";
import "./Home.css";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [backgrounds, setbackGrounds] = useState([]);
  const directions = useMemo(
    () => [
      "to top",
      "to bottom",
      "to left",
      "to right",
      "to top left",
      "to top right",
      "to bottom left",
      "to bottom right",
    ],
    []
  );

  const colors = useMemo(
    () => ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40", "#0074D9", "#B10DC9"],
    []
  );

  useEffect(() => {
    getGradients();
  }, []);

  const getGradients = useCallback(() => {
    const gradients = [];
    for (let i = 0; i <= 20; i++) {
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
      const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      const gradient = `linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`;
      gradients.push(gradient);
    }
    setbackGrounds(gradients);
  }, [colors, directions]);

  const onPressGradientItem = (data) => {
    console.log("data", data);
    navigator.clipboard.writeText(data);
    openSnackbar("linear gradient coppied successfully!");
    setTimeout(() => {
      closeSnackbar();
    }, 2000);
  };

  const buttonStyle = {
    alignSelf: "center",
    width: "20%",
    backgroundColor: "#3090f4",
    marginTop: "5%",
    marginLeft: "20%",
  };

  return (
    <Fade bottom big cascade>
      <div id="parentCOntainer">
        <div id="btnHomeContainer">
          <Button
            style={buttonStyle}
            text={"Generate Backgrounds"}
            onClick={getGradients}
          />
        </div>
        <div className="MyComponent">
          {backgrounds.map((gradient, index) => (
            <Fade cascade>
              <div
                onClick={() => onPressGradientItem(gradient)}
                key={index}
                id="gradientItem"
                style={{
                  background: gradient,
                }}
              >
                <p> Click to copy background</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Home;
