import MainButton from "./components/MainButton";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Card from "./components/Card";
import projects from "./projects.json";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FAConfig";
import iconMapping from "./iconMapping";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import HeaderMenu from "./components/Header";
import Education from "./components/Education";
import OtherExperiance from "./components/OtherExperiance";
import Bio from "./components/Bio";
import Links from "./components/Links";
import LetsCoffee from "./components/LetsCoffee";
import { Grid } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "2000px",
        margin: "0 auto",
        marginBottom: "1000px;",
      }}
    >
      <ThemeProvider theme={theme}>
        <section id="home"></section>
        <HeaderMenu />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Hero />
          <section
            id="about"
            style={{ width: "100%", scrollMarginTop: "65px" }}
          >
            <AboutMe>
              I finished a two year higher professional degree in
              frontend-development in the spring of 2023. I have a masterdegree
              in political science, and I have experience working as a project
              manager and an IT-manager prior to my development-studies. I am
              currently working as a developer and team lead in a company
              specializing in cyber defence. My goal is to advance as much as
              possible as a developer. Feel free to check out my portfolio, and
              contact me regarding anything.
            </AboutMe>
            <Grid
              container
              sx={{
                display: "flex",
                width: "100%",
                backgroundColor: "#0D0D0D",
                justifyContent: "center",
              }}
            >
              <Grid item md={6} xs={12}>
                <Education />
              </Grid>
              <Grid item md={6} xs={12}>
                <OtherExperiance />
              </Grid>
            </Grid>
          </section>
          <section
            id="projects"
            style={{ width: "100%", scrollMarginTop: "65px" }}
          >
            <h3 className="main-headline">Projects</h3>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {projects.map((project) => (
                <Card key={project.number} order={-project.number}>
                  <h3 className="card-headline">{project.title}</h3>
                  <Box
                    className="project-description"
                    sx={{
                      height: "100px",
                    }}
                  >
                    <p>{project.description}</p>
                  </Box>
                  <div>
                    <a href={project.link} target="_blank">
                      <MainButton>Live Demo</MainButton>
                    </a>
                  </div>

                  {project.github ? (
                    <div className="github-icon__container">
                      <a href={project.github} target="_blank">
                        <FontAwesomeIcon
                          className="github-icon"
                          icon={["fab", "github"]}
                        />
                      </a>
                    </div>
                  ) : null}

                  {project.tech ? (
                    <h5 className="card-headline">Built with</h5>
                  ) : null}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {project.tech &&
                      project.tech.map((tech) => (
                        <FontAwesomeIcon
                          key={tech}
                          icon={iconMapping[tech]}
                          className="tech-icon"
                        />
                      ))}
                  </Box>
                </Card>
              ))}
            </Box>
          </section>
          <section style={{ width: "100%" }}>
            <Box>
              <h3 className="main-headline">Contact</h3>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Bio />
                <Links />
              </Box>
            </Box>
            <LetsCoffee />
          </section>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
