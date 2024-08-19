import MainButton from "./MainButton";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const LetsCoffee = () => {
  const [height, setHeight] = useState("0px");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    console.log(height);
  }, [height]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginBottom: "100px",
        }}
      >
        <h3 style={{ marginBottom: "0px" }} className="sec-headline">
          Let's have a coffee!
        </h3>

        <FontAwesomeIcon
          className={`icon ${shake ? "shake" : ""}`}
          icon={faMugHot}
        />

        <Box
          sx={{
            height: height,
            overflow: "hidden",
            transition: "height 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a className="main-text" href="mailto:jorgen.we@outlook.com">
            jorgen.we@outlook.com
          </a>
          <a className="main-text" href="tel:+4747079986">
            +47 47079986
          </a>
        </Box>
        <MainButton
          onClick={() => {
            console.log("button clicked");
            setHeight((prevHeight) => (prevHeight === "0px" ? "100px" : "0px"));
            setShake(true);
            setTimeout(() => setShake(false), 500);
          }}
        >
          Contact Me
        </MainButton>
      </Box>
    </>
  );
};

export default LetsCoffee;
