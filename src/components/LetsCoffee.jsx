import MainButton from "./MainButton";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Grid } from "@mui/material";

const LetsCoffee = () => {
  const [height, setHeight] = useState("0px");
  const [shake, setShake] = useState(false);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <h3 style={{ marginBottom: "0px" }} className="sec-headline">
          Let's have a coffee!
        </h3>

        <FontAwesomeIcon
          className={`icon ${shake ? "shake" : ""}`}
          icon={faMugHot}
        />

        <Grid
          sx={{
            height: height,
            overflow: "hidden",
            transition: "height 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <a className="main-text" href="mailto:jorgen.we@outlook.com">
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <FontAwesomeIcon
                    icon="fa-solid fa-envelope"
                    color="#FD6C03"
                  />
                </Box>
                <Box variant="span">jorgen.we@outlook.com</Box>
              </Box>
            </a>
            <a className="main-text" href="tel:+4747079986">
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <FontAwesomeIcon icon="fa-solid fa-phone" color="#FD6C03" />
                </Box>

                <Box variant="span">47079986</Box>
              </Box>
            </a>
          </Box>
        </Grid>
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
      </Grid>
    </>
  );
};

export default LetsCoffee;
