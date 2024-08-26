import { Box } from "@mui/material";
import ProfileImg from "./ProfileImg";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

function Hero() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          backgroundColor: "#0D0D0D",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
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
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <ProfileImg />
        </Grid>
      </Grid>
    </>
  );
}
export default Hero;
