import { Box } from "@mui/material";

function OtherExp() {
  return (
    <>
      <Box
        className="other-exp__container"
        sx={{
          position: "relative",
          backgroundImage: `url("coverCode.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Overlegg for å dimme bakgrunnsbildet */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)", // Dette lager et mørkt overlegg
            zIndex: 1,
          }}
        />
        <Box
          className="education"
          sx={{
            position: "relative",
            zIndex: 2, // Sørger for at teksten vises over overlayet
            color: "#fff", // Sett tekstfarge for å gjøre det synlig
            padding: "20px", // Eksempel på padding for tekstinnhold
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
        <Box
          className="education"
          sx={{
            position: "relative",
            zIndex: 2, // Sørger for at teksten vises over overlayet
            color: "#fff", // Sett tekstfarge for å gjøre det synlig
            padding: "20px", // Eksempel på padding for tekstinnhold
          }}
        >
          <h2 className="main-headline">Other experiences</h2>
          <ul className="main-text" style={{ fontWeight: "bold" }}>
            <li>Project Management</li>
            <li>GDPR</li>
            <li>Azure ADD</li>
            <li>Office 365</li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default OtherExp;
