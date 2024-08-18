import Box from "@mui/material/Box";

import ProfileImg from "./ProfileImg";
import WordCloud from "./WordCould";

function AboutMe({ children }) {
  return (
    <Box
      className="about-me__container"
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h2 className="main-headline">About me</h2>
        <p className="about-me-text">{children}</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h2 className="main-headline">Skills</h2>
        <WordCloud />
      </Box>
    </Box>
  );
}

export default AboutMe;
