import { Box } from "@mui/material";
function OtherExperiance() {
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
        <h2 className="main-headline">Other experiences</h2>
        <ul className="main-text" style={{ fontWeight: "bold" }}>
          <li>Project Management</li>
          <li>GDPR</li>
          <li>Azure ADD</li>
          <li>Office 365</li>
        </ul>
      </Box>
    </>
  );
}

export default OtherExperiance;
