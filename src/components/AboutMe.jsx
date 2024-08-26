import Box from "@mui/material/Box";

import ProfileImg from "./ProfileImg";
import WordCloud from "./WordCould";
import Grid from "@mui/material/Grid";

function AboutMe({ children }) {
  return (
    <Grid
      container
      className="about-me__container"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h2 className="main-headline">About me</h2>
        <p className="about-me-text">{children}</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h2 className="main-headline">Skills</h2>
        <WordCloud />
      </Grid>
    </Grid>
  );
}

export default AboutMe;
