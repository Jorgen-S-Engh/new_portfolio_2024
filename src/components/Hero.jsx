import { Box } from "@mui/material";
import ProfileImg from "./ProfileImg";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          backgroundColor: "#0D0D0D",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ marginBottom: "-20px" }} className="sec-headline">
            Jørgen W. Engh
          </h1>
          <h2 className="main-headline">Frontend-developer</h2>
          <a href="/CVJørgenEngh.pdf" download>
            <MainButton>
              My resume{" "}
              <FontAwesomeIcon
                icon={faCircleDown}
                style={{ marginLeft: "5px" }}
              />
            </MainButton>
          </a>
        </Box>
        <Box>
          <ProfileImg />
        </Box>
      </Box>
    </>
  );
}
export default Hero;
