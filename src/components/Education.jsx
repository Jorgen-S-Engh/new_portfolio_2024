import { Box } from "@mui/material";

function Education() {
  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="main-headline">Education</h2>
        <p style={{ fontWeight: "bold" }} className="main-text">
          Frontend-development, higher professional degree
        </p>
        <p className="main-text" style={{ fontWeight: "bold" }}>
          Political Science, masterdegree
        </p>
      </Box>
    </>
  );
}

export default Education;
