import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Links() {
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
        <h3 className="main-headline">Links</h3>
        <Box sx={{ display: "flex", gap: 2 }}>
          <a
            href="https://www.linkedin.com/in/j%C3%B8rgen-wiksaas-engh-902669100/"
            target="_blank"
          >
            <FontAwesomeIcon className="github-icon" icon={faLinkedin} />
          </a>
          <a href="https://github.com/Jorgen-S-Engh" target="_blank">
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
          </a>
        </Box>
      </Box>
    </>
  );
}

export default Links;
